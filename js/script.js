// Создаем класс Transport со свойствами: type, price, brand и два метода getInfo() и getPrice() ;
class Transport {
	constructor(type, brand, price) {
		this.type = type;
		this.brand = brand;
		this.price = price;
	}
	getInfo() {
		return `Вид ТС: ${this.type}, Марка: ${this.brand}`
	}
	getPrice() {
		return `Стоимость: ${this.price.toLocaleString("ru-RU")} руб.`
	}
}

// Создаем класс Car, который наследует от Transport. Содержит метод getDoorsCount() , который возвращает количество дверей
class Car extends Transport {
	constructor(type, brand, price, doors) {
		super(type, brand, price);
		this.doors = doors;
	}

	getDoorsCount() {
		return `Количество дверей: ${this.doors}`
	}
}

// Создаем класс Bike, который наследует от Transport. Содержит метод getMaxSpeed(), который возвращает максимальную скорость мотоцикла
class Bike extends Transport {
	constructor(type, brand, price, maxSpeed) {
		super(type, brand, price);
		this.maxSpeed = maxSpeed;
	}

	getMaxSpeed() {
		return `Максимальная скорость: ${this.maxSpeed} км/ч`
	}
}


// Сохраняем в переменную data массив из объектов
const data = [{
		id: 1,
		type: 'car',
		brand: 'Audi',
		doors: 4,
		price: 4300000,
		image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg>'
	},
	{
		id: 2,
		type: 'car',
		brand: 'Mercedes-Benz',
		doors: 4,
		price: 2800000,
		image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg>'
	},
	{
		id: 3,
		type: 'bike',
		brand: 'Harley-Davidson',
		maxSpeed: 210,
		price: 1300000,
		image: '<https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg>'
	},
	{
		id: 4,
		type: 'bike',
		brand: 'Harley-Davidson',
		maxSpeed: 220,
		price: 1400000,
		image: '<https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png>'
	}
];


//Создаем новые объекты
const vehicles = data.map(item => {
	if (item.type === 'car') {
		return new Car(item.type, item.brand, item.price, item.doors);
	} else if (item.type === 'bike') {
		return new Bike(item.type, item.brand, item.price, item.maxSpeed);
	}
})


// Ищем область списка для вывода транспорта в HTML документе для дальнейшего взаимодействия.
const result = document.querySelector(`#result`);


// С помощью метода forEach перебираем элементы массива и выполняем функцию для каждого элемента массива (новых объектов Car и Bike)
vehicles.forEach(item => {
	// Создаем новый элемент (заголовок) для отображения информации о ТС
	const transportInfo = document.createElement(`h4`);
	// Наполняем новый элемент контентом (значение тега h4 - информация о ТС)
	transportInfo.textContent = `${item.getInfo()}`
	// Вставляем новый элемент внутрь и в начало контейнера div для вывода результата
	result.appendChild(transportInfo);
	// Создаем абзац для отображения количества дверей авто
	const transportDoors = document.createElement(`p`);
	if (item.type === 'car') {
		//Наполняем новый элемент контентом (значение тега p теперь количество дверей авто)
		transportDoors.textContent = `${item.getDoorsCount()}`
		//Вставляем новый элемент (количество дверей авто) после информации о ТС
		transportInfo.after(transportDoors);
	}
	// Создаем абзац для отображения скорости мотоцикла
	const transportSpeed = document.createElement(`p`);
	if (item.type === 'bike') {
		// Наполняем новый элемент контентом (значение тега p теперь скорость мотоцикла)
		transportSpeed.textContent = `${item.getMaxSpeed()}`
		// Вставляем новый элемент (скорость мотоцикла) после информации о ТС
		transportInfo.after(transportSpeed);
	}
	// Создаем новый элемент (заголовок) для отображения стоимости ТС
	const transportPrice = document.createElement(`p`);
	transportPrice.style.marginBottom = "3rem";
	transportPrice.style.color = "red";
	// Наполняем новый элемент контентом (значение тега p теперь стоимость ТС)
	transportPrice.textContent = `${item.getPrice()}`
	// Вставляем новый элемент в контейнер div для вывода результата
	result.appendChild(transportPrice);
})