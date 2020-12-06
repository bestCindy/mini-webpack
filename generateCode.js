const makeDependenciesGraph = require("./makeDependenciesGraph");

const generateCode = (entry) => {
    // 注意：我们的 gragh 是一个对象，key是我们所有模块的绝对路径，需要通过 JSON.stringify 来转换
    const gragh = JSON.stringify(makeDependenciesGraph(entry));
    // 我们知道，webpack 是将我们的所有模块放在闭包里面执行的，所以我们写一个自执行的函数
    // 注意: 我们生成的代码里面，都是使用的 require 和 exports 来引入导出模块的，而我们的浏览器是不认识的，所以需要构建这样的函数
    return `
        (function( gragh ) {
            function require( module ) {
                // 相对路径转换成绝对路径的方法
                function localRequire(relativePath) {
                    return require(gragh[module].dependencies[relativePath])
                }
                const exports = {};
                (function( require, exports, code ) {
                    eval(code)
                })( localRequire, exports, gragh[module].code )

                return exports;
            }
            require('${ entry }')
        })(${ gragh })
    `;
}

module.exports = generateCode;