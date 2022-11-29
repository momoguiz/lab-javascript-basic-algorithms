// Iteration 1: Names and Input
/*
let hacker1 ='Momo'
console.log('The driver\'s name is ',hacker1)
let hacker2 = 'Ahmed'
console.log('The navigator name\'s is ', hacker2)
// Iteration 2: Conditionals
if (hacker1.length> hacker2.length){
    console.log('The driver has the longest name, it has XX characters.')
} else if(hacker2.length>hacker1.length){
    console.log('It seems that the navigator has the longest name, it has' +hacker2.length +' characteres')
} else {
    console.log('Wow, you both have equally long names,', hacker1.length+hacker2.length)
}

*/
// Iteration 3: Loops
/*
 let hacker1 = 'john'
 for (let i=0; i<hacker1.length; i++){
    console.log(`${hacker1[i].toUpperCase()}`);
 }
*/
/*
let hacker2= 'john';
let rev = hacker2.split('').reverse().join('');
console.log(rev);
*/
 
const hacker1 = 'Marcelin'; 
const hacker2= 'John'; 
if (hacker1.length(hacker2)){
    console.log('The driver \'s name goes first.')
} else if (hacker2.localeCompare(hacker1)) {
    console.log('Yo, the navigator goes first definitely.')
} else {
   console.log('What?! You both have the same name?')
}




