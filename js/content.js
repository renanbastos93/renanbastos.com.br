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
			'facebook'		: '&nbsp;renan.bastos.925',
			'reserved'		: 'Todos direitos reservados',
			'bibliography' 	: 'Amante de tecnologias, inovação e empreendedorismo. Procure sempre aprender coisas novas todos os dias. Hoje trabalho com "JavaScript" em tempo integral sendo "full-stack". Tenho vários projetos no meu GitHub, sendo dois projetos publicados nos "NPM Packages".'

		},
		'en-US': {
			'name'			: 'Renan Bastos',
			'github'		: '&nbsp;renanbastos93',
			'twitter'		: '&nbsp;renanbastos93',
			'facebook'		: '&nbsp;renan.bastos.925',
			'reserved'		: 'All right reserved',
			'bibliography' 	: 'I love to technologies, innovation and entrepreneur. Ever seek learning new things everyday. Today work with "JavaScrip" in full time. I have various projects in my GitHub, being two projects publish in the NPM Packages.'
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
