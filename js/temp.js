(function () {
    var hidden = "hidden";

    if (hidden in document) document.addEventListener("visibilitychange", onchange);
    else if ((hidden = "mozHidden") in document) document.addEventListener("mozvisibilitychange", onchange);
    else if ((hidden = "webkitHidden") in document) document.addEventListener("webkitvisibilitychange", onchange);
    else if ((hidden = "msHidden") in document) document.addEventListener("msvisibilitychange", onchange);
    else if ('onfocusin' in document) document.onfocusin = document.onfocusout = onchange;
    else window.onpageshow = window.onpagehide = window.onfocus = window.onblur = onchange;

 	var openPage = new Date().getTime();
 	var openTemp;

    function onchange(evt) {

        var evtMap = {
            focus: true,
            focusin: true,
            pageshow: true,
            blur: false,
            focusout: false,
            pagehide: false
        };

        evt = evt || window.event;
        if (evt.type in evtMap) evtMap[evt.type] ? functionVisible() : functionHidden();
        else this[hidden] ? functionHidden() : functionVisible();
        console.log('Temp open: ', openTemp);
    }

    function functionVisible() {
        console.log('Visible');
    }

    function functionHidden() {
	 	openTemp = ((new Date().getTime()) - openPage)/1000;
        console.log('Hidden');
    }
})();

