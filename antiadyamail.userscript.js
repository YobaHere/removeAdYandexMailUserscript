// ==UserScript==
// @name         ya.mail remove ad
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  stop annoying ads
// @author       YobaHere
// @match        https://mail.yandex.ru/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('ad remover init')
    const adRemover = () => {
        console.log('ad remover working by timeout')
        const mailbox = document.querySelectorAll(".ns-view-right-box")[0];
        const prevSibling = mailbox.previousSibling;
        const classes = ["ns-view-infoline-box", "ns-view-toolbar-box", "ns-view-fake-head-background-box"]
        let isNormalElement = false;
        if (!mailbox) return;
        for (let className of classes) {
            if (prevSibling.classList.contains(className)) {
                isNormalElement = true;
                break;
            }
        }
        if (!isNormalElement) prevSibling.remove();

        const addBoxesElem = document.querySelectorAll(".ns-view-collectors")[0]
        for (let i = 0; i < 5; i++) {
            let nextSibl = addBoxesElem.nextSibling
            if (nextSibl) nextSibl.remove();
        }
    }
    setTimeout(adRemover, 1500);
    adRemover();
})();
