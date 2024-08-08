//Wrapper Variable
let pennyWrapper = 0;
let nickelWrapper = 0;
let dimeWrapper = 0;
let quarterWrapper = 0;

//Variables for US Currency
let hundredBill = 3; //This is saying I have 300 $100 dollar bills
let fiftyBill = 3;
let twentyBill = 3;
let tenBill = 3;
let fiveBill = 3;
let dollarBill = 3;
let quarter = 300;
let dime = 300;
let nickel = 300;
let penny = 300;

//Total Dollar amount for each Coin
let hundredTotal = hundredBill * 100.00;
let fiftyTotal = fiftyBill * 50.00;
let twentyTotal = twentyBill * 20.00;
let tenTotal = tenBill * 10.00;
let fiveTotal = fiveBill * 5.00;
let dollarTotal = dollarBill * 1.00;
let quarterTotal = quarter * .25;
let dimeTotal = dime * .10;
let nickelTotal = nickel * .05;
let pennyTotal = penny * .01;

//Total of US currency total amount individually.
console.log(`Hundred Dollar Bill: $${hundredTotal}`);
console.log(`Fifty Dollar Bill: $${fiftyTotal}`);
console.log(`Twenty Dollar Bill: $${twentyTotal}`);
console.log(`Ten Dollar Bill: $${tenTotal}`);
console.log(`Five Dollar Bill: $${fiveTotal}`);
console.log(`Dollar Bill: $${dollarTotal}`);
console.log(`Quarter: $${quarterTotal}`);
console.log(`Dime: $${dimeTotal}`);
console.log(`Nickel: $${nickelTotal}`);
console.log(`Penny: $${pennyTotal}`);

//Combined Total of all Coins
let combinedCurrency = hundredTotal + fiftyTotal + twentyTotal + tenTotal + fiveTotal + dollarTotal + quarterTotal +
dimeTotal + nickelTotal + pennyTotal;
console.log(`Total Currency: $${combinedCurrency}`);
console.log("");

//Coins Per Wrapper for PENNIES
let finishedWrapping = false;
while (finishedWrapping != true)
{
    pennyTotal -= .50;
    penny -= 50;
    pennyWrapper++;
    if (pennyWrapper == 1) {console.log(`You used ${pennyWrapper} penny wrapper.`);} //wrapper singular
    if (pennyWrapper > 1) {console.log(`You used ${pennyWrapper} penny wrappers.`);} //wrapper plural as more than one wrapper is used.
    if (pennyTotal < .50 && pennyTotal != 0)
    {
        console.log(`There is ${penny} pennies left.`); //If not enough pennies to fill a wrapper run this block of code.
        finishedWrapping = true;
    }
    if (pennyTotal == 0) {finishedWrapping = true;} //If no extra pennies are left over break out the loop. Do not log anything.
}
console.log("");

//Coins Per Wrapper for NICKELS
finishedWrapping = false;
while (finishedWrapping != true)
{
    nickelTotal -= 2.00;
    nickel -= 40;
    nickelWrapper++;
    if (nickelWrapper == 1) {console.log(`You used ${nickelWrapper} nickel wrapper.`);}
    if (nickelWrapper > 1) {console.log(`You used ${nickelWrapper} nickel wrappers.`);}
    if (nickelTotal < 2.00 && nickelTotal != 0)
    {
        console.log(`There is ${nickel} nickels left.`);
        finishedWrapping = true;
    }
    if (nickelTotal == 0) {finishedWrapping = true;}
}
console.log("");

//Coins Per Wrapper for DIMES
finishedWrapping = false;
while (finishedWrapping != true)
{
    dimeTotal -= 5.00;
    dime -= 50;
    dimeWrapper++;
    if (dimeWrapper == 1) {console.log(`You used ${dimeWrapper} dime wrapper.`);}
    if (dimeWrapper > 1) {console.log(`You used ${dimeWrapper} dime wrappers.`);}
    if (dimeTotal < 5.00 && dimeTotal != 0)
    {
        console.log(`There is ${dime} dimes left.`);
        finishedWrapping = true;
    }
    if (dimeTotal == 0) {finishedWrapping = true;}
}
console.log("")

//Coins Per Wrapper for QUARTERS
finishedWrapping = false;
while (finishedWrapping != true)
{
    quarterTotal -= 10.00;
    quarter -= 40;
    quarterWrapper++;
    if (quarterWrapper == 1) {console.log(`You used ${quarterWrapper} quarter wrapper.`);}
    if (quarterWrapper > 1) {console.log(`You used ${quarterWrapper} quarter wrappers.`);}
    if (quarterTotal < 10.00 && quarterTotal != 0)
    {
        console.log(`There is ${quarter} quarters left.`);
        finishedWrapping = true;
    }
    if (quarterTotal == 0) {finishedWrapping = true;}
}
//var result= Math.round(newValue * 100) / 100);
//console.log(answer.toFixed(2));