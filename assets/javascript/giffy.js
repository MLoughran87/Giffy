
// first the variable
var searches = ["cats", "dogs", "reaction", "simpsons", "southpark", "patriots"];

// a loop for displaying the buttons from the array - note, cannot get this to work 
// using basis from the movie app exercise 10, earlier i had errors about the API call not working, 
// now i get nothing when i click. very confused on my part. 
// function displaygifsearch(){    

for (i = 0; i < searches.length; i++){
        var gifButton = $("<button>");
                // used the "btn" class, but not sure this is right
        gifButton.addClass("btn")
        gifButton.attr("data-name", searches[i]);
        
        gifButton.text(searches[i]);
        $("#button").append(gifButton)
    };
        
    
    // calling the function for clicked button,  from the giphy api
    // tried setting up console.log but not getting results from that either  
    
    $("#btn").on("click", function(){
        
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        title + "api_key=ATh14ooPXsdj1L5HpiCIoiG8hDTU5UVy&limit=10";
        
        $.ajax({
            url: queryURL,
            method: "GET"
          })
            .then(function(response) {
              var results = response.data;
      
              // using a for loop to limit gif's response to 10, 
              for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");
      
                var rating = results[i].rating;
      
                var p = $("<p>").text("Rating: " + rating);
      
                var personImage = $("<img>");
                personImage.attr("src", results[i].images.fixed_height.url);
      
                gifDiv.prepend(p);
                gifDiv.prepend(personImage);
      
                $("#gifWrapper").prepend(gifDiv);

                // if statement to limit displays to 
                // if (rating === "R"); 
                //     then ...
                console.log(click)
              }
            });
    })
    // at this point i am panicing and tried to copy/paste code in from other exercises
    // i have yet to make the initial gif show up, this was not my best effort.  


$("button").on("click", function() {
    var searchgif = $(this).attr("data-searchgif");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      searchgif + "api_key=ATh14ooPXsdj1L5HpiCIoiG8hDTU5UVy&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");

          var rating = results[i].rating;

          var gifadd = $("<p>").text("rating: " + rating);

          var gifImage = $("<img>");
          gifImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(gifadd);
          

          $("#gifs-appear-here").prepend(gifDiv);
        }
      });
  });