function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1:
            answer="alpha";
            break;
        case 2:
            answer="beta";
            break;
        case 3:
            answer="gamma";
            break;
        case 4:
            answer="delta";        
            break;
        }


    return answer;
}


console.log(caseInSwitch(3));


/*
write a switch statement which test val and sets answer for the following conditions:

1-"alpha";
2-"beta";
3-"gamma"'
4-"delta"

*/