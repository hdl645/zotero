if(!document.itxtInProg){
document.itxtInProg=1;var bvie=navigator.appVersion.indexOf('MSIE')>=0&&navigator.appVersion.indexOf('Opera')<0,gIAS='';
function itxtLES(u){var e=document.createElement('script');e.src=u;e.type='text/javascript';var b=document.getElementsByTagName('body')[0];b.insertBefore(e, b.firstChild);}
function trimWS(t){return t.replace(/^\s+|^\xA0+|\xA0+$|\s+$/g,'');}
function csp(s){if(!s)return '';var rex=/(\xA0|\s)+/gim; return s.replace(rex,' ');}
function gIT(o,cl){if(o.nodeType==8||(cl&&o.itxtvisited))return '';if(o.tagName&&('script'==o.tagName.toLowerCase()||'iframe'==o.tagName.toLowerCase()||'a'==o.tagName.toLowerCase()||'object'==o.tagName.toLowerCase()||'embed'==o.tagName.toLowerCase()||'img'==o.tagName.toLowerCase()||'noscript'==o.tagName.toLowerCase()||'applet'==o.tagName.toLowerCase()||'form'==o.tagName.toLowerCase()))return '';if(o.nodeType==3)return trimWS(o.nodeValue);o.itxtvisited=1;var t='';var cn=o.childNodes;for(var i=0;i<cn.length;i++)t+=gIT(cn[i],1);return t;}
function itxtbtl(){return trimWS(csp(gIT(document.body,1))).length;}
function itxtGCE(){var e='';try{var ms=document.getElementsByTagName('META');for(var i=0;i<ms.length;i++){var m=ms[i];if(m.content){var c=m.content.toLowerCase(),o=c.indexOf('charset=');if(o>=0){var re=/([\w\-]+)/,s=re.exec(c.substring(o+8));if(s)e=s[0];}}}}catch(x){}return e;}
function itxtDSB(u){try{if(navigator.appVersion.indexOf('MSIE')>=0 && ('complete'!=document.readyState)){document.write('<s'+'cript language="javascript" src="'+u+'"></s'+'cript>');}else itxtLES(u);}catch(e){}};
var itxturl='http://examnotes.us.intellitxt.com/v3/door.jsp?ts='+(new Date()).getTime()+'&pagecl='+itxtbtl()+'&enc='+itxtGCE()+'&IPID=924&MK=10&FG=0000FF&refurl='+document.location.href.replace(/\&/g,'%26').replace(/\'/g, '%27').replace(/\"/g, '%22').replace(/\#(.)*/,'');
try{
var a=document.referrer;
if (a.match(/http:\/\/(www\.)?google\.co(m|\.\w\w)\/search\?/i))
{
var b=/(\?|&)(as_)?q=/gi,
c=b.exec(a);
if(null!=c)
{
var e=/([^&])+/gi,
f=e.exec(a.substring(c.index+c[0].length));
if(null!=f)
itxturl+='&gst='+f[0];
}
}}catch(e){}
itxtDSB(itxturl);
}
