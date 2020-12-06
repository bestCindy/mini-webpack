const babel = require('@babel/core');

convertToCode = (ast) => {
    let code = babel.transformFromAst(ast, null, {
        presets: ["@babel/preset-env"]
    });
    return code;
}

module.exports = convertToCode;