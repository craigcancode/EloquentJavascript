/*
Write a program that uses console.log to print 
all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, 
and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", 
for numbers that are divisible by both 3 and 5 
(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

*/

const start = 1;
const end = 100;
const fizz = 'Fizz';
const buzz = 'Buzz';

for (let i = start; i <= end; i++) {
    if ((i % 5 === 0) && (i % 3 === 0)) {
        console.log(fizz + buzz);
    }
    else if ((i % 5 === 0)) {
        console.log(buzz);
    }
    else if ((i % 3 === 0)) {
        console.log(fizz);
    }
    else {
        console.log(i);
    }
}