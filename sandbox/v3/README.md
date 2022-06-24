# v3

new Function + Proxy

## 缺点

- 没有为每个沙箱制定上下文
  - 需要一个container来承载沙箱的变量声明
  - 默认的上下文不是container，而是全局的window
    - 声明沙箱中的变量以及使用沙箱中的变量时，必须在代码中显式带上前缀（window.）
