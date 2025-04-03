console.log('before fetch')
fetch('http://localhost:3000/posts') //this is by default a get request
.then(res => console.log(res))
console.log('after fetch')
//fetch is asynchronous, and also a promise
// the .then() runs after our promise has been fullfilled