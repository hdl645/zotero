function jobsopen() {

   var bottomBox = document.getElementById("cc_bottomBox");
   var container = document.getElementById("cc_container");
   container.style.height = "auto";
   bottomBox.style.visibility = "visible";

}

function jobsclose() {

   var bottomBox = document.getElementById("cc_bottomBox");
   var container = document.getElementById("cc_container");
   container.style.height = "";
   bottomBox.style.visibility = "hidden";

}


