let n=567
let sum =0;
let i=0;


// while (i<=10) {
//     sum += i;
//     i++
// }
// console.log(sum);
//revrise number

// while (n >= 0) {
//     console.log(n);    
//     n--
// }

while (n>0) {
    let temp = n%10
    sum = sum * 10 + temp
    n = Math.floor(n/10)

}
console.log(sum);
