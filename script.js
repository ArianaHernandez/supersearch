/*global $*/
/*global results*/
$( document ).ready(function() {
$("#see").click(function(){
     var search= $("#ss").val();
     var searchTerm = search.toLowerCase();
var theUrl="https://www.superheroapi.com/api.php/2139715469450866/search/"+searchTerm;
    $.ajax({
    url: theUrl,
    method: "GET",
    success: function(response) {
  response.results.forEach(function(x){
  $("#character").append("<h1>"+x.name+"</h1>");
  
    $("#character").append("<br><img class='charimg' src='"+x.image.url+"'</img>"); 
      
  });
    },
    });
});
$("#see").click(function(){
     var search= $("#ss").val();
     var searchTerm = search.toLowerCase();
var theUrl="https://www.googleapis.com/books/v1/volumes?q="+searchTerm;
    $.ajax({
    url: theUrl,
    method: "GET",
    success: function(response) {
  response.items.forEach(function(x){
  $("#character").append("<h1>"+x.volumeInfo.title+"</h1>");
  
    $("#character").append("<br><img class='charimg' src='"+x.image.url+"'</img>"); 
      
  });
    },
    });
});
});
