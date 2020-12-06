// traverse 采用 ES5 Model 导出，我们通过 require 引入的话就加 .default
const traverse = require("@babel/traverse").default;
const path = require("path");

convertToDependency = (ast) => {
    const dependencies = {};
    // 遍历所有的 import 模块，存入 dependencies
    traverse(ast, {
        // 类型为 ImportDeclaration 的 AST 节点（即为 improt 语句）
        ImportDeclaration({node}) {
            const dirname = path.dirname("./test1.js");
            const newFile = "./" + path.join(dirname, node.source.value);
            // 保存所依赖的模块
            dependencies[node.source.value] = newFile;
        }
    });
    return dependencies;
}

module.exports = convertToDependency;
