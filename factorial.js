function factorial(num){
    fact = 1
    while (num > 0){
        fact = fact * num
        num--
    }
    return fact
}

module.exports = factorial;