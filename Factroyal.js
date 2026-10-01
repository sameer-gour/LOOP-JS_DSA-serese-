let fact = 1; 
// let n = Number(prompt('Enter n'));

for (let i = 1; i <= 5; i++) {
    fact *= i    
}

// console.log(fact);


//facter 
let n = 36;

for (let i = 1; i <= Math.floor(n/2); i++) {
        if (n%i === 0) {
            console.log(i);
            
        }
}