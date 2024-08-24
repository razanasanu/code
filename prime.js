// .find the prime numbers in an array by using Array.filter().
// (a number that can only be divided by itself and 1 without remainders. eg:2, 3, 5, 7, 11, 13, 17, 19.....)  



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,]
    const isPrime = (num) => {
       if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
     if (num % i === 0) return false;
      }
      return true;
    };
    
    const primeNumbers = numbers.filter(isPrime);
    console.log(primeNumbers);
   
   