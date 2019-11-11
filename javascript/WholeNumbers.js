// How to generate random whole Number. start from 2:28:55


var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

// Remember Math.floor() = this rounds down to the nearest whole Number.
//Remember Math.random() = can never be one,it can be 0 but it can't be 1.


function randomWholeNum(){

    return Math.floor(Math.random()*10);
}

console.log(randomWholeNum()); //It will display random numbers like anyone between 0 to 1o e.g

// PS D:\pratiksha official\CodeKul\Project\PratikshaAngular\javascript> node WholeNumbers.js
// 2
// PS D:\pratiksha official\CodeKul\Project\PratikshaAngular\javascript> node WholeNumbers.js
// 5
// PS D:\pratiksha official\CodeKul\Project\PratikshaAngular\javascript> node WholeNumbers.js
// 5
// PS D:\pratiksha official\CodeKul\Project\PratikshaAngular\javascript> node WholeNumbers.js
// 4
// PS D:\pratiksha official\CodeKul\Project\PratikshaAngular\javascript> node WholeNumbers.js
// 9
// PS D:\pratiksha official\CodeKul\Project\PratikshaAngular\javascript>  node WholeNumbers.js
// 3
// PS D:\pratiksha official\CodeKul\Project\PratikshaAngular\javascript>  node WholeNumbers.js
// 0
// PS D:\pratiksha official\CodeKul\Project\PratikshaAngular\javascript>  node WholeNumbers.js
// 7
// PS D:\pratiksha official\CodeKul\Project\PratikshaAngular\javascript>  node WholeNumbers.js
// 2