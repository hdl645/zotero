function saveRating(id, rating, average_rating, total_count, total_votes) {

   var width = rating * 20;
   var curr_total_count = total_count + rating;
   var curr_total_votes = total_votes + 1;
   var curr_average_rating = curr_total_count / curr_total_votes;
   var curr_width = curr_average_rating * 20;
   var star_rating_code = '<ul class="star-rating"><li class="current-rating" style="width:' + width + '%">.</li></ul>';
   var curr_star_rating_code = '<ul class="star-rating"><li class="current-rating" style="width:' + curr_width + '%">.</li></ul>';
   var rating_text = 'Your rating:'
   document.getElementById("star_rating").innerHTML = star_rating_code;
   document.getElementById("curr_star_rating").innerHTML = curr_star_rating_code;
   document.getElementById("rating_text").innerHTML = rating_text;

   var img = new Image();
   img.src = '/shared/article/rating/rate_article.jhtml?id=' + id + '&rating=' + rating;

}


