// 两数之和 
// 给定一个数组 nums 和一个目标值 target，在该数组中找出和为目标值的两个数
function TwoNumAdd(arr,target) {

        if(Array.isArray(arr)){
            let map = {} 
            for(let i = 0; i < arr.length; i++){
                if(target - arr[i] !== undefined){
                     return  [target - arr[i],arr[i]]
                }else{
                    return map[arr[i]] = i 
                }
                // console.log(map)
            }
            // console.log(map)
        }
   return  false
}
const result = TwoNumAdd([1,23,4,3,5], 4)
console.log(result);
// console.log(map)