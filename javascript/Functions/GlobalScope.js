// variables that are defined in outside the functions block have global scope. 

var myGlobal=10;
 


function fun1(){
    //Assign 5 to oopsGlobal here
   var oopsGlobal=5;// Normally if you do use a var keyword since this is with any function it will be scope to that function, Otherwise it is global varial like oopsGlobal=5 is use throughout the function.
}

function fun2(){
    var output="";
    if (typeof myGlobal != "undefined") {
        output+= "myGlobal :"+myGlobal;
    }
    if(typeof oopsGlobal !="undefined"){
        output+="oopsGlobal:"+oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();