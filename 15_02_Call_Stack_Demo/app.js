//When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function
//Any functions that are called by that function are added to the call stack further up, and run where their calls are reached
//When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.

const repeat = (str, times) => {
	let result = '';
	for (let i = 0; i < times; i++) {
		result += str;
	}
	return result;
};

const scream = (str) => {
	return str.toUpperCase() + '!!!';
};

const getRantText = (phrase) => {
	let text = scream(phrase);
	let rant = repeat(text, 8);
	return rant;
};

const makeRant = (phrase, el) => {
	const h1 = document.createElement('h1');
	h1.innerText = getRantText(phrase);
	el.appendChild(h1);
};
console.log('HELLO!');

makeRant('I hate mayonnaise', document.body);

//
makeRant('if you have to cough, please cover your mouth', document.body);
