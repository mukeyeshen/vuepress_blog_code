---
title: node环境搭建
tags:
 - Node
categories:
  - Node 
---

---

>[http://www.cnodejs.org](http://www.cnodejs.org/) 官网下载 傻瓜式安装 一直确定就行 默认安装在 C:\Program Files\nodejs

<!-- more -->

## 检测安装结果

 打开 命令行 输入 node -v 会出现node版本 输入 npm -v 会出现npm版本

## 配置npm全局环境 

在C:\Program Files\nodejs 这里新建连个文件夹 “node_global”及”node_cache” 打开cmd 用管理员 身份打开 输入命令：npm config set prefix “C:\Program Files\nodejs\node_global” 输入命令 ：npm config set cache “C:\Program Files\nodejs\node_cache”

## 配置环境变量 

在系统变量下新建”NODE_PATH”，输入”C:\Program Files\nodejs\node_global\node_modules“用户变量 用户变量”PATH”修改为“C:\Program Files\nodejs\node_global\”；

## 检查 cmd命令

 输入npm install gulp -g 然后看看 node_global文件夹有没有gulp文件

## 安装cnpm

```
npm install -g cnpm –registry=https://registry.npm.taobao.org

 cnpm install -g gulp
```

## 安装yarn

```
npm install -g yarn
```



