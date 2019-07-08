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
    savings: true,
    chooseExpenses: function () {
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
    },
    //функция для определения ежедневного бюджета
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    //функция для определения уровня достатка
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    //функция для определения доходов с депозита
    checkSavings: function () {
        if (appData.savings) {
            let save = +prompt("Какова сумма накоплений?", "");
            let percent = +prompt("Под какой процент?", "");

            appData.monthIncome = save / 100 / 12 * percent;
            alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
        }
    },
    //функция для определения необязательных расходов
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            appData.optionalExpenses[i + 1] =
                prompt("Статья необязательных расходов?", "");
            while (appData.optionalExpenses[i + 1] == "" || appData.optionalExpenses[i + 1] == null) {
                appData.optionalExpenses[i + 1] =
                    prompt("Статья необязательных расходов?", "");
            }
        }
    },
    chooseIncome: function () {
        let a = prompt("Что принесет дополнительный доход? (Перечислите через запятую)",
            "");
        while ((typeof (a)) !== 'string' ||  a == "" || a == null) {
            a = prompt("Что принесет дополнительный доход? (Перечислите через запятую)",
                "");
        }
        appData.income = a.split(', ');
        appData.income.push(prompt("Что-то еще?"));
        appData.income.sort();


        let s = '';
        appData.income.forEach((value, index) => s += (index + 1) + 
                                                ': ' + value + "\n");
        alert("Способы доп. заработка: \n" + s);
    }
};
console.log("Наша программа включает в себя данные:");

for(let key in appData){
    console.log(`${key}: ${appData[key]}\n`);
}
function first() {
    setTimeout(() => {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

function third(chislo, callback) {
    console.log(chislo);

    callback();
}
// first();
// second();
// third(1, second);
// third(1, function(){
//     console.log(3);
// });