// Find the number of vowels in a Stting. const str ='hellow world' (vowels= a,e,i,o,u) 

const str ='hellow world';
let count=0;
for(let i of str){
    
    if( i=="a" || i=="e" || i=="i" || i=="o" || i=="u" ){
        count++
    }
}
console.log(count);

