// [[image:Erioll_world.svg|18px]] '''WikiMiniAtlas''' <br>
// Script to embed interactive maps into pages that have coordinate templates <br>
// also check my user page [[User:Dschwen]] for more tools<pre>
//
// Revision 10.11

var wikiminiatlas =
{
 config:
 {
  width  : 600,
  height : 400,
  zoom : -1,
  enabled : true,
  onlytitle : false,
  iframeurl : 'http://toolserver.org/~dschwen/wikiminiatlas/iframe.html',
  imgbase   : 'http://toolserver.org/~dschwen/wikiminiatlas/tiles/',
  coordurls : new Array (
                'http://stable.ts.wikimedia.org/geohack/geohack.php?',
                'http://toolserver.org/~magnus/geo/geohack.php?',
                'http://tools.wikimedia.de/~magnus/geo/geohack.php?',
                'http://www8.brinkster.com/erikbaas/wiki/maps.asp?',
                'http://www.nsesoftware.nl/wiki/maps.asp?' 
              ),
  buttonImage: 
'http://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Erioll_world.svg/18px-Erioll_world.svg.png'
 },

 strings:
 {
  buttonTooltip : {
   af:'Vertoon ligging op \'n interaktiwe kaart.',
   als:'Ort uf dr interaktivä Chartä zeigä',
   ar:'شاهد الموقع على الخريطة التفاعلية',
   bg:'покажи местоположението на интерактивната карта',
   ca:'mostra la localització en un mapa interactiu',
   da:'vis beliggenhed på interaktivt kort',
   de:'Ort auf interaktiver Karte anzeigen',
   el:'εμφάνιση τοποθεσίας σε διαδραστικό χάρτη',
   en:'show location on an interactive map',
   eo:'Montru lokigon sur interaktiva karto',
   eu:'erakutsi kokalekua mapa interaktibo batean',
   es:'mostrar el lugar en un mapa interactivo',
   fr:'Montrer la localisation sur une carte interactive',
   fur:'mostre la localizazion suntune mape interative',
   fy:'it plak op in oanpasbere kaart oanjaan',
   gl:'Amosar o lugar nun mapa interactivo',
   he:'הראה מיקום במפה האינטראקטיבית',
   hr:'prikaži lokaciju na interaktivnom zemljovidu',
   hu:'Mutasd a helyet egy interaktív térképen!',
   it:'mostra la località su una carta interattiva',
   is:'sýna staðsetningu á gagnvirku korti',
   id:'Tunjukkan letak di peta interaktif',
   ja:'インタラクティブ地図上に位置を表示',
   lt:'Rodyti vietą interaktyviame žemėlapyje',
   mk:'Prikazi go mestoto na interaktivnata mapa',
   nl:'de locatie op een interactieve kaart tonen',
   no:'vis beliggenhet på interaktivt kart',
   pl:'Pokaż lokalizację na mapie interaktywnej',
   pt:'mostrar a localidade num mapa interactivo',
   ro:'arată locaţia pe o hartă interactivă',
   ru:'показать положение на интерактивной карте',
   sk:'zobraz miesto na interaktívnej mape',
   sl:'prikaži lokacijo na interaktivnem zemljevidu',
   sq:'trego vendndodhjen në hartë',
   fi:'näytä paikka interaktiivisella kartalla',
   sv:'visa platsen på en interaktiv karta',
   uk:'показати положення на інтерактивній карті',
   vi:'mở lên vị trí này trên bản đồ tương tác',
   vo:'Jonön topi su kaed itjäfidik',
   zh:'显示该地在地图上的位置',
   'zh-cn':'显示该地在地图上的位置',
   'zh-sg':'显示该地在地图上的位置',
   'zh-tw':'顯示該地在地圖上的位置',
   'zh-hk':'顯示該地在地圖上的位置'
  },
  close : {
   af:'Sluit',
   als:'Zuä machä',
   bg:'затвори',
   ca:'tanca',
   da:'luk',
   de:'schließen',
   el:'έξοδος',
   en:'close',
   eo:'fermu', 
   eu:'itxi',
   es:'cerrar',
   fr:'Quitter',
   fur:'siere',
   fy:'ticht',
   gl:'pechar',
   he:'לסגור',
   hr:'zatvori',
   hu:'bezárás',
   id:'tutup',
   is:'loka',
   it:'chiudi',
   ja:'閉じる',
   lt:'uždaryti',
   mk:'zatvori',
   nl:'sluiten',
   no:'lukk',
   pl:'zamknij',
   pt:'fechar',
   ro:'închide',
   ru:'закрыть',
   sk:'zatvoriť',
   sl:'zapri',
   sq:'mbylle',
   fi:'sulje',
   sv:'stäng',
   uk:'закрити',
   vi:'đóng',
   vo:'färmükön',
   zh:'关闭',
   'zh-cn':'关闭',
   'zh-sg':'关闭',
   'zh-tw':'關閉',
   'zh-hk':'關閉',
   ar:'غلق'
  }
 },

 link : null,
 links : null,
 bodyc : null,

 language : '',
 site: '',
 iframe : { div: null, iframe: null, closebutton: null},
 mapbutton: null,
 marker : { lat:0, lon:0 },

 coordinates : null,
 coord_index: 0,
 coord_params: '',
 coord_filter: null,

 region_index : 0,
 coordinate_region : '',

 WikiMiniAtlasHTML : '',

 // cross-browser event attachment (John Resig)
 // http://www.quirksmode.org/blog/archives/2005/10/_and_the_winner_1.html
 addEvent : function ( obj, type, fn )
 {
  if (obj.addEventListener)
   obj.addEventListener( type, fn, false );
  else if (obj.attachEvent)
  {
   obj["e"+type+fn] = fn;
   obj[type+fn] = function() { obj["e"+type+fn]( window.event ); }
   obj.attachEvent( "on"+type, obj[type+fn] );
  }
 },
 
 // vertikale position auf der Seite bestimmen
 totalOffset : function( obj, offset )
 {
  if( obj.offsetParent == null || 
      obj.offsetParent.id == 'content' )
   return offset + obj.offsetTop;
  else
   return wikiminiatlas.totalOffset(obj.offsetParent, offset + obj.offsetTop );
 },

 // move iframe around and toggle visibility
 toggleIFrame : function( e )
 {
  with(wikiminiatlas)
  {
   var newurl = config.iframeurl + '?' + this.mapparam;

   if(iframe.div.style.visibility != "visible" ||
      ( ( iframe.iframe.src != newurl ) && ( this.mapparam != '' ) ) )
   {
    if( iframe.iframe.src != newurl )
    {
     iframe.iframe.src = newurl;
    }
    iframe.div.style.top = (totalOffset( this, 0 ) + 20 ) + 'px';
    iframe.div.style.visibility="visible";
   }
   else
    iframe.div.style.visibility="hidden";
  }
  return false;
 },
 
 // Check against coordinate urls
 isMaplink : function( url_orig )
 {
  if( typeof(url_orig) != 'string' ) return false;

  // needed for the russian WP
  var url, err;
  try { url = decodeURI( url_orig ) } catch( err ) { url = url_orig }

  with(wikiminiatlas)
  {
   // for( var key = 0; key < config.coordurls.length; key++ ) {
   for( var key in config.coordurls ) {
    if( url.substr(0,config.coordurls[key].length) == config.coordurls[key] )
     return true;
   }
  }
  
  return false;
 },

 // Insert the IFrame into the page.
 loader : function()
 {
  // apply settings
  if( typeof(wma_settings) == 'object' )
   for (var key in wma_settings)
   {
    if( typeof(wma_settings[key]) == typeof(wikiminiatlas.config[key]) )
     wikiminiatlas.config[key] = wma_settings[key];
   }

  if( wikiminiatlas.config.enabled == false ) return;

  with(wikiminiatlas)
  {
   site = window.location.host.substr(0,window.location.host.indexOf('.'));
   language = wgUserLanguage;

   var len; // cache array length for iterations

   // remove stupid icons from title coordinates
   var coord_title = document.getElementById('coordinates');
   if( coord_title ) {
    var icons = coord_title.getElementsByTagName('a');
    len = icons.length;
    for( var key = 0; key < len; key++ ) {
     if( typeof(icons[key]) == 'object' &&
         icons[key] != null &&
         icons[key].className == 'image' ) 
      icons[key].parentNode.removeChild(icons[key]);
    }
   }


   if( config.onlytitle )
   {
    bodyc = document.getElementById('coordinates');
    if( bodyc == null ) return;
   }
   else
    bodyc = document.getElementById('bodyContent') || document;

   links = bodyc.getElementsByTagName('a');
   len = links.length;
   for( var key = 0; key < len; key++ )
   {
    link = links[key];
    if( link.className == 'external text' && isMaplink(link.href) )
    {
     coordinates = link.href;
     coord_index = coordinates.indexOf('params=');
     if(coord_index>-1)
     {
      coord_params = coordinates.substr(coord_index+7);

      // degrees
      coord_filter = /([\d+-.]+)_([NS])_([\d+-.]+)_([EOW])/;
      if(coord_filter.test(coord_params))
      {
       coord_filter.exec(coord_params);
       marker.lat=RegExp.$1;
       if(RegExp.$2=='S') marker.lat*=-1;
       marker.lon=RegExp.$3;
       if(RegExp.$4=='W') marker.lon*=-1;
      }

      // degrees, minutes
      coord_filter = /([\d+-.]+)_([\d+-.]+)_([NS])_([\d+-.]+)_([\d+-.]+)_([EOW])/;
      if(coord_filter.test(coord_params))
      {
       coord_filter.exec(coord_params);
       marker.lat=(1.0*RegExp.$1) + (RegExp.$2/60.0);
       if(RegExp.$3=='S') marker.lat*=-1;
       marker.lon=(1.0*RegExp.$4) + (RegExp.$5/60.0);
       if(RegExp.$6=='W') marker.lon*=-1;
      }

      // degrees, minutes, seconds (+ fix for weird russian coords)
      coord_filter = /([\d+-.]+)_([\d+-.]*)_([\d+-.]*)_([NS])_([\d+-.]+)_([\d+-.]*)_([\d+-.]*)_([EOW])/;
      if(coord_filter.test(coord_params))
      {
       coord_filter.exec(coord_params);
       marker.lat=(1.0*RegExp.$1) + (RegExp.$2/60.0) + (RegExp.$3/3600.0);
       if(RegExp.$4=='S') marker.lat*=-1;
       marker.lon=(1.0*RegExp.$5) + (RegExp.$6/60.0) + (RegExp.$7/3600.0);
       if(RegExp.$8=='W') marker.lon*=-1;
      }
 
/*
      region_index = coordinates.indexOf('region:');
      if(region_index>-1)
      {
       coordinate_region = coordinates.substr(region_index+7);
       coordinate_region = coordinate_region.substr(0,coordinate_region.indexOf('"'));
      }
*/

      // check the globe parameter
      var clc = coordinates.toLowerCase();
      if( ( clc.indexOf('globe:') > -1 ) && ( clc.indexOf('globe:earth') == -1 ) )
      { 
       break;
      }

      // If given use dim or scale for a zoomlevel
      var zoomlevel = config.zoom;
      if( zoomlevel < 0 )
      {
       var ds_filter = /(dim|scale):([\d+-.]+)/;
       if( ds_filter.test( clc ) )
       {
        ds_filter.exec(coord_params);
        var val = ( RegExp.$2 )
        if(  RegExp.$1 == 'dim' )
        {
        }
        else // scale
        {
        }
       }
      }

      // Find a sensible Zoom-level based on type
      if( zoomlevel < 0 )
      {
       zoomlevel = 1;
       if( coord_params.indexOf('type:landmark') >= 0 ) zoomlevel = 8;
       if( coord_params.indexOf('type:city') >= 0 ) zoomlevel = 4;
      }

      // Test the unicode Symbol
      if( site == 'de' && link.parentNode.id != 'coordinates' )
      {
       mapbutton = document.createElement('SPAN');
       mapbutton.appendChild( document.createTextNode('♁') );
       mapbutton.style.color = 'blue';
      }
      else
      {
       mapbutton = document.createElement('img');
       mapbutton.src = config.buttonImage;
      }
      mapbutton.title = strings.buttonTooltip[language] || strings.buttonTooltip.en;
      mapbutton.style.padding = '0px 3px 0px 0px';
      mapbutton.style.cursor = 'pointer';
      mapbutton.className = 'noprint';
      mapbutton.mapparam = 
      marker.lat + '_' + marker.lon + '_' + 
      config.width + '_' + config.height + '_' + 
      site + '_' + zoomlevel + '_' + language;
      addEvent( mapbutton, 'click', toggleIFrame );

      // link.parentNode.insertBefore(mapbutton, link.nextSibling);
      link.parentNode.insertBefore(mapbutton,link);
     }

/*    var def_zoom = '';
    if( typeof(wikiminiatlas_defaultzoom) == 'number' ) 
     def_zoom = '_' + wikiminiatlas_defaultzoom; */

    }

   } //for


   // iframe vorbereiten  
   if ( coordinates != null ) {
    iframe.div = document.createElement('div');
    iframe.div.style.visibility = 'hidden';
    iframe.div.style.width = (config.width+2)+'px';
    iframe.div.style.height = (config.height+2)+'px';
    iframe.div.style.margin = '0px';
    iframe.div.style.padding = '0px';
    iframe.div.style.backgroundColor = 'white';
    iframe.div.style.position = 'absolute';
    iframe.div.style.right = '2em';
    iframe.div.style.top = '1em';
    iframe.div.style.border = '1px solid gray';
    iframe.div.style.zIndex = 13;

    iframe.closebutton = document.createElement('img');
    iframe.closebutton.title = strings.close[language] || strings.close.en;
    // was: config.imgbase + 'button_hide.png'
    iframe.closebutton.src = 'http://upload.wikimedia.org/wikipedia/commons/d/d4/Button_hide.png' 
    iframe.closebutton.style.zIndex = 15;
    iframe.closebutton.style.position = 'absolute';
    iframe.closebutton.style.right = '11px';
    iframe.closebutton.style.top = '9px';
    iframe.closebutton.style.width = '18px';
    iframe.closebutton.style.cursor = 'pointer';
    iframe.closebutton.mapparam = '';
    addEvent( iframe.closebutton, 'click', toggleIFrame );

    iframe.iframe = document.createElement('iframe');
    iframe.iframe.scrolling = 'no';
    iframe.iframe.frameBorder = '0';
    iframe.iframe.style.zIndex = 14;
    iframe.iframe.style.position = 'absolute';
    iframe.iframe.style.right = '1px';
    iframe.iframe.style.top = '1px';
    iframe.iframe.style.width = (config.width)+'px';
    iframe.iframe.style.height = (config.height)+'px';
    iframe.iframe.style.margin = '0px';
    iframe.iframe.style.padding = '0px';

    iframe.div.appendChild(iframe.iframe);
    iframe.div.appendChild(iframe.closebutton);

    var content = document.getElementById('content') || document.getElementById('mw_content');
    if(content)
      content.insertBefore(iframe.div,content.childNodes[0]);
   }
  } //with
 }

}

//
// Hook up installation function
//
addOnloadHook(wikiminiatlas.loader);

//</pre>