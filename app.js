console.log("Hello world");
let a=100;
let b=20;
console.log("the sum is ",a+b);
let pencilPrice=10;
let penPrice=5;

let output =`the complete price is ${pencilPrice+penPrice} rupees` ;
console.log(output);
//Arithmetic Operators
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a%b);
console.log(a/b);


console.log("Unary Operators");

//Unary operators
a++;
console.log(a);
a--;
console.log(a);
++a;
console.log(a);
--a;
console.log(a);


console.log("Comparison Operators");

console.log("Conditional Statement");

let color="yellow";

if(color=="red"){
    console.log(`The color is ${color} and you have to stop`);
}
else if(color=="green"){
    console.log(`the color is ${color} and you  can go`);
}
else{
    console.log(`The color is ${color} and you have to drive slowly`);
}

//Good String

console.log("Good String");

let str="amit Suresh Chandure";

if(str[0]=='a'&& str.length>3){
    console.log(`The string ${str} is a good String`);
}
else{
    console.log(`The string ${str} is not a good String`);

}

//Switch Variable

let day=4;
switch(day){
    case 1:console.log("Monday");
    break;
    case 2:console.log("Tuesday");
    break;
    case 3:console.log("Wednesday");
    break;
    case 4:console.log("Thursday");
    break;
    case 5:console.log("Friday");
    break;
    case 6:console.log("Saturday");
    break;
    case 7:console.log("Sunday");
    break;
    default:console.log("Invalid Day");
    break

}