# Knuts kabal (Knut's solitaire)

**WORK IN PROGRESS**  
https://lysebo.xyz/games/kabal/

This is a solitaire card game. It is solvable only if you're extremely lucky. I have only been able to solve it 2 times in 25 years! For that reason, this is the only solitaire card game I ever play (when I occasionally play one). My late father-in-law Knut taught me the rules, hence the name Knuts kabal.

The objective is simple: you want the cards in the deck to end up in a single pile. The rules are as follows:
- Take a new card from the deck and place it face up, on the right side of any other cards on the table.
- If this card matches the suit or rank of the card directly to the left, you can place it on top of that card.
- Similarly, if this card matches the suit or rank of the card 3 positions to the left, you can place it on top of that card.
- Placing a card on top of another often opens up further possibilities in either directions. Always pick up the entire pile, and make sure the piles always travel from right to left.

I have used this game as a motivation to learn React.



# TODOs

    v grid layout alternating snake
    v arrows indicating direction
    - only generate a deck that is solvable
    - options button
    - option: undo (history)
    - option: toggle auto-select new card
    - option: toggle show legal moves
    - option: deal all cards
    - option: new game
    - option: toggle cheat mode: highlight correct moves
    - visualize pile size
    - move cards with transition
    - visuialize no more legal moves
    - visualize solved game

# implemented features

Card graphics is unicode characters for suits and sans-serif for rank.

7 piles on each line. The cards are distributed in alternating directions for each line. This is a personal preference when playing it with physical cards. Arrows pop up to indicate the direction.

Click on the deck to place a new card. The new card is automatically selected, but only if it can be placed on top of other cards.

Click on a card to select it. A selected card has a green border. Possible moves are indicated by green cards. Click a green card to move the selected card on top of the green card. Click the selected card to deselect it.

# Components

## Game

Placeholder for Board

## Board

Controller component. Placeholders for rendering cards, deck, arrows. Handles user interaction. Calculates state.

## Card

A card is either rendered face down (in the deck) or face up (on the "table"). A card facing up has a visible suit and rank.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

