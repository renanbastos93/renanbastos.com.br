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
			'bibliography' 	: 'Adoro tecnologias, inovação e empreendedorismo. Eu sempre procuro aprender coisas novas todos os dias. Atualmente trabalhando com "JavaScript" sendo "Full-Stack", tenho alguns projetos no meu GitHub, todos eles são open source. Tenho também três módulos publicados no "Pacotes NPM".'

		},
		'en-US': {
			'name'			: 'Renan Bastos',
			'github'		: '&nbsp;renanbastos93',
			'twitter'		: '&nbsp;renanbastos93',
			'facebook'		: '&nbsp;renanbastos93',
			'reserved'		: 'All rights reserved',
			'bibliography' 	: 'I love technologies, innovation and entrepreneurship. I always seek to learn new things everyday. Currently working with "JavaScript" being "Full-Stack", I have some projects on my GitHub, all of them are open source. I have also three modules published on "NPM Packages".'
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
