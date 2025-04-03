//! COMMUNICATION WITH THE SERVER
/*
1. How the internet works
2. Mock API using JSON server
3. Using POSTMAN to test rest API
4. Asynchronous JavaSript and fetch
*/
 // Synchronous javaScript
// console.log("start")
// for (let i = 0; i < 1000; i++) {
//     console.log ("within the block")
// }
// console.log('end')

//Asynchronous JavaScript(promise, callback, asynch/await)
// setTimeout (() =>{
//     console.log('This will run later');
// }, 7000)
// console.log("end")

//! HTTP VERBS & CRUD
/*
GET => READ => retrieve resources
POST => CREATE => Create resources
PATCH/PUT => UPDATE => Updates Resources
DELETE => DESTROY => Deletes resources

JSON (JavaScript Object Notation)
- lightweight data storage for data exchange
- works with any language
- easy to ready

REST (REpresentational State Transfer)
- Architecture style for request response cycle
- standardised web application
- uses HTTP
Headers
    - Request: includes a section that specifies what data can be read by the client
    - Response: Includes information on what data is being sent to the client
Paths
    - Easy to understand
*/

//! HOW THE WEB WORKS
/*
- The internet operates based on conversations between the client (browser) and the server.
-  The server then receives the request, processes it, and sends a response. Your browser receives that response and shows it to you.
- Browsers send requests, and servers send responses.
*/

//? HTTP Overview
/*
- Communication between different clients and different servers is only possible because the way browsers and servers talk is controlled by a contract, or protocol called Hyper Text Transfer Protocol (HTTP)
- HTTP is the "language" browsers speak. Every time you load a web page, you are making an HTTP request to the site's server, and the server sends back an HTTP response. 
*/

//? Requests
//? URL
/*
- When you make a request on the web, how do you know where to send it? This is done through Uniform Resource Locators, or URLs.
- for the URL below:
https://github.com/learn-co-curriculum/phase-1-how-the-web-works
- it is broken down into three.

=> https - the protocol
=> github.com - the domain name
=> /learn-co-curriculum/phase-1-how-the-web-works - the path

1. The protocol is the format we're using to send our request. There are several different types of internet protocols (SMTP for emails, HTTPS for secure requests, FTP for file transfers). To load a website, we use HTTP or HTTPS.

2. The domain name is a string of characters that identifies the unique location of the web server that hosts that particular website. This will be things like youtube.com and google.com.

3. The path is the particular part of the website we want to load. GitHub has millions and millions of users and repositories, so we need to identify the specific resource we want using the path:
*/

//? HTTP Verbs
/*
- When making a web request, in addition to the path, you also need to specify the action you would like the server to perform. We do this using HTTP Verbs also referred to as request methods.

GET	        Retrieves a representation of a resource
POST	    Create a new resource using data in the body of the request
PUT	        Update an existing resource using data in the body of the request
PATCH	    Update part of an existing resource using data in the body of the request
DELETE	    Deletes a specific resource
HEAD	    Asks for a response (like a GET but without the body)
TRACE	    Echoes back the received request
OPTIONS	    Returns the HTTP methods the server supports
CONNECT	    Converts the request to a TCP/IP tunnel (generally for SSL)

*/

//? Request format
/*
- When the client makes a request, it includes additional "metadata" about the request, besides just the URL, in the request headers. The request headers contain all the information the server needs in order to fulfill the request: the HTTP verb (method), the resource (path), and the domain (authority), as well as some other metadata.
*/

//? Responses
/*
- Once a server receives the request, it will do some processing (when you write the servers, that means it'll run code you wrote!) and then send a response back. The server's response is separated into two sections: the headers and the body.

- The headers contain all of the metadata about the response. This includes things like content-length (how big is my response) and what the content-type of content it is (is it HTML? JSON? an image?). The headers also include the status code of the response.

- The body of the response is what you see rendered on the page. It is all of that HTML/CSS that you see! Most of the data of a response is in the body, not in the headers.
*/

//? Status Codes
/*
- The primary way that a human user knows that a web request was successful is that the page loads without any errors. However, you can also tell a request was successful if you see that the response header's status code is 200. You've probably seen another common status code, 404. This means "resource not found."

Status codes are separated into categories based on their first digit. Here are the different categories:

100's - informational
200's - success
300's - redirect
400's - error
500's - server error
*/