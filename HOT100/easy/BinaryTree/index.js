var diameterOfBinaryTree = function (root) {
    let ans = 0
    const dfs = (root) => {
        if (!root) return 0
        let l = dfs(root.left)
        let r = dfs(root.right)
        ans = Math.max(ans, l + r)
        return Math.max(l, r) + 1
    }
    dfs(root)
    return ans
};