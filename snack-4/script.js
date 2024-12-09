const indexOddSum = (array) => {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        const curItem = array[i];
        if(i % 2 !== 0){
            sum += curItem;
        }
    }
    return sum;
}

const numbers = [23, 45, 12, 67, 89, 34, 55, 10, 78, 91];
console.log(indexOddSum(numbers));