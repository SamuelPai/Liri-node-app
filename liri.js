require("dotenv").config();
var axios = require("axios");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var fs = require("fs");

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var input = process.argv[2];
var input2 = process.argv.slice(3).join(", ");


if (input === "concert-this") {
  var artist = input2;
  axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
    function(response) {

      // var data = response.data;
      
     
      // var data = response.data[0].venue;
      var date = moment(response.data[0].datetime).format('L');
      console.log("------------------------------------------------------");
      console.log("Venue: " + response.data[0].venue.name);
      console.log("Venue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.country);
      console.log("Venue Date: " + date);
      console.log("------------------------------------------------------");

      }
          

    
  ).catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });
}
 else if (input === "spotify-this-song") {
  var song = input2;
  spotify
  .search({ type: 'track', query: input2 })
  .then(function(response) {
    var artists = response.tracks.items[0].album.artists;
  
    
    var song = response.tracks.items[0].name;
    var preview = response.tracks.items[0].preview_url;
    var album = response.tracks.items[0].album.name;
    for (var i = 0; i < artists.length; i++) {
      console.log("Artist(s): " + artists[i].name);
    }
    console.log("Song: " + song);
    console.log("Preview Link: " + preview);
    console.log("Album: " + album);
  })
  .catch(function(err) {
    console.log(err);
  });
} else if (input === "movie-this") {
  var movie = input2;
  var movie2 = "Mr. Nobody";

      if (movie === "") {
        axios.get("http://www.omdbapi.com/?t=" + movie2 + "&y=&plot=short&apikey=trilogy").then(
          function(response) {
            var mrNobody = response.data;
            console.log("------------------------------------------------------");
            console.log("Movie Name: " + mrNobody.Title);
            console.log("Release Year: " + mrNobody.Year);
            console.log("IMDB Rating: " + mrNobody.imdbRating);
            console.log("Rotten Tomatoes Rating: " + mrNobody.Ratings[1].Value);
            console.log("Country of Production: " + mrNobody.Country);
            console.log("Language: " + mrNobody.Language);
            console.log("Plot: " + mrNobody.Plot);
            console.log("Actors: " + mrNobody.Actors);
            console.log("------------------------------------------------------");

          }
        )
      } else {
        axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy").then(
          function(response) {
            
           
            // console.log(response);
            var movieData = response.data;

            
            
            
            // console.log("------------------------------------------------------");
            // console.log("Movie Name: " + movieData.Title);
            // console.log("Release Year: " + movieData.Year);
            // console.log("IMDB Rating: " + movieData.imdbRating);
            // console.log("Country of Production: " + movieData.Country);
            // console.log("Language: " + movieData.Language);
            // console.log("Plot: " + movieData.Plot);
            // console.log("Actors: " + movieData.Actors);
            // console.log("Rotten Tomatoes Rating: " + movieData.Ratings[1].Value);
            if (movieData.Ratings.length<2) {
              console.log("------------------------------------------------------");
            console.log("Movie Name: " + movieData.Title);
            console.log("Release Year: " + movieData.Year);
            console.log("IMDB Rating: " + movieData.imdbRating);
            console.log("Country of Production: " + movieData.Country);
            console.log("Language: " + movieData.Language);
            console.log("Plot: " + movieData.Plot);
            console.log("Actors: " + movieData.Actors);
              console.log("Rotten Tomatoes Rating: none");
              console.log("------------------------------------------------------");

          } else {
            console.log("------------------------------------------------------");
            console.log("Movie Name: " + movieData.Title);
            console.log("Release Year: " + movieData.Year);
            console.log("IMDB Rating: " + movieData.imdbRating);
            console.log("Country of Production: " + movieData.Country);
            console.log("Language: " + movieData.Language);
            console.log("Plot: " + movieData.Plot);
            console.log("Actors: " + movieData.Actors);
            console.log("Rotten Tomatoes Rating: " + movieData.Ratings[1].Value);
          }
      
          }
        )
      }
  
  

} else if (input === "do-what-it-says") {
  
}