var add = document.getElementById('js-addElem'),
	list = document.getElementById('js-list'),
	number = document.getElementsByTagName('li');

add.addEventListener('click', function(e) {
	var index = number.length;
	list.innerHTML += '<li>item ' + index + '</li>';
});

