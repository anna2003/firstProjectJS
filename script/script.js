"use strict";

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "10000");
    time = prompt("Введите дату в формате YYYY-MM-DD", "2019-07-03");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
        if ((typeof (a)) === 'string' && (typeof (a)) != null &&
            (typeof (b)) === "string" && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;

        } else {
            i--;
        }
    }
}
chooseExpenses();

//функция для определения ежедневного бюджета
function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

//функция для определения уровня достатка
function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

//функция для определения доходов с депозита
function checkSavings() {
    if (appData.savings) {
        let save = +prompt("Какова сумма накоплений?", "");
        let percent = +prompt("Под какой процент?", "");

        appData.monthIncome = save / 100 / 12 * percent;
        alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
    }
}
checkSavings();

let optionalExpenses = {};
//функция для определения необязательных расходов
function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        appData.optionalExpenses[i + 1] =
            prompt("Статья необязательных расходов?", "");
        while (appData.optionalExpenses[i + 1] == "" || appData.optionalExpenses[i + 1] == null) {
            appData.optionalExpenses[i + 1] =
                prompt("Статья необязательных расходов?", "");
        }
    }
}
chooseOptExpenses();