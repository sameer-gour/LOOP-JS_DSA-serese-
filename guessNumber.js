let n = -1;

let rand = Math.floor(Math.random() * 90) + 10;

while (n !== rand) {

    n = Number(prompt("Guess the number"));

    if (isNaN(n) || n < 1 || n > 100) {
        alert("Try again");
        continue;
    }

    if (n > rand) {
        alert("Too high");

    } else if (n < rand) {
        alert("Too low");

    } else {
        alert("You win!");
    }
}