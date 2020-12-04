function solution(clothes) {
    let clothesCount = new Map();
    // clothes 배열을 받은 다음 clothesType목록만 추가 시킴
    for(let i = 0; i < clothes.length; i++){
        // 만약 옷 종류가 등록 되지 않았다면 [옷 종류,  1] 추가
        if(!clothesCount.has(clothes[i][1])) clothesCount.set(clothes[i][1], 1);
        else{
            // 만약 옷 종류가 등록이 되어 있는 경우라면 [옷 종류 ,기존에 들어 있던 옷 종류의 갯수  + 1] 로 map 최신화
            clothesCount.set(clothes[i][1], clothesCount.get(clothes[i][1]) + 1);
        }
    }

    let answer = 1;
    
    // map의 keys()는 키들의 집합, values()는 값들의 집합
    // of 라는 표현은 foreach같은 표현 , 반복 가능한 객체를 하나씩 떠서 반복문 안에 넣는다.
    for(let a of clothesCount.values()){
        answer *= (a + 1);
    }
    return answer - 1;
}

let clothes = [['yellow_hat', 'headgear'], ['blue_sunglasses', 'eyewear'], ['green_turban', 'headgear']];
console.log(solution(clothes));

