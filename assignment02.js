// 1. Find the smallest number in array
// let numbers = [5,3,9,1,6];
// let a= "";
// // let a = numberss.sort();
// // console.log("least", a[0])    //using sort function the problem has been solved

// for(i=0; i<numbers.length-1; i++){
//     if(numbers[i]<numbers[i+1]){
//         a=numbers[i];
//     }
//     else{continue}
// }
// console.log(typeof a, a);


// 2. Find the longest word in string

// let sentence1 = "The quick brown fox jumps over the lazy dog";
// let max="";
// const cut= sentence1.split(" ");
// for(i=0; i<=cut.length-1;i++){
    
//     if(cut[i].length>=max.length){
//         max=cut[i];
//     }
//     else{continue}
// }
// console.log(max)

// Part 2

// let sentence1 = "A journey of a thousand miles begins with a single step";
// let max="";
// const cut= sentence1.split(" ");
// for(i=0; i<=cut.length-1;i++){
    
//     if(cut[i].length>=max.length){
//         max=cut[i];
//     }
//     else{continue}
// }
// console.log(max)

// Part 3


// let sentence1 = "Supercalifragilisticexpialidocious is a very long word";
// let max="";
// const cut= sentence1.split(" ");
// for(i=0; i<=cut.length-1;i++){
    
//     if(cut[i].length>=max.length){
//         max=cut[i];
//     }
//     else{continue}
// }
// console.log(max)




// 3. Title Case a sentence
// let sentence1 = "I'm a little teapot short and stout";
// let sentence2 = sentence1.toLowerCase();
// let titleCaseSentence=[];

// let breakSentToWords = sentence2.split(" ");
// // console.log(breakSentToWords);

// let spanOfSentence = breakSentToWords.length;
// // console.log("spanOfSentence=",spanOfSentence)

// for(i=0;i<=spanOfSentence-1;i++){
// singleWord = breakSentToWords[i]; 
// // console.log("Single Alphabet = ",singleWord);

// firstAlphabet=singleWord[0].toUpperCase();
// // console.log("First Alphabet for every word= ",firstAlphabet)

// titleCaseWord=singleWord.replace(singleWord[0],firstAlphabet);
// console.log(titleCaseWord)
// titleCaseSentence[i]=titleCaseWord;
// // console.log("sent",titleCaseSentence)
// }
// console.log(titleCaseSentence.join(" "))


// Part 2


// let sentence1 = "sHoRt AnD sToUt";
// let sentence2 = sentence1.toLowerCase();
// let titleCaseSentence=[];

// let breakSentToWords = sentence2.split(" ");
// // console.log(breakSentToWords);

// let spanOfSentence = breakSentToWords.length;
// // console.log("spanOfSentence=",spanOfSentence)

// for(i=0;i<=spanOfSentence-1;i++){
// singleWord = breakSentToWords[i]; 
// // console.log("Single Alphabet = ",singleWord);

// firstAlphabet=singleWord[0].toUpperCase();
// // console.log("First Alphabet for every word= ",firstAlphabet)

// titleCaseWord=singleWord.replace(singleWord[0],firstAlphabet);
// console.log(titleCaseWord)
// titleCaseSentence[i]=titleCaseWord;
// // console.log("sent",titleCaseSentence)
// }
// console.log(titleCaseSentence.join(" "))


// Part 3


// let sentence1 = "HERE IS MY HANDLE HERE IS MY SPOUT";
// let sentence2 = sentence1.toLowerCase();
// let titleCaseSentence=[];

// let breakSentToWords = sentence2.split(" ");
// // console.log(breakSentToWords);

// let spanOfSentence = breakSentToWords.length;
// // console.log("spanOfSentence=",spanOfSentence)

// for(i=0;i<=spanOfSentence-1;i++){
// singleWord = breakSentToWords[i]; 
// // console.log("Single Alphabet = ",singleWord);

// firstAlphabet=singleWord[0].toUpperCase();
// // console.log("First Alphabet for every word= ",firstAlphabet)

// titleCaseWord=singleWord.replace(singleWord[0],firstAlphabet);
// // console.log(titleCaseWord)
// titleCaseSentence[i]=titleCaseWord;
// // console.log("sent",titleCaseSentence)
// }
// console.log("Title Case Sentence = ",titleCaseSentence.join(" "))


// 4: Add a new subject Urdu to subjects array in student object

// let student = {
//     name: "John Doe",
//     age: 21,
//     subjects: ["Math", "Physics", "Chemistry"],
//     isEnrolled: true,
//     };
//     console.log(student);    

//     student.subjects.push("Urdu");
    
//     console.log(student);

// 5. Find two largest number in an array numbers , print the result largest numbers array in sorted order.

// let numbers = [34, 3, 9, 23, 16];
// let large=[];
// newNum = numbers;
// // console.log(newNum)
// for(i=0;i<=1;i++){
//     intVal=newNum[0];
//     // console.log(intVal);
//     c=newNum.length;
//     // console.log(c)

//     for(j=1;j<=c-1;j++){
//         secVal=newNum[j];
//         if(intVal<=secVal){
//             intVal=secVal;
//             newVal=intVal;
//             // console.log(newVal)
//         }
//         else{newVal=intVal}
//     }
//     // console.log(newVal)
//     rem=newNum.indexOf(newVal)
//     // console.log(rem)
//     newNum.splice(rem,1);
// large[i]=[newVal]
// // console.log(large)
// }
// if(large[0]>large[1]){
//     console.log(large.reverse())
// }
// else{console.log(large)
// }



// Part 2

// let numbers = [5, 10, 11, 3, 16];
// let large=[];
// newNum = numbers;
// // console.log(newNum)
// for(i=0;i<=1;i++){
//     intVal=newNum[0];
//     // console.log(intVal);
//     c=newNum.length;
//     // console.log(c)

//     for(j=1;j<=c-1;j++){
//         secVal=newNum[j];
//         if(intVal<=secVal){
//             intVal=secVal;
//             newVal=intVal;
//             // console.log(newVal)
//         }
//         else{newVal=intVal}
//     }
//     // console.log(newVal)
//     rem=newNum.indexOf(newVal)
//     // console.log(rem)
//     newNum.splice(rem,1);
// large[i]=[newVal]
// // console.log(large)
// }
// if(large[0]>large[1]){
//     console.log(large.reverse())
// }
// else{console.log(large)
// }

// Part 3

// let numbers = [5, 30, 11, 3, 16, 30, 21, 9];
// let large=[];
// newNum = numbers;
// // console.log(newNum)
// for(i=0;i<=1;i++){
//     intVal=newNum[0];
//     // console.log(intVal);
//     c=newNum.length;
//     // console.log(c)

//     for(j=1;j<=c-1;j++){
//         secVal=newNum[j];
//         if(intVal<=secVal){
//             intVal=secVal;
//             newVal=intVal;
//             // console.log(newVal)
//         }
//         else{newVal=intVal}
//     }
//     // console.log(newVal)
//     rem=newNum.indexOf(newVal)
//     // console.log(rem)
//     newNum.splice(rem,1);
// large[i]=[newVal]
// // console.log(large)
// }
// if(large[0]>large[1]){
//     console.log(large.reverse())
// }
// else{console.log(large)
// }


//6. Managing a library: Array of Objects

let library=[
    {   title:"Harry Potter",
        author:"J.K. Rowling",
        yearPublished: 1997
    },
    {
        title:"The Lord of the Rings",
        author:"J.R.R. Tolkien",
        yearPublished: 1954
    },
    {
        title:"The Kite Runner",
        author:"Khaled Hosseini",
        yearPublished: 2003
    }];

    // console.log(library)

    library.push({title:"System Design",
    author:"unknow",
    yearPublished: 0})

//     console.log(library)

// for(i=0;i<library.length;i++){

//     if(library[i].title === "System Design"){
//         order=i;
//         console.log(library[order]);
//         break
//     }
//     else{continue}
// }

// for(i=0;i<library.length;i++){

//     if(library[i].title === "Harry Potter"){
//         del=i;
//         delete library[del] === "Harry Potter"
//         break;
//     }
//     else{continue}
// }
// console.log(library);

//Update or modify year published

for(i=0;i<library.length;i++){

    if(library[i].title === "Harry Potter"){
        mod=i;
        library[mod].yearPublished = 1999;
        break;
    }
    else{continue}
}
console.log(library)