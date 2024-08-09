//Wrapper Variable
let pennyWrapper = 0;
let nickelWrapper = 0;
let dimeWrapper = 0;
let quarterWrapper = 0;

//Variables for US Currency
let quarter = 300;
let dime = 300;
let nickel = 300;
let penny = 300;

//Total Dollar amount for each Coin
let quarterTotal = quarter * .25;
let dimeTotal = dime * .10;
let nickelTotal = nickel * .05;
let pennyTotal = penny * .01;

//Total of US currency total amount individually.
console.log(`Quarter: $${quarterTotal}`);
console.log(`Dime: $${dimeTotal}`);
console.log(`Nickel: $${nickelTotal}`);
console.log(`Penny: $${pennyTotal}`);

//Combined Total of all Coins
let combinedCurrency = quarterTotal + dimeTotal + nickelTotal + pennyTotal;
console.log(`Total Currency: $${combinedCurrency = Math.round(combinedCurrency * 100) / 100}`);
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
console.log("");

//Coin Challenge
let penny1 = 0;
let nickel5 = 0;
let dime10 = 0;
let quarter25 = 0;
let pennyArr = [];
let nickelArr = [];
let dimeArr = [];
let quarterArr = [];
let currencytotal = 0;

//The data/array being used for the challenge.
let challengeData = ['dime','dime','dime','penny','nickel','penny','dime','quarter','dime','nickel','nickel','dime','quarter','nickel','penny','dime','nickel','dime','dime','dime','quarter','nickel','quarter','dime','nickel','penny','dime','penny','nickel','quarter','quarter','quarter','dime','nickel','dime','quarter','dime','penny','penny','nickel','penny','penny','dime','nickel','penny','penny','quarter','quarter','nickel','nickel','penny','dime','nickel','quarter','nickel','nickel','quarter','quarter','dime','nickel','penny','dime','dime','nickel','penny','quarter','quarter','quarter','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','quarter','penny','quarter','nickel','dime','quarter','dime','penny','quarter','nickel','nickel','nickel','quarter','penny','nickel','nickel','dime','dime','dime','quarter','quarter','quarter','penny','penny','dime','dime','dime','penny','quarter','nickel','quarter','quarter','penny','nickel','penny','nickel','nickel','penny','quarter','nickel','dime','quarter','nickel','dime','penny','nickel','nickel','penny','penny','penny','dime','quarter','quarter','quarter','penny','dime','nickel','dime','dime','penny','quarter','penny','quarter','penny','dime','dime','nickel','dime','penny','penny','nickel','penny','nickel','quarter','dime','dime','nickel','nickel','nickel','dime','dime','dime','quarter','penny','dime','nickel','quarter','nickel','penny','nickel','penny','nickel','penny','nickel','nickel','penny','dime','nickel','dime','dime','quarter','quarter','quarter','penny','dime','penny','dime','dime','penny','penny','nickel','nickel','penny','quarter','nickel','quarter','dime','nickel','quarter','nickel','penny','dime','quarter','nickel','penny','quarter','quarter','penny','quarter','dime','penny','dime','nickel','penny','dime','quarter','nickel','quarter','quarter','quarter','dime','quarter','dime','quarter','nickel','penny','penny','quarter','quarter','penny','dime','penny','dime','penny','nickel','nickel','dime','penny','quarter','penny','quarter','nickel','quarter','penny','nickel','quarter','dime','quarter','dime','penny','dime','dime','quarter','penny','penny','nickel','nickel','quarter','nickel','quarter','dime','quarter','penny','penny','penny','nickel','nickel','quarter','penny','quarter','quarter','penny','nickel','dime','penny','quarter','nickel','dime','penny','penny','quarter','penny','penny','dime','nickel','dime','penny','dime','nickel','nickel','dime','dime','penny','nickel','penny','dime','dime','nickel','dime','dime','penny','penny','dime','penny','nickel','quarter','nickel','quarter','quarter','penny','nickel','penny','quarter','nickel','nickel','quarter','penny','penny','nickel','nickel','penny','penny','nickel','quarter','nickel','dime','nickel','nickel','penny','quarter','dime','dime','nickel','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','dime','dime','dime','dime','quarter','nickel','nickel','dime','nickel','quarter','nickel','dime','quarter','nickel','dime','quarter','quarter','penny','quarter','nickel','dime','quarter','penny','penny','nickel','nickel','quarter','dime','penny','dime','dime','quarter','dime','penny','quarter','penny','penny','nickel','nickel','nickel','penny','penny','quarter','penny','penny','quarter','dime','quarter','nickel','quarter','nickel','penny','penny','penny','dime','dime','dime','dime','nickel','dime','quarter','nickel','dime','nickel','dime','dime','penny','dime','quarter','nickel','penny','nickel','penny','penny','quarter','dime','nickel','nickel','nickel','penny','nickel','dime','penny','quarter','quarter','dime','quarter','penny','nickel','nickel','penny','dime','dime','nickel','nickel','dime','penny','nickel','penny','quarter','dime','nickel','dime','penny','penny','quarter','dime','quarter','penny','penny','nickel','quarter','quarter','quarter','dime','penny','dime','dime','dime','quarter','penny','penny','dime','quarter','dime','penny','quarter','dime','dime','dime'];

for (let i = 0; i < challengeData.length; i++)
{

    if (challengeData[i] == "penny") {penny1++; pennyArr.unshift(challengeData[i]);} //Counting the coin evertime i is the same as penny.
    if (challengeData[i] == "nickel") {nickel5++; nickelArr.unshift(challengeData[i]);}
    if (challengeData[i] == "dime") {dime10++; dimeArr.unshift(challengeData[i]);}
    if (challengeData[i] == "quarter") {quarter25++; quarterArr.unshift(challengeData[i]);}
}
console.log(pennyArr);
console.log(nickelArr);
console.log(dimeArr);
console.log(quarterArr);

console.log(`Total Pennies: ${penny1}      Dollar Amount: ${penny1 * 0.01}`); //Displaying and Adding how many pennies and the dollar amount.
console.log(`Total Nickels: ${nickel5}     Dollar Amount: ${nickel5 * 0.05}`);
console.log(`Total Dimes: ${dime10}        Dollar Amount: ${dime10 * 0.10}`);
console.log(`Total Quarters: ${quarter25}  Dollar Amount: ${quarter25 * 0.25}`);

currencytotal = (penny1 * 0.01) + (nickel5 * 0.05) + (dime10 * 0.10) + (quarter25 * 0.25); //Adding all the coins together to get a total.
currencytotal= Math.round(currencytotal * 100) / 100; //Rounding to get a accurate dollar amount.
console.log(`Currency Combined Total: ${currencytotal}`); //Displaying the total.

//var result= Math.round(newValue * 100) / 100;
//console.log(answer.toFixed(2));