function solution(number, k) {
    var pickNumberArr = [];
    number = number.split('').map(Number);
    var maxNumber = 0;
    const dfs = (nums, num, arr = []) => {
        //3개를 선택한다는가정에 3개가 선택 됐다면 출력
        if (num === number.length - k) {
            var comNum = String(arr.join(''));
            if (maxNumber < comNum) maxNumber = comNum;
        }
        else {
            for (let i = 0; i < nums.length; i++) {
                arr.push(nums[i]);
                dfs(nums.slice(i + 1), num + 1, arr);
                arr.pop();
            }
        }
    };

    dfs(number, 0);
    return maxNumber;
}

var number = "4177252841";
var k = 4;
console.log(solution(number, k));
