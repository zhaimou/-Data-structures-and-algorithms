// 两数之和
// 给定一个数组 nums 和一个目标值 target，在该数组中找出和为目标值的两个数
// 时间复杂度  O(n)
// 空间复杂度  O(n)
function TwoNumAdd(arr, target) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let num2 = target - num;
    if (num2 in obj) {
      return [obj[num2], i];
    } else {
      obj[num] = i;
    }
  }
}
const result = TwoNumAdd([1, 23, 4, 3, 5], 8);
console.log(result);
