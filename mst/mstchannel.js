"use strict";
window.addEventListener("message", function (event) {
    var element = document.getElementById("IppicaFrame");
    if (element) {
        element.style.height = event.data + "px";
    }
});
function GetHorses(opts) {
    var elem = (document.getElementById('IppicaFrame'));
    if (elem) {
        elem.src = getIppicaUrl(opts);
    }
    else {
        var div = (document.getElementById('HorsesContent'));
        var elemIframe = (document.createElement('iframe'));
        elemIframe.id = 'IppicaFrame';
        elemIframe.name = 'IppicaFrame';
        elemIframe.width = '100%';
        elemIframe.height = 'auto';
        elemIframe.style.minHeight = '600px';
        elemIframe.scrolling = 'no';
        elemIframe.frameBorder = '0';
        elemIframe.marginWidth = '0';
        elemIframe.marginHeight = '0';
        elemIframe.src = getIppicaUrl(opts);
        div.appendChild(elemIframe);
    }
}
function GetHorsesBetsList(opts) {
    var elem = (document.getElementById('IppicaFrame'));
    if (elem) {
        elem.src = getGiocateUrl(opts);
    }
    else {
        var div = (document.getElementById('HorsesContent'));
        var elemIframe = (document.createElement('iframe'));
        elemIframe.id = 'IppicaFrame';
        elemIframe.name = 'IppicaFrame';
        elemIframe.width = '100%';
        elemIframe.height = 'auto';
        elemIframe.style.minHeight = '600px';
        elemIframe.scrolling = 'no';
        elemIframe.frameBorder = '0';
        elemIframe.marginWidth = '0';
        elemIframe.marginHeight = '0';
        elemIframe.src = getGiocateUrl(opts);
        div.appendChild(elemIframe);
    }
}
function getIppicaUrl(opts) {
    var UrlIppica;
    if (opts.cID != "") {
        UrlIppica = "http://localhost:4200/#/pages/index?rand=" + Math.round(Math.random() * 10000000) + 
                    "&cID=" + opts.cID;
        if (opts.sID != "") {
            UrlIppica += "&sID=" + opts.sID;
        }
        if (opts.OnCompleteBet != "") {
            UrlIppica += "&F_CB=" + opts.OnCompleteBet;
        }
        if (opts.TrackGA != "") {
            UrlIppica += "&gTRC=" + opts.TrackGA;
        }
        if (opts.urlimagehome != "") {
            UrlIppica += "&IMG_H=" + opts.urlimagehome;
        }
        if (opts.urlimagelinkhome != "") {
            UrlIppica += "&LIMG_H=" + opts.urlimagelinkhome;
        }
        if (opts.urlimagecart != "") {
            UrlIppica += "&IMG_C=" + opts.urlimagecart;
        }
        if (opts.urlimagelinkcart != "") {
            UrlIppica += "&LIMG_C=" + opts.urlimagelinkcart;
        }
    }
    else {
        UrlIppica = "https://staging.mstchannel.com/error.html?code=501";
    }
    return UrlIppica;
}
function getGiocateUrl(opts) {
    var UrlIppica;
    if (opts.cID != "") {
        UrlIppica = "http://localhost:4200/#/tickets?rand=" + Math.round(Math.random() * 10000000) + 
                    "&cID=" + opts.cID;
        if (opts.sID != "") {
            UrlIppica += "&sID=" + opts.sID;
        }
    }
    else {
        UrlIppica = "https://staging.mstchannel.com/error.html?code=501";
    }
    return UrlIppica;
}
