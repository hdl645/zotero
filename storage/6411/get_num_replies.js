
(function() {
    var links = document.getElementsByTagName('a');
    var num_replies = ''.split(',');
    for(var i = 0, j = 0; i < links.length; i++) {
        if(links[i].href.indexOf('#disqus_thread') >= 0) {
            count = parseInt(num_replies[j]);
            if(count != undefined && !isNaN(count)) {
                if(count > 1) { links[i].innerHTML = '{num} Comments'.replace('{num}', count); }
                else if(!count) { links[i].innerHTML = '0 Comments'.replace('{num}', count); }
                else { links[i].innerHTML = '1 Comment'.replace('{num}', count); }
            }
            
            j++;
        }
    }
})();

