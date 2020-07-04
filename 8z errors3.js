"use strict";

class DragRacer{
  constructor(name){
    this.name = name;
  }
}//class DragRacer

//------------------------------------------------------------------------------
class NotADragRaceStar extends Error{}

function winAllStars(dragRacer){
  try{
    if (typeof dragRacer === "undefined")throw new Error;

    if (isNotADragRaceStar(dragRacer)) throw new NotADragRaceStar;

    dragRacer.allStarsWinner = true;
  } catch(e){
    if (e instanceof NotADragRaceStar) return `${dragRacer} is not a drag race star.`;
    return `${dragRacer}? Who or what is that?`;
  }
}

function isNotADragRaceStar(dragRacer){
  return !(typeof dragRacer.name === "string");
}
//------------------------------------------------------------------------------
let hallOfFame = [];

class AlreadyAWinner extends Error{}
class NotAWinnerError extends Error{}

function inductToHallOfFame(dragRacer){
  try {
    if (isADragRaceStar(dragRacer)) {
      if (wonAllStars(dragRacer)){
        if (alreadyHallOfFamer(dragRacer)) throw new AlreadyAWinner;
        hallOfFame.push(dragRacer.name); //is it okay to mutate when you only need one value? if not, what are the advantages of creating a new version?
      }
      else throw new NotAWinnerError;
    }

    else throw new Error;

  } catch (e){
    if (e instanceof AlreadyAWinner) return `${dragRacer.name} is already in the hall of fame.`;
    if (e instanceof NotAWinnerError ) return `${dragRacer.name} is not an all stars winner.`;
    else return `${dragRacer} is not a drag race star.`;
  }
}

function wonAllStars(dragRacer){
  return dragRacer.allStarsWinner === true;
}

function alreadyHallOfFamer(dragRacer){
  return hallOfFame.includes(dragRacer.name);
}

function isADragRaceStar(dragRacer){
  return typeof dragRacer.name === "string";
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


//error - non all stars winner
inductToHallOfFame(ben);

//error - not a dragRacer
winAllStars(airconditioner);
inductToHallOfFame(airconditioner);

//error - declared binding but no value
winAllStars(scrunchie);
inductToHallOfFame(scrunchie); //needs to be caught
listHallOfFamers();

//error - undeclared binding
winAllStars(yellow); //problem evaluating yellow
inductToHallOfFame(yellow);
listHallOfFamers();
