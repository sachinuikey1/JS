const name = "sachin"
const repoCount = 50

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sachinu')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('c'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7, 3)
console.log(anotherString);

// url => replace the %20 in " - " the url. // talkinking string in array.

const url = "https://sachin.com/sachin%20uikey"

console.log(url.replace('%20', '-'))

console.log(url.includes('sachin'))

console.log(gameName.split(' - '));