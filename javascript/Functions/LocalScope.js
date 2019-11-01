//Variables which are declared with in functions as well as the function parameters have a local scope.

function LocalScope(){
    var myVar=5;
    console.log(myVar);
}

LocalScope();

// console.log(myVar); ReferenceError: myVar is not defined