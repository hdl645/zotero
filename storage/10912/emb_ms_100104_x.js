<!-- ReDirect v. 4.2a Copyright Visual Steel Design Firm, all rights reserved (http://www.visualsteel.net) -->
<!--
var RDLOCK=(new Date().getTime()+'').substring(3);
var timerRD=0;
var RDversion=parseInt(navigator.appVersion);
var RDTAG=new Image(0,0);
var RDTAGI=new Image(0,0);
var RDbgcolor="FFFFFF";
var ROCKRD=0;
var RFCKRD=0;
var rdFocus;
var STKRD;
var CTKRD;
var hideRD;
var RDSL='http://i.cmpnet.com/ads/graphics/as5/redirect/';
var RDNAME='emb_ms_100104';
var RDFRAME='http://view.atdmt.com/MRT/iview/192459565/direct/01?click=';
var RDSCRIPT=false;
var RDHREF='http://clk.atdmt.com/MRT/go/192459565/direct/01/';
var RDIMAGE='http://view.atdmt.com/MRT/view/192459565/direct/01/';
var RDIMP=false;
var RDALT='jpg';
var countRD=20;
var RDCK_set='720';
var RDFL=false;
var RDW=640;
var RDH=480;
var timestampRD=countRD;
var RDNTP=false;
var RD3rd=true;
var RDBasic=false;
var IECKRD=false;
var RDOT=false;
var RDREALN=RDNAME;
var RDURL=(document.location.href.split('/'))[2].toLowerCase();

function InitRD(){

if(!RDNTP&&!RDOT){RDOT=true;if(!RDFL&&!RDBasic&&!RD3rd){RDTAG.src=RDTPATH+'&a=d'+'&r='+Math.floor(Math.random()*10000)}else{RDTAG.src=RDTPATH+'&r='+Math.floor(Math.random()*10000)}if(RDIMP){RDTAGI.src=RDIMP}}

if(!IECKRD&&RD3rd){window.onkeydown=function(){countRD=0};window.onblur=function(){clickRDFUNC()};}else if(RD3rd){document.onkeydown=function(){countRD=0}}RDLOGO='logo_'+RDSITE+'.gif';RDLINK='http://'+RDSITE;

if(!RD3rd){if(!RDFL||RDBasic){var RDObject='<img src="'+RDSL+RDNAME+'.'+RDALT+'?keyLock='+RDLOCK+'" border="0" onClick="clickRDFUNC()" style="cursor:pointer;" GALLERYIMG="no" />'}else{var RDObject='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab'+'#version=8,0,0,0" width="'+RDW+'" height="'+RDH+'" id="rdObj"><param name="allowScriptAccess" value="always" /><param name="FlashVars" value="campaign='+RDNAME+'" /><param wmode="opaque" /><param name="movie" value="'+RDSL+RDREALN+'.swf?keyLock='+RDLOCK+'" /><embed src="'+RDSL+RDREALN+'.swf?keyLock='+RDLOCK+'" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+RDW+'" height="'+RDH+'" wmode="opaque" flashvars="campaign='+RDNAME+'" id="rdObj" name="rdObj" allowscriptaccess="always" /></embed></object>';if(IECKRD){RDObject=RDObject+'<sc'+'ript language="VBScript">\n'+'On Error Resume Next\n'+'Sub rdObj_FSCommand(ByVal command, ByVal args)\n'+'Call FSclickRDFUNC(command, args)\n'+'End Sub\n'+'</sc'+'ript>\n'}}}

if(RD3rd&&RDSCRIPT&&!RDHREF&&!RDIMAGE){var RDSCRIPTI='<sc'+'ript language="JavaScript1.1" SRC="'+RDSCRIPT+'"></sc'+'ript>'}else if(RD3rd&&RDHREF&&RDIMAGE){var RDSCRIPTI='<sc'+'ript language="JavaScript" type="text/javascript">document.write(\'<a href="'+RDHREF+'" target="_blank"><img src="'+RDIMAGE+'"/></a>\'); </sc'+'ript>'}else if(RD3rd){var RDSCRIPTI}

if(RD3rd){RDObject='<div id="adRD" style="position:relative;left:0px;top:0px;z-index:999999999;width:'+RDW+'px;height:'+RDH+'px;" onMouseOver="ROCKRDFUNC()" onmouseout="RFCKRDFUNC()"><iframe src="'+RDFRAME+'" width='+RDW+' height='+RDH+' marginwidth=0 marginheight=0 hspace=0 vspace=0 frameborder=0 scrolling=no>'+RDSCRIPTI+'</iframe></div>'}

document.write('<style type="text/css"> #pageWrapper{display:none;} #backupWrapper{display:none;} .cdfont{font-weight:bold; font-family:helvetica, arial; font-size:11px; line-height:13px; color:#999999;}</style><div id="frontframeRD" style="position:absolute;top:0px;left:0px;z-index:999999999;width:100%;height:100%;background-color:#'+RDbgcolor+';"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:25px;"><tr><td align="center"><table border="0" cellpadding="0" cellspacing="0" style="width:'+RDW+'px;"><tr><td><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="100%"><div id="RDLOGODIV" style="visibility:hidden"><img src="'+RDSL+RDLOGO+'" border="0" width="350" height="100" onClick="RDTS()" style="cursor:pointer;" onLoad="loadRDLogo()" /></div></td><td style="vertical-align:bottom;"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td nowrap="true"><div class="cdfont" id="timerDIV" onClick="skipRDFUNC();" style="cursor:pointer;text-align:right;"></div></td><td><img src="'+RDSL+'.gif" width="5" height="10" border="0"/></td><td><img src="'+RDSL+'skip.gif" width="20" height="20" border="0" style="cursor:pointer;" onClick="skipRDFUNC();" /></td></tr></table></td></tr></table></td></tr><tr valign="top"><td><img src="'+RDSL+'.gif" width="10" height="10" border="0"/></td></tr><tr valign="top"><td>'+RDObject+'</td></tr></table></td></tr></table></div><div id="backupWrapper">');

CKRDLoad();}

function ROCKRDFUNC(){ROCKRD++}
function RFCKRDFUNC(){RFCKRD++}
function RDTS(){if(document.getElementById('TimerINTRD')){clearTimeout(TimerINTRD)}; window.location.replace(RDLINK);return false;}
function hideRDFUNC(){if(document.getElementById('TimerINTRD')){clearTimeout(TimerINTRD)}if(document.getElementById('pageWrapper')){document.getElementById('pageWrapper').style.display='inline'}document.getElementById('backupWrapper').style.display='inline';document.getElementById('frontframeRD').innerHTML='';document.getElementById('frontframeRD').style.display='none';if(!RDNTP){if(CTKRD){CTKRD=false;if((!RD3rd)||(timerRD>2&&timerRD<=timestampRD)){RDTAG.src=RDTPATH+'&a=c&t='+timerRD+'&r='+Math.floor(Math.random()*10000)}}else if(STKRD&&RDOT){STKRD=false;RDTAG.src=RDTPATH+'&a=s'+'&r='+Math.floor(Math.random()*10000);}}hideRD=true;}
function clickRDFUNC(){if(!RD3rd&&!CTKRD&&!hideRD&&!STKRD){newwindow=window.open(RDHREF);if(window.focus){newwindow.focus()}CTKRD=true;countRD=0;}else if(!CTKRD&&!hideRD&&!STKRD&&ROCKRD>RFCKRD){CTKRD=true;countRD=0;}}
function skipRDFUNC(){if(STKRD!=true){STKRD=true;countRD=0;}else{hideRDFUNC()}}
function CKRDLoad(){document.getElementById("timerDIV").innerHTML="click here to skip or wait&nbsp;"+countRD+"&nbsp;seconds";setTimeout("countRDFUNC();",1000);}
function countRDFUNC(){if(IECKRD&&RD3rd&&countRD<(timestampRD-1)&&countRD>0){if(!rdFocus){rdFocus=true;document.getElementById('frontframeRD').focus();}document.onfocusout=function(){clickRDFUNC()};}else if(RD3rd&&countRD<=0){document.onfocusout=null;window.onblur=null;}if(countRD>0){countRD--;timerRD=timestampRD-countRD;TimerINTRD=setTimeout("countRDFUNC();",1000);document.getElementById("timerDIV").innerHTML="click here to skip or wait&nbsp;"+countRD+"&nbsp;seconds";}else{hideRDFUNC()}}
function resetRD(){countRD=timestampRD}
function createRDC(nameRD,val1RD,val2RD,minRD){var dateRD=new Date();dateRD.setTime(dateRD.getTime()+(minRD*60000));document.cookie=nameRD+"="+val1RD+"|"+val2RD+"; expires="+dateRD.toGMTString()+"; path=/; domain="+RDSITE;}
function readRDC(nameRD){var nameEQ=nameRD+"=";var CAKRD=document.cookie.split(';');for(var RDCOUNT=0;RDCOUNT<CAKRD.length;RDCOUNT++){var CKRD=CAKRD[RDCOUNT];while(CKRD.charAt(0)==' ') CKRD=CKRD.substring(1,CKRD.length);if(CKRD.indexOf(nameEQ)==0) return CKRD.substring(nameEQ.length,CKRD.length);}return null;}
function loadRDLogo(){document.getElementById('RDLOGODIV').style.visibility='visible'}

if(RDURL.indexOf('www.')!=-1){var RDSITE=RDURL.substring(4,RDURL.length)}else{var RDSITE=RDURL}

if(navigator.appName&&navigator.appName.toLowerCase().indexOf('ro')!=-1&&navigator.userAgent.toLowerCase().indexOf('nd')!=-1){IECKRD=true}

if(RDversion>=4){RDCK_set=parseInt(RDCK_set);var RDSTAMP=new Date().getTime();var CheckRDC=readRDC(RDREALN);if(CheckRDC&&(RDSITE.indexOf('visualsteel')!=-1||RDSTAMP-CheckRDC.split('|')[1]>(RDCK_set*60000))){var RDADD=CheckRDC.split('|')[0];createRDC(RDREALN,RDADD,RDSTAMP,525600);}else if(!CheckRDC){createRDC(RDREALN,RDLOCK,RDSTAMP,525600);CheckRDC=readRDC(RDREALN);if(CheckRDC){var RDADD=CheckRDC.split('|')[0];}}if(RDADD){

var RDTPATH='http://s1217.visualsteel.net/cgi-bin/t.pl?d=cmp_rd&c='+RDNAME+'&n='+RDADD+'&w='+RDSITE;
if(!RDBasic&&!RD3rd){var pluginRD=(navigator.mimeTypes&&navigator.mimeTypes["application/x-shockwave-flash"])?navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin:0;if(pluginRD&&parseInt(pluginRD.description.substring(pluginRD.description.indexOf(".")-2))>=8){RDFL=1}else if(IECKRD){document.write('<SCRIPT LANGUAGE=VBScript\> \n'+'on error resume next \n'+'RDFL=(IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.8")))\n'+'<\/SCRIPT\> \n');}}InitRD();}}

