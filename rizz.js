function button () {
getName();
getFavColour();
getFaAge();
getMoney();

}

function getName () {
getName = prompt("What is your name?")
alert("Your name is: " + getName)
}
let userFavColor
let userFavColorValid = false;
function getFavColour () {

  userFavColor = prompt("What would you like to buy?");
if (userFavColor == "Nike Tech" || userFavColor == "Nike Fleece CS Crew" || userFavColor == "Nike Hoodie" || userFavColor == "Nike Fleece Sweatpants" || userFavColor == "Nike T-shirts" || userFavColor == "Nike Cardinal Nylon Shorts"){
  alert("You are looking for: " + userFavColor)
} else { alert("That is not an option")

}

function getFavAge () {
userFavAge = prompt("These are the size available\n XS\n S\n m\n L\n XL\n XXL\n Choose the one that will fit you.")
alert("So you want: " + userFavAge + " size.")
}

function getMoney () {
clientMoney = prompt(" how much money do you have?");

if (clientMoney < 4){
  alert("Your pocket money is " +clientMoney+ " dollars.\n Sorry you CAN'T afford a chocolate bar")
} else { 
alert("Your pocket money is " +clientMoney+ " dollars.\n You can afford a chocolate bar")

}
}
}
