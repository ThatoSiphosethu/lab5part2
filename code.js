$(document).ready(function () {
     $("#qty").change(textboxHeardChange);
     
     function textboxHeardChange()
     {
         //var randomNum = Math.random();

         //$("output").text(randomNum);

         var selectedBox = $("#jQuery:checked").length;
         var donations = $("#jQuery2:checked").length;

         var quantity = parseInt($("#qty").val());

         var grandTotal = (quantity * 39.99 * selectedBox) + (quantity * 14.99 * donations);

         $("#output").text(grandTotal.toFixed(2));

     }

});