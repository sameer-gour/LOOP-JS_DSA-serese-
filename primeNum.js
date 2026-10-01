let n = 19; 
let isprime = true;

if (n <= 1) {
    isprime = false;
}

for (let i = 2; i<=n; i++) {
    if (n%2==0) {
        isprime =false;        
    }
}




console.log(isprime? `${n} is prime`: `${n} is't prime`);
