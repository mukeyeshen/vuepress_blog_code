---
title: 随手记
date: 2020-11-22
tags:
 - 随手记
categories:
  - NoteBook
sticky: 1
---

> 你就是我的流星雨请你永远停留在我的心里我想永远爱你！让你超级甜~   呆呆小妞
>
> ベ 时光踏路已久々   突然萌了ら   向前冲，吧！

<!-- more -->


## Git分支使用

![image-20200926160255908](https://gitee.com/daixiaomao/Images/raw/master/img/image-20200926160255908.png)



## Git切换分支

![image-20200926220006193](https://gitee.com/daixiaomao/Images/raw/master/img/image-20200926220006193.png)

```shell
$ git checkout -b v0.9rc1 origin/v0.9rc1
Branch v0.9rc1 set up to track remote branch v0.9rc1 from origin.
Switched to a new branch 'v0.9rc1'

＃已经切换到v0.9rc1分支了
$ git branch
  master
* v0.9rc1

＃切换回master分支
$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.
```



## Git分支合并到master

![image-20200926220859712](https://gitee.com/daixiaomao/Images/raw/master/img/image-20200926220859712.png)





## 发布项目到gh-pages 分支

1.进入build文件夹下

```bash
cd build
```

2.git初始化

```bash
git init
```

3.创建gh-pages分支

```bash
git checkout --orphan gh-pages
```

4.添加文件到暂存区

```bash
git add .
```

5.添加信息

```bash
git commit -m "init project"
```

6.设置远程仓库地址

```bash
git remote add origin https://github.com/chenyeshen/note-book.git
```

7.推送项目到 gh-pages分支

```bash
git push origin gh-pages
```



```bash
git push -f git@github.com:chenyeshen/note-book.git master:gh-pages
```



## idea 查看类继承关系的快捷键

![](https://i.loli.net/2020/01/01/CgeV9LqxT3cunwa.png)



## idea 查看类继承关系和类结构

![](https://i.loli.net/2020/01/01/cf5Tn3s9zqpjDVv.png)



## idea多个端口运行一个程序

![](https://i.loli.net/2019/12/27/j8a9K1ibsAZcY5t.png)

![](https://i.loli.net/2019/12/27/uIOo5mwHDqy3Ezj.png)

## 双重锁单例模式

```
public class singleton{
   private static  volatile  singleton instance;
   private singleton(){
       System.out.println("我是单例模式哟");
   }
   public static  singleton getInstance(){
       if (instance==null){
           synchronized(singleton.class){
               if (instance==null){
                   instance = new singleton();
               }
           }
       }
       return  instance;
   }
}

```



## 绝对线程安全的静态内部类单例实现

```java
/**
 * 单例有很多种方法实现：采取绝对线程安全的一种方式
 *  静态内部类的方式，去初始化单例
 */
public class RequestProcessorThreadPool {

     private  static class  Singleton {
         private static RequestProcessorThreadPool instance;

         static {
             instance = new RequestProcessorThreadPool();
         }

         private static RequestProcessorThreadPool getInstance() {
              return  instance;
         }



     }

     public static RequestProcessorThreadPool getInstance(){
         return Singleton.getInstance();
     }
}

```



```java
package com.sze.redis;

import javax.annotation.PostConstruct;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ClusterTest {
    
    @Autowired
    StringRedisTemplate redisTemplate;
    
    ValueOperations<String, String> stringRedis;
    
    @PostConstruct
    public void init(){
        stringRedis=redisTemplate.opsForValue();
    }
    
    
    @Test
    public void testString (){
        stringRedis.set("name", "丁洁");
        System.out.println(stringRedis.get("name"));
    }
}
```

## 使用Cmder替换cmd

在系统属性里面配置环境变量，将`Cmder.exe`所在文件路径添加至`Path`里

以管理员身份打开`cmd`，执行以下命令即可，完了以后在任意地方点击右键即可使用cmder

```
// 设置任意地方鼠标右键启动Cmder
Cmder.exe /REGISTER ALL
```

## maven配置阿里云仓库

### settings.xml

```xml
 
	<mirror>
    <id>alimaven</id>
    <name>aliyun maven</name>
    <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
    <!--<mirrorOf>central</mirrorOf>  配置*仓库比central仓库比较全-->
    <mirrorOf>*</mirrorOf>
    </mirror>
```

### pom.xml

```xml
<repositories>
		<repository>
			<id>nexus-aliyun</id>
			<name>Nexus aliyun</name>
			<url>http://maven.aliyun.com/nexus/content/groups/public</url>
		</repository>
		
		<repository>
			<id>oschina-central</id>
			<name>OSChina Central</name>
			<url>http://maven.oschina.net/content/groups/public</url>
		</repository>
</repositories>
```

