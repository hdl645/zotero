 //- searchNetworking Javascript File -

	
	 
	function portfolioWindow(page) {
	 
		  var portWindow = window.open(page, "portfolio", "innerWidth=860,innerHeight=541,toolbar=yes,menubar=yes,location=yes,scrollbars=yes,resizable=yes");
	portWindow.moveTo(10, 10);
}

if(7 == 96 || 7 == 97 || 7 == 98 || 7 == 99 || 7 == 100) var CHANNELHEADER = "on"; else CHANNELHEADER = "off";
var SID = 7;
	function HEADER_CHANNEL() {
		sid96size = (SID == 96) ? '_big' : '';
		sid97size = (SID == 97) ? '_big' : '';
		sid98size = (SID == 98) ? '_big' : '';
		sid99size = (SID == 99) ? '_big' : '';
		sid100size = (SID == 100) ? '_big' : '';
		if (ISFIXEDWIDTH) document.write(OPEN_FIXED_WIDTH_TABLE());
		if (PORTFOLIOBAND == "on" && JSdigitalGuideID != 63) document.write(PORTFOLIO_BAND());
		if (LEADERBOARD == "on") document.write(LEADER_BOARD());
		document.write('<table border="0" cellspacing="0" cellpadding="0" width="100%">');
		document.write('<tr class="colorHeader">');
		document.write('<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="9" height="43" alt=""></td>');
		document.write('<td width="100%" valign="top"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="10" alt=""><br>');
		document.write('<a href="http://searchNetworking.techtarget.com/home/0,289692,sid7,00.html"><img src="http://media.techtarget.com/searchNetworking/images/header_logo.gif" border="0" alt=""></a></td>');
		document.write('<td rowspan="2" align="right" valign="top"><img src="http://media.techtarget.com/searchNetworking/images/header_background.gif" width="297" height="68" alt="" border="0"></td>');
		document.write('</tr>');
		document.write('<tr class="colorHeader">');
		document.write('<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="16" border="0" alt=""></td>');
		document.write('<td valign="top"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="59" height="1" alt=""><a href="http://www.techtarget.com"><img src="http://media.techtarget.com/searchNetworking/images/header_tagline.gif" alt="Part of the IT Channel TechTarget Sites" border="0"></a></td>');
		document.write('</tr>');
		document.write('</table>');
		document.write('<!-- END: logo and variable links -->');
		
		HEADER_CHANNEL_TABS();

		if (HEADERNAV == "on") document.write(PAGE_NAVIGATION());
		if (HEADERSEARCH == "on" && JSdigitalGuideID != 9 && JSdigitalGuideID != 63) document.write(HEADER_SEARCH());
		if (!ISHOME && SPONSORBANNER == "on") document.write(SPONSOR_BANNER());
		// write out MBOX
		if ((mboxEnabled == "on") && (eval(JSmboxBannerName) == "on")) {
			document.write(BANNER_MBOX());
		}		

	};


	function HEADER_CHANNEL_TABS() {
		document.write('<!-- BEGIN: tabs -->');
		document.write('<table border="0" cellspacing="0" cellpadding="0" width="100%">');
		document.write('<tr class="colorF">');
		document.write('<td background="http://media.techtarget.com/searchNetworking/images/header_gradient_separator.gif"><img src="http://media.techtarget.com/searchNetworking/images/header_gradient_separator.gif" width="8" height="22" alt=""></td>');
		document.write('<td background="http://media.techtarget.com/searchNetworking/images/header_gradient_separator.gif"><a href="http://searchitchannel.techtarget.com/"><img src="http://media.techtarget.com/searchNetworking/images/tab_it_channel' + sid96size + '.gif" alt="IT Channel" border="0"></a></td>');
		document.write('<td align="center" background="http://media.techtarget.com/searchNetworking/images/header_gradient_separator.gif"><img src="http://media.techtarget.com/searchNetworking/images/header_gradient_separator.gif" alt=""></td>');
		document.write('<td background="http://media.techtarget.com/searchNetworking/images/header_gradient_separator.gif"><a href="http://searchnetworkingchannel.techtarget.com/"><img src="http://media.techtarget.com/searchNetworking/images/tab_networking_channel' + sid100size + '.gif" alt="Networking Channel" border="0"></a></td>');
		document.write('<td align="center" background="http://media.techtarget.com/searchNetworking/images/header_gradient_separator.gif"><img src="http://media.techtarget.com/searchNetworking/images/header_gradient_separator.gif" alt=""></td>');
		document.write('<td background="http://media.techtarget.com/searchNetworking/images/header_gradient_separator.gif"><a href="http://searchsecuritychannel.techtarget.com/"><img src="http://media.techtarget.com/searchNetworking/images/tab_security_channel' + sid97size + '.gif" alt="Security Channel" border="0"></a></td>');
		document.write('<td align="center" background="http://media.techtarget.com/searchNetworking/images/header_gradient_separator.gif"><img src="http://media.techtarget.com/searchNetworking/images/header_gradient_separator.gif" alt=""></td>');
		document.write('<td background="http://media.techtarget.com/searchNetworking/images/header_gradient_separator.gif"><a href="http://searchstoragechannel.techtarget.com/"><img src="http://media.techtarget.com/searchNetworking/images/tab_storage_channel' + sid98size + '.gif" alt="Storage Channel" border="0"></a></td>');
		document.write('<td align="center" background="http://media.techtarget.com/searchNetworking/images/header_gradient_separator.gif"><img src="http://media.techtarget.com/searchNetworking/images/header_gradient_separator.gif" alt=""></td>');
		document.write('<td background="http://media.techtarget.com/searchNetworking/images/header_gradient_separator.gif"><a href="http://searchsystemschannel.techtarget.com/"><img src="http://media.techtarget.com/searchNetworking/images/tab_systems_channel' + sid99size + '.gif" alt="Systems Channel" border="0"></a></td>');
		document.write('<td align="center" background="http://media.techtarget.com/searchNetworking/images/header_gradient_separator.gif"><img src="http://media.techtarget.com/searchNetworking/images/header_gradient_separator.gif" alt=""></td>');
		document.write('</tr>');
		document.write('</table>');
		document.write('<!-- END: tabs -->');
	}


	function FOOTER_CHANNEL_TABS() {
		document.write('<table border="0" cellspacing="0" cellpadding="0" width="100%">');
		document.write('<tr class="colorHeader">');
		document.write('<td colspan="3"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="3" alt=""></td>');
		document.write('</tr>');
		document.write('</table>');
		HEADER_CHANNEL_TABS();
	}


 	function HEADER_DISPLAY_CODE_0() {
		if((navigator.appName == "Netscape" && parseInt(navigator.appVersion) < 5) || WEBREPORTING == "off") {
			//do nothing
		} else document.write(WEB_REPORTING());
		if (memberUpdate == "on" && memUpd != -1 && memberUpdateOverride == -1) document.write(MEMBER_UPDATE());
		if(CHANNELHEADER == "on")
			HEADER_CHANNEL();
		else {
			if (ISFIXEDWIDTH) document.write(OPEN_FIXED_WIDTH_TABLE());
			if (PORTFOLIOBAND == "on" && JSdigitalGuideID != 63) document.write(PORTFOLIO_BAND());
			if (LOGO == "on" || BYLINE == "on" || HEADERMEDIALINKS == "on") document.write(HEADER_CORE());
			if (LEADERBOARD == "on") document.write(LEADER_BOARD());
			if (HEADERNAV == "on") document.write(PAGE_NAVIGATION());
	
			if (HEADERSEARCH == "on" && JSdigitalGuideID != 9 && JSdigitalGuideID != 63) document.write(HEADER_SEARCH());
			else if (HEADERNAV == "on") document.write('<table border="0" cellspacing="0" cellpadding="0" width="100%">'+
			'<tr class="color0"><td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="3" alt=""></td></tr>'+
			'</table>');
			// write default content mbox div for SPONSORBANNER
			if (!ISHOME && SPONSORBANNER == "on") document.write(SPONSOR_BANNER());
			// MBOX Banner
			JSmboxBannerNameSafe = JSmboxBannerName.replace(/-/,"_");	
			if ((mboxEnabled == "on") && (eval(JSmboxBannerNameSafe) == "on")) {
					document.write(BANNER_MBOX());
			}
			//Exception code for whatis pages | spacing needs to follow the old format.
			var bIsDice = (window.location.href.indexOf("/dice/") != -1 || window.location.href.indexOf("/diceHeader/") != -1);
			if (JSdigitalGuideID == 9 && !bIsDice && (HEADERNAV == "on" || LEADERBOARD == "on" || SPONSORBANNER == "on"))
			document.write('<table border="0" cellpadding="0" cellspacing="0">'+
			'<tr>'+
			'<td width="100%"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="15" alt=""></td>'+
			'</tr>'+
			'</table>');
		}
		
	}

	function BANNER_MBOX() {
		return new Array('<table border="0" cellpadding="0" cellspacing="0" width="100%">',
		'<tr>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="5" height="1"></td>',
		'<td width="100%">',
		'<script language="javascript">',
		'ttWriteMboxDiv(JSmboxBannerName);',
		'ttWriteMboxContent(JSmboxBannerName);',
		'</script>',		
		'</td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="5" height="1"></td>',
		'</tr>',
		'</table>').join("");	
	}



	function OPEN_FIXED_WIDTH_TABLE_DISPLAY_CODE_0() {
		return '<table cellpadding="0" cellspacing="0" border="0"><tr><td width="776" bgcolor="#FFFFFF" background="">';
	}


	function PORTFOLIO_BAND_DISPLAY_CODE_0() {
		if (CHANNELHEADER == "on") {
			var portStyle = 'colorHeader'
			var textStyle = 'textF'
			var lineStyle = 'colorPortfolioBand'
		} else {
			var portStyle = 'colorPortfolioBand'
			var textStyle = 'textOnColorPortfolioBand'
			var lineStyle = 'color1'
		}
		if (ipcON == "onREMOVEWHENRELEASED") {
			var handle = getChipValue('IPC','handle'), newMsgs = getChipValue('IPC','newMsgs'),
			ipcInboxURL = "http://searchNetworking.techtarget.com/ITKnowledgeExchange/inbox/0,,sid7_ipu"+
			getChipValue("IPC","userID")+"_idx1_off25,00.html",
			pfoBand = new Array('<table border="0" cellpadding="0" cellspacing="0" class="'+portStyle+'" width="100%">',
			'<tr class="'+portStyle+'">',
			'<td colspan="10"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="3"></td>',
			'</tr>',
			'<tr class="'+portStyle+'">',
			'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="5" height="15"></td>',
			'<td nowrap><span class="a2"><span class="textC">'+(
				// USERNAME - HANDLE DISPLAY
				(ttUser == -1) ? 'Welcome <b>Guest</b>' :
				(thisSite == -1) ? 'Welcome <b>TechTarget Member</b>' :
				(handle != '') ? 'Logged in as: <b>'+handle+'</b>' :
				'Logged in as: <b>'+DisplayName+'</b>'
			)+'</span></span></td>',
			'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="15" height="1"></td>',
			'<td><img src="http://media.techtarget.com/digitalguide/images/Misc/envelope_small.gif" border="0"></a><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" height="1" width="3"></td>',
			'<td nowrap><span class="a2"><span class="textC">'+(
				// IPC MESSAGE COUNT
				(handle == '') ? 'You have <a href="http://searchNetworking.techtarget.com/ITKnowledgeExchange/0,294907,sid7,00.html" class="textC"><span class="a2">'+
				'<b>1 New</b> ITKnowledge Exchange Message</span></a>' :
				(newMsgs > 0) ? 'You have <a href="'+ipcInboxURL+'" class="textC"><span class="a2">'+
				'<b>'+newMsgs+' New</b> ITKnowledge Exchange Messages</span></a>' :
				'TKnowledge Exchange Messages'
			)+'</span></span></td>',
			'<td width="100%"><span class="a2">&nbsp;</span></td>',
			'<td nowrap><span class="a2">'+(
				// FREE-ACCESS / EXPLORE NETWORK LINK
				(ttUser == -1) ? '<span class="textC">FREE access to member only site features - </span>' :
				(thisSite == -1) ? '&nbsp;' :
				'<span class="textC">Explore the <a href="http://searchtechtarget.techtarget.com" class="textC">'+
				'<span class="a2">TechTarget Network</span></a></span>'
			)+'</span></td>',
			'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" height="1" width="10"></td>',
			'<td nowrap><a href="http://searchNetworking.techtarget.com/register/1,289568,sid7,00.html" class="'+textStyle+'"><span class="a2">'+(
				// LOGIN-OUT / EDIT PROFILE LINKS
				(ttUser == -1) ? '<b>Register Now</b></span></a>&nbsp;&nbsp;<font class="textF">|</font>&nbsp;&nbsp;<a href="'+
				((ALTLOGIN != "no") ? ALTLOGIN : 'http://searchNetworking.techtarget.com/login/1,289498,sid7,00.html')+'" class="'+textStyle+'"><span class="a2"><b>Log-in</b>' :
				(thisSite == -1) ? '<b>Add this site to your TechTarget Member Profile</b>' :
				'<b>Edit Profile</b></span></a>&nbsp;&nbsp;<font class="textF">|</font>&nbsp;&nbsp;<a href="'+
				((ALTLOGOUT != "no") ? ALTLOGOUT : 'http://searchNetworking.techtarget.com/logout/1,289500,sid7,00.html')+'" class="'+textStyle+'"><span class="a2"><b>Log-out</b>'
			)+'</span></a></td>',
			'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="5" height="1"></td>',
			'</tr>',
			'<tr class="'+portStyle+'">',
			'<td colspan="10"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="3"></td>',
			'</tr>',
			'</table>');
		} else {
			var pfoBand = new Array('<table border="0" cellpadding="0" cellspacing="0" class="'+portStyle+'" width="100%">',
			'<tr class="'+portStyle+'"><td colspan="4"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="3"></td></tr>',
			'<tr class="'+portStyle+'">',
			'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="5" height="15"></td>',
			'<td width="100%"><span class="a2"><span class="'+textStyle+'"><b>Explore the TechTarget Network at </b>'+
			'<a href="http://searchtechtarget.techtarget.com/" class="'+textStyle+'"><span class="a2">SearchTechTarget.com</span></a>.</span>'+
			'</span></td>',
			'<td nowrap align="right" class="a2">'+((USERINFO == "on") ? '<span class="'+textStyle+'">'+((loggedIn != -1) ? '<i>You\'re logged in as:</i> <b>'+DisplayName+'</b>&nbsp;'+
			'<a href="http://searchNetworking.techtarget.com/register/1,289568,sid7,00.html" class="'+textStyle+'"><span class="a2">Edit your Profile</span></a>&nbsp;<span class="yellow">|</span>&nbsp;'+
			'<a href="'+((ALTLOGOUT != "no") ? ALTLOGOUT : 'http://searchNetworking.techtarget.com/logout/1,289500,sid7,00.html')+'" class="'+textStyle+'"><span class="a2">Log-out</span></a>' :
			'<a href="http://searchNetworking.techtarget.com/register/1,289568,sid7,00.html" class="'+textStyle+'"><span class="a2">Activate your FREE membership today</span></a>&nbsp;<span class="yellow">|</span>&nbsp;'+
			'<a href="'+((ALTLOGIN != "no") ? ALTLOGIN : 'http://searchNetworking.techtarget.com/login/1,289498,sid7,00.html')+'" class="'+textStyle+'"><span class="a2">Log-in</span></a>')+'</span>' : '&nbsp;')+
			'</td>',
			'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="5" height="1"></td>',
			'</tr>',
			'<tr class="'+portStyle+'"><td colspan="4"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="3"></td></tr>',
			'<tr class="'+lineStyle+'"><td colspan="4"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1"></td></tr>',
			'<tr class="'+portStyle+'"><td colspan="4"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1"></td></tr>',
			'</table>');
		}
		return pfoBand.join("");
	}
	
	
	function MEDIA_LINKS_DISPLAY_CODE_0() {
		var hasImage = 1;
		if (hasImage) {
			var mediaCode = "CW",
			links = new Array('<map name="headermap">'),
			popupWinName = "mediaPopup",
			popupWinProp = "width=388,height=388,menubar=no,resizable=no,status=no,titlebar=no,scrollbars=no";
			switch (mediaCode) {
				case "MCW": links.push(
					'<area shape="rect" coords="81,36 142,47"'+
					' href="http://searchNetworking.techtarget.com/mediaPopup/0,295511,sid7_tab1,00.html" alt="Magazine"'+
					' target="'+popupWinName+'" onClick="window.open(\'about:blank\',\''+popupWinName+'\',\''+popupWinProp+'\')">',
					'<area shape="rect" coords="150,36 229,47"'+
					' href="http://searchNetworking.techtarget.com/mediaPopup/0,295511,sid7_tab2,00.html" alt="Conferences"'+
					' target="'+popupWinName+'" onClick="window.open(\'about:blank\',\''+popupWinName+'\',\''+popupWinProp+'\')">',
					'<area shape="rect" coords="237,36 296,47"'+
					' href="http://searchNetworking.techtarget.com/mediaPopup/0,295511,sid7_tab3,00.html" alt="Web Sites"'+
					' target="'+popupWinName+'" onClick="window.open(\'about:blank\',\''+popupWinName+'\',\''+popupWinProp+'\')">');
					break;
				case "MW": links.push(
					'<area shape="rect" coords="124,36 185,47"'+
					' href="http://searchNetworking.techtarget.com/mediaPopup/0,295511,sid7_tab1,00.html" alt="Magazine"'+
					' target="'+popupWinName+'" onClick="window.open(\'about:blank\',\''+popupWinName+'\',\''+popupWinProp+'\')">',
					'<area shape="rect" coords="193,36 252,47"'+
					' href="http://searchNetworking.techtarget.com/mediaPopup/0,295511,sid7_tab3,00.html" alt="Web Sites"'+
					' target="'+popupWinName+'" onClick="window.open(\'about:blank\',\''+popupWinName+'\',\''+popupWinProp+'\')">');
					break;
				case "CW": links.push(
					'<area shape="rect" coords="115,36 194,47"'+
					' href="http://searchNetworking.techtarget.com/mediaPopup/0,295511,sid7_tab2,00.html" alt="Conferences"'+
					' target="'+popupWinName+'" onClick="window.open(\'about:blank\',\''+popupWinName+'\',\''+popupWinProp+'\')">',
					'<area shape="rect" coords="202,36 261,47"'+
					' href="http://searchNetworking.techtarget.com/mediaPopup/0,295511,sid7_tab3,00.html" alt="Web Sites"'+
					' target="'+popupWinName+'" onClick="window.open(\'about:blank\',\''+popupWinName+'\',\''+popupWinProp+'\')">');
					break;
				case "W": links.push(
					'<area shape="rect" coords="159,36 218,47"'+
					' href="http://searchNetworking.techtarget.com/mediaPopup/0,295511,sid7_tab1,00.html" alt="Web Sites"'+
					' target="'+popupWinName+'" onClick="window.open(\'about:blank\',\''+popupWinName+'\',\''+popupWinProp+'\')">');
					break;
			} links.push('<area shape="default" nohref alt="">',
			'</map>',
			'<img src="http://media.techtarget.com/searchNetworking/images/header_mediaLinks_CW.gif" width="300" height="59" ismap usemap="#headermap" alt="TechTarget Networking Media" border="0">');
			return links;
		} else return new Array('<img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="290" height="6" alt="" border="0">');
	}



	function LEADER_BOARD_DISPLAY_CODE_0() {
		var board = new Array('<table border="0" cellpadding="0" cellspacing="0" width="100%">',
		'<tr class="colorC">');
		if (!ISFIXEDWIDTH) board.push('<td width="50%" rowspan="99"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="2" height="1" alt=""></td>');
		board.push('<td colspan="7"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="10" alt=""></td>',
		'<td width="100%" rowspan="99"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="2" height="1" alt=""></td>',
		'</tr>','<tr class="colorF">',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="19" height="1" alt=""></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="2" height="1" alt=""></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="728" height="1" alt=""></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="2" height="1" alt=""></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="19" height="1" alt=""></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'</tr>','<tr>',
		'<td class="colorF"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'<td align="center" valign="top" background="http://media.techtarget.com/digitalguide/images/Misc/background_ad_side_728_90.gif">'+
		'<img src="http://media.techtarget.com/digitalguide/images/Misc/ad_sideHeader_728_90.gif" width="19" height="90" border="0" alt=""></td>',
		'<td class="colorF"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'<td>'+PAGE_AD(12)+'</td>',
		
		'<td class="colorF"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'<td align="center" valign="top" background="http://media.techtarget.com/digitalguide/images/Misc/background_ad_side_728_90.gif">'+
		'<img name="toggle728x90" src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="19" height="90" border="0" alt=""></td>',
		'<td class="colorF"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'</tr>','<tr class="colorF">',
		'<td colspan="7"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'</tr>','<tr class="colorC">',
		'<td colspan="7"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="10" alt=""></td>',
		'</tr>',
		'</table>',
		'<table border="0" cellspacing="0" cellpadding="0" width="100%">',
		'<tr class="color0">',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="3" alt=""></td>',
		'</tr>',
		'</table>');
		//window.alert(board);
		return board.join("");
	}	

	function HEADER_SEARCH_CHANNEL() {
		return new Array('<table border="0" cellspacing="0" cellpadding="0" width="100%">',
		'<tr bgcolor="#BDBDBD">',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'</tr>',
		'</table>',
		'<table border="0" cellspacing="0" cellpadding="0" width="100%">',
		'<form action="http://searchNetworking.techtarget.com/search/1,293876,sid7,00.html">',
		'<tr class="colorEF">',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="7" height="25" alt=""></td>',
		'<td nowrap class="a2"><span class="text6"><b>SEARCH this site and the web</b></span></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="9" height="1" alt=""></td>',
		'<td><input type="text" name="query" size="8" class="i3width125"></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="7" height="1" alt=""></td>',
		'<td><input type="image" src="http://media.techtarget.com/digitalguide/images/Misc/button_search_cccccc.gif"></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="9" height="1" alt=""></td>',
		'<td nowrap><a href="http://searchNetworking.techtarget.com/integratedSearchAdvanced/0,289518,sid7,00.html" class="text6"><span class="a1">ADVANCED SEARCH</span></a>&nbsp;&nbsp;',
		'<span class="textF"><span class="a2">|</span></span>&nbsp;&nbsp;',
		'<a href="http://searchNetworking.techtarget.com/siteIndex/0,294352,sid7,00.html" class="text6"><span class="a1">SITE INDEX</span></a></td>',
		'<td width="100%"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'<td><a href="http://www.google.com"><img src="http://media.techtarget.com/digitalguide/images/Misc/searchPoweredByGoogle_onGray.gif" width="151" height="23" alt="Search Powered by Google" border="0"></a></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="3" height="1" alt=""></td>',
		'<td>',
		'</tr>',
		'</form>',
		'</table>',
		'<table border="0" cellspacing="0" cellpadding="0" width="100%">',
		'<tr bgcolor="#BDBDBD">',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'</tr>',
		'</table>').join("");
	}

	function HEADER_SEARCH_DISPLAY_CODE_0() {
		if(CHANNELHEADER == "on") return HEADER_SEARCH_CHANNEL();
		else return new Array('<table border="0" cellspacing="0" cellpadding="0" width="100%">',
		'<form name="search" action="http://searchNetworking.techtarget.com/search/1,293876,sid7,00.html" method="get">',
		'<tr class="color0">',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="7" height="25" alt=""></td>',
		'<td nowrap class="a2"><span class="textF"><b>SEARCH this site and the web</b></span></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="9" height="1" alt=""></td>',
		'<td><input type="text" name="query" size="8" class="i3width125"></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="7" height="1" alt=""></td>',
		'<td><input type="image" src="http://media.techtarget.com/digitalguide/images/Misc/button_search_cccccc.gif"></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="9" height="1" alt=""></td>',
		'<td nowrap><a href="http://searchNetworking.techtarget.com/integratedSearchAdvanced/0,289518,sid7,00.html" class="textF"><span class="a1">ADVANCED SEARCH</span></a>&nbsp;&nbsp;',
		'<span class="textF"><span class="a2">|</span></span>&nbsp;&nbsp;',
		'<a href="http://searchNetworking.techtarget.com/siteIndex/0,294352,sid7,00.html" class="textF"><span class="a1">SITE INDEX</span></a></td>',
		'<td width="100%"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'<td><a href="http://www.google.com"><img src="http://media.techtarget.com/digitalguide/images/Misc/searchPoweredByGoogle_onBlack.gif" width="147" height="23" alt="Search Powered by Google" border="0"></a></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="3" height="1" alt=""></td>',
		'</tr>',
		'</form>',
		'</table>').join("");
	}
	
	function HEADER_SEARCH_CLICKTHRU_DISPLAY_CODE_0() {
		return new Array(
		'<table border="0" cellspacing="0" cellpadding="0" width="100%">',
		'<form name="search" action="http://searchNetworking.techtarget.com/search/1,293876,sid7,00.html" method="get">',
		'<tr class="color0">',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="5" height="25" alt=""></td>',
		'<td nowrap class="a2"><span class="textF"><b>SEARCH</b></span></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="7" height="1" alt=""></td>',
		'<td><input type="text" name="query" size="8" class="i3width125"></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="4" height="1" alt=""></td>',
		'<td><input type="image" src="http://media.techtarget.com/digitalguide/images/Misc/button_search_cccccc.gif"></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="7" height="1" alt=""></td>',
		'</form>',
		'<td nowrap><a href="http://searchNetworking.techtarget.com/integratedSearchAdvanced/0,289518,sid7,00.html" class="textF"><span class="a1">ADVANCED SEARCH</span></a>',		'&nbsp;&nbsp;<span class="textF"><span class="a2">|</span></span>&nbsp;&nbsp;<a href="http://searchNetworking.techtarget.com/siteIndex/0,294352,sid7,00.html" class="textF"><span class="a1">SITE INDEX</span></a></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'<td><a href="http://www.google.com"><img src="http://media.techtarget.com/digitalguide/images/Misc/searchPoweredByGoogle_onBlack.gif" width="147" height="23" alt="Search Powered by Google" border="0"></a></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'<td><img src="http://media.techtarget.com/digitalguide/images/Misc/homepageHeader_background_onBlack.gif"></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="5" height="1" alt=""></td>',
		'<td nowrap class="a2"><span class="textF"><b><a href="http://searchNetworking.techtarget.com/clickThruAbout/0,296381,sid7,00.html"><img src="http://media.techtarget.com/digitalguide/images/Misc/clickthru_logo.gif" border="0"></a></b></span></td>',
		'<form name="clickThruFormHeader" method="get" onSubmit="clickThruValidate(clickThruFormHeader)">',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="3" height="1" alt=""></td>',
		'<td><input type="text" name="clickThruID" size="8" class="i3width50"></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="5" height="1" alt=""></td>',
		'<td><input type="image" src="http://media.techtarget.com/digitalguide/images/Misc/button_go_cccccc.gif" action="submit"></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="7" height="1" alt=""></td>',
		'</form>',
		'<td>',
		'</tr>',
		'</table>').join("");
	}

	function SPONSOR_BANNER_DISPLAY_CODE_0() {
		return new Array('<table border="0" cellpadding="0" cellspacing="0" width="100%">',
		'<tr><td colspan="3"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="15"></td></tr>',
		'<tr>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="5" height="1"></td>',
		'<td width="100%" class="color4">',
		'<table border="0" cellpadding="0" cellspacing="1" width="100%">',
		'<tr bgcolor="#FFFFFF">',
		'<td><img src="http://media.techtarget.com/digitalguide/images/Misc/platinum_site_sponsor.gif" width="77" height="33"></td>',
		'<td width="100%">'+PAGE_AD(9)+'</td>','</tr>','</table>',
		'</td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="5" height="1"></td>',
		'</tr>',
		'</table>').join("");
	}



	function PAGE_NAVIGATION() {
		var navClass = 'colorNav'
		var nav = new Array('<div class="colorNav">',
		'<table border="0" cellspacing="0" cellpadding="0">',
		'<tr class="colorNav">',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="8" height="1" alt=""></td>'), links = new Array();
		
		
		
		     if (!ISHOME) links.push('<td><a href="http://searchNetworking.techtarget.com/home/0,289692,sid7,00.html"><img src="http://media.techtarget.com/searchNetworking/images/homeNav_home.gif" width="30" height="22" alt="Home" border="0"></a></td>');
		  links.push('<td><a href="http://searchNetworking.techtarget.com/news/0,289141,sid7,00.html"><img src="http://media.techtarget.com/searchNetworking/images/homeNav_news.gif" width="30" height="22" border="0" alt="News"></a></td>');
		   links.push('<td><a href="http://searchNetworking.techtarget.com/topicsMain/0,295490,sid7,00.html"><img src="http://media.techtarget.com/searchNetworking/images/homeNav_topics.gif" width="37" height="22" border="0" alt="Topics"></a></td>');
		   links.push('<td><a href="http://searchNetworking.techtarget.com/ITKnowledgeExchange/0,294907,sid7,00.html"><img src="http://media.techtarget.com/searchNetworking/images/homeNav_itke.gif" width="135" height="22" border="0" alt="ITKnowledge Exchange"></a></td>');
		   links.push('<td><a href="http://searchNetworking.techtarget.com/tips/0,289484,sid7,00.html"><img src="http://media.techtarget.com/searchNetworking/images/homeNav_tips.gif" width="23" height="22" border="0" alt="Tips"></a></td>');
		   links.push('<td><a href="http://searchNetworking.techtarget.com/expert/Knowledgebase/0,289622,sid7,00.html"><img src="http://media.techtarget.com/searchNetworking/images/homeNav_ate.gif" width="94" height="22" border="0" alt="Ask the Experts"></a></td>');
		   links.push('<td><a href="http://searchNetworking.techtarget.com/webcasts/0,295024,sid7,00.html?asrc=SS_NAV_WC"><img src="http://media.techtarget.com/searchNetworking/images/homeNav_webcasts.gif" width="57" height="22" border="0" alt="Webcasts"></a></td>');
		     links.push('<td><a href="http://searchNetworking.bitpipe.com/?asrc=SS_NAV_WP"><img src="http://media.techtarget.com/searchNetworking/images/homeNav_whitepapers.gif" width="76" height="22" border="0" alt="White Papers"></a></td>');
		   links.push('<td><a href="http://searchNetworking.bitpipe.com/itdownloads?asrc=SS_NAV_DL"><img src="http://media.techtarget.com/searchNetworking/images/homeNav_npt.gif" height="22" border="0" alt="Networking Product Trials" ></a></td>');
		    nav.push(links.join('<td align="center" width="5%"><img src="http://media.techtarget.com/searchNetworking/images/homeNav_separator.gif" width="2" height="22" alt=""></td>'));
		nav.push('<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="8" height="1" alt=""></td>','</tr>','</table>','</div>');
		return nav.join("");
	}
 function PAGE_FOOTER_TOP_DISPLAY_CODE_0 () {}

	function PAGE_FOOTER_BOTTOM_DISPLAY_CODE_0() {
		if(CHANNELHEADER == "on") var trClass = 'colorHeader'; else var trClass = 'color1';
		if(CHANNELHEADER == "on") var lineColor = 'color9'; else var lineColor = 'color0';
		if (FOOTERMEDIABAR == "on" && typeof FOOTER_MEDIABAR == "function") document.write(FOOTER_MEDIABAR());
		if(CHANNELHEADER != "on") document.write('<table border="0" cellspacing="0" cellpadding="0" width="100%">'+
		'<tr class="color0">'+
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="3" alt=""></td>'+
		'</tr>'+
		'</table>');
		if (FOOTERNAV == "on") {
			document.write(PAGE_NAVIGATION() + '<table border="0" cellspacing="0" cellpadding="0" width="100%">'+
			'<tr class="' + lineColor + '">'+
			'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="3" alt=""></td>'+
			'</tr>'+
			'</table>');
		}
		if ((FOOTERLINKS == "on" || FOOTERSEARCH == "on") && JSdigitalGuideID != 63) {
			document.write('<table border="0" cellpadding="0" cellspacing="0" width="100%">'+
			'<tr class="' + trClass + '">'+
			'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="5" height="1"></td>'+
			'<td width="100%"'+((FOOTERLINKS == "on") ? ' height="29" class="textOnColor1">'+FOOTER_LINKS() : '>&nbsp;')+'</td>'+
			'<td'+((FOOTERSEARCH == "on" && JSdigitalGuideID != 9) ? ' class="' + trClass + '">'+FOOTER_SEARCH() : '>&nbsp;')+'</td>'+
			'</tr>'+
			'<tr class="' + trClass + '">'+
			'<td colspan="3"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="5"></td>'+
			'</tr>'+
			'</table>');
		} else {
			document.write('<table border="0" cellpadding="0" cellspacing="0" width="100%">'+
			'<tr class="' + trClass + '">'+
			'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="7"></td>'+
			'</tr>'+
			'</table>');
		}
		document.write(PORTFOLIO_BOX());
		document.write(LIFTSTUDY_QUEUE());
		if (ISFIXEDWIDTH) document.write(CLOSE_FIXED_WIDTH_TABLE());
		if (typeof f360I_TRACKING == "function") document.write(f360I_TRACKING());
	}


	 function FOOTER_LINKS_DISPLAY_CODE_0() {
		var links = new Array('<a href="http://searchNetworking.techtarget.com/aboutUs/0,289153,sid7,00.html" class="textOnColor1">About Us</a>',
		'<a href="http://searchNetworking.techtarget.com/contactUs/0,289157,sid7,00.html" class="textOnColor1">Contact Us</a>',
		'<a href="http://searchNetworking.techtarget.com/buyersGuideForVendors/0,289879,sid7,00.html" class="textOnColor1">For Advertisers</a>',
		'<a href="http://searchNetworking.techtarget.com/forBusinessPartners/0,289198,sid7,00.html" class="textOnColor1">For Business Partners</a>',
		
			'<a href="http://searchNetworking.techtarget.com/siteIndex/0,294352,sid7,00.html" class="textOnColor1">Site Index</a>',
		 '<a href="http://searchNetworking.techtarget.com/rssLanding/0,295701,sid7,00.html" class="textOnColor1">RSS</a>');
		 return links.join('&nbsp;&nbsp;|&nbsp;&nbsp;');
	}


	function FOOTER_SEARCH_DISPLAY_CODE_0() {
		if(CHANNELHEADER == "on")
		{
			var trClass = 'colorHeader'; 
			var lineColor = 'color9';
			var imageColor = 'gray';
		}
		else
		{
			var trClass = 'color1';
			var lineColor = 'color0';
			var imageColor = 'black';
		}

		return new Array('<table border="0" cellpadding="0" cellspacing="0" class="' + lineColor + '">',
		'<form name="search" action="http://searchNetworking.techtarget.com/search/1,293876,sid7,00.html" method="get">',
		'<tr>',
		'<td class="' + trClass + '"><img src="http://media.techtarget.com/digitalguide/images/Misc/footer_searchWidget_corner_' + imageColor +'.gif" width="29" height="29" alt=""></td>',
		'<td class="textF"><span class="a2"><b>SEARCH</b>&nbsp;</span></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="5" height="1" alt=""></td>',
		'<td><input type="text" name="query" size="8" class="i3width125"></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="5" height="1" alt=""></td>',
		'<td><input type="image" src="http://media.techtarget.com/digitalguide/images/Misc/button_search_cccccc.gif"></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="5" height="1" alt=""></td>',
		'</tr>',
		'</form>',
		'</table>').join("");
	}



	function PORTFOLIO_BOX_DISPLAY_CODE_0() {
	
		if(CHANNELHEADER == "on") var trClass = 'colorHeader'; else var trClass = 'color1';
		var box = new Array('<style type="text/css">',
							'.footerLink {color: #243f99; font: normal 11px arial}',
							'</style>',
							'<table border="0" cellpadding="10" cellspacing="0" width="100%" bgcolor="cecece">',
							'<tr>',
							'<td>',
							'<table border="0" cellpadding="8" cellspacing="0" width="100%" bgcolor="e0e0df">',
							'<tr>',
							'<td style="font: normal 11px arial">TechTarget provides enterprise IT professionals with the information they need to perform their jobs - from developing strategy, to making cost-effective IT purchase decisions and managing their organizations IT projects - with its network of <a href="javascript:portfolioWindow(\'http://searchNetworking.techtarget.com/portfolioSites/0,296825,sid7,00.html\')" class="footerLink">technology-specific Web sites, events and magazines</a>.</td>',
							'</tr>',
							'</table>',
							'<table border="0" cellpadding="0" cellspacing="0" width="100%">',
							'<tr>',
							'<td colspan="3"><br></td>',
							'</tr>',
							'<tr>',
							'<td style="font: normal 11px arial" valign="top" nowrap>');
							
							links = new Array();
							links.push('<a href="http://www.techtarget.com/" class="footerLink">TechTarget Corporate Web Site</a>',
										'<a href="http://www.techtarget.com/mediakit/" class="footerLink">Media Kit</a>',
										'<a href="http://searchNetworking.techtarget.com/reprints/0,296569,sid7,00.html" class="footerLink">Reprints</a>');
							 links.push('<a href="http://searchNetworking.techtarget.com/sitemap/0,296817,sid7,00.html" class="footerLink">Site Map</a>');
							box = box.concat(links.join('&nbsp;&nbsp;|&nbsp;&nbsp;'));							
							box.push('<br><br><br><br><br>All Rights Reserved, <a href="http://searchNetworking.techtarget.com/copyright/0,289135,sid7,00.html" class="footerLink">Copyright 2000 - 2008</a>, TechTarget&nbsp;|&nbsp;<a href="http://www.techtarget.com/html/privacy_policy.html" class="footerLink" target=_>Read our Privacy Policy</a>',
							'</td>',
							'<td width="100%">&nbsp;</td>',
							'<td valign="top"><a href="http://www.techtarget.com"><img src="http://media.techtarget.com/digitalguide/images/Misc/tt_footer_logo.gif" width="97" height="92" border="0" alt="TechTarget - The IT Media ROI Experts"></a></td>',
							'</tr>',
							'</table>',
							'</td>',
							'</tr>',
							'</table>');

		return box.join("");
	}

	
 function HEADER_DISPLAY_CODE_1() {
	if((navigator.appName == "Netscape" && parseInt(navigator.appVersion) < 5) || WEBREPORTING == "off") {
	//do nothing
	} else document.write(WEB_REPORTING());
	document.write('<table border="0" cellspacing="0" cellpadding="0" width="860">');
	document.write('<tr>');
	document.write('<td class="colorF" width="100%">');
	document.write('<span class="hideToPrint">');
	document.write('<!-- BEGIN: header -->');

	if (PORTFOLIOBAND == "on" && JSdigitalGuideID != 63) document.write(PORTFOLIO_BAND_DISPLAY_CODE_1());
	
	if (LEADERBOARD == "on") document.write(LEADER_BOARD());
	if (LOGO == "on" || HEADERMEDIALINKS == "on") document.write(HEADER_CORE());

	if (HEADERNAV == "on") {
		document.write(PAGE_NAVIGATION_DISPLAY_CODE_1('top'));
		document.write(STRIPE_DISPLAY_CODE_1('top'));
	} else {
		document.write(COLOR1_LINE_DISPLAY_CODE_1());
	}
	if (HEADERSEARCH == "on") {
		document.write(HEADER_SEARCH());
	}
	if (!ISHOME && SPONSORBANNER == "on") document.write(SPONSOR_BANNER_DISPLAY_CODE_1());
	
	document.write('	<!-- END: header -->');
	document.write('	</span>');
}

function SPONSOR_BANNER_DISPLAY_CODE_1() {
		return new Array('<table border="0" cellpadding="0" cellspacing="0" width="100%">',
		'<tr>',
		'<td width="100%"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'<td align="right" rowspan="3"><img src="http://media.techtarget.com/searchNetworking/images/header_portfolioBand_curveEnd.gif" width="25" height="36" alt=""></td>',
		'</tr>',
		'<tr>',
		'<td>',
		'<table border="0" cellpadding="0" cellspacing="0" width="100%">',
		'<tr>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/label_portfolioBand.gif" width="14" height="33" alt="Ad"></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'<td>'+PAGE_AD(9)+'</td>',
		'</tr>',
		'</table>',
		'</td>',
		'</tr>',
		'<tr>',
		'<td class="color9"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="745" height="1" alt=""></td>',
		'</tr>',
		'</table>').join("");
	}


function PORTFOLIO_BAND_DISPLAY_CODE_1() {
	var pfoBand = new Array('<!-- BEGIN: portfolio band -->',
	'<table border="0" cellpadding="0" cellspacing="0" width="100%">',
	'<tr class="colorPortfolioBand">',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="5" height="14" alt=""></td>',
	'<td width="100%"><span class="textOnColorPortfolioBand"><span class="h2">Explore the TechTarget Network at </span></span><a href="http://www.searchtechtarget.com" class="textOnColorPortfolioBand"><span class="h2">SearchTechTarget.com</span></a></td>',
	'<td nowrap align="right"><span class="textOnColorPortfolioBand">'+((USERINFO == "on") ? '<span class="textOnColorPortfolioBand">'+((loggedIn != -1) ? '<span class="h2"><i>You\'re logged in as:</i> '+DisplayName+'</span>&nbsp;'+
			'<a href="http://searchNetworking.techtarget.com/register/1,289568,sid7,00.html" class="textOnColorPortfolioBand2"><span class="h2">Edit your Profile</span></a>&nbsp;<span class="yellow">|</span>&nbsp;'+
			'<a href="'+((ALTLOGOUT != "no") ? ALTLOGOUT : 'http://searchNetworking.techtarget.com/logout/1,289500,sid7,00.html')+'" class="textOnColorPortfolioBand2"><span class="h2">Log-out</span></a>' :
			'<a href=javascript:buildOmedaURL("HL15"); class="textOnColorPortfolioBand2"><span class="h2">Activate your FREE membership today</span></a>&nbsp;<span class="yellow">|</span>&nbsp;'+
			'<a href="'+((ALTLOGIN != "no") ? ALTLOGIN : 'http://searchNetworking.techtarget.com/login/1,289498,sid7,00.html')+'" class="textOnColorPortfolioBand2"><span class="h2">Log-in</span></a>')+'</span></span>' : '&nbsp;')+
	'</span></td>',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="3" height="1" alt=""></td>',
	'<td rowspan="4" class="color1"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="11" height="1" alt=""></td>',
	'</tr>',
	'<tr class="colorPortfolioBand">',
	'<td colspan="4"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="2" alt=""></td>',
	'</tr>',
	'<tr class="color6">',
	'<td colspan="4"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
	'</tr>',
	'<tr class="colorPortfolioBand">',
	'<td colspan="4"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="2" alt=""></td>',
	'</tr>',
	'</table>',
	'<!-- END: portfolio band -->');
	return pfoBand.join("");
}


function HEADER_CORE_DISPLAY_CODE_1() {
	var core = new Array('<!-- BEGIN: logo and media pop-up -->',
'<table border="0" cellpadding="0" cellspacing="0" width="100%">',
'<tr class="colorHeader">',
'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="4" height="56" alt=""></td>',
'<td valign="middle">');
	if (LOGO == "on") core.push('<a href="http://searchNetworking.techtarget.com/home/0,289692,sid7,00.html"><img src="http://media.techtarget.com/searchNetworking/images/header_siteLogo.gif" alt="searchNetworking" border="0"></a>');
	core.push ('</td>',
	'<td width="100%"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
	'<td>');
	
	if (HEADERNAV == "on") {
		mediaClass = 'color1';
	} else {
		mediaClass = 'colorHeader';
	}
	if (MEDIALINKS == "on") core = core.concat(MEDIA_LINKS());
	else core.push('<img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="208" height="56" alt="">');
	core.push('</td>',
	'<td rowspan="99" class="'+mediaClass+'"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="8" height="1" alt=""></td>',
	'</tr>',
	'</table>',
	'<!-- END: logo and media pop-up -->');
	return core.join("");
}


function LEADER_BOARD_DISPLAY_CODE_1() {
	var board = new Array('<table border="0" cellpadding="0" cellspacing="0" width="100%">',
	'<tr class="colorF">',
	'<td valign=top><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="14" height="1" alt=""></td>',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="728" height="1" alt=""></td>',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="106" height="1" alt=""></td>',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
	'<td rowspan="99" class="color1"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="8" height="1" alt=""></td>',
	'</tr>',
	'<tr>',
	'<td class="colorF"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
	'<td align="center" valign="top" background="http://media.techtarget.com/digitalguide/images/Misc/background_ad_side_728_90.gif"><img src="http://media.techtarget.com/digitalguide/images/Misc/leaderboard_advertisement.gif" width="14" height="90" alt=""></td>',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
	'<td>'+PAGE_AD(12)+'</td>',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
	'<td align="center" valign="top" background="http://media.techtarget.com/digitalguide/images/Misc/background_ad_side_728_90.gif">',
	'<img name="toggle728x90" src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="16" height="90" border="0" alt="">',
	'</td>',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
	'</tr>',
	'<tr class="colorF">',
	'<td colspan="7"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
	'</tr>',
	'<tr class="color3">',
	'<td colspan="7"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
	'</tr>',
	'</table>',
	'<!-- END: 728x90 leader board ad -->');
	return board.join("");
}			

function PAGE_FOOTER_BOTTOM_DISPLAY_CODE_1() {
	document.write('</td>');
	document.write('</tr>');
	document.write('<tr>');
	document.write('<td class="colorF" width="100%">');
	document.write('<span class="hideToPrint">');

	if (FOOTERSEARCH == "on") {
		document.write(FOOTER_SEARCH());
	}
//	if (FOOTERNAV == "on") {
//		document.write(STRIPE_DISPLAY_CODE_1('bottom'));
//		document.write(PAGE_NAVIGATION_DISPLAY_CODE_1('bottom'));
//	}
	document.write(STRIPE_DISPLAY_CODE_1('bottom'));
	document.write(PAGE_NAVIGATION_DISPLAY_CODE_1('bottom'));
	if (PORTFOLIOBOX == "on") {
		document.write(PORTFOLIO_BOX());
	}
	document.write('</span>');
	document.write('</td>');
	document.write('</tr>');
	document.write('</table>');
	document.write('</body>');
	document.write('</html>');
	document.write(LIFTSTUDY_QUEUE());
	if (typeof f360I_TRACKING == "function") document.write(f360I_TRACKING());
}



function FOOTER_LINKS_DISPLAY_CODE_1() {
	var links = new Array('<a href="http://searchNetworking.techtarget.com/aboutUs/0,289153,sid7,00.html" class="textOnColor1">About Us</a>',
	'<a href="http://searchNetworking.techtarget.com/contactUs/0,289157,sid7,00.html" class="textOnColor1">Contact Us</a>',
	'<a href="http://searchNetworking.techtarget.com/buyersGuideForVendors/0,289879,sid7,00.html" class="textOnColor1">For Advertisers</a>',
	'<a href="http://searchNetworking.techtarget.com/forBusinessPartners/0,289198,sid7,00.html" class="textOnColor1">For Business Partners</a>',
	'<a href="http://searchNetworking.techtarget.com/reprints/0,296569,sid7,00.html" class="textOnColor1">Reprints</a>',
	'<a href="http://searchNetworking.techtarget.com/rssLanding/0,295701,sid7,00.html" class="textOnColor1">RSS</a>');
	 return links.join('&nbsp;&nbsp;|&nbsp;&nbsp;');
}


function PAGE_FOOTER_TOP_DISPLAY_CODE_1() {}

function PAGE_NAVIGATION_DISPLAY_CODE_1(position) {
	var positionAttrib;
	if(position == 'top') positionAttrib = ' id="menuBar"';
	else positionAttrib = '';
	var spanClass = ' class="first"';
	var firstLink = true;
	var nav = new Array('<table border="0" cellspacing="0" cellpadding="0" width="100%">','<tr>','<td width="100%" valign="top"><div' + positionAttrib + ' class="navBar">'), links = new Array();
	if (!ISHOME) {
		links.push('<span id="navList" class="first"><a href="http://searchNetworking.techtarget.com/home/0,289692,sid7,00.html" class="navLink">HOME</a></span>');
		spanClass = '';
	}
	  links.push('<span id="navList"' + spanClass + '><a href="http://searchNetworking.techtarget.com/news/0,289141,sid7,00.html" class="navLink">NEWS</a></span>');
		spanClass = '';
		   links.push('<span id="navList"' + spanClass + '><a href="http://searchNetworking.techtarget.com/topicsMain/0,295490,sid7,00.html" class="navLink">TOPICS</a></span>');
		spanClass = '';
		         links.push('<span id="navList"' + spanClass + '><a href="http://searchNetworking.techtarget.com/webcasts/0,295024,sid7,00.html?asrc=SS_NAV_WC" class="navLink">WEBCASTS</a></span>');
		spanClass = '';
		     links.push('<span id="navList"' + spanClass + '><a href="http://searchNetworking.bitpipe.com/?asrc=SS_NAV_WP" class="navLink">WHITE PAPERS</a></span>');
		spanClass = '';
		      nav.push(links.join(''));
	nav.push('</div>');
	if(position == 'bottom') nav.push('<td valign="top"><img src="http://media.techtarget.com/searchNetworking/images/footer_curveEnd_bottom.gif" width="25" height="19" alt=""></td>');
	else if(position == 'top') nav.push('<td valign="top"><img src="http://media.techtarget.com/searchNetworking/images/header_curveEnd_top.gif" width="25" height="19" alt=""></td>');
	nav.push('</td>','</tr>','</table>');
	return nav.join("");
}

function COLOR1_LINE_DISPLAY_CODE_1 () {
	colorline = new Array('<table border="0" cellpadding="0" cellspacing="0" width="100%">',
	'<tr class="color1">',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="3" border="0" alt=""></td>',
	'</tr></table>');
	return colorline.join("");	
}

function STRIPE_DISPLAY_CODE_1(position) {	
	stripe = new Array('<table border="0" cellpadding="0" cellspacing="0" width="100%">',
	'<tr>',
	'<td width="100%" align="right" class="color1"><img src="http://media.techtarget.com/searchNetworking/images/header_gradient_860.gif" width="835" height="8" alt=""></td>');
	if(position == 'bottom') stripe.push('<td background="http://media.techtarget.com/searchNetworking/images/footer_curveEnd_middle.gif" class="color1">');
	else if(position == 'top') stripe.push('<td background="http://media.techtarget.com/searchNetworking/images/header_curveEnd_middle.gif" class="color1">'); 
	stripe.push('<img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="25" height="8" alt="">',
	'</td>',
	'</tr>',
	'</table>');
	return stripe.join("");
}	

function HEADER_SEARCH_DISPLAY_CODE_1() {
	if(clickThruLive == 'on')
		return SEARCHBOX_CLICKTHRU_DISPLAY_CODE_1('top');
	else
		return SEARCHBOX_DISPLAY_CODE_1('top');
}

function FOOTER_SEARCH_DISPLAY_CODE_1() {
	if(clickThruLive == 'on')
		return SEARCHBOX_CLICKTHRU_DISPLAY_CODE_1('bottom');
	else
		return SEARCHBOX_DISPLAY_CODE_1('bottom');
}

function SEARCHBOX_DISPLAY_CODE_1(position) {
	searchbox = new Array('<table border="0" cellpadding="0" cellspacing="0" width="100%">',
	'<tr class="searchBarBackground">',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="4" height="24" alt=""></td>',
	'<td nowrap><span class="h2"><span class="textF"><b>Search</b> this site and the web:</span></span></td>',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="6" height="1" alt=""></td>',
	'<td>',
	'<table border="0" cellspacing="0" cellpadding="0">',
	'<form name="search" action="http://searchNetworking.techtarget.com/search/1,293876,sid7,00.html" method="get">',
	'<tr>',
	'<td><input type="text" name="query" size="8" class="searchbarTextbox"></td>',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="3" height="1" alt=""></td>',
	'<td><input type="image" src="http://media.techtarget.com/searchNetworking/images/button_go.gif"></td>',
	'</tr>',
	'</tr>',
	'</table>',
	'</td>',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="10" height="1" alt=""></td>',
	'<td nowrap>',
	'<a href="http://searchNetworking.techtarget.com/integratedSearchAdvanced/0,289518,sid7,00.html" class="searchbarLink">ADVANCED SEARCH</a>',
	'&nbsp;&nbsp;<span class="textF"><span class="h2">|</span></span>&nbsp;&nbsp;',
	'<a href="http://searchNetworking.techtarget.com/siteIndex/0,294352,sid7,00.html" class="searchbarLink">SITE INDEX</a>',
	'</td>',
	'<td width="100%"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
	'<td background="http://media.techtarget.com/searchNetworking/images/background_lineTrio_onColor6.gif"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="34" height="24" alt=""></td>',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="8" height="1" alt=""></td>',
	'<td><a href="http://www.google.com"><img src="http://media.techtarget.com/digitalguide/images/Misc/searchPoweredByGoogle_onGrey6.gif" width="149" height="24" alt="Search Powered by Google" border="0"></a></td>',
	'<!--<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="4" height="1" alt=""></td>-->');
	if(position == 'bottom'){
		if(JSfooterAdSense == 'on') searchbox.push('<td background="http://media.techtarget.com/searchNetworking/images/footer_curveEnd_top_onColor9.gif">');
		else searchbox.push('<td background="http://media.techtarget.com/searchNetworking/images/footer_curveEnd_top.gif">');
	}
	else if(position == 'top') searchbox.push('<td background="http://media.techtarget.com/searchNetworking/images/header_curveEnd_bottom.gif">');
	searchbox.push('<img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="25" height="24" alt=""></td>',	
	'</tr>',	
	'</form></table>',	
	'<!-- END: navigation & search bar -->');
	return searchbox.join("");
}

function SEARCHBOX_CLICKTHRU_DISPLAY_CODE_1(position) {
	searchbox = new Array('<!-- BEGIN: search bar -->',
			'<table border="0" cellpadding="0" cellspacing="0" width="100%">',
			'<tr class="searchBarBackground">',
			'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="4" height="24" alt=""></td>',
			'<td nowrap><span class="h2"><span class="textF"><b>SEARCH:</b></span></span></td>',
			'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="6" height="1" alt=""></td>',
			'<td>',
				'<table border="0" cellspacing="0" cellpadding="0">',
				'<form name="search" action="http://searchNetworking.techtarget.com/search/1,293876,sid7,00.html" method="get">',
				'<tr>',
				'<td><input type="text" name="query" size="8" class="searchbarTextbox"></td>',
				'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="3" height="1" alt=""></td>',
				'<td><input type="image" src="http://media.techtarget.com/searchNetworking/images/button_go.gif"></td>',
				'</tr>',
				'</form>',
				'</table>',
			'</td>',
			'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="8" height="1" alt=""></td>',
			'<td nowrap><a href="http://searchNetworking.techtarget.com/integratedSearchAdvanced/0,289518,sid7,00.html" class="searchbarLink">ADVANCED SEARCH</a>&nbsp;&nbsp;<span class="textF"><span class="h2">|</span></span>&nbsp;&nbsp;<a href="http://searchNetworking.techtarget.com/siteIndex/0,294352,sid7,00.html" class="searchbarLink">SITE INDEX</a></td>',
			'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="15" height="1" alt=""></td>',
			'<td><a href="http://www.google.com"><img src="http://media.techtarget.com/digitalguide/images/Misc/searchPoweredByGoogle_onGrey6.gif" width="149" height="24" alt="Search Powered by Google" border="0"></a></td>',
			'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="83" height="1" alt=""></td>',
	'<!-- END: search bar -->');
		if(position == 'bottom'){
		searchbox.push('<!-- BEGIN: ClickThru Form Header Footer-->',
					'<td background="http://media.techtarget.com/searchNetworking/images/background_lineTrio_onColor6.gif"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="34" height="24" alt=""></td>',
					'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="4" height="1" alt=""></td>',
					'<td><a href="http://searchNetworking.techtarget.com/clickThruAbout/0,296381,sid7,00.html"><img src="http://media.techtarget.com/searchNetworking/images/clickthru_logo.gif" width="91" height="16" alt="CLICKTHRU" border="0"></a></td>',
					'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="2" height="1" alt=""></td>',
					'<td>',
						'<table border="0" cellspacing="0" cellpadding="0">',
						'<form name="clickThruFormFooter" method="get" onSubmit="clickThruValidate(clickThruFormFooter)">',
						'<tr>',
						'<td><input type="text" name="clickThruID" size="8" class="searchbarTextbox2"></td>',
						'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="3" height="1" alt=""></td>',
						'<td><input type="image" src="http://media.techtarget.com/searchNetworking/images/button_go.gif" action="submit"></td>',
						'</tr>',
						'</form>',
						'</table>',
					'</td>',
			'<!--END: ClickThru Form Header Footer-->');
			if(JSfooterAdSense == 'on') searchbox.push('<td background="http://media.techtarget.com/searchNetworking/images/footer_curveEnd_top_onColor9.gif">');
		else searchbox.push('<td background="http://media.techtarget.com/searchNetworking/images/footer_curveEnd_top.gif">');
			}
		else if(position == 'top') searchbox.push(
				'<!-- BEGIN: ClickThru Form Header Footer-->',
					'<td background="http://media.techtarget.com/searchNetworking/images/background_lineTrio_onColor6.gif"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="34" height="24" alt=""></td>',
					'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="4" height="1" alt=""></td>',
					'<td><a href="http://searchNetworking.techtarget.com/clickThruAbout/0,296381,sid7,00.html"><img src="http://media.techtarget.com/searchNetworking/images/clickthru_logo.gif" width="91" height="16" alt="CLICKTHRU" border="0"></a></td>',
					'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="2" height="1" alt=""></td>',
					'<td>',
						'<table border="0" cellspacing="0" cellpadding="0">',
						'<form name="clickThruFormHeader" method="get" onSubmit="clickThruValidate(clickThruFormHeader)">',
						'<tr>',
						'<td><input type="text" name="clickThruID" size="8" class="searchbarTextbox2"></td>',
						'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="3" height="1" alt=""></td>',
						'<td><input type="image" src="http://media.techtarget.com/searchNetworking/images/button_go.gif" action="submit"></td>',
						'</tr>',
						'</table>',
					'</td>',
			'<!--END: ClickThru Form Header Footer-->',
		'<td background="http://media.techtarget.com/searchNetworking/images/header_curveEnd_bottom.gif">');
		
	searchbox.push('<img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="25" height="24" alt=""></td>',	
	'</tr>',	
	'</form></table>');
	return searchbox.join("");

}

function PORTFOLIO_BOX_DISPLAY_CODE_1() {
	var box = new Array('<table border="0" cellpadding="0" cellspacing="0" width="100%">',
	'<tr class="color6">',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="4" height="19" alt=""></td>',
	'<td width="100%">&nbsp;</td>',
	'<td background="http://media.techtarget.com/searchNetworking/images/background_lineTrio_onColor6.gif"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="34" height="19" alt=""></td>',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="174" height="19" alt=""></td>',
	'<td class="color1"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="8" height="1" alt=""></td>',
	'</tr>',
	'</table>',
	'<table border="0" cellpadding="0" cellspacing="0" width="100%">',
	'<tr>',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="10" height="40" alt=""></td>',
	'<td width="100%" style="font: normal 11px tahoma">TechTarget provides enterprise IT professionals with the information they need to perform their jobs - from developing strategy, to making cost-effective IT purchase decisions and managing their organizations\' IT projects - with its <a href="javascript:portfolioWindow(\'http://searchnetworking.techtarget.com/portfolioSites/0,296825,sid7,00.html\')" class="footerLink">network of technology-specific Web sites, events and magazines.</a></td>',
	'<td class="color1"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="8" height="1" alt=""></td>',
	'</tr>',
	'</table>',
	'<table border="0" cellspacing="0" cellpadding="0" width="100%">',
	'<tr class="colorFooter">',
	'<td rowspan="3"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="10" height="1" alt=""></td>',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="634" height="20" alt=""></td>',
	'<td background="http://media.techtarget.com/searchNetworking/images/background_lineTrio_onColorEF.gif"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="34" height="20" alt=""></td>',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="174" height="20" alt=""></td>',
	'<td rowspan="99" class="color1"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="8" height="1" alt=""></td>',
	'</tr>',
	'<tr class="colorFooter">',
	'<td valign="top">',
	'<table border="0" cellpadding="0" cellspacing="0" width="100%">',
	'<tr>',
	'<td style="font: normal 11px tahoma" valign="top" nowrap>');
	
	links = new Array();
	links.push('<a href="http://searchNetworking.techtarget.com/buyersGuideForVendors/0,289879,sid7,00.html" class="footerLink">For Advertisers</a>',
				'<a href="http://www.techtarget.com/mediakit/" class="footerLink">Media Kit</a>',
				'<a href="/ciodCalendar/0,296143,sid7,00.html" class="footerLink">Editorial Calendar</a>',
				'<a href="http://searchNetworking.techtarget.com/sitemap/0,296817,sid7,00.html" class="footerLink">Site Map</a>',
				'<a href="http://www.techtarget.com/" class="footerLink">TechTarget Corporate Web Site</a>',
				'<a href="http://events.techtarget.com/" class="footerLink">TechTarget Events</a>');
	box = box.concat(links.join('&nbsp;&nbsp;|&nbsp;&nbsp;'));	
	box.push('</td>',
	'</tr>',
	'</table>',
	'</td>',
	'<td background="http://media.techtarget.com/searchNetworking/images/background_lineTrio_onColorEF.gif"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="34" height="1" alt=""></td>',
	'<td valign="top">',
	'<table border="0" cellspacing="0" cellpadding="0" width="100%">',
	'<tr>',
	'<td rowspan="99"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="10" height="1" alt=""></td>',
	'<td colspan="3" align="left">',
	'<img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="35" height="1" alt="">',
	'<a href="http://www.techtarget.com"><img src="http://media.techtarget.com/digitalguide/images/Misc/footer_tt_logo_onColorEF.gif" width="77" height="74" border="0" alt="TechTarget - The IT Media ROI Experts"></a>',
	'</td>',
	'<td rowspan="99"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
	'</tr>',
	'<tr>',
	'<td colspan="3"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="15" alt=""></td>',
	'</tr>',
	'</table>',
	'</td>',
	'</tr>',
	'<tr class="colorFooter">',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="30" alt=""></td>',
	'<td background="http://media.techtarget.com/searchNetworking/images/background_lineTrio_onColorEF.gif"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="34" height="30" alt=""></td>',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="30" alt=""></td>',
	'</tr>',
	'</table>',
	'<table border="0" cellpadding="0" cellspacing="0" width="100%">',
	'<tr class="color6">',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="4" height="19" alt=""></td>',
	'<td width="100%"></td>',
	'<td background="http://media.techtarget.com/searchNetworking/images/background_lineTrio_onColor6.gif"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="34" height="19" alt=""></td>',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="174" height="19" alt=""></td>',
	'<td rowspan="99" class="color1"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="8" height="1" alt=""></td>',
	'</tr>',
	'<tr class="color3">',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="4" height="19" alt=""></td>',
	'<td width="100%"><span class="h2"><span class="textF">All Rights Reserved, <a href="http://searchNetworking.techtarget.com/copyright/0,289135,sid7,00.html" class="footerLink2"><span class="h2">Copyright 2000 - 2008</span></a>, TechTarget</span></span></td>',
	'<td background="http://media.techtarget.com/searchNetworking/images/background_lineTrio_onColor3.gif"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="34" height="24" alt=""></td>',
	'<td align="right"><a href="http://www.techtarget.com/html/privacy_policy.html" target="_blank" class="footerLink2"><span class="h2">Read our Privacy Policy</span></a><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="8" height="1" alt=""></td>',
	'</tr>',
	'</table>');
	return box.join("");
}


	function MEDIA_LINKS_DISPLAY_CODE_1() {
		var hasImage = 0;
		if (hasImage) {
			var mediaCode = "CW",
			links = new Array('<map name="headermap">'),
			popupWinName = "mediaPopup",
			popupWinProp = "width=388,height=388,menubar=no,resizable=no,status=no,titlebar=no,scrollbars=yes";
			switch (mediaCode) {
				case "MCW": links.push(
					'<area shape="rect" coords="52,32 98,43"'+
					' href="http://searchNetworking.techtarget.com/mediaPopup/0,295511,sid7_tab1,00.html" alt="Magazine"'+
					' target="'+popupWinName+'" onClick="window.open(\'about:blank\',\''+popupWinName+'\',\''+popupWinProp+'\')">',
					'<area shape="rect" coords="106,32 136,43"'+
					' href="http://searchNetworking.techtarget.com/mediaPopup/0,295511,sid7_tab2,00.html" alt="Conferences"'+
					' target="'+popupWinName+'" onClick="window.open(\'about:blank\',\''+popupWinName+'\',\''+popupWinProp+'\')">',
					'<area shape="rect" coords="144,32 192,43"'+
					' href="http://searchNetworking.techtarget.com/mediaPopup/0,295511,sid7_tab3,00.html" alt="Web Sites"'+
					' target="'+popupWinName+'" onClick="window.open(\'about:blank\',\''+popupWinName+'\',\''+popupWinProp+'\')">');
					break;
				case "MW": links.push(
					'<area shape="rect" coords="124,36 185,47"'+
					' href="http://searchNetworking.techtarget.com/mediaPopup/0,295511,sid7_tab1,00.html" alt="Magazine"'+
					' target="'+popupWinName+'" onClick="window.open(\'about:blank\',\''+popupWinName+'\',\''+popupWinProp+'\')">',
					'<area shape="rect" coords="193,36 252,47"'+
					' href="http://searchNetworking.techtarget.com/mediaPopup/0,295511,sid7_tab3,00.html" alt="Web Sites"'+
					' target="'+popupWinName+'" onClick="window.open(\'about:blank\',\''+popupWinName+'\',\''+popupWinProp+'\')">');
					break;
				case "CW": links.push(
					'<area shape="rect" coords="115,36 194,47"'+
					' href="http://searchNetworking.techtarget.com/mediaPopup/0,295511,sid7_tab2,00.html" alt="Conferences"'+
					' target="'+popupWinName+'" onClick="window.open(\'about:blank\',\''+popupWinName+'\',\''+popupWinProp+'\')">',
					'<area shape="rect" coords="202,36 261,47"'+
					' href="http://searchNetworking.techtarget.com/mediaPopup/0,295511,sid7_tab3,00.html" alt="Web Sites"'+
					' target="'+popupWinName+'" onClick="window.open(\'about:blank\',\''+popupWinName+'\',\''+popupWinProp+'\')">');
					break;
				case "W": links.push(
					'<area shape="rect" coords="159,36 218,47"'+
					' href="http://searchNetworking.techtarget.com/mediaPopup/0,295511,sid7_tab1,00.html" alt="Web Sites"'+
					' target="'+popupWinName+'" onClick="window.open(\'about:blank\',\''+popupWinName+'\',\''+popupWinProp+'\')">');
					break;
			} links.push('<area shape="default" nohref alt="">',
			'</map>',
			'<img src="http://media.techtarget.com/searchNetworking/images/header_mediaSections_CW.gif" width="208" height="56" ismap usemap="#headermap" alt="TechTarget Networking Media" border="0">');
			return links;
		} else return new Array('<img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="208" height="58" alt="" border="0">');
	}

 function OPEN_FIXED_WIDTH_TABLE_DISPLAY_CODE_3() {
	return '<table width="776" cellpadding="0" cellspacing="1" border="0" class="color6"><tr><td class="colorF" align="center">';
}
function OPEN_CENTER_PAGE() {
	return '<div align="center">';
}
function CLOSE_CENTER_PAGE() {
	return '</div>';
}
function HEADER_DISPLAY_CODE_3() {
	if((navigator.appName == "Netscape" && parseInt(navigator.appVersion) < 5) || WEBREPORTING == "off") {
	//do nothing
	} else document.write(WEB_REPORTING());
	if (memberUpdate == "on" && memUpd != -1 && memberUpdateOverride == -1) document.write(MEMBER_UPDATE());
	document.write(OPEN_CENTER_PAGE());
	if (PORTFOLIOBAND == "on" && JSdigitalGuideID != 63) document.write(PORTFOLIO_BAND());
	if (LEADERBOARD == "on") document.write(LEADER_BOARD());
	if (ISFIXEDWIDTH) document.write(OPEN_FIXED_WIDTH_TABLE());
	document.write(HEADER_CORE());
	if (HEADERNAV == "on") document.write(PAGE_NAVIGATION());
	if (HEADERSEARCH == "on" && JSdigitalGuideID != 9 && JSdigitalGuideID != 63) document.write(HEADER_SEARCH());
	else if (HEADERNAV == "on") document.write('<table border="0" cellspacing="0" cellpadding="0" width="100%">'+
	'<tr class="color0"><td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="3" alt=""></td></tr>'+
	'</table>');
	if (!ISHOME && SPONSORBANNER == "on") document.write(SPONSOR_BANNER());
	// MBOX Banner
	JSmboxBannerNameSafe = JSmboxBannerName.replace(/-/,"_");	
	if ((mboxEnabled == "on") && (eval(JSmboxBannerNameSafe) == "on")) {
			document.write(BANNER_MBOX());
	}
	document.write('<table border="0" cellpadding="0" cellspacing="0">'+
	'<tr>'+
	'<td width="100%"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="15" alt=""></td>'+
	'</tr>'+
	'</table>');
}

function PORTFOLIO_BAND_DISPLAY_CODE_3() {
	var pfoBand = new Array('<table border="0" cellpadding="1" cellspacing="0" width="776"><tr><td class="color9">',
	'<table border="0" cellpadding="0" cellspacing="0" class="crmColorPortfolioBand" width="100%">',
	'<tr class="crmColorPortfolioBand"><td colspan="4"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="3"></td></tr>',
	'<tr class="crmColorPortfolioBand">',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="5" height="15"></td>',
	'<td width="100%"><span class="a2"><span class="crmTxOnColorPortfolioBand"><b>Explore the TechTarget Network at </b>'+
	'<a href="http://searchtechtarget.techtarget.com/" class="crmTxOnColorPortfolioBand"><span class="a2">SearchTechTarget.com</span></a>.</span>'+
	'</span></td>',
	'<td nowrap align="right" class="a2">'+((USERINFO == "on") ? '<span class="crmTxOnColorPortfolioBand">'+((loggedIn != -1) ? '<i>You\'re logged in as:</i> <b>'+DisplayName+'</b>&nbsp;'+
	'<a href="http://searchNetworking.techtarget.com/register/1,289568,sid7,00.html" class="crmTxOnColorPortfolioBand"><span class="a2">Edit your Profile</span></a>&nbsp;<span class="yellow">|</span>&nbsp;'+
	'<a href="'+((ALTLOGOUT != "no") ? ALTLOGOUT : 'http://searchNetworking.techtarget.com/logout/1,289500,sid7,00.html')+'" class="crmTxOnColorPortfolioBand"><span class="a2">Log-out</span></a>' :
	'<a href="http://searchNetworking.techtarget.com/register/1,289568,sid7,00.html" class="crmTxOnColorPortfolioBand"><span class="a2">Activate your FREE membership today</span></a>&nbsp;<span class="yellow">|</span>&nbsp;'+
	'<a href="'+((ALTLOGIN != "no") ? ALTLOGIN : 'http://searchNetworking.techtarget.com/login/1,289498,sid7,00.html')+'" class="crmTxOnColorPortfolioBand"><span class="a2">Log-in</span></a>')+'</span>' : '&nbsp;')+
	'</td>',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="5" height="1"></td>',
	'</tr>',
	'<tr class="crmColorPortfolioBand"><td colspan="4"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="3"></td></tr>',
	'<tr class="color1"><td colspan="4"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1"></td></tr>',
	'<tr class="crmColorPortfolioBand"><td colspan="4"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1"></td></tr>',
	'</table></td></tr></table>');
	return pfoBand.join("");
}

function LEADER_BOARD_DISPLAY_CODE_3() {
		var board = new Array('<table border="0" cellpadding="0" cellspacing="0" width="776">',
		'<tr class="colorF">');
		if (!ISFIXEDWIDTH) board.push('<td width="50%" rowspan="99"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="2" height="1" alt=""></td>');
		board.push('<td colspan="7"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="9" alt=""></td>',
		'<td width="100%" rowspan="99"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="2" height="1" alt=""></td>',
		'</tr>','<tr class="colorF">',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="19" height="1" alt=""></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="2" height="1" alt=""></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="728" height="1" alt=""></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="2" height="1" alt=""></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="19" height="1" alt=""></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'</tr>','<tr>',
		'<td class="colorF"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'<td align="center" valign="top">'+
		'<img src="http://media.techtarget.com/searchNetworking/images/white_ad_sideHeader_728_90.gif" width="19" height="90" border="0" alt=""></td>',
		'<td class="colorF"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'<td>'+PAGE_AD(12)+'</td>',
		'<td class="colorF"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'<td align="center" valign="top">'+
		'<img name="toggle728x90" src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="19" height="90" border="0" alt=""></td>',
		'<td class="colorF"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'</tr>','<tr class="colorF">',
		'<td colspan="7"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'</tr>','<tr class="colorF">',
		'<td colspan="7"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="9" alt=""></td>',
		'</tr>',
		'</table>');
		return board.join("");
}

function HEADER_CORE_DISPLAY_CODE_3() {
	var hc = new Array('<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr>'); 
    hc.push('    <td width="283" class="color1"><a href="http://searchNetworking.techtarget.com/home/0,289692,sid7,00.html"><img src="http://media.techtarget.com/searchNetworking/images/header_logo2.gif" width="283" height="68" border="0"></a></td>');
    hc.push('    <td width="491" background="http://media.techtarget.com/searchNetworking/images/header_right_fade.gif" align="right">'); 
    hc.push('      <table border="0" cellspacing="0" cellpadding="0">');
    hc.push('        <tr>'); 
    hc.push('          <td nowrap><img src="http://media.techtarget.com/searchNetworking/images/arrow_content_item.gif" width="5" height="5" align="absmiddle"><a href="http://searchNetworking.techtarget.com/news/0,289141,sid7,00.html" class="contentNavLink">NEWS</a></td>');
    hc.push('          <td rowspan="2" width="26"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="26" height="40" alt=""></td>');
    hc.push('          <td nowrap><img src="http://media.techtarget.com/searchNetworking/images/arrow_content_item.gif" width="5" height="5" align="absmiddle"><a href="http://searchNetworking.bitpipe.com/?asrc=SS_NAV_WP" class="contentNavLink">WHITE ');
    hc.push('            PAPERS</a></td>');
    hc.push('          <td rowspan="2" width="26"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="26" height="40" alt=""></td>');
    hc.push('          <td nowrap><img src="http://media.techtarget.com/searchNetworking/images/arrow_content_item.gif" width="5" height="5" align="absmiddle"><a href="http://searchNetworking.techtarget.com/webcasts/0,295024,sid7,00.html?asrc=SS_NAV_WC" class="contentNavLink">WEBCASTS</a></td>');
    hc.push('          <td rowspan="2" width="26"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="26" height="40" alt=""></td>');
	
    hc.push('          <td nowrap><img src="http://media.techtarget.com/searchNetworking/images/arrow_content_item.gif" width="5" height="5" align="absmiddle"><a href="http://searchNetworking.techtarget.com/tips/0,289484,sid7,00.html" class="contentNavLink">NEWSLETTERS</a></td>');
	 hc.push('          <td rowspan="2" width="26"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="26" height="40" alt=""></td>');
    hc.push('        </tr>');
    hc.push('       <tr>'); 
    hc.push('          <td nowrap><img src="http://media.techtarget.com/searchNetworking/images/arrow_content_item.gif" width="5" height="5" align="absmiddle"><a href="http://searchNetworking.techtarget.com/glossary/0,294242,sid7,00.html" class="contentNavLink">GLOSSARY</a></td>');
    hc.push('         <td nowrap><img src="http://media.techtarget.com/searchNetworking/images/arrow_content_item.gif" width="5" height="5" align="absmiddle"><a href="http://searchNetworking.bitpipe.com/productdirectory.html?asrc=SS_NAV_PR" class="contentNavLink">PRODUCTS</a></td>');
	
	hc.push('          <td nowrap><img src="http://media.techtarget.com/searchNetworking/images/arrow_content_item.gif" width="5" height="5" align="absmiddle"><a href="http://searchNetworking.techtarget.com/expert/Knowledgebase/0,289622,sid7,00.html" class="contentNavLink">EXPERTS</a></td>');
  	
	hc.push('          <td nowrap><img src="http://media.techtarget.com/searchNetworking/images/arrow_content_item.gif" width="5" height="5" align="absmiddle"><a href="http://searchNetworking.techtarget.com/rssLanding/0,295701,sid7,00.html" class="contentNavLink">RSS</a></td>');
    hc.push('        </tr>');
    hc.push('      </table>');
    hc.push('    </td>');
    hc.push('</tr></table>');
	return hc.join("");
}

function HEADER_SEARCH_DISPLAY_CODE_3() {
	return new Array('<table border="0" cellspacing="0" cellpadding="0" width="100%">',
	'<form name="search" action="http://searchNetworking.techtarget.com/search/1,293876,sid7,00.html" method="get">',
	'<tr>',
	'<td class="colorEF" width="8"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="8" height="26" alt=""></td>',
	'<td class="colorEF" width="1%"><input type="text" name="query" size="8" class="i3width125"></td>',
	'<td width="7" class="colorEF"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="7" height="1" alt=""></td>',
	'<td width="48" class="colorEF"><input type="image" src="http://media.techtarget.com/digitalguide/images/Misc/button_search_cccccc.gif"></td>',
	'<td nowrap class="colorEF">&nbsp;&nbsp;&nbsp;<a href="http://searchNetworking.techtarget.com/integratedSearchAdvanced/0,289518,sid7,00.html" class="searchLink">Advanced</a>&nbsp;'+
	'<span class="text9">|</span>&nbsp;<a href="http://searchNetworking.techtarget.com/siteIndex/0,294352,sid7,00.html" class="searchLink">Site Index</a></td>',
    '<td class="colorEF" align="right"><span class="searchPowerTx">Search Powered by&nbsp;&nbsp;'+
	'<a href="http://www.google.com"><img src="http://media.techtarget.com/searchNetworking/images/google_logo.gif" width="56" height="26" align="absmiddle" border="0" alt="Search Powered by Google"></a></span></td>',
	'<td class="colorEF" width="9"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="8" height="26" alt=""></td>',
	'</tr>',
	'</form>',
	'</table>').join("");
}

function PAGE_FOOTER_BOTTOM_DISPLAY_CODE_3() {
	if (FOOTERMEDIABAR == "on" && typeof FOOTER_MEDIABAR == "function") document.write(FOOTER_MEDIABAR());
	document.write('<table border="0" cellspacing="0" cellpadding="0" width="100%">'+
	'<tr class="color0">'+
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="3" alt=""></td>'+
	'</tr>'+
	'</table>');
	if ((FOOTERLINKS == "on" || FOOTERSEARCH == "on") && JSdigitalGuideID != 63) {
		document.write('<table border="0" cellpadding="0" cellspacing="0" width="100%">'+
		'<tr class="color1">'+
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="5" height="1"></td>'+
		'<td width="100%"'+((FOOTERLINKS == "on") ? ' height="29" class="textOnColor1">'+FOOTER_LINKS() : '>&nbsp;')+'</td>'+
		'<td'+((FOOTERSEARCH == "on" && JSdigitalGuideID != 9) ? ' class="color1">'+FOOTER_SEARCH() : '>&nbsp;')+'</td>'+
		'</tr>'+
		'<tr class="color1">'+
		'<td colspan="3"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="5"></td>'+
		'</tr>'+
		'</table>');
	} else {
		document.write('<table border="0" cellpadding="0" cellspacing="0" width="100%">'+
		'<tr class="color1">'+
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="7"></td>'+
		'</tr>'+
		'</table>');
	}
	document.write(PORTFOLIO_BOX());
	document.write(LIFTSTUDY_QUEUE());
	if (ISFIXEDWIDTH) document.write(CLOSE_FIXED_WIDTH_TABLE_DISPLAY_CODE_3());
	document.write(CLOSE_CENTER_PAGE());
	if (typeof f360I_TRACKING == "function") document.write(f360I_TRACKING());
}

function CLOSE_FIXED_WIDTH_TABLE_DISPLAY_CODE_3() {
	return '</td></tr></table>';
} function OPEN_FIXED_WIDTH_TABLE_DISPLAY_CODE_4() {
	var fwTable = new Array('<table border="0" cellspacing="0" cellpadding="0" width="776"><tr>',
		'<td class="color3" rowspan="99"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'<td class="color3" colspan="1"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'<td class="color3" rowspan="99"><img src="/spacer.gif" width="1" height="1" alt=""></td>',
		'</tr><tr><td class="colorF" width="100%">');
	return fwTable.join("");
}

function PORTFOLIO_BAND_DISPLAY_CODE_4() {
	var portStyle = 'newColorPortfolioBand'
	var textStyle = 'newTxOnColorPortfolioBand'
	var pfoBand = new Array('<table border="0" cellpadding="0" cellspacing="0" class="'+portStyle+'" width="100%">',
	'<tr class="'+portStyle+'"><td colspan="4"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="3"></td></tr>',
	'<tr class="'+portStyle+'">',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="5" height="15"></td>',
	'<td width="100%"><span class="a2"><span class="'+textStyle+'"><b>Explore the TechTarget Network at </b>'+
	'<a href="http://searchtechtarget.techtarget.com/" class="'+textStyle+'"><span class="a2">SearchTechTarget.com</span></a>.</span>'+
	'</span></td>',
	'<td nowrap align="right" class="a2">'+((USERINFO == "on") ? '<span class="'+textStyle+'">'+((loggedIn != -1) ? 'You\'re logged in as: <b>'+DisplayName+'</b>&nbsp;'+
	'<a href="http://searchNetworking.techtarget.com/register/1,289568,sid7,00.html" class="'+textStyle+'"><span class="a2">Edit your Profile</span></a>&nbsp;<span class="yellow">|</span>&nbsp;'+
	'<a href="'+((ALTLOGOUT != "no") ? ALTLOGOUT : 'http://searchNetworking.techtarget.com/logout/1,289500,sid7,00.html')+'" class="'+textStyle+'"><span class="a2">Log-out</span></a>' :
	'<a href=javascript:buildOmedaURL("HL15") class="'+textStyle+'"><span class="a2">Activate your FREE membership today</span></a>&nbsp;<span class="yellow">|</span>&nbsp;'+
	'<a href="'+((ALTLOGIN != "no") ? ALTLOGIN : 'http://searchNetworking.techtarget.com/login/1,289498,sid7,00.html')+'" class="'+textStyle+'"><span class="a2">Log-in</span></a>')+'</span>' : '&nbsp;')+
	'</td>',
	'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="5" height="1"></td>',
	'</tr>',
	'<tr class="'+portStyle+'"><td colspan="4"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="2"></td></tr>',
	'</table>');
	return pfoBand.join("");
}

function HEADER_DISPLAY_CODE_4() {
	if((navigator.appName == "Netscape" && parseInt(navigator.appVersion) < 5) || WEBREPORTING == "off") {
	//do nothing
	} else document.write(WEB_REPORTING());
	if (memberUpdate == "on" && memUpd != -1 && memberUpdateOverride == -1) document.write(MEMBER_UPDATE());
	document.write(OPEN_CENTER_PAGE());
	if (ISFIXEDWIDTH) document.write(OPEN_FIXED_WIDTH_TABLE());
	if (PORTFOLIOBAND == "on") document.write(PORTFOLIO_BAND());
	if (LEADERBOARD == "on") document.write(LEADER_BOARD());
	document.write(HEADER_CORE());
	if (HEADERNAV == "on") {
		document.write(PAGE_NAVIGATION_DISPLAY_CODE_4('top'));
	}
	if (HEADERSEARCH == "on") document.write(HEADER_SEARCH());
	else if (HEADERNAV == "on") document.write('<table border="0" cellspacing="0" cellpadding="0" width="100%">'+
	'<tr class="color0"><td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="3" alt=""></td></tr>'+
	'</table>');
	if (!ISHOME && SPONSORBANNER == "on") document.write(SPONSOR_BANNER());
	// MBOX Banner
	JSmboxBannerNameSafe = JSmboxBannerName.replace(/-/,"_");	
	if ((mboxEnabled == "on") && (eval(JSmboxBannerNameSafe) == "on")) {
			document.write(BANNER_MBOX());
	}		
}

function LEADER_BOARD_DISPLAY_CODE_4() {
	var board = new Array('<table border="0" cellpadding="0" cellspacing="0" width="776">',
		'<tr class="color6">');
		if (!ISFIXEDWIDTH) board.push('<td width="50%" rowspan="99"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="2" height="1" alt=""></td>');
		board.push('<td colspan="8"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="9" alt=""></td>',
		'<td width="100%" rowspan="99"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="2" height="1" alt=""></td>',
		'</tr><tr class="color6">',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="9" height="1" alt=""></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="19" height="1" alt=""></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="728" height="1" alt=""></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="2" height="1" alt=""></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="9" height="1" alt=""></td>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'</tr>','<tr>',
		'<td class="color6"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'<td class="color6"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'<td align="center" valign="top"><img name="toggle728x90" src="http://media.techtarget.com/searchNetworking/images/gray_ad_sideHeader_728_90.gif" width="19" height="90" border="0" alt=""></td>',
		'<td class="color6"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'<td>'+PAGE_AD(12)+'</td>',
		'<td class="color6"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'<td class="color6"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'<td class="color6"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'</tr>','<tr class="color6">',
		'<td colspan="8"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'</tr><tr class="color6">',
		'<td colspan="8"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'</tr><tr class="color6">',
		'<td colspan="8"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="9" alt=""></td>',
		'</tr>',
		'</table>');
		return board.join("");
		
}

function HEADER_CORE_DISPLAY_CODE_4() {
	var hc = new Array('<table border="0" cellspacing="0" cellpadding="0" width="100%" style="background-image: url(\'http://media.techtarget.com/searchNetworking/images/header_bg2.gif\'); background-repeat: no-repeat; border:0">',
		'<tr><td class="color3" colspan="3"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="1" alt=""></td>',
		'</tr><tr>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="4" height="1" alt=""></td>',
		'<td width="100%" valign="top"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="10" alt=""><br><a href="http://searchNetworking.techtarget.com/home/0,289692,sid7,00.html"><img src="http://media.techtarget.com/searchNetworking/images/header_logo2.gif" border="0" alt=""></a></td>',
		'<td rowspan="2" align="left" valign="top">',
	 '</tr><tr>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="4" height="1" alt=""></td>',
		'<td valign="top">',
		'<img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="93" height="10" alt="">',
		'<a href="http://www.techtarget.com/"><img src="http://media.techtarget.com/searchNetworking/images/header_tagline2.gif" alt="Part of the TechTarget Network of Enterprise IT Web Sites" border="0"></a></td>',
		'</tr>','<tr>',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="5" alt=""></td>',
		'</tr></table>');
		return hc.join("");
}

function HEADER_SEARCH_DISPLAY_CODE_4() {
	return new Array('<table border="0" cellspacing="0" cellpadding="0" width="100%">',
	'<form name="search" action="http://searchNetworking.techtarget.com/search/1,293876,sid7,00.html" method="get">',
	'<tr>',
	'<td class="searchBar" width=8><IMG height=26 alt="" src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width=8></td>',
	'<td class="searchBar" width=25><span class=v1>',
	'<span class="searchBarText"><B>SEARCH</B></span></span><span class=a1>',
	'<span class="searchBarText">&nbsp;:&nbsp;</span></span></TD>',
    '<TD class="searchBar" width="1%">',
	'<INPUT type="text" name="query" class=i3width250 size=8></TD>',
    '<td class=searchBar width=5><IMG height=1 alt="" src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width=5></TD>',
	'<TD class=searchBar width=11><INPUT type=image src="http://media.techtarget.com/searchNetworking/images/search_arrow.gif"></TD>',
	'<TD class=searchBar noWrap width=150>&nbsp;&nbsp;&nbsp;',
	'<A class=searchBarText href="http://searchNetworking.techtarget.com/integratedSearchAdvanced/0,289518,sid7,00.html"><span class=a1>Advanced Search</span></A>',
	'&nbsp;<span class=text9>|</span>&nbsp;<A class=searchBarText href="http://searchNetworking.techtarget.com/siteIndex/0,294352,sid7,00.html">',
	'<span class=a1>Site Index</span></A></TD>',
    '<TD class=searchBar align=right width=300><span class=searchPowerTx>Powered by:&nbsp;<A href="http://www.google.com/">',
	'<IMG style="VERTICAL-ALIGN: middle" height=32 alt="Search Powered by Google" src="http://media.techtarget.com/searchNetworking/images/google_logo.gif" width=75 border=0></A></span></TD>',
    '<TD class=searchBar width=8><IMG height=26 alt="" src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width=8></TD>',
	'</TR></form></TABLE>').join("");
}

function PAGE_NAVIGATION_DISPLAY_CODE_4(position) {
	var positionAttrib;
	if(position == 'top') positionAttrib = ' id="menuBar"';
	else positionAttrib = '';
		var navClass = 'colorNav'
		var nav = new Array('<div class="colorNav">',
		'<table' + positionAttrib + ' border="0" cellspacing="0" cellpadding="0">',
		'<tr class="colorNav">',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="8" height="1" alt=""></td>'), links = new Array();
		if (!ISHOME) links.push('<td><a href="http://searchNetworking.techtarget.com/home/0,289692,sid7,00.html"><img src="http://media.techtarget.com/searchNetworking/images/hn_home.gif" width="32" height="19" alt="Home" border="0"></a></td>');
		  links.push('<td><a href="http://searchNetworking.techtarget.com/news/0,289141,sid7,00.html"><img src="http://media.techtarget.com/searchNetworking/images/hn_news.gif" width="32" height="19" border="0" alt="News"></a></td>');
		   links.push('<td><a href="http://searchNetworking.techtarget.com/topicsMain/0,295490,sid7,00.html"><img src="http://media.techtarget.com/searchNetworking/images/hn_topics.gif" width="40" height="19" border="0" alt="Topics"></a></td>');
		         links.push('<td><a href="http://searchNetworking.techtarget.com/webcasts/0,295024,sid7,00.html?asrc=SS_NAV_WC"><img src="http://media.techtarget.com/searchNetworking/images/hn_webcasts.gif" width="63" height="19" border="0" alt="Webcasts"></a></td>');
		     links.push('<td><a href="http://searchNetworking.bitpipe.com/?asrc=SS_NAV_WP"><img src="http://media.techtarget.com/searchNetworking/images/hn_whitepapers.gif" width="80" height="19" border="0" alt="White Papers"></a></td>');
		   links.push('<td><a href="http://searchNetworking.bitpipe.com/productdirectory.html?asrc=SS_NAV_PR"><img src="http://media.techtarget.com/searchNetworking/images/hn_products.gif" width="60" height="19" border="0" alt="Products"></a></td>');
		    nav.push(links.join('<td align="center" width="5%"><img src="http://media.techtarget.com/searchNetworking/images/hn_separator.gif" width="5" height="19" alt=""></td>'));
		nav.push('<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="8" height="1" alt=""></td>','</tr>','</table>','</div>');
		return nav.join("");
	}

function PAGE_FOOTER_BOTTOM_DISPLAY_CODE_4() {
		if (FOOTERMEDIABAR == "on" && typeof FOOTER_MEDIABAR == "function") document.write(FOOTER_MEDIABAR());
		if (FOOTERNAV == "on") {
			document.write(PAGE_NAVIGATION_DISPLAY_CODE_4('bottom'));
		}
		if (FOOTERSEARCH == "on") {
			document.write(HEADER_SEARCH());
		}
		if (FOOTERLINKS == "on") {
			document.write('<table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#c3c3c3">'+
			'<tr><td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="5" height="1" alt=""></td>'+
			'<td width="100%" class="textOnColor1">'+
			'<img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="7" alt=""><br>'+
			'<img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="3" height="1" alt="">'+FOOTER_LINKS_DISPLAY_CODE_4()+'</td></tr></table>');
		}
		document.write(PORTFOLIO_BOX());
		document.write(LIFTSTUDY_QUEUE());
		if (ISFIXEDWIDTH) document.write(CLOSE_FIXED_WIDTH_TABLE());
		document.write(CLOSE_CENTER_PAGE());		
		if (typeof f360I_TRACKING == "function") document.write(f360I_TRACKING());
	}
	
function FOOTER_LINKS_DISPLAY_CODE_4() {
	var links = new Array('<a href="http://searchNetworking.techtarget.com/aboutUs/0,289153,sid7,00.html" class="text6"><span class="a2">About Us</span></a>',
	'<a href="http://searchNetworking.techtarget.com/contactUs/0,289157,sid7,00.html" class="text6"><span class="a2">Contact Us</span></a>',
	'<a href="http://searchNetworking.techtarget.com/buyersGuideForVendors/0,289879,sid7,00.html" class="text6"><span class="a2">For Advertisers</span></a>',
	'<a href="http://searchNetworking.techtarget.com/forBusinessPartners/0,289198,sid7,00.html" class="text6"><span class="a2">For Business Partners</span></a>',
	'<a href="http://searchNetworking.techtarget.com/siteIndex/0,294352,sid7,00.html" class="text6"><span class="a2">Site Index</span></a>',
	'<a href="http://searchNetworking.techtarget.com/rssLanding/0,295701,sid7,00.html" class="text6"><span class="a2">RSS</span></a>');
	return links.join('&nbsp;&nbsp;|&nbsp;&nbsp;');
}	
 


	
	function buildOmedaURL(p)
{
	var omedaBaseURL = '';				
	var currentURL = window.location.search;
	if(currentURL.indexOf('Offer=') != -1)
		var offerValue = currentURL.substring(currentURL.indexOf('Offer=')+6,currentURL.length);
	else
		var offerValue = '';
	var omedaURL = omedaBaseURL + '?Offer=' + p + offerValue + '&p=' + p + offerValue + '&ttURL=http%3A%2F%2FsearchNetworking%2Etechtarget%2Ecom%2Fregistration%2Fomeda%2F1%2C%2Cmag3%2C00%2Ehtml&nextURL=http%3A%2F%2FsearchNetworking%2Etechtarget%2Ecom%2FmagConfirm%2F';
	window.location = omedaURL;			
}
 if (typeof Array.prototype.push != "function") Array.prototype.push = function () {
		var args = Array.prototype.push.arguments, len = args.length;
		for (var i = 0; i < len; i++) this[this.length] = args[i];
		return this.length;
	}
	

   /* Cookie Functions */

	var allcookies = document.cookie;

	function cookieExists(name) {return document.cookie.indexOf(name + "=")}

	function getCookieValue(name) {
		var cookie = document.cookie;
		var pos = cookie.indexOf(name + "=");
		if (pos != -1) {
			var start = pos + name.length + 1;
			var end = cookie.indexOf(";",start);
			if (end == -1) end = cookie.length;
			var value = cookie.substring(start, end);
			return value;
		} else {
			return "";
		}
	}

	function getChipValue(cookiename,chipname) {
		var cookievalue = getCookieValue(cookiename);
		if (cookievalue != "") {
			if (cookievalue.indexOf(chipname) != -1) {
				var start = unescape(cookievalue.substring(cookievalue.indexOf(chipname) + chipname.length));
				var end = start.substring(0,start.indexOf(";"));
				if (!end) end = start.substring(0, start.length);
				var regexp = /(\W)/g;;
				var value = end.replace(regexp," ");
				return value;
			} else {
				return "";
			}
		} else {
			return "";
		}
	}

	function setSessionCookie (name, value) {
		document.cookie = name + "=" + value + ";path=/" + ";domain=.techtarget.com";
	}
	
	function setCookie(name, value, expires, path, domain, secure) {
	    document.cookie = name + "=" + escape(value) + 
	    ((expires) ? "; expires=" + expires : "") +
	    ((path) ? "; path=" + path : "") +
	    ((domain) ? "; domain=" + domain : "") +
	    ((secure) ? "; secure" : "");
	    return true;
	}

	function getDisplayName() {return getChipValue("Datav2", "DispName")}
	function getHandle() {return getChipValue("Datav2", "Handle")}

  /* Login and User Info Section */
	var allcookies = document.cookie;
	var indexLogin = allcookies.indexOf("Datav2");
	var indexProps = allcookies.indexOf("Datav2");
	var indexProps2 = allcookies.indexOf("uidLoggedIn");
	var SiteList = unescape(allcookies.substring(allcookies.indexOf("Site", indexProps)+4));
	var thisSite = SiteList.indexOf(",7,");
	var loggedIn = (indexProps != -1 && thisSite != -1) ? 1 : -1;
	var uidLoggedIn = (indexProps2 != -1 && thisSite != -1) ? 1 : -1;
	var indexIPC = getCookieValue("IPC");
	var ipcLoggedIn = (indexIPC != "") ? 1 : -1;	
	var beginName = unescape(allcookies.substring(allcookies.indexOf("DispName",indexProps)+8));
	var endName = beginName.substring(0,beginName.indexOf(";"));
	var regexp = /(\+)/g;;
	var DisplayName = endName.replace(regexp," ");
	var ttUser = (indexLogin != -1 && indexProps != -1) ? 1 : -1;

	/* magazine-based access */
	var accessMONYY = getChipValue("magAccess","sid7");
	var validAccessValues = '';
	if (accessMONYY == '') var userContentAccess = false;
	else if (validAccessValues.indexOf(accessMONYY) != -1)
		var userContentAccess = true;
		else var userContentAccess = false;
	
	
	/* Offer cookie */
	var locationOffer = document.location.search.indexOf("Offer=");
	if (locationOffer != -1) {
	    var Offer = document.location.search.substring(locationOffer+6,document.location.search.length);
		if (Offer.indexOf("&") != -1) {
			Offer = Offer.substring(0,Offer.indexOf("&"));
		}
	    var underscoreOffer = "-"+Offer;
	    setSessionCookie("Offer",Offer);
	} else {
	    var underscoreOffer = "";
	}

	/* Turn off interstitials if URL parameter int=off */
	var interstitialSwitchValue = "on";
	var interstitialSwitch = document.location.search.indexOf("int=");
	if (interstitialSwitch != -1) {
		interstitialSwitchValue = document.location.search.substring(interstitialSwitch+4,document.location.search.length);
		if (interstitialSwitchValue.indexOf("&") != -1) {
			interstitialSwitchValue = interstitialSwitchValue.substring(0,interstitialSwitchValue.indexOf("&"));
		}
	}

  /* Member Update Section */
	var memUpd = -1;
	var memberUpdate = "on";
	var memberUpdateOverride = (typeof JSmemberUpdateOverride == "undefined") ? -1 : JSmemberUpdateOverride;
	if (memberUpdate == "on" && loggedIn == 1) {
		var mu1 = getCookieValue("mu1");
		if (mu1 == "") memUpd = 1;
		if (mu1 != 1 && mu1 != "") {
			var oneDay = (24*(60*(60*1000)));
			var cDate = (new Date(mu1)).getTime();
			var tDate = cDate+oneDay;
			var nowDate = (new Date()).getTime();
			if (nowDate > tDate) memUpd = 1;
		}
	}

  /* Lift Study Section */
	var LSvalue = "";
	var LSuser = "";
	var lsbool = "";
	if (allcookies.indexOf("LS=") != -1 && JSadCategory != "") {
		LSvalue = getCookieValue("LS");
		LSuser = LSvalue.substr(LSvalue.indexOf(":")+1);
		LSvalue = LSvalue.substr(0,LSvalue.indexOf(":"));
		if (LSvalue.substring(LSvalue.length-1,LSvalue.length) == "A") {
			lsbool = "true";
		}
		if (allcookies.indexOf("LSA=") == -1 && lsbool == "true") {
			setSessionCookie("LSA",1);
		} else {
			if (getCookieValue("LSA") == 1 && lsbool == "true") {
				setSessionCookie("LSA",2);
			}
		}
	}

  /* Variables Section */
	var JSdigitalGuideID = "7";
	var siteDisplayCode = 0;
	var ISHOME = (typeof JSisHomePage == "undefined") ? false : eval(JSisHomePage);
	var ISEXTERNAL = (typeof JSexternal == "undefined") ? false : eval(JSexternal);
	var ISFIXEDWIDTH = (typeof JSfixedWidth == "undefined") ? true : eval(JSfixedWidth);
	var PORTFOLIOBAND = (typeof JSportfolioStrip == "undefined") ? "on" : JSportfolioStrip;
	var USERINFO = (typeof JSuserInfo == "undefined") ? "on" : JSuserInfo;
	var ALTLOGIN = (typeof JSlinkLogin == "undefined") ? "no" : JSlinkLogin;
	var ALTLOGOUT = (typeof	JSlinkLogout == "undefined") ? "no" : JSlinkLogout;
	var LOGO = (typeof JSlogo == "undefined") ? "on" : JSlogo;
	var BYLINE = (typeof JSbyline == "undefined") ? "on" : JSbyline;
	var MEDIALINKS = (typeof JSmediaLinks == "undefined") ? "on" : JSmediaLinks;
	var LEADERBOARD = (typeof JSleaderBoard == "undefined") ? "off" : JSleaderBoard;
	var HEADERNAV = (typeof JSnavHeader == "undefined") ? "on" : JSnavHeader;
	var nsSiteDgROM = "off";
	var ROLLOVERMENUS = (typeof JSrolloverMenus == "undefined") ? nsSiteDgROM : (nsSiteDgROM == "on") ? JSrolleverMenus : "off";
	var HEADERSEARCH = (typeof JSsearchHeader == "undefined") ? "on" : JSsearchHeader;
	var SPONSORBANNER = (typeof JSsponsorBanner == "undefined") ? "off" : JSsponsorBanner;
	var FOOTERMEDIABAR = (typeof JSfooterMediaBar == "undefined") ? "on" : JSfooterMediaBar;
	var FOOTERNAV = (typeof JSnavFooter == "undefined") ? "on" : JSnavFooter;
	var FOOTERLINKS = (typeof JSoptlinksFooter == "undefined") ? "on" : JSoptlinksFooter;
	var FOOTERSEARCH = (typeof JSsearchFooter == "undefined") ? "on" : JSsearchFooter;
	var PORTFOLIOBOX = (typeof JSportfolioFooter == "undefined") ? "on" : JSportfolioFooter;
	var PAGE_LOADED = false; //Cross-browser global indicator for page readyState
	if (typeof adDcopt == "undefined") var adDcopt = "ist";
	var INTERSTITIAL = (typeof JSadInterstitial == "undefined") ? "off" : JSadInterstitial;
	if (INTERSTITIAL == "on" && interstitialSwitchValue == "off") INTERSTITIAL = "off";
	if (INTERSTITIAL == "off") adDcopt = "";
	var ipcON = "on";
	var clickThruLive = 'off';
	var searchTest = 'on';
	var mboxEnabled = 'on';
	var JSmboxBannerName = (typeof JSmboxBannerName == "undefined") ? "" : JSmboxBannerName;
	var JSmboxGutterName = (typeof JSmboxGutterName == "undefined") ? "" : JSmboxGutterName;
	
	var isNS = 0, isIE = 0, isOP = 0, isXX = 0, apV = 1;
var isMac = 0, isWin = 0, isX = 0;
var isDHTML = 0, isID = 0, isAll = 0, isLayers = 0;
if (navigator.userAgent.indexOf('Opera') != -1)
{isOP = 1;
var op = navigator.userAgent.indexOf('Opera') + 6;
apV = parseFloat(navigator.userAgent.substring(op));
if (isNaN(apV)) apV = parseFloat(navigator.appVersion);}
else if (navigator.appName == "Netscape")
{isNS = 1;
var ns = navigator.userAgent.lastIndexOf('/') + 1;
apV = parseFloat(navigator.userAgent.substring(ns));
if ((isNaN(apV)) || (apV > 10))
apV = parseFloat(navigator.appVersion);}
else if (navigator.appName == "Microsoft Internet Explorer")
{isIE = 1;
var ie = navigator.appVersion.indexOf('MSIE') + 5;
apV = parseFloat(navigator.appVersion.substring(ie));}
else
{isXX = 1;
apV = parseFloat(navigator.appVersion);}
if (navigator.appVersion.indexOf('Macintosh') != -1) isMac = 1;
else if (navigator.appVersion.indexOf('Windows') != -1) isWin = 1;
else isX = 1;
if ((isMac) && (document.all)) isAll = 1, isDHTML = 1;
else if (document.getElementById) isID = 1, isDHTML = 1;
else if (document.all) isAll = 1, isDHTML = 1;
else if (document.layers) isLayers = 1, isDHTML = 1;
function getObj(objID) {
if (typeof objID == "string") {
if (isID) return (document.getElementById(objID));
if (isAll) return (document.all[objID]);
if (isLayers) return (document.layers[objID]);
}}
function getStyle(obj,cssProp) {
var cssValue = obj.style[cssProp];
if (!cssValue)
if (document.defaultView)
cssValue = document.defaultView.
getComputedStyle(obj,null).getPropertyValue(cssProp);
else if (obj.currentStyle)
cssValue = obj.currentStyle[cssProp];
return (cssValue);
}
function findLeft(obj) {
if ((isAll) && (obj.clientLeft)) return (obj.clientLeft);
if ((isLayers) && (obj.pageX)) return (obj.pageX);
var pos;
if (getStyle(obj,'position') == "absolute") {
pos = parseFloat(getStyle(obj,'left'));
if (!isNaN(pos)) return (pos);
pos = parseFloat(getStyle(obj,'pixelLeft'));
if (!isNaN(pos)) return (pos);
}
pos = 0;
if (obj.offsetParent)
while (obj.offsetParent) {
pos += obj.offsetLeft;
obj = obj.offsetParent;
}
else if (obj.x) pos += obj.x;
return (pos)
}
function findTop(obj) {
if ((isAll) && (obj.clientTop)) return (obj.clientTop);
if ((isLayers) && (obj.pageY)) return (obj.pageY);
var pos;
if (getStyle(obj,'position') == "absolute") {
pos = parseFloat(getStyle(obj,'top'));
if (!isNaN(pos)) return (pos);
pos = parseFloat(getStyle(obj,'pixelTop'));
if (!isNaN(pos)) return (pos);
}
pos = 0;
if (obj.offsetParent)
while (obj.offsetParent) {
pos += obj.offsetTop;
obj = obj.offsetParent;
}
else if (obj.y) pos += obj.y;
return (pos);
}
function findHeight(obj) {
if ((isAll) && (obj.clientHeight)) return (obj.clientHeight);
if ((isLayers) && (obj.height)) return (obj.height);
var pos;
pos = parseFloat(getStyle(obj,'height'));
if (!isNaN(pos)) return (pos);
pos = parseFloat(getStyle(obj,'pixelHeight'));
if (!isNaN(pos)) return (pos);
if (obj.offsetHeight) return (obj.offsetHeight);
}
function findBottom(obj) {
return (findTop(obj) + findHeight(obj));
}
function moveObjectTo(obj,x,y) {
if (obj.moveTo)
obj.moveTo(x,y);
else {
obj.style.left = x + "px";
obj.style.top = y + "px";
}}
function moveObjectBy(obj,deltaX,deltaY) {
if (obj.moveBy)
obj.moveBy(deltaX,deltaY);
else {
obj.style.left = (findLeft(obj) + deltaX) + "px";
obj.style.top = (findTop(obj) + deltaY) + "px";
}}
function setVisibility(obj) {
var state = getStyle(obj,'visibility');
if ((state == "hidden") || (state == "hide"))
obj.style.visibility = "visible";
else if ((state == "visible") || (state == "show"))
obj.style.visibility = "hidden";
else obj.style.visibility = "visible";
}
function setClip(obj,clipTop,clipRight,clipBottom,clipLeft) {
if ((isLayers) && (obj.layers)) obj.clip.top = clipTop, obj.clip.right = clipRight,
obj.clip.bottom = clipBottom, obj.clip.left = clipLeft;
else obj.style.clip = "rect(" + clipTop + "px " + clipRight + "px " + clipBottom + "px " + clipLeft + "px)";
}
function setMargin(obj,marginTop,marginRight,marginBottom,marginLeft) {
obj.style.margin = marginTop + "px " + marginRight + "px " + marginBottom + "px " + marginLeft + "px";
}

  /* Write out CSS */
	if (isMac) {
		//IE 5 for Mac will not allow rules added to linked stylesheets.
		if (isIE && ISFIXEDWIDTH) document.write('<style type="text/css"></style>\n');
		document.write('<link rel="stylesheet" type="text/css" href="http://media.techtarget.com/digitalguide/stylesheets/dgmac.css">\n');
		document.write('<link rel="stylesheet" type="text/css" href="http://media.techtarget.com/digitalguide/stylesheets/searchNetworkingmac.css">\n');
	} else if (isWin) {
		document.write('<link rel="stylesheet" type="text/css" href="http://media.techtarget.com/digitalguide/stylesheets/dgwin.css">\n');
		document.write('<link rel="stylesheet" type="text/css" href="http://media.techtarget.com/digitalguide/stylesheets/searchNetworkingwin.css">\n');
	} else {
		document.write('<link rel="stylesheet" type="text/css" href="http://media.techtarget.com/digitalguide/stylesheets/dgother.css">\n');
		document.write('<link rel="stylesheet" type="text/css" href="http://media.techtarget.com/digitalguide/stylesheets/searchNetworkingother.css">\n');
	}
	document.write('<link rel="stylesheet" type="text/css" href="http://media.techtarget.com/digitalguide/stylesheets/DG.css">\n');
	document.write('<link rel="stylesheet" type="text/css" href="http://media.techtarget.com/digitalguide/stylesheets/searchNetworking.css">\n');
	//determine background image
	var bBackgroundImage = true; //default
	var fBackgroundImage = "http://media.techtarget.com/digitalguide/images/Misc/background_page.gif"; //default
	var fBackgroundTrackingImage = "http://media.techtarget.com/searchNetworking/images/spacer.gif"; //tracking image, default = spacer.gif
	var bBackgroundImageGlobalSwitch = (typeof JSadPrestitial == "undefined") ? "on" : JSadPrestitial;
	if ("0" == "3") {
		bBackgroundImage = false;
		fBackgroundImage = "";
	}
	if ("0" == "4") {
		bBackgroundImage = true;
		fBackgroundImage = "http://media.techtarget.com/searchNetworking/images/background_page_dark.gif";
	}
	
	




    /* testing display */
	if (window.location.search.indexOf("wrData=on") != -1) document.cookie="wrData=on; path=/";
	if (window.location.search.indexOf("wrData=off") != -1) document.cookie="wrData=off; path=/";
	
	/* Web Reporting */
	function getRptSiteID(siteName) {
		// for backward compatibility
		return 'DM521219EFAV83EN3';
	}

	function getURLParam(param) {
		var paramValue = param + "=";
		var searchValue = window.location.search.toLowerCase();
		var searchValueParam = "";
		if (searchValue.indexOf(paramValue) != -1) {
			searchValueParam = window.location.search.substring(searchValue.indexOf(paramValue),searchValue.length);
			if (searchValueParam.indexOf("&") != -1) searchValueParam = searchValueParam.substring(0,searchValueParam.indexOf("&"));
		}
		return searchValueParam;
	}
	function getURLParamValue(param) {
		var paramValue = param + "=";
		var searchValue = window.location.search.toLowerCase();
		var searchValueParam = "";
		if (searchValue.indexOf(paramValue) != -1) {
			searchValueParam = window.location.search.substring(searchValue.indexOf(paramValue),searchValue.length);
			if (searchValueParam.indexOf("&") != -1) searchValueParam = searchValueParam.substring(0,searchValueParam.indexOf("&"));
		}
		searchValueParam = searchValueParam.substring((param.length)+1,searchValueParam.length);
		return searchValueParam;
	}
	function getSearchEngineReferrer() {
		//if user is referred from search engine, mark them
		//if user remains on our sites, keep them marked
		//else remove them
		var r = document.referrer;
		var s = "";
		var t = (document.cookie.indexOf('ref=') != -1) ? document.cookie.substring(document.cookie.indexOf('ref=') + 4, document.cookie.length) : 'null';
		if (t != 'null' && t.indexOf(';') != -1) t = t.substring(0,t.indexOf(';'));
		if (t != 'null' && r.indexOf('techtarget.com') != -1) s = t;
		if (r.indexOf('google') != -1) s = 'Google';
		if (r.indexOf('search.yahoo.com') != -1) s = 'Yahoo';
		if (r.indexOf('search.msn.com') != -1) s = 'MSN';
		if (r.indexOf('web.ask.com') != -1) s = 'AskJeeves';
		if (r.indexOf('altavista') != -1) s = 'AltaVista';
		if (r.indexOf('search.aol.com') != -1) s = 'AOL Netfind';
		if (s != "") {
			document.cookie="ref="+s+"; path=/; domain=techtarget.com";
			return s;
		} else {
			return '-1';
		}
	}

	function getVisitorSegment() {
		var uStatus = new String();
		var uStatusRollup = new String();
		if(thisSite != -1) uStatus += "7";
		if(indexLogin != -1){
			if(uStatus != "") uStatus += ","
			uStatus += "8";
		}
		if(ipcLoggedIn == '1'){
			if(uStatus != "") uStatus += ","
			uStatus += "9";
		}
		
		if(ttUser == '1'){
			uStatusRollup = "6";
		}
		if(uStatus == '') uStatus = '*';
		if(uStatusRollup == '') uStatusRollup = '*';

		uStatus += ";" + uStatusRollup; //combine value with Global Rollup
		if(tt_hbxExtraAcct) uStatus += ";*"
		return uStatus;
	}
	var wlh = window.location.hostname.toLowerCase(window.location.hostname);
	if (wlh.indexOf("whatis") != -1) {
		tt_rptSiteName = "whatis";
	} else if (wlh.indexOf("expertanswercenter") != -1) {
		tt_rptSiteName = "expertanswercenter";
	} else if (wlh.indexOf("knowledgestorm") != -1) {
		tt_rptSiteName = window.location.pathname.substring(1, window.location.pathname.indexOf("/", 1));
	} else {
		tt_rptSiteName = wlh.substring(wlh.indexOf("search"),wlh.indexOf("."));
	}
	
	var tt_rptGlobalID = "DM5212204PCA83EN3";
	var tt_rptSiteID = "DM521219EFAV83EN3";
	//override for whatis.co.uk
	if (window.location.href.indexOf("whatis") != -1 && window.location.href.indexOf(".co.uk") != -1) tt_rptSiteID = "DM5212190CWE";
	var tt_rptExtraID = "DM56031759VS83EN3";
	var tt_rptCampaignGoal = "";
	if(CHANNELHEADER == "on") {
		// for channel sites do 2nd reporting to 'Channel Group' account
		var tt_rptSiteRollUpID = "DM5608255INM";
	} else {
		var tt_rptSiteRollUpID = "";
	}
	

	function WEB_REPORTING() {
		if(typeof tt_hbx404 == "undefined") var tt_hbx404 = false;
		if(tt_hbx404) return HBX_ERROR();
		else return HBX_PAGE();
	}
	
function HBX_PAGE() {
	var strWebRptg = new String('<!--WEBSIDESTORY CODE HBX1.0 (Universal)-->\n' +
	'<!--COPYRIGHT 1997-2004 WEBSIDESTORY,INC. ALL RIGHTS RESERVED. U.S.PATENT No. 6,393,479B1. MORE INFO:http://websidestory.com/privacy-->\n' +
	'<script language="javascript">\n' +
	'var _hbEC=0,_hbE=new Array;function _hbEvent(a,b){b=_hbE[_hbEC++]=new Object();b._N=a;b._C=0;return b;}\n' +
	'var hbx=_hbEvent("pv");hbx.vpc="HBX0100u";hbx.gn="ehg-techtarget.hitbox.com";\n' +
	'//BEGIN EDITABLE SECTION\n' +
	'//CONFIGURATION VARIABLES\n' +
	'if(typeof tt_hbxTemplateID == "undefined") var tt_hbxTemplateID = "";\n' +
	'if(typeof tt_hbxApplicationPath == "undefined") var tt_hbxApplicationPath = "";\n' +
	'if(typeof tt_hbxSitePath == "undefined") var tt_hbxSitePath = "/searchNetworking";\n' +
	'if(typeof tt_hbxExtraAcct == "undefined") var tt_hbxExtraAcct = false;\n' +
	'if(typeof tt_rptSiteRollUpID == "undefined") var tt_rptSiteRollUpID = "";\n' +
	'if(typeof tt_hbxMLC == "undefined") var tt_hbxMLC = "";\n' +
	'if(typeof tt_hbx404 == "undefined") var tt_hbx404 = false;\n' +
	'if(typeof JSv3ic == "undefined") var JSv3ic = false;\n' +
	'if(typeof tt_hbxWORD == "undefined") var tt_hbxWORD = "";\n' +
	'hbx.acct=tt_rptSiteID + ";" + tt_rptGlobalID;//ACCOUNT NUMBER(S)\n' +
	'if(tt_hbxExtraAcct) hbx.acct+= ";" + tt_rptExtraID;\n' +
	'if(tt_rptSiteRollUpID != "") hbx.acct+= ";" + tt_rptSiteRollUpID;\n' +
	'hbx.pn = ""; //pagename \n' +
	'var wlp = window.location.pathname.replace(eval("/\\\\//g"),"-");\n' +
	'wlp = wlp.substring(1,wlp.length);\n' +
	'if (wlh.indexOf("knowledgestorm") != -1) wlp = "knowledgestorm-" + wlp;\n' +
	'var oidValue = ""; \n' +
	'//get path name and oid value\n' +
	'if (tt_hbxTemplateID == "195") {\n' +
	'	hbx.pn = "home";\n' +
	'} else if (tt_hbxTemplateID == "359") {\n' +
	'	hbx.pn = "whome";\n' +
	'} else if (tt_hbxTemplateID == "1128") {\n' +
	'	hbx.pn = "magHome";\n' +
	'} else if (wlp == "/") {\n' +
	'	hbx.pn = "home";\n' +
	'} else if (wlp.indexOf("-0,") != -1) {\n' +
	'	hbx.pn = wlp.substring(0, wlp.indexOf("-0,"));\n' +
	'	oidValue = wlp.substring(wlp.indexOf("-0,"),wlp.length);\n' +
	'	oidSplit = oidValue.split(",");\n' +
	'	oidValue = oidSplit[2];\n' +
	'	hbx.pn += "--" + oidValue;\n' +
	'} else if (wlp.indexOf("-1,") != -1) {\n' +
	'	hbx.pn = wlp.substring(0,wlp.indexOf("-1,"));\n' +
	'	oidValue = wlp.substring(wlp.indexOf("-1,"),wlp.length);\n' +
	'	oidSplit = oidValue.split(",");\n' +
	'	oidValue = oidSplit[2];\n' +
	'	hbx.pn += "--" + oidValue;\n' +
	'} else {\n' +
	'	hbx.pn = wlp;\n' +
	'}\n' +
	'//add URL parameters\n' +
	'var searchValueOffer = getURLParam("offer");\n' +
	'var searchValueTrack = getURLParam("track");\n' +
	'var searchValueS = getURLParam("s");\n' +
	'if (searchValueOffer != "") hbx.pn += "--" + searchValueOffer;\n' +
	'if (searchValueTrack != "") hbx.pn += "--" + searchValueTrack;\n' +
	'if (searchValueS != "") hbx.pn += "--" + searchValueS;\n' +
	'hbx.pn = hbx.pn.replace(eval("/\%/g"),".");\n' +
	'if(tt_hbxMLC == "") hbx.mlc = "*"; else hbx.mlc = "";\n' +
	'hbx.mlc+=tt_hbxMLC + ";" + tt_hbxSitePath + tt_hbxMLC;//MULTI-LEVEL CONTENT CATEGORY\n' +
	'if(tt_hbxExtraAcct) { if(JSv3ic == true) hbx.mlc+=";" + tt_hbxMLC + tt_hbxSitePath; else hbx.mlc+=";" + tt_hbxApplicationPath + tt_hbxSitePath; }\n' +
	'hbx.pndef="title";//DEFAULT PAGE NAME\n' +
	'hbx.ctdef="full";//DEFAULT CONTENT CATEGORY\n' +
	'//OPTIONAL PAGE VARIABLES\n' +
	'//ACTION SETTINGS\n' +
	'hbx.lt="auto";//LINK TRACKING\n' +
	'hbx.dlf="n";//DOWNLOAD FILTER\n' +
	'hbx.dft="n";//DOWNLOAD FILE NAMING\n' +
	'hbx.elf="n";//EXIT LINK FILTER\n' +
	'//SEGMENTS AND FUNNELS\n' +
	'hbx.seg=getVisitorSegment();//VISITOR SEGMENTATION\n' +
	'hbx.fnl=(typeof wrFunnelValue == "undefined") ? "" : wrFunnelValue;//FUNNELS\n' +
	'//CAMPAIGNS\n' +
	'hbx.cmp=(typeof cmpValue == "undefined") ? "" : cmpValue;//CAMPAIGN ID\n' +
	'hbx.gp=(typeof cmpGoalValue == "undefined") ? "" : cmpGoalValue;//CAMPAIGN GOAL\n' +
	'hbx.fv="n";//FORM VALIDATION MINIMUM ELEMENTS OR SUBMIT FUNCTION NAME\n' +
	'hbx.dcmp="";//DYNAMIC CAMPAIGN ID\n' +
	'hbx.hqsp="ATTR";//RESPONSE ATTRIBUTE IN QUERY\n' +
	'hbx.fv="";//FORM VALIDATION MINIMUM ELEMENTS OR SUBMIT FUNCTION NAME\n' +
	'hbx.cmpn="";//CAMPAIGN ID IN QUERY\n' +
	'hbx.dcmpn="";//DYNAMIC CAMPAIGN ID IN QUERY\n' +
	'hbx.dcmpe="";//DYNAMIC CAMPAIGN EXPIRATION\n' +
	'hbx.dcmpre="";//DYNAMIC CAMPAIGN RESPONSE EXPIRATION\n' +
	'hbx.hra="";//RESPONSE ATTRIBUTE\n' +
	'hbx.hqsr="";//RESPONSE ATTRIBUTE IN REFERRAL QUERY\n' +
	'hbx.hlt="";//LEAD TRACKING\n' +
	'hbx.hla="";//LEAD ATTRIBUTE\n' +
	'hbx.gpn="";//CAMPAIGN GOAL IN QUERY\n' +
	'hbx.hcn="";//CONVERSION ATTRIBUTE\n' +
	'hbx.hcv="";//CONVERSION VALUE\n' +
	'hbx.cp="null";//LEGACY CAMPAIGN\n' +
	'hbx.cpd="";//CAMPAIGN DOMAIN\n' +
	'//INTERNAL SEARCH\n' +
	'var ttSearchQuery=getURLParamValue("query");\n' +
	'if(ttSearchQuery!="") {\n' +
	'var ev1=_hbEvent("search");\n' +
	'ev1.keywords=ttSearchQuery.replace(" ","+");\n' + 
	'if(typeof searchTotal == "undefined") var searchTotal = "";\n' +
	'if(searchTotal == "") {\n' +
	'ev1.results="0";} else {\n' +
	'ev1.results=searchTotal;}\n' + 
	'}\n' +
	'//CUSTOM VARIABLES\n' +
	'var asrcParam = getURLParamValue("asrc");\n' +
	'var asrc_und_1_pos = asrcParam.indexOf("_");\n' +
	'var asrcLast2 = asrcParam.substring(asrc_und_1_pos+1,asrcParam.length);\n' +
	'var asrc_und_2_pos = asrcLast2.indexOf("_");\n' +
	'var asrc_src = asrcParam.substr(0,asrc_und_1_pos);\n' +
	'var asrc_vehicle = asrcLast2.substr(0,asrc_und_2_pos);\n' +
	'var asrc_vid = asrcLast2.substr(asrc_und_2_pos+1,asrcLast2.length);\n' +
	'var psrcParam = getURLParamValue("psrc");\n' +
	'if (psrcParam.indexOf("_") != -1) psrcParam = psrcParam.substring(0,psrcParam.indexOf("_")) + "|" + psrcParam.substring(psrcParam.indexOf("_")+1, psrcParam.length);' +
	'hbx.ci="";//CUSTOMER ID\n' +
	'if(asrc_src != "") hbx.hc1=asrc_src + "|searchNetworking-" + asrc_vehicle + "-" + asrc_vid + "-" + tt_hbxGCI;//CUSTOM 1\n' +
	'else hbx.hc1="";//CUSTOM 1 if no src\n' +
	'hbx.hc2=psrcParam;//CUSTOM 2\n' +
	'hbx.hc3=tt_hbxSitePath;//CUSTOM 3\n' +
	'if(JSv3ic == true) hbx.hc3 += tt_hbxMLC; else hbx.hc3 += tt_hbxApplicationPath;\n' +
	'hbx.hc3+="|" + tt_hbxGCI;\n' +
	'hbx.hc4="";//CUSTOM 4\n' +
	'hbx.hc5="";//CUSTOM 5\n' +
	'var cv=_hbEvent("cv");' +
	'cv.c5 = (tt_hbxWORD == "") ? "" : "word|" + unescape(tt_hbxWORD);\n' +
	'cv.c6="";' +
	'cv.c7="";' +
	'cv.c8="";' +
	'cv.c9="";' +
	'hbx.hrf=(hbx.pn.indexOf("prestitial") != -1) ? "" : unescape(getCookieValue("adPreR"));//CUSTOM REFERRER\n' +
	'hbx.pec="";//ERROR CODES\n' +

	'if (document.cookie.indexOf("wrData=on") != -1 || window.location.search.indexOf("wrData=on") != -1) {\n' +
	'	window.alert("HITBOX DATA \\n accounts (hbx.acct) = " + hbx.acct + "\\n pagename (hbx.pn) = " + hbx.pn + "\\n hbx.mlc = " + hbx.mlc + "\\n visitor segment (hbx.seg) = " + hbx.seg + "\\n funnel id (hbx.fnl) = " + hbx.fnl + "\\n campaign page (hbx.cmp) = " + hbx.cmp + "\\n goal page (hbx.gp) = " + hbx.gp + "\\n custom metric 1 (hbx.hc1) =" + hbx.hc1 + "\\n custom metric 2 (hbx.hc2) = " + hbx.hc2 + "\\n custom metric 3 (hbx.hc3) = " + hbx.hc3 + "\\n custom metric 4 (hbx.hc4) = " + hbx.hc4 + "\\n custom metric 5 (hbx.hc5) = " + hbx.hc5 + "\\n custom metric 5 (cv.c5) = " + cv.c5 + "\\n custom metric 6 (cv.c6) = " + cv.c6+ "\\n custom metric 7 (cv.c7) = " + cv.c7+ "\\n custom metric 8 (cv.c8) = " + cv.c8+ "\\n custom metric 9 (cv.c9) = " + cv.c9 );\n' +
	'}\n' +
	
	'//INSERT CUSTOM EVENTS\n' +
	'//delete referrer cookie\n' + 
	'if (hbx.pn.indexOf("prestitial") == -1 && cookieExists("adPreR") != -1) document.cookie = "adPreR=;path=/;domain=.techtarget.com;expires=Thu, 01-Jan-1970 00:00:01 GMT;";\n' + 
	'//END EDITABLE SECTION\n' +
	'//REQUIRED SECTION. CHANGE "YOURSERVER" TO VALID LOCATION ON YOUR WEB SERVER (HTTPS IF FROM SECURE SERVER)\n' +
	'</script><script language="javascript1.1" defer src="http://searchNetworking.techtarget.com/hbx.js"></script>\n' +
	'<!--END WEBSIDESTORY CODE-->\n' +
	
	'<script type="text/javascript">if (typeof tt_dartTAX_id == "undefined") var tt_dartTAX_id = "";\n' + 
	'if (getCookieValue("tt_ut") != "" && tt_dartTAX_id != "") { \n' +
	'document.write("<img src="+clicktrackIMG+"?u="+getCookieValue(\'tt_ut\')+"&t="+tt_dartTAX_id+"&r="+Math.round(Math.random() * 1000000)+" height=1 width=1 border=0>");\n' +
	'}\n</script>\n');
	if (window.location.search.indexOf('wrTest=on') != -1) window.alert(strWebRptg);
	return strWebRptg;
	}
	
function HBX_ERROR()
{
		var strWebRptg = new String('<!--WEBSIDESTORY CODE HBX1.5 (Error)-->\n' +
	'<!--COPYRIGHT 1997-2005 WEBSIDESTORY,INC. ALL RIGHTS RESERVED. U.S.PATENT No.6,393,479B1 & 6,766,370. INFO:http://websidestory.com/privacy-->\n' +
	'<script language="javascript">\n' +
	'var hbx=new Object();hbx.vpc="HBX0150.02e";hbx.gn="ehg-techtarget.hitbox.com";\n' +
	'//BEGIN EDITABLE SECTION\n' +
	'//CONFIGURATION VARIABLES\n' +
	'hbx.acct="DM521219EFAV83EN3;DM5212204PCA83EN3";\n' +
	'hbx.mlc="ERROR"; //multi-level content category\n' +
	'//END EDITABLE SECTION\n' +
	'var _sv=10;\n' +
	'</script><script language="javascript1.1">_sv=11</script><script language="javascript">\n' +
	'function _A(v){return escape(v)}function _D(v){return(typeof eval("window._"+v)!=_hud)?eval("window._"+v):""}\n' +
	'function _II(a,b,c){return a.indexOf(b,c?c:0)}function _E(a){var b="",d=a.split(",");for(var c=0;c<d.length;c++)b+="&"+d[c]+"="+_A(_D(d[c]));return b}\n' +
	'var _hud="undefined",_ss="na",_sc="na",_cy="u",_hp="u",_vpc=hbx.vpc,_rf=document.location+"";var __r=".referrer";_er=eval("document"+__r)+"";\n' +
	'if((_er==_hud)||(_er==""))_er="bookmark";if(_II(document.cookie,"CP=")!=-1){_ce="y"}else{\n' +
	'document.cookie="CP=nul"+"l*; path=/; expires=Wed, 1 Jan 2020 00:00:00 GMT";_ce=(_II(document.cookie,"CP=")!=-1)?"y":"n"};\n' +
	'var _bnI=_II(navigator.appName,"Microsoft")>-1;var _hM=_II(navigator.userAgent,"Mac")>-1;var _I5=false;\n' +
	'if(_bnI){var _nua=navigator.userAgent,_is=_II(_nua,"MSIE"),_if=_II(_nua,".",_is);if(_if>_is)_I5=_nua.substring(_is+5,_if)>=5}\n' +
	'if(window.screen){_sv=12;_ss=screen.width+"*"+screen.height;_sc=_bnI?screen.colorDepth:screen.pixelDepth;\n' +
	'if(_sc==_hud)_sc="na"}var _ra=new Array();if(_ra.toSource||(_bnI&&_ra.shift))_sv=13;if(_I5&&!_hM){\n' +
	'if(_II(""+navigator.appMinorVersion,"Privacy")>-1)_ce="p";if(document.body&&document.body.addBehavior){document.body.addBehavior("#default#homePage");\n' +
	'_hp=document.body.isHomePage(location.href)?"y":"n";document.body.addBehavior("#default#clientCaps");_cy=document.body.connectionType}}\n' +
	'var _arg=(location.protocol=="https:"?"https://":"http://")+hbx.gn+"/HG?hc=&hb="+hbx.acct+"&cd=1&l=e"+"&ja="+(navigator.javaEnabled()?"y":"n")+\n' +
	'_E("rf,er,ce,vpc,sv,ss,sc,cy,hp");if(typeof eval("hbx.mlc")!=_hud&&_II(hbx.mlc,"CONTENT+CATEGORY")<0)_arg+="&vcon="+_A(hbx.mlc);\n' +
	'var _hbi=new Image();_hbi.src=_arg+"&hid="+Math.random();</script>\n' +
	'<script language="javascript">if(_sv<11){document.write("<img src="+_arg+" border=0 height=1 width=1>")}</script>\n' +
	'<!--END WEBSIDESTORY CODE-->\n');
	if (window.location.search.indexOf('wrTest=on') != -1) window.alert(strWebRptg);
	return strWebRptg;
}	

/* clicktrack image */
 var clicktrackIMG = 'http://go.techtarget.com/activity.jpg'; //set in pageScripts
	if ( getCookieValue('tt_ut') == "" && ((getURLParam("uid") != "") || (loggedIn != '-1'))) {
		var clicktrackNow = new Date().getTime();
		var clicktrackFiveYear = (5*(365*(24*(60*(60*1000)))));  //5 years
		var clicktrackUIDString = "";
		var clicktrackUIDArray = "";
		var clicktrackUID = "";
		if (getURLParam("uid") != "") {
			clicktrackUIDString = getURLParam("uid");
			clicktrackUIDArray = clicktrackUIDString.split("=");
			clicktrackUID = clicktrackUIDArray[1];
		} else {
			clicktrackUIDCookie = getCookieValue('Datav2');
			clicktrackUID = clicktrackUIDCookie.substring(clicktrackUIDCookie.indexOf('dgUserID') + 8);
			if (clicktrackUID.indexOf("%0A") != '-1') {
				clicktrackUID = unescape(clicktrackUID.substring(0,clicktrackUID.indexOf("%0A")));
			} else {
				clicktrackUID = unescape(clicktrackUID);
			}
			if (clicktrackUID.indexOf(";") != '-1') clicktrackUID = clicktrackUID.substring(0,clicktrackUID.indexOf(";"));
		}
		var clicktrackExpire = new Date(clicktrackNow + clicktrackFiveYear);
		setCookie("tt_ut", clicktrackUID, clicktrackExpire.toGMTString(), "/", ".techtarget.com");
	}

	

    /*
	   Force login if content is members only.
	   Redirect to top in case document is loaded in a frame or iframe.
	*/
	var moOverride = getURLParamValue("mo");
	var forMembersOnly = ((typeof JSmembersOnly != "undefined" && JSmembersOnly == "on") || moOverride == 1) ? true : false; 
	//check for referrer based members only
	if (typeof JSmembersOnly == "undefined") var JSmembersOnly = "";
	if (getURLParamValue("debug_referrer") != "") JSmembersOnly = "referrer";
	if (JSmembersOnly == "referrer") {
		
	ttReferrer = {
		/**
    	 * Set it to override the document.referrer string. Used for debugging
	     * only.
    	 */
	    debug_referrer: '',
		referrer: ''
	};
	
	if (getURLParamValue("debug_referrer") != "") ttReferrer.debug_referrer = getURLParamValue("debug_referrer");
	ttReferrer.referrer = ttReferrer.debug_referrer ? ttReferrer.debug_referrer : document.referrer;
	
	ttReferrer.search_engines = [ ['google\.', 'q'],                             // Google
    ['search\.yahoo\.', 'p'],                     // Yahoo
    ['search\.msn\.', 'q'],                       // MSN
    ['search\.live\.', 'query'],                  // MSN Live
    ['search\.aol\.', 'userQuery'],               // AOL
    ['ask\.com', 'q'],                             // Ask.com
    ['altavista\.', 'q'],                          // AltaVista
    ['feedster\.', 'q'],                           // Feedster
    ['search\.lycos\.', 'q'],                     // Lycos
    ['alltheweb\.', 'q'],                          // AllTheWeb
    ['technorati\.com/search/([^\?/]+)', 1],      // Technorati
    ['dogpile\.com/info\.dogpl/search/web/([^\?/]+)', 1, true] // DogPile
];

/**
 * Decode the referrer string and return a list of search keywords.
 */
ttReferrer.decodeReferrer = function(referrer) {
    var query = null;
    var regex = new RegExp('');

    for (var i = 0; i < ttReferrer.search_engines.length; i ++) {
        var se = ttReferrer.search_engines[i];
        regex.compile('^http://(www\.)?' + se[0], 'i');
        var match = referrer.match(regex);
        if (match) {
            var result;
            if (isNaN(se[1])) {
                result = ttReferrer.decodeReferrerQS(referrer, se[1]);
            } else {
                result = match[se[1] + 1];
            }
            if (result) {
                result = decodeURIComponent(result);
                // XXX: DogPile's URI requires decoding twice.
                if (se.length > 2 && se[2])
                    result = decodeURIComponent(result);
                result = result.replace(/'|"/g, '');
                result = result.split(/[s,+.]+/);
                return result;
            }
            break;
        }
    }
    return null;
};

ttReferrer.decodeReferrerQS = function(referrer, match) {
    var idx = referrer.indexOf('?');
    var idx2;
    if (idx >= 0) {
        var qs = new String(referrer.substring(idx + 1));
        idx  = 0;
        idx2 = 0;
        while ((idx >= 0) && ((idx2 = qs.indexOf('=', idx)) >= 0)) {
            var key, val;
            key = qs.substring(idx, idx2);
            idx = qs.indexOf('&', idx2) + 1;
            if (key == match) {
                if (idx <= 0) {
                    return qs.substring(idx2+1);
                } else {
                    return qs.substring(idx2+1, idx - 1);
                }
            }
        }
    }
    return null;
};


	if (ttReferrer.decodeReferrer(ttReferrer.referrer) != null) forMembersOnly = true;
	if (ttReferrer.debug_referrer) {
		window.alert('referrer = ' + ttReferrer.referrer);
		window.alert('referrer check result = ' + ttReferrer.decodeReferrer(ttReferrer.referrer));
		window.alert('forMembersOnly = ' + forMembersOnly);
	}
}
	//handle Offer URL parameter
	var offerPos = document.location.search.indexOf("Offer=");
	if (offerPos != -1) {
	    var offerValue = document.location.search.substring(offerPos+6,document.location.search.length);
		if (offerValue.indexOf("&") != -1) {
			offerValue = offerValue.substring(0,offerValue.indexOf("&"));
		}
	} else var offerValue = "";	

	
	var channelMember = 0;
	 
		if (SiteList.indexOf(",96,") != -1) {
			channelMember = 1;
		}
	
		if (SiteList.indexOf(",97,") != -1) {
			channelMember = 1;
		}
	
		if (SiteList.indexOf(",98,") != -1) {
			channelMember = 1;
		}
	
		if (SiteList.indexOf(",99,") != -1) {
			channelMember = 1;
		}
	
		if (SiteList.indexOf(",100,") != -1) {
			channelMember = 1;
		}
	 
	var magSite = "";
	/* 
		Auto-login for users coming from newsletters passing a valid UserID
	 */
	if ( (forMembersOnly) && channelMember == 0 && uidLoggedIn != 1 &&  loggedIn != 1 && (window.location.href.indexOf("uid") != -1) ) {
		var uidString = getURLParam("uid");
		var uidArray = uidString.split("=");
		var uid = uidArray[1];
		//var errorString = 'inside first members only check\n\nindexLogin: [' + indexLogin + ']\nindexProps: [' + indexProps + ']\nindexProps2: [' + indexProps2 + ']\nthisSite: [' + thisSite + ']\nloggedIn: [' + loggedIn + ']\nuidLoggedIn: [' + uidLoggedIn + ']\nindexIPC: [' + indexIPC + ']\nipcLoggedIn: [' + ipcLoggedIn + ']\nbeginName: [' + beginName + ']\nendName: [' + endName + ']\nDisplayName: [' + DisplayName + ']\nttUser: [' + ttUser + ']\n';
		//alert(errorString);
		var NextURL = window.top.location.href;
		if (NextURL.indexOf("/ttCMAv2/Production_Center/Preview_Form_v2/1,2563,,00.html") == -1) {
			var redirectURL;
			if (typeof JSmembersLoginURL == "undefined" || JSmembersLoginURL == "") {
				redirectURL = (typeof JSlinkLogin != "undefined") ? JSlinkLogin : "http://searchNetworking.techtarget.com/loginMembersOnly/1,289498,sid7,00.html";
			} else {
				redirectURL = ((JSmembersLoginURL.indexOf("http://searchNetworking.techtarget.com") == 0) ? "" : "http://searchNetworking.techtarget.com") + JSmembersLoginURL;
			}
			redirectURL += '?'			
			if(offerValue != '') redirectURL += 'Offer=' + offerValue + '&'; 
            if(NextURL != '') redirectURL += 'NextURL=' + escape(NextURL);
			window.top.location.replace(redirectURL);			
		}
	}
	else if (forMembersOnly && channelMember == 0 && loggedIn != 1 && uidLoggedIn != 1 && magSite != "on") {
		var NextURL = window.top.location.href;
		if (NextURL.indexOf("/ttCMAv2/Production_Center/Preview_Form_v2/1,2563,,00.html") == -1) {
			var redirectURL;
			if (typeof JSmembersLoginURL == "undefined" || JSmembersLoginURL == "") {
				redirectURL = (typeof JSlinkLogin != "undefined") ? JSlinkLogin : "http://searchNetworking.techtarget.com/loginMembersOnly/1,289498,sid7,00.html";
			} else {
				redirectURL = ((JSmembersLoginURL.indexOf("http://searchNetworking.techtarget.com") == 0) ? "" : "http://searchNetworking.techtarget.com") + JSmembersLoginURL;
			}
			redirectURL += '?'
			if(offerValue != '') redirectURL += 'Offer=' + offerValue + '&'; 
            if(NextURL != '') redirectURL += 'NextURL=' + escape(NextURL);
			window.top.location.replace(redirectURL);
		}
	}
	else if (magSite == "on" && forMembersOnly && !userContentAccess) {
		if (typeof JSmembersLoginURL == "undefined") {
			var redirectURL = 'http://searchNetworking.techtarget.com/loginMembersOnly/1,289498,sid7,00.html';
		} else {
			var redirectURL = JSmembersLoginURL;
		}
		if(offerValue != '') redirectURL += '?Offer=' + offerValue; 
		document.cookie = "strgArticleURL=" + window.top.location.href + ";path=/";
		window.top.location.replace(redirectURL);
	}

	/*
	   Force IPC login if content is members only.
	   Redirect to top in case document is loaded in a frame or iframe.
	*/
	var forIPCMembersOnly = (typeof JSIPCmembersOnly != "undefined" && JSIPCmembersOnly == "on") ? true : false;
	if (forIPCMembersOnly && ipcLoggedIn != 1) {
		var NextURL = window.top.location.href;
		if (NextURL.indexOf("/ttCMAv2/Production_Center/Preview_Form_v2/1,2563,,00.html") == -1) {
			var redirectURL;
			if (typeof JSIPCmembersLoginURL == "undefined" || JSIPCmembersLoginURL == "") {
				redirectURL = (typeof JSIPClinkLogin != "undefined") ? JSIPClinkLogin : "http://searchNetworking.techtarget.com/ITKnowledgeExchange/0,294907,sid7,00.html";
			} else {
				redirectURL = ((JSIPCmembersLoginURL.indexOf("http://searchNetworking.techtarget.com") == 0) ? "" : "http://searchNetworking.techtarget.com") + JSIPCmembersLoginURL;
			}
			window.top.location.replace(redirectURL);
		}
	}	

   //time in milliseconds
var adPreNow = new Date().getTime();
var adPreOneDay = (24*(60*(60*1000)));

//retreive current page for redirect
var adPreNextURL = new String();
adPreNextURL = window.top.location.href;

//show the prestitial? Not for exclusive clusters, nor members only, nor ike members only
if (typeof cl_exclusive == "undefined") var cl_exclusive = "N";
if (typeof JSsponsoredContent == "undefined") var JSsponsoredContent = "off";
if (typeof tt_hbx404 == "undefined") var tt_hbx404 = false;
if (typeof JSadPrestitial == "undefined") var JSadPrestitial = "off"; //default off
if (adPreNextURL.indexOf("/ttCMAv2/Production_Center/Preview_Form_v2/1,2563,,00.html") != "-1") JSadPrestitial = "off";
if ("on" != "on") JSadPrestitial = "off";
var adPreExclusive = (cl_exclusive == "Y" || forMembersOnly || tt_hbx404 || JSsponsoredContent == "on") ? true : false;
if (getURLParamValue("debug_prestitial") == "on") window.alert("Exclusive = " + adPreExclusive + "(" + cl_exclusive + "::" + forMembersOnly + "::" + tt_hbx404 + ")" + ", JSadPrestitial = " + JSadPrestitial + " document.referrer = " + document.referrer);
if (!adPreExclusive && JSadPrestitial == "on") {

	//check for prestitial cookie
	var adPre = getCookieValue("adPre");
	if (getURLParamValue("debug_prestitial") == "on") window.alert("adPre Cookie = " + ((adPre)?"set, no ad will show":"not set, ad will show"));
	if (!adPre) {
	
		//set prestitial cookie with an expiration of "tomorrow"
		var adPreTomorrow = new Date(adPreNow + adPreOneDay);
		setCookie("adPre", adPreNextURL, adPreTomorrow.toGMTString(), "/", ".techtarget.com");
		if (getURLParamValue("debug_prestitial") == "on") window.alert("Cookie = " + document.cookie);

		//check to make sure prestitial cookie exists (excludes bots)
		if (getCookieValue("adPre") != "") {
			
			//create ad string
			if (typeof adCounter == "undefined") var adCounter = 1;
			if (typeof adDcopt == "undefined") var adDcopt; //no pop up here
			adDcopt = "";
			if (typeof adPageID == "undefined") var adPageID = Math.round(Math.random() * 100000000);
			if (typeof adString == "undefined") var adString = new String();
			if (typeof JSmaxAds == "undefined") var JSmaxAds = 99;
			if (typeof adDartString == "undefined") var adDartString = "";
			adDartString = JSwriteDARTString("snet", "welcome", 640, 480, "welcome_"+adCounter, "", adDcopt, adPageID);
			//alert(adDartString);
			
			//initialize HBX variables
			var prestitialHBX = true;
			var prestitialHBXArraySkip = new Array();
			var prestitialHBXArrayAuto = new Array();
			prestitialHBXArraySkip[0] = '_hbSet("hb", "DM56031759VS83EN3;DM521219EFAV83EN3");';
			prestitialHBXArraySkip[1] = '_hbSet("cv.c4", "CT|PRESTITIAL_SKIP");';
			prestitialHBXArraySkip[2] = '_hbSet("cd", 1);';
			prestitialHBXArraySkip[3] = '_hbSet("n", "/prestitial");';
			prestitialHBXArraySkip[4] = '_hbSet("vcon", "/searchNetworking/prestitialSkip");';
			prestitialHBXArraySkip[5] = '_hbSet("hec", 1);';
			prestitialHBXArraySkip[6] = '_hbSet("vjs", "HBX0200u");';
			prestitialHBXArrayAuto[0] = '_hbSet("hb", "DM56031759VS83EN3;DM521219EFAV83EN3");';
			prestitialHBXArrayAuto[1] = '_hbSet("cv.c4", "CT|PRESTITIAL_AUTO");';
			prestitialHBXArrayAuto[2] = '_hbSet("cd", 1);';
			prestitialHBXArrayAuto[3] = '_hbSet("n", "/prestitial");';
			prestitialHBXArrayAuto[4] = '_hbSet("vcon", "/searchNetworking/prestitialAuto");';
			prestitialHBXArrayAuto[5] = '_hbSet("hec", 1);';
			prestitialHBXArrayAuto[6] = '_hbSet("vjs", "HBX0200u");';
			
			var prestitialTimeOut = window.setTimeout('tb_remove_tt("auto")',12000);
			tb_show("<img src='http://media.techtarget.com/searchNetworking/images/logo_whitebg.gif' border=0>", adDartString+"?KeepThis=true&TB_iframe=true&width=640&height=480&modal=false",false);		
		}
	}
}

  //watermark ad, exclusive variables are created in JSprestitial
  var adWatermarkExclusive = (cl_exclusive == "Y" || JSsponsoredContent == "on") ? true : false;
  if (!adWatermarkExclusive && "" == "on" && bBackgroundImageGlobalSwitch == "on") {
		if ("" == "on") {
			if (ISHOME) {
				bBackgroundImage = true;
				fBackgroundImage = "";
				fBackgroundTrackingImage = "";
			}
		} else {
			bBackgroundImage = true;
			fBackgroundImage = "";
			fBackgroundTrackingImage = "";
		}
	}
	if (bBackgroundImage) {
		if (ISFIXEDWIDTH) {//Dynamic background based on fixed width
			if (document.tags) document.tags.Body.backgroundImage = fBackgroundImage;
			else if (document.styleSheets && document.styleSheets.length > 0 && !isNS)
				document.styleSheets.item(0).addRule('BODY','background-image: url(' + fBackgroundImage + ')');
			else {
				document.write('<style type="text/css">BODY {background-image: url(' + fBackgroundImage + ');}</style>');
			}
		}
	}
  
  if (typeof JSwebReporting == "undefined") {
  	var wr = getCookieValue("wrData");
	if (wr == "") {
		var WEBREPORTING = ("on" == "") ? "off" : "on";
	} else var WEBREPORTING = wr;
  } else var WEBREPORTING = JSwebReporting;

  /* Header Section */
	function PAGE_HEADER() {
		if(siteDisplayCode == 1) HEADER_DISPLAY_CODE_1();
		else if(siteDisplayCode == 3) HEADER_DISPLAY_CODE_3();
		else if(siteDisplayCode == 4) HEADER_DISPLAY_CODE_4();		
		else HEADER_DISPLAY_CODE_0();				
	}
	
	function MEMBER_UPDATE() {
		return '<iframe src="http://searchNetworking.techtarget.com/memberUpdateCheck/1,294121,sid7,00.html" name="memberUpdate" width="1" height="0" border="0" frameborder="0" marginheight="0" marginwidth="0" scrolling="no"></iframe>';
	}

	function OPEN_FIXED_WIDTH_TABLE() {
		if(siteDisplayCode == 3) return OPEN_FIXED_WIDTH_TABLE_DISPLAY_CODE_3();
		else if(siteDisplayCode == 4) return OPEN_FIXED_WIDTH_TABLE_DISPLAY_CODE_4();
		else return OPEN_FIXED_WIDTH_TABLE_DISPLAY_CODE_0();				
	}

	function PORTFOLIO_BAND() {
		if(siteDisplayCode == 3) return PORTFOLIO_BAND_DISPLAY_CODE_3();
		else if(siteDisplayCode == 1) return PORTFOLIO_BAND_DISPLAY_CODE_1();
		else if(siteDisplayCode == 4) return PORTFOLIO_BAND_DISPLAY_CODE_4();
		else return PORTFOLIO_BAND_DISPLAY_CODE_0();				
	}

	
	function HEADER_CORE() {
		var core = new Array('<table border="0" cellspacing="0" cellpadding="0" width="100%">',
		'<tr class="colorHeader">',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="4" height="'+((LOGO == "on") ? 39 : 6)+'" alt=""></td>',
		'<td width="100%" valign="top"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="1" height="6" alt="">');
		if (LOGO == "on") core.push('<br><a href="http://searchNetworking.techtarget.com/home/0,289692,sid7,00.html"><img src="http://media.techtarget.com/searchNetworking/images/header_logo.gif" border="0" alt=""></a>');
		core.push ('</td>',
		'<td rowspan="2" align="right" valign="top" background="http://media.techtarget.com/searchNetworking/images/header_background.gif">');
		if (MEDIALINKS == "on") core = core.concat(MEDIA_LINKS());
		else core.push('<img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="290" height="6" alt="">');
		core.push('</td>',
		'</tr>',
		'<tr class="colorHeader">',
		'<td><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="4" height="'+((BYLINE == "on") ? 20 : 6)+'" alt=""></td>',
		'<td valign="top">',
		'<img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="51" height="6" alt="">');
		if (BYLINE == "on") core.push('<a href="http://www.techtarget.com/"><img src="http://media.techtarget.com/searchNetworking/images/header_tagline.gif" alt="Part of the TechTarget Network of Enterprise IT Web Sites" border="0"></a>');
		core.push('</td>',
		'</tr>',
		'<tr class="color0">',
		'<td colspan="3"><img src="' + fBackgroundTrackingImage + '" width="1" height="3" border="0" alt=""></td>',
		'</tr>',
		'</table>');
		return core.join("");
	}
	 function MEDIA_LINKS() {
		if(siteDisplayCode == 1) return MEDIA_LINKS_DISPLAY_CODE_1();
		else return MEDIA_LINKS_DISPLAY_CODE_0()
	}

	function LEADER_BOARD() {
		if(siteDisplayCode == 1) return LEADER_BOARD_DISPLAY_CODE_1();
		else if(siteDisplayCode == 3) return LEADER_BOARD_DISPLAY_CODE_3();
		else if(siteDisplayCode == 4) return LEADER_BOARD_DISPLAY_CODE_4();
		else return LEADER_BOARD_DISPLAY_CODE_0();	
	}
	
	function HEADER_SEARCH() {
		if(siteDisplayCode == 1) return HEADER_SEARCH_DISPLAY_CODE_1();
		else if(siteDisplayCode == 3) return HEADER_SEARCH_DISPLAY_CODE_3();
		else if(siteDisplayCode == 4) return HEADER_SEARCH_DISPLAY_CODE_4();		
		else if(clickThruLive == 'on') return HEADER_SEARCH_CLICKTHRU_DISPLAY_CODE_0();
		else return HEADER_SEARCH_DISPLAY_CODE_0();			
	}

	function SPONSOR_BANNER() {
		if(siteDisplayCode == 1) return SPONSOR_BANNER_DISPLAY_CODE_1();
		else if(siteDisplayCode == 0) return SPONSOR_BANNER_DISPLAY_CODE_0();
		else return SPONSOR_BANNER_DISPLAY_CODE_0();			
	}

  /* Footer Section */
	function PAGE_NO_FOOTER() {
		document.write(LIFTSTUDY_QUEUE());
		if (ISFIXEDWIDTH) document.write(CLOSE_FIXED_WIDTH_TABLE());
		if (typeof f360I_TRACKING == "function") document.write(f360I_TRACKING());
	}
	
	if (JSdigitalGuideID == 11) {
			/* hubspot code */
			var hs_portalid=1725; 
			var hs_salog_version = "2.00";
			var hs_ppa = "searchcrm.techtarget.hubspot.com";
	}

	function PAGE_FOOTER_TOP() {
		if (JSdigitalGuideID == 11) {
			/* hubspot code */
			document.write(unescape("%3Cscript src='" + document.location.protocol + "//" + hs_ppa + "/salog.js.aspx' type='text/javascript'%3E%3C/script%3E"));
		}
		if(siteDisplayCode == 1) PAGE_FOOTER_TOP_DISPLAY_CODE_1();
		else PAGE_FOOTER_TOP_DISPLAY_CODE_0();				
	}

	function PAGE_FOOTER_BOTTOM() {
		if(siteDisplayCode == 1) PAGE_FOOTER_BOTTOM_DISPLAY_CODE_1();
		else if(siteDisplayCode == 3) PAGE_FOOTER_BOTTOM_DISPLAY_CODE_3(); 
		else if(siteDisplayCode == 4) PAGE_FOOTER_BOTTOM_DISPLAY_CODE_4(); 		
		else PAGE_FOOTER_BOTTOM_DISPLAY_CODE_0();				
	}

	function FOOTER_LINKS() {
		if(siteDisplayCode == 1) return FOOTER_LINKS_DISPLAY_CODE_1();
		else if(siteDisplayCode == 4) FOOTER_LINKS_DISPLAY_CODE_4(); 
		else return FOOTER_LINKS_DISPLAY_CODE_0();			
	}

	function FOOTER_SEARCH() {
		if(siteDisplayCode == 1) return FOOTER_SEARCH_DISPLAY_CODE_1();
		else return FOOTER_SEARCH_DISPLAY_CODE_0();			
	}

	function PORTFOLIO_BOX() {	
		if(siteDisplayCode == 1) return PORTFOLIO_BOX_DISPLAY_CODE_1();
		else return PORTFOLIO_BOX_DISPLAY_CODE_0();				
	}

	function LIFTSTUDY_QUEUE() {
		return '';
		//return '<iframe src="http://searchNetworking.techtarget.com/liftStudySurveyQueue/0,290887,sid7,00.html" name="Survey" width="1" height="0" border="0" frameborder="0" marginheight="0" marginwidth="0" scrolling="no"></iframe>';
	}

	 function CLOSE_FIXED_WIDTH_TABLE() {
		return new Array('</td><td width="2" class="color3"><img src="http://media.techtarget.com/searchNetworking/images/spacer.gif" width="2" height="1" alt=""></td>',
		'<td valign="top">',
		'<script language="javascript">',
		'if(JSmboxGutterName != "") {',
		'ttWriteMboxDiv(JSmboxGutterName);',
		'ttWriteMboxContent(JSmboxGutterName);}',
		'</script>',
		'</td></tr></table>').join("");
	}

	function PAGE_ONLOAD() {
		if (ROLLOVERMENUS == "on" && typeof TTMS != "undefined" && TTMS.init) TTMS.init("menuBar");
		if (typeof bodyOnLoad == "function") bodyOnLoad();
		PAGE_LOADED = true;
	}

  /* Declare default events */
	window.onload = PAGE_ONLOAD;

 /* Ad Section */  


  		
	function PAGE_AD(x) {
		var showInfoLink = (typeof JSshowInfoLink == "undefined") ? false : eval(JSshowInfoLink);
		var type = (typeof eval('JSad'+x+'Type') == "undefined") ? "1" : eval('JSad'+x+'Type');
		if (type == "2") {
			return ((showInfoLink) ? eval('JSwriteADInfo(JSad'+x+'SiteValue, JSad'+x+'AreaValue, JSad'+x+'Width, JSad'+x+'Height, JSad'+x+'PositionValue, JSad'+x+'KW, JSadCategory, adDcopt, adPageID)') : '') +
			((x == 12) ? eval('JSwriteLeaderBoard2(JSad'+x+'SiteValue, JSad'+x+'AreaValue, JSad'+x+'Width, JSad'+x+'Height, JSad'+x+'PositionValue, JSad'+x+'KW, adDcopt, adPageID)') :
			eval('JSwriteAD2(JSad'+x+'SiteValue, JSad'+x+'AreaValue, JSad'+x+'Width, JSad'+x+'Height, JSad'+x+'PositionValue, JSad'+x+'KW, adDcopt, adPageID)')) + 
			eval('adDcopt = ""'); 
		} else {
			return eval('JSwriteAdBanner(JSad'+x+'Id, JSad'+x+'SiteName, JSad'+x+'PageName, JSad'+x+'SearchPageName, JSad'+x+'BannerSize, JSad'+x+'KeyWord)');
		} 
	}
	
	
	 /* Ad Functions Section */

	// Leftover variables from Cobranded.
	var dgADW, dgCTW, locationPathname;
	var coBrandPath = new Object();
	
	function getOIDValue(oidParam) {
		var oidValue = "";
		var wlp = window.location.pathname;
		if (wlp.indexOf("/0,") != -1) wlp = wlp.substring(wlp.indexOf("/0," + 3,wlp.length));
		if (wlp.indexOf("/1,") != -1) wlp = wlp.substring(wlp.indexOf("/1," + 3,wlp.length));
		if (wlp.indexOf(",00.html") != -1) wlp = wlp.substring(0,wlp.indexOf(",00.html"));
		if (wlp.indexOf(oidParam) != -1) {
			oidValue = wlp.substring(wlp.indexOf(oidParam) + oidParam.length,wlp.length);
			if (oidValue.indexOf("_") != -1) oidValue = oidValue.substring(0,oidValue.indexOf("_"));
			if (oidValue.indexOf(",") != -1) oidValue = oidValue.substring(0,oidValue.indexOf(","));
		}
		return oidValue;
	}


	function getReferOIDValue(oidParam) {
		var oidValue = "";
		var dr = document.referrer;
		if (dr.indexOf("/0,") != -1) dr = dr.substring(dr.indexOf("/0," + 3),dr.length);
		if (dr.indexOf("/1,") != -1) dr = dr.substring(dr.indexOf("/1," + 3),dr.length);
		if (dr.indexOf(",00.html") != -1) dr = dr.substring(0,dr.indexOf(",00.html"));
		if (dr.indexOf(oidParam) != -1) {
			oidValue = dr.substring(dr.indexOf(oidParam) + oidParam.length,dr.length);
			if (oidValue.indexOf("_") != -1) oidValue = oidValue.substring(0,oidValue.indexOf("_"));
			if (oidValue.indexOf(",") != -1) oidValue = oidValue.substring(0,oidValue.indexOf(","));
		}
		if(oidValue.length > 10) oidValue = 'X';
		return oidValue;
	}

	function JSwriteAdBanner(id, sitename, pagename, searchpage, size, keyword) {
	    var tile = id.charAt(id.length - 1); //This obtains the tile based on the id
	    sitename = (sitename.length > 0) ? sitename : "searchNetworking.com"; //When sitename is empty default to guide.com
	    pagename = (pagename.length > 0) ? pagename : "mainpage"; //When pagename is empty default to homepage
	    searchpage = (searchpage.length > 0) ? "/" + searchpage : searchpage; //When searchpage isn't empty make it /searchpage
	    size = (size.length > 0) ? size : "468x60"; //When size is empty default to 468x60
	    var width = size.substring(0, size.indexOf("x"));
	    var height = size.substring(size.indexOf("x") + 1, size.length);
	    var bbanner = "";
	    if (!document.layers) {
	    bbanner += "<iframe src='http://ad.doubleclick.net/adi/" + sitename + "/" + pagename + searchpage + ";kw=" + keyword + ";sz=" + size + ";tile=" + tile + ";ord='" + Math.random() * 10000000 + "?' name='frame" + id + "' width='" + width + "' height='" + height + "' border='0' frameborder='0' marginheight='0' marginwidth='0' scrolling='no'>\n";
	    bbanner += "<a href='http://ad.doubleclick.net/jump/" + sitename + "/" + pagename + searchpage + ";kw=" + keyword + ";sz=" + size + ";tile=" + tile + ";ord='" + Math.random() * 10000000 + "?'>\n";
	    bbanner += "<img src='http://ad.doubleclick.net/ad/" + sitename + "/" + pagename + searchpage + ";kw=" + keyword + ";sz=" + size + ";tile=" + tile + ";ord='" + Math.random() * 10000000 + "?' width='" + width + "' height='" + height + "' border='0'></a>\n";
	    bbanner += "</iframe>\n";
	    }
	    if (document.layers) {
	    bbanner += "<ilayer id='layer" + id + "' visibility='hide' height='" + height + "' top='0' left='0'></ilayer>\n";
	    }
	    return bbanner;
	}
	function getURLParamValue(param) {
		var paramValue = param.toLowerCase() + "=";
		var searchValue = window.location.search.toLowerCase();
		var searchValueParam = "";
		if (searchValue.indexOf(paramValue) != -1) {
			searchValueParam = window.location.search.toLowerCase().substring(searchValue.indexOf(paramValue),searchValue.length);
			if (searchValueParam.indexOf("&") != -1) searchValueParam = searchValueParam.substring(0,searchValueParam.indexOf("&"));
		}
		searchValueParam = searchValueParam.substring((param.length)+1,searchValueParam.length);
		return searchValueParam;
	}



	function JSwriteAD2(adSiteValue, adZoneValue, width, height, adPosition, adKeyword, adDcopt, pageNum) {
	    var bbanner = "";
	    var lsKey = "off";
	    var allcookies = document.cookie;
    	var adNumber = adPosition.substring(adPosition.indexOf("_")+1, adPosition.length);
		var random = Math.round(Math.random() * 100000000);
		if (!pageNum) pageNum = Math.round(Math.random() * 100000000);
		var aamsz = width + "x" + height;
		var wlp = window.location.pathname;

		//zone
		var zone = getURLParamValue("parentZone");
		if(zone != "") adZoneValue = zone;

		//gci
		var gci = (getURLParamValue("parentGci") != "") ? getURLParamValue("parentGci") : getOIDValue("gci");

		//taxonomy
		var tax = "";
		if(typeof tt_dartTAX_id != "undefined") tax = tt_dartTAX_id;
		if (tax == "" && getURLParamValue("parentTax") != "") tax = getURLParamValue("parentTax");
		if (tax == "") tax = getOIDValue("tax");

		// tax override ad group
		var adg = getURLParamValue("adg");
		if ((typeof JSadTaxID != "undefined") && (adg == '')) adg = JSadTaxID;
		
		//taxomomy cluster;
		var clu = (getOIDValue("clu") != "") ? getOIDValue("clu") : getURLParamValue("parentClu");
		if (typeof tt_hbxCL_id != "undefined") clu = tt_hbxCL_id;

		//path name
		var pth = getURLParamValue("parentPth");
		if (pth == "") {
			var wlp = window.location.pathname.substring(1,window.location.pathname.length);
			var pth = wlp.replace(eval("/\\//g"),".");
			if (pth.indexOf(".0,") != -1) pth = pth.substring(0,pth.indexOf(".0,"));
			if (pth.indexOf(".1,") != -1) pth = pth.substring(0,pth.indexOf(".1,"));
		}
		
		//ptile
		var ptile = adPosition.substring(adPosition.indexOf('_') + 1, adPosition.length);


		//keyword
		kw = getURLParamValue("parentKw");
		if (kw != '') adKeyword = kw;

		//infocenter id
		var iid = (getOIDValue("iid") != "") ? getOIDValue("iid") : getURLParamValue("parentIid");
		if ((iid == '') && (typeof JSinfoCenterID != "undefined")) iid = JSinfoCenterID;
		
		//infocenter name
		var iin = getURLParamValue("parentIin");
		if (iin == '') {
			if (typeof tt_rptInfoCenterMLC != "undefined") iin = tt_rptInfoCenterMLC;
			if ( (iin == '') && (typeof JSinfoCenterName != "undefined")) {
				iin = JSinfoCenterName;
			}
		}
		//resourcecenter id
		var rci = getURLParamValue("parentRci");
		//newsletter ad id
		var nlValue = "";
		if (window.location.search.indexOf("?ad=") != -1 || window.location.search.indexOf("&ad=") != -1) {
			var nlS = window.location.search;
			if (nlS.indexOf("?ad=") != -1) {
				nlValue = nlS.substring(nlS.indexOf("?ad=") + 4, nlS.length);
			} else {
				nlValue = nlS.substring(nlS.indexOf("&ad=") + 4, nlS.length);
			}
			if (nlValue.indexOf("&") != -1) nlValue = nlValue.substring(0, nlValue.indexOf("&"));
		}
		//track ad id
		var trackValue = "";
		if (window.location.search.indexOf("?track=") != -1 || window.location.search.indexOf("&track=") != -1) {
			var trackS = window.location.search;
			if (trackS.indexOf("?track=") != -1) {
				trackValue = trackS.substring(trackS.indexOf("?track=") + 7, trackS.length);
			} else {
				trackValue = trackS.substring(trackS.indexOf("&track=") + 7, trackS.length);
			}
			if (trackValue.indexOf("&") != -1) trackValue = trackValue.substring(0, trackValue.indexOf("&"));
		}
		//persistent ad id
		var sesValue = "";
		if (window.location.search.indexOf("?ses=") != -1 || window.location.search.indexOf("&ses=") != -1) {
			var sesS = window.location.search;
			if (sesS.indexOf("?ses=") != -1) {
				sesValue = sesS.substring(sesS.indexOf("?ses=") + 5, sesS.length);
			} else {
				sesValue = sesS.substring(sesS.indexOf("&ses=") + 5, sesS.length);
			}
			if (sesValue.indexOf("&") != -1) sesValue = sesValue.substring(0, sesValue.indexOf("&"));
		}
	    if (allcookies.indexOf("LS=") != -1 && allcookies.indexOf("LSA=") != -1) {
		var name = "LSA";
		var pos = allcookies.indexOf(name + "=");
		var start = pos + name.length + 1;
		var end = allcookies.indexOf(";",start);
		if (end == -1) end = allcookies.length;
		var LSAvalue = allcookies.substring(start, end);
		if (LSAvalue != 2) {
			name = "LS";
			pos = allcookies.indexOf(name + "=");
			start = pos + name.length + 1;
			end = allcookies.indexOf(";",start);
			if (end == -1) end = allcookies.length;
			var LSvalue = allcookies.substring(start, end);
			var LSuser = LSvalue.substr(LSvalue.indexOf(":")+1);
			LSvalue = LSvalue.substr(0,LSvalue.indexOf(":"));
			if (LSvalue.substring(LSvalue.length-1,LSvalue.length) == "A") lsKey = "on";
			LSvalue = LSvalue.substr(0,LSvalue.length-1);
			if (lsKey == "on") adKeyword = "ls" + LSvalue;
		}
	    }
		// check if referring page is Topics and has tax id in the URL. if so override primary tax
		var overwriteTax = false;
		if (document.referrer.indexOf("/topic") != -1 && window.location.href.indexOf("doubleclick.net") == -1 && getReferOIDValue("tax") != "" && getOIDValue("tax") == "") {
			// overwrite the tax and cluster values for DART based on the tax value in the query string
			overwriteTax = true;
			topicValue = getReferOIDValue("tax");
			var evalString = eval("typeof cl_id_" + topicValue);
			if( evalString == "undefined" ) {
				var clu = 'NONE';
			} else {
				var clu = eval("cl_id_" + topicValue);
			}
			var tax = topicValue;
		}
		else if (getCookieValue('topicTax') != '' && document.referrer.indexOf("informationCenter") != -1) // check for cookie set by CLT InfoCenter. if so, override primary tax
		{
			topicValue = getCookieValue('topicTax')
			var evalString = eval("typeof cl_id_" + topicValue);
			if( evalString == "undefined" ) {
				var clu = 'NONE';
			} else {
				var clu = eval("cl_id_" + topicValue);
			}
			var tax = topicValue;
		}
		//welcome ad exclusionary clause, this suppresses certain ads when the welcome ad is shown
		var categoryExclusion = "";
		if (typeof prestitialTimeOut != "undefined" || getURLParamValue("parentPre")) {
			categoryExclusion = "!category=prestitial;";
		}
	if (!document.layers) {
		if (adPosition.search(/ctHugeAd/g) != -1) {
			bbanner += "<iframe src='http://ad.doubleclick.net/adi/" + adSiteValue + "/" + adZoneValue + ";pos=0;pth=" + pth  + ";kw=" + adKeyword + ";gci=" + gci + ";tax=" + tax + ";clu=" + clu + ";adg=" + adg + ";sz=" + aamsz + ";dcopt=" + adDcopt + ";ptile=" + ptile + ";iid=" + iid + ";iin=" + iin + ";rci=" + rci + ";nl=" + nlValue + ";ses=" + sesValue + ";track=" + trackValue + ";" + categoryExclusion + "ord=" + pageNum + "?' width='" + width + "' height='" + height + "' border='0' frameborder='0' marginheight='0' marginwidth='0' scrolling='no' onload='resizeCLT(this)'>\n";
		} else {
			bbanner += "<iframe src='http://ad.doubleclick.net/adi/" + adSiteValue + "/" + adZoneValue + ";pos=0;pth=" + pth  + ";kw=" + adKeyword + ";gci=" + gci + ";tax=" + tax + ";clu=" + clu + ";adg=" + adg + ";sz=" + aamsz + ";dcopt=" + adDcopt + ";ptile=" + ptile + ";iid=" + iid + ";iin=" + iin + ";rci=" + rci + ";nl=" + nlValue + ";ses=" + sesValue + ";track=" + trackValue + ";" + categoryExclusion + "ord=" + pageNum + "?' width='" + width + "' height='" + height + "' border='0' frameborder='0' marginheight='0' marginwidth='0' scrolling='no'>\n";
		}
			bbanner += "<a href='http://ad.doubleclick.net/jump/" + adSiteValue + "/" + adZoneValue + ";pos=0;pth=" + pth  + ";kw=" + adKeyword + ";gci=" + gci + ";tax=" + tax + ";clu=" + clu + ";adg=" + adg + ";sz=" + aamsz + ";dcopt=" + adDcopt + ";ptile=" + ptile + ";iid=" + iid + ";iin=" + iin + ";rci=" + rci + ";nl=" + nlValue + ";ses=" + sesValue + ";track=" + trackValue + ";" + categoryExclusion + "ord=" + pageNum + "?'>\n";
			bbanner += "<img src='http://ad.doubleclick.net/ad/" + adSiteValue + "/" + adZoneValue + ";pos=0;pth=" + pth  + ";kw=" + adKeyword + ";gci=" + gci + ";tax=" + tax + ";clu=" + clu + ";adg=" + adg + ";sz=" + aamsz + ";dcopt=" + adDcopt + ";ptile=" + ptile + ";iid=" + iid + ";iin=" + iin + ";rci=" + rci + ";nl=" + nlValue + ";ses=" + sesValue + ";track=" + trackValue + ";" + categoryExclusion + "ord=" + pageNum + "?' width='" + width + "' height='" + height + "' border='0'></a>\n";
			bbanner += "</iframe>\n";
		}
		if (document.layers) {
			bbanner += "<ilayer id='" + adPosition + "' height='" + height + "' visibility='hide' top='0' left='0'></ilayer>\n";
			ADlayer[adPosition] = "http://ad.doubleclick.net/adl/" + adSiteValue + "/" + adZoneValue + ";pos=0;pth=" + pth  + ";kw=" + adKeyword + ";gci=" + gci + ";tax=" + tax + ";adg=" + adg + ";sz=" + aamsz + ";dcopt=" + adDcopt + ";ptile=" + ptile + ";iid=" + iid + ";iin=" + iin + ";rci=" + rci + ";nl=" + nlValue + ";ses=" + sesValue + ";track=" + trackValue + ";" + categoryExclusion + "ord=" + pageNum + "?'";
			//if (isNS) window.alert(adPosition + " - " + ADlayer[adPosition]);
		}
		if (window.location.search.indexOf("adIframe=on") != -1) window.alert("Ad: " + adPosition + "\n" + bbanner);
		if (window.location.search.indexOf("adString=on") != -1) window.alert("Ad: " + adPosition + "\n site=" + adSiteValue + " zone=" + adZoneValue + "\n ;pos=0;pth=" + pth + ";kw=" + adKeyword + ";gci=" + gci + ";tax=" + tax + ";clu=" + clu + ";adg=" + adg + ";sz=" + aamsz + ";dcopt=" + adDcopt + ";ptile=" + ptile + ";iid=" + iid + ";iin=" + iin + ";rci=" + rci + ";nl=" + nlValue + ";ses=" + sesValue + ";track=" + trackValue + ";" + categoryExclusion + "ord=" + pageNum);
	    return bbanner;
	}
	
	
	function JSwriteDARTString(adSiteValue, adZoneValue, width, height, adPosition, adKeyword, adDcopt, pageNum) {
	    var bbanner = "";
	    var lsKey = "off";
	    var allcookies = document.cookie;
    	var adNumber = adPosition.substring(adPosition.indexOf("_")+1, adPosition.length);
		var random = Math.round(Math.random() * 100000000);
		if (!pageNum) pageNum = Math.round(Math.random() * 100000000);
		var aamsz = width + "x" + height;
		var wlp = window.location.pathname;

		//zone
		var zone = getURLParamValue("parentZone");
		if(zone != "") adZoneValue = zone;

		//gci
		var gci = (getURLParamValue("parentGci") != "") ? getURLParamValue("parentGci") : getOIDValue("gci");

		//taxonomy
		var tax = "";
		if(typeof tt_dartTAX_id != "undefined") tax = tt_dartTAX_id;
		if (tax == "" && getURLParamValue("parentTax") != "") tax = getURLParamValue("parentTax");
		if (tax == "") tax = getOIDValue("tax");

		// tax override ad group
		var adg = getURLParamValue("adg");
		if ((typeof JSadTaxID != "undefined") && (adg == '')) adg = JSadTaxID;
		
		//taxomomy cluster;
		var clu = (getOIDValue("clu") != "") ? getOIDValue("clu") : getURLParamValue("parentClu");
		if (typeof tt_hbxCL_id != "undefined") clu = tt_hbxCL_id;

		//path name
		var pth = getURLParamValue("parentPth");
		if (pth == "") {
			var wlp = window.location.pathname.substring(1,window.location.pathname.length);
			var pth = wlp.replace(eval("/\\//g"),".");
			if (pth.indexOf(".0,") != -1) pth = pth.substring(0,pth.indexOf(".0,"));
			if (pth.indexOf(".1,") != -1) pth = pth.substring(0,pth.indexOf(".1,"));
		}
		
		//ptile
		var ptile = adPosition.substring(adPosition.indexOf('_') + 1, adPosition.length);


		//keyword
		kw = getURLParamValue("parentKw");
		if (kw != '') adKeyword = kw;

		//infocenter id
		var iid = (getOIDValue("iid") != "") ? getOIDValue("iid") : getURLParamValue("parentIid");
		if ((iid == '') && (typeof JSinfoCenterID != "undefined")) iid = JSinfoCenterID;
		
		//infocenter name
		var iin = getURLParamValue("parentIin");
		if (iin == '') {
			if (typeof tt_rptInfoCenterMLC != "undefined") iin = tt_rptInfoCenterMLC;
			if ( (iin == '') && (typeof JSinfoCenterName != "undefined")) {
				iin = JSinfoCenterName;
			}
		}
		//resourcecenter id
		var rci = getURLParamValue("parentRci");
		//newsletter ad id
		var nlValue = "";
		if (window.location.search.indexOf("?ad=") != -1 || window.location.search.indexOf("&ad=") != -1) {
			var nlS = window.location.search;
			if (nlS.indexOf("?ad=") != -1) {
				nlValue = nlS.substring(nlS.indexOf("?ad=") + 4, nlS.length);
			} else {
				nlValue = nlS.substring(nlS.indexOf("&ad=") + 4, nlS.length);
			}
			if (nlValue.indexOf("&") != -1) nlValue = nlValue.substring(0, nlValue.indexOf("&"));
		}
		//track ad id
		var trackValue = "";
		if (window.location.search.indexOf("?track=") != -1 || window.location.search.indexOf("&track=") != -1) {
			var trackS = window.location.search;
			if (trackS.indexOf("?track=") != -1) {
				trackValue = trackS.substring(trackS.indexOf("?track=") + 7, trackS.length);
			} else {
				trackValue = trackS.substring(trackS.indexOf("&track=") + 7, trackS.length);
			}
			if (trackValue.indexOf("&") != -1) trackValue = trackValue.substring(0, trackValue.indexOf("&"));
		}
		//persistent ad id
		var sesValue = "";
		if (window.location.search.indexOf("?ses=") != -1 || window.location.search.indexOf("&ses=") != -1) {
			var sesS = window.location.search;
			if (sesS.indexOf("?ses=") != -1) {
				sesValue = sesS.substring(sesS.indexOf("?ses=") + 5, sesS.length);
			} else {
				sesValue = sesS.substring(sesS.indexOf("&ses=") + 5, sesS.length);
			}
			if (sesValue.indexOf("&") != -1) sesValue = sesValue.substring(0, sesValue.indexOf("&"));
		}
	    if (allcookies.indexOf("LS=") != -1 && allcookies.indexOf("LSA=") != -1) {
		var name = "LSA";
		var pos = allcookies.indexOf(name + "=");
		var start = pos + name.length + 1;
		var end = allcookies.indexOf(";",start);
		if (end == -1) end = allcookies.length;
		var LSAvalue = allcookies.substring(start, end);
		if (LSAvalue != 2) {
			name = "LS";
			pos = allcookies.indexOf(name + "=");
			start = pos + name.length + 1;
			end = allcookies.indexOf(";",start);
			if (end == -1) end = allcookies.length;
			var LSvalue = allcookies.substring(start, end);
			var LSuser = LSvalue.substr(LSvalue.indexOf(":")+1);
			LSvalue = LSvalue.substr(0,LSvalue.indexOf(":"));
			if (LSvalue.substring(LSvalue.length-1,LSvalue.length) == "A") lsKey = "on";
			LSvalue = LSvalue.substr(0,LSvalue.length-1);
			if (lsKey == "on") adKeyword = "ls" + LSvalue;
		}
	    }
		// check if we're accessing a piece of content that has "topic=XXXXX" in the URL
		var overwriteTax = false;
		if (document.referrer.indexOf("/topic") != -1 && window.location.href.indexOf("doubleclick.net") == -1 && getReferOIDValue("tax") != "" && getOIDValue("tax") == "") {
			// overwrite the tax and cluster values for DART based on the tax value in the query string

			overwriteTax = true;
			topicValue = getReferOIDValue("tax");
			var evalString = eval("typeof cl_id_" + topicValue);
			if( evalString == "undefined" ) {
				var clu = 'NONE';
			} else {
				var clu = eval("cl_id_" + topicValue);
			}
			var tax = topicValue;
		}
			bbanner += "http://ad.doubleclick.net/adi/" + adSiteValue + "/" + adZoneValue + ";pos=0;pth=" + pth  + ";kw=" + adKeyword + ";gci=" + gci + ";tax=" + tax + ";clu=" + clu + ";adg=" + adg + ";sz=" + aamsz + ";dcopt=" + adDcopt + ";ptile=" + ptile + ";iid=" + iid + ";iin=" + iin + ";rci=" + rci + ";nl=" + nlValue + ";ses=" + sesValue + ";track=" + trackValue + ";ord=" + pageNum + "?";

		if (window.location.search.indexOf("adIframe=on") != -1) window.alert("Ad: " + adPosition + "\n" + bbanner);
		if (window.location.search.indexOf("adString=on") != -1) window.alert("Ad: " + adPosition + "\n site=" + adSiteValue + " zone=" + adZoneValue + "\n ;pos=0;pth=" + pth + ";kw=" + adKeyword + ";gci=" + gci + ";tax=" + tax + ";clu=" + clu + ";adg=" + adg + ";sz=" + aamsz + ";dcopt=" + adDcopt + ";ptile=" + ptile + ";iid=" + iid + ";iin=" + iin + ";rci=" + rci + ";nl=" + nlValue + ";ses=" + sesValue + ";track=" + trackValue + ";ord=" + pageNum);
	    return bbanner;
	}
	
	function JSwriteLeaderBoard2(adSiteValue, adZoneValue, width, height, adPosition, adKeyword, adDcopt, pageNum) {
		var width = (!width) ? 728 : width;
		var height = (!height) ? 90 : height;
	    var size = width + "x" + height;
	    var lsKey = "off";
	    var allcookies = document.cookie;
		var position = "0";
	    var sLdrBoard = new String();
		var adNumber = adPosition.substring(adPosition.indexOf("_")+1,adPosition.length);
		var rNum = Math.random() * 10000000;
		if (!pageNum) pageNum = Math.round(Math.random() * 100000000);
	
		//gci
		var gci = getOIDValue("gci");
		
		//taxonomy
		var tax = "";
		if(typeof tt_dartTAX_id != "undefined") tax = tt_dartTAX_id;
		if (tax == "") tax = getOIDValue("tax");

		//taxomomy cluster;
		var clu = "";
		if (typeof tt_hbxCL_id != "undefined") clu = tt_hbxCL_id;
			
		// tax override ad group
		var adg = getURLParamValue("adg");
		if (typeof JSadTaxID != "undefined" && adg == '') adg = JSadTaxID;
		
		//path name
		var wlp = window.location.pathname.substring(1,window.location.pathname.length);
		var pth = wlp.replace(eval("/\\//g"),".");
		if (pth.indexOf(".0,") != -1) pth = pth.substring(0,pth.indexOf(".0,"));
		if (pth.indexOf(".1,") != -1) pth = pth.substring(0,pth.indexOf(".1,"));

		var ptile = adPosition.substring(adPosition.indexOf('_') + 1, adPosition.length);

		//infocenter id
		var iid = getOIDValue("iid");
		//infocenter name
		var iin = "";
		if (typeof tt_rptInfoCenterMLC != "undefined") iin = tt_rptInfoCenterMLC;
		//resourcecenter id
		var rci = "";
		//newsletter ad id
		var nlValue = "";
		if (window.location.search.indexOf("?ad=") != -1 || window.location.search.indexOf("&ad=") != -1) {
			var nlS = window.location.search;
			if (nlS.indexOf("?ad=") != -1) {
				nlValue = nlS.substring(nlS.indexOf("?ad=") + 4, nlS.length);
			} else {
				nlValue = nlS.substring(nlS.indexOf("&ad=") + 4, nlS.length);
			}
			if (nlValue.indexOf("&") != -1) nlValue = nlValue.substring(0, nlValue.indexOf("&"));
		}
		//track ad id
		var trackValue = "";
		if (window.location.search.indexOf("?track=") != -1 || window.location.search.indexOf("&track=") != -1) {
			var trackS = window.location.search;
			if (trackS.indexOf("?track=") != -1) {
				trackValue = trackS.substring(trackS.indexOf("?track=") + 7, trackS.length);
			} else {
				trackValue = trackS.substring(trackS.indexOf("&track=") + 7, trackS.length);
			}
			if (trackValue.indexOf("&") != -1) trackValue = trackValue.substring(0, trackValue.indexOf("&"));
		}
		//persistent ad id
		var sesValue = "";
		if (window.location.search.indexOf("?ses=") != -1 || window.location.search.indexOf("&ses=") != -1) {
			var sesS = window.location.search;
			if (sesS.indexOf("?ses=") != -1) {
				sesValue = sesS.substring(sesS.indexOf("?ses=") + 5, sesS.length);
			} else {
				sesValue = sesS.substring(sesS.indexOf("&ses=") + 5, sesS.length);
			}
			if (sesValue.indexOf("&") != -1) sesValue = sesValue.substring(0, sesValue.indexOf("&"));
		}
	    if (allcookies.indexOf("LS=") != -1 && allcookies.indexOf("LSA=") != -1) {
			var name = "LSA";
			var pos = allcookies.indexOf(name + "=");
			var start = pos + name.length + 1;
			var end = allcookies.indexOf(";",start);
			if (end == -1) end = allcookies.length;
			var LSAvalue = allcookies.substring(start, end);
			if (LSAvalue != 2) {
				name = "LS";
				pos = allcookies.indexOf(name + "=");
				start = pos + name.length + 1;
				end = allcookies.indexOf(";",start);
				if (end == -1) end = allcookies.length;
				var LSvalue = allcookies.substring(start, end);
				var LSuser = LSvalue.substr(LSvalue.indexOf(":")+1);
				LSvalue = LSvalue.substr(0,LSvalue.indexOf(":"));
				if (LSvalue.substring(LSvalue.length-1,LSvalue.length) == "A") lsKey = "on";
				LSvalue = LSvalue.substr(0,LSvalue.length-1);
				if (lsKey == "on") adKeyword = "ls" + LSvalue;
			}
	    }
		// check if we're accessing a piece of content that has "topic=XXXXX" in the URL
		var overwriteTax = false;
		if (document.referrer.indexOf("/topic") != -1 && window.location.href.indexOf("doubleclick.net") == -1 && getReferOIDValue("tax") != "" && getOIDValue("tax") == "") {
			// overwrite the tax and cluster values for DART based on the tax value in the query string

			overwriteTax = true;
			topicValue = getReferOIDValue("tax");
			var evalString = eval("typeof cl_id_" + topicValue);
			if( evalString == "undefined" ) {
				var clu = 'NONE';
			} else {
				var clu = eval("cl_id_" + topicValue);
			}
			var tax = topicValue;
		} else if (getCookieValue('topicTax') != '' && document.referrer.indexOf("informationCenter") != -1) // check for cookie set by CLT InfoCenter. if so, override primary tax
		{
			topicValue = getCookieValue('topicTax')
			var evalString = eval("typeof cl_id_" + topicValue);
			if( evalString == "undefined" ) {
				var clu = 'NONE';
			} else {
				var clu = eval("cl_id_" + topicValue);
			}
			var tax = topicValue;
		}
		//welcome ad exclusionary clause
		var categoryExclusion = "";
		if (typeof prestitialTimeOut != "undefined") {
			categoryExclusion = "!category=prestitial;";
		}
		if (isLayers) {
			sLdrBoard += '<ilayer id="'+adPosition+'" height="'+height+'" visibility="hide" top="0" left="0"></ilayer>';
			ADlayer[adPosition] = "http://ad.doubleclick.net/adl/"+adSiteValue+"/"+adZoneValue+";pos=0;pth="+pth+";kw="+adKeyword+";gci="+gci+";tax="+tax+";clu="+clu+";adg="+adg+";iid="+iid+";iin="+iin+";rci="+rci+";nl="+nlValue+";ses="+sesValue+";track="+trackValue+";sz="+size+";dcopt="+adDcopt+";ptile="+adNumber+";" + categoryExclusion + "ord="+pageNum+"?"
		} else {
			var sURL = new String();
			if (((isNS) && (apV < 6.2)) || (isOP) || (isXX) || (typeof JSleaderboardNF == "boolean" && JSleaderboardNF == true)) {
				sURL = "http://ad.doubleclick.net/adi/"+adSiteValue+"/"+adZoneValue+";pos=0;pth="+pth+";kw="+adKeyword+";gci="+gci+";tax="+tax+";clu="+clu+";adg="+adg+";iid="+iid+";iin="+iin+";rci="+rci+";nl="+nlValue+";ses="+sesValue+";track="+trackValue+";sz="+size+";dcopt="+adDcopt+";ptile="+adNumber+";" + categoryExclusion + "ord="+pageNum+"?";
			} else {
				if (window.location.pathname.indexOf("Rhythmyx/assembler/render") != "-1") sURL = "/Rhythmyx/web_resources";
				sURL += "/techtarget/leaderboard.html?" + escape("http://ad.doubleclick.net/adj/"+adSiteValue+"/"+adZoneValue+";pos=0;pth="+pth+";kw="+adKeyword+";gci="+gci+";tax="+tax+";clu="+clu+";adg="+adg+";iid="+iid+";iin="+iin+";rci="+rci+";nl="+nlValue+";ses="+sesValue+";track="+trackValue+";sz="+size+";dcopt="+adDcopt+";ptile="+adNumber+";" + categoryExclusion + "ord="+pageNum+"?");
			}
			sLdrBoard += '<iframe src="'+sURL+'" name="frame_'+adPosition+'" id="fra728x90" width="'+width+'" height="'+height+'" border="0" frameborder="0" marginheight="0" marginwidth="0" scrolling="no">';
			sLdrBoard += '<a href="http://ad.doubleclick.net/jump/'+adSiteValue+'/'+adZoneValue+';pos=0;pth='+pth+';kw='+adKeyword+';gci='+gci+';tax='+tax+';clu='+clu+';adg='+adg+';iid='+iid+';iin='+iin+';rci='+rci+';nl='+nlValue+';ses='+sesValue+';track='+trackValue+';sz='+size+';dcopt='+adDcopt+';ptile='+adNumber+';' + categoryExclusion + 'ord='+pageNum+'?">';
			sLdrBoard += '<img src="http://ad.doubleclick.net/ad/'+adSiteValue+'/'+adZoneValue+';pos=0;pth='+pth+';kw='+adKeyword+';gci='+gci+';tax='+tax+';clu='+clu+';adg='+adg+';iid='+iid+';iin='+iin+';rci='+rci+';nl='+nlValue+';ses='+sesValue+';track='+trackValue+';sz='+size+';dcopt='+adDcopt+';ptile='+adNumber+';' + categoryExclusion + 'ord='+pageNum+'?" width="'+width+'" height="'+height+'" border="0"></a>';
			sLdrBoard += '</iframe>';
		}
		if (window.location.search.indexOf("adIframe=on") != -1) window.alert("Ad: " + adPosition + "\n" + unescape(sLdrBoard));
		if (window.location.search.indexOf("adString=on") != -1) window.alert("Ad: " + adPosition + "\n" + "site="+adSiteValue+" zone="+ adZoneValue + "\n ;pos=0;pth="+pth+";kw="+adKeyword+";gci="+gci+";tax="+tax+";clu="+clu+";adg="+adg+";iid="+iid+";iin="+iin+";rci="+rci+";nl="+nlValue+";ses="+sesValue+";track="+trackValue+";sz="+size+";dcopt="+adDcopt+";ptile="+adNumber+";" + categoryExclusion + "ord="+pageNum);
	    return (sLdrBoard);
	}

	function JSwriteADInfo(sitevalue, areavalue, width, height, position, kw, category, vibe, pageNum) {
		var adNum = position.substring(position.indexOf("_")+1, position.length);
		var bbbanner = "";
		bbbanner += "<table cellspacing=0 cellpadding=0 border=0 width=100% bgcolor=#DFDFDF><tr><td>\n";
		bbbanner += "<a class=small href=\"/ADinfo?sitevalue=" + sitevalue + "&areavalue=" + areavalue + "&width=" + width + "&height=" + height + "&position=" + position + "&kw=" + kw + "&cat=" + JSadCategory + "&vibe=" + vibe + "&adpageid=" + pageNum + "\" target=\"ADwindow\">\n";
		bbbanner +="<img src=\"/digitalguide/images/Misc/arrow_sort_down_666666.gif\" border=0> Information for AD" + adNum + "</a>\n";
		bbbanner += "</td></tr></table>\n";
		return bbbanner;
	}

	function JSwriteAdLayer(id, sitename, pagename, searchpage, size, keyword) {
	    var tile = id.charAt(id.length - 1); //This obtains the tile based on the id
	    sitename = (sitename.length > 0) ? sitename : "searchNetworking.com"; //When sitename is empty default to guide.com
	    pagename = (pagename.length > 0) ? pagename : "homepage"; //When pagename is empty default to homepage
	    searchpage = (searchpage.length > 0) ? "/" + searchpage : searchpage; //When searchpage isn't empty make it /searchpage
	    size = (size.length > 0) ? size : "468x60"; //When size is empty default to 468x60
	    var llayer = "";
	    llayer += "<layer src=\"http://ad.doubleclick.net/adl/" + sitename + "/" + pagename + searchpage + ";kw=" + keyword + ";sz=" + size + ";tile=" + tile + ";ord=" + Math.random() * 10000000 + "?\" visibility=\"hide\" onload=\"moveToAbsolute(layer" + id + ".pageX, layer" + id + ".pageY); visibility='show'\"></layer>\n";
	    return llayer;
	}

	var LSValue = "";
	var lsbool = false;

	function JSwriteLSAdBanner(id, sitename, pagename, searchpage, size, keyword, adname) {
	
		var adname = (!adname) ? "ad" : adname;
		//var lsbool = false;
		if (allcookies.indexOf("LS=") != -1 && allcookies.indexOf("LSAD=") == -1) {
			
			var name = "LS";
			var pos = allcookies.indexOf(name + "=");
			var start = pos + name.length + 1;
			var end = allcookies.indexOf(";",start);
			if (end == -1) end = allcookies.length;
			//var LSvalue = allcookies.substring(start, end);
			LSvalue = allcookies.substring(start, end);
			
			var LSuser = LSvalue.substr(LSvalue.indexOf(":")+1);
			LSvalue = LSvalue.substr(0,LSvalue.indexOf(":"));
			if (LSvalue.substring(LSvalue.length-1,LSvalue.length) == "A") {
				lsbool = true;
			}
			LSvalue = LSvalue.substr(0,LSvalue.length-1);
		}
		size = (size.length > 0) ? size : "468x60"; //When size is empty default to 468x60
		var width = size.substring(0, size.indexOf("x"));
		var height = size.substring(size.indexOf("x") + 1, size.length);
		var bbanner = "";
		if (lsbool == true) {
			if (!document.layers) {
				bbanner += "<iframe src=\"http://searchNetworking.techtarget.com/liftStudy/" + LSvalue + "/" + adname + "\" name=\"frame" + id + "\" width=\"" + width + "\" height=\"" + height + "\" border=\"0\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\" scrolling=\"no\">\n";
				bbanner += "<a href=\"http://searchNetworking.techtarget.com/liftStudy/" + LSvalue + "/" + adname + "\">\n";
				bbanner += "<img src=\"http://searchNetworking.techtarget.com/liftStudy/" + LSvalue + "/" + adname + "\" width=\"" + width + "\" height=\"" + height + "\" border=\"0\"></a>\n";
				bbanner += "</iframe>\n";
			}
	
			if (document.layers) {
				bbanner += "<ilayer id='layer" + id + "' visibility='hide' height='" + height + "' top='0' left='0'></ilayer>\n";
			}
		} else {
			bbanner += JSwriteAdBanner(id, sitename, pagename, searchpage, size, keyword);
		}
	
		return bbanner;
	}

	function JSwriteLSAdLayer(id, sitename, pagename, searchpage, size, keyword, adname) {
		var adname = (!adname) ? "ad" : adname;
		var llayer = "";
		if (lsbool == true) {
			llayer += "<layer src=\"http://searchNetworking.techtarget.com/liftStudy/" + LSvalue + "/" + adname + "\" visibility=\"hide\" onload=\"moveToAbsolute(layer" + id + ".pageX, layer" + id + ".pageY); visibility='show'\"></layer>\n";
		
		} else {
			llayer += JSwriteAdLayer(id, sitename, pagename, searchpage, size, keyword);
	
		}
	
		return llayer;
	}

  /* Legacy Ad Variables Section - used on WebX and WhatIs SkyScraper */

	var adTag = Math.random() * 10000000;
	var adTag1 = Math.random() * 10000000;
	var adTag2 = Math.random() * 10000000;
	var adTag3 = Math.random() * 10000000;
	var dgSponsor = Math.random() * 10000000;
	var dgGiveAway = Math.random() * 10000000;
	var dgPromo = Math.random() * 10000000;
	var dgSkyScraper = Math.random() * 10000000;

	function getAdNumber(item) {
		return item;
	}


  /* Leaderboard Ad Section */

	var bMoveBack728x90, imgCollapse728x90, imgExpand728x90, oFrame728x90, oToggle728x90;

	function setLeaderBoard(oCCmd) {
	
	
		collapsePath = "http://media.techtarget.com/digitalguide/images/Misc/ad_sideHeader_collapse_728_90.gif";
		expandPath = "http://media.techtarget.com/digitalguide/images/Misc/ad_sideHeader_expand_728_90.gif";
		swapWidth = 19;
	 if (!PAGE_LOADED) {
	s728x90 = setTimeout('setLeaderBoard("'+oCCmd+'")',100);
	return;
	}
	if (typeof s728x90 != "undefined")
	clearTimeout(s728x90);
	oFrame728x90 = getObj('fra728x90');
	if (oFrame728x90) {
	var oDoc;
	if (oFrame728x90.contentWindow)
	oDoc = oFrame728x90.contentWindow.document;
	else if (window.frames)
	oDoc = window.frames[oFrame728x90.name].document;
	else return;
	oToggle728x90 = document.toggle728x90;
	var h = findHeight(oDoc.body.firstChild);
	if ((oToggle728x90) && (h > 91)) {
	imgCollapse728x90 = new Image(swapWidth,90);
	imgCollapse728x90.src = ((!oCCmd) ? '' : oCCmd) + collapsePath;
	imgExpand728x90 = new Image(swapWidth,90);
	imgExpand728x90.src = expandPath;
	if (cookieExists('adv') == -1) {
	setSessionCookie('adv',1);
	bMoveBack728x90 = true;
	t728x90 = setTimeout('expandLeaderBoard()',100);}
	else t728x90 = setTimeout('collapseLeaderBoard()',100);
	}
	}
	}

	function collapseLeaderBoard() {
	if (typeof b728x90 != "undefined") {
	bMoveBack728x90 = false;
	clearTimeout(b728x90);
	}
	if (typeof t728x90 != "undefined")
	clearTimeout(t728x90);
	if (oToggle728x90.src != imgExpand728x90.src) {
	oToggle728x90.src = imgExpand728x90.src;
	oToggle728x90.onclick = expandLeaderBoard;
	}
	var h = findHeight(oFrame728x90);
	if (h > 90) {
	oFrame728x90.style.height = (h-30) + "px";
	t728x90 = setTimeout('collapseLeaderBoard()',100);
	} else {
	t728x90 = setTimeout('null',1);
	}
	}

	function expandLeaderBoard() {
	if (typeof t728x90 != "undefined")
	clearTimeout(t728x90);
	if (oToggle728x90.src != imgCollapse728x90.src) {
	oToggle728x90.src = imgCollapse728x90.src;
	oToggle728x90.onclick = collapseLeaderBoard;
	}
	var h = findHeight(oFrame728x90);
	if (h < 300) {
	oFrame728x90.style.height = (h+30) + "px";
	t728x90 = setTimeout('expandLeaderBoard()',100);
	} else {
	if (bMoveBack728x90) b728x90 = setTimeout('collapseLeaderBoard()',4000);
	t728x90 = setTimeout('null',1);
	}
	}


   /* Sponsor Move Function */

	function sponsorMove() {
		var moveX = 3;
		var moveY = 5;
		var oSponsor;
		var oHolder;
		if ((isNS) && (isLayers)) {
			oSponsor = getObj('layerMove');
			oHolder = getObj('layerHolder');
			if ((oSponsor) && (oHolder)) {
				oSponsor.moveToAbsolute(oHolder.pageX+moveX,oHolder.pageY+moveY);
				oSponsor.visibility = "show";
			}
		} else {
			oSponsor = getObj('divMove');
			oHolder = getObj('divHolder');
			if ((oSponsor) && (oHolder)) {
				moveObjectTo(oSponsor,findLeft(oHolder)+moveX,findTop(oHolder)+moveY);
				oSponsor.style.visibility = "visible";
			}
		}
	}

	function sponsorMove_old() {
		var moveX=3;
		var moveY=5;
		NN4=(document.layers) ? 1 : 0;
		NN6=(document.getElementById && !document.all) ? 1 : 0;
		IE=(document.all) ? 1 : 0;

		if (IE) {
			var agt=navigator.userAgent.toLowerCase();
			var is_mac=(agt.indexOf("mac")!=-1);
			var is_major=parseInt(navigator.appVersion);
			var msie_vers_start=agt.indexOf("msie")+5;
			var msie_real_vers=parseFloat(agt.substring(msie_vers_start, msie_vers_start+3));
			var mac45=(is_mac && (msie_real_vers < 5)) ? 1 : 0;

			if (mac45) {
				temp=document.all.divMove.innerHTML;
				//alert(temp);
				document.all.divMove.innerHTML="";
				document.all.divHolder.innerHTML=temp;
			} else {
				divHolder.getRealLeft = getRealLeft;
				divHolder.getRealTop = getRealTop;

				function getRealLeft() {
					xPos = this.offsetLeft;
					tempEl = this.offsetParent;
					while (tempEl != null) {
						xPos += tempEl.offsetLeft;
						tempEl = tempEl.offsetParent;
					}
					return xPos;
				}

				function getRealTop() {
					yPos = this.offsetTop;
					tempEl = this.offsetParent;
					while (tempEl != null) {
						yPos += tempEl.offsetTop;
						tempEl = tempEl.offsetParent;
					}
					return yPos;
				}

				Left=divHolder.getRealLeft();
				Top=divHolder.getRealTop();

				divMove.style.left=Left+moveX;
				divMove.style.top=Top+moveY;

				divMove.style.visibility="visible";
			}
		} else if (NN4) {
			document.layerMove.moveToAbsolute(document.layerHolder.pageX+moveX, document.layerHolder.pageY+moveY);
			document.layerMove.visibility='show';
		} else if (NN6) {
			tempDiv=document.getElementById("Holder");
			Top=document.defaultView.getComputedStyle(tempDiv, "").getPropertyValue("top");
			Left=document.defaultView.getComputedStyle(tempDiv, "").getPropertyValue("left");

			if (Top.indexOf("px")) {
				Top=Top.slice(0,-2);
				Top=Top*1;
			}

			if (Left.indexOf("px")) {
				Left=Left.slice(0,-2);
				Left=Left*1;
			}

			document.getElementById("divMove").style.top=Top+moveY;
			document.getElementById("divMove").style.left=Left+moveX;
			document.getElementById("divMove").style.visibility="visible";
		}
	}

  /* Check Email Function */

	function checkEmail (emailStr) 
	{
		var num_error=0;
		var NewemailStr="";
		var emailPat=/^(.+)@(.+)$/
		var specialChars="\\(\\)\\{\\}\/%?\\$\\*\\^\\|\\.=&`~#!<>@,;:\\\\\\\"\\.\\[\\]"
		var invalidchars="\\(\\)\\{\\}\/%?\\$\\s\\^~#!&`\\*\\|=@<>,;:\\\\\\\"\\[\\]'"
		var validChars="\[^\\s" + specialChars + "\]"
		var validChars1="\[^\\s" + invalidchars + "\]"
		var quotedUser=/(\"[^\"]*\"\')/
		var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/
		var atom=validChars + '+'
		var atom1=validChars1 + '+'
		var word="(" + atom + "|" + quotedUser + ")"
		var word1="(" + atom1 + "|" + quotedUser + ")"
		var userPat=new RegExp("^" + word + "(\\." + word + ")*$")
		var domainPat=new RegExp("^" +  word1 + "(" + word1 + ")*$")

		if (emailStr == "") {
			// change to false
			return "An email address is required";
		} else {
			var NewemailStr=emailStr;
			// need to trim space beginning and the end each email, then pass back to the form. 
		}

		var matchArray=NewemailStr.match(emailPat);

		if (matchArray==null) {
			return "E-mail address is not a valid format (check @ and .'s)";
		}
		var user=matchArray[1];
		var domain=matchArray[2];

		if (user.match(userPat)==null) {
		    return "The username in the email address doesn't seem to be valid.";
		}

// 05/27/03 BobH: Commented out below lines (see IT # 3424)
//		if(user.length>0)
//		{
//			if((user.charAt(0)=="-")||(user.charAt(0)=="_"))	
//			{
//				return "The username in the email address doesn't seem to be valid.";
//			} else if ((user.charAt(user.length-1)=="_")||(user.charAt(user.length-1)=="-")) {
//				return "The username in the email address doesn't seem to be valid.";
//			}				 
//		}

		var IPArray=domain.match(ipDomainPat);
		if (IPArray!=null) 
		{
			for (var i=1;i<=4;i++)
			{
				if (IPArray[i]>255)
			 	{
					return "Destination IP address in the email address is invalid!";
				}
			}
			return true;
		}

		var domainArray=domain.match(domainPat);	
		if (domainArray==null) {
			return "The domain name in the email address doesn't seem to be valid.";
		}

		if(domain.length>0)
		{
			if(domain.charAt(0)==".")	
			{
				return "The domain name in the email address doesn't seem to be valid.";
			} else if(domain.charAt(domain.length-1)==".")
			         {
				return "The domain name in the email address doesn't seem to be valid.";
			         } else {
				var errors=0;
				for(var k=1; k<domain.length; k++)
				{
					if(domain.charAt(k)==".")
						errors++;
					if((domain.charAt(k)==".") && (domain.charAt(k+1)=="."))
				              {
					     errors=errors + 5;
					     k=domain.length;
					}
				}
				if(errors>4)
				{
					return "The domain name in the email address doesn't seem to be valid.";
				}
			}				 
		}

		var atomPat=new RegExp(atom,"g");
		var domArr=domain.match(atomPat);

		var len=domArr.length;
		if (domArr[domArr.length-1].length < 2) 
		{
		   return "The email address must end in a valid domain.";
		}

		if (len<2)
	              {
		   return "This email address is missing a hostname!";
		}

		return "good";
	}

  /* Validate Email Function */

	function validateEmail (emailAddr) 
	{
		var emailAlert = checkEmail(emailAddr)

		if (emailAlert == 'good')
			return true;
		else 
		{
			alert(emailAlert);
			return false;
		}
	}

  /* Build URL Function */

	function buildURL(form, site) {

		// search400 uses "AS/400" for it's short name, so regexp out the "/"
		var regexp = /(\/)/g;;
		var name = site.replace(regexp,"");
		var regexp = / /g;;
		var name = name.replace(regexp,"");	// Get rid of spaces, for "Systems Management"

		var URL = form.URL.value;
		URL += "&email=" + form.email.value;

		if (validateEmail(form.email.value)) {
			window.open( URL, name, 'height=400,width=285,scrollbars=yes');
		}
	}

  /* Add Redirect Function */

	function addRedirectString(aCollection) {
		//redirectString is built in JSvariables, this function is called from the Footer template
		var i = 0;
		for(i = 0; i < aCollection.length; i++) {
			if (aCollection[i].href.indexOf("mailto:") == -1 && aCollection[i].href.indexOf("javascript:") == -1 && pathCoBrand[aCollection[i].pathname.substring(0, aCollection[i].pathname.indexOf("/"))] == "on") {
				aCollection[i].href = redirectString + aCollection[i].href;
			}
		}	
	}

	function getURLParamValue(param) {
		var paramValue = param.toLowerCase() + "=";
		var searchValue = window.location.search.toLowerCase();
		var searchValueParam = "";
		if (searchValue.indexOf(paramValue) != -1) {
			searchValueParam = window.location.search.substring(searchValue.indexOf(paramValue),searchValue.length);
			if (searchValueParam.indexOf("&") != -1) searchValueParam = searchValueParam.substring(0,searchValueParam.indexOf("&"));
		}
		searchValueParam = searchValueParam.substring((param.length)+1,searchValueParam.length);
		return searchValueParam;
	}

	
	function validateHandle(handleStr) {
		// performs checks on illegal characters and minimun length 
		var ttalert = '';

		// Search for valid chars: A-Z, a-z, and 0-9
		var handlePat=/[^a-zA-Z0-9]/
		var handleResult=handleStr.search(handlePat)

		// Check to make sure the handle has valid characters in it
		if (handleResult != -1) {
			ttalert += "The handle name must contain ONLY alphanumeric characters. Spaces are NOT allowed. \n";
		}
		
		//Check the length of the username
		if (handleStr.length < 6) {
			ttalert += "The handle must be 6 characters or greater in length. \n";
		}
		return ttalert;
	}

	function popUp(url , name, params) {
		if (!name) {
			var winName = "popUp";
		} else {			
			var winName = name;
		}
		if (!params) {
			var winParams = "width=400,height=350,toolbar=no,menubar=no,location=no,scrollbars=yes,resize=no";
		} else {
			var winParams = params
		}			
		var OpenWindow = window.open(url, winName , winParams);
	}
	
	function reservedHandle(handleStr) {
		//Check reserved keywords
		var ttalert = '';
		var reservedList = 'ipc itpeer peerconnect techtarget itconnect itpeerconnect';
		reservedList += ' itknowledgeexchange itknowledgexchange itknowledge itexchange';
		reservedList += ' itxchange knowledgeexchange knowledgexchange itke ike';
		reservedList += ' itkexchange itknowledgex itkxchange kexchange kxchange';
		var checkHandle = handleStr.toLowerCase();
		if ( reservedList.indexOf(checkHandle) != -1 ) {
			ttalert += 'Handle: ' + handleStr + ' is already in use \n';
		}	
		return ttalert;		
	}
	
	function replaceSID0() {
		//replace sid0 with OID sid value
		var fCollection = document.forms;
		for(var fi = 0; fi < fCollection.length; fi++) {
			if (fCollection[fi].action.indexOf("sid0") != -1) {
				fCollection[fi].action = fCollection[fi].action.replace("sid0","sid7");
			}
		}	
	}
	
	function replaceSID0onEvent() {
		//replace sid0 with OID sid value, for non-Netscape browsers
		var tempText = "";
		var eHref = (window.event.srcElement.tagName == "A") ? window.event.srcElement : window.event.srcElement.parentElement;
		if (eHref.parentElement && eHref.tagName != "A") eHref = eHref.parentElement;
		if (eHref.href) {
			if (eHref.href.indexOf("sid0") != -1) {
				tempText = eHref.innerText;
				eHref.href = eHref.href.replace("sid0", "sid7");
				if (tempText) eHref.innerText = tempText;
				//return true;
			}
		}
	}
	function replaceSID0onEventN(e) {
		//replace sid0 with OID sid value, for Netscape browsers
		var tempText = "";
		var eHref = (e.target.tagName == "A") ? e.target : e.target.parentNode;
		if (eHref.parentNode && eHref.tagName != "A") eHref = eHref.parentNode;
		if (eHref.href) {
			if (eHref.href.indexOf("sid0") != -1) {
				tempText = eHref.innerText;
				eHref.href = eHref.href.replace("sid0", "sid7");
				if (tempText) eHref.innerText = tempText;
				return true;
			}
		}
	}
	
	/* ClickThru Redirect Function */
	function clickThruValidate(form) {
		var clickPat=/[^a-zA-Z0-9]/;
		
		var clickResult=form.clickThruID.value.search(clickPat);

		if (clickResult != -1) {
			form.action = '/clickThruError';
		} else {
			form.action = '/clickThru/0,,'+'clk'+form.clickThruID.value+',00.html';
			form.submit();
		}
	}
	
	
	/* Read cookie and update CLT ad height */
	function readCookie(name) {
	    var nameEQ = name + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i < ca.length; i++) {
	                var c = ca[i];
	                while (c.charAt(0)==' ') c = c.substring(1,c.length);
	                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	    }
	    return null;
	}
	
	/*
	 *          This function is called by the onload trigger in the CLT's <iframe>
	 *          It will check the cookie for a height value placed in it by some JS code on the StoryServer side
	 *          and will use that value to rsize the <iframe> element (this removes the occasional extra whitespace)
	 */
	 
	function resizeCLT(adHandle) {
		ugcCltHeight = readCookie('ugcCltHeight');
		
		var dbg = getURLParamValue('cltDbg')
		
		if(dbg==1) {
		var doc=adHandle.contentWindow.document;
		alert('Justin: '+ugcCltHeight+'\nscrollHeight: '+doc.body.scrollHeight+'\ndocument.height: '+doc.height);
		}
		
		if(adHandle != null && ugcCltHeight != null) adHandle.height = ugcCltHeight;
	}	


//- eof -