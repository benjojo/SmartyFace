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
var s=document.createElement('script');
s.setAttribute('type','text/javascript');
s.innerHTML='$( document ).ready(function() { \
        var endPoint = "http://text.nsa.me.uk/pose"; \
        function findTextBoxes (argument) { \
                var boxes = $("textarea"); \
                var parent = boxes[2].parentNode; \
                $(parent).prepend("<i id=\"SmartyFace\" style=\"pointer-events:none; color: #CCC;position: absolute;font: 13px Verdana,Arial,Tahoma,Calibri,Geneva,sans-serif;padding: 0 1px 0 1px;\">Type Reply Here</i>"); \
                var textarea = boxes[2]; \
                $(boxes[2]).keypress(function(a) { \
                        var text = $(textarea).val(); \
                        $.post( endPoint, { post: text }, function( data ) { \
                                $("#SmartyFace").html( $(textarea).val()+data ); \
                        }); \
                }); \
        } \
        findTextBoxes(); \
});';
var a = document.body.appendChild(s);
console.log(a);

// $( document ).ready(function() {
//         var endPoint = "http://text.nsa.me.uk/pose";

//         function findTextBoxes (argument) {
//                 var boxes = $('textarea');
//                 var parent = boxes[2].parentNode;
//                 $(parent).prepend("<i id=\"SmartyFace\" style=\"pointer-events:none; color: #CCC;position: absolute;font: 13px Verdana,Arial,Tahoma,Calibri,Geneva,sans-serif;padding: 0 1px 0 1px;\">Type Reply Here</i>");
//                 var textarea = boxes[2];
//                 $(boxes[2]).keypress(function(a) {
//                         var text = $(textarea).val();
//                         $.post( endPoint, { post: text }, function( data ) {
//                                 $('#SmartyFace').html( $(textarea).val()+data );
//                         });
//                 });
//         }
//         findTextBoxes();
// });