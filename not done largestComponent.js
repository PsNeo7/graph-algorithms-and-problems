// given undirected graphs, find the largest connected graph
// const largestComponent = (graph) => {
//     maxSize = 0
//     seen = new Set()

//     for (let edge in graph) {
//         edge = String(edge)
//         currentSize = exploreAndReturnCountDfs(graph, edge, seen)
//         if (currentSize > maxSize) {
//             maxSize = currentSize
//         }
//         // console.log("for ", edge, "count = ", currentSize);

//     }
//     return maxSize
// }

// const exploreAndReturnCountDfs = (graph, src, seen) => {
//     src = String(src)
//     if (seen.has(src)) {
//         console.log("already seen", src);
//         return 0
//     }
//     seen.add(src)
//     console.log("adding ", src, " to seen");
//     let size = 1
//     for (let neighbour in graph[src]) {
//         size += exploreAndReturnCountDfs(graph, neighbour, seen)
//     }
//     console.log("for ", src, "count = ", size);

//     return size
// }

const largestComponent = (graph) => {
    const visited = new Set();
    let largest = 0;

    for (let node in graph) {
        const size = exploreSize(graph, node, visited);
        if (size > largest) largest = size;
    }

    return largest;
};

const exploreSize = (graph, node, visited) => {
    if (visited.has(node)) return 0;

    visited.add(node);

    let size = 1;
    for (let neighbor of graph[node]) {
        size += exploreSize(graph, neighbor, visited);
    }

    return size;
};

console.log(largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
}));// -> 4

// console.log(largestComponent({
//     1: ['2'],
//     2: ['1', '8'],
//     6: ['7'],
//     9: ['8'],
//     7: ['6', '8'],
//     8: ['9', '7', '2']
// }));// -> 6

// console.log(
//     largestComponent({
//         3: [],
//         4: ['6'],
//         6: ['4', '5', '7', '8'],
//         8: ['6'],
//         7: ['6'],
//         5: ['6'],
//         1: ['2'],
//         2: ['1']
//     })
// ); //->5

// console.log(
//     largestComponent({})
// ); //->0

// console.log(
//     largestComponent({
//         0: ['4', '7'],
//         1: [],
//         2: [],
//         3: ['6'],
//         4: ['0'],
//         6: ['3'],
//         7: ['0'],
//         8: []
//     })
// ); //->3