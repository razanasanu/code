// Write a function that counts the number of digits in a given string.
// Example
// Input: "abc123"
// Output: 3
// Input: "hello"
// Output: 0
// Input: "12345"
// Output: 5   


console.log(abc("hello1152"))
function abc(str){
    str = str.split("")
 return  str.filter((e)=> e ==Number(e)).length
}     
