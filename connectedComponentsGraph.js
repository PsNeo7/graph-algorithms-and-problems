const connectedComponentsCount = (graph) => {
    seen = new Set()
    count = 0
    // for (const key in graph) {
    //     if (exploredfs(graph, key, seen)) count += 1
    // }
    for (let key in graph) {
        key = String(key)
        if (!(seen.has(key))) {
            seen.add(key)
            queue = [key]

            while (queue.length > 0) {
                current = queue.shift()
                for (let edge of graph[current]) {
                    edge = String(edge)
                    if (!(seen.has(edge))) {
                        seen.add(edge)
                        queue.push(edge)
                    }
                }
            }
            count += 1
        }
    }
    return count
}

explorebfs = () => {
    if (!(seen.has(key))) {
        seen.add(key)
        queue = [key]

        while (queue.length > 0) {
            current = queue.shift()
            for (const edge of graph[current]) {
                if (!(seen.has(edge))) {
                    seen.add(edge)
                    queue.push(edge)
                }
            }
        }
    }
}

exploredfs = (graph, current, seen) => {
    current = String(current)
    if (seen.has(current)) return false

    seen.add(current)

    for (const neighbour of graph[current]) {
        exploredfs(graph, neighbour, seen)
    }

    return true
}


console.log(connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}));// -> 2

console.log(connectedComponentsCount({
    1: [2],
    2: [1, 8],
    6: [7],
    9: [8],
    7: [6, 8],
    8: [9, 7, 2]
}));// -> 1

console.log(connectedComponentsCount({
    3: [],
    4: [6],
    6: [4, 5, 7, 8],
    8: [6],
    7: [6],
    5: [6],
    1: [2],
    2: [1]
}))
// -> 3

console.log(connectedComponentsCount({}))// -> 0

console.log(connectedComponentsCount({
    0: [4, 7],
    1: [],
    2: [],
    3: [6],
    4: [0],
    6: [3],
    7: [0],
    8: []
}));// -> 5

