"use strict";

class DragRacer{
  constructor(name){
    this.name = name;
  }
}//class DragRacer

//------------------------------------------------------------------------------
function winAllStars(dragRacer){
  try{
    if (typeof dragRacer === undefined){
      throw new Error;
    }

    dragRacer.allStarsWinner = true;
  } catch(e){
    return `${dragRacer}? Who or what is that?`;
  }
}

//------------------------------------------------------------------------------
let hallOfFame = [];

class NotAWinnerError extends Error{}

function inductToHallOfFame(dragRacer){
  try {
    if (wonAllStars(dragRacer)){
      if (alreadyHallOfFamer(dragRacer)) return `${dragRacer.name} is already in the hall of fame.`;
      if(isDragRaceStar(dragRacer)) hallOfFame.push(dragRacer.name); //is it okay to mutate when you only need one value? if not, what are the advantages of creating a new version?
      else throw new NotADragRaceStar;
    }
    else throw new NotAWinnerError;
  } catch (e){
    if (e instanceof NotAWinnerError ) return `${dragRacer.name} is not an all stars winner.`;
    else return `${dragRacer} is not a drag race star.`; //I don't know how to get what you typed instead of undefined
  }
}

function wonAllStars(dragRacer){
  return dragRacer.allStarsWinner === true;
}

function alreadyHallOfFamer(dragRacer){
  return hallOfFame.includes(dragRacer.name);
}

function isDragRaceStar(dragRacer){
  return typeof dragRacer.name === "string"
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
winAllStars(alaska);
inductToHallOfFame(alaska);
listHallOfFamers();


//error non all stars winner
inductToHallOfFame(ben);
listHallOfFamers();
//no error messages, weeded out by the conditional check of whether they're a winner

//error not a dragRacer
winAllStars(airconditioner);
inductToHallOfFame(airconditioner);
listHallOfFamers();

//error declared binding but no value
winAllStars(scrunchie);
inductToHallOfFame(scrunchie);
listHallOfFamers();

//error undeclared binding
winAllStars(yellow);
inductToHallOfFame(yellow);
listHallOfFamers();
