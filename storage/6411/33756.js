var clicky={init:function(){clicky.img=new Image();clicky.img_base="http://in.getclicky.com/in.php?site_id=33756&srv=db5";var r=RegExp("^https?://[^/]*"+location.host.replace(/^www\./i,"")+"/","i").test(document.referrer)?"":document.referrer;clicky.img.src=clicky.img_base+'&title='+clicky.enc((clicky.isset("clicky_page_title")?clicky_page_title:document.title))+'&href='+clicky.enc(location.pathname+location.search)+'&ref='+clicky.enc(r)+'&res='+screen.width+'x'+screen.height+'&lang='+(navigator.language||navigator.browserLanguage).substr(0,2)+'&x='+Math.random();},isset:function(e){return(typeof(window[e])!="undefined");},enc:function(e){return encodeURIComponent?encodeURIComponent(e):escape(e);}};clicky.init();