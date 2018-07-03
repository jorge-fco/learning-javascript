/*!
	- 03 FUNCTIONS
	- Eloquent JavaScript
	2018
*/

/*=
	Defining a function
*/
const square = function(x) {
	return x * x;
};

console.log("Result : "+square(4));

/*=
*/
let name = 'George';

setName(name);

function setName(name){
	console.log("Name : "+name);
}