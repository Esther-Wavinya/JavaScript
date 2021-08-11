//A promise is an object representing the eventual completion or failure of an asynchronous operation.
//PROMISES - A PATTERN for writing async code
//RESOLVE    REJECT
//A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function
//Every promise has a .then method

const willGetYouADog = new Promise((resolve, reject) => {
	const rand = Math.random();
	if (rand < 0.5) {
		resolve();
	}
	else {
		reject();
	}
});
willGetYouADog.then(() => {
	console.log('YAY WE GOT A DOG!!!!');
});
willGetYouADog.catch(() => {
	console.log(':( NO DOG');
});
