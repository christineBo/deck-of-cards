const { freeze, drop, take, shuffle } = require('ez-read');
const initializeDeck = require('./deck-init');


class Deck
{
   suits = freeze(require('./suits-init'));
   ranks = freeze(['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']);
   deck = shuffle(initializeDeck(this.suits, this.ranks));

   show() {
      console.log(this.deck);
   }

   shuffleDeck() {
      this.deck = shuffle(this.deck);
   }

   discard(num) {
     this.deck = drop(num, this.deck);
   }

    deal(num) {
         const hand = take(num, this.deck);
         this.deck = drop(num, this.deck);
         return hand;
    }
}

  const deck = new Deck();

  deck.show()
  deck.shuffleDeck()

 // deck.discard(49)
 // const myhand = deck.deal(7);
 // console.log(myhand)
  deck.show()
