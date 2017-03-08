function rysuj(n) { 
  for ( var star = '' ; star.length < n ;) {
  	for ( star = '*' ; star.length - 1 < n*2-1; star += '**') {
  		console.log(star);
  	}
}
}