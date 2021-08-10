const colors = [
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'purple',
	'indigo',
	'violet'
];
//evt - event object - information like what was clicked on, what key was pressed, what time after the page loaded,where on screen the coordinates exactly,
const h1 = document.querySelector('h1');
const changeColor = function(evt) {
	console.log(evt); //CONTAINS INFORMATION ON THE CLICK EVENT!
	h1.style.color = this.style.backgroundColor;
};
const container = document.querySelector('#boxes');

for (let color of colors) {
	const box = document.createElement('div');
	box.style.backgroundColor = color;
	box.classList.add('box');
	container.appendChild(box);
	box.addEventListener('click', changeColor);
}


//keypress eventlistener
document.body.addEventListener('keypress', function(e) {
	console.log(e); //CONTAINS INFORMATION ON THE KEYPRESS EVENT
});
