//Contents for news and analysis
var menu1=new Array()
menu1[0]='<a href="http://www.embedded.com/design#da">Design Articles</a>'
menu1[1]='<a href="http://www.embedded.com/design#td">Tear Down Articles</a>'

var menu2=new Array()
menu2[0]='<a href="http://www.embedded.com/products#np">New Products</a>'
menu2[1]='<a href="http://www.embedded.com/products#ta">Tear Down Articles</a>'
menu2[2]='<a href="http://www.embedded.com/products#vl">VirtuaLabs</a>'
menu2[3]='<a href="http://refdesign.techonline.com">Reference Designs</a>'
menu2[4]='<a href="http://www.embedded.com/demos">Demos</a>'

var menu3=new Array()
menu3[0]='<a href="http://www.embedded.com/columns#bp">Break Points</a>'
menu3[1]='<a href="http://www.embedded.com/columns#pp">Programming Pointers</a>'
menu3[2]='<a href="http://www.embedded.com/columns#pt">Programmer&#39s Toolbox</a>'
menu3[3]='<a href="http://www.embedded.com/columns#esdeic"># include</a>'
menu3[4]='<a href="http://www.embedded.com/columns#guest">Guest Editor</a>'
menu3[5]='<a href="http://www.embedded.com/columns#barrcode">Barr Code</a>'

var menu4=new Array()
menu4[0]='<a href="http://www.embedded.com/elearning#web">Webinars</a>'
menu4[1]='<a href="http://www.embedded.com/elearning#course">Courses</a>'
menu4[2]='<a href="http://www.embedded.com/elearning#vl">VirtuaLabs</a>'
menu4[3]='<a href="http://www.embedded.com/books">Books</a>'

var menu5=new Array()
menu5[0]='<a href="http://esc-sv09.techinsightsevents.com" target="_new">ESC Silicon Valley</a>'
menu5[1]='<a href="http://esc-boston.techinsightsevents.com"  target="_new">ESC Boston</a>'
menu5[2]='<a href="/esc/india"  target="_new">ESC India</a>'
menu5[3]='<a href="http://www.embedded.co.uk/index.php"  target="_new">ESC UK</a>'
menu5[4]='<a href="http://esc-france.techinsightsevents.com"  target="_new">ESC France</a>'
menu5[5]='<a href="http://esc-chicago.techinsightsevents.com/"  target="_new">ESC Chicago</a>'
menu5[6]='<a href="http://esc-sv09.techinsightsevents.com/call_for_papers"  target="_new">Call For Papers</a>'

var menu6=new Array()
menu6[0]='<a href="http://www.embedded.com/forums">Forums</a>'
menu6[1]='<a href="http://www.embedded.com/blog/news">Blogs</a>'

var menu7=new Array()
menu7[0]='<a href="http://www.embedded.com/contact/ESD_editorial.htm">Editorial Contacts</a>'
menu7[1]='<a href="http://www.embedded.com/advert/reps.htm">Sales Contacts</a>'
menu7[2]='<a href="http://www.embedded.com/subscribe.htm">Magazine Subscriptions/Reprints/Back Issues</a>'

var menu8=new Array()
menu8[0]='<a href="http://www.embedded.com/about">About Us</a>'
menu8[1]='<a href="http://www.embedded.com/sitemap">Site map</a>'
menu8[2]='<a href="http://www.embedded.com/feedback">Feedback</a>'
menu8[3]='<a href="http://www.techinsights.com">Media Kit</a>'
menu8[4]='<a href="http://i.cmpnet.com/embedded/mediakit/editcal/2010/ESD_2010_edit_calendar.pdf">Editorial Calendar</a>'
menu8[5]='<a href="http://www.embedded.com/profile/preferences.jhtml">Preferences</a>'
menu8[6]='<a href="http://www.embedded.com/techcareers">Career Center</a>'
menu8[7]='<a href="http://www.embedded.com/calendar">Event Calendar</a>'

var menuwidth='150px' //default menu width
var menubgcolor='#F4F4F4' //menu bgcolor
var disappeardelay=250 //menu disappear speed onMouseout (in miliseconds)
var hidemenu_onclick="yes" //hide menu when user clicks within menu?

/////No further editting needed
var ie5=document.all
var ie5_5=typeof dropmenuiframe=='undefined'? 0 : 1
var ns6=document.getElementById&&!document.all

if (ie5||ns6)
document.write('<div id="dropdownmenu" class="dropmenudiv" style="z-index:100;visibility:hidden;width:'+menuwidth+'" onMouseover="clearhidemenu()" onMouseout="dynamichide(event)"></div>')

function getposOffset(what, offsettype){
var totaloffset=(offsettype=="left")? (what.offsetLeft - 10): what.offsetTop;
var parentEl=what.offsetParent;
while (parentEl!=null){
totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
parentEl=parentEl.offsetParent;
}
return totaloffset;
}

function showhide(obj, e, visible, hidden, menuwidth){
if (ie5||ns6)
dropmenuobj.style.left=dropmenuobj.style.top='-500px'
dropmenuobj.widthobj=dropmenuobj.style
dropmenuobj.widthobj.width=menuwidth
if (e.type=="click" && obj.visibility==hidden || e.type=="mouseover") {
obj.visibility=visible
unhideIframe() }
else if (e.type=="click") {
setTimeout("hideIframe();",0);
obj.visibility=hidden
}
}

function iecompattest(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function clearbrowseredge(obj, whichedge){
var edgeoffset=0
if (whichedge=="rightedge"){
var windowedge=ie5 && !window.opera? iecompattest().scrollLeft+iecompattest().clientWidth-15 : window.pageXOffset+window.innerWidth-15
dropmenuobj.contentmeasure=dropmenuobj.offsetWidth
if (windowedge-dropmenuobj.x < dropmenuobj.contentmeasure)
edgeoffset=dropmenuobj.contentmeasure-obj.offsetWidth
}
else{
var topedge=ie5 && !window.opera? iecompattest().scrollTop : window.pageYOffset
var windowedge=ie5 && !window.opera? iecompattest().scrollTop+iecompattest().clientHeight-15 : window.pageYOffset+window.innerHeight-18
dropmenuobj.contentmeasure=dropmenuobj.offsetHeight
if (windowedge-dropmenuobj.y < dropmenuobj.contentmeasure){ //move up?
edgeoffset=dropmenuobj.contentmeasure+obj.offsetHeight
if ((dropmenuobj.y-topedge)<dropmenuobj.contentmeasure) //up no good either?
edgeoffset=dropmenuobj.y+obj.offsetHeight-topedge
}
}
return edgeoffset
}
function populatemenu(what){
if (ie5||ns6)
dropmenuobj.innerHTML=what.join("")
}

function dropdownmenu(obj, e, menucontents, menuwidth){ //NEEDED
if (window.event) event.cancelBubble=true
else if (e.stopPropagation) e.stopPropagation()
clearhidemenu()
dropmenuobj=document.getElementById? document.getElementById("dropdownmenu") : dropdownmenu
populatemenu(menucontents)
if (ie5||ns6){
showhide(dropmenuobj.style, e, "visible", "hidden", menuwidth)
dropmenuobj.x=getposOffset(obj, "left")
dropmenuobj.y=getposOffset(obj, "top")
dropmenuobj.style.left=dropmenuobj.x-clearbrowseredge(obj, "rightedge")+"px"
dropmenuobj.style.top=dropmenuobj.y-clearbrowseredge(obj, "bottomedge")+obj.offsetHeight+"px"
unhideIframe()
}
return clickreturnvalue()
}

function clickreturnvalue(){
if (ie5||ns6) return false
else return true
}

function dynamichide(e){
if (ie5&&!dropmenuobj.contains(e.toElement))
delayhidemenu()
else if (ns6&&e.currentTarget!= e.relatedTarget&& !contains_ns6(e.currentTarget, e.relatedTarget))
delayhidemenu()
}

function delayhidemenu(){
if (ie5||ns6)
delayhide=setTimeout("hidemenu()",disappeardelay)
}

function clearhidemenu(){ //NEEDED
if (typeof delayhide!="undefined")
clearTimeout(delayhide)
}

function hidemenu(e){
if (typeof dropmenuobj!="undefined"){
if (ie5||ns6)
dropmenuobj.style.visibility="hidden"
hideIframe()
}
}

function hideIframe() {
if (ie5_5){
var theIframe = document.getElementById("dropmenuiframe")
theIframe.style.display = "none";
}
}

function unhideIframe() {
if (ie5_5){
var theIframe = document.getElementById("dropmenuiframe")
var theDiv = document.getElementById("dropdownmenu");
theIframe.style.width = theDiv.offsetWidth+'px';
theIframe.style.height = theDiv.offsetHeight+'px';
theIframe.style.top = theDiv.offsetTop+'px';
theIframe.style.left = theDiv.offsetLeft+'px';
theIframe.style.display = "block";
}
}


function contains_ns6(a, b) {
	while (b.parentNode)
	if ((b = b.parentNode) == a)
	return true;
	return false;
}
