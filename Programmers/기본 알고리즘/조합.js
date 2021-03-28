var numbers = [1, 2, 3, 4];
var pickNumberArr = [];
const dfs = (nums, num, k, arr = []) => {
    //k개를 선택한다는가정에 k개가 선택 됐다면 출력
    if (num === k) {
        pickNumberArr.push(Number(arr.join('')));
    }
    else {
        for (let i = 0; i < nums.length; i++) {
            arr.push(nums[i]);
            dfs(nums.slice(i + 1), num + 1, k, arr);
            arr.pop()
        }
    }
};
// for (let k = 0; k < numbers.length; k++) {
//     dfs(numbers, 0, k + 1);
// }
dfs(numbers, 0, 3);
console.log(pickNumberArr);