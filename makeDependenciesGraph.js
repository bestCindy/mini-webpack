const generateGraph = require("./generateGraph");
const graphArrayToObj = require("./graphArrayToObj");

const makeDependenciesGraph = (entry) => {
    const graphArray = generateGraph(entry);
    const graphObj = graphArrayToObj(graphArray)
    return graphObj;
}

module.exports = makeDependenciesGraph;