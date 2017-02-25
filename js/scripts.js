var result,
	a,
	check,
	h;

function getTriangleArea(a, h) {
	if (a > 0 && h > 0) {
		result = (a * h) / 2;
	} else {
		result = 'Nieprawidłowe dane';
	}
	return result;
}

var triangle1Area = getTriangleArea(5, 10);
var triangle2Area = getTriangleArea(-5, 10);
var triangle3Area = getTriangleArea(10, 15);

//console.log(triangle2Area);
//console.log( getTriangleArea(10,6) );