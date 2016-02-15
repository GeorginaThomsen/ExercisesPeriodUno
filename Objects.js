/**
 * Created by Cookie on 12-02-2016.
 */
//--------- 1 -----------------------------
var person = {
    firstName: "John",
    lastName: "Smith",
    hobby: "AcroYoga",
    email: "john@hotmail.com"
};
for(item in person){
console.log(person[item])
}
delete person.email;
for(item in person){
console.log("After delete: "+person[item])
}
//person.hasOwnProperty("lastName");
//console.log(person.hasOwnProperty("lastName"));
if(person.hasOwnProperty("lastName")){
   console.log("Person has property lastname: "  + person.lastName)
}
//------- 2 -------------------------------------------------------

function person1(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;

    this.getDetail = function(first, last, age){
        //return "age: " + this.age;
        return "Detail: "+ this.firstName + ", "+ this.lastName + ", " + this.age;
    };
}

var newPerson = new person1("John", "Doe", 50);
console.log(newPerson.getDetail());
//--------- 3 -----------------------------------

var pet ={
    type: "Goldfish",
    name: "Goldie Gold",
    hobby: "Backstroke",
    color: "Gold",
    email: "SexyLady@hotmail.com"
};
function listAllProperties(o){
    var objectToInspect;
    var result = [];

    for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)){
        result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    }

    return result;
}
//console.log("before delete"+listAllProperties(pet))
console.log("before delete: "+ Object.keys(pet))

delete pet.email;
//console.log("after delete: "+ listAllProperties(pet))
console.log("after delete: "+ Object.keys(pet) )
