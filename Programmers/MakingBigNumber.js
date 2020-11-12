function solution(numbers, k) {
    let number = numbers.split("").map(Number);
    let arr = [];
    // 맨 앞에서 시작한다.
    for (let i = 0; i < number.length; i++) {
        let current = number[i];

        // 만약 현재 숫자가 arr의 마지막 숫자보다 크다면 arr의 마지막 숫자를 제거
        // 현재 숫자가 가장 크다면 arr은 모두 제거되어야 한다.
        while(true){
            // 제거할 숫자들이 모두 제거되면 break;
            if(k <= 0){
                break;
            }
            // arr의 마지막 숫자가 현재 숫자보다 작을경우 arr마지막 숫자 제거
            if(arr[arr.length - 1] < current){
                arr.pop();
                k--;
            }else{
                break;
            }
        }
        
        // arr은 무조건 추가
        arr.push(current);
    }

    // k개 만큼 모두 제거하지 못한 경우도 있다.
    // arr을 뒤에서 k개 만큼 제거한다.
    arr.splice(arr.length - k, k)
    console.log(arr);
    let answer = arr.join('');
    return answer;
}

let number = "4177252841";
let k = 4;

console.log(solution(number, k));



