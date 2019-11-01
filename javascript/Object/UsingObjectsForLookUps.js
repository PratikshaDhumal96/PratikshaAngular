// function phoneticLookup(val){
//     var result="";

//     switch (val){

//         case "alpha":
//             rseult="Adamas";
//             break;
//         case "bravo":
//             result="Boston";
//             break;
//         case "charlie":
//             result="chicago";
//             break;
//         case "delta":
//          result="denver";
//          break;
//         case "echo":
//             result="easy";

//     }
// return result;
// }

// console.log(phoneticLookup("echo"));


function phoneticLookup(val){
    var result="";

var Lookups={
  "alpha": "Adamas",
  "bravo":"Boston",
  "charlie":"chicago",
  "delta":"denver",
  "echo":"easy", 
}


    // switch (val){

    //     case "alpha":
    //         rseult="Adamas";
    //         break;
    //     case "bravo":
    //         result="Boston";
    //         break;
    //     case "charlie":
    //         result="chicago";
    //         break;
    //     case "delta":
    //      result="denver";
    //      break;
    //     case "echo":
    //         result="easy";

    // }
    result=Lookups[val];//why we don't use dot notation for accessing the object properties//Here if we want the result from the function we need to use bracket notation with value like ;;result=Lookups[val];
return result;
}

console.log(phoneticLookup("echo"));
