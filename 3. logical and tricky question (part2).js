/*

1: 
let a = [];
let b = [];
console.log(a == b);
// false
console.log(a === b);
// false

-------------------------------------------------

2:
let a = [];
let b = a;
console.log(a == b);
// true
console.log(a === b);
// true

-------------------------------------------------

3:
let a = [20];
let b = [20];
console.log(a[0] == b[0]);
// true
console.log(a[0] === b[0]);
// true

-------------------------------------------------

4:
let z = [1,2,3,4];
let a = {name: "yash"};
console.log(...z);
// 1 2 3 4

-------------------------------------------------

5:
console.log(typeof NaN);
// number

-------------------------------------------------

6.
let data = 10 - - 10;
console.log(data);
// 20

-------------------------------------------------

7.
const set = new Set([1,2,2,3,4,4]); 
Set is a instance of set class it is like a array or object which store multiple value. but the specificatioon of set is it remove duplicate value.
console.log(set);
// set(4) {1,2,3,4}

-------------------------------------------------

8. 
let data = {name: "anil"};
console.log(delete data.name);
// ture // delete key word delete the key of object if it was deleted it return ture if not it return false

-------------------------------------------------

9.
const data = {name: "Anil"};
// console.log(delete data); 
// delete cannot delet whole object it only can delete element of an object so if it will not delete it return false

-------------------------------------------------

10.
const data = ["peter", "anil", "sam"];
const [y] = data;
console.log(y);
// peter // if we assian a array into a key array index it only take first element of array

-------------------------------------------------

11.
const data = ["peter", "anil", "sam"];
const [,y] = data;
console.log(y);
// anil

-------------------------------------------------

12. how to get name property without . operator
const data = {name:"yash", age:24, skill: "34"};
const {name} = data;
console.log(name);

-------------------------------------------------

13. merge two object
let data = {name:"yash"};
let info = {city:"indore"};
data = {...data,...info}
console.log(data);
// { name: 'yash', city: 'indore' }

-------------------------------------------------

14.
let data = {name:"yash"};
let info = {city:"indore"};
data = {data,...info}
console.log(data);
// { data: { name: 'yash' }, city: 'indore' }

-------------------------------------------------

15. 
let data = {name:"yash",skill: "js"};
let info = {city:"indore", skill: "node"};
data = {...data,...info}
console.log(data);
// { name: 'yash', skill: 'node', city: 'indore' }

-------------------------------------------------

16.
const name = "anil";
console.log(name());
// name is not a function 

-------------------------------------------------

17.
const result = false || {} || null;
console.log(result);
// {}

-------------------------------------------------

18.
const result = null || false || "";
console.log(result);
// empty string ""

-------------------------------------------------

19. 
const result = [] || 0 || true;
console.log(result);
// []

-------------------------------------------------

20.
console.log(Promise.resolve(5));
// Promise { 5 }

-------------------------------------------------

21.
console.log("❤" == "❤");
// true

-------------------------------------------------

22. JSON.parse(). What this method will do 

a. parses json to a javascript value. ✔
b. parses a javascript object to json.
c. parses any js valut to json.
d. parses json to a js object only.

-------------------------------------------------

23.
let name = "lastname";

function getName(){
    console.log(name);
    let name = "firstname"
}

getName();
// ->  Cannot access 'name' before initialization

-------------------------------------------------

24. 
let name = 'yash';
function getName(){
    console.log(name);
}
getName();
// -> yash

-------------------------------------------------

25.
console.log(`${(x=>x)("i love")} to program`);
// i love to program

-------------------------------------------------

26. Out should be 6 by the following calling

a: sumValues([...1,2,3])
b: sumValues([...[1,2,3]])
c: sumValues(...[1,2,3]) ✔
d: sumValues([1,2,3])

function sumValues(x,y,z){
    return x + y + z;
}

console.log(sumValues(...[1,2,3]));
// 6

-------------------------------------------------

27. 

const string = 'code step by step';
console.log(typeof string === "object");
// false 
console.log(!typeof string === "object");
// false
console.log(typeof string === "string");
// true
console.log(!typeof string === "string");
// false

-------------------------------------------------

28. 

const name = "subscribe";
const age = 21;

console.log(isNaN(name));
// true
console.log(isNaN(age));
// false

-------------------------------------------------

29. What can modify person object 

let person = {name: "anil"};
Object.seal(person);
// after using seal to object we cannot add more key and value only can modifi present key value pair
console.log(person);
// {name: "anil"};

-------------------------------------------------

30. remove first element

let data = [2,9,0,10];
console.log(data.shift());
// 2

-------------------------------------------------

31. remove last element

let data = [2,9,0,10];
console.log(data.pop());

-------------------------------------------------

32. find number is ood or even

i. using if else
let x = 3;
if(x%2 == 0){
    console.log(`${x} is even Number`);
} else if(x%2 != 0){
    console.log(`${x} is odd Number`);
}

-------->>>

ii. using ternary operator
let x = 6;
var res = x%2 == 0 ? "Even number" : "Odd number" ;
console.log(res);

-------------------------------------------------

33. 

let data = {
    name: "yash",
}

delete data.name;
console.log(data);
// {}

-------------------------------------------------

34. convert data to boolean false value

let data = "true";
console.log(typeof !data);
// boolean

-------------------------------------------------

35. convert data to boolean true value

let data = "true";
console.log(typeof !!data);
// boolean 

-------------------------------------------------

36. Difference between map and  for each function

map return some thing but foreach for looping and it return nothing

-------------------------------------------------

37.
let data = ["anil","peter","bruce"];
delete data[1];
console.log(data);
// [ 'anil', <1 empty item>, 'bruce' ]

-------------------------------------------------

38.
let data = ["anil","peter","bruce"];
delete data[1];
console.log(data.length);
// 3

-------------------------------------------------

39. merge to array

let a = [1,2,3];
let b = [4,5,6];
let c = [...a,...b];
console.log(c);
// [1,2,3,4,5,6]

-------------------------------------------------

40.
let a = [1, 2, 3, 4];
let b = [4, 5, 6];
let c = [...a, ...b];
console.log(c);
// [1, 2, 3, 4,4, 5, 6]

-------------------------------------------------

41.
let c = 3**3;
console.log(c);
// 27

-------------------------------------------------

42.

let a = 2;
setTimeout(()=>{
    console.log(a);
    // 100
},0)

a = 100;

-------------------------------------------------

43.
let a = 2;
let A = 30;
console.log(A);
// 30

-------------------------------------------------

44.

let A10 = "like"
console.log(A10);
// "like"

-------------------------------------------------

45.

let a = "like";
let b = `like`;
console.log(a === b);
// true

-------------------------------------------------

46.

let a = 1;
let c = 2;
console.log(--c == a);
// true

-------------------------------------------------
-------------------------------------------------

47.

let a = 1;
let b = 1;
let c = 2;
console.log(a === b === --c);
// false 
// here a === b is become true, and then we are comparing true to number then it give false 

-------------------------------------------------

48.

console.log(3*3);
// 9
console.log(3**3);
// 27
console.log(3***3);
// Unexpected token '*' 

-------------------------------------------------

49.

console.log(a);
// undefined
var a;

-------------------------------------------------

50.

console.log(a);
// a is not defined   

-------------------------------------------------

51.

console.log([[[[]]]]);
// [ [ [ [] ] ] ]

-------------------------------------------------

52. how to find os name

console.log(navigator.platform);

-------------------------------------------------

53.

let for = 10;
// for is reserved key word in js we cannot decleared

-------------------------------------------------

*/
