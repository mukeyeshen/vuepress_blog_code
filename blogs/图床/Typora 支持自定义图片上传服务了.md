---
title: Typora自定义图片上传服务
date: 2020-11-22
tags:
 - 图床
categories:
  - 图床
---

![image-20200920203200745](https://gitee.com/daixiaomao/Images/raw/master/img/image-20200920203200745.png)

## 1.安装PicGo-Core

因为Typora已经原生支持PicGo-Core, 所以只需要在软件内下载一下就可以了（如下图步骤）

![img](https://gitee.com/daixiaomao/Images/raw/master/img/20200407121101434.png)

点击红色1,2步骤等待下载安装完成。

## 2. 安装插件

分别安装smms v2 API，gitee-uploader，github-plus插件来支持smms，gitee，github图床上传。
点击红色4的位置根据提示找到安装路径，

打开cmd进入当前路径，并执行安装插件（此处需要安装node.js环境支持）

```bash
cd C:\Users\jaymie\AppData\Roaming\Typora\picgo\win64
.\picgo.exe install smms-user
.\picgo.exe install gitee-uploader
.\picgo.exe install github-plus
```

![image-20200920203106180](https://gitee.com/daixiaomao/Images/raw/master/img/image-20200920203106180.png)

## 3. 配置PicGo-Core

安装完成之后点击红色4的位置， 打开PicGo-Core的配置文件, 按照下面的格式全选替换就行。切换默认上传图床直接设置current和uploader的值就可以。

```
{
  "picBed": {
    "current": "gitee",
    "uploader": "gitee",
    "githubPlus": {
      "branch": "master",
      "customUrl": "https://cdn.jsdelivr.net/gh/用户名/项目名",
      "path": "img/",
      "repo": "github用户名/github仓库名",
      "token": "自己的token"
    },
    "gitee": {
      "branch": "master",
      "customPath": "yearMonth",
      "customUrl": "",
      "path": "img/",
      "repo": "gitee用户名/gitee仓库名",
      "token": "自己的token"
    },
    "smms-user": {
      "Authorization": "替换成你自己的token"
    },
    "transformer": "path"
  },
  "picgoPlugins": {
    "picgo-plugin-gitee-uploader": true,
    "picgo-plugin-smms-user": true,
    "picgo-plugin-github-plus": true
  },
  "picgo-plugin-gitee-uploader": {
    "lastSync": "2020-04-07 11:04:58"
  },
  "picgo-plugin-github-plus": {
    "lastSync": "2020-04-07 11:09:08"
  }
}
```

![image-20200920202257708](https://gitee.com/daixiaomao/Images/raw/master/img/image-20200920202257708.png)

## 我的配置

```
{
  "picBed": {
    "current": "gitee",
    "gitee": {
      "branch": "master",
      "customPath": "yeshen",
      "path": "img/",
      "repo": "daixiaomao/Images",
      "token": "6714ce34a8235b9c7ce783c3a2f01b25"
    }
  },
  "picgoPlugins": {
    "picgo-plugin-gitee-uploader": true
  }
}
```

