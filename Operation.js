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
const frames = document.getElementsByClassName('frame');

function randomFrom(group) {
  return group[Math.floor(Math.random() * group.length)]
}

function getCard(frame) {
  let card = { rank: randomFrom(ranks), suit: randomFrom(suits) };
  frame.textContent = card.rank + card.suit.icon;
  frame.style.color = card.suit.color;
  frame.style.borderColor = card.suit.color;
  resetAnimation(frame);
}

function resetAnimation(frame) {
  frame.style.animation = "none";
  frame.offsetHeight;
  frame.style.animation = "flip 0.3s ease-out";
}

for (let frame of frames) {
  frame.addEventListener('click', () => getCard(frame));
  getCard(frame);
}
