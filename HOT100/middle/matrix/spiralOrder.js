
// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。


var spiralOrder = function (matrix) {
    if (matrix.length == 0) return []
    const res = []
    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1
    const size = matrix.length * matrix[0].length
    while (res.length !== size) { // 仍未遍历结束
      for (let i = left; i <= right; i++) res.push(matrix[top][i])
      top++
      for (let i = top; i <= bottom; i++) res.push(matrix[i][right])
      right--
      if (res.length === size) break // 遍历结束
      for (let i = right; i >= left; i--)  res.push(matrix[bottom][i])
      bottom--
      for (let i = bottom; i >= top; i--) res.push(matrix[i][left])
      left++
    }
    return res
  };
