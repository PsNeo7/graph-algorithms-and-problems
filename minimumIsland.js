//return the minimum island given a n*n grid
const minimumIsland = (grid) => {
    const seen = new Set()
    let count = Infinity

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid.length; c++) {
            const size = explore(grid, r, c, seen)
            if (size > 0 && size < count) count = size
        }
    }
    return count
}

const explore = (grid, r, c, seen) => {
    const rowInBounds = 0 <= r && r < grid.length
    const colInBounds = 0 <= c && c < grid[0].length
    if (!rowInBounds || !colInBounds) return 0

    if (grid[r][c] === 'W') return 0

    const pos = r + ' ' + c
    if (seen.has(pos)) return 0
    seen.add(pos)

    let size = 1
    size += explore(grid, r + 1, c, seen)
    size += explore(grid, r - 1, c, seen)
    size += explore(grid, r, c + 1, seen)
    size += explore(grid, r, c - 1, seen)

    return size

}

const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];

minimumIsland(grid); // -> 2
console.log(minimumIsland(grid) == 2 ? 'pass' : 'fail');

const grid2 = [
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L'],
];

minimumIsland(grid2); // -> 1
console.log(minimumIsland(grid2) == 1 ? 'pass' : 'fail');

const grid3 = [
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
];

//   minimumIsland(grid3); // -> 9
console.log(minimumIsland(grid3) == 9 ? 'pass' : 'fail');

const grid4 = [
    ['W', 'W'],
    ['L', 'L'],
    ['W', 'W'],
    ['W', 'L']
];

//   minimumIsland(grid4); // -> 1
console.log(minimumIsland(grid4) == 1 ? 'pass' : 'fail');
