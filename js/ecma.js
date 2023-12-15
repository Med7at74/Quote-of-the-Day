var arrQutes = [
  {
    author: "-- Jim Rohn",
    quote: "'Beware of what you become in pursuit of what you want.'",
  },
  {
    author: "-- Epictetus",
    quote:
      "It's not what happens to you, but how you react to it that matters.",
  },
  { author: "-- Frank Sinatra", quote: "The best revenge is massive success." },
  {
    author: "-- Wayne Gretzy",
    quote: "You miss 100% of the shots you don't take.",
  },
  {
    author: " -- Nelson Mandela",
    quote:
      "Resentment is like drinking poison and waiting for your enemies to die.",
  },
  {
    author: "-- Elbert Hubbard",
    quote: "Do not take life too seriously. You will not get out alive.",
  },
];
var quotee = document.getElementById("quoteOutput");
var authore = document.getElementById("authorOutput");
var arrcartona = [];

function generateQuote() {
  var random = Math.floor(Math.random() * arrQutes.length);

  if (random === arrcartona[arrcartona.length - 1]) {
    arrcartona.pop();
    quotee.innerHTML = arrQutes[arrcartona[arrcartona.length - 1]].quote;
    authore.innerHTML = arrQutes[arrcartona[arrcartona.length - 1]].author;
  } else {
    arrcartona.push(random);
    quotee.innerHTML = arrQutes[arrcartona[arrcartona.length - 1]].quote;
    authore.innerHTML = arrQutes[arrcartona[arrcartona.length - 1]].author;
  }

  console.log(arrcartona);
  console.log(arrcartona[arrcartona.length - 1]);
}
