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
    // 완주자들만 - 1을 해서 중복된 완주하지 못한자만 걸러낸다.
    
        map.set(player, map.get(player) - 1);
    }
    // 중복된 사람은 2 혹은 그보다 많은 value값을 가지고 있어서 - 1을 해도 걸러진다.
    for(let player of completion){
    for(let player of map.keys()){
        if(map.get(player) > 0){
            return player;
        }
    }

}

let participant = ['mislav', 'stanko', 'mislav', 'ana'];
let completion = ['stanko', 'ana', 'mislav'];

console.log(solution(participant, completion));
