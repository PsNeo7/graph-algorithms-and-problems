//Count number of islands from a given matrix
const islandCount = (grid) => {
    const seen = new Set()
    let count = 0
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid.length; c++) {
            if (explore(grid, r, c, seen)) count += 1
        }
    }
    return count
}

const explore = (grid, r, c, seen) => {
    const rowInBounds = 0 <= r && r < grid[0].length
    const colInBounds = 0 <= c && c < grid[0].length
    if (!rowInBounds || !colInBounds) return false

    if (grid[r][c] === 'W') return false

    const pos = r + ' ' + c
    if (seen.has(pos)) return false
    seen.add(pos)

    explore(grid, r + 1, c, seen)
    explore(grid, r - 1, c, seen)
    explore(grid, r, c + 1, seen)
    explore(grid, r, c - 1, seen)

    return true
}

const grid1 = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];

//   islandCount(grid1); // -> 3
console.log(islandCount(grid1) == 3 ? 'pass' : 'fail');

const grid2 = [
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L'],
];

//   islandCount(grid2); // -> 4
console.log(islandCount(grid2) == 4 ? 'pass' : 'fail');

const grid3 = [
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
];

//   islandCount(grid3); // -> 1
console.log(islandCount(grid3) == 1 ? 'pass' : 'fail');

const grid4 = [
    ['W', 'W'],
    ['W', 'W'],
    ['W', 'W'],
];
console.log(islandCount(grid4) == 0 ? 'pass' : 'fail');