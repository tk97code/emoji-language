$(document).ready(function(){

	var originTextArea = $('#origin-text');
	var resultTextArea = $('#converted-text');
	var copyBtn = document.querySelector('#copy-result');
	var transBtn = document.querySelector('#transTypeBtn');
	var transType = "txt2icn";

	function doConversion() {
		var originText = originTextArea.val();
		if (transType == 'txt2icn') {
			originText = originText.toLowerCase();
	   		originText = originText.replace(/a/g, "π");
	    	originText = originText.replace(/b/g, "π");
	   	    originText = originText.replace(/c/g, "π");
	    	originText = originText.replace(/d/g, "π");
	   		originText = originText.replace(/e/g, "π");
	  	    originText = originText.replace(/f/g, "π");
	   	    originText = originText.replace(/g/g, "π");
	    	originText = originText.replace(/h/g, "π€£");
	        originText = originText.replace(/i/g, "βΊοΈ");
	        originText = originText.replace(/j/g, "π");
	        originText = originText.replace(/k/g, "π");
	        originText = originText.replace(/l/g, "π");
	        originText = originText.replace(/m/g, "π");
	        originText = originText.replace(/n/g, "π");
	        originText = originText.replace(/o/g, "π");
	        originText = originText.replace(/p/g, "π");
	        originText = originText.replace(/q/g, "π₯°");
	        originText = originText.replace(/r/g, "π");
	        originText = originText.replace(/s/g, "π");
	        originText = originText.replace(/t/g, "π");
	        originText = originText.replace(/u/g, "π");
	        originText = originText.replace(/v/g, "π");
	        originText = originText.replace(/w/g, "π");
	        originText = originText.replace(/x/g, "π");
	    	originText = originText.replace(/y/g, "π");
	    	originText = originText.replace(/z/g, "π€ͺ");
	    	originText = originText.replace(/ /g, ". "); // Replace space with dot

	        // Some system encode Vietnamese combining accent as individual utf-8 characters
	        originText = originText.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyα»n sαΊ―c hα»i ngΓ£ nαΊ·ng
	        originText = originText.replace(/\u02C6|\u0306|\u031B/g, ""); // Γ, Γ, Δ, Ζ , Ζ―
		}

		else if (transType == 'icn2txt'){
			originText = originText.toLowerCase();
		   	originText = originText.replace(/π/g, "a");
		    originText = originText.replace(/π/g, "b");
			originText = originText.replace(/π/g, "c");
		    originText = originText.replace(/π/g, "d");
		   	originText = originText.replace(/π/g, "e");
			originText = originText.replace(/π/g, "f");
			originText = originText.replace(/π/g, "g");
		    originText = originText.replace(/π€£/g, "h");
			originText = originText.replace(/βΊοΈ/g, "i");
			originText = originText.replace(/π/g, "j");
			originText = originText.replace(/π/g, "k");
			originText = originText.replace(/π/g, "l");
			originText = originText.replace(/π/g, "m");
			originText = originText.replace(/π/g, "n");
			originText = originText.replace(/π/g, "o");
			originText = originText.replace(/π/g, "p");
			originText = originText.replace(/π₯°/g, "q");
			originText = originText.replace(/π/g, "r");
			originText = originText.replace(/π/g, "s");
			originText = originText.replace(/π/g, "t");
			originText = originText.replace(/π/g, "u");
			originText = originText.replace(/π/g, "v");
			originText = originText.replace(/π/g, "w");
			originText = originText.replace(/π/g, "x");
		    originText = originText.replace(/π/g, "y");
		    originText = originText.replace(/π€ͺ/g, "z");
		    originText = originText.replace(/\. /g,' '); // Replace dot with space
		};
		resultTextArea.val(originText);
	}

	copyBtn.addEventListener('click', function(event) {
		resultTextArea.select();
		try {
			var successful = document.execCommand('copy');
			var msg = successful ? 'successful' : 'unsuccessful';
			console.log('Copying text command was ' + msg);
		} catch (err) {
			console.log('Oops, unable to copy');
		}
	});

	transBtn.addEventListener('click', function(event) {
		if (transType == 'icn2txt'){
			transType = 'txt2icn';
			document.getElementById('typeConvert').innerHTML = `Enter the text to be translated: (Translate Type: <span id="typeConvertText">Text <i class="fas fa-long-arrow-alt-right"></i> Icon</span>)`;
		} else if (transType == 'txt2icn'){
			transType = 'icn2txt';
			document.getElementById('typeConvert').innerHTML = `Enter the text to be translated: (Translate Type: <span id="typeConvertText">Icon <i class="fas fa-long-arrow-alt-right"></i> Text</span>)`;
		}
	    doConversion();
	});
	originTextArea.bind('input propertychange', function() {
		doConversion();
	});
});
