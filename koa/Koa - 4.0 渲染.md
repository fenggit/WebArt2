## koa 数据库

1. 渲染 

- 服务端渲染：pug/egs框架，直接返回给客户端是html
特点：安全性高，SEO
exp：登录注册

- 客户端渲染：Vue/Rect框架,从服务器获取json数据，生成html
特点：节约流量，用户体验好，服务端渲染刷新页面不友好

exp：商品列表


2. 服务端渲染
pug=jade：侵入式

egs框架：非侵入式

3. 安装

> npm i pug egs -D