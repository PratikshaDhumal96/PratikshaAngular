var sum=10+10;
console.log(sum);

// substraction

var difference=55-5;
console.log(difference);

// multiplication
var product=3*3;
console.log(product);

// increment
var myVar = 22;
myVar++
console.log(myVar);

//Decrementing

var myVar=32;
myVar--;
console.log(myVar);

//Multiply Decimal
 var product=2.0*2.5;
 console.log(product);


 //Devide Decimal
 var quotient=2.2/2;
 console.log(quotient);

 //Finding a Remainder
var remainder;
remainder=9%3;
console.log(remainder);

//compound assignment with augmented addition
var a=3;
var b=1;
var c=2;

a+=2;
//a=a+2
// a=3+2
//a=5 
b+=6;
c+=5;

console.log(a);
console.log(b);
console.log(c);

//compound assignment with augmented substraction
var a=3;
var b=1;
var c=2;

a-=2;
b-=6;
c-=5;

console.log(a);
console.log(b);
console.log(c);

//compound assignment with augmented Multiplication
 var a=4;
 var b=5;
 var c=7;

  a*=2;
  b*=3;
  c*=6;

  console.log(a);
console.log(b);
console.log(c);


//compound assignment with augmented Division
var a=4;
var b=3;
var c=18;

 a/=2;
 b/=3;
 c/=6;

 console.log(a);
console.log(b);
console.log(c);


// Escaping literal quotes in string
var mystr="I am A \"double quoted\" string inside \"double quotes\""
console.log(mystr);


//quoting string with single quotes
var mystr='<ahref="http://www.example.com" target="_blank">link<a>';
console.log(mystr);

//escape sequences in string
var mystr="FirstLine\n\t\\SecondLine\nThirdLine";
console.log(mystr);

//concatenating string with plus operator
var mystr="I am first Line. "+"I am second Line."
console.log(mystr);


// concatenating string with plus equal operator
 var mystr="I am first sentence. "
 mystr+="I am second Sentence."

 console.log(mystr);


 //constructing strings with variables
var myName="Pratiksha";
 var mystr="My name is "+myName+" And I am well";
 console.log(mystr);

 //appending variables to string
   var ourStr="Awesome!";
   var myStr="FreeCodeCamp is";
   myStr += ourStr;
   console.log(myStr); 

   //find length of string
    var MyFirstNameLength=0;
    var MyFirstName="Pratiksha";
     MyFirstNameLength=MyFirstName.length;
     console.log(MyFirstNameLength);

     //first letter of string with bracket notation
     var myFirstNameFirstLetter=0;
     var myFirstName="Pratiksha";
     myFirstNameFirstLetter=myFirstName[0];

     console.log(myFirstNameFirstLetter);
