function test(label, body) {
  if ( !body())
  console.log(`Failed: ${label}`);
}

test("convert Latin text to uppercase", () => { return "hello".toUpperCase === "HELLO";});
//resolves to
test(){
  if (!
    () => { return "hello".toUpperCase === "HELLO";}
  )//if

  console.log(`Failed: convert Latin text to uppercase`);
}//test


// :/ I don't really see the purpose of these functions
// is the body supposed to be taking in text to convert?
// if so, then it would return false (inverted true) everytime?

//I don't get how to write tests
//Do I need to learn how to write tests?
