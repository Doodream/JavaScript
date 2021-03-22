function solution(priorities, location) {
    let printOrder = [];
    let printOrderLocation = [];
    let prioritiesLocation = [];
    for (let i = 0; i < priorities.length; i++) {
        prioritiesLocation[i] = i;
    }

    while (priorities.length !== 0) {
        let J = priorities.shift();
        let Jlocation = prioritiesLocation.shift();
        if (J < Math.max(priorities)) {
            priorities.push(J);
            prioritiesLocation.push(Jlocation);
        } else {
            printOrder.push(J);
            printOrderLocation.push(Jlocation);
        }
    }

    var answer = printOrderLocation.indexOf(location);
    return answer;
}

priorities = [2, 1, 3, 2];
location = 2;

console.log(solution(priorities, location));
