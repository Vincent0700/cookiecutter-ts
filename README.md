# Typescript 基础模板创建工具

## Feature

1. 基础配置文件生成
    - package.json
    - LICENSE
    - README.md

2. git 相关配置文件生成
    - .gitignore
    - .huskyrc.js
    - .lintstagedrc.js
    - .commitlintrc.js

3. typescript 相关配置文件生成
    - tsconfig.json

4. webpack 打包配置
    - build/webpack.config.js
    
5. eslint 相关配置文件生成
    - .eslintrc.js
    - .eslintignore
    - .prettierrc.js
    - .editorconfig
    - .vscode/settings.json

6. 生成完毕后执行 `yarn install`

## Usage

1. 安装 `cookiecutter`

```bash
$ pip install cookiecutter
```

2. 使用模板

```bash
$ cookiecutter gh:vincent0700/cookiecutter-ts

project_name [project_name]: demo
author [vincent0700 (https://vincentstudio.info)]:
email [wang.yuanqiu007@gmail.com]:
description [say somthing]: a demo project
```

3. eslint

```bash
yarn lint
```

5. build

```bash
yarn build
```
