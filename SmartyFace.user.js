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
s.innerHTML='$(document).ready(function(){function b(a){a=$(".cke_enable_context_menu");if(a[0]){$(a[0].parentNode).prepend(\'<i id="SmartyFace" style="pointer-events:none; color: #CCC;position: absolute;font: 13px Verdana,Arial,Tahoma,Calibri,Geneva,sans-serif;padding: 0 1px 0 1px;">Type Reply Here</i>\');var c=a[0];$(a[0]).keypress(function(a){a=$(c).val();$.post(d,{post:a},function(a){$("#SmartyFace").html($(c).val()+a)})})}else setInterval(b,1500)}var d="http://text.nsa.me.uk/pose";setInterval(b,1500)});';
var a = document.body.appendChild(s);
console.log(a);

// $( document ).ready(function() {
//         var endPoint = "http://text.nsa.me.uk/pose";

//         function findTextBoxes (argument) {
//                 var boxes = $('.cke_enable_context_menu');
//                 if(!boxes[0]) {
//                         setInterval(findTextBoxes,1500);
//                 } else {
//                         var parent = boxes[0].parentNode;
//                         $(parent).prepend("<i id=\"SmartyFace\" style=\"pointer-events:none; color: #CCC;position: absolute;font: 13px Verdana,Arial,Tahoma,Calibri,Geneva,sans-serif;padding: 0 1px 0 1px;\">Type Reply Here</i>");
//                         var textarea = boxes[0];
//                         $(boxes[0]).keypress(function(a) {
//                                 var text = $(textarea).val();
//                                 $.post( endPoint, { post: text }, function( data ) {
//                                         $('#SmartyFace').html( $(textarea).val()+data );
//                                 });
//                         });
//                 }
//         }
//         setInterval(findTextBoxes,1500);
// });