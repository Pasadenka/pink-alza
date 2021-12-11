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

function noneByClass(className) {
    const elements = document.getElementsByClassName(className);

    if (elements.length > 0) {
        const node = elements[0];
        node.style.display = 'none';
    }
}

function noneById(id) {
    const node = document.getElementById(id);

    if (node) {
        node.style.display = 'none';
    }
}

function editById(id, parameter, value) {
    const node = document.getElementById(id);

    if (node) {
        node[parameter] = value;
    }
}

function editStyleById(id, parameter, value) {
    const node = document.getElementById(id);

    if (node) {
        node.style[parameter] = value;
    }
}

function editStyleByClass(className, parameter, value) {
    const elements = document.getElementsByClassName(className);

    if (elements.length > 0) {
        const node = elements[0];
        node.style[parameter] = value;
    }
}

const classesToNone = [
    'leftBanner',
    'rightBanner',
    'info-message-header',
];

function appendStyleToHead() {
    var styleNode = document.createElement('style');
    styleNode.innerHTML = `
        .order-list-page, .mainContent, .categoryPage, .order-header, input,
        .o1grid, .c2, .countEdit, .basketTab, #orderpage, .count {
            background: rgb(250, 225, 230) !important;
        }

        #sec {
            background: rgb(250, 225, 230) !important;
            border: 1px solid #D14F7B !important;
        }

        a {
            color: #D14F7B !important;
        }

        button {
            background: #D14F7B !important;
        }

        input {
            color: #D14F7B !important;
        }

        .o1grid input {
            margin: 2px;
            border: 1px solid rgb(250, 225, 230) !important;
        }

        .headericonsc, .notificationBlock {
            background: #F1ABB9 !important;
            border: 1px solid #F1ABB9 !important;
        }

        #header {
            background: #F1ABB9 !important;
        }
    `;
    document.head.appendChild(styleNode);
}

(function() {
    'use strict';
    appendStyleToHead();
    classesToNone.forEach(className => {
        noneByClass(className);
    });

    document.body.style.background='#F1ABB9';

    noneById('footerc');

    editById('lblUser', 'innerHTML', 'Pasadenka');
    editById('lblAp', 'innerHTML', 'Plus');
    
    editById('btnSearch', 'innerHTML', 'Nájdi');
    editStyleById('btnSearch', 'background', '#D14F7B');

    editStyleByClass('boNavigationMenu', 'background', `
    rgba(0,0,0,0) -webkit-gradient(linear,right top,left top,from(#E27092),to(#D14F7B)) 0 0 no-repeat padding-box`);
    
    editStyleByClass('order-header', 'background', 'pink !important');
    
})();