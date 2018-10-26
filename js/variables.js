//= Vars
const msg = "Welcome";
var name = "George";
var lastname;
var age = 17;
let total = 0, count = 1;

console.log("V A R I A B L E S\n------------------------");
console.log(msg+" - "+name);
console.log("age : "+age);
while (count <= 10) {
	total += count;
	count += 1;
}
console.log("Total : "+total);
console.log("A newline character is written like \"\\n\".");
console.log(lastname==undefined);

console.log(typeof 4.5);
// → number
console.log(typeof "x");
// → string