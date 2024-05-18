// 在给定的 m x n 网格 grid 中，每个单元格可以有以下三个值之一：

// 值 0 代表空单元格；
// 值 1 代表新鲜橘子；
// 值 2 代表腐烂的橘子。
// 每分钟，腐烂的橘子 周围 4 个方向上相邻 的新鲜橘子都会腐烂。

// 思路：我们需要遍历整个网格，找到所有的腐烂橘子，并将它们的坐标放入队列中。同时，统计新鲜橘子的数量。
// 我们进入循环，每一轮循环代表了一个时间单位。在每个时间单位内，我们从队列中取出当前轮次的腐烂橘子，然后根据四个方向（上、下、左、右）扩散腐烂。
// 扩散过程中，我们检查扩散的位置是否合法，即不超出网格的范围。如果合法并且该位置是新鲜橘子，我们将其变为腐烂橘子，并将其坐标加入队列中继续扩散。
// 每轮循环结束后，时间加一。直到队列为空或者新鲜橘子的数量为零为止。最后判断新鲜橘子的数量，如果为零，则返回时间；否则返回 -1，表示无法全部腐烂。

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