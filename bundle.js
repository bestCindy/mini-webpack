const fs = require("fs");

// （一）把代码转换成 AST 抽象语法树
const convertToAST = require("./convertToAST.js");
const ast = convertToAST("./test1.js");
// 需要用 JSON 处理下，否则会输出[ Object Object]
const astStr = `let newObj = JSON.parse('${JSON.stringify(ast)}'); console.log(newObj);`;
// 写入 AST
fs.writeFile("./ASTResult.js", astStr, () => {
    console.log("AST 写入成功");
});

// 寻找当前文件的依赖关系
const convertToDependency =  require("./convertToDependency.js");
const dependencies = convertToDependency(ast);
const denpependiciesStr = `let newObj = JSON.parse('${JSON.stringify(dependencies)}'); console.log(newObj);`;
fs.writeFile("./dependencyResult.js", denpependiciesStr, () => {
    console.log("Dependencies 写入成功");
});

// 将抽象语法树转换成浏览器可以运行的代码
const convertToCode = require("./convertToCode");
const code = convertToCode(ast);
const codeStr = `let newObj = JSON.parse('${JSON.stringify(code)}'); console.log(newObj);`;
fs.writeFile("./codeResult.js", codeStr, () => {
    console.log("Code 写入成功");
});

// 生成代码
const generateCode = require("./generateCode.js");
const result = generateCode('./app.js');
fs.writeFile("./result.js", result, () => {
    console.log("Result 写入成功");
});

