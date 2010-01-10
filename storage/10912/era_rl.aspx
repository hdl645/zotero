

/*This function writes a div on the documents and then populates it
with the content it receives as argument. It is used for the JavaScript Callback method*/
var ERA_RC = window.ERA_RC||{};
ERA_RC.resource = function()
{
	var $={};
	return {
		init:function(elementID){
			document.write("<div id='ERA_RC'></div>");
			$.placeHolder=document.getElementById(elementID);
		},getContent:function(content){
		$.placeHolder.innerHTML=content.value;}
	};
}();
ERA_RC.resource.init("ERA_RC");
(
function()
{
	// E|R|A related items interface link.
	var ERA_INTERFACE_LINK = '/ERALinks/Default.aspx';
	// Default E|R|A client domain.
	var DEFAULT_DOMAIN = 'embedded.firstlightera.com';
	// CSS link
	var DEFAULT_CSS_URL = 'CSS/HtmlRelatedLinks.css';

	//This function writes the CSS link to the document. It is primarily used for related links JavaScript output.
	function WriteCSS(current_window, current_document)
	{
		if (DEFAULT_CSS_URL != "")
		{
			current_document.write("<link href='" + DEFAULT_CSS_URL + "' type='text/css' rel='stylesheet' />");
		}
	}

	//This function does the content ID retrieval.
	function GetCustomContentID()
	{
		var targetText = location.href;
var pattern;
var matchResult;
pattern = new RegExp("\\.com/[A-Za-z]+/?(?:[^/]+/)?([0-9]+)", "i");
matchResult = pattern.exec(targetText);
if (matchResult != null)
{
return matchResult[1];
}
return '';		
	}

	//Gets UseIFrame status from era_rc
	function GetUseIFrame(current_window)
	{
		if (current_window.era_rc != null && current_window.era_rc["UseIFrame"]  != null)
		{
			var val = current_window.era_rc["UseIFrame"].toLowerCase();
			if (val == 'no' || val == 'false') return false;
		}
		
		return true;
	}

	//Gets url of the E|R|A related items interface.
	function GetEraDomain(current_window)
	{
		if (current_window.era_rc != null && current_window.era_rc["ERADomain"] != null)
		{
			return "http://" + (current_window.era_rc["ERADomain"]) + ERA_INTERFACE_LINK;
		}
		return "http://" + DEFAULT_DOMAIN + ERA_INTERFACE_LINK;
	}

	//Gets height from the era_rc array.
	function GetEraBlockHeight(current_window)
	{
		if (current_window.era_rc != null && current_window.era_rc["Height"] != null)
		{
			return current_window.era_rc["Height"];
		}
		return 275;
	}

	//Gets width from the era_rc array.
	function GetEraBlockWidth(current_window)
	{
		if (current_window.era_rc != null && current_window.era_rc["Width"] != null)
		{
			return current_window.era_rc["Width"];
		}
		return 335;
	}

	//Gets height from the era_rc array.
	function GetEraMaxItems(current_window)
	{
		if (current_window.era_rc != null && current_window.era_rc["MaxRelatedItems"]  != null)
		{
			return current_window.era_rc["MaxRelatedItems"];
		}
		return 4;
	}

	//Gets sort type from the era_rc array.
	function GetEraSortType(current_window)
	{
		if (current_window.era_rc != null && current_window.era_rc["SortBy"] != null)
		{
			return current_window.era_rc["SortBy"];
		}
		return 'Rank';
	}

	//Gets content type from the era_rc array.
	function GetContentType(current_window)
	{
		if (current_window.era_rc != null && current_window.era_rc["ContentType"] != null)
		{
			return current_window.era_rc["ContentType"];
		}
		return 'SSMicrosites';
	}

	//Gets the content id from the era_rc array if supplied else calls the GetCustomContentID method to retrieve the content id from the URL.
	function GetContentId(current_window)
	{
		if (current_window.era_rc != null && current_window.era_rc["ContentId"] != null)
		{
			return (current_window.era_rc["ContentId"]);
		}
		else if (IsTestMode(current_window) && current_window.era_rc["Test"] == 'true')
		{
			return '0';
		}
		else
		{
			return GetCustomContentID();
		}
	}

	//Gets the stylesheet to use
	function GetStylesheet(current_window)
	{
		if (current_window.era_rc != null && current_window.era_rc["OverrideCss"] != null)
		{
			return (current_window.era_rc["OverrideCss"]);
		}
		return '';
	}
	
	//Gets the style id to use
	function GetStyleId(current_window)
	{	
		if (current_window.era_rc != null && current_window.era_rc["StyleId"] != null)
		{
			return (current_window.era_rc["StyleId"]);
		}
		return '0';
	}

	//Checks to see if the request is to be in test mode. (Randomly generated links)
	function IsTestMode(current_window)
	{
		if (current_window.era_rc != null && current_window.era_rc["Test"] != null)
		{
			return current_window.era_rc["Test"];
		}
		return false;
	}

	//Prints the related links IFrame to the document.
	function DisplayEraFrame(eraLink, current_document, current_window)
	{
		current_document.write("<iframe name='era_relatedLinks' width='" + GetEraBlockWidth(current_window)+ "' height='" + GetEraBlockHeight(current_window) + "' frameborder='0' src='" + eraLink + "' marginwidth='0' marginheight='0' scrolling='no'>");
		current_document.write("</iframe>");
	}

	//Prints the related links JavaScript to the document.
	function DisplayEraJavaScript(eraLink, current_document, current_window)
	{
		current_document.write("<script type=\"text/javascript\" src=\"" + eraLink + "\"></script>");
	}

	//Adds double quotes to the provided string.
	function GetStringWithQuotes(checkString)
	{
		return checkString!=null ?'"'+ checkString + '"':'""'
	}
	
	function GetReferrer(current_window, current_document)
	{
		if ('url'.toLowerCase() == 'referrer')
		{
			return current_document.referrer;			
		}
		return current_window.location.href;
	}
	
	function IsValidUrl(current_window, current_document)
	{
		return true
	}
	
	//Generates the related links request link using the link parameters.
	function CreateEraLink(current_window, current_document)
	{
		if (IsValidUrl(current_window, current_document))
		{
			var eraLink = GetEraDomain(current_window) + "?";
			
			eraLink += "ContentId=" + (GetContentId(current_window)) + "&numrequests=1&";
			eraLink += "req1=" + GetContentType(current_window) + "||";
			eraLink += GetEraMaxItems(current_window) + "|";
			eraLink += "SortBy:" + GetEraSortType(current_window);
			eraLink += "&Referrer=" + encodeURIComponent(GetReferrer(current_window, current_document));
			
			if (IsTestMode(current_window))
			{
				eraLink += "&Test=" + IsTestMode(current_window);
			}

			if (GetStyleId(current_window) != '')
			{
				eraLink += "&StyleId=" + GetStyleId(current_window);
			}

			if (GetStylesheet(current_window) != '')
			{
				eraLink += "&OverrideCss=" + GetStylesheet(current_window);
			}

			// if UseIFrame property is set to no, write javascript, else use iframe
			if (GetUseIFrame(current_window))
			{
				eraLink += "&";
				eraLink += "OutputType=html";
				DisplayEraFrame(eraLink, current_document, current_window);
			}
			else
			{
				eraLink += "&";
				eraLink += "OutputType=javascript";
				DisplayEraJavaScript(eraLink, current_document, current_window);				
			}
		}
		current_window.era_rc = null;
	}

	//Calls functions to print the related links frame.
	function EraMain()
	{
		var current_window = window;
		var current_document = document;
		CreateEraLink(current_window, current_document);
	}
	EraMain();
})()
