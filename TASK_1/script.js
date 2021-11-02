let money, time;

function start() {
    money = +prompt("How much is your budget for a month?", "");
    time = prompt("Enter a date in the format: YYYY.MM.DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("How much is your budget for a month?", "");
    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    incum: [],
    savings: true
};


function chooseExpenses() {
    for(let i = 0; i < 2; i++) {
        let answer_1 = prompt("Enter required expenses item for this month: ", "");
        let answer_2 = +prompt("How much it will cost?", "");
        if(typeof(answer_1) === 'string' && typeof(answer_1) != null && typeof(answer_2) != null
         && answer_1 != "" && answer_2 != '') {
             console.log("Done");
         appData.expenses[answer_1] = answer_2;
        }
        else {
         i = i - 1;
        }
    }
};
chooseExpenses();

function chooseOptExpenses() {
    for(let i = 0; i < 3; i++) {
        let answer = prompt("Enter optional expenses item for this month: ");
        appData.optionalExpenses[i + 1] = answer;
    }
}
chooseOptExpenses();


function detectDayBudget() {
appData.budgetForOneDay = parseInt(appData.budget / 30).toFixed();
alert("Budget for a day: " + appData.budgetForOneDay);
}
detectDayBudget();

function detectLevel() {
  if(appData.budgetForOneDay <= 500) {
     console.log("You are poor person :(");
 }
  else if(appData.budgetForOneDay > 500 && appData.budgetForOneDay <= 2000) {
     console.log("You are middle rich person :/");
    }
  else if(appData.budgetForOneDay > 2000) {
     console.log("Ohhh.. you are very rich person :)");
 }
  else {
     console.log("Something is broken");
 }    
}
detectLevel();


function checkSavings() {
    if(appData.savings == true) {
        let sumOfSavings = +prompt("Enter sum of your savings, please: ", ""),
            percentInBank = +prompt("Enter a percent of your savings: ", "");

            appData.monthInCome = ((sumOfSavings / 100) / 12) * percentInBank;
            alert("Income per month from your savings is: " + appData.monthInCome.toFixed());
    }
}
checkSavings();



