const somma = () => {
    let somma = 0;
    for(let i = 1; i <= 10; i++){
        somma += i;
    }
    return somma;
}

console.log(somma());

const media = () => {
    let media = 0;
    let counter = 0;
    for(let i = 1; i <= 10; i++){
        media += i;
        counter++;
    }
    return parseFloat(media / counter);
}

console.log(media());