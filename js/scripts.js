var maleNames = ['Marcin', 'Adam', 'Maciej', 'Kacper'],
	femaleNames = ['Ola', 'Kasia', 'Edyta', 'Beata'];

var allNames = maleNames.concat(femaleNames);

var newName = prompt('Podaj imię', 'Marian');

var indexOfNewName = allNames.indexOf(newName);

if (indexOfNewName === -1) {
	indexOfNewName = allNames.push(newName);
	alert('Imię "' + newName + '" zostało dodane do tablicy.');
} else {
	newName = prompt('Imię "' + newName + '" już znajduje się w tablicy. Wybierz inne imię.', 'Marian');
	indexOfNewName = allNames.indexOf(newName);
	if (indexOfNewName != -1) {
		alert('Po raz drugi wybrałeś imię, które znajduje się w tablicy. Do dwóch razy sztuka, do widzenia!');
	} else {
		indexOfNewName = allNames.push(newName);
		alert('Imię "' + newName + '" zostało dodane do tablicy.');
	}
}

console.log(allNames);
console.log(newName.length);