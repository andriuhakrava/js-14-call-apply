/* 1. Закінчіть функції min, max, протестуйте на різноманітних масивах. */

	function min(){
		let res = arguments[0];
		if (res !== undefined && typeof res !== 'number') return NaN;
		for (let i = 0; i < arguments.length; i++){
			if (typeof arguments[i] !== 'number') return NaN;
			if (arguments[i] < res) res = arguments[i];
		}
		return res;
	}

	function max(){
		let res = arguments[0];
		if (res !== undefined && typeof res !== 'number') return NaN;
		for (let i = 0; i < arguments.length; i++){
			if (typeof arguments[i] !== 'number') return NaN;
			if (arguments[i] > res) res = arguments[i];
		}
		return res;
	}
	console.groupCollapsed('Результати виклику функції max:');
	console.log(max(23, 8, 9));
	console.log(max('rr', 12, 10));
	console.log(max(34, '', 6, 42));
	console.groupEnd();
	console.groupCollapsed('Результати виклику функції min:');
	console.log(min(4, 18, 13));
	console.log(min('rrte', 34, -10));
	console.log(min(-10, -23, -4));
	console.groupEnd();

/* 2. Посортуйте всі абзаци лекції, використовуючи функцію сортування масива .sort(). */

 [...document.querySelectorAll('p')].sort(function(a, b){
 		return a.innerText > b.innerText ? 1 : -1;
 }).forEach((p) => document.body.appendChild(p));

/* 3. Перевірте, чи хоч в одному заголовку h2 є літера "ї". Використайте відповідні методи.*/

	let headers = document.getElementsByTagName('h2');

	console.groupCollapsed('Результат перевірки наявності у заголовках на сторінці літери "ї":');
	console.log(Array.prototype.some.call(headers, function(item){
		return item.innerText.indexOf('ї') !== -1;
	}) ? 'Є' : 'Нема');
	console.groupEnd();

/* 4. Створіть базовий об'єкт "гарбуз", задайте йому колір, сорт, ціну за кілограм, нульову вагу,
	 а також метод виводу в консоль інормації про вартість гарбуза.
	На основі цього базового об'єкта створіть 5 гарбузів тільки з властивостями, без методів,
	задавайте кожному випадкову вагу в межах 5-15 кг.
	Скористайтесь методом базового об'єкта для вивода інформації про вартість кожного створеного 
	гарбуза. */

	let pumpkin = {
		color: 'orange',
		variety: 'Hilea',
		'ціна за кілограм': '36 грн.',
		weight: '0 кг.',
		printPumpkinPrice(){
			console.log(parseFloat(this.weight) * parseFloat(this['ціна за кілограм']) + ' грн.');
		}
	}

	function copyPumpkin(){
		let obj = {};
		for (let key in pumpkin) {
			if (typeof pumpkin[key] !== 'function'){
				obj[key] = pumpkin[key];
			}
		}
		return obj;
	}

	let arrCopiedPumpkins = [];
	for (let i = 0; i < 5; i++){
		arrCopiedPumpkins.push(copyPumpkin());
		arrCopiedPumpkins[i].weight = `${randomWeight()} кг`;
	}

	function randomWeight(){
		return Math.floor(Math.random()*16) + 5;
	}

	console.groupCollapsed('Масив з 5 гарбузів тільки з властивостями, без методів');
	console.log(arrCopiedPumpkins);
	console.groupEnd();

	for (let i = 0 ; i < arrCopiedPumpkins.length; i++){
		pumpkin.printPumpkinPrice.call(arrCopiedPumpkins[i]);
	}

