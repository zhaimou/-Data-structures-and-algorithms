// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

function getMajorityElment(nums){
    let obj = new Map()
    for(let num of nums){
        obj.set(num,(obj.get(num)||0) + 1)
    }
    for (const [key, value] of obj.entries()) {
        if (value > nums.length / 2) {
            return key; 
        }
    }
    return null 
}
let majorityElement1 = function(nums) {
    nums.sort((a,b) => a - b)
    return nums[Math.floor(nums.length /2)]
};
const arr = [1,1,1,2,2,2,2]
console.log(getMajorityElment(arr))
//一个出现次数大于n/2的元素
//排完序后中间坑定是它
function getMajorityElement(nums){
	nums.sort((a,b)=>a-b)
	return nums[Math.floor(nums.length/2)]
}//Boyer-Moore 投票算法
var majorityElement = function(nums) {

    let candidate;
    
    let count = 0;
    
    for(let i = 0; i < nums.length; i++){
    
    if(count === 0){
    
    candidate = nums[i]
    
    }
    
    if(nums[i] === candidate){
    
    count++
    
    }else{
    
    count--
    
    }
    
    }
    
    return candidate
    
    };