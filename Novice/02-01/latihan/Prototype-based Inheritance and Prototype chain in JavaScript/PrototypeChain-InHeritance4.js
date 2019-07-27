function Animal(className) {
    this.className = className;
}

Animal.prototype.getClass = function() {
    return 'Animal class is : ' + this.className;
}

function Dog(name) {
    Animal.call(this, 'Animal');
    this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;

Dog.prototype.getName = function() {
    return this.name;
}

var d = new Dog('Tommy');

console.log(d);
console.log(d.getClass());