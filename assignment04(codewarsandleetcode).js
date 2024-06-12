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


// 7. Find the smallest integer in the array

// const array = [34, -345, -1, 100];

// function smallestInteger(array) {
//   let min = Infinity;
//   for (let i of array) {
//     if (i < min) {
//       min = i;
//     }
//   }
//   return min;
// }
// console.log(smallestInteger(array))

// 8. Ones and Zeros

// arr = [0,1,1,1,1,1]
// let total = 0;
// revArr= arr.reverse();
// for(key in revArr){
//   total+=revArr[key]*2**key
// }


// 9. CSV representation of array

// let arr =   [
//   [ 0, 1, 2, 3, 4 ],
//   [ 10,11,12,13,14 ],
//   [ 20,21,22,23,24 ],
//   [ 30,31,32,33,34 ]
// ] 
// matrixLength = arr.length;
// for (key in arr) {
//   if (key == 0) {
//     newStr = arr[key].join(",") + "\n";
//   } else if (key == matrixLength - 1) {
//     newStr += arr[key].join(",");
//   } else {
//     newStr += arr[key].join(",") + "\n";
//   }
//   }
// console.log(newStr);


// 10. String reverse slicing 101

// function reverseSlice(str) {
//   let rev = "";
//   let count = str.length - 1;
//   let arr = [];
//   for (key in str) {
//     rev += str[count];
//     count--;
//   }
//   count = str.length;
//   for (key in rev) {
//     eachIndex = rev.slice(key, count);
//     arr.push(eachIndex);
//     }
//   return arr ;
//   }
//   console.log(reverseSlice("1234"))




  // 11. Find the missing element between two arrays

//   function findMissing(arr1, arr2) {
//   sortedArr1 = arr1.sort()
//   sortedArr2 = arr2.sort()
//   for(key in sortedArr1){
//     if(sortedArr1[key]==sortedArr2[key]){
//       continue
//     }
//   else return sortedArr1[key]

// }
// }

// 12. Digitize

function digitize(n) {
  convToStr = n.toString().split("")
  digit=[]
for(arr of convToStr){
  digit.push(Number(arr))
  }
return digit
}
digitize(123)





// Leetcode
// 13.Search Insert Position
function finding(nums, target) {
  function compareNumbers(a, b) {
    return a - b;
  }
  
  if(nums.includes(target)){
      return nums.indexOf(target)
  }
  else {
      nums.push(target)
      return nums.sort(compareNumbers).indexOf(target)
  }
  
};
// console.log(finding([3,5,7,9,10],8))

// 14.Length of Last Word
function find(s) {
  arr = s.trim().split(" ")
  return arr[arr.length-1].length
};

// console.log(find("   fly me   to   the moon  "))







