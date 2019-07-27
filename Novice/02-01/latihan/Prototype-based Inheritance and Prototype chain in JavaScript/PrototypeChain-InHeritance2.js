function Animal(className) {
    this.className = className;
}

Animal.prototype.getClass = function() {
    return 'Animal class is : ' + this.className;
};

function Dog(name) {
    this.name = name;
}

Dog.prototype = Animal.prototype;

Dog.prototype.getName = function() {
    return this.name;
}

var d = new Dog('Tommy');
console.log(d);
console.log(d.__proto__);