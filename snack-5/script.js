const getNames = (people) => {
    const adults = people.filter(person => person.age >= 18);
    const names = adults.map(person => person.name);
    return names;
};

const people = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 15 },
    { name: "David", age: 21 }
  ];

console.log(getNames(people));