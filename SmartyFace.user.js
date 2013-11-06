// ==UserScript==
// @name                SmartyFace
// @description        Text Prediction on facepunch
// @author                benjojo
// @namespace        http://facepunch.com
// @include                http://facepunch.com/*
// @include         http://www.facepunch.com/*
// @include                https://facepunch.com/*
// @include         https://www.facepunch.com/*
// @version         1.0.1
// ==/UserScript==
var s=document.createElement('script');
s.setAttribute('type','text/javascript');
s.innerHTML='$(document).ready(function(){function b(a){a=$(".cke_enable_context_menu");if(a[0].parentNode){var e=a[0].parentNode;if(!c){$(e).prepend(\'<i id="SmartyFace" style="pointer-events:none; color: #CCC;position: absolute;font: 13px Verdana,Arial,Tahoma,Calibri,Geneva,sans-serif;padding: 0 1px 0 1px;">Type Reply Here</i>\');var d=a[0];$(a[0]).keypress(function(a){a=$(d).val();$.post(f,{post:a},function(a){$("#SmartyFace").html($(d).val()+a)})});c=!0}}else setTimeout(b,1500)}var f="http://text.nsa.me.uk/pose",c=!1;setTimeout(b,1500)});';
var a = document.body.appendChild(s);
console.log(a);

// $( document ).ready(function() {
//         var endPoint = "http://text.nsa.me.uk/pose";
//         var tagged = false;
//         function findTextBoxes (argument) {
//                 var boxes = $('.cke_enable_context_menu');
//                 if(!boxes[0].parentNode) {
//                         setTimeout(findTextBoxes,1500);
//                 } else {
//                         var parent = boxes[0].parentNode;
//                         if(!tagged) {
//                                 $(parent).prepend("<i id=\"SmartyFace\" style=\"pointer-events:none; color: #CCC;position: absolute;font: 13px Verdana,Arial,Tahoma,Calibri,Geneva,sans-serif;padding: 0 1px 0 1px;\">Type Reply Here</i>");
//                                 var textarea = boxes[0];
//                                 $(boxes[0]).keypress(function(a) {
//                                         var text = $(textarea).val();
//                                         $.post( endPoint, { post: text }, function( data ) {
//                                                 $('#SmartyFace').html( $(textarea).val()+data );
//                                         });
//                                 });
//                                 tagged = true;
//                         }

//                 }
//         }
//         setTimeout(findTextBoxes,1500);
// });