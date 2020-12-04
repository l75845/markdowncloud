# Html5有哪些新特性？如何处理Html5新标签的浏览器兼容问题？如何区分Html和Html5？

${toc}

## 一、Html5新特性
1. 拖拽释放(**Drag and Drop**) API
2. 语义化更好的内容标签(**header**,**nav**,**footer**,**aside**,**article**,**section**)
3. 音频、视频API(**audio**,**video**)
4. 画布(**Canvas**) API
5. 地理(**Geolocation**) API
6. 本地离线存储`localStorage`长期存储数据，浏览器关闭后数据不丢失；
7. `sessionStorage`的数据在浏览器关闭后自动删除
8. 表单空间，`calendar`、`date`、`time`、`email`、`url`、`search`
9. 新的技术`webworker`,`websocket`,`Geolocation`

## 二、Html5兼容问题处理
### 1.使用Dom操作来添加这些标签
既然浏览器不支持，自己来创建一个：
```HTML
<!DOCTYPE html>
<html>
    <head lang="en">
        <meta charset="UTF-8">
        <title>测试H5新标签兼容性</title>
        <script>
            document.createElement('header');
            document.createElement('footer');
        </script>
        <style>
            header, footer{
                display:block;
                width:50px;
                height:50px;
                background-color:red;
            }
        </style>
    </head>
    <body>
        <header id="header">header</header>
        <footer id="footer">footer</footer>
    </body>
</html>
```
通过这种方法可以解决H5新标签在老IE浏览器汇总兼容问题，但是。这样有个问题，那么多新标签，如果每个都要通过这种方法去生产的话，是不是太麻烦了呢？

### 2.封装好的js库 -- html5shiv.js
```HTML
<!-- 引入即可 -->
<script src="js/html5shiv.js"></script>
```

## 三、如何区分Html和Html5

### 1.文档类型声明

- HTML声明：
```HTML
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
```
- HTML5声明：
```HTML
<!DOCTYPE html>
```

### 2.结构语义

- HTML：没有体现结构语义化的标签，通常都是这样来命名的：
```HTML
<div id="header"></div>
```
这样表示网站的头部。

- HTML5：在语义上有很大的优势，提供了新的HTML5标签，比如：`article`、`footer`、`header`、`nav`、`section`，这些通俗易懂