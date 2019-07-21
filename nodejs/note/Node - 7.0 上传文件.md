1. POST 文件，文件传递是二进制

2. **上传文件**

完整Demo，自己解析处理数据
[](../file/file_server.js)
[](../file/upload_file.html)

run
> node file_server.js
> upload_file.html

上传文件1.txt的内容是：
111 222
bbb

上传了username和pwd

```
------WebKitFormBoundary3JAoxJSPlrU5eClb
Content-Disposition: form-data; name="username"

zhangsan
------WebKitFormBoundary3JAoxJSPlrU5eClb
Content-Disposition: form-data; name="pwd"

123456
------WebKitFormBoundary3JAoxJSPlrU5eClb
Content-Disposition: form-data; name="f1"; filename="a.txt"
Content-Type: text/plain

111 222
bbb
------WebKitFormBoundary3JAoxJSPlrU5eClb--
```

3. http 协议换号是 ： \r\n

```
------WebKitFormBoundary3JAoxJSPlrU5eClb(分隔符)          \r\n
Content-Disposition: form-data; name="username"（字段头）  \r\n
\r\n
zhangsan
------WebKitFormBoundary3JAoxJSPlrU5eClb
Content-Disposition: form-data; name="pwd"

123456
------WebKitFormBoundary3JAoxJSPlrU5eClb
Content-Disposition: form-data; name="f1"; filename="a.txt"
Content-Type: text/plain

111 222
bbb
------WebKitFormBoundary3JAoxJSPlrU5eClb--
```

通过从headers中获取分隔符（------WebKitFormBoundary3JAoxJSPlrU5eClb）

4. headers
```
  'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary1X4ozNKJQjOqdJ3v',
```

5.buffer二进制切割
 
