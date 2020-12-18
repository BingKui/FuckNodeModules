# FuckNodeModules

'node_modules' 文件夹 查找 & 删除 工具。（'node_modules' Folder Search & Delete Tools.）

## 命令（Command）

搜索（Search）

```shell
> fk -f
┌──────────────────────────────┬───────────────────────────────────────────────────────────┐
│ 项目名                        │ 地址                                                       │
├──────────────────────────────┼───────────────────────────────────────────────────────────┤
│ FuckNodeModules              │ /Users/zl/GitHub_workspace/FuckNodeModules/node_modules   │
└──────────────────────────────┴───────────────────────────────────────────────────────────┘
```

删除（Delete）

```shell
> fk -d
? 选择删除项目 (Press <space> to select, <a> to toggle all, <i> to invert selection)
◯ FuckNodeModules

```

帮助信息（Help）

```shell
> fk --help
Usage: fk [options]

Options:
  -v, --version  查看版本
  -d, --del      查询并选择删除
  -f, --find     查询
  -h, --help     display help for command
```
