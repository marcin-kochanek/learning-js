var maleNames = ['Marcin', 'Adam', 'Maciej', 'Kacper'],
	femaleNames = ['Ola', 'Kasia', 'Edyta', 'Beata'],
	allNames = maleNames.concat(femaleNames),
	newName = prompt('Podaj imię', 'Marian'),
	indexOfNewName = allNames.indexOf(newName); 

if (newName.length != 0) {
	if (indexOfNewName === -1) {
		indexOfNewName = allNames.push(newName);
		alert('Imię "' + newName + '" zostało dodane do tablicy.');
	} else {
		newName = prompt('Imię "' + newName + '" już znajduje się w tablicy. Wybierz inne imię.', 'Marian');
		indexOfNewName = allNames.indexOf(newName);
		if (indexOfNewName != -1) {
			alert('Po raz drugi wybrałeś imię z tablicy. Do widzenia!');
		} else {
			indexOfNewName = allNames.push(newName);
			alert('Imię "' + newName + '" zostało dodane do tablicy.');
		}
	}
} else {
	newName = prompt('Podane imię musi mieć co najmniej 1 literę. Podaj jeszcze raz.', 'Marian');
	if (newName.length = 0) {
		alert('Po raz drugi nie wpisałeś imienia w okienko. Do widzenia!');
	} else {
		if (indexOfNewName === -1) {
			indexOfNewName = allNames.push(newName);
			alert('Imię "' + newName + '" zostało dodane do tablicy.');
		} else {
				newName = prompt('Imię "' + newName + '" już znajduje się w tablicy. Wybierz inne imię.', 'Marian');
				indexOfNewName = allNames.indexOf(newName);
				if (indexOfNewName != -1) {
					alert('Po raz drugi wybrałeś imię z tablicy. Do widzenia!');
				}
		}
	}
}

console.log(allNames);
console.log(newName.length);