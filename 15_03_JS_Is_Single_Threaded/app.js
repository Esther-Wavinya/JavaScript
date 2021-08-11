//Asynchronous call stack - JS is single threaded meaning at any given point in time, that single JS thread is running at most one line of JS code

console.log('I HAPPEN FIRST!');
alert('Hi there!'); //This holds everything up!
console.log('I HAPPEN SECOND!');



//Browsers come with Web APIs that are able to handle certain tasks in the background(like making requests or setTimeout)
//The JS call stack recognizes these Web API functions and passes them off to the browser to take care of
//Once the browser finishes those tasks, they return and are pushed onto the stack as a callback.
console.log('I HAPPEN FIRST!');
setTimeout(function() {
	//This does NOT hold everything up, because...
	//JS relies on THE BROWSER itself to keep track of the timer
	console.log('I HAPPEN THIRD!');
}, 3000);
console.log('I HAPPEN SECOND!');
