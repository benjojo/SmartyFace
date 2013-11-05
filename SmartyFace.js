// ==UserScript==
// @name                SmartyFace
// @description        Text Prediction on facepunch
// @author                benjojo
// @namespace        http://facepunch.com
// @include                http://facepunch.com/*
// @include         http://www.facepunch.com/*
// @include                https://facepunch.com/*
// @include         https://www.facepunch.com/*
// @version         1
// ==/UserScript==


var endPoint = "http://text.nsa.me.uk/pose";

function findTextBoxes (argument) {
        var boxes = $('textarea');
        var parent = boxes[2].parentNode;
        $(parent).prepend("<i id=\"SmartyFace\" style=\"color: #CCC;position: absolute;font: 13px Verdana,Arial,Tahoma,Calibri,Geneva,sans-serif;padding: 0 1px 0 1px;\">This is a test wow. such test</i>");
        var textarea = boxes[2];
        $(boxes[2]).keypress(function(a) {

                $('#SmartyFace').html($(textarea).val());
        });
}
findTextBoxes();