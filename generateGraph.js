const read = require("./read.js");

// 现在的 dependencies 只能拿到一层依赖，需要遍历每一层依赖生成依赖图谱
generateGraph = (entry) => {
    const entryModule = read(entry);
    const graphArray = [ entryModule ];

    for (let i = 0; i < graphArray.length; i++) {
        const item = graphArray[i];
        const { dependencies } = item;
        // 遍历 dependencies 分析子模块
        if (dependencies) {
            for (let j in dependencies) {
                graphArray.push(read(dependencies[j]));
            }
        }
    }

    return graphArray;
}

module.exports = generateGraph;