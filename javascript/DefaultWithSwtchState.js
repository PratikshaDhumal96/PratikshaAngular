function defaultSwitchstate(val){
     var answer="";
     switch(val){
        case "a":
            answer="Apple";
            break;
        case "b":
            answer="bat";
            break;
         case "c":
             answer="cat";
        default:
            answer = "stuff";
       break;
     }
     return answer;
}

console.log(defaultSwitchstate("5"));