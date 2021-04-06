const dict = [];
for (let i = 0; i < 26; i++) {
    dict[i] = String.fromCharCode([i + 65]);
}
dict.push('TO');
var msg = 'TOBEORNOTTOBEORTOBEORNOT';
function longestWord(count) {
    var msgStr = JSON.parse(JSON.stringify(msg));
    var maxLength = dict[dict.length - 1].length
    while (maxLength > 0) {
        word = msgStr.substring(count, count + maxLength);
        if (dict.includes(word)) {
            return word;
        }
        maxLength--;
    }
}

console.log(longestWord(0));