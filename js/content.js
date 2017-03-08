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
			'bibliography' 	: 'Sou apaixonado por tecnologias, inovação e empreendedorismo. Busco sempre estar aprendendo cada dia mais, buscando coisas novas e inovando.'

		},
		'en-US': {
			'name'			: 'Renan Bastos',
			'github'		: '&nbsp;renanbastos93',
			'twitter'		: '&nbsp;renanbastos93',
			'facebook'		: '&nbsp;renan.bastos.925',
			'reserved'		: 'All right reserved',
			'bibliography' 	: 'I am passionate about technologies, innovation and entrepreneurship. I always seek to be learning every day more, searching for new things and innovating'
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

	lan.forEach((current) => {
		current.onchange = function(){
			setLanguage(this.options[this.selectedIndex].value);
		};
	});

})();
