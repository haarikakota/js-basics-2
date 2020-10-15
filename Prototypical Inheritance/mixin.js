function mixin(target,...sources){//Rest operator to get the rest of inputs
    Object.assign(target,...sources)//Spread operator to split array
}


const canEat = {
    eat:function(){
        this.hunger--;
        console.log('eating');
    }
};

const canWalk ={
    walk: function(){
        console.log('walking');
    }
};

const canSwim = {
    swim : function(){
        console.log('swim');
    }
};

function Person(){

}
//Object.assign() method to copy the properties and  methods from one Object to another
//Instead of Object.assign we use mixin
mixin(Perosn.prototype,canEat,canWalk);//the empty object will end up being the combination of canEat & canWalk

const perosn = new Person();
console.log(person);


function Goldfish(){

}

mixin(Goldfish.prototype,canEat,canSwim); 

const goldfish = new Goldfish();
console.log(goldfish);
