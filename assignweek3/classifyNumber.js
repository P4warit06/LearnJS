function ClassifyNumber(num) {
    if (num > 0) {
        return 'positive';
    } else if (num < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}
console.log(ClassifyNumber(5)); // returns positive
console.log(ClassifyNumber(-3)); // returns negative
console.log(ClassifyNumber(0)); // returns zero
