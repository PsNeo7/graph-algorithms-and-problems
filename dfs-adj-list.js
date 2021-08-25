
const dfs_iterative = (graph, source) => {
    const stack = [source]

    while (stack.length > 0) {
        current_node = stack.pop()
        console.log(current_node);
        for (let neighbour of graph[current_node]) {
            stack.push(neighbour)
        }
    }
}

const dfs_recursive = (graph, node) => {
    console.log(node);
    list = graph[node]
    // if (list.length > 0) {
    list.forEach(element => {
        dfs_recursive(graph, element)
    });
    // }
}

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}

// dfs_iterative(graph, 'a')
dfs_recursive(graph, 'a')