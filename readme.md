# Knuts kabal (Knut's solitaire)

This is a solitaire card game that is solvable only if you're extremely lucky. My father-in-law Knut taught me this. He learned it while he was in the army, and never managed to solve it in his lifetime. Because of this, it is the only solitaire I ever play (physically). I have managed to solve it 2 times in 25 years!

TODO: explain the rules

I want to make this as a react app

# features to implement

first pri

    - Board (table) with room for piles, deck, options
    - 7 piles on each line
    - vertical scroll if too many lines
    - deck at the bottom right
    - click a card: visualize legal moves
    - click the selected card: turn off selection
    - click a card that is not a legal move: select the card
    - click a legal move: update piles
    - use simple unicode characters + font + color for card graphics
        https://www.unicode.org/emoji/charts/full-emoji-list.html
        &#x2660; for spades / spar
        &#x2663; for clubs / kløver
        &#x2665; for hearts / hjerter
        &#x2666; for diamond / ruter
        &#x1f3b4; for backside of card

second pri

    - pile must know how many cards it has, to visualize the stack size

improvements

    - card gfx as svg
    - only serve a deck that is solvable
    - all cards visible on screen at all times
        determine grid based on the number of piles
    - visualize moving piles with transitions
    - visualize no more legal moves
    - visualize solved game
    - options button
    - restart game (keeping the same deck)
    - shuffle deck (restart)
    - turn on/off visualizing legal moves
    - cheat mode: highlight correct moves

# Defining components, props, state, events

I haven't finished the first tutorial yet, but I think I have figured out the basics. I'm not going to plan everything before I start, but components and props could be useful to decide on. And maybe events

## Board

**description**  
Has space for the piles of cards. Has a deck of available cards. Has an options button for selecting different things.

**props**  

**state**  
- Array of piles. Each pile has a size and info about the top card. A pile also has a selected state (unselected, selected, marked as legal move)
- Array of cards currently in the deck.

**events**  
- Handle click on each pile and determine what is the correct response based on game state.
- Handle click on deck, placing a card on the board.
- Handle click on options.

## Pile

**description**  
Represents one pile of cards currently on the board. The size of the pile is visualized, to get an impression of how well we're doing in the game. Large piles near the end is always good.

**props**  
- Size of pile
- Visual card (face + value)

**state**  
- selected state (not selected, selected or marked as legal move)

**events**  
- onclick handled by Board

## Deck

**description**  
The cards currently available. This is a pile with all cards facing down.

**props**  
- size of pile

**state**  
**events**  
- onclick handled by Board

# Process

I will implement the game in the following order. This list will be updated to reflect the actual process

    - set up react project
    - create + render basic components
    - create some css
    - add node-sass

# Questions about React

    if a state change triggers render, how can a component transition from one css value to another?

    How to use sass and my svg mixin?
    https://create-react-app.dev/docs/adding-a-sass-stylesheet/





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
