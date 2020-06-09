for (let [from, to] of roadArray){
  addEdge(from, to);
  addEdge(to, from);
}

// edges.map(r => r.split("-")) boils down to
[Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]

//First array is
["Alice's House", "Bob's house"]
//I didn't know you can have a specific element in the binding in a for loop
//I thought it was just a throwaway word
//Anyway, is the parameter *from* bound to "Alice's house"
//is it a parameter?
//is the parameter *to* bound to "Bob's house"

//If so, is this correct?
addEdge("Alice's house", "Bob's house");
addEdge("Bob's house", "Alice's house"); //??

//Afterwards, in the addEdge function
//the parameters from and to aren't bound to any value right so
//it's the order that matters?

function addEdge(from, to){
    //if the graph object with the property of from is null
    if (graph[from] == null){
      //assign the value of to to the graph from property
      graph[from] = [to];
    }
    // if the graph object property from has a value
    else {
      //add the value to in the array, which is the graph property from
      graph[from].push(to);
    }
  }

addEdge("Alice's house", "Bob's house");
//so in this, from is Alice's house and to is Bob's house

addEdge("Bob's house", "Alice's house")
//so in this, from is Bob's house and to is Alice's house
