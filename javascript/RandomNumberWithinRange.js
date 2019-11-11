

function ourRandomRange(OurMin,OurMax){

    return Math.floor(Math.round() * (OurMax-OurMin+1))+OurMin;
}

var MyRandom=ourRandomRange(1,9);
console.log(MyRandom);