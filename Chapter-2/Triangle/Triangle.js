/*

Write a loop that makes seven calls to console.log 
to output the following triangle:

#
##
###
####
#####
######
#######

*/

let stars = '';
let numOfLines = 7;

for (let i = 0; i < numOfLines; i++) {
    stars += '#';
    console.log(stars);
}