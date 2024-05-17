// 在给定的 m x n 网格 grid 中，每个单元格可以有以下三个值之一：

// 值 0 代表空单元格；
// 值 1 代表新鲜橘子；
// 值 2 代表腐烂的橘子。
// 每分钟，腐烂的橘子 周围 4 个方向上相邻 的新鲜橘子都会腐烂。

// 返回 直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1 。
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const m = grid.length
    const n = grid[0].length
    if(!Array.isArray(grid)|| m === 0 || n === 0 ||!grid){
        return -1
    }
    let count = 0
    let queue = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) queue.push([i, j])
            else if (grid[i][j] === 1) count++
        }
    }
    let time = -1
    if (count === 0) return 0
    let direction = [[0,1],[0,-1],[1,0],[-1,0]]
    while(queue.length){
           time++
        let qLen = queue.length
        for(let t = 0; t < qLen; t++){
            let [i,j] = queue.shift()
            for(const [x,y] of direction){
                let di = i + y
                let dj = j + x
                if (di < 0 || dj < 0 || di >= m || dj >= n) continue
                if (grid[di][dj] !== 1) continue
                count--
                grid[di][dj] = 2
                queue.push([di, dj])
            }
        }
    }
    return count === 0 ? time : -1
};