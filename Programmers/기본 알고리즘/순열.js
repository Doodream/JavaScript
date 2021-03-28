var input = ["a", "b", "c", "d"];
var answer = [];

var permutation = (arr, n, k) => {
    if (n === arr.length - 1) {
        const str = arr.slice(0, k).join("");
        if (!answer.includes(str)) answer.push(str);
        return;
    } else {
        for (let i = 0; i < arr.length; i++) {
            var tmp = arr[n];
            arr[n] = arr[i];
            arr[i] = tmp;

            permutation(arr, n + 1, k);
            arr[i] = arr[n];
            arr[n] = tmp;
        }
        return answer;
    }
};

console.log(permutation(input, 0, 2));