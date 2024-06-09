// 1. Write a javascript code snippet to find a str ⇒ string is palindrome, if it is palindrome console true otherwise false

// let word = "radar";
// let L = word.length;
// let c = (L/2)-0.5;
// let d = L%2;
// console.log("Length of the word",L);
// console.log("c",c);
// console.log("d =", d);
// console.log(word[L-1]);

// if(d!=1){

//     console.log("Not a Palindrome");
// }
// else{
//     for(var i=0, p=L-1; i<=c-1;i++,p--) {

//         if(word[i]==word[p]){continue}

//         else{break;}
//     }
// }
// if(i==c){console.log("A Palindrome");}
// else{console.log("is not a palindrome");}
// console.log("i",i);

// 2. Write a Javascript code snippet to calculate the factorial of a given number using while loop.

// let num = 5;
// var c = 1;
// if(num==0){console.log("Fatorial of 0 = 1");}
// else if(num<0){console.log("Factorial is not defined for negative numbers");}
// else{
//     let i=1;
//     while( i<=5){
//         var c=c*i;
//         i=i+1;
//     }
// }
// console.log("The factorial of ",num,"is ",c);

// 3. Write a Javascript code snippet to find if n variable is prime number or not? if it is prime number console “n is a prime number” otherwise console “n is not a prime number”

// let n = 15;
// let total = 0;
// if (n == 0 || n == 1) {
//   console.log("Please enter a correct number");
// } else {
//   for (let i = 2; i <= n; i++) {
//     if (total == 3) {
//       break;
//     } else if (n % i == 0) {
//       total = total + 1;
//     }
//   }
// }
// if (total == 1) {
//   console.log(n, "is a prime number");
// } else if (total > 1) {
//   console.log(n, "is not a prime number");
// }

// 4. Classic FizzBuzz Challenge

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// 5. Given an integer n, your task is to reverse the integer and console it


// let n = -12345;

// let empty = [];
// let str = n.toString(); //integer to string
// let L = str.length;

// // console.log(str);
// console.log("Length", L);

// if (n == 0) {
//   // console.log(n);}
// }
// // For Positive Number Ending with 0 eg:1234560
// else if (n > 0 && n % 10 == 0) {
//   for (let i = 0, d = 2; i < L - 1; i++, d++) {
//     empty[i] = str[L - d];
//     // console.log(empty);
//   }
//   console.log(empty);
//   newString = empty.join(""); //converting array into string first
//   // console.log(newString)

//   newNum = Number(newString); //Converting string into number now
//   console.log(newNum);
// } else if (n > 0 && n % 10 != 0) {
//   for (let i = 0, d = 1; i <= L - 1; i++, d++) {
//     empty[i] = str[L - d];
//     // console.log(empty);
//   }
//   console.log(empty);
//   newString = empty.join(""); //converting array into string first
//   // console.log(newString)
//   newNum = Number(newString); //Converting string into number now
//   console.log(newNum);
// } else if (n < 0 && n % 10 == 0) {
//   for (let i = 1, d = 2; i < L - 1; i++, d++) {
//     empty[0] = str[0];
//     empty[i] = str[L - d];
//     // console.log(empty);
//   }
//   console.log(empty);
//   newString = empty.join(""); //converting array into string first
//   // console.log(newString)
//   newNum = Number(newString); //Converting string into number now
//   console.log(newNum);
// } else if (n < 0 && n % 10 != 0) {
//   for (let i = 1, d = 1; i <= L - 1; i++, d++) {
//     empty[0] = str[0];
//     empty[i] = str[L - d];
//     // console.log(empty);
//   }
//   console.log(empty);
//   newString = empty.join(""); //converting array into string first
//   // console.log(newString)
//   newNum = Number(newString); //Converting string into number now
//   console.log(newNum);
// }



// 6. Reverse the string using javascript for loop and while loop, and make all the letters to lower case

// let str = ("Hello world!");
// let empty = [];
// for(let i = 0, j = str.length; i<=str.length; i++,j--){
//   empty[i]=str[j]; 
//   console.log(empty);
// } 
// let newString = empty.join("");
// console.log(newString.toLowerCase());  

// First Question can be done using this same logic and comparing the two strings at the end

// 7. Create a code snippet to calculate shipping cost

let cost = 4200; //Total buying at the shop
let area = "gulsha"; // area2 = "Defence"; area3 = "clifton"; area4 = "Gulshan";
// let location = area.toLowerCase();


if(cost>=5000){console.log("Shipping will be free!")}

else if(area == "defence"||area == "clifton"){
    if(cost>1000){console.log("Shipping Free!!!")}
    else{console.log("Shipping cost is PKR 200")}
  }

else if(area == "gulshan"){
  if(cost>2000){console.log("Shipping will be Free!!!")}
    else{console.log("Shipping cost is PKR 300")}
}
else if(area == "nazimabad"){
  if(cost>3000){console.log("Free Shipping!!!")}
    else{console.log("Shipping cost is PKR 500")}
}
else{
  if(cost<5000){console.log("The shipping will be PKR 700")}
  else{console.log("Shipping will be Free!!!")}
}





