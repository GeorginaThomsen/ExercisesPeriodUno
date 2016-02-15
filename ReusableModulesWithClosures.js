/**
 * Created by Cookie on 12-02-2016.
 */

var makeCounter = function () {
    var privateCounter = 0;

    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        }
    }
};
var counter1 = makeCounter();
var counter2 = makeCounter();
counter1.increment();
counter1.increment();
//lert(counter1.value()); /* Alerts 2 */
console.log(counter1.value());
console.log(counter2.value());
//--------- 2 ---------------------

objectBuilder = (function () {
    var reusableModule = {};

    reusableModule.age;
    reusableModule.name;

    reusableModule.setAge = function (myAge) {
        reusableModule.age = myAge;
    };
    reusableModule.setName = function (myName) {
        reusableModule.name = myName;
    };
    reusableModule.getInfo = function () {
        return "Age: " + reusableModule.age + " Name: " + reusableModule.name;
    };
    return reusableModule;


});
var newOb = objectBuilder();
newOb.setAge("99");
newOb.setName("Astrid")
console.log(newOb.getInfo());