const generateRandomGuest = (firstName, lastName) => {
    const guests = [];
    while(guests.length < 3){
        const randomFirstName = firstName[Math.floor(Math.random() * firstName.length)];
        const randomLastName = lastName[Math.floor(Math.random() * lastName.length)];
        const fullName = `${randomFirstName} ${randomLastName}`;
        guests.push(fullName);
    }
    return guests;
}

const firstNames = ["Luca", "Maria", "Giovanni", "Francesca", "Paolo"];
const lastNames = ["Rossi", "Bianchi", "Verdi", "Ferrari", "Conti"];

console.log(generateRandomGuest(firstNames, lastNames));