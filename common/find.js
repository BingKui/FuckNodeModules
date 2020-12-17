const fs = require('fs');
const fsExtra = require('fs-extra');
const os = require('os');

const white_list = ['Applications', 'Applications (Parallels)', 'Desktop', 'Movies', 'Music', 'Documents', 'Downloads', 'Pictures', 'Library', 'Public'];

/**
 * 根据名称查询到所有的目录地址
 * @param {String} name 名字
 * @param {String} basePath 基础目录
 */
const getFolderListByName = (name, basePath) => {
    let result = [];
    return new Promise((resolve, reject) => {
        fs.readdir(basePath || os.homedir(), async (err, list) => {
            for (let i = 0; i < list.length; i++) {
                const item = list[i];
                const itemState = fs.statSync(`${basePath}/${item}`);
                if (white_list.indexOf(item) > -1 || item.indexOf('.') === 0) {
                    continue;
                }
                if (itemState.isDirectory()) {
                    if (item === name) {
                        result.push(`${basePath}/${item}`);
                    } else {
                        const arr = await getFolderListByName(name, `${basePath}/${item}`);
                        result = [...result, ...arr];
                    }
                }
            }
            resolve(result);
        });
    });
};

/**
 * 判断文件夹是否存在
 * @param {String} folderPath 文件夹地址
 */
const isHaveFolder = (folderPath) => {
    console.log('路径地址', folderPath);
    return fs.existsSync(folderPath);
};

/**
 * 删除文件夹
 * @param {String} delPath 文件地址
 */
const removeFolder = (delPath) => {
    return new Promise((reslove, reject) => {
        if (isHaveFolder(delPath)) {
            fsExtra.remove(delPath, (error) => {
                if (error) {
                    console.log('删除出错', error);
                    reslove(false);
                    return;
                }
                reslove(true);
            });
        } else {
            reslove(true);
        }
    });
};

module.exports = {
    getFolderListByName,
    isHaveFolder,
    removeFolder,
};