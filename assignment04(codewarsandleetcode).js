// 3. 
// function abbr(name){
// breaker=name.split(" ")

// firstInitial=breaker[0][0].toUpperCase();
// secondInitial=breaker[1][0].toUpperCase();

// return firstInitial+"."+secondInitial
// }

// console.log(abbr("John eenderson"))


// 4.
// arrayOfObjects = [
//     {'4': 'dog' },
//     {'2': 'took'},
//     {'3': 'his'},
//     {'-2': 'Vatsan'},
//     {'5': 'for'},
//     {'6': 'a'},
//     {'12': 'spin'}
// ]

// function sentence(arrayOfObjects) {
//     sent=[];
//     for(i=-999;i<1000;i++){
//         for(j=0;j<arrayOfObjects.length;j++){
//             if(typeof arrayOfObjects[j][i] == "undefined"){continue}
//             else{sent.push(arrayOfObjects[j][i])}
//         }
//     }
//     sent=sent.join(" ");
//     return sent;

//     }
//     sentence(arrayOfObjects)

// 5. Is it a letter?

// function isItLetter(character) {
// alphabets = "abcdefghijklmnopqrstuvwxyz";
// letter = character.toLowerCase();
// answer = false;
// for (key in alphabets) {
// if (letter == alphabets[key]) {
//     answer = true;
// }
// }
// return answer;
// }
// isItLetter("a");
