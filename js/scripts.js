var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.',
	animal = 'Zielone słonie';

//animal = animal.toUpperCase();
//textReplaced = text.replace('Papugi', animal.toUpperCase());
//startIndex = (textReplaced.length)/2;
console.log( text.replace('Papugi', animal.toUpperCase()).slice(0,[text.replace('Papugi', animal.toUpperCase()).length]/2));
