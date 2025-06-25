function button() {
  getName();
  getFavColour();
  getSize();
  getMoney();

}

function getName() {
  getName = prompt("What is your name?")
  alert("Your name is: " + getName)
}
let userFavColor
let userFavColorValid = false;
function getFavColour() {

  userFavColor = prompt("What would you like to buy?");
  if (userFavColor == "Nike tech" || userFavColor == "Nike crew" || userFavColor == "Nike hoodie" || userFavColor == "Nike sweatpants" || userFavColor == "Nike t-shirts"
    || userFavColor == "Nike shorts" || userFavColor == "nike tech" || userFavColor == "nike crew" || userFavColor == "nike hoodie" || userFavColor == "nike sweatpants"
    || userFavColor == "nike t-shirts" || userFavColor == "nike shorts") {
    alert("You are looking for: " + userFavColor)
  } else {
    alert("That is not an option")
  }
}

function getSize() {
  userSize = prompt("These are the size available\n XS\n S\n m\n L\n XL\n XXL\n Choose the one that will fit you.")
  if (userSize == "XS" || userSize == "S" || userSize == "L" || userSize == "XL" || userSize == "XXL" || userSize == "xs" || userSize == "s" || userSize == "l" || userSize == "xl" || userSize == "xxl") {
    alert("So you want: " + userSize + " size.")
  } else {
    alert("That is not an option")
  }

}

function getMoney() {
  clientMoney = prompt(" how much money do you have?");

  if (clientMoney < 4) {
    alert("Your pocket money is " + clientMoney + " dollars.\n Sorry you CAN'T afford a chocolate bar")
  } else {
    alert("Your pocket money is " + clientMoney + " dollars.\n You can afford a chocolate bar")

  }
}

