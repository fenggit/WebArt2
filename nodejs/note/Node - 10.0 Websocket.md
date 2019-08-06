1. Websocket

   - 性能比ajax高2-3倍
   - 双向通信，ajax单向的通信
   - 自带安全，加密
   - 本质是TCP
  
2. 第三方库**socket.io**
    
    socket.io：兼容，简单，方便，自动数据解析
    
    安装
    > npm i socket.io -D
    
    > [](../Websocket/server.js)
    > [](../Websocket/client.html)
    
3. 原生写法
   > [](../Websocket/natvie/server.js)
   > [](../Websocket/natvie/client.html)
   
   
     <!--
       拖到浏览器，查看request head
       
       Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits
       Sec-WebSocket-Key: 91FxOQHp/y2b78/eOlp+Gw==
       Sec-WebSocket-Version: 13
       Upgrade: websocket  //协议升级
       -->
