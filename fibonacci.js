const fibonacci = (number) => {
    let sequenceArray = [0, 1]
    
    for (let i = 2; i <= number; i++){
        let nextNum = sequenceArray[i - 1] + sequenceArray[i - 2];
        sequenceArray.push(nextNum);
       
    }
    return sequenceArray[number]
}

module.exports = fibonacci;