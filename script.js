function Button(text) {
	this.text = text || 'Hello'; //funkcja kontruująca Button', która tworzy nowe przyciski
}

Button.prototype.Create = function() { //stworzenie metody Create
		var self = this; //funkcja jest paramentrem innej funkcji, zatem nastąpie utrata kontekstu. Natomiast poprzez zmienną self wskazujemy ten kontekt ponownie.
		this.$element = $('<button>'); //this.$element trzyma jako właściwość elementu przycisku, którzy tworzymy przez jQuery (po '=')
		this.$element.text(this.text);
		this.$element.click(function () { //napisanie funkcji, która wyświetli napis
			alert(self.text);
		})
		$('body').append(this.$element); // umieszczenie elementu w drzewie DOM - 'weź body i przypnij tam elementu'
	}

var btn1 = new Button('Hello!'); //Tworzenie pierwszej instancji
btn1.Create();