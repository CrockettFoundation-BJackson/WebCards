class Suit {
  constructor(name, icon, color) {
    this.name = name;
    this.icon = icon;
    this.color = color;
  }
}

const suits = [
  new Suit('Diamonds', '♦', 'firebrick'),
  new Suit('Clubs', '♣', 'darkslategray'),
  new Suit('Hearts', '♥', 'firebrick'),
  new Suit('Spades', '♠', 'darkslategray'),
];
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 'J', 'Q', 'K', 'A'];
const frame = document.getElementById('frame');

function randomFrom(group) {
  return group[Math.floor(Math.random() * (group.length - 1))]
}

function getCard() {
  let card = { rank: randomFrom(ranks), suit: randomFrom(suits) };
  frame.textContent = card.rank + card.suit.icon;
  frame.style.color = card.suit.color;
  frame.style.borderColor = card.suit.color;
}

frame.addEventListener('click', getCard);
getCard();
