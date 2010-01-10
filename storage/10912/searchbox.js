function searchCheckCheckBoxes(id, isChecked) {

   var frm = document.forms.searchForm;

   if (isChecked && id == 'c12') {

      for (i=0; i < frm.length; i++){

         //Look for checked checkboxes only
         if ( (frm.elements[i].checked == true) && (frm.elements[i].id != 'c12') ){
            frm.elements[i].checked = false;
         }

      }

   } else {

      for (i=0; i < frm.length; i++){

         //Look for checked checkboxes only
         if (frm.elements[i].checked == true) {
            frm.elements[i].checked = false;
         }

      }

   }

}

function searchUncheckMain() {

   document.getElementById('c12').checked = false;
   var c1 = document.getElementById('c12').checked;
   var c2 = document.getElementById('c22').checked;
   var c3 = document.getElementById('c32').checked;
   var c4 = document.getElementById('c42').checked;
   var c5 = document.getElementById('c52').checked;
   var c6 = document.getElementById('c62').checked;
   var c7 = document.getElementById('c72').checked;

   if(c7 && c6 && c5 && c5 && c4 && c3 && c2) {
      document.getElementById('c12').checked = true;
   }

}
