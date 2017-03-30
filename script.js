function Smartphone(brand, price, color) {
	this.brand = brand; //dzięki użyciu this właściwość "marka" obiektu, który stworzymy, przyjmie wartość argumentu marka
	this.price = price;
	this.color = color;
}

Smartphone.prototype.printInfo = function() {
	console.log('The smartphone brand is ' + this.brand + ', color is ' + this.color + ', and price starts at ' + this.price + '.');
}

Smartphone.prototype.showInfo = function() {
	alert('The smartphone brand is ' + this.brand + ', color is ' + this.color + ', and price starts at ' + this.price + '.');
}

var iPhone6s = new Smartphone('Apple', 2250, 'pink rose'),
	SamsungGalaxyS6 = new Smartphone('Samsung', 2000, 'black'),
	OnePlusOne = new Smartphone('OnePlus', 1600, 'silver');

iPhone6s.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.showInfo();