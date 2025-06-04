function romanNumerals(number){
    const romanNumeralConversion = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    }

    let numberConvertedToRoman = ''
    const keys = Object.keys(romanNumeralConversion).map(Number).sort((a, b) => b - a);
    
    for (let key of keys){
        let count = Math.floor(number / key);
        numberConvertedToRoman += romanNumeralConversion[key].repeat(count);
        number -= key * count;
    }

    return numberConvertedToRoman;
}

module.exports = romanNumerals;