const button = document.getElementById("btn");

const quotes = [
  [
    "develop success from failures",
    "live like you will die tomorrow",
    "stay away from those people",
    "give joy to other people",
    "change your world",
  ],
  [
    "always will solve the problems of the human race",
    "success is peace of mind",
    "happiness is wanting what you get",
    "the first way is to be kind",
    "develop success from failures",
  ],
  [
    "the optimist sees opportunity in every difficulty",
    "the vision pulls you",
    "you learn more from failure than from success",
    "failure builds character",
    "you run the day",
  ],
];

const newMessage = document.createElement("p");
document.querySelector(".container").appendChild(newMessage);

function generateIndexNumber() {
  let indexNumber = Math.floor(Math.random() * 5);
  return indexNumber;
}

function mixPieces() {
  let message = "";

  for (let quotePart in quotes) {
    message += `${quotes[quotePart][generateIndexNumber()]}, `;
  }
  return message[0].toUpperCase() + message.slice(1) + '.';
}

function messageOnScreen() {
  newMessage.innerHTML = mixPieces().replace(/,([^,]*)$/, ".$1");
}

button.addEventListener("click", messageOnScreen);
