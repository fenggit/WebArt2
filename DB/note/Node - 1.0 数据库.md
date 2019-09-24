1. 数据库分类

  NOSQL：分布式，性能高，但是无法使用复杂的业务，redis，memcache       
          
  文件型：简单- access，sqlite
  
  关系型：性能有所下降，MySQL，Oracle
  
  分布式：mongoDB
  
2. MySQL：开源，免费

3. 安全性：注入

4. 操作工具：navicat，wamp（phpmyadmin）

5. 库  表 

6. 数据库类型
数字类型：

文本类型：varchar（短字符串），text（长字符串-2G）

7. SQL
增：insert
    insert into 表名（字段） values(值)
    insert into user_info(username,userpassword) values('zhangsan','asa')
    
删：delete
    delete from 表名 where 条件
    delete from user_info where ID = 2 
    delete from user_info where username = 'zhangsan'    

改：update
    update 表名 set 字段=新值，字段=新值 ... where 条件
    update user_info set password='654321' where username='hefeng'

查：select
    select *from 表名
    select 字段 from 表名 where 条件 order by 字段 limit 0，30
    select username,password from user_info where ID<10 order by ID desc limit 2

where ：条件
order by ：排序   
limit：数据数量
limit 0，30：是指从0到30的数据
limit 1：只要1条数据
order by 字段 desc： 降序

8. 索引：主键（等价于唯一加索引），唯一（不能重复），索引（提高查询性能，降低插入删除性能，空间占用增加），全文索引（适合文本搜索，搜索引擎）
- 提高性能
- 限制