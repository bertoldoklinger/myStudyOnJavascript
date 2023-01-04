/*
    1. Install node-fetch if your Node version is less than 18
       using NPM, and import it in to your file (ES Module style)
    2. Make a request to:
       https://jsonplaceholder.typicode.com/posts/1
       and print out the resulting JSON using Fetch
    
    BONUS: How does this differ from text content and what might
           fetch be doing with the JSON response for us?
*/

import fetch from "node-fetch";

const fetchData = async () => {
  const request = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const response = await request.json();
  console.log(response);
  console.log(response.id);
};

fetchData();
