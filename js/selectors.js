(function($){
	//= Vars
	var $title = document.getElementById('title');
	var $text = document.getElementById('text');
	var $item = document.getElementsByClassName('item')[0];
	var $thumb = document.querySelector('.thumb');
	var $card = document.querySelector('#card');

	selectors = {
		init: function(){
			selectors.getData();
			selectors.getClass();
		},
		getClass: function(){
			$text.innerHTML  = "My getElementById";
			$item.innerHTML  = "My getElementsByClassName";
			$thumb.innerHTML  = "My Class querySelector";
			$card.innerHTML  = "My ID querySelector";
		},
		getData: function(){
			$title.innerHTML  = $title.dataset.name;
		}
	};

	selectors.init();
})();
