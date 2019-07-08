var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('darkeye.css');
(document.head||document.documentElement).appendChild(style);

document.addEventListener("DOMContentLoaded", function(event) { 
    var images = document.getElementsByTagName('img');
    for (var i = 0, l = images.length; i < l; i++) {
        console.log(images[i].src);
        if(images[i].alt == "<") {
            images[i].src = 'chrome-extension://__MSG_@@extension_id__/images/upArrow.png';
        }
        if(images[i].src == "/static/p30akz/images/downArrow.gif") {
            images[i].src = 'chrome-extension://__MSG_@@extension_id__/images/downArrow.png';
        }
    }
}, false);