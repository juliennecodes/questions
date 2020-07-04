"use strict";
//nested error
//functions should depend on each other

class DragRacer{
  constructor(name){
    this.name = name;
  }
}//class DragRacer

//------------------------------------------------------------------------------
function winAllStars(dragRacer){
  if (typeof dragRacer === undefined){
    throw new Error(`${dragRacer}? Who or what is that?`);
  }

  dragRacer.allStarsWinner = true;
}

//------------------------------------------------------------------------------
let hallOfFame = [];

function inductToHallOfFame(dragRacer){
  if (wonAllStars(dragRacer)){
    if (alreadyHallOfFamer(dragRacer)) return `${dragRacer.name} is already in the hall of fame.`;
    if(typeof dragRacer.name === "string") hallOfFame.push(dragRacer.name); //is it okay to mutate when you only need one value? if not, what are the advantages of creating a new version?
    else throw new Error(`${dragRacer} is not a drag race star.`);
  }
}

function wonAllStars(dragRacer){
  return dragRacer.allStarsWinner === true;
}

function alreadyHallOfFamer(dragRacer){
  return hallOfFame.includes(dragRacer.name);
}
//------------------------------------------------------------------------------
function listHallOfFamers(){
  return  `The hall of fame includes ${hallOfFame}`;
}

//------------------------------------------------------------------------------
//Scenarios
let alaska = new DragRacer("Alaska"); //won
let ben = new DragRacer("Ben dela Creme") //did not win
let jinx = new DragRacer("Jinx") //won main season, not allstars
let scrunchie; //declared but no definition
let airconditioner = {} //not a dragRacer
//undeclared binding


//------------------------------------------------------------------------------
//Where do you put the try catch block?
//should I place the try block in the function at the top of the stack?
try {
  winAllStars(alaska);
  inductToHallOfFame(alaska);
  listHallOfFamers();
} catch(e){
  console.log(e);
}

//error non all stars winner
try {
  inductToHallOfFame(ben);
  listHallOfFamers();
} catch(e){
  console.log(e);
}
//no error messages, weeded out by the conditional check of whether they're a winner

//error not a dragRacer
try {
  winAllStars(airconditioner)
  inductToHallOfFame(airconditioner);
  listHallOfFamers();
} catch(e){
  console.log(e);
}

//error declared binding but no value
try {
  winAllStars(scrunchie)
  inductToHallOfFame(scrunchie);
  listHallOfFamers();
} catch(e){
  console.log(e);
}

//error undeclared binding
try {
  winAllStars(yellow)
  inductToHallOfFame(yellow);
  listHallOfFamers();
} catch(e){
  console.log(e);
}
