## Express

1. session:一般结合cookie一起使用

2. lib : cookie-session，默认加密的

> npm i cookie-session -D

> http://localhost:8080/upload.html

> node server-session.js

3.在开发者模式，在cookie里面看数据，在session存储的数据，不会直接在cookie里面显示

4. session数据存储在服务器端

sessionId只是一个id，在客户端，在服务器会通过sessionId查找对应的数据

