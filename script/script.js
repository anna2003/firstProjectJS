"use strict";
let money = prompt("Ваш бюджет на месяц?", "10000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2019-07-03");

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
let q1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    q2 = prompt("Во сколько обойдется?", "");
appData.expenses[q1] = q2;
q1 = prompt("Введите обязательную статью расходов в этом месяце", "");
q2 = prompt("Во сколько обойдется?", "");
appData.expenses[q1] = q2;
alert(money / 30);