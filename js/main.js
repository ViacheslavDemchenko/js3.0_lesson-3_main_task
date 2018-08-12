//Объявляем переменные
let budget, 
	shopName, 
	time, 
	price,
	newEmployer; 

//Задаем начальные переменные и записываем в них данные пользователя через функцию
function start() {
	budget = +prompt('Ваш бюджет на месяц?');//Переводим данные в числовой формат (+)

	while(isNaN(budget) || budget == '' || budget == null) {
		budget = +prompt('Ваш бюджет на месяц?');//Предотвращаем возможность ввода неверных данных
	}
//Записываем название магазина заглавными буквами
	shopName = prompt('Название вашего магазина?').toUpperCase();
	time = 21;
};
start();

//Задаем объект для хранения основных данных
let mainList = {
		budget: budget,
		shopName: shopName,
		shopGoods: [],
		employers: {},
		open: false,
		discount: false
	}

//Функция получения от пользователя типов товаров и внесения их в массив
function chooseGoods() {
	for (let i = 0; i < 5; i++) {
		let newGoods = prompt('Какой тип товаров будем продавать?');
				
		if( (typeof(newGoods) ) === 'string' && ( typeof(newGoods) ) != null && newGoods != '' 
				&& newGoods.length < 50) {
				console.log('Все верно!');
				mainList.shopGoods[i] = newGoods;
		} else {
				alert('Введите верные данные!');
				i--;
		}
	}
};
chooseGoods();

//Функция найма сотрудников
function employersHire() {
	for (let i = 0; i < 4; i++) {
		newEmployer = prompt('Введите имя сотрудника:');
//Проверка вводимых данных на строковое значение
			while(newEmployer == null || newEmployer == '' || !isNaN(newEmployer) ) {
				alert('Введите верные данные!');
				newEmployer = prompt('Введите имя сотрудника:');
			}
			mainList.employers[i] = newEmployer;//Ввод данных в объект
	}
};
employersHire();

//Функция проверки времени и контроля открытия магазина
function workTime(time) {
	if(time < 0) {
		console.log('Такого не может быть');
		} else if (time > 8 && time < 20) {
			console.log('Время работать');
			} else if (time < 24) {
				console.log('Уже слишком поздно');
				} else {
					console.log('В сутках только 24 часа!');
					}
};
workTime();

//Функция дисконтной системы
function discountCalc() {
	if(mainList.discount == true) {
		let discountPrice = (80 / 100) * price; //Устанавливаем скиду в 80%
		console.log(discountPrice);
	}
};
discountCalc();

//Выводим суточный бюджет через функцию
function dayBudget(budget, days) {
	alert('Ваш бюджет на один день: ' + (budget / days) );
};
dayBudget(budget, 30);
