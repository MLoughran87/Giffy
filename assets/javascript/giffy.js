
// first the variable
var searches = ["cats", "dogs", "reaction", "simpsons", "southpark", "patriots"];

// a loop for displaying the buttons from the array - note, cannot get this to work 
    for (i = 0; i < searches.length; i++){
        var gifButton = $("<button>");

        gifButton.addClass("gif-button")
        gifButton.attr("data-name", searches[i]);
        
        gifButton.text(searches[i]);
        $("#buttonWrapper").append(gifButton)
    };
        
    
    // calling the function for clicked button,  from the giphy api 
    
    $(document).on("click", ".btn", function(){
        console.log($(this).attr("title"))
        var title = $(this).attr("title");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        title + "api_key=ATh14ooPXsdj1L5HpiCIoiG8hDTU5UVy&limit=10";
        
        $.ajax({
            url: queryURL,
            method: "GET"
          })
            .then(function(response) {
              var results = response.data;
      
              for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");
      
                var rating = results[i].rating;
      
                var p = $("<p>").text("Rating: " + rating);
      
                var personImage = $("<img>");
                personImage.attr("src", results[i].images.fixed_height.url);
      
                gifDiv.prepend(p);
                gifDiv.prepend(personImage);
      
                $("#gifWrapper").prepend(gifDiv);
              }
            });
    })

$("button").on("click", function() {
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "api_key=ATh14ooPXsdj1L5HpiCIoiG8hDTU5UVy&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $("#gifs-appear-here").prepend(gifDiv);
        }
      });
  });