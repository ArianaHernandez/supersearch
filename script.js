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
  $("#character").append("<h3>"+x.name+"</h3>");
  
    $("#character").append("<img class='charimg' src='"+x.image.url+"'</img>"); 
      
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
         $("#book").append("<a href='"+x.volumeInfo["previewLink"]+"'><img class='charimg' src='"+x.volumeInfo.imageLinks["thumbnail"]+"'</img></a>");
  });
    },
    });
});
$("#see").click(function(){
     var search= $("#ss").val();
     var searchTerm = search.toLowerCase();
var theUrl="https://www.omdbapi.com/?t="+searchTerm+"&apikey=d8136773";
   
    $.ajax({
    url: theUrl,
    method: "GET",
    success: function(response) {
        
  response.forEach(function(x){
      $("#character").append("<h3>"+x["Title"]+"</h3>");
console.log(x["Title"]);
  });
    },
    });
});

});
