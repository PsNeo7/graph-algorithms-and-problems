const undirectedPath = (edges, src, dst) => {
    const graph = bulildAdjList(edges)
    visited = {}
    return [hasPathdfs(graph, src, dst, new Set()), hasPathbfs(graph, src, dst, new Set())]
}

const hasPathdfs = (graph, src, dst, seen) => {
    if (seen.has(src)) return false;
    seen.add(src)
    if (src === dst) return true
    for (const neighbour of graph[src]) {
        if (hasPathdfs(graph, neighbour, dst, seen)) return true
    }
    return false
}

const hasPathbfs = (graph, src, dst, seen) => {
    queue = [src]
    while (queue.length > 0) {
        current = queue.shift()
        if (current == dst) return true
        // queue.push(...graph[current])
        for (const edge of graph[current]) {
            if (!(seen.has(edge))) {
                queue.push(edge)
                seen.add(edge)
            }
        }
    }
    return false
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

    // for (const edge of edges) {
    //     const [a, b] = edge
    //     if (!(a in graph)) graph[a] = []
    //     if (!(b in graph)) graph[b] = []
    //     graph[a].push(b)
    //     graph[b].push(a)
    // }
    // console.log(graph);
    return graph
}


const edges = [
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't'],
];

console.log(undirectedPath(edges, 'r', 't')) // -> true

console.log(undirectedPath(edges, 'r', 'b')) // -> false