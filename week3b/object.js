let animal = {
    name: 'Kitty',
    age: 5,
    type: 'cat',
    color: 'black',
    setColor: function (newColor) { this.color = newColor },
    setType: function (newType) { this.type = newType }
};

let animal1 = Object.create(animal);
let animal2 = Object.create(animal);

animal2.setColor("white");
animal2.setType("dog");

console.log("animal1.type: " + animal1.type);
console.log("animal2.type: " + animal2.type);

console.log("animal1.color: " + animal1.color);
console.log("animal2.color: " + animal2.color);

console.log("animal1: " + animal1);