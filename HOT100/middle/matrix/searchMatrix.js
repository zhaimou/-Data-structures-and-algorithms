var searchMatrix = function(matrix, target) {
    if(matrix.length==0) return false // 判空
    let [left, up]=[matrix[0].length-1, 0]; // 初始化位置
    while(left>=0 && up<matrix.length){
        if(matrix[up][left]>target){
            left--;
        }else if(matrix[up][left]<target){
            up++;
        }else{
            return true;
        }
    }
    return false;
};