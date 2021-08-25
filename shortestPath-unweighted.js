// Shortest path between 2 nodes of an undirected graph

const shortestPath = (edges, src, dst) => {
    const graph = bulildAdjList(edges)
    // console.log(graph);
    const queue = [[src, 0]]
    const seen = new Set([src])

    while (queue.length > 0) {
        const [node, distance] = queue.shift()
        // console.log("increasing distance!", node, dst, distance);
        if (node === dst) return distance

        for (const neighbour of graph[node]) {
            if (!seen.has(neighbour)) {
                seen.add(neighbour)
                queue.push([neighbour, distance + 1])
            }
        }
    }

    return -1
}

const bulildAdjList = (edges) => {
    graph = {}
    for (const edge of edges) {
        for (const node of edge) {
            if (!(node in graph)) {
                graph[node] = []
            }
        }
        graph[edge[0]].push(edge[1])
        graph[edge[1]].push(edge[0])
    }
    return graph
}


const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
];

console.log(shortestPath(edges, 'w', 'z') === 2 ? "Pass" : `fail, got ${shortestPath(edges, 'w', 'z')}`);

console.log(shortestPath(edges, 'y', 'x') === 1 ? "Pass" : `fail, got ${shortestPath(edges, 'y', 'x')}`);

const edges2 = [
    ['a', 'c'],
    ['a', 'b'],
    ['c', 'b'],
    ['c', 'd'],
    ['b', 'd'],
    ['e', 'd'],
    ['g', 'f']
];

console.log(shortestPath(edges2, 'a', 'e') === 3 ? "Pass" : "fail");

console.log(shortestPath(edges2, 'e', 'c') === 2 ? "Pass" : "fail");

console.log(shortestPath(edges2, 'b', 'g') === -1 ? "Pass" : "fail");

const edges3 = [
    ['c', 'n'],
    ['c', 'e'],
    ['c', 's'],
    ['c', 'w'],
    ['w', 'e'],
];

console.log(shortestPath(edges3, 'w', 'e') === 1 ? "Pass" : "fail");

console.log(shortestPath(edges3, 'n', 'e') === 2 ? "Pass" : "fail");
