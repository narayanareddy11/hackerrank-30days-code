function solve(mealCost, tip, tax) {
    var tempTip = mealCost * tip / 100;
    var tempTax = mealCost * tax / 100;
    return Math.round(mealCost + tempTip + tempTax);
}
console.log(solve(12, 20, 8))