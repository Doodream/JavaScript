let count = 0;
let nameArr;

function solution(name) {
    nameArr = name.split("");
    let countArr = [];

    // 위 아래 이동 최소
    for(let i = 0; i < nameArr.length;  i++){
        let c = changeCount(nameArr[i]);
        countArr.push(c);
        count += c;
    }

    let leftmove = 0;
    let rightmove = 0;

    // 첫문자 왼쪽으로 A가 몇개 있냐
    for(let i = 0; i < name.length;  i++){
        if(nameArr[i] !== "A"){
            leftmove = nameArr.length - i;
            break;
        }
    }

    for(let i = nameArr.length; i > 0;  i--){
        if(nameArr[i] !== "A"){
            rightmove = i;
            break;
        }
    }

    count += Math.min(leftmove, rightmove)
    
    var answer = 0;
    return answer;
}

// 차이가 가장 적은 쪽 으로 움직이는 카운트
function changeCount(word){
    // 아스키 코드 값을 받음
    let worddif = word.charCodeAt(1) - 65;
    let worddif2 = 26 - worddif;
    return Math.min(worddif, worddif2); 
}

console.log(solution("JAN"));