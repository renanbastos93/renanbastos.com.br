(function(){
	'use strict';

	const RenanContent = document.querySelectorAll('[content-id]');
	const lan = document.querySelectorAll('#language');

	const language = (navigator.language || window.navigator.language) || 'en-US';
	const content = {
		'pt-BR': {
			'name'			: 'Renan Bastos',
			'github'		: '&nbsp;renanbastos93',
			'twitter'		: '&nbsp;renanbastos93',
			'facebook'		: '&nbsp;renanbastos93',
			'reserved'		: 'Todos direitos reservados',
			'bibliography' 	: 'Amante de tecnologias, inovação e empreendedorismo. Procuro sempre aprender coisas novas todos os dias. Hoje trabalho com "JavaScript" em tempo integral sendo "Full-Stack". Tenho alguns projetos no meu GitHub, sendo três projetos publicados no "NPM Packages".'

		},
		'en-US': {
			'name'			: 'Renan Bastos',
			'github'		: '&nbsp;renanbastos93',
			'twitter'		: '&nbsp;renanbastos93',
			'facebook'		: '&nbsp;renanbastos93',
			'reserved'		: 'All rights reserved',
			'bibliography' 	: 'I love technologies, innovation and entrepreneurship. I seek it ever learning, everyday, searching thing new for my learning. Currently working with "JavaScript" being "Full-Stack", I have some projects on my GitHub, every projects open source. I have Also three modules published on "NPM Packages".'
		}
	};


	function setLanguage(language){
		RenanContent.forEach((item) => {
			for(let id in content[language]){
				if(item.getAttribute('content-id') == id){
					item.innerHTML = content[language][id];
				}
			}
		});
	};

	function selectLanguage(item){
		return item.value == language;
	};

	setLanguage(language);

	lan.forEach((current, index) => {
		current.onchange = function(){
			setLanguage(this.options[this.selectedIndex].value);
		};
		let options = Array.prototype.slice.call(current.options)
 		options = options.filter(selectLanguage);
 		options.forEach((item) => {
 			current.selectedIndex = item.index;
 		});
		
	});

})();
