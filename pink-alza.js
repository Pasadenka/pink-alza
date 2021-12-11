// ==UserScript==
// @name         Pink alza
// @namespace    https://github.com/Pasadenka/pink-alza.git
// @version      0.1
// @description  Tampermonkey script reskin base alza.cz shop to pink skin. Also remove junk.
// @author       Pasadenka
// @include      https://www.alza.cz/*
// @icon         https://www.google.com/s2/favicons?domain=alza.cz
// @homepageURL  https://github.com/Pasadenka/pink-alza.git
// @supportURL   https://github.com/Pasadenka/pink-alza.git/issues
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByClassName('leftBanner')[0].style.display = 'none';
    document.getElementsByClassName('rightBanner')[0].style.display = 'none';
    document.body.style.background='#F1ABB9';
    document.getElementsByClassName('info-message-header')[0].style.display = 'none';
    document.getElementById('lblUser').innerHTML = 'Pasadenka';
    document.getElementById('lblAp').innerHTML = 'Plus';

    document.getElementById('btnSearch').style.background = '#D14F7B';
    document.getElementById('btnSearch').innerHTML = 'Nájdi';
    document.getElementsByClassName('boNavigationMenu')[0].style.background = 'rgba(0,0,0,0) -webkit-gradient(linear,right top,left top,from(#E27092),to(#D14F7B)) 0 0 no-repeat padding-box';


    document.getElementById('footerc').style.display = 'none';
})();