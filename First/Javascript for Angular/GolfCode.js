var names=["Hole-in-one","Eagle","Birdie","Par","Bogy","Double Boggy","Go Home!"];
function golfScore(par,Strokes){
    if(Strokes==1){
        return names[0];
    }else if(Strokes<=par-2){
        return names[1];
    }
    else if(Strokes==par-1){
        return names[2];//Birdie

    }else if(Strokes==par){
        return names[3];
    }
    else if(Strokes==par+1){
        return names[4];
    }
    else if(Strokes==par+2){
        return names[5];
    }
    else if(Strokes>=par+3){
        return names[6];
    }

}


//Change this values to test.
console.log (golfScore(4,5));
/*
Strokes Return

1        "Hole-in-one";
<=par-2   "Eagle";
par-1     "Birdie":
par        "Par";
par+1      "Bogy";
par+2      "Double bogy";
>=par+3    "Go Home!"  

*/