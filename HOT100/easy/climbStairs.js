//爬楼梯
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
var climbStairs = function(n){
    function dfs(n){
        if(n === 1){
            return 1
        }else if(n=== 2){
            return 2 
        }else{
            return dfs(n-1) + dfs(n-2)
        }
    }


}
function climbStairs(n) {
    if (n <= 2) {
        return n;
    }
    
    let dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}