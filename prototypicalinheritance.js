//encapsulation 
function extend(Child,Parent){
    //whenever reset the prototype of an object reset the constructor
    Child.prototype = Object.create(Parent.prototype);//prototypical inheritance
    Child.prototype.constructor = Child;
}

function Shape(color){
    this.color=color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}


function Circle(radius){
    //Calling from super constructor
    Shape.call(this,color);
    this.radius=radius;
}

//Intermediate function inheritance
extend(Circle,Shape);


//It is must to call after extend method for method Overriding 
//Method overriding means reimplementing a method in a child object
//Here it will return only duplicate Circle, if Shape method should also return we should use line 1 
Circle.prototype.duplicate = function() {
    Shape.prototype.duplicate.call(this); //line 1
    console.log('duplicate circle');
}

Circle.prototype.draw = function(){
    console.log('draw');
}

function Square(size){
    this.size=size;
}

extend(Square,Shape);

Square.prototype.duplicate = function() { 
    console.log('duplicate square');
}

const shapes=[
    new Circle(1),
    new Square()
];

//polymorphism 
for (let shape of shapes)
    shape.duplicate();

const s= new Shape();
const c= new Circle(1);