const hasPathdfs = (graph, src, dst) => {
    if (src === dst) return true
    // console.log(typeof (graph[src]), src);
    if (!graph[src]) {
        return false
    }
    for (let neighbour of graph[src]) {
        // console.log("calling for", neighbour);
        if (hasPathdfs(graph, neighbour, dst)) return true
    }
    return false

}

const hasPathbfs = (graph, src, dst) => {
    // if (src === dst) return true
    const queue = [src]

    while (queue.length > 0) {
        current = queue.shift()
        if (current === dst) return true
        for (const neighbour of graph[current]) {
            queue.push(neighbour)
        }
    }
    return false
}

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}

console.log(hasPathdfs(graph, 'f', 'k'))

console.log(hasPathbfs(graph, 'f', 'k'))
