"use strict";



class Card
{
    constructor(value, suit)
    {
        this.suit = suit;
        this.value = value;
    }

    getFaceValue(value)
    {
        if(this.value < 11)
          return this.value = value;
        else if(this.value > 11)
          return this.value = 10;
    }

    getValue()
    {
      return this.value;
    }


    getSuit()
    {
      let diamond = "\u2666";
      let club = "\u2663";
      let hearts = "\u2665";
      let spades = "\u2660";

      if (this.suit === 1)
        return diamond;
      else if (this.suit === 2)
        return club;
      else if (this.suit === 3)
        return hearts;
      else
        return spades;
    }

    getPrintValue()
    {
      if(this.value === 1)
      return "A";
      if(this.value < 11)
        return this.value;
      else if(this.value === 11)
        return "J";
      else if(this.value === 12)
        return "Q";
      else if(this.value === 13)
        return "K"
    }

    toString()
    {
        return this.getPrintValue() + " " + this.getSuit();
    }
}

class Deck
{
  constructor()
  {
      this.cards = this.generateDeck();
  }


  generateDeck()
  {
    var deck = [];
    for(var suit = 1;suit <= 4; suit++)
    {
      for(var value =  1; value <= 13; value++)
      {
        deck.push(new Card(value, suit));
      }
    }
      return deck;
  }

  shuffle()
  {
    for(var i = this.cards.length - 1; i > 0; i--)
    {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }


  deal()
  {
    if(this.cards.length < 10)
    {
      this.cards = this.generateDeck();
    }
    return this.cards.pop();
  }


}

class Hand
{
  constructor()
  {
    this.card = [];
  }

  receiveCard(newCard)
  {
    this.card.push(newCard);
  }

  clear()
  {
    this.cards = [];
  }

  toString()
  {
    var result;
    for(var i = 0; i < this.card.length; i++)
    {
      result+= this.card[i] + " ";
    }
    return result;
  }

	evaluateHand()
	{
		var total = 0;
		for(var i = 0; i < this.card.length; i++)
			{
				total+= this.card[i];
				if(this.card[i] == 1 && (total < 12))
					{
						card[i] = 10;
						total += this.card[i];
					}
			}
		return total;
	}
}

class Player
{
  constructor()
  {
     this.balance = 1000;
  }

  setBalance(balance)
  {
    this.balance = balance;
  }

  getBalance()
  {
    return this.balance;
  }
}


function welcome()
{

      var display = document.getElementById("display");
			display.innerHTML += "Welcome to BlackJack.Your banks is initialized to $1,000";
      var paco = new Player();
      console.log(paco.getBalance());

}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
{
  module.exports = Card;
}
