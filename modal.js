(function(){
	'use strict';
	
	var modal = document.getElementById('myModal');
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");

	var imgs = Array.prototype.slice.call(document.querySelectorAll('img'));

	imgs.forEach(function(info){
		if(info.id){
			if(info.id.split('_')[0] == "myImg"){
				var my = info;
				my.onclick = function(){
					modal.style.display = "block";
					modalImg.src = this.src;
					captionText.innerHTML = this.alt;
				};
			}
		};

	});

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("closeA")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	};

	window.addEventListener('keydown', function(e){
		if(modal.style.display != "none"){
			if(e.keyCode == 27){
				modal.style.display = "none";
			}
		}	
	});
})();