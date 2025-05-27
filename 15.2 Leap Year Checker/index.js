var a = prompt("Enter a year:");
a = parseInt(a);

if (a % 400 === 0) {
    alert("Is a leap year");
} else if (a % 100 === 0) {
    alert("Not a leap year");
} else if (a % 4 === 0) {
    alert("Is a leap year");
} else {
    alert("Not a leap year");
}
