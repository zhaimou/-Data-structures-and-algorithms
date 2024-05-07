
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。

// 输入: nums = [0,1,0,3,12]
// 输出: [1,3,12,0,0]

// 输入: nums = [0]
// 输出: [0]

function moveZeroes(nums){
      //获取数组长度
      let len = nums.length;
      //循环遍历数组
      for(let i =0;i<len;i++){
          //当数组哪个位置是0 ，就删除这个这个位置的元素，然后在末尾补 0
          //从而就达到了 把所有0移动到数组末尾的要求且保持的非零元素的相对顺序
          if(nums[i]==0){
              nums.splice(i,1)
              nums.push(0)
          //当为0的元素删除后，下一个元素就会前进一位占据该位置，所以要从该位置在进行判断
              i--
          //当移动到末尾的元素，就不用再一次进行遍历了，所以遍历的长度要减去1位
              len--
          }
      }
}
//排序做法
function moveZeroes(nums){
    let j = 0;
    for (let i= 0; i< nums.length; i++) {
        if(arr[i] !== 0){
            let temp = nums[j]
            nums[j] =  nums[i]
            nums[i] = temp
            j++
        }
    }
}
let arr = [1,2,0,3,2,0,1,0]
console.log(moveZeroes(arr))
console.log(arr)


