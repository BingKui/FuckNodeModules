// 获取当前的系统语言
const osLocale = require('os-locale');

const { EN_TIP, ZH_TIP } = require('../constants/i18n');

/**
 * 获取本地化的提示信息
 */
const getLocalTip = () => {
    const language = osLocale.sync();
    if (language === 'zh-CN') {
        return ZH_TIP;
    } else {
        return EN_TIP;
    }
};

/**
 * 获取数据
 * @param {Array} list 数组
 */
const getListArray = (list) => {
    const result = [];
    list.forEach(item => {
        const arr = item.path.split('/');
        const name = arr[arr.length - 2];
        result.push({
            name,
            value: item.path,
            short: name,
            size: item.size,
            sizeText: item.sizeText,
        });
    });
    return result;
};

module.exports = {
    getLocalTip,
    getListArray,
};