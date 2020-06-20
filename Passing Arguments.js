//I don't understand why this is  turning up undefined
let currentLocation = "Post Office"
let parcels =
[{currentLocation: "Shop", destination: "Alice's House"},
{currentLocation: "Bob's House", destination: "Marketplace"},
{currentLocation: "Bob's House", destination: "Grete's House"}];

function haveUncollectedParcels(currentLocation, parcels){
  parcels.some(parcel => {return parcel.currentLocation !== currentLocation;});
}

haveUncollectedParcels(currentLocation, parcels);
//undefined

parcels.some(parcel => {return parcel.currentLocation !== currentLocation;});
//true

//------------------------------------------------------------------------------
//I tried it with simpler functions
let x = [2, 3, 4, 5];
let y = [450, 250, 300];

function hasNumber(array, number){
  array.some(n => {return n === number});
}

hasNumber(x, 3);                 //undefined

hasNumber(y, 3);                //undefined

x.some(n => {return n === 3});  //true
y.some(n => {return n === 3});  //false
//------------------------------------------------------------------------------
//I had to make a simple function call to make sure I know how to call a function that take in arguments
function say(word){
  return word;
}

say("cookies"); //"cookies"
