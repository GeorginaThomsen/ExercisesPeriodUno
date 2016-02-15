/**
 * Created by Cookie on 12-02-2016.
 */

//---- Hoisted Function ------------
hoisted(); // logs "foo"

function hoisted() {
    console.log("foo");
}
//----Hoisted Variable-------------

var name = "Baggins";

(function () {
    // Outputs: "Original name was undefined"
    console.log("Original name was " + name);

    var name = "Underhill";

    // Outputs: "New name is Underhill"
    console.log("New name is " + name);
})();