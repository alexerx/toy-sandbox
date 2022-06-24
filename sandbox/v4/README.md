# v4

new Function + with + Proxy

## 优点

- 每个沙箱有自己的作用域，且在代码中默认全局作用域为此windowProxy

## 缺点

- 仍有一些问题未解决
  - 通过createElement、innerHTML动态创建script标签，从而到沙箱外执行了代码
  - this的逃逸
  - ...
