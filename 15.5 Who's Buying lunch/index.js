function pick() {
    var names = ["hassan", "abdullah", "shahzaib", "daniyal", "usama"];
    var payer = alert("Who is buying?");
    var randomIndex = Math.floor(Math.random() * names.length);
    alert(names[randomIndex]);
}
pick();