---
title: 基于kintohub免费空间部署v2ray
tags:
 - V2Ray
categories:
  - V2Ray
sticky: 2
---

> 提醒： 免费空间请不要滥用！！！
> 本项目支持部署kintohub和heroku两个空间，下面是部署到kintohub方法，部署到heroku方法请见：[Deploy to Heroku]> (https://github.com/yeahwu/kinto/blob/master/v2-heroku.md)
> 利用kintohub免费空间部署v2ray和tor，部署成功后，可用v2ray客户端直接访问tor网络，比如暗网.onion，v2ray.json文件中设置了路由分流了tor网络，非tor流量不受影响。
<!-- more -->

## 个人成功搭建地址

```
yeshen-99d4a5.us1.kinto.io
```

## 注册 请翻墙注册  国内ip被kintohub封了

区域选取北美或者欧洲，亚洲凉了

## 部署服务端

1. 点开 https://app.kintohub.com/ 新建一个APP，点击 Create Service ,然后创建 Web App 如图：

![](https://gitee.com/daixiaomao/Images/raw/master/img/20200918085120.png)

1. Repository 填上git链接和默认分支master

![](https://gitee.com/daixiaomao/Images/raw/master/img/20200918085218.png)

1. Build Settings 文件名填写Dockerfile，端口填上8888，填写如下：

![](https://gitee.com/daixiaomao/Images/raw/master/img/20200918085240.png)

最后点击右上角 Deploy，部署完成，会生成一个链接，点击链接，如果显示Bad Request，即为成功。

![](https://gitee.com/daixiaomao/Images/raw/master/img/20200918082839.png) 

## 客户端配置

客户端配置看图吧，不多讲：

![](https://gitee.com/daixiaomao/Images/raw/master/img/20200918085316.png)

默认UUID：

```
c95ef1d4-f3ac-4586-96e9-234a37dda068
```

## 连接测试

![](https://gitee.com/daixiaomao/Images/raw/master/img/20200918084717.png)

## 开启CF加速

[cloudflare]( https://dash.cloudflare.com/)   https://dash.cloudflare.com/

![](https://gitee.com/daixiaomao/Images/raw/master/img/20200918100720.png)



![](https://gitee.com/daixiaomao/Images/raw/master/img/20200918100614.png)

CF worker脚本：

```
addEventListener(
"fetch",event => {
let url=new URL(event.request.url);
url.hostname="填写你的域名";
let request=new Request(url,event.request);
event. respondWith(
fetch(request)
)})
```

代码：

```
addEventListener(
"fetch",event => {
let url=new URL(event.request.url);
url.hostname="yeshen-99d4a5.us1.kinto.io";  //ip
let request=new Request(url,event.request);
event. respondWith(
fetch(request)
)
}
)
```

![](https://gitee.com/daixiaomao/Images/raw/master/img/20200918101116.png)

这个就行啦

下面的参考学习吧 有时慢有时快



通过cloudflare软件筛选更快cloudflare的 ip   

```
104.20.216.76

104.17.231.69 启动测速
104.17.232.189 启动测速
104.17.234.107 启动测速
104.17.233.223 启动测速
104.17.237.136 启动测速
104.17.235.228 启动测速
1.0.0.77 启动测速
104.17.238.172 启动测速
104.17.236.136 启动测速
104.17.239.104 启动测速
104.17.24.192 启动测速
104.17.240.204 启动测速
104.17.242.166 启动测速
104.17.244.115 启动测速
104.17.241.133 启动测速
104.17.245.12 启动测速
104.17.243.244 启动测速
1.1.1.92 启动测速
104.16.1.84 启动测速
104.16.0.176 启动测速
104.16.101.212 启动测速
104.16.100.145 启动测速
104.16.102.62 启动测速
104.16.103.198 启动测速
104.16.105.112 启动测速
104.16.106.199 启动测速
104.16.107.17 启动测速
104.16.109.137 启动测速
104.16.11.115 启动测速
104.16.112.82 启动测速
104.16.108.250 启动测速
104.16.110.76 启动测速
104.16.113.63 启动测速
104.16.114.246 启动测速
104.16.111.51 启动测速
104.16.115.242 启动测速
104.16.116.246 启动测速
104.16.117.142 启动测速
104.16.118.118 启动测速
104.17.246.229 启动测速
104.16.12.253 启动测速
104.17.247.3 启动测速
104.17.249.86 启动测速
104.17.25.156 启动测速
104.17.251.4 启动测速
104.17.250.15 启动测速
104.16.120.216 启动测速
104.16.121.140 启动测速
104.16.122.103 启动测速
104.16.123.235 启动测速
104.16.124.5 启动测速
104.16.125.219 启动测速
104.17.252.183 启动测速
104.17.254.178 启动测速
104.17.253.88 启动测速
104.17.27.32 启动测速
104.17.26.29 启动测速
104.17.28.145 启动测速
104.17.29.70 启动测速
104.17.3.225 启动测速
104.16.129.100 启动测速
104.17.31.177 启动测速
104.17.30.33 启动测速
104.16.127.167 启动测速
104.17.32.192 启动测速
104.17.33.133 启动测速
104.17.34.137 启动测速
104.16.128.24 启动测速
104.16.130.72 启动测速
104.17.35.61 启动测速
104.17.38.196 启动测速
104.16.132.236 启动测速
104.16.133.221 启动测速
104.16.131.154 启动测速

```

![](https://gitee.com/daixiaomao/Images/raw/master/img/20200918103154.png)

ok了。

![](https://gitee.com/daixiaomao/Images/raw/master/img/20200918103430.png)

