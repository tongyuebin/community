# Getting Started

### Reference Documentation
For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/2.2.2.RELEASE/maven-plugin/)
* [Spring Web](https://docs.spring.io/spring-boot/docs/2.2.2.RELEASE/reference/htmlsingle/#boot-features-developing-web-applications)

### Guides
The following guides illustrate how to use some features concretely:

* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/bookmarks/)


### solutions
lombok未生效，需要在idea的plugins手动安装lombok插件
由于mybatis-generator每次都是将mapper.xml文件追加到之前存在的文件上，
所以当我们改变表结构，需要删除之前的生成的mapper文件。同时针对自定义的映射文件单独起名字

### idea操作快捷键
ctrl+shift+f 全局搜索
ctrl+shift+r全局替换
ctrl+n 搜索类
ctrl+shift+n 搜索文件
ctrl+shift+a 搜索idea操作
alt+enter 自动创建类对象
ctr+shift+PgUp/PgUp 移动到最上/下方
alt+shift+PgUp/PgUp 自由移动到选择的位置
ctrl+alt+v 自动抽取变量


### git操作

git init
git add README.md
git commit -m "first commit"
ssh-keygen -t rsa -b 4096 -C "1510043719@qq.com"
ssh-add ~/.ssh/id_rsa
clip < ~/.ssh/id_rsa.pub
clip < C:\Users\15100/.ssh/id_rsa.pub
git remote add origin git@github.com:tongyuebin/community.git
git push -u origin master


