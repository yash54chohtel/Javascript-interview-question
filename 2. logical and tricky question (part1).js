/*

1. what will be the output

function fruit(){
    console.log(name); 
    // undefined due to hoisting
    console.log(price); 
    // access before initialization because we cannot use litreals or constant before initilizaiton
    var name = "apple";
    let price = 20;
}

fruit();

======================================================================

2. what will be the output

for (var i = 0; i<3; i++){
    setTimeout(()=> console.log(i),1)
}

3 3 3 because i has global scope and log is indise timeout the function finished before loging the output this is why it output 3 3 3 because i has global value of 3

======================================================================

3. what will be the output

for (let i = 0; i<3; i++){
    setTimeout(()=> console.log(i),1)
}

output
0
1                                   
2  

======================================================================

4. what will be the output

console.log(+true);
-> 1
console.log(typeof +true);
-> number  if we put plus sign before it will convert into numeric value

======================================================================

5. what will be the output

console.log(!"anil");
-> false
console.log(typeof("anil"));
-> string 

======================================================================

6. what will be the output

let data = "size";
const bird = {
    size : "small"
}

console.log(bird[data]);
// -> small
console.log(bird["size"]);
// -> small
console.log(bird.size);
// -> small
console.log(bird.data);
// -> undefined

======================================================================

7. what will be the output

let c = {name:"peter"}
let d;
d = c;
c.name = "anil";
console.log(d.name);
-> anil 
// because if we assign a same object to different variable the refrence is same to all variable so if we change to one it will automatically change another variable

======================================================================

8. what will be the output

var x;
var x = 10;
console.log(x);

======================================================================

9. what will be the output

var x;
let x = 10;
console.log(x);

======================================================================

10. what will be the output

let a = 3;
let b = new Number(3); 
// if we cheate a new instance with new keyword it always create a object so the data type of number and object is not same value can be same

console.log(a == b);
-> true
console.log(a === b);
-> false

======================================================================

11. what will be the output

let name;
nmae = {}; // typo!
console.log(name);

======================================================================

12. what will be the output

function fruit(){
    console.log("woof!");
}
fruit.name = 'aaple';
fruit();

======================================================================

13. what will be the output

function sum(a,b){
    return a+b;
}
console.log(sum(1,"4"));
-> 14 // because 4 is not a number it is string and if we add number and string it will added as a string.
console.log(typeof(sum(1,"4")));
-> string

======================================================================

14. what will be the output

let number = 0;
console.log(number++);
-> 0
console.log(++number);
-> 2
console.log(number);
-> 2

======================================================================

15. what will be the output

function getAge(...args){
    console.log(typeof args);
    // -> object
}

getAge(21);

======================================================================

16. what will be the output

function getAge(){
    'use strict';
    age = 21;
    console.log(age);
    // -> age is not defined
}

getAge();

======================================================================

17. what will be the output

const sum = eval("10*10+5")
// eval() it will convert the string into numeric operation
console.log(sum);
// -> 105

======================================================================

18. what will be the output

"how long is cool_secter accessible?"

sessionStorage.setItem('cool_secret',123);
// in session storate it will clear the storate when tab is clossed

localStorage.setItem('cool_secret', 123)
// in local storate it will clear the storate after 30 days or after clearing the chace;


======================================================================

19. what will be the output

const obj = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
};

console.log(obj.hasOwnProperty("1"));
// -> ture
console.log(obj.hasOwnProperty(1));
// -> ture

======================================================================

20. what will be the output

const obj = {
    a: "one",
    b: "two",
    a: "repeat"
}

console.log(obj);
// -> { a: 'repeat', b: 'two' }
// we overide the value of a but the position of key will be same in javascript

======================================================================

21. what will be the output

for(let i = 1; i<5; i++){
    if(i === 3) continue;
    console.log(i);
}

output
1
2
4

======================================================================

22. what will be the output

const foo = () => console.log("first");
const bar = () => setTimeout(()=> console.log("second"));
const baz = () => console.log("third");

bar();
foo();
baz();

======================================================================

23. which log will be first

html:-

<div onclick="console.log('first div')">
    <div onclick="console.log('second div')">
        <button onclick="console.log('button')"> click </button>
    </div>
</div>

button
second div
first div 

because it is creating bubble from inside to out side it is called button captring

======================================================================

24. what will be the output

const person = { name: "Lydia" };

function sayHi(age){
    return `${this.name} is ${age}`
}

console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21)());

======================================================================

25. what will be the output

function sayHi(){
    return (()=>0)();
}

console.log(typeof sayHi());
-> 0

======================================================================

26. what will be the output

function sayHi(){
    return () => 0;
}

console.log(typeof sayHi());
-> function

======================================================================

27. what will be the output

console.log(typeof typeof 1);
-> string;

======================================================================

28. what will be the output

const number = [1,2,3];
number[9] = 11;
console.log(number);
-> (10) [1, 2, 3, empty × 6, 11]

======================================================================

28. what will be the output

const number = [1,2,3];
number[3] = number;
console.log(number);

======================================================================

29. Everyghinn in javascript is either a..

a. primitive or object ✔
b. function or object
c. trick question! only objects
b. number of object

======================================================================

30. what will be the output

console.log(!!null);
-> false 
console.log(!!"");
-> false 
console.log(!!1);
-> true


======================================================================

31. what will setInterval return?

// console.log(setInterval(()=>console.log('hi'),1000));
// console.log(setInterval(()=>console.log('hi'),1000));
// console.log(setInterval(()=>console.log('hi'),1000));

it return the unique id of setInterval very interaval has it own unique id

======================================================================

32. what will be the output

console.log([..."anil"]);
it will convert string into a minimal array

======================================================================

33. what will be the output

let data = 3 + 4 + "5";
console.log(typeof data);
-> string

======================================================================

34. what will be the output

console.log(typeof []);
-> object

======================================================================

35. what will be the output

console.log([] === []);
-> false because array has different memory location

======================================================================

36. what will be the output

let data = [1,2,3].map(num => {
    if(typeof num === "number") return;
    return num *2
})

console.log(data);
-> [ undefined, undefined, undefined ]

======================================================================

37. what will be the output

function getInfo(member){
    member.name = "anil";
}
const person = {name: "sarah"};
getInfo(person);
console.log(person);
-> { name: 'anil' }

======================================================================

38. what will be the output

function Car(){
    this.make = "tata";
    return {make: "kia"};
}

const myCar = new Car();
console.log(myCar.make);
-> Kia

======================================================================

39. what will be the output

i.
(()=>{
    let x = (y = 10)
})();
console.log(typeof x);
-> undefined becaise x is decleared in local scope and accessing it outside the scope

ii.
(()=>{
    let x = y = 10;
})();
console.log(typeof y);
-> number

iii.
(()=>{
    let x = 10;
})();

(()=>{
    let x = 10;
})();

console.log(typeof x)
-> undefined;

iv.
(()=>{
    let x = y = 10;
})();

(()=>{
    let x = y = 20;
})();

console.log(y);
-> 20

v.
let x = 100;
(()=>{
    var x = 20;
})();
console.log(x);
-> 100

======================================================================

40. what will be the output

console.log(!true - true);
-1;

console.log(true + +"10");
-> 11;

======================================================================

STRING INTERVIEW QUESTIONS 

let str = "Hello, How are you";

// a. converting string into a single array
console.log(str.split());

// b. converting string into a single array using bracket notation
console.log([str]);

// c. convertin string into an array taking each character as a value using spred operator
console.log([...str]);

// d. convertin string into an array taking each character as a value using split.
console.log(str.split(""));

// e. converting string {sentence} into an array taking each word as a value usgin split.
console.log(str.split(" "));

// f. converting string {sentence} into an array spliting the sentence by a specific character;
console.log(str.split("H"));

// g. replacing any character in array
console.log(str.replace("H",'_')); // it only replace first found character;

// h. replacing all character in array using regex
console.log(str.replace(/H/g,"_"));

// i. getting substring in from string
console.log(str.substring(0,5));

// j. getting substring by only deleting first character
console.log(str.substring(1,str.length));

// k. getting substring by only deleting last character
console.log(str.substring(0,str.length-1));

// l. remove string before specific character
let temp = str.split('o');
console.log(temp);
console.log(temp[0]);

// m. reversing the string
let reverse = str.split("").reverse().join("");
console.log(reverse);

// n removing white spaces from both sides of the string
let spaceStr = "   Hello how are you   ";
console.log(spaceStr.trim());

*/