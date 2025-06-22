function button () {
getName();
getFavColour();
getFavAge();
getMoney();

}

function getName () {
getName = prompt("What is your name?")
alert("Your name is: " + getName)
}

function getFavColour () {
userFavColour = prompt("What item are you looking for?")
alert("You are looking for: " + userFavColour)
}

function getFavAge () {
userFavAge = prompt("What size are you looking for Between\n XS\n S\n m\n L\n XL\n XXL\n Sorry but they are the only size that's available currtenly!")
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

