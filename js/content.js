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
			'bibliography' 	: 'Adoro tecnologias, inovação e empreendedorismo. Atualmente trabalho como Developer Full-Stack JavaScript, mas estou sempre buscando aprender coisas novas. Possuo alguns projetos open source no GitHub e três módulos publicados no NPM Packages.'

		},
		'en-US': {
			'name'			: 'Renan Bastos',
			'github'		: '&nbsp;renanbastos93',
			'twitter'		: '&nbsp;renanbastos93',
			'facebook'		: '&nbsp;renanbastos93',
			'reserved'		: 'All rights reserved',
			'bibliography' 	: 'I love technologies, innovation and entrepreneurship. I\'m currently working as a Full-Stack JavaScript Developer, but I\'m always seeking to learn new things. I have some open source projects in my GitHub, and three modules published on NPM Packages.'
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


/*  Bibliography
	I love technologies, innovation and entrepreneurship. 
	I'm currently working as a Full-Stack JavaScript Developer, but I'm always seeking to learn new things.
	I have some open source projects in my GitHub, and three modules published on NPM Packages.

	Adoro tecnologias, inovação e empreendedorismo.
	Atualmente trabalho como Developer Full-Stack JavaScript, 
	mas estou sempre buscando aprender coisas novas.
	Possuo alguns projetos open source no GitHub e três módulos publicados no NPM Packages.
*/

