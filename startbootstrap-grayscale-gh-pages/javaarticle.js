var yourtext="The Articles";
var messLength=yourtext.length;
var initcolor="white";
var yourcolor="black";
var speed=1050;
var i;
var j=0;
document.write("<h1><font color='"+initcolor+"'>");
for (i=0;i<messLength;i++){
document.write("<span id='yourid"+i+"'>"+yourtext.charAt(i)+"</span>"); }document.write("</font></h1>");
function colorit(){var idd="yourid"+j;
if (j<messLength){
document.getElementById(idd).style.color=yourcolor;j++}
else {j=0;
for (i=0;i<messLength;i++){
var newidd="yourid"+i;
document.getElementById(newidd).style.color=initcolor; } } }
function doit(){timer=setInterval("colorit()",speed)}
window.onload=doit;

$(document).ready(main);