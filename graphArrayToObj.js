// 将依赖图谱转换成对象形式
graphArrayToObj = (graphArray) => {
    const graphObj = {};

    graphArray.forEach(item => {
        graphObj[item.fileName] = {
            dependencies: item.dependencies,
            code: item.code
        }
    });

    return graphObj;
}

module.exports = graphArrayToObj;