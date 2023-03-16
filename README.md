# 14-5assessment

Making requests: Requests in JavaScript
Instructions
To complete this practice problem, you will be building a number of functions that make external requests using the axios library. In each function, you will be asked to make a request and then log out a specific response.

See below for more information on the project setup as well as the requirements for each function.

Starter code
To start, make sure you've forked and cloned the constellations server, linked below. Follow the instructions in that repository to get the project up and running.

GitHub: Constellations server
Project setup
The src/main.js file includes an axios variable and a BASE_URL variable which points to the correct URL for the constellations server. Please do not change either of these lines.

All of the functions that you will need to fill in are included in this file.

getAllNames()
Method	Path
GET	/constellations
The getAllNames() function should make a GET request to /constellations. With the data that is returned, modify it so that you return an array that contains the names of each constellation. Use console.log() to print the names of the constellations.

getAllNames(); //> [ "Columba", "Crater", ... ]
getConstellationsByQuadrant()
Method	Path
GET	/constellations
The getConstellationsByQuadrant() function should make a GET request to /constellations. It should return all responses where the quadrant matches what was given. For example, if "SQ1" is provided as the quadrant, only those constellations should be passed into the console.log() statement.

getConstellationsByQuadrant("SQ1");
/*
  [
    {
      id: "UEUrlfX",
      name: "Columba",
      meaning: "Dove",
      starsWithPlanets: 3,
      quadrant: "SQ1",
    },
    {
      id: "KGQIwSq",
      name: "Eridanus",
      meaning: "River",
      starsWithPlanets: 26,
      quadrant: "SQ1",
    },
    ...
  ];
*/
Note: Make a simple GET request to the /constellations route. Do not use any query parameters. Upon receiving the data, use JavaScript to manipulate what is logged.

Tips
You may complete this challenge on your own machine before uploading it to Qualified.
Reference the related lesson for help on completing this practice problem.
