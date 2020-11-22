#!/usr/bin/env sh

cur_dateTime=$(date "+%Y-%m-%d %H:%M:%S")
# 确保脚本抛出遇到的错误
set -e

# 删除目录防止构建失败
# rm -rf build/.vuepress/dist

# 生成静态文件
yarn build


# 进入生成的文件夹
cd public

# 如果是发布到自定义域名
# echo 'blog.spring.tk' > CNAME

git init
git add -A
git commit -m "rebuild @${cur_dateTime}"

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:mukeyeshen/mukeyeshen.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:github.com/chenyeshen/miaoruannv.git master:gh-pages

cd -

# 第一次初次化仓库
git init

git add -A
git commit -m "rebuild @${cur_dateTime}"
# 第一次提交设置远程仓库地址

# 解决 git 推送更新出现错误： Updates were rejected because the remote contains work that you do   
# 产生的原因是本地仓库与线上仓库的内容不匹配，或者说本地相对于远程不是最新，先pull更新本地，再把自己的push上去。
#git pull origin master    

git push -f git@github.com:mukeyeshen/vuepress_blog_code.git master
