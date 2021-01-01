>学习笔记
https://segmentfault.com/a/1190000020266246

从 0 实现一个简单的 webpack

#### webpack 打包原理
- 先递归识别依赖，构建依赖图谱
- 把代码转换成 AST 抽象语法树
- 在 AST 中去处理代码
- 将 AST 抽象语法树变成浏览器可以识别的代码并输出

#### 需要的工具
- `@babel/parser` 通过 `fs.readFileSync` 读取文件内容，返回 AST（抽象语法树）
- `@babel/traverse` 可以遍历 AST，拿到必要的数据
- `@babel/core` babel 核心模块，通过 `transformFromAst` 方法，可以将 AST 转化为浏览器可以执行的代码
- `babel/present-env` 将代码转换成 ES5 代码

要通过 yarn 下载
```
yarn init -y
yarn add @babel/parser @babel/traverse @babel/core @babel/preset-env 
```

#### （一）将代码转换成 AST 抽象语法树
- 利用 `babel-parser` 转换
- 代码在 convertToAST.js 文件中

#### （二）找到依赖关系
- 利用 traverse 遍历 AST 抽象语法树
- 找到文件的依赖关系
- 代码在 convertToDependency.js 里面

#### （三）将抽象语法树转换成浏览器可以运行的代码
- 代码在 convertToCode.js 里面

#### (四) 遍历 dependencies 找到所有的依赖获取依赖图谱
- 代码在 makeDependenciesGraph.js 里面

#### （五）生成代码
- 代码在 generateCode.js 里面
