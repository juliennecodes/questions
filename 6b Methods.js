function speak(line){
  console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};
//what does it mean when there is an unaccompanied value without a key
//in an object definition?
//I thought in object definition, you have a key and value pair?
//Maybe because function is already defined outside it's fine?
//Is speak the key instead of the value then?


//-----------------------------------------------------------------------
// Quote from book
//
// "Since each function has its own •this• binding, whose value depends on the
// way it is called, you cannot refer to •this• of the wrapping scope
// in a regular function defined with the function keyword."

//QUESTION
//How does the way the function is called affect the •this• binding
//can't you write out the same functions in different way and the only
//difference is when they become available to call?

//QUESTION
//Why can't you refer to •this• in a function declaration?

//Additional quote from the book that might put it context
//Next paragraph

// Arrow functions are different—they do not bind their own this but can see
// •this• binding of the scope around them. Thus, you can do something like
// the following code, which references •this• from inside a local function:

function normalize() {
  console.log(this.coords.map(n => n / this.length));
}
normalize.call({coords: [0, 2, 3], length: 5});
// → [0, 0.4, 0.6]

// If I had written the argument to map using the function keyword, the code
// wouldn’t work.
