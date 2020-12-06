const convertToAST = require("./convertToAST.js");
const convertToDependency =  require("./convertToDependency.js");

const read = fileName => {
    let ast = convertToAST(fileName);
    let dependencies = convertToDependency(ast);
    let code = convertToCode(ast)
    return {
        fileName,
        dependencies,
        code
    }
}

module.exports = read;