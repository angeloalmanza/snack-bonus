const filterByLength = (array, number) => {
    const newArray = [];
    for(let i = 0; i < array.length; i++){
        const curItem = array[i];
        if(curItem.length >= number){
            newArray.push(curItem);
        }
    }
    return newArray;
}

const words = ["apple", "cat", "banana", "dog"];
console.log(filterByLength(words, 4));