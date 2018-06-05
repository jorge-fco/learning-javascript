var c;

Name = {

	//Configs
	config: {
		message : 'Hello',
		production : true,
		Modal : document.getElementsByClassName('modal'),
		openModal : document.getElementById('open-modal'),
		closeModal : document.getElementById('close-modal')
	},

	//Ejecute functions
	init: function(){
		c = this.config;
		Name.Modal();
	},

	//Functions
	Modal: function(){
		c.openModal.addEventListener('click', function(){
			console.log("Open modal...");
		});

		c.closeModal.addEventListener('click', function(){
			console.log("Close modal...");
		});
	}
};

Name.init();