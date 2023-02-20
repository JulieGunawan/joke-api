/* This code uses JavaScript to fetch 10 random jokes from the Official Joke API 
and logs the response to the console.*/


//create a new XMLHTTPRequest object
let request = new XMLHttpRequest();

//specify the type of request (GET) and the URL to fetch
request.open("GET", "https://official-joke-api.appspot.com/random_ten");

// send the request to the server
request.send();

// when the request is finished, run this function
request.onload = ()=> {
    console.log(request);
    if (request.status ==200) {
        //parse the response and log the results to the console
        console.log(JSON.parse(request.response));
    }
    else{
        //if there was an error, log the status code and status text to the console
        console.log('error ${request.status} ${request.statusText}')
    }
}