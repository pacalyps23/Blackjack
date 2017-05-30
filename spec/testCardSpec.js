



describe("Test card", function()
{
  let card;
  let card2;

  beforeEach(function()
  {
    card = new Card(1,3);//value, suit
    card2 = new Card(12, 2);
  })

  it('should be able to display a card suit', function()
  {
    expect(card.getSuit()).toBe("\u2665");
  });//where you write your test

  it("should be able to display card value", function()
  {
  //console.log(calculate.minus(5,4));
  expect(card.getValue()).toBe(1);
  });

  it("should be able to check printValue", function()
  {
    expect(card.toString()).toMatch("A \u2665");
  });

  it("should get value of 10 on a face card", function()
  {
    let faceValue = card2.getFaceValue(card2.getValue());
      expect(faceValue).toBe(10);
  })

});

describe("Test Deck", function ()
{
  let deck;

  beforeEach(function()
  {
    deck = new Deck();
    //deckArray = deck.generateDeck();
  });

  it("Should create a deck of size 52", function()
  {
    expect(deck.cards.length).toBe(52);
  });

  it("Should generate deck started with 1 Daimond and so on", function()
  {
      console.log(deck.cards[0]);
      expect(deck.cards[0].getValue()).toBe(1);
      expect(deck.cards[1].getValue()).toBe(2);
  })

  it("Should generate different cards after shuffle", function()
  {
      card1 = deck.cards[0];
      deck.shuffle();
      console.log(card1 + " " + deck.cards[0]);
      expect(deck.cards[0]).not.toBe(card1);
  })


});

//describe("Test Hand", function
{

})
