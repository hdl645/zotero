function ffopen() {

   var bottomBox = document.getElementById("ff_bottomBox");
   var container = document.getElementById("ff_container");
   container.style.height = "auto";
   bottomBox.style.visibility = "visible";

}

function ffclose() {

   var bottomBox = document.getElementById("ff_bottomBox");
   var container = document.getElementById("ff_container");
   container.style.height = "";
   bottomBox.style.visibility = "hidden";

}


