# Knuts kabal (Knut's solitaire)

https://lysebo.xyz/games/kabal/

This is a solitaire card game where any deck is possible to solve. You just have to be extremely fortunate. I have only been able to solve it 2 times in 25 years! For that reason, this is the only solitaire card game I ever play (when I occasionally play one physically). My late father-in-law Knut taught me the rules, hence the name Knuts kabal.

The objective is simple: you want the cards in the deck to end up in a single pile. The rules are as follows:
- Take a new card from the deck and place it face up, on the right side of any other cards on the table.
- If this card matches the suit or rank of the card directly to the left, you can place it on top of that card.
- Similarly, if this card matches the suit or rank of the card 3 positions to the left, you can place it on top of that card.
- Placing a card on top of another often opens up further possibilities in either directions. Always pick up the entire pile, and make sure the piles always travel from right to left.

I have used this game as a motivation to learn React.

How many times in 25 years can YOU solve this game? Good luck! :-p


# Side quest: is any deck solvable?

Yes, any deck is solvable, regardless of how it is shuffled. [solve.js](solve.js) is a script that proves it by solving 1000 random decks. More info in [solve.md](solve.md).


# TODOs

    - option: deal all cards
    - option: undo (history)
    - move cards with transition

# implemented features

Card graphics is unicode characters for suits and sans-serif for rank.

7 piles on each line. The cards are distributed in alternating directions for each line. This is a personal preference when playing it with physical cards. Arrows pop up to indicate the direction.

Click on the deck to place a new card. If hints are enabled, the new card is automatically selected, but only if it can be placed on top of other cards.

Click on a card to select it. A selected card has a green border. Possible moves are indicated by green cards if hints are enabled. Click a green card to move the selected card on top of the green card. Click the selected card to deselect it.

Click on the restart icon to restart the game.

# Components

## Game

Placeholder for Board

## Board

Controller component. Placeholders for rendering cards, deck, arrows. Handles user interaction. Calculates state.

## Card

A card is either rendered face down (in the deck) or face up (on the "table"). A card facing up has a visible suit and rank.

## Options

Section that can be shown or hidden. Contains icons to restart, toggle hints
and a link to the Github repo.