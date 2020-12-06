function solution(participant, completion) {
    let map = new Map();
    // hash map을 사용해서 참가자들을 등록하되 이미 중복된 이름이 있다면 기존값보다 + 1을 추가한다.
    for(let player of participant){
        if(map.has(player))
            map.set(player, map.get(player) + 1);
        else{
            map.set(player, 1);
        }
    }
    for(let player of completion){
        map.set(player, map.get(player) - 1);
    }

    for(let player of map.keys()){
        if(map.get(player) > 0){
            return player;
        }
    }

}

let participant = ['mislav', 'stanko', 'mislav', 'ana'];
let completion = ['stanko', 'ana', 'mislav'];

console.log(solution(participant, completion));
