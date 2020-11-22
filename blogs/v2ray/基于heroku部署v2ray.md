---
title: 基于heroku免费部署v2ray
tags:
 - V2Ray
categories:
  - V2Ray
sticky: 3
---

>  今天咱们再来介绍一款免费的vps，其实也不能算是vps，和ibm一样，都是免费供给一些程序员或开发者研究使用的一个免费计划。但在部署方面> 又要比ibm简单明了。当然，这个项目也是由GITHUB上一位大神制作，我们只需要进去部署即可！下面进入正题
<!-- more -->
## 视频教程：[点击播放](https://youtu.be/0Ut5SJUqqII)

介绍：

项目注册地址，有功底懂项目的人可进行注册使用：[点击进入](https://signup.heroku.com/)

注册使用临时邮箱 https://temp-mail.org/zh/    

https://dashboard.heroku.com/new?template=https%3A%2F%2Fgithub.com%2Fbclswl0827%2Fv2ray-heroku

**申请vps地址：[点击进入](https://dashboard.heroku.com/new?template=https%3A%2F%2Fgithub.com%2Fbclswl0827%2Fv2ray-heroku)**

github项目地址：[点击进入](https://github.com/xueliqq/v2ray-heroku/blob/master/README.md)

开始：

如图所示：输入一个可用的用户名，点击deploy app进入下一步

[
![img](https://wxf2088.xyz/wp-content/uploads/2020/09/QQ%E6%88%AA%E5%9B%BE20200909180314.png)](https://wxf2088.xyz/wp-content/uploads/2020/09/QQ截图20200909180314.png)

接下来就是耐心等待约1-2分钟，部署v2ray安装程序

[![img](https://wxf2088.xyz/wp-content/uploads/2020/09/QQ%E6%88%AA%E5%9B%BE20200909180618.png)](https://wxf2088.xyz/wp-content/uploads/2020/09/QQ截图20200909180618.png)

进入之后点击设置按钮，

[![img](https://wxf2088.xyz/wp-content/uploads/2020/09/QQ%E6%88%AA%E5%9B%BE20200909180716.png)](https://wxf2088.xyz/wp-content/uploads/2020/09/QQ截图20200909180716.png)

点击Reveal config vars查看自己的v2ray的uuid

[![img](https://wxf2088.xyz/wp-content/uploads/2020/09/QQ%E6%88%AA%E5%9B%BE20200909180752.png)](https://wxf2088.xyz/wp-content/uploads/2020/09/QQ截图20200909180752.png)

点击右上角OPEN app找到我们的ip地址，也就是分配给我们的域名：

[![img](https://wxf2088.xyz/wp-content/uploads/2020/09/QQ%E6%88%AA%E5%9B%BE20200909181032.png)](https://wxf2088.xyz/wp-content/uploads/2020/09/QQ截图20200909181032.png)[![img](https://wxf2088.xyz/wp-content/uploads/2020/09/QQ%E6%88%AA%E5%9B%BE20200909181222.png)](https://wxf2088.xyz/wp-content/uploads/2020/09/QQ截图20200909181222.png)

搭建完成，接下来就把我们的这些信息导入我们的v2ray客户端

[![img](https://wxf2088.xyz/wp-content/uploads/2020/09/QQ%E6%88%AA%E5%9B%BE20200909181440.png)](https://wxf2088.xyz/wp-content/uploads/2020/09/QQ截图20200909181440.png)

按照以上格式填写就可以正常使用！

## **使用cloudflare加速**

登陆[Cloudflare官网](https://www.cloudflare.com/)点击workers--创建--复制脚本--修改对应域名



| 12345678910 | addEventListener(  "fetch",event => {     let url=new URL(event.request.url);     url.hostname="应用名称.herokuapp.com";     let request=new Request(url,event.request);     event. respondWith(       fetch(request)     )  }) |
| ----------- | ------------------------------------------------------------ |
|             |                                                              |

自动筛选ip程序脚本：[点击下载](https://www.goyywp.xyz/uploads/kexueshangwang/better-cloudflare-ip-win32.zip)

自动筛选ip最准确的方法是关闭代理，网线直连去测试，否则容易不准确！

也可以手动筛选cloud flare支持各宽带的ip段，*号代表1-255之间任意数字



| 123456789101112131415 | CloudFlare 百度云合作 ip： 162.159.208.4-162.159.208.103 162.159.209.4-162.159.209.103 162.159.210.4-162.159.210.103 162.159.211.4-162.159.211.103 各线路推荐列表：电信：推荐走圣何塞，例：104.16.160.* 或者上面的百度云合作 ip。移动：推荐走移动香港，例：172.64.32.*、141.101.115.* 或者 104.23.240.0-104.23.243.254。联通：没发布什么好线路，可走圣何塞。例：104.16.160.* 或者 104.23.240.0-104.23.243.254。也可以试一下走亚特兰大 108.162.236.*（日前不可用。） 。 |
| --------------------- | ------------------------------------------------------------ |
|                       |                                                              |



## 负载均衡配置文件：[点击下载](https://www.goyywp.xyz/uploads/v2ray客户端负载均衡配置.zip)

代码：

```
    {
  "policy": null,
  "log": {
    "access": "",
    "error": "",
    "loglevel": "warning"
  },
  "inbounds": [
    {
      "tag": "proxy",
      "port": 10808,
      "listen": "127.0.0.1",
      "protocol": "socks",
      "sniffing": {
        "enabled": true,
        "destOverride": [
          "http",
          "tls"
        ]
      },
      "settings": {
        "auth": "noauth",
        "udp": true,
        "ip": null,
        "address": null,
        "clients": null
      },
      "streamSettings": null
    }
  ],
  "outbounds": [
    {
      "tag": "proxy",
      "protocol": "vmess",
      "settings": {
        "vnext": [
          {
            "address": "kinto01.herokuapp.com",
            "port": 443,
            "users": [
              {
                "id": "c95ef1d4-f3ac-4586-96e9-234a37dda068",
                "alterId": 64,
                "email": "t@t.tt",
                "security": "auto"
              }
            ]
          },
           {
            "address": "hao124.herokuapp.com",
            "port": 443,
            "users": [
              {
                "id": "cd5b0888-2309-42f1-9646-f2dc2870d70c",
                "alterId": 64,
                "email": "t@t.tt",
                "security": "auto"
              }
            ]
          },
		   {
            "address": "boiling-peak-71742.herokuapp.com",
            "port": 443,
            "users": [
              {
                "id": "ad806487-2d26-4636-98b6-ab85cc8521f7",
                "alterId": 64,
                "email": "t@t.tt",
                "security": "auto"
              }
            ]
          },
		  {
            "address": "fafea.herokuapp.com",
            "port": 443,
            "users": [
              {
                "id": "ad806487-2d26-4636-98b6-ab85cc8521f7",
                "alterId": 64,
                "email": "t@t.tt",
                "security": "auto"
              }
            ]
          },
		  
		    {
            "address": "afternoon-wave-33818.herokuapp.com",
            "port": 443,
            "users": [
              {
                "id": "7392abec-c908-4a89-bedb-5a4cb2aff88f",
                "alterId": 64,
                "email": "t@t.tt",
                "security": "auto"
              }
            ]
          }          
            ]  
        
		},
        "servers": null,
        "response": null,
      
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": true,
          "serverName": null
        },
        "tcpSettings": null,
        "kcpSettings": null,
        "wsSettings": {
          "connectionReuse": true,
          "path": "/",
          "headers": null
        },
        "httpSettings": null,
        "quicSettings": null
      },
      "mux": {
        "enabled": true,
        "concurrency": 8
      }
    },
    {
      "tag": "direct",
      "protocol": "freedom",
      "settings": {
        "vnext": null,
        "servers": null,
        "response": null
      },
      "streamSettings": null,
      "mux": null
    },
    {
      "tag": "block",
      "protocol": "blackhole",
      "settings": {
        "vnext": null,
        "servers": null,
        "response": {
          "type": "http"
        }
      },
      "streamSettings": null,
      "mux": null
    }
  ],
  "stats": null,
  "api": null,
  "dns": null,
  "routing": {
    "domainStrategy": "IPIfNonMatch",
    "rules": [
      {
        "type": "field",
        "port": null,
        "inboundTag": [
          "api"
        ],
        "outboundTag": "api",
        "ip": null,
        "domain": null
      }
    ]
  }
}
```

教程完毕！

下面放几张速度图

[![img](https://wxf2088.xyz/wp-content/uploads/2020/09/QQ%E6%88%AA%E5%9B%BE20200909181850.png)](https://wxf2088.xyz/wp-content/uploads/2020/09/QQ截图20200909181850.png)[![img](https://wxf2088.xyz/wp-content/uploads/2020/09/QQ%E6%88%AA%E5%9B%BE20200909181925.png)](https://wxf2088.xyz/wp-content/uploads/2020/09/QQ截图20200909181925.png)

[![img](https://wxf2088.xyz/wp-content/uploads/2020/09/QQ%E6%88%AA%E5%9B%BE20200910092121.png)](https://wxf2088.xyz/wp-content/uploads/2020/09/QQ截图20200910092121.png)

[![img](https://wxf2088.xyz/wp-content/uploads/2020/09/QQ%E5%9B%BE%E7%89%8720200909182204.png)](https://wxf2088.xyz/wp-content/uploads/2020/09/QQ图片20200909182204.png)

[![img](https://wxf2088.xyz/wp-content/uploads/2020/09/QQ%E6%88%AA%E5%9B%BE20200909182111.png)](https://wxf2088.xyz/wp-content/uploads/2020/09/QQ截图20200909182111.png)