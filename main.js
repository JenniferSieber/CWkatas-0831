// 6kyu, 7kyu, 8kyu
// KATA 1 8kyu
// https://www.codewars.com/kata/57256064856584bc47000611/train/javascript
const howManySmaller = (arr, n) => arr.filter(num => +num.toFixed(2) < n).length;

console.log(howManySmaller([1.234,1.235,1.228], 1.24));
console.log(howManySmaller([3.1288,3.1212,3.1205], 3.1212));

// KATA 2 8kyu
// https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript
const cutIt = arr => {
  if (arr.length === 0) return null;
  let shortest = arr[0];
  arr.forEach(str => {
    if (str.length < shortest.length) {
      shortest = str;
    }
  });
  return arr.map(str => str.slice(0, +shortest.length));
}

 console.log(cutIt(["ab","cde","fgh"]));

// KATA 3 8kyu
// https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript
const firstToLast = (str, c) => str.indexOf(c) == -1 ? -1 : +str.lastIndexOf(c) - +str.indexOf(c);

console.log(firstToLast("ababc","a")); 
console.log(firstToLast("ababc","c")); 
console.log(firstToLast("ababc","d")); 

// KATA 4 8kyu
//  https://www.codewars.com/kata/5728203b7fc662a4c4000ef3
const alienLanguage = str => str.toUpperCase().split(' ').map((word) => word.replace(/.$/, match => match.toLowerCase())).join(' ');

console.log(alienLanguage("My name is John"));  
console.log(alienLanguage("Hello WorlD"));  

// KATA 5 8kyu
// https://www.codewars.com/kata/57280481e8118511f7000ffa
const splitAndMerge = (string, separator) => string.split(' ').map(word => {
    return word.split('').join(separator)
  }).join(' ');

console.log(splitAndMerge("My name is Jennifer","*"));


