console.log("arrays");
const nums = [2,4,18];
console.log(nums);


const movie = ["Spiderman","Avengers","Titan","Deadpool"];

const movie1 = "Test1";
const movie2 = "Test2";

console.log(movie);
console.log(movie[0]);
console.log(movie[1]);

const movieTest = ["Test0", movie1,movie2,"Test4"];
console.log(movieTest[0]);
console.log(movieTest[1]);
console.log(movieTest[2]);
console.log(movieTest[3]);

movieTest.push("A","B","C");
console.log(movieTest);
movieTest.pop();
console.log(movieTest);

//movieTest.splice();
//console.log(typeof movieTest);

//const answ = movieTest.join('==');
//console.log(typeof movieTest);
//console.log(typeof answ);


const books = [];
//console.log(books);
books.push("The Shining","Pride and Prejudice");
console.log(books[1]);

books[1] = "Dune";
console.log(books);