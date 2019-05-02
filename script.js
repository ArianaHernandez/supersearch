/*global $*/
/*global results*/
$( document ).ready(function() {
$("#search").click(function(){
    $(".container").empty();
     var search= $("#ss").val();
     var searchTerm = search.toLowerCase();
var theUrl="https://www.superheroapi.com/api.php/2139715469450866/search/"+searchTerm;
    $.ajax({
    url: theUrl,
    method: "GET",
    success: function(response) {
        if (response.response==="error"){
    $("#character").append("<img class='error' src='charsorry.gif'</img>");
        }else{
  response.results.forEach(function(x){
  $("#character").append("<h3>"+x.name+"</h3>");
    $("#character").append("<img class='charimg' src='"+x.image.url+"'</img>"); 
  });
        }
    },
    });
});
$("#search").click(function(){
     var search= $("#ss").val();
     var searchTerm = search.toLowerCase();
var theUrl="https://www.googleapis.com/books/v1/volumes?q="+searchTerm;
   
    $.ajax({
    url: theUrl,
    method: "GET",
    success: function(response) {
        if (response.totalItems===0){
    $("#book").append("<img class='error' src='booksorry.gif'</img>");
        }else{
  response.items.forEach(function(x){
         $("#book").append("<a href='"+x.volumeInfo["previewLink"]+"'><img class='charimg' src='"+x.volumeInfo.imageLinks["thumbnail"]+"'</img></a>");
  });
        }
    },
    });
});
$("#search").click(function(){
     var search= $("#ss").val();
     var searchTerm = search.toLowerCase();
var theUrl="https://www.omdbapi.com/?t="+searchTerm+"&apikey=d8136773";
   
    $.ajax({
    url: theUrl,
    method: "GET",
    success: function(response){
         if (response.Response==="False"){
    $("#movie").append("<img class='error' src='moviesorry.gif'</img>");
        }else{
         $("#movie").append("<img class='charimg' src='"+response["Poster"]+"'</img>"); 
      $("#movie").append("<h3>"+response["Title"]+"</h3>");
     $("#movie").append("<p class='plot'>"+response["Plot"]+"</p>");
        }
        },
    });
});


});//document ready
