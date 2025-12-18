let arr1 = [1,2,3,4];
let arr2 = [1,2,3,4];

arr1.sayHello = () => {
    console.log("hello!,I am arr");
}

arr2.sayHello = () => {
    console.log("hello!,I am arr");
} 


// factory function
function PersonMaker(name,age){
    const person = {
        name : name,
        age : age ,
        talk() {
            console.log(`Hi my name is ${this.name}`);
        }
    }
    return person;
}

let p1 = PersonMaker("siddhi",22);
let p2 = PersonMaker("Prasad",23);