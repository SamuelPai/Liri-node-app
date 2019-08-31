# liri-node-app
 LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

Often times, people are interested in finding out more information about a song that they enjoy, their favorite artist, or a popular new movie. Instead of having to search for that information in separate places, the Liri bot combines all of those components in one user friendly place. 

The Liri bot is organized into 3 main files: liri.js (which contains the javascript code), keys.js (which contains the API keys needed for the program to run, also linked to an .env file), and a random.txt file (which helps one part of the app function). It is organized in this way in order to allow users of the app to see the funcionality without the data sensitive material. 

How to Use Liri Bot: In order to use this app, you will need use node.js in association with your computer's command line. 
There are four components to this application:
1) Concert-this: After entering an artist, the application will return data regarding the artist's next tour.
2) Spotify-this-song: After entering a song name, the application will use the Spotify API to return information regarding that specific song.
3) Movie-this: After entering in a movie title, the application will return information regarding that movie.
4) Do-what-it-says: After entering this command into the command line, the application will read the data inside a random.txt file and then proceed to execute the commands written in that file. 

In order for the first 3 components to work, you must remember to input (node liri.js) as the first two arguments in the command line, followed by options concert-this, spotify-this-song, or movie-this... then followed by an artist, song, or movie. For the last component to run, just simply type (node liri.js do-what-it-says) into the command line. 

Technologies Used: Javascript, Node.js, NPM, Spotify API, OMDB API, Bands in Town API
Created by: Sam Pai
If you have questions or want further information, please email me at SamuelPai16@gmail.com

![alt text](https://github.com/SamuelPai/liri-node-app/concert-this.gif)
