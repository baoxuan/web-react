# web_react
`react-route4.0+ webpack3` 
并入antd-mobile 和高清方案

问题1：

`antd-mobile@1.x` 必须使用 `svg-sprite-loader@^0.3.1`

问题2：

在引用svg 文件时，需要先把配置`svg-sprite-loader`还需要在`file-loader`中排除`svg`，
应该是这样才对：
```exclude: [
...
/.less$/,
/.svg$/,
...
]
```

不然svg 会被其他loader 先使用
