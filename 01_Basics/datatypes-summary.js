// Stack (Primitive), Heap (Non-Primitive)

let myName = "sachinuikey"

let anothername = myName
anothername ="chiku"

console.log(myName);
console.log(anothername);

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email= "sachin@google.com"

console.log(userOne.email);
console.log(userTwo.email);