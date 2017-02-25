var a,
	b,
	value;

a = prompt('Podaj pierwszą wartość');
b = prompt('Podaj drugą wartość');

value = (a*a) + (2*a*b) - (b*b);
	
console.log(value);

if (value>0) {
	console.log('Wynik dodatni');
} else if (value<0) {
	console.log('Wynik ujemny')
} else {
	console.log('Wynik równy 0')
}