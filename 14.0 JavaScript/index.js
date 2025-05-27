function getMilk(money){
var numberOfBottle = Math.floor(money/1.5);
console.log("you got "+ numberOfBottle +" milk bottles");
return money%1.5;
}
let a = getMilk(5)
console.log(a)