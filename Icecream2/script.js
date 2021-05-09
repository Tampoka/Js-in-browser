var cardsData = [
	{
		inStock: true,
		imgUrl: "img/choco.jpg",
		text: "Сливочно-кофейное с кусочками шоколада",
		price: 310,
		isHit: true,
		specialOffer: "Двойная порция сиропа бесплатно!",
	},
	{
		inStock: false,
		imgUrl: "img/lemon.jpg",
		text: "Сливочно-лимонное с карамельной присыпкой",
		price: 125,
		isHit: false,
	},
	{
		inStock: true,
		imgUrl: "img/cowberry.jpg",
		text: "Сливочное с брусничным джемом",
		price: 170,
		isHit: false,
	},
	{
		inStock: true,
		imgUrl: "img/cookie.jpg",
		text: "Сливочное с кусочками печенья",
		price: 250,
		isHit: false,
	},
	{
		inStock: true,
		imgUrl: "img/creme-brulee.jpg",
		text: "Сливочное крем-брюле",
		price: 190,
		isHit: false,
	},
];

var makeElement = function (tagName, className, text) {
	var element = document.createElement(tagName);
	element.classList.add(className);
	if (text) {
		element.textContent = text;
	}
	return element;
};

var renderCards = function (product) {
	var listItem = makeElement("li", "good");

	var title = makeElement("h2", "good__description", product.text);
	listItem.appendChild(title);

	var picture = makeElement("img", "good__image");
	picture.src = product.imgUrl;
	picture.alt = product.text;
	listItem.appendChild(picture);

	var price = makeElement("p", "good__price", product.price + "₽/кг");
	listItem.appendChild(price);

	var availabilityClass = "good--available";
	if (!product.inStock) {
		availabilityClass = "good--unavailable";
	}
	listItem.classList.add(availabilityClass);

	if (product.isHit) {
		listItem.classList.add("good--hit");
		var specialPrice = makeElement(
			"p",
			"good__special-offer",
			product.specialOffer
		);
		listItem.appendChild(specialPrice);
	}

	return listItem;
};

var cardList = document.querySelector(".goods");

for (var i = 0; i < cardsData.length; i++) {
	var cardItem = renderCards(cardsData[i]);
	cardList.appendChild(cardItem);
}
/* Техническое задание

Мяу! Помнишь магазин мороженого? Нужно создать карточки товаров, основываясь на данных, полученных с сервера.

Данные — массив объектов cardsData, один элемент соответствует одному товару. У каждого объекта есть следующие свойства:

- inStock — доступность товара. Если значение true — товар доступен (для такого продукта верстальщик подготовил класс good--available), если false — продукта нет в наличии (товар с классом good--unavailable).
- imgUrl — ссылка на изображение товара.
- text — название продукта.
- price — цена.
- isHit — является ли товар хитом продаж. Если значение true — продукт «хитовый». Для такого товара подготовлен класс good--hit.
- specialOffer — специальное предложение, которое есть только у хита продаж. Должно находиться в абзаце с классом good__special-offer и быть самым последним дочерним элементом в карточке.

Вот пример вёрстки одной карточки в каталоге:

<ul class="goods">
  <li class="good">
    <h2 class="good__description">Сливочно-кофейное с кусочками шоколада</h2>
    <img class="good__image" src="img/choco.jpg" alt="Сливочно-кофейное с кусочками шоколада">
    <p class="good__price">110₽/кг</p>
  </li>
  ...
</ul>

Обрати внимание, что текст в атрибуте alt у изображения должен быть таким же, как и название товара.

Создай функцию renderCards, которая будет принимать на вход массив данных, вызови её, передав cardsData, и отрисуй на странице карточки мороженого.

*/
