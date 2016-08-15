$(document).ready(function(){
  var iceCreams = ["Rocky Road", "Mango", "Coconut", "Vanilla", "Double Chocolate", "Salted Caramel"];

  iceCreams.forEach(function(iceCream){
    $("ul#ice-creams").append("<li> I love " + iceCream + "! </li>");
  });
});
