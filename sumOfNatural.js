let sum =0;
// let n =10;

let n = Number(prompt("Enter number -> "));


if (isNaN(n) && n === '') 
    document.write("Enter valid number");
else

for (let i = 0; i <= n; i++) {
    sum +=i
}

// console.log(sum);
document.write(sum)


