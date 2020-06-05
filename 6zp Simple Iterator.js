//Simple iterator
//Simple iterator returns an object
//Returned object has a next method
//next method returns an object with properties of value and done
function makeIterator(array){
  let nextIndex = 0;

  return {
    next(){
      if(nextIndex < array.length){
        return {
          value: nextIndex++,
          //Shouldn't this evaluate to 1?
          //However, when I call the next method and it returns value: 0

          done: false
        }
      }

      else {
        return {
          done: true
        }
      }
    }
  }
}

let dessertIterator = makeIterator(['cookie', 'cake', 'chocolate']);
//Calling next method
dessertIterator.next();//{value: 0, done: false}
dessertIterator.next();//{value: 1, done: false}
dessertIterator.next();//{value: 2, done: false}
dessertIterator.next();//{done: true}

//------------------------------------------------------------------------------
//increment operator
nextIndex = nextIndex + 1;  //{value: 1, done: false}
nextIndex+=1;               //{value: 1, done: false}
nextIndex++;                //{value: 0, done: false}
++nextIndex                 //{value: 1, done: false}
