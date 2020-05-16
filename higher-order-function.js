function createSafeVersion(func){
  return function(n, message) {
    if (n !== null && typeof n === "number") {
      if (message != null && typeof message === "string") {
        return func(n, message);
      }
    }
  }
}


function printMessageNTimes(n, message) {
  for (i = 0; i < n; i++){
    console.log(message);
  }
}

function getNthLetter(n, string) {
  return string.charAt(n);
}

let printMessageNTimesSafe = createSafeVersion(printMessageNTimes);
let getNthLetterSafe = createSafeVersion(getNthLetter);

printMessageNTimes(3, "Hello");

getNthLetterSafe(3, "komquat");
//also means
createSafeVersion(getNthLetter)(3, "komquat");
