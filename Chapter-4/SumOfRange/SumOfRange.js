/*
The introduction of this book alluded to the following 
as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));

Write a range function that takes two arguments, start and end, 
and returns an array containing all the numbers
from start up to (and including) end.

Next, write a sum function that takes an array of numbers 
and returns the sum of these numbers. Run the previous program 
and see whether it does indeed return 55.

As a bonus assignment, modify your range function to 
take an optional third argument that indicates the “step” 
value used to build up the array. If no step is given, 
the array elements go up by increments of one, corresponding 
to the old behavior. The function call range(1, 10, 2) 
should return [1, 3, 5, 7, 9]. Make sure it also works with 
negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/


/* Refactor code to eliminate redundant code */
const range = (start, end, step) => {
    let arr = [];

    /* Ascending range */
    if (start < end) {

        /* If the step isn't provided, set a default */
        if (step === undefined || typeof step !== 'number') {
            step = 1;
        }
        else {
            /* If the step passed in is negative, negate it because we're ascending */
            (step < 0) ? step = -step : step;  
        }

        for (let i = start; i <= end; i += step) {
            arr.push(i);
        }
    }
    /* Descending range */
    else {

        if (step === undefined || typeof step !== 'number') {
            step = -1;
        }
        else {
            /* If the step passed in is negative, negate it because we're descending */
            (step > 0) ? step = -step : step;
        }

        for (let i = start; i > 0; i += step) {
            arr.push(i);
        }
    }

    return arr;
}

const sum = (numbers) => {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}