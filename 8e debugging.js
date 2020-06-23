function numberToString(n, base = 10) {
  let result = " ", sign = " ";
  //QUESTION
  //missing let in sign?

  if (n < 0) {
    sign = " - ";
    n = - n;
    //don't these double negatives cancel each other out
    //what's the point of doing this?
    //if n is already less than 0, then isn't its sign already -?
    //unless you want to make the number positive and have a sign act as a
    //negative indicator?

    //QUESTION
    //so for all intents and purposes, n will be positive but appear negative?
  }

  do {
    result = String(n % base) + result;
    //this just logs so the user can read the calculations behind the screen
    //it's like a heading in an article, saying what is happening
    //without the user having to read the paragraphs
      //first pass    "3"       + ""     //result is 3
      //second pass   "1.3"     + "3"    //result is "1.33"
      //third pass    "0.13"   + "1.33"  //result is "0.131.33"
    n /= base;
    //what's /= ?
    //oh maybe n = n / base
    //this actually changes the value of n
      //first pass    1.3
      //second pass   0.13
      //third pass     .013
  } while (n > 0);

  return sign + result;
}

console.log(numberToString(13, 10));

//We know that the program is malfunctioning
//we want to find out why

//resist the urge to start making random changes to the code to see whether
//the changes make it better

//instead, think
//analyze what is happening
//come up with a theory of why it might be happening
//then, make up additional observations to test this theory
//if you don't have a theory, make additional observations to help you come
//up with one

//------------------------------------------------------------------------------
13
1.3
0.13
0.013
...
1.5e-323
//QUESTION
//How is this the expected result when return sign + result isn't included
//in the loop structure

//QUESTION
//What does making it a whole number do?
//What does using Math.floor(n / base) accomplish
//Isn't the problem adding strings to strings for a number operation?
//I also don't get why you're adding the result to n / base

//Oh I misread, it is the modulus operator
//hmm
//so the remainder is added to the result

//QUESTION
//but why?

2, 15, 61, 65, 75
