/**
 * Created by Cookie on 12-02-2016.
 */
var cars = ["Saab", "Volvo", "BMW"];


function checkCarsName(nameLength) {
    return nameLength.length <= 3;
}


function namesUpperCase(upper) {
    return upper.toUpperCase();
}
//console.log(cars.filter(checkCarsName))
//console.log(cars.map(namesUpperCase))
//----------- 2 --------------------
var carsArray = [];

function myFilter(array, callback) {

    for (var i = 0, max = array.length; i < max; i++) {
        if (callback(array[i])) {
            carsArray.push(array[i])

        }
    }
    return carsArray;
}

function myMap(array, callback) {

    for (var i = 0, max = array.length; i < max; i++) {

        carsArray.push(array[i].toUpperCase())
    }
    return carsArray;
}

//console.log(myFilter(cars, checkCarsName));
//console.log(myMap(cars, namesUpperCase));
//-------------- 3 --------------------------------------------

Array.prototype.myFilter2 = function (callback) {
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            carsArray.push(this[i])
        }
    }
    return carsArray;
}

Array.prototype.myMap2 = function (callback) {
    for (var i = 0; i < this.length; i++) {

        carsArray.push(this[i].toUpperCase())
    }
    return carsArray;
}

//console.log(cars.myFilter2(checkCarsName))
//console.log(cars.myMap2(checkCarsName))
//------------ 4 -------------------------------
var newArray = [];
function handleNumArrays(na1, na2, callback) {
    for (var i = 0; i < na1.length; i++) {
        newArray.push(na1[i] + na2[i])
    }
    callback(newArray);
}
var hopsa = 0;

function sum (array){

        for(var j in array) { hopsa += array[j];
            j++;
        }
//console.log(hopsa );
}
function multiply (array){
    var hopsa = 0;
    hopsa = array.map(function(x){
        return x * 10;
    });

    console.log(hopsa.join(","));
}
var a = [1, 2, 3];
var b = [1, 2, 3];

function addComma(array) {
    console.log(array.join(","))
}
//handleNumArrays(a, b, addComma);
//handleNumArrays(a,b, sum);
handleNumArrays(a,b,multiply)