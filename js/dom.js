(function($){
	//= Vars
	var $form = document.getElementById('form');
	var $input = document.createElement('input');
	var $p = document.createElement('p');

	dom = {
		init: function(){
			dom.addText();
			dom.createInput();
		},
		addText: function(){
			$p.innerHTML = 'Hello!';

			//= Add text in tag </p>
			$form.appendChild($p);
		},
		createInput : function(){
			//= Builder attr's for </input>
			$input.name = "name";
			$input.id = "name";
			$input.type = "text";
			$input.classList.add("form-control");
			$input.required = true;
			$input.autofocus = true;
			$input.placeholder = "First name";

			//= Add input in tag </form>
			$form.appendChild($input);
		}
	};

	dom.init();
})();
