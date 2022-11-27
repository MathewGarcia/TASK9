function reverseThisString(string){
    return string.split("").reverse().join("");
}

console.log(reverseThisString("hello"));

function swapCase(string) {
    string.split("");
    var newStr = "";
    for(var i = 0; i <  string.length; i++){
    if(string[i] == string[i].toLowerCase()){

        newStr += string[i].toUpperCase();
    }
    else {

        newStr += string[i].toLowerCase();
     }
     
    }
        return newStr;
}

console.log(swapCase("Hello World"));


const temps = [23, 32, 41, 50, 59];

function toCelcius(array){
    return (array-32)*(5/9);
}
const Celcius = temps.map(toCelcius);


console.log(Celcius);

const scores = [20, 30, 50, 80, 90, 100];

function passOrFail(array){
    if(array >= 75){
        return true;
    }
    return false;
}

const grades = scores.map(passOrFail);
console.log(grades);

function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];

    for(var i = 0; i < cardinalNumbers.length; i++){
        console.log(`${cardinalNumbers[i]} is ${germanNumbers[i]}`)
    }

}

console.log(germanNumbers());

function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    numbers.filter(function(num){
        for(var i = 2; i < num;i++){
            if(num%i == 0){
                //not a prime number
                break;
            }
            else {
                console.log(`${num}`);
            }
        }
    });
}

console.log(returnPrimeNumbers());

function count(){
    let num = 0;
    for(var i = 0; i < 100; i++){
        num = i + 1;
        if(num % 3 == 0 && num%5 == 0){
            console.log("CSC225 RULES I LOVE JAVASCRIPT");
        }
        else if(num%3 == 0){
            console.log("CSC225 RULES");
        }
        else if(num%5 == 0){
            console.log("I LOVE JAVASCRIPT");
        }
        else {
            console.log(num);
        }
    }
}
console.log(count());