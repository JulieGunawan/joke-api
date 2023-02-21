//Function to fetch a random joke from the official-joke-api
function getJokes(){
    //use the fetch() method to make a GET request to the joke API
    fetch('https://official-joke-api.appspot.com/random_joke/')
        //if the response is successful, parse the JSON data
        .then(res => res.json())
        //If parsing is succesful, create a string with the joke setup and punchline
        .then(joke => {
            let jokes = `${joke.setup} - ${joke.punchline}`;
            //Set the text content of the #box element to the joke string
            document.querySelector('#box').innerHTML = jokes;
        })
        //If any error occurs, log the error message to the console
        .catch(error => console.log(error.message))
}

/*The code below is to generate 10 random jokes

function getJokes(){
    fetch('https://official-joke-api.appspot.com/jokes/ten')
        .then(res => res.json())
        .then(data => {
            let jokes = data.map(joke => `${joke.setup} - ${joke.punchline}`).join("<br><br>");
            document.querySelector('#box').innerHTML = jokes;
        })
        .catch(error => console.log(error.message))
}

*/