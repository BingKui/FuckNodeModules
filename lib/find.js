// 命令行loading工具
const ora = require('ora');
const ConsoleGrid = require("console-grid");
const grid = new ConsoleGrid();
const { getFolderListByName } = require('../common/find');
const { getLocalTip, getListArray }  = require('../common/utils');
const TIP_INFO = getLocalTip().question;
const TIP_INFO_HELO = getLocalTip().helpInfo;
const cwd = process.cwd();

module.exports = function (args) {
    const spinnerFind = ora(TIP_INFO.findLoading);
    spinnerFind.start();
    getFolderListByName('node_modules', cwd).then(list => {
        spinnerFind.stop();
        const _list = getListArray(list);
        const options = {
            option: {
                sortField: 'name',
            },
            columns: [{
                id: 'name',
                name: TIP_INFO_HELO.project,
                type: 'string',
                maxWidth: 100,
            }, {
                id: 'value',
                name: TIP_INFO_HELO.folder,
                type: 'string',
                maxWidth: 350,
            }],
            rows: _list,
        };
        grid.render(options);
    });
};