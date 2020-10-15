//Constructor function
function Cricle(radius) {
    // Instance members
    this.radius = radius,

        this.move = function () {
            console.log('move');
        }
}

const c1 = new Cricle(1);

//Prototype members
Cricle.prototype.draw = function () {
    console.log('draw');
}

//Only returns Instance members
console.log(Object.keys(c1));

//Returns all members(Instance & Prototype)
for (let key in c1) console.log(key)