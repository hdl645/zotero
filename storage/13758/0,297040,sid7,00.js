/*
 Due to site names like "SearchCIO-Midmarket that have a dash in the we can't use the site name as-is as part of a js variable name
 since "-" is an illegal character. So we swap it out with an underscore when setting all of the on/off switches. The mboxes on
 the page will still have a "-" in them and request them that way, so when we evaluate whether an mbox is on or off we again swap
 out the "-" for an "_", but then request the mbox at Offermatica with the "real" sitename with a dash it in. It was easier to do 
 this than change naming convention of mboxes  on dozens of templates
*/

// Sets MBOX settings. Any null values are considered "off"

// ************************** ALL SITES *************************
var searchNetworking_Definition_Banner = "on";
var searchNetworking_Definition_Right = "on";
var searchNetworking_Definition_Body = "on";
var searchNetworking_Definition_Gutter = "on";

// Generic Content
var searchNetworking_Generic_Banner = "on";
var searchNetworking_Generic_Right = "on";
var searchNetworking_Generic_Body = "on";
var searchNetworking_Generic_Gutter = "on";

// Home Page

var searchNetworking_Home_Banner = "on";
var searchNetworking_Home_Mid = "on";
var searchNetworking_Home_Right = "on";
var searchNetworking_Home_Left = "on";
var searchNetworking_Home_Gutter = "on";


// ************************* SEARCH SITES ONLY *************************

// ATE Category
var searchNetworking_ATE_Category_Banner = "on";
var searchNetworking_ATE_Category_Right = "on";
var searchNetworking_ATE_Category_Bottom = "on";
var searchNetworking_ATE_Category_Gutter = "on";

// ATE Content
var searchNetworking_ATE_Content_Banner = "on";
var searchNetworking_ATE_Content_Right = "on";
var searchNetworking_ATE_Content_Body = "on";
var searchNetworking_ATE_Content_Gutter = "on";

// News Category (main page)
var searchNetworking_News_Category_Banner = "on";
var searchNetworking_News_Category_Left = "on";
var searchNetworking_News_Category_Gutter = "on";

// News Article/Original Content
var searchNetworking_News_Article_Banner = "on";
var searchNetworking_News_Article_Right = "on";
var searchNetworking_News_Article_Body = "on";
var searchNetworking_News_Article_Gutter = "on";

// News Column
var searchNetworking_News_Column_Banner = "on";
var searchNetworking_News_Column_Right = "on";
var searchNetworking_News_Column_Body = "on";
var searchNetworking_News_Column_Gutter = "on";

// News Interview
var searchNetworking_News_Interview_Banner = "on";
var searchNetworking_News_Interview_Right = "on";
var searchNetworking_News_Interview_Body = "on";
var searchNetworking_News_Interview_Gutter = "on";

// News Content Page (Article, Column, QnA, Gemeric)
var searchNetworking_News_Content_Banner = "";
var searchNetworking_News_Content_Right = "";
var searchNetworking_News_Content_Gutter = "";

// Topics (both nav and detail pages)
var searchNetworking_Topics_Banner = "on";
var searchNetworking_Topics_Right = "on";
var searchNetworking_Topics_Gutter = "on";

// Tips Category
var searchNetworking_Tips_Category_Banner = "on";
var searchNetworking_Tips_Category_Left = "on";
var searchNetworking_Tips_Category_Gutter = "on";

// Tips Content: banner rightrail
var searchNetworking_Tip_Content_Banner = "on";
var searchNetworking_Tip_Content_Right = "on";
var searchNetworking_Tip_Content_Body = "on";
var searchNetworking_Tip_Content_Gutter = "on";

// Registration
var searchNetworking_RegPage1_Form = "on";
var searchNetworking_RegPage1_Submit = "on";
var searchNetworking_RegActivate_Form = "on";
var searchNetworking_RegActivate_Submit = "on";

// ************************* WHATIS ONLY *************************
var searchNetworking_Category_Banner = "";
var searchNetworking_Category_CSS = "";	
var searchNetworking_Category_Right = "";
var searchNetworking_Category_Gutter = "";
var searchNetworking_Search_Banner = "";
var searchNetworking_Search_Top_Right = "";
var searchNetworking_Search_Gutter = "";


// ********************** Members only related ******************

var searchNetworking_Members_Only_CSS = "on";
var searchNetworking_Members_Only_Copy1 = "on";
var searchNetworking_Members_Only_Copy2 = "on";
var searchNetworking_Members_Only_Copy3 = "on";
var searchNetworking_Members_Only_Teaser = "on";
var searchNetworking_Members_Only_Registration = "on";
var searchNetworking_Members_Only_Login = "on";
var searchNetworking_Members_Only_Gutter = "on";
var searchNetworking_Members_Only_ForgotPW = "on";
var searchNetworking_Members_Only_Heading = "on";



// ************************* FUNCTIONS *************************

function mboxTrackClick(existingMboxName, trackedMboxName){
var url = mboxFactoryDefault.get(existingMboxName).getURL();
url = url.replace("mbox=" + existingMboxName,"mbox=" + trackedMboxName);
url = url.replace("mboxPage=" + mboxFactoryDefault.getPageId(),"mboxPage=" + mboxGenerateId());
(new Image()).src = url;
}


function ttWriteMboxDiv (location) {
	mboxName = location;
	mboxNameSafe = location.replace(/-/,"_");
	mboxStatus = eval(mboxNameSafe);
	//if (window.location.search.indexOf('mboxDebug=1') != -1) window.alert("SiteVar=" + mboxEnabled + ";        " + mboxName + "=" + mboxStatus + " DIV");	
	if ((mboxEnabled == "on") && (mboxStatus == "on")) {
		document.write("<div class='mboxDefault'>");
	}
}

function ttWriteMboxContent (location) {
	mboxName = location;
	mboxNameSafe = location.replace(/-/,"_");
	mboxStatus = eval(mboxNameSafe);
	if (window.location.search.indexOf('mboxDebug=1') != -1) window.alert("SiteVar=" + mboxEnabled + ";        " + mboxName + "=" + mboxStatus + " MBOX CREATE");	
	if ((mboxEnabled == "on") && (mboxStatus == "on")) {
		document.write("</div>");
		mboxCreate(mboxName);
	}
}


// return true if mbox is enabled for location name, where location
// name is the name of a variable from above. 

  function ttMboxIsEnabled(location) {
	var mboxNameSafe = location.replace(/-/,"_");
	var mboxStatus = eval(mboxNameSafe);
	var result = false;
	
	if ((mboxEnabled == "on") && (mboxStatus == "on")) {
		result = true;
	}
    return result;
  };
  
 //  
 // used by members only login to add the default style sheet conditionaly.
 //  An inline style sheet should not be used in the default mbox content
 // that is displayed when the mbox is not active. Instead, offermatica
 // recommended this approach. 
 // This javascript code was copied from an email that
 // Kripa from Offermatic sent. 
 //
  
  
 function ttMboxAddstyle(myHref){
  if (document.createStyleSheet) document.createStyleSheet(myHref);
  else {
    var s = document.createElement('link');
    s.setAttribute('rel','stylesheet');
    s.setAttribute('type','text/css');
    s.setAttribute('href',myHref);
    document.getElementsByTagName('head')[0].appendChild(s);
  }
};
