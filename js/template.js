var c;

Name = {

	//Configs
	config: {
		//get class name
		modal: document.getElementsByClassName('modal'),
		//get id
		loader: document.getElementById('open-modal')
	},

	//Ejecute functions
	init: function(){
		c = this.config;
		Name.Modal();
	},

	//Functions
	Modal: function(){
		c.loader.addEventListener('click', function(){
			console.log("Modal...");
		});
	}
};

Name.init();