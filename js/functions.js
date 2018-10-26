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
	Call a functions
*/
let name = 'George';

//Call function
setName(name);

function setName(name){
	console.log("Name : "+name);
}

/*=
	The call stack
*/
function greet(who) {
	console.log("Hello " + who);
}

greet("George");
console.log("Bye");

let a = true;

_isDefine(a);

function _isDefine(value){
	if(value===undefined){
		console.error("var a is undefined");
	} else{
		console.log("var "+value);
	}
}
