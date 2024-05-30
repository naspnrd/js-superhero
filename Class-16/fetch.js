// var request = new XMLHttpRequest();
// request.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
// request.onload = function(){
//     // begin accesing the data
// }

// request.send();

// fetch APi -> json, XML, HTML, or binary

// fetch(url) -> initiates the http request and returns a promise that resolves to response

// Request
// first parameter -> url (required: string)
// second parameter -> optional -> options
// 1. method
// 2. headers
// 3. body
// 4. mode : CORS(Cross-origin resource sharing)
// 5. cache
// 6. signal

// Response
// 1. response.json() -> parses the response body as json
// 2. response.text() -> resolves response body as plain text
// 3. response.blob() ->
// 4. response.arrayBuffer() -> resolve to an Array buffer

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application.json",
  },
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
})
  .then((response) => {
    console.log({ response });
    return response.json(); // it resolve in a promise and give the data as json
  })
  .then((result) => console.log({ result }))
  .catch((error) => console.log(error));

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));
