var number = 123

const isPrime = (n) => {
    if (n <= 1) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 == 0) return false;
    var divider = 3;
    var sqrtN = Math.sqrt(n);
    while (sqrtN > divider) {
        if (n % divider === 0) return false;
        divider += 2;
    }
    return true;
}

console.log(isPrime(number));