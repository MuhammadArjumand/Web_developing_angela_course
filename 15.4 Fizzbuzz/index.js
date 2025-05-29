var Output = [];
var count= 1;
function fizzbuzz(){
    
    if (count%3===0 && count%5===0) {
        alert("fizzbuzz")
        Output.push("fizzbuzz");
    } else if (count%3===0) {
        alert("fizz")
        Output.push("fizz");
    } else if (count%5===0) {
        alert("buzz")
        Output.push("buzz");
    }  else {
        alert(count)
        Output.push(count);
    }
    count++;
}
for (let i = 0; i < 100; i++) {
    fizzbuzz();
}