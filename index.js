var count = 0;
const isPrime = (n) => {
    if (n <= 1) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0) return false;
    var divider = 3;
    while (n > divider) {
        if (n % divider === 0) return false;
        divider += 2;
    }
    return true;
}

for (let i = 0; i < 25; i++) {
    if (isPrime(i)) {
        console.log(i);
        count++;
    }

}
console.log(count);