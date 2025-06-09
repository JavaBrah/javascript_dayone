

const findArmstrongNumber = (arr) => {
    const armstrongNumberList = [];
    for (let num of arr){
        let stringNum = num.toString();
        let exponent = stringNum.length;
        let total = stringNum
                    .split("")
                    .map(x => parseInt(x) ** exponent)
                    .reduce((acc, val) => acc + val, 0);
        if (num == total){
            armstrongNumberList.push(total);
        }
    }
    return armstrongNumberList
}

//console.log(findArmstrongNumber([1, 2, 13, 371]))


const isItAnagram = (word, anotherWord) => {
    if (word.length != anotherWord.length){
        return false;
    }
    let word_dic = {};
    for (let c of word.toLowerCase()){
        if (c in word_dic){
            word_dic[c]++;
        } 
        else {
            word_dic[c] = 1;
        }    
    }
    console.log(word_dic)
    for (let c of anotherWord.toLowerCase()){
        if (c in word_dic && word_dic[c] > 0){
            word_dic[c]--;
        }
        else{
            return false
        }
    }
    return true
}

// console.log(isItAnagram('CharM', 'mARcH'));
// console.log(isItAnagram('abcde2', 'c2abed'));


