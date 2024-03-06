const suits = [
  new Suit('Diamonds', '♦', 'firebrick'), 
  new Suit('Clubs', '♣', 'darkslategray'), 
  new Suit('Hearts', '♥', 'firebrick'), 
  new Suit('Spades', '♠', 'darkslategray'), 
];
const ranks = [2,3,4,5,6,7,8,9,'J','Q','K','A'];
const frame = document.getElementById('frame');

function randomFrom(group) {
  return group[Math.floor(Math.random() * (group.length - 1))]
}
