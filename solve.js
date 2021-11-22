/*
    solve.js
    proving the theory that any deck is solvable,
    regardless of how it is shuffled
*/

/*
    create a randomly shuffled deck
*/
const createDeck = () => {
    const cards = [];
    const suits = ["s","c","h","d"]; // Spades, Clovers, Hearts, Diamonds

    // build deck of cards
    for(const suit of suits) {
        for(let i=1; i<=13; i++) {
            cards.push({
                suit: suit,
                rank: i,
            });
        }
    }

    // shuffle cards
    for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    return cards;
}

/*
    determine if deck[from] -> deck[to] is a legal move
    from and to are indexes (int)
*/
const isLegalMove = (deck, from, to) => 
    to >= 0 && (
        deck[from].suit === deck[to].suit ||
        deck[from].rank === deck[to].rank
);

/*
    create a unique string from a deck
*/
const deckToString = d => {
    return d.map( c => c.suit+c.rank ).join(",");
}

/*
    solve every possible move for the given deck
*/
const solve = (d, str="") => {
    cycle++;
    if(cycle%10000 == 0) {
        // print fancy progress indicator on the same line.
        // if the wheel stops spinning, the node process has
        // run out of resources. A problem on my computer, atleast. :-/
        process.stdout.write("\b"+progressChars[progressIndex]);
        progressIndex = (progressIndex+1)%progressChars.length;
    }

    if(d.length == 1) {
        // Finally gotten the deck down to one single pile!
        process.stdout.write(`\bsolved in ${cycle} tries.\n`);
        solved = true;
        numSolved++;

        // print solution
        console.log(str);
    } else {
        // keep on solving all moves for this instance of the deck
        for (let i=0; i<d.length; i++) {
            if(!solved && isLegalMove(d, i, i-1)) {
                // register the move being made
                let foo = str + `${d[i].suit}${d[i].rank}>${d[i-1].suit}${d[i-1].rank},`;

                let tempDeck = [...d];
                tempDeck[i-1] = tempDeck[i];
                tempDeck.splice(i, 1);
                if(tries[deckToString(tempDeck)] === undefined) {
                    // mark the current deck as processed, to avoid
                    // multiple tries on the order of cards
                    tries[deckToString(tempDeck)] = true;
                    solve(tempDeck, foo);
                }
            }
            if(!solved && isLegalMove(d, i, i-3)) {
                // register the move being made
                let foo = str + `${d[i].suit}${d[i].rank}>${d[i-3].suit}${d[i-3].rank},`;

                let tempDeck = [...d];
                tempDeck[i-3] = tempDeck[i];
                tempDeck.splice(i, 1);
                if(tries[deckToString(tempDeck)] === undefined) {
                    // mark the current deck as processed, to avoid
                    // multiple tries on the order of cards
                    tries[deckToString(tempDeck)] = true;
                    solve(tempDeck, foo);
                }
            }
        }
    }
}

/*
    array of characters that "rotate" while solving a deck
*/
const progressChars = "-\\|/".split("");
let progressIndex = 0;

/*
    helper vars
*/
let solved = false;
let cycle = 0;
let tries = {};
let numSolved = 0;

/*
    uncomment to solve a custom deck
*/
/*
const deck = 
    "d3,s9,c4,c9,s4,h11,h4,d1,d6,h6,h7,c10,d12,c13,s2,h8,h5,h10,c7,d5,c2,s10,d2,s7,s8,h2,d8,h1,c1,d7,h12,h13,c5,s3,h3,s1,d4,s6,c6,c12,c11,d13,c8,d9,d11,s5,s13,d10,c3,h9,s12,s11"
    .split(",").
    map(el => ({ suit: el.substring(0,1), rank: parseInt(el.substring(1)) }));
console.log(deck);
solve(deck);
process.exit();
*/


/*
    main loop
*/
for(let i=0; i<1000; i++) {
    solved = false;
    cycle = 0;
    tries = {};

    const deck = createDeck();
    console.log(deckToString(deck));
    process.stdout.write(`${i+1}/1000: solving:  `);
    solve(deck);
    console.log("");
}
console.log("done");
console.log(`${numSolved} of 1000 solved.`);
