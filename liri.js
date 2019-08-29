require("dotenv").config();
var axios = require("axios");
var moment = require("moment");
var spotify = require("node-spotify-api");

var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);

var input = process.argv[2];
var input2 = process.argv.slice(3).join(", ");


if (input === "concert-this") {
  var artist = input2;
  axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
    function(response) {
      
      var data = response.data[0].venue;
      var date = moment(response.data[0].datetime).format('L');
      console.log("------------------------------------------------------");
      console.log("Venue: " + data.name);
      console.log("Venue Location: " + data.city + ", " + data.country);
      console.log("Venue Date: " + date);
      console.log("------------------------------------------------------");


    }
  )
} else if (input === "spotify-this-song") {
  var song = input2;
  axios.get("https://api.spotify.com/v1/search?q=I%20Want%20it%20That%20Way&type=track&market=United%20States&limit=5&offset=5").then(
    function(response) {
      console.log(response);
    }
  )
} else if (input === "movie-this") {
  var movie = input2;
  
  axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy").then(
    function(response) {
     
      // console.log(response);
      var movieData = response.data;
      console.log("------------------------------------------------------");
      console.log("Movie Name: " + movieData.Title);
      console.log("Release Year: " + movieData.Year);
      console.log("IMDB Rating: " + movieData.imdbRating);
      console.log("Rotten Tomatoes Rating: " + movieData.Ratings[1].Value);
      console.log("Country of Production: " + movieData.Country);
      console.log("Language: " + movieData.Language);
      console.log("Plot: " + movieData.Plot);
      console.log("Actors: " + movieData.Actors);
      console.log("------------------------------------------------------");

    }
  )

}