function start () {
getFavColour();
getFavAge();
getMoney();
}

function getFavColour () {
userFavColour = prompt("What is your name?")
alert("Your name is: " + userFavColour)
}

function getFavAge () {
userFavAge = prompt("What is your age?")
alert("Your age is: " + userFavAge)
}

function getMoney () {
clientMoney = prompt(" how much pocket money do you have?");

if (clientMoney < 4){
  alert("Your pocket money is " +clientMoney+ " dollars.\n Sorry you CAN'T afford a chocolate bar")
} else { 
alert("Your pocket money is " +clientMoney+ " dollars.\n You can afford a chocolate bar")

}
}