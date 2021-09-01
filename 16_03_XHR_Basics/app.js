/**
 * AJAX
 * Asychronous
 * JavaScript
 * And
 * Json/XML
 * XMLHttpRequaest - The original way of sending requests via Js
 * Dpes not support promises, so...lots of callbacks!
 * WTF is going on with the weird capitalization
 * Clunky syntax that I find difficult to remember
 */

const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function() {
	console.log('IT WORKED!!!');
	const data = JSON.parse(this.responseText);
	for (let planet of data.results) {
		console.log(planet.name);
	}
});
firstReq.addEventListener('error', () => {
	console.log('ERROR!!!!!!');
});
firstReq.open('GET', 'https://swapi.co/api/planets/');
firstReq.send();
console.log('Request Sent!');
