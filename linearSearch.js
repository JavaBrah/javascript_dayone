function globalLinearSearch(item, array){
    
    let indexListForItem = [];
  
    for (let i = 0; i < array.length; i++){

        if (item == array[i]){
            indexListForItem.push(i)
        }
    }
    return indexListForItem
}