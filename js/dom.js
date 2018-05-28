//Vars
var $Container = document.getElementById('container');
var $input = document.createElement('input');

//Input add Attr
$input.name = "name";
$input.id = "name";
$input.type = "text";
$input.required = true;
$input.autofocus = true;
$input.placeholder = "My name";


//Set in my container
$Container.appendChild($input);