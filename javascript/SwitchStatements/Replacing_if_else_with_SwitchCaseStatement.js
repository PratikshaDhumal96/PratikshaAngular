//We can change a else if statement into a switch case statement.

function ReplacingIfElseWithSwitchCaseStatement(val){
    var answer="";

    switch(val){
case "bob":
    answer="Marley";
    break;
case 42:
    answer="the answer";
    break;
case 1:
    answer="their is no #1";
    break;
case 99:
    answer="Missed me by this much";
    break;
case 7:
    answer="Ate Nine";
    break;
}

/*
else if( val === 7){
    answer="Ate Nine";*/


    return answer;
}

console.log(ReplacingIfElseWithSwitchCaseStatement(42));

