/*
   surveyCookie.js
   Prompts user to take a survey and opens a new window for 
   the survey.  This is cookie-controlled so that the user won't
   be prompted more than once.
   
   To use, call doSurvey(), passing the survey name, survey end date,
   and survey URL.
   
   The cookie stored on the user's computer
   will be named with the survey name and will expire on the
   survey's end date.
*/
function setCookie(name, value, expires, path, domain, secure)
{
	document.cookie= name + "=" + escape(value) +
		((expires) ? "; expires=" + expires.toGMTString() : "") +
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		((secure) ? "; secure" : "");
}

/**
 * Gets the value of the specified cookie.
 *
 * name  Name of the desired cookie.
 *
 * Returns a string containing value of specified cookie,
 *   or null if cookie does not exist.
 */
function getCookie(name)
{
	var dc = document.cookie;
	var prefix = name + "=";
	var begin = dc.indexOf("; " + prefix);
	if (begin == -1)
	{
		begin = dc.indexOf(prefix);
		if (begin != 0) return null;
	}
	else
	{
		begin += 2;
	}
	var end = document.cookie.indexOf(";", begin);
	if (end == -1)
	{
		end = dc.length;
	}
	return unescape(dc.substring(begin + prefix.length, end));
}

function promptForSurvey(surveyName, surveyPrompt, expireDate)
{
	// If cookie exists, then return false (user has already responded to the prompt)
	// If no cookie, then conditionally prompt user.
	if (getCookie(surveyName) == null)
	{
		// picks a random number 0-2.
		// If the number selected is == 0, then prompts to take the survey.
		// This should give approximately 1/3 of all visitors the chance to view the survey.
		var nTest = Math.floor(Math.random() * 0)
		if (nTest != 0)
			return false;

		// Note that no cookie is saved if the user isn't prompted.
		var doSurvey = window.confirm(surveyPrompt)

		// write the cookie, use cookiesEndDate instead of expireDate
                var cookiesEndDate = new Date("October 1, 2029");
		setCookie(surveyName, doSurvey, cookiesEndDate );
		return doSurvey;
	}
	else
		return false;
}

function doSurvey(surveyname, surveyPrompt, expireDate, surveyUrl,height, width)
{
	if (promptForSurvey(surveyName, surveyPrompt, expireDate))
	{
                newwindow=window.open(surveyUrl,'survey','height='+ height +',width='+ width +',resizable,scrollbars=yes');
                mnewwindow.focus();
	}
        return true;
}
