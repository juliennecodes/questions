//THIS IS THE HIGHER ORDER FUNCTION
//IT ACCEPTS A FUNCTION AS AN ARGUMENT
function createSafeVersion(func) {
  return function(n, message) {
    if (n !== null && typeof n === "number") {
      if (message != null && typeof message === "string") {
        return func(n, message);
      }
    }
  }
}

//FUNCTION CALLS AND RETURN VALUES

//FIRST LEVEL RETURN VALUE
//function call
createSafeVersion(getNthLetter);
//returns this
function(n, message) {
  if (n !== null && typeof n === "number") {
    if (message != null && typeof message === "string") {
      return function getNthLetter(n, string) {
        return string.charAt(n);
      }
    }
  }
}

//SECOND LEVEL RETURN VALUE
//function call
createSafeVersion(getNthLetter)(3, "komquat"); //OR getNthLetterSafe(3, "komquat");
//returns this
function getNthLetter(3, "komquat") {
  return "komquat".charAt(3);
}

//when this is called, you get
"q"
//???But don't you need to call the function to get this result
//Like this?
createSafeVersion(getNthLetter)(3, "komquat")();
//Is it called automatically?
