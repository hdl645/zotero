function treeClick(e)
 {
   if (navigator.product == "Gecko") oT = e.target;
   else if (document.all) oT = e.srcElement;
   if (oT && oT.parentNode && (oT.tagName == "A") && (oT.parentNode.tagName == "LI") && (oT.parentNode.parentNode.id == "ww-menu"))
    {
      var  re = new RegExp(oT.parentNode.id + "=[0|1];*","gi");
      if (oT.parentNode.className == "ww-expand" || oT.parentNode.className == "")
       {
         oT.parentNode.className = "ww-collapse";
         document.cookie = oT.parentNode.id + "=0;path=/;";
       }
      else if (oT.parentNode.className == "ww-collapse") 
       {
         oT.parentNode.className = "ww-expand";
         document.cookie = oT.parentNode.id + "=1;path=/;";
       }
    }
 }
function treeParse()
 {
   var mn = document.getElementById("ww-menu");
   if (! mn) return;
/* dont restore previous state
   for (var i = 0; i < mn.childNodes.length; i++)
    {
      mn.childNodes[i].id = "mn_" + i;
      if (mn.childNodes[i].firstChild)
       {
         if ((document.cookie.indexOf(mn.childNodes[i].id+"=1") != -1) && (mn.childNodes[i].className == "ww-collapse")) 
            mn.childNodes[i].className = "ww-expand";
         if ((document.cookie.indexOf(mn.childNodes[i].id+"=0") != -1) && (mn.childNodes[i].className == "ww-expand"))
            mn.childNodes[i].className = "ww-collapse";
       }
    }
*/
 }

function ShowEmail(sEmail,sLinkText)
 {
   sEmail = sEmail.replace('/','@');
   sEmail = sEmail.replace('|','.');
   if (sLinkText == '') { sLinkText = sEmail; }
   document.write('<a href="mai' + 'lto:' + sEmail + '">' + sLinkText + '</a>');
 }

function SolutionCenterParser()
 {
   var o = document.getElementById("ads-block-bottom-script");
   if (o) o.style.display = "none";
   if (o) o = o.getElementsByTagName("td");
   var randarr = new Array();
   for (var i = 0; i < o.length; i++) if (o[i].innerHTML && o[i].innerHTML != "" && o[i].innerHTML != "&nbsp;")
    {
      var str = String(o[i].innerHTML);
      str = str.replace(/href\s?=/gi,"class=\"bnr-ext-link\" href=").replace(/class="bnr\-ext\-link/,"");
      randarr[randarr.length] = '<li>' + str + "<"+"/li>"
    }
   document.write('<ul class="bnr-list">' + randarr.join("") + '</'+'ul>');
 }

function randOrd(a, b){return (Math.round(Math.random())-0.5);}
function FeaturedLinksParser()
 {
   var o = document.getElementById("featured-links");
   if (o) o.style.display = "none";
   if (o) o = o.getElementsByTagName("td");
   var randarr = new Array();
   for (var i = 0; i < o.length; i++) if (o[i].innerHTML && o[i].innerHTML != "" && o[i].innerHTML != "&nbsp;")
    {
      var str = String(o[i].innerHTML);
      str = str.replace(/href\s?=/gi,"class=\"fl-ext-link\" href=").replace(/class="fl\-ext\-link/,"");
      var arr = new Array(str);
      if (str.indexOf("<BR>") != -1) arr = str.split("<BR>");
      if (str.indexOf("<br>") != -1) arr = str.split("<br>");
      if (arr.length > 1)
       {
         arr[0] = arr[0].replace(/class="fl-ext-link/gi,"");
         str = arr.join("<br>");
       }
      randarr[randarr.length] = '<li>' + str + "<"+"/li>"
    }
   randarr.sort(randOrd);
   document.write('<ul>' + randarr.join("") + '</'+'ul>');
 }