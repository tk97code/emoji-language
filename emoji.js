var originTextArea = $('#origin-text');
var transType = "txt2icn";
var resultTextArea = $('#converted-text');
var transBtn = document.querySelector('#transTypeBtn');

$(document).on("click","#emoji-picker",function(e){
    e.stopPropagation();
    $('.composer-emoji-popover').toggleClass("active");
});

$(document).click(function (e) {
    if ($(e.target).attr('class') != '.composer-emoji-popover' && $(e.target).parents(".composer-emoji-popover").length == 0) {
        $(".composer-emoji-popover").removeClass("active");
    }
});

$(document).on("click",".emoji-picker-emoji",function(e){
    var myTextArea = $('#origin-text');
    myTextArea.val(myTextArea.val() + $(this).html());
    doConversion();
});

$('.composer-popover-input').on('input', function() {
    var query = this.value;
    if(query != ""){
        $(".emoji-picker-emoji:not([title*='"+query+"'])").hide();
    }
    else{
        $(".emoji-picker-emoji").show();
    }
});

function doConversion() {
    var originText = originTextArea.val();
    if (transType == 'txt2icn'){
        originText = originText.toLowerCase();
        originText = originText.replace(/a/g, "😀");
        originText = originText.replace(/b/g, "😃");
        originText = originText.replace(/c/g, "😄");
        originText = originText.replace(/d/g, "😁");
        originText = originText.replace(/e/g, "😆");
        originText = originText.replace(/f/g, "😅");
        originText = originText.replace(/g/g, "😂");
        originText = originText.replace(/h/g, "🤣");
        originText = originText.replace(/i/g, "☺️");
        originText = originText.replace(/j/g, "😊");
        originText = originText.replace(/k/g, "😇");
        originText = originText.replace(/l/g, "🙂");
        originText = originText.replace(/m/g, "🙃");
        originText = originText.replace(/n/g, "😉");
        originText = originText.replace(/o/g, "😌");
        originText = originText.replace(/p/g, "😍");
        originText = originText.replace(/q/g, "🥰");
        originText = originText.replace(/r/g, "😘");
        originText = originText.replace(/s/g, "😗");
        originText = originText.replace(/t/g, "😙");
        originText = originText.replace(/u/g, "😚");
        originText = originText.replace(/v/g, "😋");
        originText = originText.replace(/w/g, "😛");
        originText = originText.replace(/x/g, "😝");
        originText = originText.replace(/y/g, "😜");
        originText = originText.replace(/z/g, "🤪");
        originText = originText.replace(/ /g, ". "); // Replace space with dot

        // Some system encode Vietnamese combining accent as individual utf-8 characters
        originText = originText.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
        originText = originText.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
    }

    else if (transType == 'icn2txt'){
        originText = originText.toLowerCase();
        originText = originText.replace(/😀/g, "a");
        originText = originText.replace(/😃/g, "b");
        originText = originText.replace(/😄/g, "c");
        originText = originText.replace(/😁/g, "d");
        originText = originText.replace(/😆/g, "e");
        originText = originText.replace(/😅/g, "f");
        originText = originText.replace(/😂/g, "g");
        originText = originText.replace(/🤣/g, "h");
        originText = originText.replace(/☺️/g, "i");
        originText = originText.replace(/😊/g, "j");
        originText = originText.replace(/😇/g, "k");
        originText = originText.replace(/🙂/g, "l");
        originText = originText.replace(/🙃/g, "m");
        originText = originText.replace(/😉/g, "n");
        originText = originText.replace(/😌/g, "o");
        originText = originText.replace(/😍/g, "p");
        originText = originText.replace(/🥰/g, "q");
        originText = originText.replace(/😘/g, "r");
        originText = originText.replace(/😗/g, "s");
        originText = originText.replace(/😙/g, "t");
        originText = originText.replace(/😚/g, "u");
        originText = originText.replace(/😋/g, "v");
        originText = originText.replace(/😛/g, "w");
        originText = originText.replace(/😝/g, "x");
        originText = originText.replace(/😜/g, "y");
        originText = originText.replace(/🤪/g, "z");
        originText = originText.replace(/\. /g,' '); // Replace dot with space
    };
    resultTextArea.val(originText);
}

transBtn.addEventListener('click', function(event) {
    if (transType == 'icn2txt'){
        transType = 'txt2icn';
        originTextArea.val('');
        originTextArea.val(resultTextArea.val())
        document.getElementById('typeConvert').innerHTML = `Enter the text to be translated: (Translate Type: <span id="typeConvertText">Text <i class="fas fa-long-arrow-alt-right"></i> Icon</span>)`;
        $('#typeConvertText').fadeOut();
    } else if (transType == 'txt2icn'){
        transType = 'icn2txt';
        originTextArea.val('');
        originTextArea.val(resultTextArea.val())
        resultTextArea.val('')
        document.getElementById('typeConvert').innerHTML = `Enter the text to be translated: (Translate Type: <span id="typeConvertText">Icon <i class="fas fa-long-arrow-alt-right"></i> Text</span>)`;
    }
    doConversion();
});
