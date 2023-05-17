/*

1. Programm to print Hello world.

i. Using console.log() - is sued in dubugging the code. 
=> console.log("Namaste Duniya !");

-------->>>

ii. Using alert() - this method displays an alert box over the current window with specified message.
=> alert("Namaste Duniya !");

-------->>>

iii. Using document.write - is sued when you want to print the content in the html document.
document.write("Namaster World !");

==============================================================================================

2. Program to Add Two numbers.

i. With Static Number

let a = 5;
let b = 6;
let result = a+b;
console.log(`the sum of ${a} and ${b} is ${result}`);

-------->>>

ii. With Dinamic Data
let a = prompt("Please enter first number","")
let b = prompt("Please enter second number","")
let result = parseInt(a)+ parseInt(b);
alert(`the sum of ${a} and ${b} is ${result}`);
console.log(typeof(result));

==============================================================================================

3. Program To Find Square Root Of a Number.

i. Math.sqrt() method used to find the square root of a number in Javascript, You can use the build-in Math.sqrt() method.
let a = prompt("please enter a number","");
var b = Math.sqrt(parseInt(a));
alert(`square root of ${a} is ${b}`);

==============================================================================================

4. Programm to find the Area of Triangle

i. To find the area of right angled triangle - General formula (base*height)/2. We will take the base and height measurement from the user and will calculate the area of the right angled triangle.

var base = prompt("please enter the base value")
var height = prompt("please enter the value of height")
let area = (base*height)/2;
alert(`length of base is ${base} length of height is ${height} and area of this triangle is ${area}`)

-------->>>

ii. To fidn the area of regular triangle - If you know all the sides of a triangle, you can find the area using Heron's formula. If a, b and c are the three sides of a triangle, then

general Formula: s = (a+b+c)/2;
        _______________________
area = \| (s(s-a)*(s-b)*(s-c))

let a = 10;
let b = 10;
let c = 10;
var s = (a+b+c)/2;
var temp = s*(s-a)*(s-b)*(s-c);
var area = Math.sqrt(temp);
console.log(area);

==============================================================================================

5. Swapping of Two Number

i. Swapping using temporary variable.

let a = 10;
let b = 15;
console.log(`value of a is ${a} value of b is ${b}`);
let temp = a;
a = b;
b = temp;
console.log(`after swaping value of a is ${a} value of b is ${b}`);

-------->>>

11. Without using a temporary variable.
let a = 5;
let b = 6;
a = a+b; // a = 11;
b = a-b; // b = 5;
a = a-b; // a = 6;
console.log(a);
console.log(b);

==============================================================================================

6. Convert kms to miles using javascript Function

html :-
<input type="number" name="" step="any" id="kms"> kms <br><br>
<button onclick="convert()">CONVERTER IN MILES</button>
<h1 id="result"></h1>

script:-
function convert(){
    var kms = document.getElementById('kms').value;
    const factor = 0.62371;
    var miles = kms*factor;
    document.getElementById("result").innerText = `${miles} miles.`;
}

==============================================================================================

7. Convert Celsius To Fahrenheit Javascript Function

html:-
<input type="number" name="" step="any" id="data"> celcious <br><br>
<button onclick="convert()">CONVERTER IN FH</button>
<h1 id="result"></h1>

script:-
function convert(){
    var c = document.getElementById("data").value;
    var ferh = (c* 9/5)+32;
    document.getElementById("result").innerText = `${c} °C = ${ferh} ferh`;
}

==============================================================================================

8. Javascript Program to check if a number is positive, negative or zero.

i. Using Math.sign() method and if else
html:-
<input type="number" name="" step="any" id="data"> <br><br>
<button onclick="check()">Check</button>
<h1 id="result"></h1>

script:-
function check(){
    let value = document.getElementById("data").value;
    let result = Math.sign(value);
    
    if(result == 0){
        document.getElementById('result').innerText = `${value} is Nutral`;
    } else if(result == 1){
        document.getElementById('result').innerText = `${value} is Positive`;
    } else{
        document.getElementById('result').innerText = `${value} is Negative`;
    }
}

-------->>>

ii. Using user define function and if else

html:-
<input type="number" name="" step="any" id="data"> <br><br>
<button onclick="check()">Check</button>
<h1 id="result"></h1>

script:-
function check(){
    let value = document.getElementById("data").value;
    
    if(value == 0){
        document.getElementById('result').innerText = `${value} is Nutral`;
    } else if(value > 0){
        document.getElementById('result').innerText = `${value} is Positive`;
    } else if(value < 0 ){
        document.getElementById('result').innerText = `${value} is Negative`;
    }
}

==============================================================================================

9. Generate a Random number Using Math.Random();

i. generating default random number
var x = Math.random();
console.log(x);

-------->>>

ii. Generate a random number between a range
Math.random()*(highestNumber - LowestNUmber) + LowestNumber;

let LowestNUmber = 1;
let gratestNumber = 10;
var x = Math.random();
console.log(`before ${x}`);
x = x * (gratestNumber-LowestNUmber)+LowestNUmber;
console.log(`after ${x}`);

-------->>>

iii. Generatin a random number between a range in integer
let LowestNUmber = 1;
let gratestNumber = 100;
var x = Math.random();
console.log(`before ${x}`);
x = x * (gratestNumber-LowestNUmber)+LowestNUmber;
console.log(`after ${x}`);
console.log(`flored calculation ${Math.floor(x)}`);

==============================================================================================

10. Program to check if a number is odd or even

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

==============================================================================================

11. Program to check if  Number is a prime number

A prime number is a positive integer that is only divisible by 1 and itself. For example 2, 3, 5, 7, 11 are the first few prime numbers.

let num = 4;
if(num == 1){
    console.log(`${num} is neither prime nor composite`);
} else if(num < 1){
    console.log(`number less than 1 is not prime number`);
} else {
    for(let i = 2; i<num; i++){
        if(num%i == 0){
            var res = `${num} is not a prime number`
            break;
        }else{
            var res = `${num} is a prime number`
        }
    }
    console.log(res);
}

==============================================================================================

12. Programm to find the largest number;

i. Using Math.max() method.
let a = 1;
let b = 2;
let c = 3;
var largest = Math.max(a,b,c)
console.log(`largest number in ${a}, ${b}, ${c} is: ${largest}`);

-------->>>

ii. using user define method.
function check(a,b,c){

    if(a>=b && a>=c){
        return a;
    } else if (b>=a && b>=c){
        return b;
    } else if (c>=a && c>=b){
        return c;
    }

}

var largest = check(4,2,3)
console.log(`largest number is: ${largest}`);

==============================================================================================

13. Find the factorial of a number

The factorial of a number is the product of all the numbers from 1 to that number. For example- 
(n!) = 1*2*3*4......n

let num = 3;
var fact = 1;
if(num == 0){
    console.log(`factorial of ${num} is 1`);
} else if(num < 0){
    console.log(`factorial of negtavie number is not possible`);
} else{
    for(var i = 1; i<=num; i++){
        fact = fact*i
    }

    console.log(`factorial of ${num} is ${fact}`);
}

==============================================================================================

14. Programm to find factorial using recursion.

The process in which a function calls itself directly or indirectly is called recuresion and the corresponding function is called as recursive function.

let num = 10;
let factori = 1;
console.log(factori);
function fact(n){
    if(n>num){
        return;
    }
    factori = factori*n;
    console.log(factori);
    n++;
    fact(n)
}

fact(1);

==============================================================================================

15. Program to print table by the user define number.

let num = 31;

function printTable(){
    
    for(let i=1; i<=10; i++){
        document.write(`${num} x ${i} = ${num*i}`);
        document.write('<br>');
    }

}

printTable()

==============================================================================================

16. Programm to find the armstrong Number.

abcd... = an+bn+cn+dn... 

In the case of an Armstrong number of 3 digits, the sum of cubes of each digit is equal to the number itself. for example 153 is an armstrong number because

153 = 1*1*1 + 5*5*5 + 3*3*3

var number = 153;
var temp = number;
var noOfDigit = number.toString().length;
var sum = 0;
while(temp>0){
    var digit = temp%10;
    sum += digit**noOfDigit;
    temp = parseInt(temp/10);

}

if(sum == number){
    console.log(`${number} is armstrong number`);
}

==============================================================================================

17. Javascript Program to check if the Numbers Have Same Last Digit

.Suppose we have three numbers 1,2,3
.To check if all of them have the smae last digit.
- Divide each number by 10.
- Check the remainder.
- If all the remainders are same those numbers has the same last digit.

var a = 11;
var b = 451;
var c = 31;

var res1 = a%10;
var res2 = b%10;
var res3 = c%10;

if(res1 == res2 && res1 == res3){
    console.log(`in ${a}, ${b}, ${c} all number has same last digit`);
} else{
    console.log(`in ${a}, ${b}, ${c} all number does not have same last digit`);
}

==============================================================================================

18. Program to Check palindrome using array methods.

A string is a palindrome if it is read the same from forward or backward. 
For example, dad reads the same either from forward or backward.
So the word dad is palindrome. Similarly, madam is also a palindrome.

- Splits() a string and returns an array
- reverse() reverse an array

let str = "MAM";
let strArray = str.split("");
let strArrayRev = strArray.reverse();
let revString = strArrayRev.join('');
if(str == revString){
    console.log(`${str} is a palindrome word`);
} else{
    console.log(`${str} is not a palindrome word`);
}

==============================================================================================

19. Check palindrome using for loop

let string = "MADAM";
var strLength = string.length;
var msg = "it is a palindrome"
for(var i = 0; i < strLength/2; i++){
    
    if(string[i] != string[strLength - 1 - i]){
        msg = 'it is not a palindrome'
    }

}

console.log(`${string} ${msg}`);

==============================================================================================

20. Program to check the Number of occurrences of a character in a string using for loop

let string = "malyalam";
let checkCharacter = "f";

let strLength = string.length;

let counter = 0;
for(var i = 0; i< string.length; i++){
   
    if(string[i] == checkCharacter){
        counter++
    }

}
console.log(`${checkCharacter} is occurred in ${string} ${counter} times`);

==============================================================================================

21. Program to check whether a string starts and ends with certain characters

. string.startsWith() it will chekc the first character of the string, and return ture or false
. string.endsWith() it will chekc the last character of the string, and return ture or false

let string = "yash";
let testStart = string.startsWith("y")
let testEnd = string.endsWith("h")
console.log(testStart);
console.log(testEnd);

if(testStart == true && testEnd == true){
    console.log(`${string} starts with y and end with h`);
} else if(testStart == true && testEnd !== true){
    console.log(`${string} starts with y but does not end with h`);
} else if(testStart != true && testEnd == true){
    console.log(`${string} does not start with y but end with h`);
} else{
    console.log(`No the ${string} Not starts with y and end with h`);
}

==============================================================================================

22. Program to check whether a string contains a substring

string.inlcudes() the js string includes() method checks if one string  can be found another string and returns true or false.

string.indexOf(): the js string indexOf() method returns the first index of occurrence of a given value in the string or -1 if it is not present.

let str = "my name is srk";
let subStr = "name";
let test1 = str.includes(subStr);
console.log(test1);
var test2 = str.indexOf(subStr);
console.log(test2);

==============================================================================================

23. Program to convert the first letter of a string in to uppercase

charAt(): To get a character at an index.
toUpperCase(): To upper case characters.
slice(): to slice any charater from the string.

let string = 'siyaram';
console.log(string);

let first = string.charAt(0);
let uppercaseCharacter = first.toUpperCase();
console.log(first);
console.log(uppercaseCharacter);

let rem = string.slice(1);
console.log(rem);

let uCaseString = uppercaseCharacter+rem;
console.log(uCaseString);

==============================================================================================

24. Program to count the number of vowels in a string using regex.

Regex is know as regular expression. It is used to match, test and find character(s) from a string.

to find vowels: expression: [aeiou], Modifiers : gi

let str = 'vovels';
const reg = /[aeiou]/gi;
var chars = str.match(reg);
let vovil = chars.join(",");
console.log(vovil);
console.log(chars.length);

==============================================================================================

25. Programm to find armstrong numbers between an Interval

let a = 1; // lower limit
let b = 1000; // upper limit

for (var i = a; i<=b; i++){
    
    var temp = i;
    var noOfDigit = i.toString().length;
    var sum = 0;
    while(temp>0){
        var digit = temp%10;
        temp = parseInt(temp/10);
        sum += digit**noOfDigit;
    }
    
    if(sum == i){
        console.log(i);
    }
    
    
}

console.log("hi");

==============================================================================================

26. Program to find sum of Natural numbers using recursion

function sum(num){

    if(num > 0){
        return num + sum(num-1);
    } else{
        return num;
    }

}

var res =  sum(5);
console.log(res);

==============================================================================================

27. Program to find the factors of a number

To be the factors of a number, the factor number should exactly divide the number (with 0 remainder). For example

. The factor of 12 is 1,2,3,4,6,12;

let num = 20;

for(var i = 1; i<= 15; i++){
    
    if(num%i == 0){
        console.log(i);
    }

}

==============================================================================================

28. Program to make a simple calculator using switch case

var num1 = 10;
var num2 = 10;

var opr = "/";

switch (opr) {
  case "+":
    let res1 = num1 + num2;
    console.log(`${num1} + ${num2} = ${res1}`);
    break;

  case "-":
    let res2 = num1 - num2;
    console.log(`${num1} - ${num2} = ${res2}`);
    break;

  case "*":
    let res3 = num1 * num2;
    console.log(`${num1} x ${num2} = ${res3}`);
    break;

  case "/":
    let res4 = num1 / num2;
    console.log(`${num1} / ${num2} = ${res4}`);
    break;

  default:
    console.log("invalid operator");
}

==============================================================================================

29. Replace character of string

replace(): the replace function finds, replace and return a new string.

let sentence = "Mr. red has red car and red bike";
console.log(sentence);
var reg = new RegExp('red','gi')
let newString = sentence.replace(reg, 'blue');
console.log(newString);

==============================================================================================

30. Programm to reverse a string using for loop

let string ='HELLO yash';
let strLength = string.length;
let revString = '';
for(var i = strLength-1; i>=0; i--){
    revString += string[i];
}

console.log(revString);

==============================================================================================

31. Program to sort words in alphavetical order

.split(""): to split the string into array.

sort(): to sort the array into alphabetical ascending

let str = 'hello this is me';
console.log(str);

let strArray = str.split(' ')
console.log(strArray);

let arrangeString = strArray.sort();
console.log(arrangeString.join(" "));

*/




