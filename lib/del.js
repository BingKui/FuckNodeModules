// 交互式命令界面
const inquirer = require('inquirer');
// 命令行loading工具
const ora = require('ora');

const { getFolderListByName, removeFolder } = require('../common/find');
const { getLocalTip, getListArray }  = require('../common/utils');

const TIP_INFO = getLocalTip().question;
const cwd = process.cwd();

module.exports = function (args) {
    const spinnerInstall = ora(TIP_INFO.findLoading);
    spinnerInstall.start();
    getFolderListByName('node_modules', cwd).then(list => {
        spinnerInstall.stop();
        const question = [{
            type: 'checkbox',
            name: 'list',
            message: TIP_INFO.list,
            choices: getListArray(list),
        }];
        const spinnerDelete = ora(TIP_INFO.delTip);
        inquirer.prompt(question).then(async (answers) => {
            console.log(answers);
            // 执行删除命令
            for(let i = 0; i < answers.list.length; i++) {
                const item = answers.list[i];
                spinnerDelete.start();
                await removeFolder(item);
                spinnerDelete.stop();
                console.log(`${item}删除成功`);
            }
        });
    });
};