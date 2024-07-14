// Создаем класс Transport со свойствами: type, price, brand и два метода getInfo() и getPrice() ;
class Transport {
	constructor(type, brand, price) {
		this.type = type;
		this.brand = brand;
		this.price = price;
	}
	getInfo() {
		return `ТС: ${this.type}, Марка: ${this.brand}`
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

	getInfo = this.getInfo.bind(this)
	getPrice = this.getPrice.bind(this)

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

	getInfo = this.getInfo.bind(this)
	getPrice = this.getPrice.bind(this)

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
const carAudi = new Car(data[0].type, data[0].brand, data[0].price, data[0].doors);
const carMercedes = new Car(data[1].type, data[1].brand, data[1].price, data[1].doors);
const bikeHarleyFirst = new Bike(data[2].type, data[2].brand, data[2].price, data[2].maxSpeed);
const bikeHarleySecond = new Bike(data[3].type, data[3].brand, data[3].price, data[3].maxSpeed);


// Ищем объекты (область списка для вывода транспорта) в HTML документе для дальнейшего взаимодействия.
const result = document.querySelector(`#result`);

//Создаем новые элементы (нумерованный список и заголовки) для отображения списка имен режиссеров
const transportInfoAudi = document.createElement(`h4`);
const transportInfoMercedes = document.createElement(`h4`);
const transportInfoHarleyFirst = document.createElement(`h4`);
const transportInfoHarleySecond = document.createElement(`h4`);

//Создаем новые элементы (абзац) для отображения количества дверей ТС
const transportDoorsAudi = document.createElement(`p`);
const transportDoorsMercedes = document.createElement(`p`);

//Создаем новые элементы (абзац) для отображения скорости ТС
const transportSpeedHarleyFirst = document.createElement(`p`);
const transportSpeedHarleySecond = document.createElement(`p`);

//Создаем новые элементы (абзац) для отображения стоимости ТС
const transportPriceAudi = document.createElement(`p`);
transportPriceAudi.style.marginBottom = "3rem";
const transportPriceMercedes = document.createElement(`p`);
transportPriceMercedes.style.marginBottom = "3rem";
const transportPriceHarleyFirst = document.createElement(`p`);
transportPriceHarleyFirst.style.marginBottom = "3rem";
const transportPriceHarleySecond = document.createElement(`p`);
transportPriceHarleySecond.style.marginBottom = "3rem";

// Наполняем новый элемент контентом (значение тега h3 - информация о ТС № 1)
transportInfoAudi.textContent = `${carAudi.getInfo()}`;
// Вставляем новый элемент (информация о ТС № 1) внутрь и в начало списка с информацией о всех ТС
result.appendChild(transportInfoAudi);
//Наполняем новый элемент контентом (значение тега p теперь количество дверей ТС)
transportDoorsAudi.textContent = `${carAudi.getDoorsCount()}`;
// Вставляем новый элемент (стоимость ТС № 1) рядом со стоимостью ТС № 1
transportInfoAudi.appendChild(transportDoorsAudi);
//Наполняем новый элемент контентом (значение тега p теперь цена ТС)
transportPriceAudi.textContent = `${carAudi.getPrice()}`;
// Вставляем новый элемент (стоимость ТС № 1) рядом с информацией о количестве дверей ТС № 1
transportDoorsAudi.appendChild(transportPriceAudi);


// Наполняем новый элемент контентом (значение тега h3 - информация о ТС № 2)
transportInfoMercedes.textContent = `${carMercedes.getInfo()}`;
// Вставляем новый элемент (информация о ТС № 2) внутрь и в начало списка с информацией о всех ТС
result.appendChild(transportInfoMercedes);
//Наполняем новый элемент контентом (значение тега p теперь количество дверей ТС)
transportDoorsMercedes.textContent = `${carMercedes.getDoorsCount()}`;
// Вставляем новый элемент (стоимость ТС № 2) рядом со стоимостью ТС № 2
transportInfoMercedes.appendChild(transportDoorsMercedes);
//Наполняем новый элемент контентом (значение тега p теперь цена ТС)
transportPriceMercedes.textContent = `${carMercedes.getPrice()}`;
// Вставляем новый элемент (стоимость ТС № 2) рядом с информацией о количестве дверей ТС № 2
transportDoorsMercedes.appendChild(transportPriceMercedes);


// Наполняем новый элемент контентом (значение тега h3 - информация о ТС № 3)
transportInfoHarleyFirst.textContent = `${bikeHarleyFirst.getInfo()}`;
// Вставляем новый элемент (информация о ТС № 3) внутрь и в начало списка с информацией о всех ТС
result.appendChild(transportInfoHarleyFirst);
//Наполняем новый элемент контентом (значение тега p теперь скорость ТС)
transportSpeedHarleyFirst.textContent = `${bikeHarleyFirst.getMaxSpeed()}`;
// Вставляем новый элемент (скорость ТС № 3) рядом с информацией о ТС № 3
transportInfoHarleyFirst.appendChild(transportSpeedHarleyFirst);
//Наполняем новый элемент контентом (значение тега p теперь стоимость ТС)
transportPriceHarleyFirst.textContent = `${bikeHarleyFirst.getPrice()}`;
// Вставляем новый элемент (стоимость ТС № 3) рядом со скоростью ТС № 3
transportSpeedHarleyFirst.appendChild(transportPriceHarleyFirst);


// Наполняем новый элемент контентом (значение тега h3 - информация о ТС № 4)
transportInfoHarleySecond.textContent = `${bikeHarleySecond.getInfo()}`;
// Вставляем новый элемент (информация о ТС № 4) внутрь и в начало списка с информацией о всех ТС
result.appendChild(transportInfoHarleySecond);
//Наполняем новый элемент контентом (значение тега p теперь скорость ТС)
transportSpeedHarleySecond.textContent = `${bikeHarleySecond.getMaxSpeed()}`;
// Вставляем новый элемент (скорость ТС № 4) рядом с информацией о ТС № 4
transportInfoHarleySecond.appendChild(transportSpeedHarleySecond);
//Наполняем новый элемент контентом (значение тега p теперь стоимость ТС)
transportPriceHarleySecond.textContent = `${bikeHarleySecond.getPrice()}`;
// Вставляем новый элемент (стоимость ТС № 4) рядом со скоростью ТС № 4
transportSpeedHarleySecond.appendChild(transportPriceHarleySecond);