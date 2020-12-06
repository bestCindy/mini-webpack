const fs = require("fs");
const parser = require('@babel/parser');

convertToAST = (fileName) => {
    // 读取文件
    const buffer = fs.readFileSync(fileName, "utf-8");
    // 构建 AST 抽象语法树
    const AST = parser.parse(buffer, { sourceType: "module" });
    // 返回 AST 抽象语法树
    return AST;
}

module.exports = convertToAST;