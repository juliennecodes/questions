const meadowfield = {
  "Alice's House": ["Bob's House", "Cabin", "Post Office"],
  "Bob's House": ["Alice's House", "Town Hall"],
  "Cabin": ["Alice's House"],
  "Daria's House": ["Ernie's House", "Town Hall"],
  "Ernie's House": ["Daria's House", "Grete's House"],
  "Farm": ["Grete's House", "Marketplace"],
  "Grete's House": ["Ernie's House", "Farm", "Shop"],
  "Marketplace": ["Farm", "Post Office", "Shop", "Town Hall"],
  "Post Office": ["Alice's House", "Marketplace"],
  "Shop": ["Grete's House", "Marketplace", "Town Hall"],
  "Town Hall": ["Bob's House", "Daria's House", "Marketplace", "Shop"]
}

//------------------------------------------------------------------------------
class VillageState {
  constructor(village, currentLocation, parcels) {
    this.village = village;
    this.currentLocation = currentLocation;
    this.parcels = parcels;
  }

  move(newPlace) {
    if (isAccessibleFromCurrent(newPlace)) {
      let parcels = this.parcels.filter(parcel => {isNotDeliverable(parcel);});
      for (let parcel of parcels){
        parcel.location = newPlace;
      }

      return new VillageState(this.village, newPlace, parcels);
    } //if condition isAccessibleFromCurrent

    else {
      return this;
    }//else condition
  } //move

  static scenario(parcelCount = 5){
    let parcels = [];

    for (let i = 0; i < parcelCount; i++) {
      let destination = randomPick(Object.keys(meadowfield));
      let currentLocation;

      do {currentLocation = randomPick(Object.keys(meadowfield));}
      while (currentLocation === destination);

      parcels.push({currentLocation, destination});
    }

    return new VillageState(meadowfield, "Post Office", parcels);
  }// static scenario
} //VillageState

//------------------------------------------------------------------------------
function isAccessibleFromCurrent(place) {
  return this.village[this.currentLocation].includes(place);
}

function isNotDeliverable(parcel) {
  return parcel.destination !== this.currentLocation;
}

//------------------------------------------------------------------------------
function runRobot(villageState, robot){
  for (let turn = 0;; turn++) {
    if (villageState.parcels.length === 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }

    let deliver = robot(villageState);

    console.log(deliver.direction);
    console.log(villageState);

    villageState = villageState.move(deliver.direction);
    console.log(`Moved to ${deliver.direction}`);
  }
}

//------------------------------------------------------------------------------
function randomPick(possibleChoices) {
  let i = Math.floor(Math.random() * possibleChoices.length);
  return possibleChoices[i];
}

function randomRobot(villageState) {
  return {direction: randomPick(meadowfield[villageState.currentLocation])};
}
//------------------------------------------------------------------------------
//TESTING

let x = VillageState.scenario(); //x is a villageState object instance

x; // returns {village: {…}, currentLocation: "Post Office", parcels: Array(5)}

x.village;//returns {Alice's House: Array(3), Bob's House: Array(2), Cabin: Array(1), Daria's House: Array(2), Ernie's House: Array(2), …}

x.currentLocation;//returns "Post Office"

x.village[x.currentLocation]; //returns ["Alice's House", "Marketplace"]

x.village[x.currentLocation].includes("Alice's House"); //returns true
//this is basically isAccessibleFromCurrent, why isn't it working?
//is it the passing of place that isn't working?
//maybe the move method is the one that is having trouble
runRobot(x, randomRobot);

let deliver = {direction: "Alice's House"};

x = x.move("Alice's House");
// VM2110:57 Uncaught TypeError: Cannot read property 'undefined' of undefined
//     at isAccessibleFromCurrent (<anonymous>:57:22)
//     at VillageState.move (<anonymous>:24:9)
//     at <anonymous>:1:3

function isAccessibleFromCurrent(place) {
  return x.village[x.currentLocation].includes(place);
}

isAccessibleFromCurrent("Alice's House");
//returns true

//I guess, the problem is in this
//but isn't this, villageState so it should work since it's working for x? :S
