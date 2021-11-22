# Any deck is solvable!

Below is the output from running `node solve.js`. The script solves 1000 randomly shuffled decks, proving (close enough) that any deck is solvable.

# Explanation of output

Each iteration prints out
1. the deck being processed (`h12` means Queen of Hearts)
2. iteration number and the number of tries before a solution was found
3. the solution (`s6>s10` means 6th of Spades placed on top of 10th of Spades)

# A ghost in the machine

Once in a while the node process hangs before it manages to complete all 1000 decks. It probably has something to do with the resources available on my computer and the number of tries reaching a certain point. The progress indicator just stops. No crash, just deadly silence..

I don't think it is related to the deck being unsolvable. An unsolvable deck will just move on to the next deck. I have tested that by inserting one card that is not compatible with any other cards.

Here is an example of a deck that causes the script to hang:

d3,c4,s1,h11,h9,d12,h13,s2,d13,d7,h4,h12,h8,s7,s10,c7,h6,h3,c9,h1,h7,c13,c2,s9,h10,h5,c6,d2,d9,s13,d5,c3,c1,c5,c10,c8,d10,s12,d6,s11,s6,s4,d1,d11,h2,d4,c12,s3,s8,c11,d8,s5


# Output

`$ node solve.js`

h12,s5,s11,d1,c11,d9,h10,h7,h8,d10,h11,s2,d3,s10,d6,c5,s4,h6,c7,s9,c4,c1,d8,c2,c3,c12,s3,c13,s12,d13,s7,h13,s13,s1,h4,c6,c10,d2,s6,d12,d7,s8,h5,d11,h3,c9,d4,c8,h2,h1,h9,d5    
**1/1000: solving: solved in 40014 tries.**  
s11>s5,h7>h10,h8>h7,d3>d10,s10>s2,d6>d3,c7>c5,c4>s4,c4>c7,h6>h11,h6>d6,h6>h8,c3>c2,c12>c3,s12>c12,s12>s9,s3>s12,d13>c13,d13>d8,s7>s3,h13>d13,s13>h13,s1>s13,s1>c1,s1>s7,c6>c4,c10>c6,c10>s10,c10>c11,d7>d12,d4>d11,d4>d7,d4>h4,d4>d9,d2>d4,s8>s6,h5>h6,c8>s8,h3>h5,c9>c8,h2>h3,h2>d2,c9>c10,h9>h2,h9>c9,s1>s11,h9>h12,h1>h9,s1>h1,d1>s1,d5>d1,

s12,c7,h10,h6,s7,s8,h5,s5,s10,h1,c2,s13,s1,s6,c8,c12,h12,h3,d5,s9,d11,h11,c10,d8,s2,h2,c9,h4,s4,d13,d1,d10,d7,h13,c4,s11,h9,s3,c3,d6,c13,d12,d2,c1,d3,d9,c11,h7,h8,c5,d4,c6  
**2/1000: solving: solved in 18934 tries.**  
h6>h10,s7>s12,c7>s7,s5>h5,s5>s8,s10>s5,s13>s10,s1>s13,h1>s1,h1>h6,c12>c8,h12>c12,h12>h1,h3>h12,h11>d11,h2>s2,h2>h11,s4>h4,d13>d8,d1>d13,d10>d1,d10>c10,d10>d5,s4>s9,h13>h2,c3>s3,c3>c4,d2>d12,d9>d2,d9>h9,d9>d7,d9>c9,d6>d9,d6>d10,s11>s4,c11>c13,d3>c3,c11>s11,c5>c1,h7>h13,c6>c5,c6>c11,c6>c2,s6>c6,d6>s6,h7>c7,d3>d6,h8>h7,h3>h8,d3>h3,d4>d3,

c9,c12,d7,h3,c2,h5,h9,s12,c8,d11,s10,s1,c5,c6,c13,s9,h7,h6,s8,h13,c1,s7,d6,h2,s6,d10,s3,s13,c7,s4,h1,d12,d1,h8,d9,h4,d5,d13,c11,c4,d8,c3,c10,h10,s2,s11,d2,d3,h12,d4,h11,s5  
**3/1000: solving: solved in 7366 tries.**  
c12>c9,c2>c12,h5>h3,h9>h5,s10>s12,s1>s10,c6>c5,c13>c6,h6>h7,s7>s8,h2>h13,s6>d6,s6>s7,s6>h6,s6>s9,c1>c13,c1>s1,c1>c2,c8>c1,h2>h9,s13>s3,d1>d12,d1>h1,d13>d5,c4>c11,c10>c3,h10>c10,s11>s2,d2>d8,h12>h10,d3>d2,d4>d3,d4>h4,d4>d9,d13>d1,d13>s13,d13>d10,s4>s6,h12>h8,d4>d13,d4>s4,d4>d7,h11>h12,h11>h2,d11>h11,c7>c8,c4>c7,d4>c4,d11>d4,s11>d11,s5>s11,

s6,d2,d13,d9,d4,s12,d5,h5,d11,s5,c12,c9,s3,s1,d8,s4,s11,h1,c11,d1,d10,h9,h6,c10,s10,h10,d7,h8,c4,s13,h13,c7,s8,h12,c2,c5,c8,d3,h11,s7,s2,c1,h3,h2,c13,c6,c3,h4,h7,d6,d12,s9  
**4/1000: solving: solved in 49425 tries.**  
d13>d2,d9>d13,d4>d9,h5>d5,d11>d4,s5>h5,s5>s12,c9>c12,s1>s3,s11>s4,h1>s1,c11>s11,c11>c9,d1>d8,d1>h1,d1>d11,d10>d1,h6>h9,s10>c10,s10>s5,s10>d10,s10>s6,h10>h6,h13>s13,h12>h13,c5>c2,c8>c5,c8>s8,c8>c7,c8>h8,c8>c11,c4>c8,h2>s2,c6>c13,c3>c1,h3>c3,h3>h2,h3>d3,h3>h10,h11>h3,d6>c6,d12>d6,d12>d7,h12>d12,h12>h11,h7>h12,h4>c4,h7>h4,s7>h7,s7>s10,s9>s7,

d3,h12,s7,h5,d7,c2,c11,s13,h3,d5,d6,c5,c3,h8,s2,c7,s6,s3,s12,h11,h13,h9,c1,c9,d12,d4,c8,h4,d9,c12,h6,s10,h10,d2,s11,h1,s5,h2,d1,c13,c10,s9,d8,h7,s4,d11,s1,c6,d10,d13,s8,c4  
**5/1000: solving: solved in 194425 tries.**  
c11>c2,d6>d5,c3>c5,h8>h3,s3>s6,s3>c3,s3>s13,s2>s3,h13>h11,h9>h13,c1>c7,c9>h9,d4>d12,d9>d4,d9>c9,d9>d6,c12>s12,c12>c1,c8>c12,h4>h8,h6>h4,h10>s10,d2>d9,h10>h6,d1>h1,c10>c13,s9>s5,h7>h2,d10>d11,d10>c10,d10>d1,d10>d2,d10>h10,s11>s2,s4>s9,s4>s11,d8>d10,c4>c6,s8>s1,c4>c8,c4>c11,s4>c4,s8>s4,d8>s8,h7>h5,h7>s7,h7>h12,d7>h7,d7>d3,d8>d7,d13>d8,

h7,d3,d5,h13,c1,s5,d13,s11,d12,c9,s13,h1,d2,h11,d7,h9,h12,h4,s3,d6,c12,h2,d4,c4,d11,s10,h10,c13,h6,s2,d10,c8,s9,s6,c7,h5,c6,c10,d9,c3,c5,s8,s7,s4,c2,s1,s12,h8,d1,c11,d8,h3  
**6/1000: solving: solved in 12436 tries.**  
d5>d3,s5>d5,s13>s11,s13>d13,s13>s5,h13>s13,h13>h7,h1>c1,h1>h13,h12>h9,h4>h12,d6>d7,h2>h4,h2>d2,h2>h1,h11>h2,c12>c9,c12>d12,c4>d4,c4>c12,h10>s10,s9>s2,s6>s9,s6>h6,d10>h10,d10>d11,s6>s3,s6>d6,c13>c4,c8>c13,c7>c8,c6>s6,c6>c7,h5>h11,c10>d10,s4>s7,s12>s4,c2>c5,c2>c10,h8>s8,s1>s12,d1>s1,d1>d9,c3>c6,d8>d1,h8>d8,h8>h5,c11>c2,h3>h8,c3>h3,c11>c3,

d13,h11,d5,d11,c8,d1,s3,s8,s11,c5,h5,h4,h1,d9,d10,h12,h2,s4,s9,d2,d4,s6,s7,c3,d8,c1,h7,h10,h6,h8,c11,s5,s10,d6,c10,s1,h13,c4,c13,c9,d12,s2,c7,s12,h3,c2,d7,h9,c12,d3,c6,s13  
**7/1000: solving: solved in 25770 tries.**  
d11>d5,d11>h11,d11>d13,s8>s3,s11>s8,s11>d11,h5>c5,h4>h5,h1>h4,h1>d1,d10>d9,h2>h12,s9>s4,d2>d10,h2>d2,h2>h1,s9>s11,s7>s6,d8>d4,c1>c3,h10>h7,h6>h10,h8>h6,h8>d8,h8>h2,h8>c8,c11>c1,s10>s5,c10>c11,s10>c10,s10>s7,c13>c4,c2>c7,c2>s2,c2>c13,d7>d12,c12>s12,c12>c2,d3>d7,h3>d3,h9>h3,c6>c12,c6>d6,c9>c6,c9>s9,s1>s10,s13>s1,h13>s13,h13>h8,h9>h13,h9>c9,

h4,h9,h7,c4,h13,h1,s9,d3,s12,s4,h6,c7,h10,c11,c1,c6,d8,s8,s2,d12,s7,s6,h5,s3,c9,d4,c10,s10,d5,d1,s5,h3,s13,c3,c8,d7,h12,d2,c2,c5,s1,h2,h8,c12,c13,s11,d6,d10,h11,d13,d11,d9  
**8/1000: solving: solved in 35725 tries.**  
h9>h4,h7>h9,h1>h13,s4>s12,c1>c11,c6>c1,c6>h6,c7>c6,s8>d8,s8>s4,s2>s8,s7>c7,s7>s2,d12>d3,s10>c10,s10>s3,s10>h10,s10>s7,s6>s10,d5>d4,d1>d5,s5>h5,s5>s6,c9>s9,s13>s5,c3>h3,c8>c3,c2>d2,c2>c8,h2>h12,h8>h2,c5>c2,c13>c12,h11>s11,h11>h8,d9>d10,d11>d6,d11>h11,d9>d11,d9>d1,d9>c9,d12>d9,d7>d12,d7>h7,s1>h1,s13>s1,c13>c5,c13>s13,c13>c4,d13>c13,d13>d7,

c10,c2,s8,h5,d11,h7,h11,h6,d4,d9,s11,d12,d1,d8,c8,h10,h13,h8,h3,s3,s13,h2,c13,c1,s6,s9,h9,h12,s12,s2,c3,s4,c4,c11,s7,d13,d2,s10,h4,c9,s1,d3,d10,c5,c6,c7,s5,c12,h1,d6,d5,d7  
**9/1000: solving: solved in 614 tries.**  
c2>c10,h11>h7,h11>d11,h11>h5,h6>h11,d9>d4,s11>s8,d12>d9,d1>d12,d8>d1,c8>d8,c8>c2,h10>h6,h13>h10,h8>h13,h3>h8,s3>h3,s3>s11,s13>s3,c13>c8,s13>c13,s6>s13,s9>s6,h9>s9,h2>h9,s12>h12,s2>s12,c4>s4,c4>c3,c11>c4,d2>d13,d2>s2,s10>s7,c9>c11,d10>d3,d10>s10,c12>c6,c7>c12,s5>s1,c5>s5,h1>h4,c5>c9,d6>d10,d5>d6,d5>c5,d5>d2,d7>d5,h1>h2,c1>h1,c7>d7,c7>c1,

h13,s11,d6,h2,c5,s7,d10,d13,h8,s3,s13,c9,s6,d4,c1,d8,s12,s5,c6,d11,h11,s10,c2,h9,s9,s4,s1,h6,s2,c10,h4,d3,d2,d7,c12,h5,d9,h3,d1,c4,h10,c7,c11,d5,h7,h1,d12,c8,h12,c3,c13,s8  
**10/1000: solving: solved in 39218 tries.**  
h2>h13,s7>s11,d13>d10,s13>s3,c1>c9,d8>d4,s5>s12,c6>s6,c6>c1,d8>h8,d8>d13,c6>c5,c6>d6,s13>s7,s5>s13,d11>d8,h11>d11,h11>h2,s9>h9,s4>s9,s1>s4,s2>c2,s2>s10,s1>s2,c10>c6,h4>h6,d2>d3,d7>d2,h5>h4,h5>s5,h5>h11,c12>c10,d9>d7,d1>s1,d9>d1,c11>c4,c11>c12,h3>h5,h12>h1,d12>d5,h7>h10,d12>d9,h12>d12,h7>h12,c7>h7,c7>c11,c3>h3,c13>c3,c7>c13,c8>c7,s8>c8,

c11,h13,c3,d2,s5,c2,s13,d7,h9,h6,s7,s9,h7,c4,s1,c8,h1,d5,c7,h2,c13,d10,c12,s4,s2,h3,s3,s12,d11,h8,c1,s11,d1,c10,d6,s10,h10,d13,c9,h5,d4,s8,c5,d8,h4,d9,h12,c6,d3,h11,s6,d12  
**11/1000: solving: solved in 1526 tries.**  
c2>c3,d2>c2,s13>s5,h6>h9,s7>s13,d7>s7,d7>d2,h7>d7,h7>h13,h6>h7,c4>c11,s1>s9,c8>c4,h1>s1,h1>h6,c7>c8,d10>d5,c12>c13,s2>s4,h3>h2,s3>s2,s12>s3,s12>c12,d11>d10,s11>s12,d1>c1,h10>s10,h5>h10,c5>c9,d8>s8,d8>d13,h4>d4,h4>h5,c6>c5,c6>d6,c6>c10,d8>d1,d8>h8,d9>d8,h12>h4,d12>d3,d12>d9,d12>d11,h12>h3,h12>d12,h12>h1,h11>h12,c6>c7,s11>h11,s6>s11,s6>c6,

h2,s8,h4,h1,s1,d6,c8,c11,s7,h10,d12,h8,h6,h3,c6,d1,d7,c3,d9,s10,d5,d8,c7,d11,s12,h12,c10,s9,c13,d13,c4,h5,c1,s13,s11,s6,h9,s5,h7,c12,s3,d3,s4,c5,c2,h13,d10,d4,d2,h11,s2,c9  
**12/1000: solving: solved in 1578 tries.**  
h1>h4,s1>h1,s1>s8,c11>c8,s7>s1,d12>d6,h8>h10,h6>h8,h3>h6,d7>d1,c3>h3,c3>c11,c6>c3,d7>s7,d12>d7,d8>d5,h12>s12,c10>c7,d13>c13,d13>d11,h5>h12,c1>c4,s11>s13,s6>s11,h9>s9,h9>h5,c1>c10,s5>s6,s3>s5,d3>s3,c2>c5,d4>d10,d4>s4,d4>d3,h13>h7,h13>d13,c2>c12,d2>c2,d2>d4,h11>h13,h9>h11,c9>h9,d2>d8,c9>c1,s2>s10,d2>s2,c9>c6,d9>c9,d9>d12,d2>d9,d2>h2,

s6,h9,s10,h5,d6,d5,d1,c1,s4,h12,h11,s2,s7,s9,d8,c7,h7,c10,c2,s13,c11,c5,h3,d2,c6,s12,d10,h4,h1,c9,s8,s1,c4,h6,c3,h13,d4,d13,s11,d11,s3,d3,c13,d7,c12,s5,d12,h10,h8,d9,h2,c8  
**13/1000: solving: solved in 390141 tries.**  
d5>d6,d5>h5,d1>d5,c1>d1,h11>h12,s7>s2,s9>s7,h7>c7,h7>h11,c2>c10,s13>s9,c11>c2,c5>c11,d2>d8,h1>h4,s1>s8,d13>d4,d11>s11,d11>d13,s3>c3,s3>s1,h13>h6,d3>d11,d3>s3,d3>d10,h13>h1,c4>c9,c12>c4,c12>s12,c12>c6,h13>h3,c13>h13,c13>s13,c12>c13,c12>c1,d9>d12,d9>d3,d7>d9,d7>h7,d2>d7,s5>s4,c5>c12,h2>d2,h10>h2,h10>s10,h10>h9,h8>h10,c8>h8,c5>c8,s5>c5,s5>s6,

s8,h1,s5,d9,d8,h12,h4,c1,s12,c5,c3,s9,s3,s1,h9,s10,c7,h2,s2,d12,c8,s6,h13,d2,c2,d1,c11,d6,c4,d11,s4,c9,c10,h10,d13,h6,h11,d3,s13,s7,h8,c12,d7,c13,s11,h7,d5,d4,h3,d10,c6,h5  
**14/1000: solving: solved in 55620 tries.**  
d8>d9,d8>s8,h4>h12,c1>h1,c5>s5,c5>c1,c3>c5,s9>s12,s3>s9,s1>s3,h2>h9,s2>h2,s2>s1,s10>s2,c7>c3,s6>s10,d2>d12,c2>d2,c2>c7,c8>c2,c8>d8,d11>c11,d11>d1,d6>d11,s4>c4,s4>s6,s4>h4,c10>c9,h10>c10,d13>h13,d6>d13,d7>s7,c13>c12,h5>h3,h5>h7,h5>h8,d5>h5,d4>d5,d10>d4,d10>d3,d10>h10,h11>h6,d7>d10,s11>h11,s11>s4,s13>s11,c13>s13,c13>c8,c6>c13,d6>c6,d7>d6,

h10,c10,h11,h7,s2,d7,h8,d10,c6,s9,c5,h6,h13,s1,s11,c7,h1,h12,s6,h9,s7,d5,c11,c4,d3,d13,d4,h3,c2,d1,c1,c3,c8,s4,c13,s12,d11,d8,h4,s8,d6,d12,s13,c9,s3,c12,s5,s10,h5,h2,d9,d2  
**15/1000: solving: solved in 1030 tries.**  
c10>h10,h7>h11,h8>h7,d10>d7,d10>c10,h6>c6,h13>h6,s11>s1,h12>h1,s6>s11,h9>h12,s7>s6,c7>s7,c7>c5,h9>h13,s9>h9,s9>s2,c4>c11,d13>d3,d4>d13,d4>c4,d4>d5,c2>c7,c1>d1,c1>c2,c3>h3,c8>c3,d8>d11,s8>s12,s8>c8,s8>s9,s8>h8,d4>d10,s4>d4,s8>s4,d8>s8,c13>c1,d6>d8,s13>c13,s10>s3,c12>d12,c9>c12,s10>s13,s5>s10,h5>s5,h2>h5,d9>c9,d9>d6,d2>d9,h2>d2,h4>h2,

h3,d10,c7,s4,h1,c10,c11,d7,c13,d5,c4,h2,h11,d2,s12,s7,s2,d13,s11,c6,h13,c12,c2,c5,h10,h8,s9,h5,d1,c3,h12,s6,h7,h6,s8,d12,h9,c1,d3,h4,s13,d6,s5,d8,d4,d9,c9,c8,d11,s3,s1,s10  
**16/1000: solving: solved in 23328 tries.**  
c10>c7,c10>d10,h1>h3,h11>h2,d2>d5,s7>s12,s2>s7,s2>d2,h13>d13,h13>h11,h13>c13,c12>c6,c2>c12,c2>s2,c2>c11,c4>c2,c4>s4,c4>c10,h13>h1,c5>c4,h8>h10,h12>h5,h6>h7,h6>s6,h6>h12,d12>d1,c1>c3,d6>d3,s5>s13,d4>h4,d4>d6,d9>d4,c9>d9,c8>c9,c8>c1,s8>c8,h9>h6,d8>d12,d8>h8,s8>d8,s5>s8,s5>c5,s9>s5,d11>d7,s11>d11,h9>h13,s9>h9,s11>s9,s3>s11,s1>s3,s10>s1,

h12,c4,d12,c11,d13,c2,s8,c9,d7,c6,h10,d5,h13,c1,h8,s11,s6,h1,d1,d4,c10,s10,d9,c13,c12,d11,s9,d2,d3,h7,d10,h2,c7,c8,h9,s2,s3,s5,s7,h6,s4,s12,h11,s1,d8,h3,h4,c3,h5,d6,c5,s13  
**17/1000: solving: solved in 127704 tries.**  
d5>d7,h13>h10,s6>s11,h1>c1,h1>h13,h8>h1,d4>d1,s10>c10,c12>c13,s9>d9,s9>s10,d11>d4,d2>d11,d3>d2,c7>h7,c7>c12,d10>d3,s2>h2,s3>s2,s5>s3,s7>s5,s7>c7,s7>s9,h6>h9,s1>s4,s1>s7,h4>h11,c3>h3,d6>d8,h5>h4,d6>h6,d6>d10,d6>s6,c8>h8,c8>c9,c8>s8,c6>c2,d5>d13,c5>c3,c5>h5,s13>s1,s12>s13,c5>c8,c5>c11,d5>c5,c6>c4,d6>c6,d12>d6,s12>h12,d12>s12,d5>d12,

c6,h8,d8,s3,h7,c10,h12,d2,d10,d4,d6,c5,h5,c9,c13,c1,h10,s6,c2,s13,s11,h11,h13,s5,d12,c11,d13,h3,s7,d3,h9,d5,c12,h6,d9,c8,d11,h1,c3,s12,c7,s8,h2,s10,s4,s1,s2,c4,h4,d7,s9,d1  
**18/1000: solving: solved in 53384 tries.**  
d8>h8,d10>d2,d4>d10,d6>d4,c5>c10,h5>c5,h5>h7,h12>h5,d6>d8,d6>c6,c13>c9,c1>c13,c2>c1,s13>s6,s11>s13,h11>s11,h11>h10,h13>h11,d3>d13,h3>d3,h6>h9,c3>c8,s4>s10,s1>s8,s1>h1,h4>c4,h4>h2,s4>h4,d7>c7,s2>s4,d1>d7,d1>d11,s1>d1,s12>s1,s12>c12,s12>s7,s12>d12,s12>s5,s12>h12,h6>h13,d9>d5,s9>d9,c3>c11,h3>c3,s2>s9,s2>c2,s2>s12,h6>d6,h3>h6,s3>h3,s2>s3,

d8,h12,s10,d1,s12,s1,s6,d7,h11,d11,h2,c9,s5,h5,h13,c1,d5,c5,c3,h1,d2,c8,c7,h7,c4,s9,c10,s2,s3,d9,h9,c6,s13,c2,s8,h6,c11,h4,c13,d10,d4,c12,d13,s7,h3,d6,s11,h8,d12,h10,d3,s4  
**19/1000: solving: solved in 6167 tries.**  
d1>d8,s12>s10,s12>h12,s1>s12,s1>d1,s6>s1,d11>h11,d11>d7,h5>s5,h13>h5,c5>d5,c5>c1,c3>c5,c8>c3,c7>c8,h7>c7,h7>h13,h1>h7,d2>h2,d2>d11,s9>c9,c10>c4,s2>s9,s2>d2,s2>s6,s3>s2,h9>d9,c11>c2,h4>h6,c13>c11,c13>s13,c13>c6,h4>h9,d4>d10,c12>c13,s11>s7,d6>d13,h8>h3,d12>d6,d12>c12,h8>s8,h10>h8,h10>c10,h10>h1,h4>h10,d4>d12,d4>h4,d3>s3,d4>d3,s4>s11,s4>d4,

h13,s6,d7,d4,h3,c12,d10,h6,c10,s11,s2,c2,h9,s1,h7,c4,h4,s12,d11,h2,h10,c1,d13,d9,s4,c8,s9,s3,d8,d2,s7,d3,h5,c11,c9,c13,h11,s5,c5,s8,d1,d5,d6,c3,h8,d12,h12,s10,c6,h1,s13,c7  
**20/1000: solving: solved in 80684 tries.**  
d4>d7,h3>h13,c10>c12,d10>c10,d10>d4,h6>h3,s6>h6,s2>s11,c2>s2,h4>c4,h4>h7,h2>h4,h2>c2,h9>h2,s1>s6,s12>s1,h10>d10,h9>h10,d9>d13,d9>h9,d11>d9,s4>s12,c8>c1,s9>s4,s3>s9,d8>c8,d8>d11,d2>d8,d3>s3,d2>d3,c9>c11,c13>c9,d5>c5,d6>d5,h8>s8,h12>d12,h1>h12,h1>h8,h1>h11,d1>h1,s5>h5,s5>s7,d1>d2,d6>d1,s10>s5,c6>c3,s13>s10,c13>s13,c6>c13,c6>d6,c7>c6,

s6,c11,c2,d5,h6,d3,c4,d4,s8,h2,s7,s4,d11,s13,s12,d9,s5,h5,h3,c7,s2,d12,h7,s10,c5,c10,d13,c6,d1,s3,s1,d2,c3,s11,d7,s9,c8,h9,h13,h11,d6,h4,c13,c1,h10,h8,h12,d10,c12,h1,d8,c9  
**21/1000: solving: solved in 19791 tries.**  
c2>c11,h6>s6,d3>d5,d4>c4,d4>d3,h2>c2,h2>h6,s7>s8,s4>s7,s4>d4,s12>s13,h5>s5,h3>h5,h7>c7,h7>h3,s2>s12,s2>h2,s4>s2,d9>d11,c10>c5,c10>s10,s1>s3,s1>d1,d2>d13,h13>h9,h4>h13,h11>h4,d10>h10,d10>d6,c12>h12,c9>c12,c9>c13,c9>c8,c9>s9,c1>c9,c1>c3,c1>s1,c1>c6,d7>d2,d7>h7,d7>d9,d12>d7,c1>c10,s11>s4,d10>d12,h1>c1,h11>s11,d8>d10,h8>h1,h8>d8,h8>h11,

h9,s9,s10,d11,c5,d3,c7,d13,c6,d10,d12,s4,d4,d1,h1,d2,s5,s1,c3,s8,s11,s3,c8,s7,c13,h3,c4,h10,s13,h12,h13,c11,h11,h7,d7,c9,h5,h8,c12,c10,h6,d9,s2,d6,s12,s6,c1,h4,d5,h2,d8,c2  
**22/1000: solving: solved in 2158 tries.**  
s9>h9,s10>s9,d12>d10,d4>s4,d4>d12,d1>d4,h1>d1,d2>d13,s1>s5,s1>h1,s11>s8,s3>s11,s3>c3,s3>s1,h13>h12,h13>s13,h13>h10,h13>c13,h3>h13,h3>s3,c11>c4,h11>c11,h11>h3,h7>s7,d7>h7,h8>h5,h8>c8,h8>h11,d7>d2,d7>c7,d7>d3,c12>c9,c10>c6,d6>h6,s12>s2,s12>c12,s6>s12,d6>s6,d6>d7,d5>d9,d5>d6,d5>c5,c10>s10,d5>d11,c1>c10,h2>h4,d8>d5,h8>d8,h2>h8,c2>h2,c2>c1,

s2,d7,s13,d10,d6,d5,h3,d4,c1,c3,h10,c9,d8,c8,c12,d3,c2,h5,h12,h1,c10,s5,d11,d13,d9,s10,s4,h2,d2,d12,c6,h9,s9,s3,c13,c7,s11,s1,h7,s6,h4,h8,d1,s12,s8,c11,c4,h13,h11,c5,h6,s7  
**23/1000: solving: solved in 11640 tries.**  
d6>d10,d5>d6,c3>c1,h10>h3,c9>c3,c8>d8,c8>c9,c12>c8,h12>h5,h12>c12,h1>h12,c10>c2,d11>d3,d13>d11,d9>d13,s10>s5,s10>c10,s4>s10,s4>d4,s4>s13,h1>h10,d2>h2,d2>d9,d12>d2,h9>h1,s9>h9,s3>s9,c13>c6,c7>c13,s11>s3,s1>s11,h7>c7,h8>h4,s12>s6,s8>s12,h8>s8,h8>h7,d1>s1,d12>d1,h6>h13,h6>h8,h11>h6,c11>h11,c4>c11,c4>s4,c5>c4,d5>c5,d12>d5,s7>s2,d7>s7,d12>d7,

c4,h13,c7,d1,c8,h4,c3,s4,c10,s9,d5,h8,c9,c1,h6,c2,c5,c12,s6,d10,d4,h7,h5,s12,s8,h12,s11,d6,s13,s2,s3,h11,d7,d9,h9,h3,c13,d13,s5,d12,d2,h1,h10,c11,s10,d11,s1,d8,d3,c6,s7,h2  
**24/1000: solving: solved in 288501 tries.**  
c9>s9,c9>c10,c1>c9,h6>h8,c2>c1,c5>c2,d5>c5,d4>d10,h5>h7,s12>s6,s12>c12,s12>s4,h5>d5,h5>h4,h6>h5,h12>s12,s11>s8,s2>s13,s3>s2,h11>s11,d9>d7,h9>d9,h9>h11,h3>h9,h3>c3,h12>h3,d13>c13,d13>d4,d6>d13,d12>d6,d2>d12,h10>h1,s10>s5,d11>c11,d3>d11,d3>s3,h10>s10,s7>s1,d8>d3,h2>h10,h2>h12,d2>h2,d2>d1,d8>d2,c8>d8,h6>h13,c8>c4,c6>h6,c6>c8,c7>c6,s7>c7,

d2,h3,d13,d10,d4,c11,s7,d8,d12,s11,s6,h8,s10,h5,d9,s9,c6,s3,h7,s5,c4,h12,d7,h4,d3,c5,h9,c10,s8,h11,d11,c8,d6,s2,d1,h6,d5,s4,c2,c1,h10,c3,c13,h2,c7,h1,s12,s13,h13,s1,c9,c12  
**25/1000: solving: solved in 5265 tries.**  
d10>d13,d4>d10,d8>d4,d12>d8,s11>s7,s11>c11,s6>s11,h8>h3,s10>s6,h5>h8,s9>d9,s9>s10,h12>h7,h9>h4,c10>c5,d11>h11,d11>d3,c8>s8,c8>c10,h6>d6,h6>h9,d1>d11,d5>d1,s4>s2,c1>c2,h2>h10,c13>c3,c7>c13,h1>c1,h2>h1,c7>c8,c7>d7,c7>c4,s13>s4,h2>h6,d5>s5,h13>h2,h13>h12,s13>h13,s13>s3,c9>c7,c12>c9,s12>s13,c12>c6,s12>c12,s12>s9,d5>h5,d5>d2,d12>d5,s12>d12,s1>s12,

h6,h1,h10,c6,d1,c1,d11,h11,h4,s10,s6,c12,s7,s11,s12,c9,s3,s13,h5,h9,d5,c11,h12,h3,s9,c4,d4,c10,s8,c7,h8,d8,c3,c2,s5,c5,h7,d12,d2,d10,c13,d3,c8,d6,s4,d9,h13,d7,s1,d13,s2,h2  
**26/1000: solving: solved in 34129 tries.**  
h1>h6,h10>h1,c1>d1,c1>c6,h11>d11,h4>h11,s10>h10,s6>s10,s11>s7,s12>s11,s12>c12,s12>s6,s13>s3,h5>h4,h9>h5,c9>h9,c9>c1,c11>c9,h3>h12,s9>s13,d4>c4,d8>h8,c2>c3,c5>s5,c5>c2,h7>c7,d2>d12,d10>d2,d13>h13,d13>d6,d13>c13,d13>d10,c8>c5,c8>s8,c8>c10,h7>h3,d9>d13,d9>d4,d9>s9,d5>d9,c8>c11,d8>c8,d3>d8,d5>d3,d7>d5,h7>d7,s1>s4,h2>h7,s2>s1,s2>h2,s2>s12,

h11,d6,c9,d12,s3,d1,c13,d11,d3,c6,d9,h2,h3,h4,d5,c8,h6,d4,d13,h5,s7,h8,h9,s1,c7,h10,s5,s11,s6,s9,c12,c4,d2,h1,s12,c10,s2,s8,c3,d10,s10,s13,c2,h13,d7,c11,c1,c5,h12,d8,s4,h7  
**27/1000: solving: solved in 25142 tries.**  
d3>d11,d3>s3,d3>d12,d1>d3,c6>c13,c6>d6,c9>c6,d9>d1,d9>c9,h3>h2,h4>h3,h6>h4,d13>d4,h5>d5,h5>h6,d13>d9,h8>h5,c8>h8,c7>s7,c7>c8,h9>h11,s11>s5,s6>s11,s9>s6,c4>c12,s8>s2,d10>c10,d10>d2,d10>h10,d10>d13,s9>s1,s9>h9,c4>c7,c2>c3,s10>s12,s10>d10,h13>s13,c11>c2,c1>c11,h7>h12,h7>h13,h7>h1,d7>h7,c5>c1,d8>d7,s8>d8,s8>s9,s10>s8,s4>s10,c4>s4,c5>c4,

c11,c12,s8,d12,h12,d6,h4,s9,d9,d5,c6,d4,s11,h5,h7,h10,s7,d10,h3,c1,h11,s3,s2,c3,s1,h8,s6,c9,s10,c5,c4,s13,h13,d1,d3,h1,c13,c8,c2,d8,d2,s12,h9,d13,s4,d11,d7,c7,h2,c10,s5,h6  
**28/1000: solving: solved in 148120 tries.**  
c12>c11,h12>d12,d9>s9,d5>d9,c6>d6,c6>c12,h4>h12,d4>d5,d4>h4,h7>h5,h10>h7,h3>h10,s2>s3,c3>c1,c3>h3,s2>s7,s1>s2,h8>h11,s6>s1,s10>d10,s10>s6,c9>c3,c5>c9,c4>c5,h13>s13,h13>h8,h1>h13,d1>h1,d3>d1,c13>c4,c8>c13,c8>s8,d2>d3,d2>d4,c2>d2,s4>s12,d13>d8,d11>d13,d7>d11,c7>d7,h2>h9,s5>s4,s5>s11,s10>s5,c10>s10,c10>c6,c7>c10,c8>c7,c2>c8,h2>c2,h6>h2,

d6,s7,d8,h9,s6,s12,h8,d1,s4,s10,h13,d10,d2,h1,c8,c11,h12,s2,h5,s8,d3,s9,c12,c9,h2,s3,d9,d7,d5,c5,c2,d4,s5,h11,h7,s1,h10,c3,c10,s13,d11,h3,c4,h4,c7,d12,c13,s11,c6,d13,h6,c1  
**29/1000: solving: solved in 8898 tries.**  
s6>s7,s6>d6,s12>s6,h8>h9,h8>d8,s4>s12,s10>s4,d2>d10,h1>d1,h1>h8,h13>h1,c11>c8,h12>h13,c9>c12,c9>s9,s3>d3,s3>s8,h2>h5,h2>s2,h2>h12,d2>h2,s3>s10,c9>c11,d9>c9,d9>d2,d7>d9,d5>d7,c5>d5,c2>c5,s5>s3,h7>h11,c10>c3,s13>s1,h3>h10,h4>c4,c7>c10,h4>h3,h4>d4,h7>h4,c13>c7,c13>c2,s11>s13,s11>s5,d11>s11,d12>d11,h6>h7,c6>h6,d13>d12,c13>d13,c6>c13,c1>c6,

d13,s13,h6,c5,h11,d3,c3,s6,c12,d6,s10,h4,h2,s2,c9,d11,c1,c6,h9,d1,s3,c8,h1,h3,h8,s11,d9,h5,d10,c10,h10,h7,d7,h12,s4,s8,s1,c7,d12,s12,c4,s5,h13,s7,c2,d2,d4,s9,c11,c13,d8,d5  
**30/1000: solving: solved in 4890 tries.**  
s13>d13,c3>d3,s10>s6,h2>h4,s2>h2,s2>s10,c6>c1,c6>d6,c6>c12,c9>c6,h1>d1,h1>h9,h3>h1,s3>h3,s3>s2,s3>c3,c9>c5,h8>c8,h8>h11,s11>d11,s11>s3,d9>c9,c10>d10,h10>c10,h10>h5,h7>h10,d7>h7,d7>d9,s8>s4,s8>h8,s8>s13,s11>s8,c7>d7,s12>d12,s12>s1,c4>c7,s12>h12,d2>c2,s9>s7,s9>s12,s9>s11,h13>h6,s5>s9,d4>d2,c13>c11,c13>h13,c4>c13,d4>c4,d8>d4,d5>d8,d5>s5,

d13,d3,h8,s6,s1,d12,h4,h6,s13,h11,s4,d4,h5,c2,c4,c7,h7,c3,s2,h10,c1,d11,h9,c5,d1,c6,c12,s3,c10,s5,d8,h12,s12,d5,d2,s9,s7,c13,s8,d9,h13,s11,c9,d6,h2,c8,h1,d10,h3,d7,c11,s10  
**31/1000: solving: solved in 61564 tries.**  
d3>d13,s1>s6,d12>d3,h6>h4,d4>s4,c4>c2,c7>c4,h7>c7,h7>h5,h10>h7,c5>c1,c12>c6,s12>h12,d5>s5,d8>d5,s12>s3,s12>c12,d8>d1,d2>d8,s7>s12,d9>s9,d9>d2,d9>h9,d9>d11,s7>s2,c13>c5,c8>c9,c8>s8,c8>c10,h13>c13,h13>h10,h13>s13,d6>d9,s11>s7,s11>h11,h3>h2,h3>c3,h1>h3,h1>h13,h1>h8,d6>h6,d6>d12,s1>h1,d7>d4,d7>d6,s11>s1,d10>d7,c11>c8,s10>d10,s11>s10,c11>s11,

c12,h13,c8,s4,s1,s9,h1,c13,c2,d13,d9,s11,d10,s5,c6,h9,s10,d7,s3,s7,s6,d6,h10,s13,d1,c7,d11,d3,h8,d8,s8,d5,d2,c10,c11,s2,h3,d4,h5,h2,h12,h4,c9,h7,c4,c3,h6,c1,s12,c5,h11,d12  
**32/1000: solving: solved in 62757 tries.**  
s1>s4,s9>s1,h1>h13,c2>c13,d9>d13,s11>s9,d10>d9,s5>s11,s10>d10,s7>s3,s7>d7,s7>s10,s6>s7,c6>s6,c6>c2,d1>d6,d3>d11,d8>h8,d8>d3,s8>d8,d2>d5,c10>c7,c11>c10,s2>d2,s2>s8,h2>h5,h2>s2,h2>h10,h3>h2,h7>h12,h4>h7,h4>d4,c4>c9,h6>h4,h6>h3,h6>c6,h9>h6,c3>c4,c5>c3,c1>c5,s12>s13,s12>s5,s12>c12,d1>h1,h11>h9,c11>h11,c11>c8,c1>c11,d12>s12,d1>d12,c1>d1,

c5,s4,h3,s2,h7,c2,d5,c9,d8,h4,c3,d3,d11,d1,c10,c4,c8,h10,c6,d7,s12,d12,s3,h13,c7,s1,h5,d10,s9,s6,s10,c1,h2,s7,d2,h12,d13,s5,h8,h11,s8,c13,c12,h9,d6,c11,h1,s11,s13,d9,h6,d4  
**33/1000: solving: solved in 104255 tries.**  
c3>c9,d3>c3,d3>d5,d8>d3,h4>h7,h4>s4,h3>h4,c2>s2,d11>d8,d1>d11,c4>c10,c8>c4,d12>s12,d12>d7,s1>s3,s6>s9,s10>s6,s10>d10,c1>c7,h12>h2,d13>d2,h11>h8,c12>c13,c11>c12,h9>h11,s11>c11,s11>s8,s13>s11,s13>d13,s13>s10,s13>h13,s13>s1,c1>c6,c1>d1,c1>c2,h10>h3,s7>s13,s5>s7,h5>s5,d9>h9,h1>h12,d4>d9,d4>d12,d6>d4,h6>d6,h6>h10,h5>h6,h5>c5,h1>h5,c1>h1,c8>c1,

d9,d4,h5,s2,c13,c7,c2,c10,c8,d12,s7,d1,h10,c5,d7,s5,d11,h7,s10,c1,c9,c3,h3,d3,c6,h9,s13,s8,s3,s1,c4,s4,h13,s9,d6,d5,s12,c11,d13,h2,h4,c12,s6,h12,h8,d8,h11,h1,h6,d2,s11,d10  
**34/1000: solving: solved in 82219 tries.**  
d4>d9,c7>c13,c2>c7,c2>s2,c10>c2,c8>c10,d12>d4,d7>d1,d7>s7,d7>d12,c5>h5,c8>c5,h7>h10,c9>c1,c3>c9,h3>c3,d3>h3,s8>s13,s3>s8,s3>d3,s3>s10,s1>s3,s4>c4,s4>s1,h13>h9,s9>s4,d5>d6,d13>d5,d13>h13,d13>d11,h12>h4,c12>c11,h12>h2,h12>c12,s6>c6,s6>s9,s12>s5,h12>s12,h8>h12,h6>h1,h6>s6,h6>h7,h8>h6,d2>d13,d8>c8,d10>d2,d10>d7,d8>d10,h8>d8,h11>h8,s11>h11,

d5,s4,c7,d8,s5,s1,d11,d4,c10,c13,s7,h3,s12,h4,d2,s8,h12,s10,h6,s9,s13,h9,d9,s2,c9,c6,d13,h5,h10,h2,d10,d6,c12,d7,c8,s6,c2,s11,d1,s3,c4,h8,h13,h11,c5,c11,c1,d12,d3,c3,h7,h1  
**35/1000: solving: solved in 4231 tries.**  
d8>d5,s1>s5,d4>d11,d4>s4,d4>d8,c13>c10,s7>c7,s1>s7,s12>s1,h4>h3,h4>d4,s8>s12,s13>s9,d9>h9,c6>c9,d13>d9,d13>s13,s2>s10,h5>h6,h10>h5,h2>h10,h2>s2,h2>h12,h2>d2,h2>h4,d13>c13,d6>d10,d6>c6,d6>d13,h13>h8,h11>h13,c11>c5,c11>h11,c11>c4,c11>s11,c11>c2,d12>d1,d3>d12,s3>s6,c3>c11,c3>s3,c3>c12,d3>c3,d3>d6,c8>s8,c1>c8,d7>d3,h7>d7,h1>h7,h1>c1,h1>h2,

d10,s9,c13,c4,c3,s2,h7,s7,d9,c1,c10,s12,h2,h5,c9,s6,d4,c5,d11,s8,c12,h6,c2,s3,d7,d13,c7,h11,s10,h8,d3,d2,s5,h4,h1,s11,s13,d5,h13,d12,c6,c11,d6,c8,d8,s1,h3,h12,h9,d1,s4,h10  
**36/1000: solving: solved in 27862 tries.**  
c4>c13,c3>c4,s7>h7,s7>s2,d9>s9,d9>d10,c10>c1,h5>h2,c9>c10,c9>d9,c3>c9,s12>s7,c5>h5,d11>d4,d13>d7,c7>c2,s10>s3,h8>h11,d2>d3,h4>h8,h1>h4,s11>s5,s13>s11,s13>d13,s13>s10,h1>h6,h13>s13,d5>d2,d12>d5,c6>c7,c11>c6,d6>d12,c8>c11,c8>s8,c8>c5,c12>c8,c12>s12,c12>c3,d6>d11,d6>s6,h3>h13,h12>h3,h10>h9,d1>d8,d1>d6,h12>c12,h1>d1,h10>h12,h1>h10,s1>h1,s4>s1,

c9,c8,c11,h10,h7,s7,c1,s9,s13,s12,s2,d12,s4,d5,s5,d7,h12,c10,c4,c2,h11,d9,h9,h3,h2,s1,d2,h6,s3,s11,c13,h8,s6,d4,s10,h5,c6,c3,h13,c7,d11,d8,d1,c5,h4,d3,d6,h1,d10,d13,c12,s8  
**37/1000: solving: solved in 252223 tries.**  
c8>c9,c11>c8,h7>h10,s7>h7,s13>s9,s12>s13,s2>s12,s5>d5,s5>s4,h12>d12,c4>c10,c2>c4,d9>d7,h9>h11,h3>h9,h2>h3,h2>c2,h2>h12,h2>s2,s5>s7,s1>c1,s1>s5,d2>d9,d2>h2,s3>s1,s11>s3,s11>c11,s6>h6,h13>h5,c7>c3,d8>d11,c5>c7,d1>d8,d6>d3,h1>d1,h1>h13,h4>h1,h4>h8,d4>h4,d4>d2,c5>c13,d10>s10,d13>d10,d13>d4,c12>c5,c6>c12,d6>d13,s6>d6,s8>s11,s6>s8,c6>s6,

h3,d13,s3,h9,h8,c6,h13,h11,s1,h5,d3,d9,h7,d11,c13,c9,s4,d8,h4,c5,s9,c4,h1,h10,c2,s13,d2,d6,s7,c1,d5,c7,s11,c10,s8,s6,s2,s10,d4,h6,d1,c3,h12,d12,c12,d7,h2,d10,s5,c11,c8,s12  
**38/1000: solving: solved in 31507 tries.**  
h9>h3,h8>h9,h13>d13,h13>h8,h11>h13,d9>d3,c9>c13,c9>d9,c9>c6,h7>h5,s4>s1,d8>d11,h4>s4,h4>h11,h7>h4,s9>c9,s9>s3,c4>c5,h10>h1,d6>d2,d5>d6,c7>c1,c7>s7,c7>c2,s6>s8,s2>s6,s10>s2,s10>c10,s10>s11,c12>c3,d10>d12,d10>d1,h12>h6,d10>s10,d10>d5,d10>h10,d7>d4,d7>d10,c7>d7,c7>c4,c12>c7,s12>s5,s12>s13,s12>s9,h12>s12,c8>c11,c8>d8,c12>c8,h2>h7,h12>h2,c12>h12,

c5,s10,h10,h12,h2,h5,s9,s6,c8,d6,s7,d7,h13,h1,s13,h3,c7,s11,h4,c12,d10,d12,c1,c6,s3,s1,c2,c10,s5,d1,h11,d2,s2,d8,c4,d11,c9,h8,d13,c11,c13,d3,s8,h9,c3,d5,d4,s4,s12,h6,d9,h7  
**39/1000: solving: solved in 922 tries.**  
h10>s10,h12>h10,h2>h12,h5>h2,h5>c5,s6>s9,s7>s6,d7>d6,h1>h13,s11>s13,d12>d10,d12>c12,c1>c7,c1>h1,h4>h3,s1>s3,c10>c2,d1>s1,s2>d2,d13>d11,c13>c11,c13>d13,c13>c4,c9>c13,d3>d8,s8>h8,s8>s2,c3>d3,c9>c3,h9>h11,d4>d5,s12>s4,d9>d4,d9>h9,d9>d1,s12>s5,c9>c10,c9>d9,s12>d12,s8>s12,c9>c6,h6>h4,h7>h6,h7>d7,h7>h5,s7>h7,s11>s7,s8>s11,c8>s8,c1>c8,c9>c1,

c9,c5,d13,d9,c10,c8,s2,c6,h4,s3,d4,s10,c3,d7,d1,h11,s4,c13,s5,d6,s12,h1,s6,s11,d2,h12,s9,d8,c4,h6,c1,h5,c7,d11,s8,h2,s13,s1,h13,s7,h7,d12,h3,h10,d10,h8,d5,c11,h9,c2,d3,c12  
**40/1000: solving: solved in 78729 tries.**  
c5>c9,d9>d13,c8>c10,s3>s2,d4>h4,s10>s3,d1>d7,s6>d6,s6>s5,s12>s6,h12>h1,h12>s12,h12>h11,s1>s13,h7>s7,h7>h2,h7>c7,s1>s8,h13>h7,d10>d12,h10>h3,h10>d10,h10>h13,h9>h8,h9>h10,h9>h6,h9>s9,c1>c4,d11>d8,d11>s11,d2>d11,c1>c13,c1>d1,h9>h12,s1>s4,h5>h9,d5>h5,d5>d4,c1>c6,d2>d5,c2>c11,c2>d2,c2>c8,s1>s10,c1>s1,c1>c2,d3>d9,c3>c1,c3>d3,c3>c5,c12>c3,

d13,h6,c4,d5,h3,d10,c1,s10,d3,d7,s4,h5,d11,s3,c12,s12,s8,h12,d1,d6,c5,c7,h9,h13,h7,h4,s2,h10,s11,h11,d8,h8,s9,c10,s7,h2,s13,c6,d4,c3,d9,c9,c8,c11,d12,c2,d2,s6,s5,c13,s1,h1  
**41/1000: solving: solved in 6796 tries.**  
d5>d13,c1>c4,s10>d10,d7>d3,d11>d7,s12>c12,s12>s3,s8>s12,d6>d1,c7>c5,h9>h12,h13>h9,h7>c7,h4>h7,h11>s11,h11>h10,h8>d8,h8>h11,c9>d9,c9>c3,c8>c9,d12>d4,c11>c8,c2>c6,s5>s6,c13>c11,c13>s13,c13>c10,c2>c13,c2>s2,s7>s9,h2>c2,h2>h13,h8>h4,h8>s8,h2>h8,d2>d12,d2>h2,d2>d11,d6>d2,s5>s4,h5>s5,s7>s10,s1>s7,h1>s1,h1>h3,h1>c1,d6>d5,h6>d6,h1>h6,h5>h1,

c4,h10,d13,c7,s1,c1,d12,c2,h9,c8,h7,c12,h4,c6,d3,s12,h3,d11,d2,d5,s10,d4,s13,s4,s9,h2,s11,s8,s5,c10,h1,c3,h13,h11,s6,d8,d10,h12,c11,h5,h6,d6,s2,d9,s3,h8,s7,c5,c9,c13,d1,d7  
**42/1000: solving: solved in 1389 tries.**  
c7>c4,c1>s1,c1>c7,d12>d13,c2>c1,d11>d3,d2>d11,d5>d2,s4>s13,s4>d4,s4>s10,s9>s4,s8>s11,s5>s8,h1>h2,c3>c10,h13>h1,h11>h13,d10>d8,h6>h12,d6>h6,d6>d10,c11>c3,d6>s6,d9>d6,h5>s5,h5>h11,d9>s9,d9>d5,h5>h3,s2>s12,s3>s2,c5>c11,c5>h5,s7>s3,c5>c6,c9>d9,c9>c5,h8>h4,h8>c8,h8>h10,c9>h9,h7>h8,c13>c9,c13>c2,s7>h7,c12>c13,d7>s7,d12>d7,d12>c12,d1>d12,

d13,d4,d3,s3,d11,h13,c5,d5,d1,h2,c12,h7,d2,c13,h11,h10,d9,c2,s9,h6,s6,s2,c11,s1,s11,c6,d6,c4,s5,c10,h4,c3,s13,d8,s7,c8,c7,h12,c1,d7,s4,h9,c9,d12,s8,s12,h1,s10,d10,h3,h5,h8  
**43/1000: solving: solved in 1938 tries.**  
d4>d13,d3>d4,s3>d3,d5>c5,d1>d5,d2>h2,d2>d1,h7>h13,c13>c12,h11>h7,h11>d11,h10>h11,c2>d2,c13>c2,s9>d9,s9>s3,s6>h6,s6>s9,s2>s6,c11>c13,s1>s2,s11>c11,d6>c6,s5>s11,c10>c4,c10>h10,c7>c8,c7>s7,c7>c3,d7>d8,h9>h12,c9>h9,c9>c7,c1>c9,s12>s4,d12>s12,s8>s13,d12>d7,d10>d12,h1>c1,h1>h4,d10>d6,s10>d10,s10>s5,h1>s1,s10>c10,s8>s10,h5>h3,h8>h5,h8>s8,h8>h1,

d11,d12,h4,s13,s1,s2,c6,h10,c8,s3,s6,h11,d9,d1,c4,d6,s10,d8,c9,c2,d4,h12,h2,h6,c3,h5,d10,d5,c11,s4,h8,s7,s5,d13,s9,s11,d3,c10,d2,c5,s12,h13,h1,c13,c12,h3,c7,c1,s8,h7,h9,d7  
**44/1000: solving: solved in 24167 tries.**  
d12>d11,s1>s13,s2>s1,h10>h4,c8>c6,s6>s3,d1>d9,c2>c9,h2>h12,h6>h2,c3>c2,h5>h6,d5>d10,d5>h5,d5>d4,s5>s7,s11>s9,h1>h13,c12>s12,c12>c5,c1>c7,c1>h1,c1>c10,c13>c1,c13>d13,d2>d3,c12>c13,s8>s11,s8>h8,s8>s4,s5>d5,s5>s10,c11>c3,s8>s5,d8>s8,d8>d1,d8>c8,c12>c4,d6>s6,d6>d8,h11>h10,d2>d6,d2>s2,c12>d12,c11>c12,h11>c11,h7>h3,d7>d2,h7>d7,h7>h11,h9>h7,

c9,h7,s2,c13,d12,d3,s4,c2,c10,d9,h12,d11,s6,c5,d1,d6,h6,c11,d13,h8,h10,c12,d8,h2,d5,h9,s9,s13,s8,c4,c3,h3,s3,s12,s5,h4,c8,s10,c6,c1,c7,d2,s1,h5,d4,d10,s7,h13,h1,h11,s11,d7  
**45/1000: solving: solved in 2431 tries.**  
c13>c9,d3>d12,c2>s2,c10>c2,d1>d11,d6>d1,s6>d6,s6>s4,h8>h6,h10>h8,s9>h9,s13>s9,s8>s13,s8>d8,c3>c4,h3>c3,s3>h3,s3>s8,s12>s3,s12>c12,d5>d13,d5>c5,h2>h10,s5>s12,s5>d5,s5>s6,h2>h12,c1>c6,c7>c1,s1>s10,d10>d2,h13>h5,h1>h13,h11>h1,s11>h11,s11>s1,s11>c11,s11>s5,h4>h2,c7>c8,d10>d9,d10>c10,d3>d10,h4>h7,d4>d3,d4>h4,c7>c13,s7>s11,d7>s7,d7>d4,d7>c7,

s4,c12,d1,h13,d7,h7,d11,s3,c10,c3,s9,s1,h2,d6,h12,s2,d2,d10,h11,s6,c6,d8,s11,h4,c5,c11,s10,c8,d3,h3,h10,s7,s5,s13,c9,h9,c7,d12,h5,c4,c13,d9,h1,d4,c2,d5,s12,c1,h8,h6,s8,d13  
**46/1000: solving: solved in 8408 tries.**  
h7>d7,h7>h13,c3>c10,c3>s3,s1>s9,s2>h2,s2>s1,d6>d11,d10>d2,c6>s6,d8>d10,h4>h11,c11>c5,c11>s11,c11>c6,h3>d3,h10>h3,s7>s10,s5>s7,s13>s5,h9>c9,h9>h10,h5>h9,c13>c7,c13>s13,c13>c11,c8>c13,c4>c8,c4>h4,h5>h12,d9>d12,d4>c4,c1>c2,d5>d9,d5>h5,d8>d5,d4>d8,c1>h1,s8>s12,s8>s2,h8>s8,h6>h8,h6>h7,d6>h6,c3>c12,d4>d6,c1>c3,d1>c1,d4>d1,d4>s4,d13>d4,

s13,c8,c7,d12,s3,c10,d6,d10,c2,s5,s10,d4,s8,d13,h2,h1,h4,h6,s7,d9,d8,s9,d2,s4,h5,c4,s1,s11,s12,d1,c12,c13,c3,h10,h12,h9,d5,c5,h11,c9,h3,c11,c1,h7,s2,c6,s6,d7,d3,h8,h13,d11  
**47/1000: solving: solved in 15864 tries.**  
c7>c8,s3>s13,d10>d6,d10>c10,d10>d12,s10>s5,d4>d10,s8>s10,d13>d4,h1>h2,h4>h1,h6>h4,d8>d9,d8>s8,s9>s7,d2>d8,d2>c2,d2>d13,s4>s9,s1>s4,s11>s1,s12>s11,c13>c12,c3>c13,h12>h10,h9>h12,d5>d1,c5>d5,c5>c4,c5>h5,c3>c5,h9>h6,h11>h9,c9>c3,h7>h3,c1>c9,h7>h11,c6>c1,s2>s12,s6>s2,c6>s6,c11>c6,d7>d2,d7>c7,h13>h8,d11>c11,d3>d11,d3>s3,d7>d3,h7>d7,h13>h7,

h12,h10,h1,h11,h8,d11,c11,c2,h3,c13,h4,d1,d4,s2,c1,d7,h2,d8,d9,s8,d5,s12,h13,c7,h7,s11,h5,d6,c9,c3,c12,d3,s4,d10,c8,c6,d13,s3,s13,s1,s5,s6,d12,c5,d2,h9,s9,c4,s10,s7,h6,c10  
**48/1000: solving: solved in 148243 tries.**  
h10>h12,h1>h10,h11>h1,h8>h11,c11>d11,c2>c11,d4>d1,d4>h4,c1>c13,d9>d8,h7>c7,h7>h13,c3>c9,c12>c3,c6>c8,s13>s3,s13>d13,s13>s4,s1>s13,s5>s1,s6>s5,s6>d6,d10>d3,c6>s6,c12>c6,d12>d10,c5>h5,c12>c5,c12>s12,d12>c12,d12>d5,d2>d12,d2>h2,d2>d7,d2>s2,d2>d4,d2>c2,d9>d2,h7>h3,s9>s8,s9>d9,s10>s11,c10>c4,c10>c1,s10>c10,h9>s9,h9>h8,s7>s10,h6>h9,h7>h6,s7>h7,

h7,d2,d8,c3,h6,d1,h12,c2,h4,d5,c13,d13,d10,h13,h2,h8,d12,c1,s8,s2,h3,h9,d6,s1,s11,c5,s13,h1,s9,s12,h5,d9,d11,c4,s5,c10,d7,s7,h10,d4,c7,s10,c11,c12,c9,h11,s3,d3,s4,s6,c8,c6  
**49/1000: solving: solved in 2144 tries.**  
d8>d2,h6>h7,c2>c3,h4>h12,d13>c13,d13>d5,d10>d13,h2>h13,h8>h2,s8>h8,s2>s8,h9>h3,d6>d12,s11>s1,c5>c1,s13>s11,s9>h9,s9>s2,s13>s9,h5>c5,h1>h5,s12>s13,d11>d9,s7>d7,c7>s7,c7>c10,h11>c11,h11>h10,s3>s10,c9>c12,d3>d4,s3>d3,c9>c7,s3>s5,s4>s3,s4>c4,s6>s4,s6>d6,s6>s12,d11>d10,h1>h4,h1>d1,c6>c9,c6>s6,h11>h1,h11>h6,d11>h11,d8>d11,c6>c2,c8>c6,c8>d8,

c10,s12,c5,h5,s13,d5,h6,h2,d10,d8,c2,c4,d12,d6,s9,c1,d9,c13,d3,d7,d4,h1,c6,c8,s5,s6,h10,s11,h9,s4,h13,h7,s7,c11,d2,s8,h11,c7,c9,s10,s2,d13,s3,h4,s1,h8,h3,h12,c12,d1,c3,d11  
**50/1000: solving: solved in 3010 tries.**  
h5>c5,h6>h5,h2>h6,d10>d5,d8>d10,c2>h2,c4>c2,d12>d8,d12>s12,d6>d12,s9>s13,d7>d3,d4>d7,c6>c13,c8>c6,s6>s5,h7>h13,s7>h7,s7>s4,c11>s11,c9>c7,s10>s8,s2>s10,s2>d2,s2>s7,h11>c11,h11>h10,h9>h11,s3>s2,h3>h4,h3>s3,h3>h9,h12>h8,c12>h12,d1>d13,s1>d1,c3>c12,c3>h3,s1>s6,s1>h1,c3>c8,c9>c3,c9>s9,c9>c10,d11>d9,d11>d6,d4>d11,c4>d4,c4>c9,c1>c4,s1>c1,

d4,s3,s10,d10,d6,s1,c10,c9,h11,h10,d8,c11,h7,h8,d2,h4,h13,s5,s9,s4,c4,h2,d3,d13,s12,d7,s11,s8,h1,d9,c2,c6,c12,c3,c1,h12,h5,s7,c7,c8,h6,s6,d1,h3,d11,h9,s13,s2,c13,d12,d5,c5  
**51/1000: solving: solved in 36808 tries.**  
s10>s3,d10>s10,d10>d4,d6>d10,c9>c10,h10>h11,c11>c9,h8>h7,h8>d8,h8>h10,h13>h4,s9>s5,s4>s9,c4>s4,h2>d2,h2>h8,h13>h2,d13>d3,s8>s11,d9>d7,c6>c2,c12>c6,c3>c12,c1>c3,c1>h1,h5>h12,s7>s8,c7>s7,h3>h6,d11>d1,h9>h3,s2>s6,d12>d11,d5>d12,c5>d5,c5>c8,s13>s2,c13>c5,c13>c7,c13>d13,c13>c11,c1>c4,c1>s1,c13>c1,h13>c13,d9>d6,h9>h5,h9>d9,h13>h9,s13>s12,s13>h13,

s10,c6,c13,h3,c9,c5,h12,s11,h7,h6,d13,s13,d6,c4,s1,s6,h10,d5,c11,c1,h9,d10,h13,h11,d12,d2,d1,d9,h8,d11,c3,h1,c8,s3,c7,d4,s2,d3,s12,s9,h4,c2,s5,d7,h2,s8,c12,c10,h5,d8,s7,s4  
**52/1000: solving: solved in 9120 tries.**  
c13>c6,c5>c9,h6>h7,s13>d13,s1>s13,s6>s1,s6>h6,s6>s11,d6>s6,c4>c5,c1>c11,h9>h10,h11>h13,d2>d12,d1>d2,d1>c1,d1>d5,d10>d1,d9>h9,d9>d6,d10>d9,h8>h11,h1>h8,c8>c3,s2>s3,d3>d4,s12>s2,s5>s9,s5>s12,d7>d3,d7>c7,d7>d11,c12>c2,h5>h2,h5>s5,h5>h1,h4>h5,h4>c4,h4>h3,h12>h4,d10>s10,c12>h12,d7>d10,c12>c13,c10>c12,c8>c10,s8>c8,s7>d7,s4>s7,s8>s4,d8>s8,

h6,s13,h13,d10,s2,d13,c11,c8,c6,s1,s6,h11,s3,d5,h8,d11,h10,d12,d6,c12,c13,h7,h5,d2,s10,h2,d1,h1,s5,d9,s9,h9,c2,h4,s8,c1,d8,d4,s4,s11,d7,s7,c9,d3,h12,c7,c3,s12,c10,c5,c4,h3  
**53/1000: solving: solved in 749 tries.**  
h13>s13,h13>h6,d13>h13,d10>d13,c8>c11,c6>c8,s6>s1,s6>c6,s6>s2,h8>h11,d11>d5,h10>h8,d12>d11,d6>d12,d6>s6,d6>d10,c13>c12,h7>h10,h5>h7,s10>s3,h2>d2,h2>h5,h1>d1,h1>h2,s9>d9,s9>s5,h9>s9,h9>h1,c2>c13,h4>h9,d4>d8,s4>d4,s11>s4,s7>d7,s7>s11,c7>c9,c7>s7,c3>c7,c3>c2,d3>c3,c10>c1,s12>s8,c10>s10,d3>d6,h12>s12,h3>h12,h3>d3,h4>h3,c5>c10,c4>c5,c4>h4,

d10,s11,c12,c13,h7,h13,d13,d5,c3,s7,s13,s3,c8,h10,d1,c6,c10,s6,h11,s8,h5,c2,c7,h3,d6,s12,c9,c1,s4,s10,h1,h8,c4,h4,h9,d8,h2,d3,d7,s5,h6,h12,s2,s9,d4,d2,s1,c5,d9,d11,d12,c11  
**54/1000: solving: solved in 3352 tries.**  
c13>c12,h13>h7,h13>c13,d13>h13,d5>d13,s7>s11,s13>s7,s3>c3,c6>c8,c10>c6,h10>c10,d1>d5,c7>c2,c1>c9,s10>s4,h8>h1,c4>c1,h4>h8,h9>h4,d7>d3,h6>h2,h12>h6,s2>s5,s9>s2,s1>s9,d9>d4,d12>d2,d12>d7,d12>h12,d12>d8,d9>h9,d12>d9,d12>s12,d12>d6,c5>c4,c5>c7,c5>h5,h3>h11,h3>s3,h10>h3,h10>d10,s8>s6,d11>d12,s10>s8,s10>h10,s13>s10,c11>c5,d11>c11,s1>s13,d1>s1,d11>d1,

d9,s13,c6,h8,s6,s1,d11,h2,s3,c12,h13,c7,d10,d1,h12,d12,c1,c2,c9,s5,s4,s12,s7,d2,d5,h7,c4,d4,h10,h11,h6,h1,c8,c13,h4,h9,s9,h3,d6,d13,c10,s8,s2,c3,d8,h5,s11,d3,c5,s10,d7,c11  
**55/1000: solving: solved in 72812 tries.**  
s6>s13,c6>s6,h2>h8,d1>d10,h12>h13,h12>c12,d12>d1,c2>c1,c9>c2,s4>s5,s12>s4,s7>s12,s7>c7,d5>d2,c4>c9,d4>c4,d4>d12,d5>d4,h7>h12,s7>h7,s7>s3,h11>h10,h11>d11,h6>h11,h6>c6,h2>h6,s7>s1,d5>d9,c13>c8,h9>h4,s9>h9,h3>h1,d13>d6,c10>c13,s2>s8,d3>d8,d3>d13,d3>h3,d3>d5,c3>c10,s11>s9,c5>h5,c11>c5,c11>c3,s11>c11,s2>h2,s7>s2,s10>s11,d7>d3,s7>d7,s10>s7,

c11,d1,c1,d10,d12,c13,s8,d13,h1,s2,h8,s7,c9,c2,h13,d4,c3,h9,s3,d7,d11,s6,h2,d5,c6,c7,s9,c5,c8,h7,c10,s13,d9,h5,h10,s4,d2,d3,s5,h11,s12,c12,d8,h6,h12,c4,s1,h3,d6,s11,s10,h4  
**56/1000: solving: solved in 21703 tries.**  
c1>d1,c1>c11,d12>d10,d13>d12,c13>d13,c13>c1,h8>s8,h1>h8,s7>s2,c9>c13,c2>c9,h9>h13,s3>c3,s3>s7,d7>d4,d11>d7,s6>s3,c7>c6,c5>d5,c7>c5,h7>c7,h7>h2,s9>h9,s9>s6,h7>h1,c10>c8,s13>s9,h10>h5,d2>d9,d3>d2,h11>h10,s5>s4,h12>c12,h12>h11,s12>s5,h6>h12,s1>s12,d6>d8,d6>d3,h6>d6,s11>s1,h3>h6,s11>d11,s11>s13,h3>h7,s10>s11,c10>s10,h4>h3,c4>c10,c4>h4,c4>c2,

s10,d12,d11,c2,h10,h1,c5,s1,h8,c3,d7,s9,h12,h6,c1,c12,s7,s5,h13,d8,d2,h4,s11,d3,d13,h5,d4,c10,s3,s6,s4,c11,s8,c9,s2,c13,h11,h2,h9,s12,c4,d9,c8,d6,d10,d1,h7,c6,d5,c7,s13,h3  
**57/1000: solving: solved in 5929 tries.**  
d11>d12,h10>s10,h1>h10,c5>c2,s1>h1,h6>h12,c12>c1,s7>s9,s7>d7,h6>h8,d2>d8,d3>d2,d13>d3,d13>h13,s11>s5,h5>h4,s6>s3,s4>s6,h2>h11,h9>h2,s12>s2,h9>c9,c4>c13,d9>h9,c8>c4,c8>s8,c8>c11,d10>d9,s12>s4,d10>c10,d10>d4,c7>h7,c7>c8,c6>c7,d6>d10,d5>d1,s13>s12,s13>d13,s13>s7,c6>d6,c6>c12,c6>h6,c6>c5,c3>c6,s13>s1,s11>s13,d11>s11,h3>c3,h5>h3,d5>h5,d5>d11,

h10,d8,d7,c5,c3,c8,s12,h9,d13,c6,d11,c10,s8,h4,s1,c9,d6,d12,s6,s3,h1,c4,d1,s13,h8,c12,s11,s4,d5,d2,h7,h6,s2,d9,c2,d3,c13,h11,c7,h5,h2,d10,h3,h13,h12,s5,s10,d4,c11,c1,s7,s9  
**58/1000: solving: solved in 22815 tries.**  
d7>d8,c3>c5,c8>c3,d12>d6,s6>s1,s3>s6,c4>c9,d1>h1,d1>d12,s13>s3,c12>c4,s4>s11,d5>d1,d2>d5,h6>h7,h2>h11,h2>c2,h2>h6,h2>d2,h2>h4,h8>h2,h8>s8,c12>c10,s4>s13,h13>h3,h12>h13,s5>h5,d4>d10,s7>s10,s7>s5,s7>c7,d4>d3,d4>s4,d4>d11,c1>c11,s9>s7,s9>s2,d9>s9,d9>d4,d9>h9,d9>d7,d13>d9,c12>c6,c12>s12,c12>c8,c13>d13,h8>h10,h12>h8,c12>c13,c12>h12,c1>c12,

c7,d6,c13,s4,d9,s7,s11,h10,c8,d8,d10,s5,c4,h5,c9,d5,h12,s13,c10,h2,d1,c3,h9,h6,s8,c1,s9,d4,s10,s3,h4,s2,h8,c12,c6,s12,c11,d7,c5,d11,h7,h13,s1,d12,d13,h11,c2,h3,s6,h1,d2,d3  
**59/1000: solving: solved in 14367 tries.**  
d9>d6,s7>s4,s7>c7,s11>s7,d8>c8,d8>d9,d10>h10,c4>c13,h5>s5,c9>c4,d5>h5,d5>d10,h2>h12,h6>h9,c1>c3,c1>d1,c1>c10,h6>h2,s9>s8,s3>s10,c6>c12,s12>s2,c11>c6,d11>c11,h13>h7,d13>h13,d13>d11,d12>d7,d12>s12,d12>d4,h8>h4,d13>d12,d13>s13,s3>s9,h11>h8,c5>c1,c5>d5,c5>c9,d13>d8,s6>s1,s6>h6,s6>s11,c2>c5,s3>s6,h3>h11,d2>c2,d2>d13,d3>d2,d3>s3,h3>d3,h1>h3,

d3,c7,d9,s2,d5,h12,s4,c4,h13,h10,c3,c11,h9,s3,d11,c6,d8,d6,s11,c12,d12,s13,d10,d2,d13,h5,h6,s9,d1,h3,h1,d7,c13,c1,c2,s12,s5,c10,s1,s10,h7,s7,d4,h8,h11,c5,s6,h2,c9,c8,s8,h4  
**60/1000: solving: solved in 1974 tries.**  
s4>s2,c4>s4,h13>h12,h10>h13,c3>c4,c3>d3,c7>c3,d5>d9,c11>c7,h9>h10,d11>d5,d11>c11,d6>d8,d6>c6,d6>d11,s11>s3,d12>c12,d12>d6,s13>s11,d10>d12,d2>d10,d13>s13,h6>h5,s9>h9,h1>h3,h1>d1,h1>h6,c13>d13,c1>c13,h1>c1,d7>d2,s12>s9,s5>s12,c10>c2,s1>s5,h1>s1,s10>c10,h7>d7,s7>s10,h8>h1,c9>c5,c8>c9,h2>h11,s8>s6,s8>c8,s8>s7,h4>h2,h4>d4,h4>h7,h8>h4,s8>h8,

h11,s6,h6,h2,s13,s3,c12,c9,d2,s11,d11,h1,c1,c7,d10,d7,d6,c10,h10,s5,c13,d1,d5,c6,h5,h7,d12,h12,s10,h8,h3,d13,d4,h4,d8,d3,h9,s2,c4,s1,c11,h13,c8,s9,c3,c2,s4,s7,s12,d9,c5,s8  
**61/1000: solving: solved in 134519 tries.**  
h6>s6,h6>h11,h2>h6,s3>s13,c9>c12,d2>h2,d11>s11,d11>d2,c1>h1,c1>c9,c7>c1,d10>d11,d7>c7,d6>d7,c10>d10,h10>c10,d1>d6,d5>d1,s5>d5,s5>s3,c6>c13,h5>h10,s5>h5,h12>d12,h12>h7,s10>s5,h8>h12,h3>h8,h4>d4,d3>d8,d3>h3,c4>h4,s1>s2,c11>c4,c11>c6,s7>s4,s12>s7,c5>c2,c5>c8,s9>s1,h13>d13,h9>h13,s9>h9,c5>c11,c3>c5,d3>c3,d9>d3,s9>d9,s9>s10,s12>s9,s8>s12,

d10,s10,h8,c3,c10,d3,d6,c5,h11,s7,h6,s3,s6,d8,d13,s4,c7,h10,d5,s8,h1,s11,c4,h9,h3,s13,c8,c6,d11,c13,d9,h4,c11,d4,d7,c1,s1,s2,s12,d2,d12,h2,c2,d1,c12,h5,h7,s9,h12,h13,s5,c9  
**62/1000: solving: solved in 55174 tries.**  
s10>d10,c10>c3,d6>d3,s6>s3,s6>h6,s6>s7,s6>d6,s6>s10,c5>c10,d8>h8,d13>d8,c7>c5,s8>s4,h9>h1,h3>h9,c6>c8,c13>s13,c13>c4,c6>c13,d9>d11,c11>c6,c11>s11,d9>d5,d4>h4,d4>d9,d7>d4,c1>c11,s1>c1,s2>s1,s12>s2,d2>d7,h2>h3,c2>h2,d12>s12,c12>c2,d1>d2,d12>c12,d12>d1,h7>h10,h7>c7,h11>h7,h12>d12,h13>h12,h5>h11,h13>d13,h5>h13,s5>h5,s5>s6,s8>s5,s9>s8,c9>s9,

s13,h2,c5,h12,s3,d10,c13,d1,d4,d11,c10,s10,h4,d9,s7,s1,d13,h8,s8,s12,d6,s4,c4,s6,s5,c6,h3,h13,h5,d5,h1,h7,d3,h6,d2,d12,h9,d7,c2,h10,c1,c12,s2,s9,c9,c7,h11,c11,c8,c3,d8,s11  
**63/1000: solving: solved in 49716 tries.**  
d4>d1,d11>d4,c10>d10,c10>c5,c13>c10,d9>d11,s1>s7,h8>h4,s8>h8,s8>s10,s1>s8,c4>s4,s6>s12,d6>s6,d6>d13,s5>s1,c6>c4,c6>d6,h13>h3,h5>h13,d5>h5,d5>d9,s5>d5,s5>s3,c6>c13,h7>h1,d12>d2,c12>c2,c12>d12,s9>s2,c9>s9,c9>c1,c9>h9,c9>c12,d7>d3,d7>h7,h6>h12,h6>c6,s5>s13,h6>h2,h10>h6,c7>c9,h11>h10,c11>h11,c8>c7,d8>d7,c8>d8,c3>c8,s11>s5,c11>s11,c3>c11,

c10,h2,h6,h10,d10,h8,h1,c11,s8,h12,s6,c7,c1,s2,h5,c4,s5,s9,d2,s13,c6,c9,h9,c3,h4,d3,c13,d7,s3,d8,s1,d9,d1,s11,d13,s7,s10,c12,d6,s4,s12,d5,c8,h3,c2,d11,h7,c5,d4,d12,h13,h11  
**64/1000: solving: solved in 14768 tries.**  
h6>h2,h10>h6,h10>c10,d10>h10,h1>h8,h12>h1,s6>s8,c1>c7,c4>c1,s5>h5,s5>s2,s9>s5,c9>c6,c9>s9,c9>c4,s13>s6,c3>c9,h4>h9,d3>c3,d2>d3,c13>s13,c13>c11,d2>d10,d1>d9,d1>s1,d1>d8,s10>s7,d6>d13,s12>s10,c12>s12,c8>c12,s4>s11,c5>c2,c5>c8,d5>c5,d11>d6,d5>d11,d4>d5,d4>s4,d4>d1,d4>h4,d4>d2,d7>d4,h3>s3,h7>h3,h13>c13,h7>h13,d12>d7,h12>d12,h7>h12,h11>h7,

s12,h6,d13,h11,d5,d11,c9,d9,h4,s2,c3,d3,s8,h3,c13,c1,s1,c7,h10,h2,s10,c12,c11,d10,d7,h12,c6,d1,d6,s7,h13,s13,d2,s11,h8,s9,s4,h5,h1,d4,s3,c2,c4,c8,h7,d12,h9,c10,d8,c5,s6,s5  
**65/1000: solving: solved in 81413 tries.**  
d11>d5,d11>h11,d11>d13,d9>c9,d9>d11,d3>c3,d3>d9,s8>s2,h3>d3,h3>h6,h4>h3,c1>c13,s1>c1,s1>s8,h10>h4,h2>h10,c11>c12,d7>d10,d7>c7,d6>d1,d6>c6,h13>h12,s13>h13,h5>h8,h1>h5,s4>s9,d4>s4,s3>s11,c4>c2,c8>c4,d8>d12,d8>d4,d8>d2,h9>h1,c8>d8,h7>h9,c10>c8,s6>s3,s6>d6,s6>s13,s7>s6,s7>d7,s7>s1,s10>s12,c10>c11,h7>h2,s7>h7,s7>s10,c5>c10,s5>c5,s5>s7,

s8,d5,h6,d8,s12,c3,h11,d6,h8,s10,s9,h13,s7,c10,h4,h2,d9,h7,s3,d4,c13,d11,h5,c7,d10,c5,s2,c9,h1,s6,h12,c2,s11,d2,h3,c6,c12,s5,c4,d13,c8,h10,d3,h9,s4,d1,d7,s1,c11,c1,s13,d12  
**66/1000: solving: solved in 7660 tries.**  
d8>s8,d5>d8,h11>h6,s9>s10,h4>h13,h2>h4,h7>s7,h7>h2,d9>s9,c13>c10,d11>d4,d10>d11,c5>c7,c5>h5,c5>c13,s6>s2,h12>h1,c4>c6,c12>c4,d3>d13,d3>h3,d3>d2,c12>c2,c12>h12,c12>c9,h9>h10,s1>s4,s1>s5,d7>d1,c11>c8,c11>s11,c11>c12,s1>s6,d3>d10,d3>s3,c1>c11,c1>c5,d3>d9,d3>c3,d3>d5,s1>c1,h9>h8,h9>h11,h7>h9,d6>d3,d7>h7,d7>d6,s13>s1,d12>d7,s12>d12,s13>s12,

h9,h1,c4,h12,d1,s3,c5,d3,c1,c10,c12,s1,d4,s7,s8,h8,s13,c6,d7,h11,d5,c11,h2,c7,c13,c9,h10,h13,h6,h4,c2,h5,s11,s2,s6,s12,s5,s4,h7,d9,d12,d2,s10,c8,d11,d13,d10,s9,c3,d6,d8,h3  
**67/1000: solving: solved in 19722 tries.**  
h1>h9,d1>h1,c5>c4,d3>s3,d3>d1,c10>c1,c12>c10,c12>h12,c12>c5,d4>d3,s7>s1,s8>s7,h8>s8,c6>c12,h11>h8,d5>d7,c11>h11,c11>c6,d5>d4,c7>c11,c13>c7,s13>c13,h13>h10,h13>s13,h2>h13,h4>h6,c2>h2,c9>c2,h5>h4,s2>s11,s6>s2,s12>s6,s5>s12,s5>d5,s4>s5,h7>h5,d12>d9,d11>d2,d13>d11,d10>d13,d8>d6,d8>c8,d8>d12,d10>d8,s10>d10,s10>s4,h3>h7,s9>s10,c9>s9,c3>h3,c3>c9,

d10,c12,s11,d3,c3,s7,s8,c8,d4,s9,c7,d12,d6,h10,d7,s2,s10,h8,h9,d5,h4,d13,c9,c6,h5,h7,s5,d9,h1,s3,d11,c13,s4,d8,h6,h11,c1,d2,c11,h3,c5,s1,d1,s6,h12,s13,c2,c10,c4,h13,s12,h2  
**68/1000: solving: solved in 15463 tries.**  
d3>d10,c3>d3,c12>c3,s7>s11,s8>s7,c8>s8,c8>c12,c7>c8,d6>d12,s10>s2,h8>h10,h9>h8,c6>c9,h5>h4,h5>d5,h5>h9,h1>h7,s4>s3,h11>h6,c1>c13,h11>d11,d2>d8,c11>h11,c1>c11,d2>d9,s1>c1,s1>s4,s1>h1,s1>s10,d2>d13,c5>c6,s6>s5,s6>s1,s6>d6,s6>s9,c5>h5,d1>d7,d1>d4,d2>d1,c5>c7,s13>s6,h12>h3,c2>d2,c4>c10,h13>s13,h12>h13,c4>c5,c2>c4,h2>c2,h12>h2,s12>h12,

h1,s2,s4,c13,c3,c4,h8,d7,h13,d12,s6,h5,h9,c10,s10,d13,h12,d1,c8,h10,c1,c12,c11,s11,d6,h3,s9,d11,c5,h2,d5,s12,h6,h7,s7,d2,h4,d4,d8,d3,s5,d10,h11,s1,c6,c2,c9,s3,s8,s13,c7,d9  
**69/1000: solving: solved in 4370113 tries.**  
s4>s2,c3>c13,c4>c3,c4>s4,h5>h13,h9>h5,s10>c10,s10>s6,h12>d12,h12>h9,d13>d7,d1>d13,d1>h1,h12>h8,c8>c4,h10>s10,h10>h12,c1>d1,c8>c1,c11>c12,s11>c11,h3>h10,d11>s11,d6>d11,h6>h2,h6>d6,h6>h3,s12>s9,c5>c8,d10>d8,d10>d2,d3>d10,d3>d5,s5>s7,s5>s12,h11>h7,h11>h6,h4>h11,c2>c6,c9>c2,s8>s1,s13>s8,s13>s5,d4>h4,s3>s13,d3>s3,d3>d4,d9>d3,c9>d9,c9>c5,c7>c9,

s6,d2,s9,s12,s7,d13,c8,h6,c5,h7,s11,d7,h9,d8,s3,c12,s8,c7,d1,d5,h8,h4,c6,c13,d11,s5,h12,h1,s1,h3,d10,s13,s4,d12,s10,c1,c3,d3,h5,s2,c4,c10,d6,c9,d9,c11,h10,h13,d4,h2,h11,c2  
**70/1000: solving: solved in 672 tries.**  
s12>s9,s7>s12,h9>h7,d8>d7,s8>d8,s8>s11,s3>s8,c12>c5,c7>c12,d5>d1,h8>h9,h8>c8,h6>h8,c7>s7,d5>d13,c6>h6,c13>c6,s5>s3,h1>h12,s1>h1,s1>s5,s4>s13,s10>d10,s4>s10,s4>h4,s4>s1,d11>d5,c3>c1,d3>c3,d3>d12,d3>h3,d3>d11,c4>s4,c4>c13,c10>c4,d9>c9,h13>h10,d4>d9,h11>c11,h13>h11,h2>h13,h2>s2,h2>h5,d6>d3,d6>s6,c10>c7,c2>c10,h2>c2,d4>d6,d2>d4,h2>d2,

d2,d7,s12,h10,s5,c9,h3,d8,c5,s9,h1,d10,s13,s7,c3,c13,h8,h7,d3,c6,h13,s3,c1,s11,c11,c2,s10,h2,d11,d12,h6,s6,h5,h9,h11,d6,d13,d9,c7,d5,s4,d4,c12,c8,c10,s8,s2,h12,s1,h4,d1,c4  
**71/1000: solving: solved in 1782 tries.**  
d7>d2,h3>h10,c5>s5,c9>c5,d10>d8,s7>s13,c13>c3,h8>h1,h7>h8,s7>h7,s7>s9,c13>c9,s3>d3,s3>s7,s3>h3,s3>s12,d10>d7,c6>c13,c11>s11,c11>c1,c2>c11,h2>h13,c2>h2,c2>c6,s10>d10,s3>s10,d12>d11,s6>h6,s6>s3,h9>h5,h11>h9,d13>d6,d9>d13,d4>s4,c12>c7,c12>d12,c12>c2,d5>d9,d4>d5,c8>c12,c10>c8,s2>s8,h12>h11,s1>s2,h4>h12,d4>h4,s1>s6,c4>c10,d4>c4,d1>d4,d1>s1,

d4,s13,s6,s9,h13,s3,h9,s10,h6,h5,d3,h2,c2,c6,h3,c10,s8,c8,c4,h4,h11,s7,h8,d10,d6,d9,d2,c12,s12,d1,s5,c9,c1,c11,d8,h10,d12,d7,h7,s4,s2,c5,h1,s11,h12,s1,c13,c7,d11,d13,d5,c3  
**72/1000: solving: solved in 28145 tries.**  
s6>s13,s9>s6,h9>s9,h13>h9,s10>s3,h5>h6,c2>h2,c6>c2,h3>h5,d3>h3,d3>d4,c10>c6,c10>s10,c8>s8,c8>c10,c4>c8,h4>c4,h4>h13,h11>h4,d6>d10,d9>d6,d2>d9,s12>c12,s12>s7,d1>d2,s5>s12,c1>c9,c1>d1,c11>c1,c11>h11,d8>h8,d8>d3,d7>d12,h7>d7,s1>h1,s11>s2,s1>s4,s1>s5,s11>s1,s11>c11,h12>h10,h7>h12,c7>h7,c5>c7,d11>s11,d11>d8,d13>d11,d5>d13,c5>d5,c13>c5,c3>c13,

c11,s11,s3,s9,h2,c2,h1,h3,d1,h5,h10,d7,s8,c10,s13,c9,d2,s6,c12,s5,c8,h9,d13,d9,h8,h4,d8,s10,c3,c13,c1,h13,c4,s1,c5,s12,d10,d4,d12,h6,h11,c7,s4,d5,d6,h12,d3,s7,h7,c6,d11,s2  
**73/1000: solving: solved in 19583 tries.**  
s11>c11,s3>s11,s9>s3,c2>h2,h3>h1,h10>h5,c10>h10,c10>c2,d7>d1,s13>s8,d2>d7,d9>d13,d9>h9,h4>h8,d8>c8,d9>d8,s10>s5,c13>c3,c1>c13,c4>h4,c4>c12,c1>c4,s1>s10,s1>c1,s1>s6,d4>d10,d12>d4,d12>s12,d12>d9,c7>c5,h11>h6,h7>s7,d11>d3,d11>d5,d6>d11,c6>d6,h12>h11,h12>d12,h13>h12,s2>s4,s2>s1,s2>d2,s2>s9,c6>c9,c6>c10,s13>s2,c7>c6,h13>s13,h7>h3,h7>c7,h7>h13,

c13,s10,s4,h8,s1,s12,d10,h1,d4,s13,s8,s7,d6,d8,h7,h4,c10,c1,h12,c6,h9,h3,s5,d11,d5,s3,d2,s6,d7,d13,s2,c2,d1,h10,c7,d9,d12,c12,h2,h13,c5,c8,c4,c9,c11,s11,h6,c3,s9,d3,h11,h5  
**74/1000: solving: solved in 400 tries.**  
s4>s10,s12>s1,h1>h8,d4>d10,d4>s4,s13>s12,s13>c13,s8>s13,s7>s8,d8>d6,h4>h7,h4>d4,h1>h4,c1>c10,h12>h1,c6>c1,h9>h12,h3>h9,d11>d8,d5>s5,d13>d7,s2>d2,s2>s3,s6>s2,c7>c2,d12>d9,c12>d12,c12>c7,h2>h10,h13>h2,h13>d13,c8>c5,c4>c8,c9>c4,c11>c12,c3>c9,s11>c11,d3>c3,d3>d1,h6>h13,h6>s6,d3>d5,d3>h3,d11>d3,s11>d11,h6>c6,s9>s7,s11>s9,h11>h6,h11>s11,h5>h11,

c7,d2,s11,c12,s12,d12,d4,s5,s6,c8,c3,s13,c10,c4,h3,h9,h13,d10,c1,c2,h8,s1,h11,h7,s3,h12,d9,c9,d7,d6,s8,d11,c13,h4,d13,s2,d1,s9,d8,s7,h10,s4,c11,c5,d5,d3,c6,h5,h1,h2,h6,s10  
**75/1000: solving: solved in 18797 tries.**  
c12>c7,s12>s11,d12>s12,d12>d2,d12>c12,d4>d12,s6>s5,c3>c8,c4>c10,h3>c3,h9>h3,h13>h9,s13>h13,s13>s6,d10>d4,c1>c4,c2>c1,s1>s13,h11>h8,h7>h11,s3>s1,h12>h7,c9>d9,d6>d7,d13>d11,c13>d13,s2>s8,c13>c9,s9>s2,d1>d6,s7>s9,d8>d1,s4>s7,h4>s4,h4>h12,h10>h4,c5>c11,d3>d8,d5>c5,c6>c13,d5>d3,h5>d5,h1>h5,h2>h1,h2>c2,h10>h2,h6>c6,s10>s3,s10>d10,h10>s10,h6>h10,

s1,d8,d2,c11,s6,h6,c2,d13,s12,s8,h8,c3,d10,c7,h2,h4,h10,h13,c4,s4,d11,c6,c8,h9,h5,s3,h7,d12,s5,h1,s7,c5,d4,c13,s11,s13,s9,d9,d3,s2,d1,h3,c12,c1,h12,c9,c10,d5,d6,s10,h11,d7  
**76/1000: solving: solved in 72755 tries.**  
d2>d8,s6>s1,h6>s6,c2>c11,c2>d2,s8>s12,h8>s8,h8>h6,h4>h2,h10>h4,h13>h10,s4>c4,c8>c6,h5>h9,s5>s3,s5>h5,s5>s4,d12>d11,h1>h7,c5>c8,s11>s7,s13>c13,s9>s13,d9>s9,d9>d4,s2>s11,d3>d9,d1>d3,c1>d1,h3>h1,c1>c5,c12>c1,c12>d12,h12>c12,c10>c9,d6>d5,s10>s2,s10>s5,c10>s10,c10>d10,c10>c2,h3>h12,h3>c3,c7>c10,h11>h3,h11>h8,h13>h11,d7>c7,d13>d7,d13>h13,d6>d13,

c5,c4,d10,s3,c13,c9,s5,d2,c2,h2,d13,d7,h13,h5,h6,d4,s11,s10,h9,d9,d3,s2,c3,s1,d8,c8,h12,s4,c6,d12,c11,c7,s8,d5,s7,h4,h10,h1,h7,d1,c12,d11,h11,s9,c10,s12,h8,c1,s6,s13,d6,h3  
**77/1000: solving: solved in 121692 tries.**  
c4>c5,c13>c4,c9>c13,s5>s3,c2>d2,c2>c9,h2>c2,d7>d13,h5>h13,h6>h5,s10>s11,h9>h6,d9>h9,d9>d7,d4>d9,s10>d10,s5>s10,d3>d4,s2>h2,s5>s2,c3>d3,c8>d8,s4>s1,c7>c11,d5>d12,s7>s8,s7>c7,h10>h4,h7>s7,h7>h12,d1>d5,h11>d11,c10>c12,h8>h11,s12>s9,s13>s12,c1>c10,s6>s13,h3>h8,h3>h10,h3>h7,h1>h3,c1>h1,c1>c8,c6>c3,s6>s4,s6>c6,s6>s5,d1>c1,d6>d1,d6>s6,

d6,s2,h9,s12,h7,d3,s1,s10,d12,c13,s8,c10,s13,s7,h2,c11,h10,h8,c2,c7,h11,s3,d13,d1,s4,d8,c4,d2,d7,d10,h13,s5,h4,h3,c9,c12,d4,c8,h5,c5,h12,d5,s9,s6,c3,c6,h1,s11,h6,d9,d11,c1  
**78/1000: solving: solved in 4736 tries.**  
s1>s12,s10>s1,d12>d3,s13>c13,s13>s10,s8>s13,s7>h7,s7>s8,h10>c10,h10>h9,h2>h10,h2>s2,d12>d6,h8>h2,c2>c11,c7>c2,c7>s7,d1>d13,d7>d2,d10>d7,h3>h4,c12>c9,c5>h5,c5>c8,h12>c12,h12>h3,c5>s5,c5>c4,h12>h13,d5>d4,d5>c5,d5>d8,d10>d5,s9>s4,c6>c3,s11>s6,s11>s9,h6>h12,c6>h6,d9>d10,c1>c6,d11>d9,c1>d1,c1>c7,s11>s3,d11>s11,h1>c1,h1>h8,h11>h1,d11>h11,d11>d12,

h6,s8,d1,h4,d8,h13,c13,c1,c10,c3,d2,s9,s4,s6,h7,s2,c7,c4,d9,h9,h12,h5,d6,c11,s13,d3,c5,s11,s12,d12,c12,h8,c9,s10,h1,c6,d13,s3,d7,h3,c2,d10,d4,h10,s7,d11,d5,c8,h2,s1,s5,h11  
**79/1000: solving: solved in 242627 tries.**  
h4>h6,d8>d1,d8>s8,c13>h13,c1>c13,c10>c1,c3>c10,s4>s9,s6>s4,s2>d2,s6>s2,c7>h7,c4>c7,h9>d9,h12>h9,h5>h12,d6>s6,c5>c11,c5>h5,c5>c4,d3>d6,d3>c3,d3>d8,s11>s13,s12>s11,d12>s12,c12>d12,c12>c5,h8>h4,c6>c9,s3>s10,d10>d7,d11>d4,h10>h3,h10>h1,d10>d13,d10>h10,c2>c6,d5>d10,s1>s7,s5>s1,s5>s3,d5>s5,d5>d3,c8>c12,d11>d5,c2>c8,h2>c2,h11>h2,h11>d11,h11>h8,

h13,c12,s4,c1,h11,c9,h1,d4,c13,h12,c3,d10,s1,d7,d1,h8,d13,s5,h6,d6,d3,c5,h10,s11,s9,s10,s6,s12,s13,c8,d5,s2,c7,c6,d8,d9,c10,s7,h2,c4,s3,h9,c2,h5,h3,c11,h4,d12,d2,h7,s8,d11  
**80/1000: solving: solved in 12128 tries.**  
h1>c1,h1>h13,h11>h1,d1>d7,d1>s1,d1>d10,h8>h12,d13>d1,d13>c13,d13>d4,c3>c9,d6>h6,d6>d13,d3>d6,d3>c3,s5>s4,c5>s5,c5>c12,h8>h11,h10>h8,s9>s11,s10>s9,s10>h10,s6>s10,s12>s6,s13>s12,d5>c5,d3>d5,s2>s13,c7>c8,c6>c7,d9>d8,c4>c10,h4>h5,c11>c2,h7>h3,d11>d12,d11>c11,d2>d11,d2>h2,d2>d9,d2>s2,d3>d2,c4>c6,h4>h9,h4>c4,h7>h4,s7>h7,s3>s7,s3>d3,s8>s3,

d12,s6,c5,h4,h9,s1,d6,c4,s4,d8,s8,h2,h10,s3,s9,h3,d11,d3,h7,d13,s13,h11,d9,c9,s10,c7,h12,h13,h5,d4,s2,d2,c8,h6,d7,c6,s5,s7,d10,c12,s11,h1,c1,d1,c13,s12,c3,h8,c11,c2,c10,d5  
**81/1000: solving: solved in 201275 tries.**  
h9>h4,s1>s6,c4>c5,s4>c4,s4>s1,d6>d12,d8>d6,s8>d8,s4>s8,h2>h9,h10>h2,s9>s3,d3>d11,d3>h3,h7>h10,d13>d3,s13>d13,s13>s9,c9>d9,s10>s13,c7>c9,c7>h7,h12>h11,h13>h12,h5>h13,s2>s10,d2>d4,d7>d2,d7>c7,c6>h6,c6>c8,c1>c12,d1>h1,s12>s11,s12>s7,c11>c13,c2>c11,c10>c2,c10>d10,c3>c10,c3>c6,c1>c3,d1>c1,s5>s2,d5>d1,d5>d7,s5>d5,s12>s4,s5>s12,h5>s5,h8>h5,

c7,s1,c1,h1,s7,h4,s3,c4,d13,c13,c12,d6,h5,s12,h6,s6,c5,h10,h9,c2,c9,s2,h12,d9,h13,d2,c6,c10,h11,d3,s5,c3,s11,d8,h3,h2,s8,s4,d7,h8,d10,c11,d4,h7,s9,d1,d11,d5,s10,s13,c8,d12  
**82/1000: solving: solved in 78618 tries.**  
c1>s1,c1>c7,h1>c1,c13>d13,c13>c4,c12>c13,s12>c12,s12>s3,h5>h4,h6>d6,s6>h6,s6>s12,h10>h5,h9>h10,c2>c5,c9>c2,d9>c9,h13>h12,d2>d9,s2>d2,s2>s6,c10>c6,h3>c3,h3>h11,d3>h3,s11>s5,s8>s11,d8>s8,d8>d3,h2>h13,h2>s2,h8>d8,h8>h9,h2>h1,d1>d4,d11>d1,s13>s9,d12>d5,d12>d11,d12>d7,d10>d12,s10>s13,c8>c11,s10>d10,s10>s4,c8>h8,c10>c8,s10>c10,h7>h2,s7>h7,s10>s7,

d12,c11,s10,c7,d9,c2,c8,d11,s8,c1,d8,c12,d4,s9,h10,h3,s1,c9,h11,h1,d13,s11,h4,s12,h12,s2,s5,s13,h2,s4,c3,d6,d2,c10,c5,s3,h9,h7,s6,c4,d3,d10,h8,c6,d5,h5,s7,c13,d7,h13,d1,h6  
**83/1000: solving: solved in 39179 tries.**  
c8>c2,c1>c8,d8>s8,d8>d11,h3>h10,c9>s9,h1>h11,h1>s1,h1>h3,d13>d4,h12>s12,h12>h4,s5>s2,s13>s5,d2>d6,d2>h2,c10>c3,c5>c10,h7>h9,d10>d3,h5>h8,c6>c4,d5>h5,d5>d10,d7>d5,d7>h7,s7>d7,s7>s3,s6>s4,c13>c5,h6>c6,h6>s6,h13>h6,h13>h12,s13>h13,s13>s11,s13>d13,d1>d2,d1>h1,c13>s13,c13>c12,c9>c13,c9>d9,c9>c11,c1>c9,d1>d8,s7>s10,c7>s7,d1>d12,c1>d1,c7>c1,

h8,d9,h12,s8,d3,c3,c9,s4,c10,c5,c13,d2,d8,c2,d7,s1,s3,h3,s2,h5,s7,h13,h9,s5,h1,d12,h10,s9,d6,s13,c11,s12,d11,s6,c7,c1,h4,h7,d1,d4,c8,c12,c4,d5,d10,h6,h2,s11,c6,d13,h11,s10  
**84/1000: solving: solved in 26117 tries.**  
s8>h8,c3>d3,c9>c3,c5>c10,c13>c5,d8>d2,s3>s1,h3>s3,s2>c2,s2>s4,d7>d8,h5>h3,h9>h13,s5>h5,s5>s2,s7>d7,h1>h9,d6>d12,s13>s9,c1>c7,h7>h4,d4>d1,c8>c1,c12>c8,c12>s12,c12>c11,s6>s13,c4>d4,d5>d11,d10>d5,d10>h10,d10>d6,s6>s7,h2>h7,h2>h1,c4>c12,c6>c4,h6>h2,c6>s6,c6>c9,h6>c6,h6>h12,d13>c13,d13>d9,d10>d13,h11>h6,s5>s8,s11>h11,s10>s11,s10>d10,s10>s5,

s10,c2,s1,c5,h6,s3,d4,d12,d13,h8,d1,d8,d11,d5,d6,h13,h4,d7,h1,s12,c9,h3,c13,s11,h10,s9,d9,s7,h2,c4,c1,c8,c12,s5,d2,s2,d3,d10,c10,s4,c7,s13,h5,c6,c11,s8,c3,h9,h11,s6,h12,h7  
**85/1000: solving: solved in 124212 tries.**  
s3>s1,d12>d4,d13>d12,d8>d1,d8>h8,d8>d13,d11>d8,d5>d11,d6>d5,d6>h6,h4>h13,h3>h1,c13>c9,d9>s9,s7>s11,c1>c4,c8>c1,c12>c8,d2>h2,d2>d9,s2>s5,d3>d2,d10>d3,d10>h10,c12>c13,c12>s12,s7>d7,c10>c12,d10>c10,c6>c7,s8>s13,s8>s2,s8>s7,s4>s8,s4>h4,h12>h9,h7>h12,h7>h5,h11>h7,h11>h3,c11>h11,c3>c11,c3>c5,c3>s3,c3>c2,s4>s10,c6>c3,d6>c6,s6>s4,d6>s6,d10>d6,

d8,c11,c8,h3,h13,d11,s12,s9,s7,c13,d9,s13,s11,h7,d5,c6,c4,s3,s1,s8,c9,h1,h5,s5,h4,d1,c7,d10,s2,h11,h2,h10,d6,d12,s6,c12,c2,c1,d3,h9,d2,d7,h8,c10,s10,h6,c3,d13,c5,d4,s4,h12  
**86/1000: solving: solved in 6460 tries.**  
c8>c11,c8>d8,h13>h3,s9>s12,s7>s9,c13>h13,c13>c8,s11>s13,s11>d11,s7>s11,c4>c6,s1>s3,s8>s1,h5>h1,s5>h5,h2>h11,h2>s2,h10>h2,h10>d10,h10>h4,d12>d6,c12>c7,d12>c12,d12>d1,s6>s5,c1>c2,h8>h9,d7>d2,c3>c10,c3>d3,c3>c1,d13>d7,h6>h8,h6>h10,h6>s6,s4>s10,c5>c3,c5>c9,c5>d5,c4>c5,h6>h7,s4>s8,s4>c4,s4>s7,d13>d9,h12>h6,d12>h12,d4>s4,d13>d4,d13>c13,d12>d13,

c12,h11,d11,s7,c3,h1,c13,s6,s3,h5,c8,s8,d9,c9,c7,h6,s11,c4,h10,s12,s9,c2,d4,s2,d7,h2,c5,d5,d13,h7,c11,d6,d12,d3,h12,h8,s4,h13,c1,d10,h3,s13,d1,c6,c10,h4,d8,s1,d2,s10,s5,h9  
**87/1000: solving: solved in 83516 tries.**  
d11>h11,c3>c12,s6>s7,s3>s6,s8>c8,c9>d9,c9>c13,c7>c9,h10>h6,s9>s12,d4>c4,s2>c2,s2>s9,d5>c5,d13>d5,h7>d7,h2>h7,h2>s2,h2>h10,d13>d4,d12>d6,d3>d12,h8>h12,h3>h13,h3>d3,h8>h3,s13>s4,s13>d13,s13>s11,c6>c1,c10>c6,d10>c10,d1>d10,s1>d1,d2>d8,s10>s1,s5>s10,s5>s13,s5>h5,s5>s3,h2>h1,s8>s5,c11>c7,h8>s8,h2>h8,c11>c3,d11>c11,d2>d11,h2>d2,h4>h2,h9>h4,

s8,s11,c12,h9,h7,c3,h11,c8,s3,d9,d13,h5,c2,s6,h6,d7,h3,c11,d11,h4,d6,s9,c4,d12,s7,h12,h10,s1,h13,c10,h8,s13,s5,c13,d4,s10,c1,s2,s4,c7,h1,d10,h2,d3,s12,d2,d5,d8,c9,c6,c5,d1  
**88/1000: solving: solved in 23160 tries.**  
s11>s8,h7>h9,s3>c3,s3>s11,h11>h7,d13>d9,h5>h11,h6>s6,d7>d13,h3>h6,d11>c11,d11>d7,h4>h3,d6>d11,c4>c2,h4>c4,h4>h5,h10>h12,c10>h10,h8>h13,s5>s13,s10>s5,s10>c10,s10>s7,s1>s10,s4>s2,h1>c1,h1>h8,h1>s1,d4>d12,s4>d4,d2>h2,d2>d10,d3>d2,c5>c6,d1>d8,d1>d3,d1>h1,c7>c13,d5>d1,d5>d6,c5>c7,c5>d5,c5>c8,s4>h4,c9>c5,s9>c9,s9>s4,s12>s9,s12>c12,s12>s3,

h3,h9,c4,s8,c1,d9,s3,s13,c10,c12,d3,h7,s1,d12,h12,s4,d10,h10,c9,s11,h1,d2,c7,c8,d6,h6,s6,c11,h2,d4,s7,d7,h5,s5,c2,s12,h4,s9,h13,h11,s10,d1,d13,h8,c6,c5,d8,s2,d11,d5,c3,c13  
**89/1000: solving: solved in 17014 tries.**  
h9>h3,s3>s8,s13>s3,c12>c10,d12>d3,d12>c12,d12>d9,s1>c1,s1>s13,h12>h7,h12>d12,h12>h9,s4>s1,s4>c4,h10>d10,s11>s4,c7>c9,c8>c7,d6>d2,h6>d6,h6>h1,s6>h6,s6>s11,c11>c8,d7>s7,d7>d4,s5>h5,c2>h2,c2>c11,s9>s5,s12>s9,h13>h4,s10>s12,s10>h10,s10>s6,h11>h13,c5>c6,d8>d13,d8>d7,h8>d8,h8>h12,h11>h8,d11>d1,d11>h11,s2>s10,c2>s2,d5>d11,c5>c2,c5>d5,c3>c5,c13>c3,

d2,h8,c1,h2,h3,c12,s2,d6,c13,h12,d1,d4,s6,c11,c9,c8,d8,h7,d3,s10,d12,d7,h4,s11,s12,s7,d5,h11,h10,h9,c7,h13,s5,s4,c4,d10,h5,d11,s9,h6,d9,s1,d13,s8,s3,c3,s13,c5,c2,h1,c10,c6  
**90/1000: solving: solved in 26069 tries.**  
h2>d2,h8>h2,c13>c12,d4>d1,s6>d6,s6>s2,h12>h3,c11>c13,c9>c11,c8>c9,c8>h8,c1>c8,d8>d4,h7>h12,d3>d8,d7>d12,s11>s10,s12>s11,s7>s12,s7>h7,s6>s7,d7>d3,h10>h11,h9>h10,s4>s5,c4>s4,h5>h13,h5>d5,h5>h4,h9>h5,c4>c7,d10>d7,d11>d10,s1>s9,s3>s8,s13>d13,s13>s1,s3>s13,c3>s3,c3>c4,c10>c5,c6>c10,c6>c3,c6>s6,d9>d11,h9>d9,h6>h9,c2>c1,c6>c2,h6>c6,h1>h6,

c8,s9,s1,c7,s4,c9,d10,s2,s6,d8,d11,h3,h9,d1,s10,s8,s5,s11,c1,s12,s3,h11,s13,h10,d13,c6,h4,c3,h7,h1,h6,d2,h5,c10,h13,d4,h8,c4,d12,s7,c2,c12,h2,d9,d3,c5,h12,c13,c11,d5,d7,d6  
**91/1000: solving: solved in 7650 tries.**  
s1>s9,s2>s4,s6>s2,d8>d10,d11>d8,h9>h3,s8>s10,s5>s8,s11>s5,s11>d11,c1>d1,c1>c9,c1>s1,c1>c8,c7>c1,s11>s6,s3>s12,h11>s11,h9>h11,s13>s3,h4>h10,c3>c6,h7>h4,h7>c7,h9>h7,d13>s13,h1>h9,h6>h1,c10>c3,h13>h5,h13>d13,h13>h6,d4>d2,h8>h13,c4>d4,c4>c10,d3>d9,h12>h2,c11>c13,d5>d3,c5>d5,c5>c2,c11>c5,c11>c4,c12>c11,d12>c12,h12>h8,d12>h12,d7>s7,d7>d12,d6>d7,

d3,s1,c4,h9,d2,c2,d12,s11,c10,d5,d13,h8,h1,d6,d10,s6,s7,d4,d11,h10,s10,s5,s8,d7,s13,h12,h7,s9,c8,c1,s4,c12,h13,c3,h3,c13,c9,h2,h11,d1,c6,h5,c11,s2,d8,s3,c5,d9,h4,h6,s12,c7  
**92/1000: solving: solved in 342123 tries.**  
c2>d2,c10>c2,d13>d5,h1>h8,d10>d6,s7>s6,d11>d4,h10>d10,h10>h1,s7>s11,s5>s10,s8>s5,h7>h12,c1>c8,h3>c3,c13>c12,c9>c13,c9>s9,c1>c9,h13>h7,h13>s13,h3>h13,h2>h3,h11>h2,h11>d11,h11>h10,d1>d7,d1>d13,c1>d1,c1>c10,c1>s1,s4>s8,h5>h11,s2>s4,c5>c11,c5>h5,h6>h4,s12>s3,s12>s2,s12>d12,s7>s12,c5>c4,c6>c5,d9>d8,c7>s7,c7>c1,c6>c7,h6>c6,h9>h6,d9>h9,d9>d3,

s4,d1,c10,c8,c6,h4,s13,h13,h5,s2,h7,s9,c11,d10,d9,s5,c2,d2,d6,d4,d3,h11,s12,c7,c12,c9,h1,h10,h3,h12,s7,c1,c5,s3,c3,s8,d12,s6,h2,d8,s10,d11,s11,h9,c13,s1,d7,d13,h6,c4,d5,h8  
**93/1000: solving: solved in 46449 tries.**  
c8>c10,c6>c8,h4>s4,h13>s13,h13>h4,h5>h13,d9>d10,s5>s9,d2>c2,d2>d9,d6>d2,d4>d6,d3>d4,c12>c7,c12>s12,c12>c11,c9>c12,h1>h11,h10>h1,h3>h10,h3>d3,h3>h7,h12>h3,c5>c1,c5>s5,c5>c6,c9>c5,s3>s7,c3>s3,c3>c9,s10>s6,d8>d12,d11>d8,s11>d11,s10>s11,h2>h12,h2>s2,s1>s10,d13>d7,h8>h6,h8>h9,h8>h2,h8>h5,s8>h8,s1>s8,d1>s1,c4>c3,c13>c4,d13>c13,d13>d1,d5>d13,

c6,h12,d1,d13,c7,s6,c5,s4,c11,h9,h11,s8,c3,h3,d9,d12,c4,d8,s1,s12,h4,h8,d11,s11,s7,c1,h7,c2,h5,d2,s13,s3,h1,h2,d5,d3,s2,d4,c10,h6,c12,d10,c9,c8,s10,s5,d7,c13,h10,s9,d6,h13  
**94/1000: solving: solved in 3042 tries.**  
d13>d1,c7>c6,h11>h9,h11>c11,h3>c3,d12>d9,s12>s1,s12>d12,h8>h4,h8>d8,h8>h3,h8>s8,h8>h11,c4>s4,c4>c5,s12>s6,s11>d11,s11>s12,s7>s11,s7>c7,h8>h12,c1>c4,h7>h8,h7>s7,c2>c1,h5>h7,d2>c2,d2>d13,s3>s13,h1>h5,h2>h1,d2>h2,d3>d5,d3>s3,d4>d2,d3>d4,s10>d10,c13>c8,c13>c12,s10>c10,c9>c13,s9>s5,s9>c9,s9>s2,s10>s9,h10>s10,d7>d3,d6>d7,h6>h10,h6>d6,h13>h6,

s6,s9,c11,d9,d13,c3,d2,h12,c7,s8,c8,d7,h1,h5,d12,h11,s7,s12,h4,c10,s13,d10,s10,h2,h10,c5,d11,s11,c2,s4,d3,c6,h6,h7,d5,s1,s3,h8,c4,h13,d8,s2,c9,d6,h9,d4,c12,c13,c1,s5,h3,d1  
**95/1000: solving: solved in 72984 tries.**  
s9>s6,d13>d9,c7>c3,c8>s8,c8>c7,h5>h1,d12>h12,d12>d2,d7>d12,h11>h5,s12>s7,s13>s12,d10>c10,s10>d10,h10>h2,h10>s10,h10>h4,s11>d11,s11>s13,s11>h11,c2>c5,s4>s11,h6>c6,h6>h10,h7>h6,s3>s1,d8>h8,d8>d3,d5>d8,c9>c4,c9>c2,h9>h13,d4>d6,c13>c12,c1>c13,s5>s2,s5>d5,s5>s4,s3>s5,h3>h9,h3>s3,h7>h3,c9>c8,c9>s9,c11>c9,d4>d13,d7>d4,c1>c11,d1>c1,d7>d1,h7>d7,

h11,d11,h2,s8,c12,c10,d10,s11,d7,s9,h7,d4,c7,h12,h10,c4,s13,d2,d8,d9,c6,c2,h13,s10,c13,h4,c11,d5,s12,c9,h9,h5,c3,d6,s5,s6,s4,h1,d12,h6,c8,d1,h3,c5,d3,c1,h8,s3,s2,s7,d13,s1  
**96/1000: solving: solved in 34758 tries.**  
d11>h11,c10>c12,d10>c10,d10>d11,s11>s8,d7>d10,s9>s11,h7>d7,h2>h7,h10>h12,c4>d4,c7>c4,h10>h2,d8>d2,d9>d8,d9>s9,c2>c6,s10>s13,s10>h10,c2>c7,c13>h13,c13>c2,c9>c11,c9>d9,c13>c9,h9>h4,h5>h9,d5>h5,s12>s10,s5>d5,s6>d6,s4>s6,c5>c8,d1>d12,c1>c5,c1>h1,d1>c1,h8>h6,h3>h8,h3>c3,s3>s4,s3>h3,s7>s2,d13>d1,d13>c13,d3>d13,s3>s5,s3>d3,s3>s12,s7>s3,s1>s7,

c2,c12,d13,s10,s5,h13,d3,s9,c9,h9,c8,s13,d11,d4,c5,h12,c11,s8,d10,h3,d9,d1,h11,d7,s3,s6,c6,h7,c1,d6,h10,d12,d5,d2,s2,c7,h5,c3,s12,c10,h6,s7,c4,h4,h8,s11,h1,d8,s4,s1,c13,h2  
**97/1000: solving: solved in 5204 tries.**  
c12>c2,s5>s10,d3>d13,c9>s9,h9>c9,h9>h13,s13>s5,d4>d11,d1>d9,s6>s3,c6>s6,h7>h11,d7>h7,d7>d1,c1>c6,d5>d12,d2>d5,s2>d2,h5>h10,c3>c7,s7>s12,s1>h1,s4>s11,s4>c4,s4>s7,h4>s4,h4>h5,c10>c3,h6>h4,h6>d6,h8>h6,h8>h3,s1>c1,s2>s1,d8>d7,d8>s8,d10>d8,h8>h12,h8>c8,h8>h9,d10>d4,d10>d3,c10>c5,c10>d10,c10>c12,c11>c10,h2>h8,s2>h2,c13>c11,s13>c13,s2>s13,

h1,h11,s8,c1,s10,h6,d13,d2,c7,d6,h2,c8,s4,c12,c10,h12,d3,s1,h5,c3,h10,c4,s2,c2,d10,s13,d5,h9,s7,d11,s3,s11,d1,h13,s6,s12,c11,c5,d7,s9,c13,d12,h8,s5,h4,d4,h7,d9,h3,c9,c6,d8  
**98/1000: solving: solved in 83386 tries.**  
h11>h1,d2>d13,d6>h6,d2>d6,c7>c1,h2>d2,c8>c7,c8>s8,h2>h11,s4>s10,c10>c12,h5>h12,c2>s2,c2>c4,s7>s13,s11>s3,s11>d11,s11>s7,s12>s6,c5>c11,s9>s12,s9>h9,c13>h13,c5>c13,d12>d7,s5>c5,s5>d5,s5>s11,s9>s5,d12>d10,h4>h8,d4>h4,d4>d12,d9>s9,d9>d4,d1>d9,h7>h10,h3>h7,h3>c3,h3>h5,d3>h3,c2>c10,s1>s4,c2>h2,d1>d3,d1>s1,c9>c2,c6>c9,c8>c6,d8>d1,d8>c8,

d11,s3,s5,s4,d13,h6,c9,d10,c2,h11,d7,s12,h5,c7,d8,d1,s1,h8,c10,s2,d2,d12,d3,c1,h1,h7,c4,c8,d4,h13,c5,c12,s8,h12,s6,c13,d6,d9,c3,s7,s11,d5,s9,h9,h2,s10,s13,c6,h4,h10,c11,h3  
**99/1000: solving: solved in 10229 tries.**  
s5>s3,s4>s5,d10>d13,c2>c9,h5>h11,d8>d7,d1>d8,s1>d1,s12>s1,c7>c2,s2>s12,d2>s2,d12>d2,d3>d12,c1>c10,h1>c1,h1>h8,h7>h1,h7>c7,h7>h6,h5>h7,c8>c4,c5>c8,c12>c5,d9>d6,s11>s7,d5>d9,s9>s11,h2>h9,s13>s9,s13>c13,s13>s6,s13>h13,s8>s13,d5>d4,d5>h5,d5>d10,d3>d5,c3>c12,s10>s8,s10>s4,h2>h12,h10>h2,h10>s10,c3>d3,h4>h10,c11>c6,h3>h4,c3>h3,c11>c3,c11>d11,

s11,s7,s9,d9,c4,c12,c8,d6,c9,c2,s2,s5,h3,d5,s13,h1,h9,h12,s10,d8,d7,d10,s12,h4,d4,d3,h2,h10,h13,c10,d1,h11,s3,c3,c5,d11,d2,d12,h8,h5,s1,d13,c6,s6,s8,s4,h7,c13,c1,h6,c7,c11  
**100/1000: solving: solved in 4482 tries.**  
s7>s11,s9>s7,d9>s9,c12>c4,c8>c12,c9>d9,c8>c9,s2>c2,s5>s2,d5>d6,s5>d5,h9>h1,h12>h9,d7>d8,d10>d7,d10>s10,s12>s13,h12>s12,h12>h3,d4>h4,d4>d10,d3>d4,h10>h2,h13>h10,d1>d3,c3>s3,c5>c3,d2>d11,d12>d2,h8>h11,h5>h8,c5>h5,c5>c10,d12>d1,d12>h12,c5>s5,c5>c8,d13>d12,h13>d13,s8>s1,s4>s8,c6>c5,s6>s4,c13>h13,c13>c6,h6>s6,h7>h6,c7>c1,c7>h7,c7>c13,c11>c7,

h12,d12,d11,d10,s10,c8,c11,s3,d6,c3,c5,c13,h1,h7,h9,c1,d5,h8,s1,h10,d7,h11,s11,s5,d13,s7,h2,h3,h4,c9,d1,d2,d3,h6,s9,c6,c4,s13,s4,s12,c7,c10,s6,d8,c2,c12,d4,s8,h5,d9,h13,s2  
**101/1000: solving: solved in 41200 tries.**  
d12>h12,d11>d12,d10>d11,s10>d10,c11>c8,c3>c11,s3>c3,s3>s10,c13>c5,h7>h1,h9>h7,h8>h9,d7>d5,h11>h10,s11>h11,s11>s1,s5>s11,s7>d7,s5>s7,h3>h2,h4>h3,d1>d13,d2>d1,d3>d2,c6>c9,h6>c6,h6>h4,s9>s5,c10>c7,s6>s4,s6>h6,s12>s6,c12>c10,c12>s12,c12>c1,s13>s9,c4>c12,d9>d4,d9>d3,d8>d9,c2>c4,h13>h5,h13>s13,h13>c13,h8>h13,d8>d6,s8>d8,s2>c2,s2>s3,s8>s2,h8>s8,

h11,c12,c3,s4,s6,s1,h2,h3,c8,c11,d13,s5,s10,c1,h6,c13,s9,h7,h5,d5,h13,d10,d2,h4,c2,d7,c7,c9,s12,c10,s8,c6,h8,h12,c4,h10,h1,c5,d12,d11,s7,d3,d1,s13,s3,h9,d9,d4,d8,d6,s2,s11  
**102/1000: solving: solved in 590179 tries.**  
c3>c12,s6>s4,s1>s6,h2>h11,h3>h2,c3>h3,c11>c8,s5>s1,s10>s5,c13>d13,c13>c11,c1>c13,s9>s10,h7>h6,h5>h7,d5>h5,d2>d10,d7>d2,c7>c2,c9>c7,c4>c6,h12>h8,h10>h12,h10>c10,h10>h4,c4>c9,s8>s12,h1>h10,d11>d12,d1>d11,s7>s8,s7>d7,d1>h1,d3>d1,d3>d5,d3>c3,s13>s7,s13>h13,s3>s13,c5>c1,s3>d3,c4>c5,d4>c4,d8>d4,d6>d8,d9>h9,d9>d6,s2>s3,s11>s2,s9>s11,d9>s9,

d1,s13,s5,c8,c2,s12,d13,c6,h12,h7,h5,h8,d3,s3,s4,h6,h1,s11,c9,d11,h2,d8,c3,c7,s6,h13,s1,h11,h3,h9,d5,s9,d7,s8,c4,c1,d12,c10,h10,s10,d2,c12,s7,s2,c5,d9,d6,c11,c13,d4,d10,h4  
**103/1000: solving: solved in 303521 tries.**  
s5>s13,c2>c8,c6>c2,h7>h12,h5>h7,h8>h5,s3>d3,s3>s12,s4>s3,h6>h8,h6>c6,h1>h6,d11>d13,s11>d11,s11>s4,h2>h1,c7>c3,h3>h11,h9>h3,s9>s1,h9>s9,h9>h13,d7>d5,d7>c7,d7>d8,s6>s11,c1>c4,s10>h10,s7>s10,s2>s7,d9>d2,d9>d12,d9>h9,d9>d7,d9>c9,c12>c1,c5>c12,s2>s8,s2>h2,s2>s5,s6>s2,c11>c5,c13>c11,c10>c13,d4>d9,d6>s6,d10>c10,d10>d1,d6>d10,d4>d6,h4>d4,

s8,h8,h5,h10,d8,s12,s10,s9,h11,d4,s13,h9,s4,d1,h6,c5,h1,d5,c10,s11,d9,s5,s1,d7,d3,h13,s3,h7,s2,s7,c7,h2,c4,d10,h12,d2,c11,c12,h3,c2,c9,d6,c13,c6,s6,d13,h4,d12,c8,c1,c3,d11  
**104/1000: solving: solved in 18262 tries.**  
h8>s8,h5>h8,h10>h5,s10>s12,s9>s10,h11>h10,h9>s9,s4>s13,s4>d4,d1>d8,c10>c5,s5>d5,s11>s5,s1>h1,s1>s4,s11>s1,s11>h11,h6>h9,d9>d1,d7>d9,d3>d7,s7>s2,s7>h7,s7>s3,c7>s7,h12>h2,d2>d10,c12>c11,c12>h12,c12>c7,c4>c12,h3>h13,h3>d3,h6>h3,c4>c10,c9>c2,d13>c13,c6>c9,c1>c8,d11>d12,d11>d13,d11>d2,c6>h6,d11>s11,d6>d11,s6>d6,c6>s6,c1>c6,c3>c1,c4>c3,h4>c4,

h8,h3,c6,d5,c7,h12,h10,h5,d6,d13,d10,c1,c5,d12,s13,s5,d9,s7,c10,d8,c8,h11,c13,h7,d7,h4,s11,s6,s4,s8,d11,d1,d2,s3,h9,h6,c2,h13,c11,h1,c12,c4,s1,c9,s10,s2,d4,s9,s12,c3,d3,h2  
**105/1000: solving: solved in 11321 tries.**  
h3>h8,h10>h12,h5>h10,d6>d5,d6>c6,h5>h3,d10>d13,c5>c1,s5>s13,d8>d9,c8>c10,d7>h7,h4>h11,s6>s11,s4>s6,s4>h4,s8>s4,s8>c8,s8>s7,s8>d8,s8>s5,c13>c5,d11>d7,d1>d11,d2>d1,h6>h9,c2>d2,c2>c13,s3>s8,h13>h6,s1>h1,s1>s3,c12>c11,c12>d12,c4>c12,s10>s1,s10>d10,c4>c7,s9>c9,d3>d4,s12>s9,s12>s10,s2>s12,c2>s2,c2>c4,d3>d6,c3>d3,c2>c3,h2>h13,h2>c2,h2>h5,

c11,h5,h7,h12,d5,s6,c5,d1,s2,d9,s11,h11,s5,c12,h13,s3,h2,c6,s13,s9,c9,c1,h10,h3,c4,d10,d13,d3,h8,d2,s10,s7,h4,h6,h9,c10,d8,h1,s12,d4,d12,d7,d11,s8,c2,s4,c7,c8,d6,s1,c3,c13  
**106/1000: solving: solved in 66231 tries.**  
h7>h5,h12>h7,d1>d5,h11>s11,s5>s2,s5>c5,s5>s6,s13>s3,s13>h13,h2>h11,c9>s9,c9>c6,c1>c9,h3>h10,d13>d10,d3>d13,h8>h3,d2>d3,s7>s10,h4>c4,h4>h8,h6>h4,h9>h6,d8>d2,s12>s7,d12>d4,d12>s12,d12>d8,h1>h9,h1>c1,h1>h2,h1>d1,h1>h12,d11>d12,c10>c12,d11>d9,d7>d11,c8>c2,s1>s4,s1>s13,s1>s5,s1>h1,s8>s1,c8>s8,c3>c10,c13>c3,c7>c8,c13>c11,c7>c13,d7>c7,d6>d7,

d11,s7,h10,h6,s11,d1,d9,h7,c11,c9,c7,h13,c6,h4,h12,s8,s10,h3,h11,d10,s4,s5,s9,s12,d8,h2,h8,h1,c4,s6,s2,d7,d2,c1,s3,d13,h5,c12,d4,c3,c10,c13,c8,s1,c5,d12,c2,d6,s13,h9,d3,d5  
**107/1000: solving: solved in 158604 tries.**  
h6>h10,s11>d11,s7>s11,d9>d1,h7>s7,h6>h7,c9>c11,c9>d9,c7>c9,c6>h6,c7>c6,h4>h13,h12>h4,s10>s8,h11>h3,s4>s10,s5>s4,s9>s5,s12>s9,s12>h12,d8>d10,h8>h2,h8>d8,h8>h11,h1>h8,c4>c7,s2>s6,d2>d7,d2>s2,d13>d2,c12>c1,c8>c3,c10>c8,c13>c10,d3>d6,d5>d3,d5>c5,d5>d4,d5>h5,d12>d5,d12>d13,c12>d12,s3>s12,c2>c12,c2>c4,s1>s3,c13>c2,s13>c13,s1>s13,h1>s1,h9>h1,

c3,d4,h1,h13,h5,s4,c13,h7,h10,s2,c11,c5,d11,h8,d9,h3,c9,h12,c4,s8,d2,c10,c12,h9,s3,s7,c8,c6,s10,d6,s13,h2,c2,s6,s5,s12,d7,s1,d12,s11,c1,d3,h6,d8,s9,d10,d13,c7,d1,h4,d5,h11  
**108/1000: solving: solved in 138278 tries.**  
h13>h1,h5>h13,h7>h5,h10>h7,c5>c11,c10>c4,c12>c10,c12>h12,c12>c9,s3>s8,s7>s3,c6>c8,c2>h2,s6>d6,s6>s10,s6>c6,s6>s7,s13>s6,s12>s5,c1>s1,d12>s12,d12>d2,d3>d7,d3>d12,d3>h3,d3>d11,c2>c12,h9>d9,h9>h8,c2>c5,c2>s2,s9>s11,s9>h9,s13>s9,c1>c2,d8>d3,d10>d8,d13>d10,s13>d13,s13>s4,c13>s13,c7>c13,c7>c3,c1>c7,h6>h10,d1>c1,h4>h6,d5>d1,d4>d5,h4>d4,h11>h4,

c6,s5,d1,h6,c7,d9,h3,h7,c3,c13,d5,s7,d11,h1,d8,d3,d10,c9,d2,h8,c1,c4,h9,s13,h4,c12,h11,c8,d13,c11,s9,s1,c5,d7,s10,s8,s11,d4,s4,s12,d12,h2,c10,c2,s3,h5,d6,h12,s2,h13,s6,h10  
**109/1000: solving: solved in 7166 tries.**  
h6>c6,h7>h3,c3>c7,c13>c3,d3>d8,d10>d3,c1>c9,c4>c1,h9>h8,c11>h11,c11>c12,c8>c11,d13>s13,s1>s9,s10>s1,s8>s10,s8>c8,s11>s8,d4>d7,d4>h4,d4>d13,d4>c4,d4>d10,d2>d4,s12>s4,d12>s12,c10>c5,c2>c10,c2>d2,h2>h9,h2>c2,h2>h1,s11>s7,d11>s11,h2>h7,d11>d9,h5>d5,d12>d11,s2>s3,h10>h12,h10>h5,h13>h10,h13>c13,h13>h6,d12>d1,h2>h13,s2>h2,s5>s2,d6>d12,s6>d6,s6>s5,

s10,c9,s12,h2,c2,h1,c8,d2,d5,d6,s8,s9,h13,d4,s1,d10,s11,h6,h10,s2,c12,c4,d12,h8,h4,h3,h5,d9,h9,d13,c13,d7,h7,c5,h11,c6,s7,c3,s5,s4,c10,c11,s3,d1,d3,d11,d8,c1,c7,h12,s13,s6  
**110/1000: solving: solved in 10531 tries.**  
c2>h2,d2>c2,d5>d2,d6>d5,s8>c8,s8>s12,s9>s8,s9>c9,s9>s10,h13>h1,h10>h6,c4>c12,h4>h8,h3>h4,h5>h3,h9>d9,h9>h5,c13>d13,c13>c4,h7>d7,h7>h9,c5>c13,h11>h7,c6>c5,s4>s5,c11>c10,s3>c3,s4>s3,d11>d3,c1>d1,c7>c1,c7>s7,c7>c6,d11>h11,d11>d12,c11>c7,c11>s11,d11>c11,s4>s2,d8>d11,d8>d4,s6>s4,s6>s1,s6>d6,s6>s9,d10>d8,h10>d10,h12>h10,s13>s6,h13>s13,h12>h13,

s2,c11,h5,c7,d2,c6,c4,d1,h8,d9,s8,h11,s13,d13,h9,h1,h3,s5,s7,h10,h2,c1,c13,c9,s11,c3,d11,h13,s9,s3,s6,s12,c5,d6,c2,c8,c12,h4,d12,d4,s4,d3,d5,h12,h7,d10,s10,h6,s1,c10,d8,d7  
**111/1000: solving: solved in 5381 tries.**  
c4>c6,h11>h8,s13>s8,d13>s13,d13>d9,h1>h9,h1>d1,h11>h1,d13>d2,h3>h11,s7>s5,h2>h10,c13>c1,c9>c13,s11>s7,c3>c9,c3>h3,c3>c4,s3>s9,s6>s3,s12>s6,c8>c2,c12>c8,c12>s12,c5>c12,d6>d11,d4>d12,d4>h4,s4>d4,d5>d3,d10>d5,h6>h12,s10>d10,s10>s4,h6>h13,h6>d6,h6>h2,h7>h6,c5>c3,c5>h5,c5>c11,c7>c5,s1>s11,s1>s2,d7>d8,d7>h7,d7>d13,s10>s1,c10>s10,c7>c10,d7>c7,

d13,s12,d10,c13,d3,s7,c11,c1,d7,c3,h3,h11,h1,d5,c5,d8,d12,s3,h8,d2,d4,h13,s8,c10,h4,c8,h7,c9,h10,s5,h2,s13,c2,c4,h5,s4,s11,d11,d1,h6,s6,s10,h12,d9,s1,s2,s9,c6,h9,d6,c7,c12  
**112/1000: solving: solved in 1515 tries.**  
c13>d13,d3>d10,c1>c11,d7>d3,s7>d7,s7>s12,c3>c1,h3>c3,h11>h3,h1>h11,c5>d5,c5>c13,d12>d8,s3>s7,d4>d2,s8>h8,s8>s3,d4>d12,h4>d4,h4>h1,h13>h4,c10>c5,c8>c10,s8>c8,h7>h13,c4>c2,h5>h2,h5>s5,h5>h10,c4>c9,s4>s13,s11>s4,d11>s11,d1>d11,s6>h6,s10>s6,h12>h5,s1>d1,s9>s10,s2>s1,d6>d9,c6>d6,c12>c6,c12>h12,c12>c4,s2>s8,s9>s2,h9>s9,h7>h9,c7>c12,c7>h7,

s7,s5,s13,h7,d10,h6,c3,s4,d4,h13,d8,s6,h1,c4,s2,c2,h10,s1,d1,h12,d11,c5,s3,c6,d2,h5,h11,s8,s12,c11,s10,h3,d5,c13,h4,d12,d3,c8,h2,h8,c10,d13,c9,c7,s9,s11,d6,d7,h9,c1,c12,d9  
**113/1000: solving: solved in 86957 tries.**  
s5>s7,s13>s5,d4>s4,d4>d10,h1>h13,c2>s2,c2>c4,s1>s6,d1>s1,d1>d8,d1>h1,d1>d4,c2>c3,h12>h10,c5>c2,d2>d11,h11>h5,s8>s3,s12>s8,c11>h11,c11>c6,h4>h3,d3>d12,c10>c8,h8>h2,c9>c10,d13>d3,d13>c13,d13>d5,s9>c9,h8>h4,s9>s10,d6>d13,d7>d6,c7>d7,c1>c7,c12>c1,c12>c11,c12>h12,c12>c5,d2>d1,s12>c12,s11>s12,h8>h6,h9>h8,s9>s11,d9>d2,h9>d9,h9>h7,s9>h9,s9>s13,

h9,h1,s12,h8,c5,d11,h4,s5,h6,c2,c1,s11,d6,d4,d9,s9,d13,h3,c12,h11,s7,s3,s4,h10,c9,d3,s10,c4,h13,d5,d1,h2,d12,s8,c10,c3,s6,c7,s2,d2,d8,c13,c8,h7,c6,s1,d10,s13,h5,h12,d7,c11  
**114/1000: solving: solved in 27851 tries.**  
h1>h9,h4>h8,c1>c2,s11>s5,s11>d11,s11>s12,d4>d6,d9>d4,s9>d9,s3>s7,s3>h3,s4>s3,h10>h11,s10>h10,d5>d3,d1>d5,h2>h13,d12>d1,d12>c12,c4>c9,c4>s4,c4>c1,c4>h4,c5>c4,h6>h1,d12>d13,c10>s10,c10>c5,s8>s9,d8>d2,c6>c13,c6>c7,c6>s6,c6>c3,c8>c6,c8>s8,c8>c10,h12>h5,d7>d10,d7>d8,h7>d7,h12>h7,h12>d12,h12>h6,h2>h12,s2>h2,s1>s2,s13>s1,s11>s13,c11>c8,c11>s11,

c12,s9,s12,d11,s10,s2,c4,d3,c10,s13,s3,c1,s5,d10,s8,h11,d5,c3,c2,s11,c11,d6,c7,h5,d1,s1,h8,h3,d9,h13,s4,h12,h2,h1,c13,c5,h9,c8,d8,s6,h10,h4,c9,d12,d2,d7,d4,d13,h7,c6,h6,s7  
**115/1000: solving: solved in 2532 tries.**  
s12>s9,s12>c12,s2>s10,d3>d11,c10>c4,s3>s13,s3>d3,s3>s12,s2>s3,c1>c10,d5>d10,d5>s5,s8>s2,c3>c1,c2>c3,s11>h11,s11>s8,c11>s11,c2>c11,d6>d5,d1>d6,s1>d1,h8>h5,h3>h8,h2>h12,h1>h2,c13>h13,c13>c7,h1>h3,h9>d9,h9>h1,s4>s1,c8>c5,d8>c8,h10>h9,h4>h10,d4>d12,d4>d8,d4>h4,s6>s4,d7>d2,d13>d4,d13>c13,c9>c2,d7>d13,h7>d7,c6>c9,s6>c6,s7>s6,h7>s7,h6>h7,

c1,c2,c11,s2,s1,c10,h2,h3,c12,c8,d5,d7,d4,h11,d2,s13,d9,d1,c5,s9,d10,s10,d11,h9,h1,s4,h12,c13,h5,c3,s6,c7,h8,h13,d12,d3,d13,h4,d6,s11,s12,c6,c9,d8,s5,s3,h7,s7,c4,h6,h10,s8  
**116/1000: solving: solved in 4600 tries.**  
c2>c1,c11>c2,s1>s2,h3>h2,c8>c12,d7>d5,d4>d7,h11>h3,h11>c11,c8>c10,d2>d4,s13>s1,d9>d2,d1>d9,d10>d1,s10>s9,d11>d10,d11>h11,c5>c8,h1>h9,h13>h8,d3>d12,d13>d3,d13>h13,c6>d6,c6>c7,c6>s6,c6>c3,d13>c13,s12>s11,s5>s12,s5>h5,s5>s4,s5>c5,s5>s13,s10>s5,h12>h1,h4>h12,d8>d13,s7>h7,c4>c9,c4>h4,d8>d11,c6>c4,s7>s3,s8>s7,s8>d8,s10>s8,h6>c6,h10>h6,h10>s10,

c3,c13,s8,s4,s13,s10,d11,s7,s6,c7,d12,h1,c11,c8,h7,s9,c9,h3,c4,h9,h8,c5,h4,h6,d8,c6,c12,s2,s12,h10,d5,s5,h5,h12,c2,d3,d2,c1,s11,h13,s3,d9,d10,h11,d6,d1,d4,c10,h2,d13,s1,d7  
**117/1000: solving: solved in 11340 tries.**  
c13>c3,s4>s8,s13>s4,s13>c13,s10>s13,s6>s7,d12>d11,c8>c11,h7>c7,h1>h7,s9>s6,c9>c8,h9>c9,h9>h1,h9>s9,h3>h9,h4>c4,h4>h3,h8>h4,d8>h8,d8>d12,c6>h6,c6>c5,c12>c6,s2>s10,s12>c12,d5>d8,s5>d5,s5>s2,s12>s5,h5>h10,h12>h5,h12>s12,d6>d9,d1>d6,d13>d4,h2>h11,d7>d13,d7>d1,d10>d7,h2>h13,h2>d2,h2>h12,c2>h2,s3>s11,d10>d3,c10>d10,c10>c2,c1>c10,s1>s3,s1>c1,

d3,d8,c2,s12,s4,c12,h13,c6,s5,s3,c13,d10,h5,c7,s6,h1,h10,c11,d1,h9,h4,h11,h2,c10,h8,h12,d5,s1,d12,d7,h6,s8,s10,h3,s11,s2,c5,c9,d11,d6,c4,d4,s13,d13,c1,d9,c3,s9,c8,s7,h7,d2  
**118/1000: solving: solved in 19140 tries.**  
d8>d3,s4>s12,s3>s5,c13>h13,c13>c12,c6>c13,h1>h5,h10>h1,h10>d10,c7>c6,h4>h9,h11>h4,h2>h11,c10>c11,h8>h2,h12>h8,s1>d1,d12>d5,d12>h12,d7>d12,s8>s1,s10>s8,s10>c10,s10>s6,s10>h10,s10>s3,h3>h6,s11>s10,s2>s11,s2>c2,s4>s2,d7>c7,c9>c5,d6>d11,d4>c4,d4>d6,d13>s13,d13>d4,d9>c9,c8>c1,c3>c8,s9>d9,s7>s9,s7>s4,d7>s7,d2>d13,d2>d8,d7>d2,h7>d7,h3>h7,c3>h3,

d4,d8,h2,s5,d3,s1,d10,c12,h11,s6,h8,d1,s4,d6,h9,h1,d12,d11,c5,c1,c13,s7,h5,c4,h7,s10,c2,s8,c10,d7,c7,s12,s11,s2,h6,d13,h3,s9,c11,c6,s3,h12,d9,d5,c8,c3,h4,d2,c9,h10,s13,h13  
**119/1000: solving: solved in 110818 tries.**  
d8>d4,d3>d8,s1>s5,d10>d3,h11>h2,s4>s6,d6>d1,h1>h9,d11>d12,c1>c5,c13>c1,c4>c13,h7>h5,h7>s7,h7>h1,c10>s10,c10>c4,c2>c10,d7>d11,d7>h7,d7>d6,s8>h8,s8>s4,c2>c12,c7>d7,s11>s12,s2>s11,s2>c2,s2>s1,c6>c11,s3>h3,s9>s3,d9>s9,d9>d13,c8>c6,h12>h6,c8>c7,c8>s8,h12>h11,h10>h4,c9>c3,c9>c8,d9>c9,d9>d10,h13>h10,h13>h12,d5>d9,s13>h13,s2>s13,d2>s2,d2>d5,

s4,c3,d10,s11,s5,h9,s2,c1,h12,c10,h8,d12,h10,h3,c6,c5,h13,s10,d13,h11,s6,d8,h7,h4,c12,d1,c7,s7,d5,c13,c9,c11,d11,s3,d6,s9,s13,h6,c4,d4,c8,s8,d7,h2,d3,d2,c2,h1,s12,h5,d9,s1  
**120/1000: solving: solved in 9118 tries.**  
s11>s4,s5>s11,h12>h9,c10>c1,c10>d10,c10>c3,s2>s5,h8>h12,h10>c10,h8>h10,c5>c6,h11>h13,h4>h7,d1>d8,c7>c12,s7>c7,s7>s6,c9>c13,c11>c9,d11>c11,d11>d5,s13>s9,d4>c4,d4>d6,d4>h4,d4>d1,d11>d4,s13>s3,s13>d13,s13>s10,s7>s13,h6>h11,s8>s7,d2>d7,h2>d2,c2>c8,d3>d11,h2>c2,h5>h2,h5>h6,h5>c5,h5>h3,d9>d3,h1>h5,s8>h8,s1>h1,s1>s2,s8>s1,s12>s8,d12>s12,d9>d12,

c13,s13,d8,c2,d11,h2,c6,d2,h5,s1,c10,s11,s6,d5,d9,h6,h4,d10,h3,h10,h8,s10,c4,h13,d12,c5,c9,s5,c11,d13,c7,s12,d3,c1,c12,h11,s2,s3,s7,d4,c3,s8,d1,h1,d7,h9,h7,h12,c8,s9,s4,d6  
**121/1000: solving: solved in 5367 tries.**  
s13>c13,c6>c2,d2>h2,d2>d11,s6>s11,d9>d5,h4>h6,h10>h3,h10>d10,h10>h4,h10>c10,h8>h10,c5>c4,c9>c5,d13>d12,d13>h13,d13>d9,c7>c11,c1>c7,c12>c1,s12>c12,s12>s5,s2>s12,s3>s2,d3>s3,d3>d13,s7>s10,c3>c9,h1>d1,d7>d4,h1>h11,h7>d7,h7>h1,h12>h7,s8>s7,s8>h8,s8>s1,s6>s8,d3>d2,h12>h5,h9>h12,c3>d3,c3>c6,s9>h9,s4>s9,s4>s13,s6>s4,c8>c3,d6>s6,d8>d6,c8>d8,

d8,c3,c6,c13,d10,d7,c7,c2,s7,s11,h6,s6,d5,h8,h11,s4,s12,d12,d1,s8,h9,s5,c10,h7,d3,d2,h1,h4,c8,s13,d6,h13,h10,c1,s3,c5,h12,d11,d4,c11,c4,s9,h3,s2,c12,h2,d13,s10,c9,h5,s1,d9  
**122/1000: solving: solved in 84283 tries.**  
c6>c3,c13>c6,d7>d10,c7>d7,c7>c13,c2>c7,s11>s7,s6>h6,s6>s11,d5>d8,h11>h8,s12>s4,d12>s12,d1>d12,s8>s6,h7>h9,d2>d3,h4>h1,c8>c10,d6>d2,h13>s13,h13>h4,h10>h13,c1>c8,c1>d1,c1>c2,h7>h11,h10>h7,c5>s5,c5>c1,c5>d5,d11>d6,s3>s8,c11>d11,h2>h3,s2>h2,c12>c4,c12>c11,c12>c5,d13>d4,s10>s2,d9>c9,d9>d13,s9>d9,s1>s9,s1>s3,s10>s1,h10>s10,h12>h10,h12>c12,h5>h12,

h10,s11,d12,s9,h12,c5,d7,h1,h6,c8,d10,h9,d11,d6,d8,d4,h8,h5,c2,h2,s10,c10,c7,s12,s3,d1,s4,s8,s1,s13,h4,c12,c9,s2,d3,h3,d13,h13,d2,s5,d5,c13,c6,h7,c1,h11,s6,c11,d9,c4,c3,s7  
**123/1000: solving: solved in 62642 tries.**  
h1>h12,h6>h1,d6>d11,d8>d6,d8>c8,d8>d7,d10>d8,h9>h6,h9>s9,h9>h10,d4>d10,h5>h8,c2>c5,h2>h5,c10>s10,c10>c2,c7>c10,s3>s12,d1>d4,s4>s3,s8>s4,s1>s8,s13>s1,c9>c12,s2>s13,s2>h2,h3>d3,h13>d13,d5>s5,c11>c1,c11>c13,h11>c11,h11>h13,d5>d2,h7>h11,h7>h4,h7>c7,h7>h9,s2>s11,d1>d12,d9>d5,d9>d1,c9>d9,c3>c4,c3>h3,c3>c9,c6>c3,s6>c6,s6>s2,s7>s6,s7>h7,

s13,h8,h12,s2,s11,c9,d2,h7,d10,d13,s4,c2,c13,h13,h4,h9,s6,d6,d4,d11,d12,d7,c10,c11,h5,s5,d3,h3,s10,d9,h2,d8,c3,c6,c12,h11,c5,s8,c8,s1,s3,c7,s9,h10,h1,s7,h6,s12,c1,d5,d1,c4  
**124/1000: solving: solved in 517 tries.**  
h12>h8,s11>s2,d13>d10,c13>c2,h13>c13,h13>h7,d13>h13,d13>d2,s4>s11,h4>s4,h4>h12,d13>s13,h9>c9,h9>h4,d6>s6,d4>d6,d11>d4,d12>d11,d7>d12,c11>c10,h5>h9,s5>h5,h3>d3,h2>h3,d8>d9,c6>c3,c12>c6,c8>s8,c8>c5,c8>d8,c8>c11,c12>c8,s3>s1,h1>h10,s7>c7,s7>s10,s7>d7,s7>s5,h11>h2,s3>s7,h6>h11,s9>s3,h1>h6,s12>s9,c12>s12,c1>h1,d5>d13,d1>d5,c1>c12,c1>d1,c4>c1,

h3,s1,s7,h7,h6,d11,s9,d9,s8,h8,c8,s11,s12,c9,c11,h5,c4,c5,d8,d12,h11,d2,h12,s5,s3,d7,s13,d6,d13,d5,d10,c1,s4,c13,h2,h10,s2,s10,c3,c12,c2,s6,h1,h13,d1,c10,h9,c7,h4,c6,d4,d3  
**125/1000: solving: solved in 1469 tries.**  
s7>s1,h7>s7,h7>h3,h6>h7,d9>s9,d9>d11,h8>s8,c8>h8,s12>s11,c9>d9,c8>c9,c5>c4,c5>h5,c5>c11,d8>c8,d12>d8,s12>d12,h11>h6,h12>s12,h12>h11,s3>s5,d13>d6,d13>s13,d13>d7,d5>d13,d5>c5,d2>d5,s4>s3,c13>c1,h10>h2,s10>s2,s10>h10,s10>s4,d10>s10,d10>d2,c3>c13,c12>h12,c2>c12,h13>h1,h9>h13,c7>c10,h4>h9,c6>c7,c6>s6,d4>d1,d4>h4,d4>d10,d3>d4,c3>d3,c3>c2,c6>c3,

h2,c9,c12,d5,s3,d12,c7,h6,c8,c6,d8,s9,d6,h5,d10,h11,d7,s2,c4,s12,s8,s5,d1,h8,d13,c2,d3,c5,s4,c13,d2,s10,h10,h1,h9,c3,d11,h7,h3,d4,c1,s6,c10,d9,c11,s1,s11,s7,s13,h13,h4,h12  
**126/1000: solving: solved in 72245 tries.**  
c12>c9,d12>c12,d5>d12,c6>c8,c6>h6,c6>c7,d8>d5,s8>s12,s5>s8,s10>s4,h10>s10,h1>h10,h9>h1,h3>c3,h3>h9,s11>s1,s11>c11,s11>s6,s7>s11,s7>h7,d9>d4,c10>c1,s13>s7,h13>s13,h13>c13,h13>h3,d2>d3,d2>c2,d2>d1,d2>s2,h13>h8,d13>h13,d9>d13,d9>d2,d9>d10,d9>s9,d9>d8,d7>d6,s5>h5,s5>s3,c4>c6,d11>d7,d11>d9,c5>s5,c10>c5,h11>d11,h11>h2,c4>c10,h4>c4,h4>h11,h12>h4,

h12,d9,d7,c6,s2,d12,s10,d10,d13,s3,s13,s1,d4,s5,h6,h3,s11,d5,h1,s12,d8,h10,d3,h11,c12,s7,h4,h7,h5,h8,c5,c11,c1,s9,h2,c9,d2,d11,c3,c13,s4,s6,h13,c10,s8,c2,c7,c8,h9,c4,d1,d6  
**127/1000: solving: solved in 348 tries.**  
d7>d9,d12>d7,d12>h12,s10>s2,d10>s10,d13>d10,s13>s3,s13>d13,s1>s13,d4>d12,s5>s1,h3>h6,d5>s5,h10>h1,d3>d8,h11>h10,h11>s11,h11>h3,d3>d5,c12>s12,c12>c6,h7>h4,h7>s7,h7>h11,h5>h7,h8>h5,c5>c12,c11>c5,c1>c11,d11>d2,c13>c3,s6>s4,c10>c13,c8>s8,c8>c10,h9>h13,c2>c8,c2>h2,c9>c2,c9>s9,d11>d3,h9>h8,c9>h9,c4>c9,c4>d4,d6>s6,d6>d11,c7>c4,c1>c7,d1>d6,d1>c1,

c5,h9,h1,h12,c12,h5,c9,c4,d6,d7,h8,c11,s4,s9,c3,d8,h7,c1,d9,s8,h13,c13,c7,h11,d11,d1,d2,d10,h4,s5,h3,c2,h10,c8,s6,d12,c6,s12,s1,h6,d5,d4,s2,h2,s7,d13,s3,d3,s10,s13,s11,c10  
**128/1000: solving: solved in 4484 tries.**  
h1>h9,h12>h1,c12>h12,c12>c5,c4>c9,d7>d6,h8>h5,s4>c4,s9>s4,c3>c11,h7>d7,s8>d8,s8>s9,s8>h8,c3>c12,c1>c3,c13>h13,c7>c13,h11>h7,d11>h11,d9>d11,c7>c1,d1>d9,d2>d1,d10>d2,s5>s8,h3>h4,h10>d10,h3>h10,c2>c7,c8>c2,s12>s6,d12>s12,d4>d5,s2>s1,d13>d4,h2>s2,h6>h2,d3>d13,d3>d12,d3>h3,s13>s7,s11>s13,s3>s11,s3>d3,s3>s5,s10>s3,c10>s10,c10>c8,c6>c10,h6>c6,

c3,c2,s1,s13,c4,d4,c8,h5,d12,c7,h7,h8,d5,s9,c11,d6,c10,d2,s6,h12,s5,s10,h2,s2,d7,h10,s4,s8,c5,h3,d11,d10,s7,c13,h1,c1,s12,c6,d13,c12,d9,h13,s11,s3,d8,d1,d3,h4,c9,h6,h11,h9  
**129/1000: solving: solved in 14012 tries.**  
c2>c3,s13>s1,d4>c4,c8>c2,h7>c7,h8>h7,d5>h5,d5>d4,d12>d5,h8>c8,d6>d12,c10>c11,d2>d6,s10>s5,s10>c10,s10>s9,s6>s10,h2>h12,s2>h2,s2>s6,s2>d2,s2>s13,h10>h8,s8>s4,d10>d11,c1>h1,c1>c13,c12>s12,c12>c1,c6>c12,d13>d10,s3>s11,d8>d9,d8>d13,d8>s8,d8>d7,c6>c5,d3>d1,h4>h13,h9>c9,h9>h4,h6>h9,h6>c6,h6>h10,s7>s2,d3>d8,s3>s7,d3>s3,h3>d3,h3>h6,h11>h3,

s8,s3,c12,d8,s2,h3,h7,d12,c2,c8,s7,s5,s13,c10,c9,d4,s10,h4,h9,c5,c11,h2,d13,d11,d10,d5,d9,h10,s4,d3,d7,h12,h13,h6,h1,c1,c3,c6,s12,h5,s9,c4,d6,s11,s6,d1,d2,s1,c13,h8,c7,h11  
**130/1000: solving: solved in 17191 tries.**  
s3>s8,s2>s3,h7>h3,d12>c12,d8>d12,c2>s2,c8>c2,d8>c8,s7>h7,s5>s7,s13>s5,c9>c10,d4>d8,h9>h4,c5>c9,c11>c5,h2>h9,d11>d13,d11>c11,d10>d11,s10>d10,s10>s13,d5>d4,d9>d5,h10>h2,h10>s10,d3>d9,d7>d3,h13>h12,h6>h13,h1>h6,c6>c3,s11>s9,d2>d6,s6>s11,s6>c6,s6>s4,d1>d2,s1>d1,s1>s12,s1>s6,h1>s1,h8>h5,c13>c4,h11>h8,h11>h10,h1>h11,c1>h1,c13>c1,c7>c13,c7>d7,

c5,h7,s5,h9,d13,c11,d10,c13,c3,c9,d5,d7,d3,s8,d9,h6,c1,s10,h13,d2,h12,d6,s7,s3,c2,d8,h4,s12,c6,c7,c12,d11,d4,s2,s4,c4,s11,h11,s1,h5,s6,h3,c10,h1,d12,h8,s9,d1,h10,h2,c8,s13  
**131/1000: solving: solved in 14347 tries.**  
c13>d13,c11>c13,c9>c3,c9>h9,c9>c5,c11>c9,d5>d10,d5>s5,d7>d5,d7>h7,d3>d7,h13>h6,s3>s7,d8>d6,s12>s3,c7>c6,c12>c7,c12>s12,c2>c12,c2>d2,d4>d11,d4>h4,d4>d8,s2>c2,s2>s10,h12>h13,s4>d4,s4>s2,c4>s4,c4>c1,h11>h12,s6>s11,s1>s6,h5>h11,c10>c4,d1>d12,d1>s1,h3>h5,h3>d3,h1>d1,h8>h1,h10>c10,h2>h10,h2>h3,h8>h2,s8>h8,s9>d9,c8>c11,s8>c8,s9>s8,s13>s9,

c10,h2,h5,s9,d1,s11,h11,c12,c13,s10,s8,c4,h13,s3,s13,d2,d8,c8,h1,c5,d9,d4,s2,h6,d3,h7,s6,s1,s7,d5,c7,h9,c6,c9,d13,c3,h8,s5,c1,h4,c2,d12,h10,c11,s4,d6,s12,d10,h3,d11,h12,d7  
**132/1000: solving: solved in 1766 tries.**  
h5>h2,h11>s11,h11>h5,c13>c12,s10>s9,s8>s10,c4>c13,s13>s3,s13>h13,s13>s8,d8>d2,c8>d8,c8>c4,d4>d9,d3>d4,h7>h6,s1>s6,s7>s1,s7>h7,s7>s2,d5>c5,d5>d1,d3>d5,c7>s7,c9>c6,c9>h9,c9>c7,c1>c3,c1>h1,c1>c8,c9>c1,d13>s13,d3>d13,c9>c10,c11>c2,d6>d12,s12>s4,h3>h10,h3>h4,h3>d3,h8>h3,s12>s5,d10>d6,d7>d10,d11>d7,h12>s12,h12>h8,c11>c9,d11>c11,h11>d11,h12>h11,

d7,h9,h8,s2,h2,c4,d5,s3,d13,s7,h4,s6,s8,d2,c9,h13,c7,c12,d4,d6,s10,h5,s4,s9,h7,h11,h6,c13,h1,c2,d9,c1,h12,c3,c5,s1,c11,h10,d10,s12,d8,d12,c10,h3,c8,s13,d3,s11,d1,c6,s5,d11  
**133/1000: solving: solved in 38392 tries.**  
h8>h9,h2>s2,h2>h8,d5>d7,s8>s6,c12>c7,d6>d4,s9>s4,h11>h7,h6>h11,c1>h1,c1>c13,c2>c1,d9>s9,d9>d6,d9>c9,d9>d2,h13>h4,s10>s8,h6>h5,h12>c12,h12>h13,h6>h12,c3>c2,c5>c3,s1>s10,c11>c5,d10>h10,d12>d8,c10>d10,d12>s12,d3>h3,c8>c10,d12>d9,d11>d1,d11>d3,d11>d12,c11>d11,s13>s1,s13>d13,s13>s3,s7>s13,c11>c4,s11>s7,h6>h2,c6>c8,c6>h6,c11>c6,s11>c11,s5>s11,s5>d5,

s6,c1,c3,h2,h9,h4,c9,s2,c2,c6,s10,h13,s5,c10,s3,h3,d7,s1,d4,h8,c7,s11,d8,d13,s9,c12,c4,d2,d3,c8,d6,d9,s8,d5,d11,c11,d10,s12,d12,h11,s7,h7,h10,h12,h1,c5,h5,d1,s4,c13,s13,h6  
**134/1000: solving: solved in 70208 tries.**  
c3>c1,h9>h2,h4>h9,c2>s2,c2>c9,c6>c2,c6>s6,c3>c6,c10>s10,s3>s5,h3>s3,h3>h13,h3>c3,h4>h3,d8>h8,d8>d4,c7>d7,c7>c10,c4>c12,d2>d13,d3>d2,c8>c4,d6>d3,d9>d6,s9>d9,s9>s11,s8>c8,s8>s9,s8>d8,s8>s1,d11>d5,c11>d11,s12>s8,h11>c11,h11>h4,d12>d10,s7>c7,h7>s7,h10>h7,h12>h10,h5>c5,d1>d12,h1>d1,h1>h11,s13>c13,h6>h5,h6>h1,h12>h6,s12>h12,s4>s12,s13>s4,

d4,h10,h7,d1,h6,c4,c9,s7,d13,d7,h12,c10,h9,h2,d9,c11,s8,d5,s11,s6,s4,s3,s2,c5,d12,c1,h4,h13,c3,s12,h3,s1,s9,h5,d3,c13,h8,d8,c6,d6,h1,d2,h11,c8,s10,d11,c12,c2,c7,s13,d10,s5  
**135/1000: solving: solved in 7837 tries.**  
h7>h10,c9>c4,d7>d13,d7>s7,d7>d1,d7>h7,d7>d4,h9>c9,h9>h6,h12>h9,c11>c10,s6>s11,s4>s6,s3>s4,s2>s3,d12>d5,c1>c5,h13>h4,h3>h13,c3>h3,c3>c1,s12>d12,s12>s8,s2>s12,s9>s1,s9>d9,s2>s9,s2>h2,c13>c3,d8>h8,d8>d3,c6>c13,h1>h5,d6>d8,d2>d6,d2>s2,h11>h1,d11>h11,d11>c11,c12>c6,c12>h12,d2>d11,c7>c8,c7>d7,c12>c7,c2>c12,d2>c2,d10>d2,s10>d10,s13>s10,s5>s13,

h2,h1,c13,d8,s12,c2,d3,s9,d4,h6,s4,c8,s8,c9,c10,h5,h10,d9,h11,d1,c11,s11,h9,c5,s10,c4,s3,d2,s13,h7,s2,h13,h12,h3,d10,d7,d6,h4,d11,c1,d12,c3,h8,s7,d13,c7,s5,c12,s6,s1,d5,c6  
**136/1000: solving: solved in 142663 tries.**  
h1>h2,c2>c13,s4>s9,d4>s4,d4>d3,s8>c8,s8>s12,s8>d8,c10>c9,h10>h5,h10>c10,h10>h6,s11>c11,h9>h11,h9>d9,h9>h10,s2>d2,s2>s3,s13>s2,h13>h7,h13>s13,h12>h13,h3>h12,d10>s10,d10>d1,c4>c5,d6>d7,h4>c4,h4>h9,h4>d4,h3>h4,d11>d6,d11>s11,d12>d10,d11>d12,c3>c1,h8>h3,h8>h1,c7>c3,d13>d11,s6>s7,c6>c12,c6>c7,c6>c2,s6>c6,s8>s6,s8>h8,d5>d13,s5>d5,s5>s8,s1>s5,

c8,s10,d4,h8,s4,h4,s1,s3,h5,d7,s13,d1,c13,s2,h12,d11,c1,h9,c9,c11,h6,d13,c7,h7,h11,s8,s12,c4,h10,c3,d3,s11,c12,d9,s5,d2,c6,c10,h2,d10,c5,d6,s7,h1,h13,d8,s9,d12,c2,d5,s6,h3  
**137/1000: solving: solved in 29420 tries.**  
h8>c8,s4>d4,s4>s10,h4>s4,h4>h8,s3>s1,s13>s3,d1>d7,c13>s13,h12>h5,c1>d1,c9>h9,c9>c1,c11>d11,c7>c11,h7>c7,h7>h12,h6>h7,s8>s2,s12>s8,d3>c3,d9>d3,c6>c12,c10>c6,c10>h10,c10>c4,s11>h11,d9>d13,h2>d2,c5>s5,d10>c10,h13>h1,s9>s7,d5>d8,d5>d6,d12>d5,d12>d10,d12>s12,d9>d12,d9>c9,s9>s11,s9>d9,c2>c5,c2>c13,h2>c2,h2>h4,h13>h2,s6>s9,h3>h13,h6>h3,s6>h6,

s7,c4,s13,s11,c10,h6,c2,h3,c12,h4,c13,c9,c1,c8,c7,s1,c5,s6,d10,d1,d9,h10,d4,d3,d2,h5,d13,c6,d11,h1,d6,s10,s3,h7,s8,s9,d7,s2,c11,h12,s12,s5,d5,d8,h9,s4,h11,c3,h13,d12,h2,h8  
**138/1000: solving: solved in 7377 tries.**  
s11>s13,c9>c13,c1>c9,c8>c1,c7>c8,d1>d10,d1>s1,d9>d1,d3>d4,d2>d3,d6>c6,d6>d13,d11>d6,s3>s10,s9>s8,s12>h12,s5>s2,d5>s5,d5>d7,d8>d5,s12>s9,h11>c11,h11>h7,h11>d11,h11>h10,s12>s3,h9>h1,h9>h11,h9>d9,d8>d2,h5>c5,h5>h9,s4>s6,s4>h4,h8>h13,h8>d8,h8>h5,c3>c7,c3>h3,c3>c10,c12>c3,h2>h8,h2>h6,c2>h2,s4>s11,s4>c4,s4>s7,s12>s4,d12>s12,c12>d12,c2>c12,

c9,d5,c3,s7,s1,h4,s2,h1,c7,c4,c6,d7,c10,s9,s5,h2,d8,d3,s11,d12,d4,s12,d1,s13,h8,h6,s10,c2,h3,c5,s4,d9,h7,h10,c13,h12,s6,c1,d6,d13,c12,h11,h5,h9,c8,d2,h13,d10,s8,s3,c11,d11  
**139/1000: solving: solved in 17394 tries.**  
s1>s7,h1>s1,h4>h1,c7>c3,c4>c7,h4>c4,s5>s9,d3>d8,s11>s5,d12>d3,d4>d12,s12>s11,d1>d4,s13>s12,h6>h8,h3>h6,c5>c2,h10>h7,c1>c13,d6>s6,d13>d6,c12>c1,h12>c12,h12>h10,h5>h11,h9>h5,h13>h9,h13>d13,h13>h12,s8>c8,s3>s8,s3>s4,s3>h3,s3>s13,s10>s3,s10>c10,d1>d7,d10>d9,d10>s10,d10>d1,c5>c6,h2>s2,c5>d5,c5>c9,h13>h4,h2>h13,d2>d10,c11>c5,d2>h2,d11>d2,d11>c11,

c2,s9,c8,h12,c5,s5,d3,c6,c1,c13,s1,h3,s13,d1,s3,h11,c4,h10,d10,s4,h13,d7,d2,h8,h1,c11,d5,c3,s10,s2,h7,h9,s8,s7,c10,s12,h6,c9,h2,d8,h5,h4,c7,d4,d11,s11,d12,d13,d9,c12,s6,d6  
**140/1000: solving: solved in 2599 tries.**  
s5>c5,s5>s9,c6>c8,c1>c6,c13>c1,h3>h12,d3>h3,s1>s5,s13>s1,c13>s13,c13>c2,d1>d3,d10>h10,d7>d10,d2>d7,h8>h13,h1>h8,s2>s10,h9>h7,s7>s8,c9>c10,h2>h6,h4>h5,d4>d8,h4>d4,h4>h2,c7>c9,c7>s7,c7>c3,d13>d11,d9>d13,d9>h9,d9>d5,s11>s2,s11>c11,s12>s11,d12>d9,d12>s12,h4>h1,h4>s4,h4>h11,c4>h4,c4>c13,d12>d2,c12>c7,s6>s3,d6>s6,d6>d1,d12>d6,c12>d12,c12>c4,

c2,s10,c5,h4,h1,s2,d12,c13,s5,d8,d13,c8,d11,s1,h6,d6,d1,s6,h8,c7,s7,d9,s13,c11,s8,h5,h12,c1,d4,s12,c6,d5,h9,d2,c4,c9,h7,c10,d3,s11,h11,s3,s9,c12,d10,c3,s4,h10,h13,h2,d7,h3  
**141/1000: solving: solved in 41248 tries.**  
h1>h4,s2>s10,s2>c2,c13>c5,d13>d8,d6>h6,d1>d6,d1>s1,d1>d11,h8>c8,s7>c7,s7>s6,h12>h5,c1>c11,s12>s8,h12>s12,c6>c1,d5>d4,c9>c4,h7>h9,c10>c9,s9>s11,h10>d10,h3>h13,h3>h10,h3>h11,s3>h3,c3>c12,s4>s9,s3>s4,c3>c10,d7>d3,d7>h7,d7>d5,d2>d7,c3>c6,s3>c3,s3>s7,d2>d9,h2>d2,h2>h8,s13>s3,h12>h2,h12>d12,s13>s5,s13>c13,s13>s2,d13>s13,d1>d13,h1>d1,h12>h1,

d1,h8,d8,c3,s13,d9,d7,c4,d12,d6,c5,c2,s12,h10,c1,d13,s8,c9,h7,h3,c12,h1,h11,h12,d4,c11,d2,c10,h4,s4,s9,s7,c13,s5,d11,d10,h5,d3,s2,s6,c6,c7,h2,s1,s11,s10,d5,h6,s3,c8,h9,h13  
**142/1000: solving: solved in 15993 tries.**  
d8>h8,d8>d1,d9>d8,d7>d9,d6>d12,c2>c5,c1>c2,s8>s12,h7>h10,h3>h7,c12>c9,h1>h3,h11>h1,h12>c12,s4>h4,s9>s4,s7>s9,d10>d11,s6>s2,c6>s6,c7>c6,h2>h5,s11>s1,s10>s11,d5>d3,d5>s5,d10>d5,d10>c10,d10>d2,c13>c11,c13>d13,c13>c1,c13>s13,c13>c3,d6>d7,h12>h11,d10>d4,h6>h2,h6>h12,s10>d10,s3>s10,s7>s3,c7>s7,c8>s8,c8>c4,h6>d6,c7>c8,h9>h6,h13>h9,c13>h13,c7>c13,

s11,d1,h3,c11,s9,s13,s10,h1,d4,c9,c4,d10,h13,c3,d11,d7,c8,s2,s1,h6,h7,s6,h10,d6,d8,h11,c5,c2,d12,c13,h2,h12,s5,c7,s8,h5,d13,d3,c1,c12,s4,s7,h4,d2,d9,s3,c10,h8,s12,c6,d5,h9  
**143/1000: solving: solved in 27822 tries.**  
c11>s11,s13>s9,s10>s13,h1>d1,h3>h1,c4>c9,c4>d4,c4>c11,d10>s10,c3>h3,c3>c4,d7>d11,s1>s2,h7>h6,h7>d7,h7>h13,c8>c3,s6>s1,h10>d10,h7>h10,d6>s6,d8>d6,c2>c5,d12>d8,c13>c2,h12>h2,h12>d12,h12>h7,c13>c8,h11>h12,c7>c13,h5>h11,d3>d13,c12>c1,s4>s8,d9>d2,s3>s7,c6>c10,h9>h8,h9>h4,d9>h9,s12>s3,d9>d3,s12>s4,d5>d9,d5>h5,s5>d5,s12>s5,c12>s12,c12>c7,c6>c12,

c13,c11,d10,c5,h8,c7,s6,s3,c12,c3,s2,h4,s7,s12,h10,h7,h6,d7,c2,s5,d9,c10,d4,s10,c1,h13,d5,c8,h3,c9,h5,h1,s4,s11,c6,d6,s9,d3,c4,h12,d11,s13,h11,d8,d13,h2,d1,d12,s1,h9,s8,d2  
**144/1000: solving: solved in 7479 tries.**  
c11>c13,s3>s6,c3>c12,c3>s3,c3>c7,h4>h8,s7>s2,s12>s7,h10>h4,h7>h10,h6>h7,c2>c3,c1>c10,d5>d4,d5>s5,d5>d7,d9>d5,c1>c2,h1>h5,s11>s4,c6>c9,d6>c6,s9>s11,d3>d6,d3>h3,h1>h13,c4>c8,d11>d3,d13>s13,d12>d8,d12>h12,d13>d12,h11>d11,h9>h2,h9>h11,s9>h9,s9>s10,s9>d9,s9>s12,h1>h6,c1>h1,c4>c5,c1>c4,s1>s9,d2>d13,d2>d10,d1>d2,c1>d1,c1>c11,s1>c1,s8>s1,

h12,h11,h9,d1,h2,s13,d4,c7,c2,c12,d2,h13,h4,d5,d6,h7,d9,s1,c13,h10,c9,h8,c1,d12,s6,c3,c6,c10,c11,d11,s3,h3,c4,d7,c8,s8,s9,s4,d8,d3,d10,h1,c5,d13,h5,s2,h6,s11,s12,s5,s7,s10  
**145/1000: solving: solved in 67554 tries.**  
h11>h12,h9>h11,d4>d1,c2>c7,c12>c2,d2>h2,d2>d4,h4>h13,d6>d5,c3>c1,c6>s6,c10>c6,c11>c10,d11>c11,d11>d12,h3>s3,h3>h8,c3>h3,c3>c9,s8>c8,s9>s8,s4>s9,d3>d7,d3>c3,d11>d3,c4>c13,s4>c4,s4>s1,h10>h7,d8>d11,d10>d8,d10>h10,d10>d6,s4>h4,d9>d10,d13>d9,h5>c5,h5>h1,s7>s11,s10>s7,s12>s2,s12>s4,s12>c12,d13>d2,s13>d13,s12>s13,s10>s12,s5>s10,h5>s5,h5>h9,h6>h5,

s1,c9,d11,h8,h1,c3,h11,d12,s4,d6,d10,s10,h13,d13,s8,d5,c6,h12,d3,c4,d9,h4,c7,c12,h5,c5,d2,s5,s9,c11,h3,c1,s6,h2,s11,s12,h9,d8,d4,h10,d1,s7,h7,d7,c2,s13,h6,c13,c8,s2,c10,s3  
**146/1000: solving: solved in 76265 tries.**  
h1>h8,h1>s1,d12>d11,d10>d6,s10>d10,s10>s4,d13>h13,d3>d5,h4>h12,c4>h4,c4>c6,c12>c7,c5>h5,c5>c12,s9>s5,s9>d9,s9>s8,c5>c4,h2>h3,s11>s6,s11>c11,s12>s11,d4>d8,h7>h10,s13>s7,d7>h7,d7>d4,d1>d7,c13>s13,c8>c13,c8>c1,c2>c8,c2>d2,c2>c5,h6>h2,h9>h6,s2>s12,s2>c2,h9>s9,h9>h11,d1>d13,s2>s10,d3>d1,s3>s2,d3>s3,d3>d12,c3>d3,h9>h1,c9>h9,c3>c9,c10>c3,

c8,s3,c9,c6,s10,s11,s9,s2,h8,s4,c12,d1,d9,d2,h12,h3,d6,c11,s1,c5,h10,d13,s13,s12,h6,h7,d7,c3,c1,d5,c10,d11,d3,c7,d10,s8,d12,h11,c2,c13,d8,d4,s7,h2,h13,s6,h1,h5,h4,h9,c4,s5  
**147/1000: solving: solved in 628 tries.**  
c6>c9,s11>s10,s9>s11,s2>s9,d9>d1,d2>d9,h3>h12,s13>d13,s13>s1,s12>s13,h6>h10,h7>h6,d7>h7,c1>c3,d5>c5,d5>d6,d7>d5,c10>c1,d11>c11,d11>d7,d3>d11,d3>h3,d3>d2,s12>s4,c12>s12,c12>c6,c7>c10,c13>c2,d8>d12,d8>s8,d8>d10,d8>h8,d3>d8,d3>s3,h13>h2,h13>c13,h13>h11,s7>c7,s7>s2,h9>h1,h9>h13,h5>h9,s5>s6,s5>s7,h5>s5,d4>d3,h4>h5,c4>h4,c4>c12,c4>d4,c4>c8,

d5,s8,d2,d13,c2,s12,c4,c8,s4,d10,h6,s2,h3,c5,h13,h8,c12,s13,c10,d9,d8,c1,s3,c9,s5,d1,d12,h7,c7,c13,h11,d3,h1,s6,h2,s1,s11,c6,d6,s7,d11,h5,c11,s9,h12,h10,h9,h4,c3,d4,d7,s10  
**148/1000: solving: solved in 7094 tries.**  
d13>d2,s12>s8,c4>c2,c8>c4,s4>s12,h8>h13,d8>d9,d12>d1,c7>h7,c7>c9,c13>c7,s1>h1,s6>s1,h2>h11,s11>s6,d6>c6,d11>s11,d11>d3,d6>d11,h12>h5,s9>s7,h12>h2,h12>d12,h9>s9,c3>c11,h4>h9,d4>h4,d4>d6,d7>d4,h10>h12,s10>h10,s10>s3,s10>c10,s10>s13,c1>c12,c3>c13,c3>c1,c3>h3,c5>c3,s10>s2,h8>h6,d8>h8,d8>d13,c5>c8,c5>d5,s10>s4,d10>d8,s5>c5,s10>s5,d10>s10,d7>d10,

d9,h13,s13,c7,s1,s10,h4,c4,c6,d12,d13,d10,s3,d7,d3,h12,c12,s2,h8,c3,d2,s5,s9,d4,s6,h11,h7,d1,c11,h9,d6,h10,s11,c8,s4,d8,h5,h1,c1,s8,c5,s7,s12,c2,c13,c9,h3,c10,h2,d11,h6,d5  
**149/1000: solving: solved in 288115 tries.**  
s13>h13,s10>s1,c4>h4,c6>c4,d13>d12,d10>d13,s3>s10,d7>d10,d7>c7,d3>d7,s3>d3,s3>s13,c12>h12,c12>c6,c3>c12,c3>s3,s5>s2,s9>s5,d4>d2,s6>s9,h7>h11,h9>h7,s11>c11,h1>h5,c1>h1,s8>s4,s8>c8,s8>s11,s12>s7,c10>c13,c10>c5,c10>h10,d8>s8,d8>d4,d8>h8,c2>c10,c9>c2,c9>h9,c1>c9,c1>c3,d1>c1,d6>d1,h2>h3,d11>d8,h6>h2,d5>d11,d5>d9,d6>d5,h6>d6,s6>h6,s12>s6,

d13,h9,h5,s5,s9,h11,h1,d10,s1,d3,s13,c7,s12,d4,c4,c6,h6,h13,c2,d6,d9,c1,h12,d11,c8,d7,d12,h10,d1,c10,s8,c5,s10,s3,c3,s4,h8,s2,h4,h2,s6,c13,h7,s11,d2,c12,c11,c9,d8,s7,d5,h3  
**150/1000: solving: solved in 74649 tries.**  
h5>h9,s5>h5,s9>s5,h1>h11,d10>d13,s1>h1,s1>s9,c4>d4,c6>c4,h6>c6,h13>h6,h13>s13,d9>d6,d11>d9,d12>d7,h10>h12,d1>d12,d1>c1,d1>d11,c8>c2,c10>h10,s8>c8,s8>s12,c10>c7,c5>c10,s3>s10,c3>s3,c3>c5,h7>h2,s6>s2,h4>s4,c12>c13,c11>c12,c9>c11,d5>d2,s7>s11,s7>s6,h7>s7,d8>d5,h3>h7,d8>h8,d8>s8,d1>d8,h4>h13,h3>h4,c3>h3,d1>s1,d1>d10,d3>d1,c3>d3,c9>c3,

h9,d1,c8,d11,h7,h4,c11,d10,d5,h12,d8,s2,d12,d6,d4,h2,h11,h3,s9,s3,s1,h1,s6,d9,h5,c9,c1,s10,c2,c3,c13,s12,s5,h10,h6,s4,h13,c12,c4,d13,c10,c6,d2,s8,d3,c5,d7,c7,s13,h8,s11,s7  
**151/1000: solving: solved in 1983 tries.**  
h4>h7,c11>c8,d11>c11,d11>d1,d5>d10,d12>h12,d12>d5,d8>d12,d4>d6,d4>h4,d4>d11,d8>d4,h2>s2,h11>h2,h3>h11,s9>h9,s3>h3,s1>s3,h1>s1,s6>s9,c1>c9,c1>h1,c3>c2,c13>c3,s5>s12,s5>h5,s10>s5,c13>c1,h10>s10,h6>h10,c4>c12,c6>c4,c6>h6,d13>h13,d13>d9,d13>c13,d13>d8,s4>s6,d2>d13,c10>c6,c5>c10,d3>d2,c7>c5,d7>d3,c7>d7,s13>s4,s7>s11,s7>c7,s7>s13,s8>s7,h8>s8,

h2,h9,h4,c11,d3,s4,d5,h10,s3,h11,s1,h1,d13,s2,s13,c9,s8,h5,d12,c3,d4,c8,c12,d8,h6,d6,c7,c13,s10,c6,d1,s7,s12,c5,d11,c1,d2,s5,h12,c2,s11,d10,s9,d7,h3,h8,h7,c10,s6,h13,c4,d9  
**152/1000: solving: solved in 173276 tries.**  
h9>h2,h4>h9,s4>h4,d5>d3,h1>s1,h1>h11,s2>s3,s13>d13,c12>c8,c12>d12,c12>c9,c3>c12,d8>d4,d6>h6,d6>d8,c13>c7,c6>d6,c6>c3,c13>c6,c13>s13,s8>s2,s12>s7,d11>d1,c1>c5,s5>s12,s5>h5,s5>s8,s10>s5,s10>h10,s10>s4,d11>d5,d11>c11,c2>c1,d2>c2,d10>d2,h8>h3,h7>h8,h7>d7,h7>h12,s6>s11,s9>s6,h13>h7,h13>h1,d10>d11,c13>h13,c4>c13,s9>s10,c10>c4,d9>s9,d10>d9,c10>d10,

s8,s4,h11,c3,c2,d8,h10,d5,s9,d10,s1,s13,h6,s2,c11,c6,h2,d7,h4,d1,c12,h3,d4,c4,c13,h13,c5,s6,c10,h8,c7,d12,d2,d13,s11,s12,c9,d9,s3,s10,d11,c8,h7,h12,h5,d6,h9,s5,c1,h1,d3,s7  
**153/1000: solving: solved in 202682 tries.**  
s4>s8,c2>c3,h10>h11,d5>d8,s13>s1,c6>c11,h2>h6,s2>h2,s2>s13,d7>d10,c12>c6,d4>h4,d4>d7,d1>d4,c13>c4,h13>c13,h13>h3,d2>d12,d13>d2,s12>s11,c9>c7,d9>c9,d13>d9,s3>s12,h12>h7,h5>h12,s5>h5,d6>d11,c1>c8,h1>c1,s5>s10,d3>d6,d3>d13,s3>d3,h1>h8,s7>s3,s7>s6,s5>s7,s5>c5,s5>s2,s5>d5,s5>s4,c12>c2,s9>s5,c10>c12,h1>h13,h1>d1,h9>h1,h9>s9,h10>h9,c10>h10,

h3,h5,s1,c1,h6,c8,d7,h9,h7,h4,s7,s4,s13,d4,c11,s2,d9,h13,c5,d6,s6,c10,c7,c9,h8,d13,c6,d2,s10,s5,s12,c2,d12,s9,d10,h12,h2,d5,c13,c3,c12,d11,s11,s8,d1,d8,d3,h11,h10,s3,c4,h1  
**154/1000: solving: solved in 47737 tries.**  
h5>h3,c1>s1,h9>h6,h7>d7,h4>h7,s4>s7,s4>h4,s13>s4,c11>c8,d6>d9,s6>d6,s6>s2,h13>s13,c10>c5,c7>c10,c9>c7,c6>c9,c6>s6,c6>c11,d13>h13,d4>d13,h8>h9,d2>d4,s5>s10,s12>s5,c2>c6,d2>c2,d12>s12,d12>d2,h12>d12,h12>h8,c3>c13,d11>d5,s11>d11,s8>s11,d8>d1,d3>d8,s3>d3,s3>s8,s3>s9,c3>s3,c12>c3,c12>h12,h11>h2,h10>h11,h10>d10,h10>h5,c4>c12,h1>h10,c1>h1,c4>c1,

d12,h1,c13,d5,h11,s11,d13,s8,d11,h8,s5,d8,c12,c9,c6,s13,c7,s4,d4,s10,d6,s3,h7,c3,s1,c2,s9,h13,h12,s6,d7,h5,h3,c1,d2,d1,c10,h10,s12,h9,d9,c8,c5,h2,s7,h6,c11,h4,s2,d10,c4,d3  
**155/1000: solving: solved in 18544 tries.**  
d5>d12,s11>h11,d11>s11,d11>d5,d13>c13,h8>s8,d8>d13,h8>d8,h8>h1,c9>c12,c6>c9,d4>s4,s10>s13,d6>d4,d6>c6,d6>d11,s10>s5,c3>c7,s3>c3,s3>s10,h12>h13,h5>h12,h3>h5,d1>d2,d1>c1,d1>d7,h10>c10,h10>h3,d9>d1,d9>s9,s12>s6,h9>d9,h9>h7,c8>c2,s7>s12,h4>h2,c4>c11,c4>c5,c4>c8,h4>c4,s7>s1,h10>h4,h6>h9,h6>d6,h8>h6,h10>h8,s2>s7,d10>h10,d3>d10,s3>d3,s2>s3,

d1,s10,s5,s3,s1,s8,d11,c5,d7,h1,h10,d5,d8,d2,h9,h13,c7,d12,s2,s6,h6,s12,h3,c13,c6,h2,h8,h12,s13,s4,h7,c11,s7,c10,c12,c4,h4,h5,c1,d9,d13,c8,c9,d10,d6,h11,c2,s9,d4,s11,d3,c3  
**156/1000: solving: solved in 24251 tries.**  
s5>s10,s3>s5,s1>s3,s1>d1,s8>s1,h10>h1,d5>c5,d5>d11,d7>d5,d8>s8,d7>d8,h13>h9,d12>d2,s6>s2,h6>s6,c6>c13,c6>h6,c6>c7,s12>d12,h2>h3,h8>h2,h12>h8,h12>s12,h12>h10,h13>h12,s4>s13,h7>h13,h7>d7,c12>c10,c4>c12,c4>s4,c4>c6,c11>c4,h4>h7,c9>d9,d6>d10,c2>c8,c2>c1,c2>c11,c9>c2,d4>d6,h11>h5,d4>d13,s11>h11,s11>s7,d4>h4,s9>s11,d3>d4,c3>d3,c9>c3,s9>c9,

h7,d11,s7,d3,h6,h13,c1,d1,h8,c8,d6,d4,d13,h3,h10,s12,d10,d2,h4,s6,c3,s5,c4,s1,c2,h5,s4,c7,s10,c5,c13,s11,h1,s13,d12,s2,d9,c10,s3,c11,h12,s8,h11,d5,c6,d8,h9,s9,h2,c9,c12,d7  
**157/1000: solving: solved in 17142 tries.**  
h13>h6,d1>c1,c8>h8,d4>d6,d13>d4,d13>h13,d13>d3,d1>d13,h10>h3,d2>d10,h4>h10,s4>s1,s4>c4,s4>s5,c5>h5,c5>c2,c7>c5,s13>c13,s13>s10,s11>s13,s2>s11,d9>d12,h11>c11,h12>h11,d8>s8,d5>d8,h9>h12,h9>d9,h9>h1,s3>s2,s3>c3,s3>s6,c9>c6,c9>h9,s9>c9,s9>s3,s4>s9,s4>h4,s12>s4,d7>d5,c12>c10,c12>s12,d2>d1,c12>c8,c7>c12,d7>s7,d7>d11,c7>h7,d7>c7,d2>d7,h2>d2,

d2,h3,s3,c13,d4,d5,s12,c6,h5,h11,c11,s5,h10,c1,c12,d1,s11,c2,c8,h9,h1,s9,d9,d10,s4,h2,c7,s10,h12,c3,d13,c4,h13,d3,s8,d12,s13,c5,c10,c9,s1,h8,d7,h6,s7,h7,s6,s2,d8,d6,d11,h4  
**158/1000: solving: solved in 99533 tries.**  
s3>h3,d4>d2,d5>d4,h11>h5,c11>h11,c11>c6,c1>c11,c12>c1,c12>s12,c12>c13,s5>d5,s3>s5,c8>c2,h1>h9,h1>d1,h1>h10,s11>s3,d9>s9,d10>d9,s10>s4,s10>d10,h2>h1,d3>d13,d3>c3,c4>c7,d12>d3,d12>h12,s13>s8,s13>h13,c5>c4,c10>c5,c10>s10,c9>c10,c9>c12,s1>s13,s6>h6,s2>s6,s2>s1,s7>s2,h7>s7,d7>d12,d8>d7,d11>d6,h4>h7,h4>h2,h8>h4,c8>h8,c8>c9,d8>c8,d11>d8,d11>s11,

h5,d5,h6,d6,h8,h10,c8,h13,s2,d2,c11,d8,d7,c10,h7,c9,s8,c2,c6,s5,d11,s1,s12,h9,s9,h11,h12,s4,d12,s11,d3,c3,h3,h1,h2,s7,c5,d13,s10,c13,c1,c4,d9,s6,d10,h4,c7,d1,d4,c12,s3,s13  
**159/1000: solving: solved in 91070 tries.**  
d5>h5,d6>h6,d6>d5,h10>h8,d2>s2,c11>c8,d8>d2,d7>d8,c10>c11,c10>h10,d7>d6,h7>h13,c6>c2,s12>s1,s9>h9,s9>s12,h12>h11,c3>d3,h3>c3,h1>h3,h2>h1,s10>s7,c1>c13,d9>d13,c4>c1,d1>d10,d4>d1,d4>d9,h4>d4,h4>h2,h4>s4,h4>h12,d12>d11,s6>s10,s6>s9,s6>c6,s6>s8,s5>s6,c4>h4,c7>c4,c7>c9,c7>h7,c12>d12,c12>c10,c7>c12,c7>d7,c5>c7,s5>c5,s11>s5,s3>s11,s13>s3,

d7,c1,d6,h13,s11,d13,c12,h9,c7,s2,c3,d11,s4,d2,d9,c8,s9,h5,h7,h6,d12,s5,s7,d3,c10,h10,c5,c9,s12,d4,h4,s10,s8,s13,h3,c11,s3,c13,h12,d8,s6,h2,d5,c2,s1,c4,c6,d1,h8,d10,h1,h11  
**160/1000: solving: solved in 19716 tries.**  
d13>d6,h13>d13,c12>c1,s2>s11,c3>c7,d9>d2,s9>s4,s9>h9,s9>s2,c3>c12,d9>d11,d9>s9,d9>d7,h7>h5,h6>h7,s7>s5,h10>c10,c9>c5,h4>d4,h4>h10,s10>s12,s8>s10,s13>s8,h3>h4,h3>d3,h3>h6,h3>c3,h13>h3,d12>d9,c13>s13,c13>c9,c13>h13,c11>c13,c8>c11,s3>s7,h2>h12,d8>c8,c2>h2,c6>c4,d1>d5,s1>d1,c6>c2,s6>c6,s6>s3,s1>s6,h1>s1,h8>h1,d10>d12,d8>d10,h8>d8,h11>h8,

d1,h3,h12,h10,d7,c1,s7,h13,d12,s2,c5,d11,c7,h1,s11,c11,d6,c4,c12,d3,d10,d4,s9,h6,c6,s12,s10,s1,h8,d9,d5,s13,c13,h4,c2,h5,c3,h11,h2,c9,h9,s4,h7,s3,d13,d8,c8,d2,c10,s5,s6,s8  
**161/1000: solving: solved in 34093 tries.**  
h12>h3,h10>h12,c1>d1,s7>d7,s2>s7,s11>d11,c11>s11,c11>c5,c7>c11,h1>h13,h1>c1,h10>h1,c12>c4,c12>d12,c7>c12,d3>d6,d10>d3,d10>h10,d4>d10,c6>h6,s10>s12,s1>s10,d5>d9,s13>s1,c13>s13,c13>c6,h5>d5,h5>h8,h4>h5,c3>c2,c9>c3,c9>s9,c9>c7,c13>c9,h4>d4,h2>s2,h7>h11,h7>h4,h9>h7,h2>h9,s3>s4,d2>d13,d2>h2,d8>d2,s5>s3,s6>s5,s8>s6,c8>s8,c8>c13,c8>d8,c10>c8,

h8,s9,h2,s2,d11,h5,d4,d8,h4,c11,h13,s1,h9,d7,s3,d10,s4,c6,h1,c5,c9,d2,d3,s13,h12,c2,h6,s8,d5,h3,d13,d9,s5,c12,c13,c10,h11,c8,d6,c3,d1,s12,c1,h7,h10,s11,c4,s6,s10,d12,s7,c7  
**162/1000: solving: solved in 95936 tries.**  
s2>h2,s2>s9,h5>h8,d4>d11,d8>d4,h4>h5,s3>s1,d10>d7,s4>s3,h1>h9,c5>c6,c9>c5,d3>d2,h3>h6,d13>d5,d9>d13,c13>c12,c8>c13,c8>s8,c10>c8,d6>d9,h10>h7,s11>s12,s11>h11,s11>s5,c3>c10,c3>h3,c3>c2,c3>d3,c3>c9,s11>s13,d1>d6,h10>h12,h10>d10,h10>h13,d1>h1,c4>c3,s10>s11,s10>s4,s10>h10,c4>c11,s6>s10,s6>s2,c4>h4,d12>d8,d1>d12,s7>s6,c1>d1,c7>c1,c7>s7,c7>c4,

c6,s8,h1,h2,s10,s11,d7,s13,c9,c7,h11,s3,h4,h3,d4,s6,d8,d10,d6,d11,h12,d2,s9,c5,h9,h5,c1,s4,s2,d1,h13,s1,d12,d5,c3,c13,s5,c8,s12,c11,h6,d3,c4,d9,c2,h8,h7,c10,h10,s7,c12,d13  
**163/1000: solving: solved in 27415 tries.**  
h2>h1,s11>s10,c7>c9,s3>s13,h4>h11,h3>h4,d10>d8,d6>d10,d6>s6,d6>d4,d11>d6,h5>h9,h5>c5,h5>h12,s2>s4,s2>d2,s9>s2,d1>c1,d1>d11,d5>d12,c13>c3,c13>h13,s5>d5,s5>s1,s5>h5,s9>s5,s12>s9,c11>c8,c4>c11,d9>d3,c2>c4,h7>h6,h10>c10,h10>h8,s7>h7,s7>s12,s7>c7,s7>s11,d7>s7,s3>s8,h3>s3,d1>d7,d13>d9,d13>d1,c13>d13,c13>c6,h10>h3,h2>h10,c2>h2,c2>c13,c12>c2,

s13,d5,s3,c4,c11,d6,s12,c7,h12,s1,s9,c10,d12,s8,h5,c3,c2,d13,h3,d11,d1,c8,h13,s2,h7,s5,s7,d8,h4,h8,s11,h9,h6,d10,h10,c5,s6,s10,d3,s4,d9,c12,d2,h2,d4,c9,c13,h1,d7,h11,c6,c1  
**164/1000: solving: solved in 6242 tries.**  
c11>c4,d6>d5,s1>s12,s9>s1,c2>c3,h3>h5,d11>d13,d1>d11,s7>s5,s7>h7,s7>s2,d8>c8,d8>d1,d8>s8,d8>d12,h3>h12,h8>h4,h6>h9,h10>d10,h10>h6,s6>s11,s10>s6,h10>s10,h10>h8,h2>d2,d4>d9,d4>s4,c12>c5,d4>d3,h2>h10,h2>c2,h2>h3,h13>h2,d4>d8,c12>c10,c9>c12,c9>s9,c9>c11,c7>c9,c13>h13,d7>d4,s7>d7,s7>s3,c7>s7,c13>s13,c6>c7,c6>d6,c6>c13,c1>c6,h1>c1,h11>h1,

d4,h7,h5,c10,c11,h4,h3,s8,s2,h9,h11,s5,d12,d8,c5,c7,h8,h12,c12,c4,h13,s6,s11,s4,c9,c1,c13,d1,d11,s12,c3,d3,s13,s3,d6,h10,c6,c2,d2,h2,d9,s10,d7,h6,h1,s7,d5,c8,s1,d10,d13,s9  
**165/1000: solving: solved in 42862 tries.**  
h5>h7,c11>c10,h4>d4,h5>h4,s2>s8,h11>h9,h11>c11,h11>h5,h3>h11,s5>s2,d8>d12,c7>c5,h12>h8,c12>h12,c12>c7,c4>c12,s11>s6,s4>s11,c9>c4,c1>c9,c13>c1,h13>c13,h13>h3,d11>d1,d3>c3,s3>s13,s3>d3,s3>s12,c2>c6,d2>d6,h2>c2,h2>h10,h2>d2,s10>s3,h6>h2,h1>h6,s1>s7,s1>h1,d10>d7,d10>s10,d5>d10,d9>d11,s9>s1,s9>s4,d9>s9,d13>d9,d5>s5,d13>h13,d5>d13,d8>d5,c8>d8,

d2,d3,s6,s9,c11,h1,c10,h13,s3,s10,c12,d5,d1,d4,c2,d7,h2,c3,h9,s8,h7,s11,c8,d6,s5,h10,h3,d13,c6,d11,d10,s4,s1,c13,h4,s7,s2,c4,d8,s12,h5,h6,c5,c7,s13,c1,d9,h12,h11,d12,h8,c9  
**166/1000: solving: solved in 41261 tries.**  
d3>d2,s9>s6,s10>s3,c12>c10,d1>d5,d4>d1,c3>c2,h9>h2,h7>d7,h9>h7,s11>s8,c8>c3,h3>h10,d13>d6,d10>d11,s1>s4,c13>c6,c13>d13,c13>c8,c13>h13,c13>c12,s11>s10,s11>c11,s11>s9,h9>h1,s1>s5,d10>d4,h4>h3,c4>h4,s2>s1,c4>c13,d8>d10,h6>h5,c7>c5,c7>s7,c7>c4,s13>s2,h8>h12,h8>h6,h8>d8,s12>s13,c1>c7,h11>h8,h11>s11,h9>h11,d9>h9,d12>s12,d12>d3,d9>d12,c9>c1,c9>d9,

d5,h12,c10,c9,h13,c1,d8,s3,h2,h9,h3,s11,s9,h8,c12,s6,d1,d11,h4,s2,c4,h1,s1,d10,c8,d12,h7,d4,c3,d2,h11,c7,d6,s5,d13,c5,c11,s4,s8,h5,d9,c2,h6,c13,c6,h10,d3,s7,s12,d7,s10,s13  
**167/1000: solving: solved in 94379 tries.**  
c9>c10,h9>h2,h3>h9,h3>s3,h3>h13,s9>s11,s6>s9,d11>d1,h4>h8,c4>c12,c4>h4,c4>c1,s1>h1,s1>s2,c7>c3,c11>c5,s4>s5,s8>s4,c2>c11,d9>d13,h6>h5,c6>c2,c6>d6,c6>c7,h6>h11,d7>d3,s13>s7,s13>c13,d7>d9,d7>d2,d7>h7,d4>d7,c6>c8,s10>s13,s12>s8,s12>d12,s10>s12,s10>s1,d10>s10,c6>s6,d10>d11,d4>d8,d4>c4,c6>c9,d10>d4,h6>c6,h6>h12,d10>d5,h3>h6,h10>h3,h10>d10,

s3,s7,d8,h4,h10,d12,h1,c7,h5,s4,d5,c1,h11,h8,s11,s2,s8,s6,s5,h3,c6,c9,s12,d1,c8,c5,d6,d9,h7,h9,h2,d7,h6,c11,d13,h13,c12,c3,d10,d2,s9,s13,c2,d3,s10,s1,c4,c10,c13,h12,d11,d4  
**168/1000: solving: solved in 222315 tries.**  
s7>s3,h10>h4,h8>h11,s2>s11,s8>s2,s8>h8,s8>s4,s6>s8,s5>s6,s5>h5,d5>s5,d5>d12,c1>c7,c1>h1,h3>h10,c6>c1,c9>c6,d1>d5,c5>c8,d9>d6,d9>c9,d9>d1,h9>h7,h9>d9,h9>h3,s12>s7,d13>d7,h13>d13,h13>h2,h6>h9,c12>c11,c3>c5,d2>d10,c2>d2,c2>c3,s10>s9,s1>s10,s13>s1,c13>c10,c13>s13,c13>c2,h13>c13,h13>h6,d11>d3,d4>d11,d4>d8,h12>h13,c4>d4,c12>h12,c12>c4,c12>s12,

h1,c4,d7,h6,c1,s12,h12,h2,d9,d10,s1,c7,s6,d5,h3,h4,h13,s10,h5,h11,c13,d12,s8,s13,d1,c2,d13,s9,c10,s4,c12,s3,d2,d8,h7,c9,c11,c8,c3,c6,s5,h8,c5,d11,s2,s11,s7,h10,h9,d6,d3,d4  
**169/1000: solving: solved in 213634 tries.**  
h6>h1,h12>s12,h2>h12,d9>d7,d10>d9,c7>c1,s6>s1,h3>h2,h4>h3,h4>c4,h4>h6,d5>d10,h11>h5,c13>h13,s8>s10,s13>s8,s13>c13,s13>s6,d1>d12,c10>c2,s4>s9,c12>c10,s3>s4,d8>d2,c11>c9,c8>d8,c8>c12,c3>s3,c5>c6,c5>c3,d11>c11,s5>c5,d11>d13,d11>h11,d11>d5,h8>c8,s11>s2,s7>s5,s7>s13,s7>c7,h10>h8,h9>h10,h7>h9,d6>d1,d3>d6,d4>d3,d4>h4,d11>d4,s11>d11,s7>s11,h7>s7,

c8,d3,c9,c11,h12,s2,h8,d7,s13,h4,h2,d11,c4,d10,d2,h11,h1,s12,s5,c13,s7,c3,c2,s6,h6,d1,h10,d12,s3,c10,c1,c7,c5,h7,d9,s1,h5,s11,d8,d5,h13,d6,d4,s9,h9,s8,s4,c6,d13,s10,h3,c12  
**170/1000: solving: solved in 91584 tries.**  
c11>c9,s13>s2,h2>h4,d2>d10,d2>h2,d2>d7,d11>d2,h11>h8,h11>c11,h12>h11,d11>d3,h1>h12,s5>s12,c13>s13,c13>c8,c4>c13,s7>s5,c2>c3,h6>s6,h6>h1,c10>h10,c1>c10,c1>d1,c1>c2,s3>s7,c5>c7,d9>d12,h5>c5,h7>h5,s1>c1,s1>s3,s11>s1,d9>d11,d4>d5,s10>s4,s10>s9,h9>h13,h9>h7,h9>d9,d6>d4,s10>s11,s8>s10,d8>s8,d13>d8,d6>d13,c6>d6,h3>h9,h6>h3,c6>h6,c6>c4,c12>c6,

s12,d2,c12,d13,h13,s3,s6,h5,d9,s8,d5,s7,h4,c8,s11,d11,d7,h3,s4,s10,d6,h6,h2,c3,c2,c5,d3,d8,h10,s9,h1,h8,c7,s5,h7,d10,s1,h11,h9,c10,s2,c4,d4,c9,c6,d12,c11,s13,c13,d1,h12,c1  
**171/1000: solving: solved in 1030 tries.**  
h13>d13,s6>s3,s8>s6,d5>d9,d5>h5,s11>s7,d11>s11,d11>d5,h4>h13,s10>s4,d6>d7,h6>d6,h3>h6,c3>h3,c3>c8,s10>s8,c2>h2,c2>c3,c5>c2,d8>d3,h8>h1,h8>d8,h10>h8,h10>s10,h10>h4,d11>d2,s5>c5,s9>s5,c7>c12,h7>c7,h10>h7,s9>s12,d10>h10,d10>d11,h9>h11,h9>s9,d4>c4,c9>c10,c6>c9,d12>d4,s13>s2,c13>s13,c13>c6,d12>d10,c11>c13,c1>c11,c1>s1,d1>c1,h12>h9,d12>h12,d1>d12,

c8,d5,h7,c2,h8,d13,d11,s10,c6,h5,h13,s1,s9,s11,h3,s3,c7,d10,h11,d2,s12,c9,c13,h2,d8,h9,c11,s2,d9,d7,h4,d1,h6,c5,d4,s5,c3,s7,h12,c4,s8,h10,c12,d6,d12,h1,d3,s13,s6,c1,s4,c10  
**172/1000: solving: solved in 33282 tries.**  
c2>c8,h8>h7,d11>d13,h13>h5,s1>s10,s9>s1,s11>s9,s11>d11,h13>h8,h3>h13,s3>h3,s11>s3,c6>c2,c7>c6,c13>c9,h2>d2,h2>h11,s12>s11,d8>d10,d9>h9,d9>d8,c11>c13,d4>d1,d4>h4,d4>d7,s5>c5,s5>s2,h12>h6,c12>c4,c12>h12,c12>c11,s7>s5,d3>d6,d3>c3,d12>d3,s13>s8,s6>s13,h1>h10,s4>s6,s4>s7,d4>s4,d4>d9,h1>h2,c1>h1,d12>d4,d12>s12,d12>d5,c12>c1,c12>d12,c12>c7,c10>c12,

d2,h5,d3,c3,d11,s10,h7,d1,c13,s5,s11,s9,c9,d13,h1,s13,d9,h8,c10,s8,s6,c8,h2,c2,s4,c6,c5,d12,c11,h11,c4,s12,s2,d10,s7,c12,h9,c7,s3,h4,d6,s1,d5,h3,d8,d7,d4,h12,h10,h13,h6,c1  
**173/1000: solving: solved in 6781 tries.**  
c3>d3,d11>d2,h7>h5,c13>c3,s11>s5,s9>s11,c9>s9,c9>c13,d13>d1,s13>s10,d13>s13,d13>d11,s6>s8,c8>h8,c8>c9,c10>c8,h2>h1,c2>h2,c2>c10,d9>d13,s4>s6,c5>c6,h11>c11,c4>c5,c4>s4,c4>c2,d12>d9,s2>s12,c7>s7,c12>c7,s1>s3,h3>h4,d8>d5,d7>d8,d4>d7,h12>h3,h12>c12,h12>h11,h12>d12,h7>h12,s1>s2,h10>h9,h10>d10,h13>h10,h6>h13,h6>h7,d6>h6,d4>d6,c4>d4,c1>s1,c1>c4,

s8,c9,h13,s12,h7,s7,s6,h4,d10,s1,h1,d12,h11,s9,d3,h9,h2,d7,d11,s3,d9,d6,h8,h12,s13,c5,s5,c10,c7,c12,c3,c13,h6,c11,d13,s10,h5,s11,c4,h3,d8,h10,s4,c8,c6,d5,d4,s2,d1,c2,d2,c1  
**174/1000: solving: solved in 39491 tries.**  
s12>s8,h7>h13,s7>h7,s6>s7,s1>s6,h1>s1,h4>h1,d12>d10,d12>s12,h11>h4,h9>h11,h9>c9,s9>h9,d11>d7,s3>d3,s3>s9,d11>d12,d9>d11,d6>d9,h8>h2,h12>h8,s5>c5,s5>s13,c7>c10,c12>c7,c3>c12,c3>s3,c13>c3,h3>h5,s4>c4,s4>s11,h10>h3,h10>s10,c6>c8,d4>d8,d4>d13,s2>s4,c1>d1,c2>c1,c2>s2,c2>c11,d5>d4,d5>s5,d5>d6,h10>h12,c2>c13,h6>h10,c6>h6,d2>d5,c2>d2,c6>c2,

s6,d10,d5,d11,s13,h9,s11,s1,h6,c8,c12,d3,c5,h1,d2,d6,h8,h12,h11,d9,s4,h4,c7,c10,s7,s5,s10,s9,s2,d12,c13,s8,s12,s3,h13,d13,h7,c1,d4,c3,h5,c6,h10,c4,c9,h3,d8,h2,c11,d7,c2,d1  
**175/1000: solving: solved in 3006 tries.**  
d5>d10,d11>d5,s11>d11,s11>s6,s13>s11,c12>c8,d2>d3,d6>d2,h8>h1,h12>h8,h12>c12,h12>h6,h11>h12,h4>s4,c7>c5,c10>c7,s5>s7,s10>s5,s10>c10,s10>s1,d9>d6,d9>h9,h4>h11,s9>d9,s9>s13,s10>s9,s8>s2,s12>s8,d12>s12,d13>h13,d13>d12,c13>d13,s3>s10,h3>h10,h3>c3,h3>h7,h3>s3,h4>h3,c1>c13,c6>c1,c4>c6,c11>c9,h2>h5,h2>h4,c2>c11,c2>h2,c4>c2,d4>c4,d8>d4,d7>d8,d1>d7,

c13,c12,h1,h5,d2,s1,d4,c8,c4,d3,d5,c1,d6,c11,s4,c6,s3,d13,h3,h2,d10,c10,h10,h8,c2,c3,h11,h12,s13,h6,s7,h7,d11,d8,h13,h9,s2,s9,c5,s12,d9,s11,s6,c9,d7,d1,s10,s5,d12,s8,c7,h4  
**176/1000: solving: solved in 223512 tries.**  
c12>c13,h5>h1,c4>c8,c4>d4,d3>d2,d5>d3,d5>h5,c4>c12,c1>s1,c6>d6,c6>c1,c11>c6,s4>c4,s3>s4,h2>h3,c10>d10,c10>c11,h10>h2,h8>h10,c2>c10,c3>c2,h11>h8,h12>h11,h7>s7,h7>h6,d8>d11,h13>s13,h13>h12,h13>d13,h7>h13,d8>d5,h9>h7,s6>s11,d7>d9,s10>s6,s5>s10,s5>c5,s12>s5,d12>d1,d12>s12,d7>d12,c7>d7,c9>c7,s8>s2,s8>d8,s8>s3,c9>c3,s9>s8,c9>s9,h9>c9,h4>h9,

c1,c7,c4,h13,h2,s6,s9,s12,s2,h5,h6,d6,c5,d2,h8,d1,c6,s11,d11,c11,s8,c2,h9,d5,h11,c8,c13,h10,s7,s10,s5,c3,s1,h3,d4,c10,d13,d8,h4,s4,s3,d7,h1,s13,d3,h7,c12,h12,d12,d9,d10,c9  
**177/1000: solving: solved in 32654 tries.**  
c7>c1,c4>c7,h2>h13,s9>s6,s12>s9,s2>s12,s2>h2,h6>h5,d6>h6,c5>c4,d2>d6,d2>s2,d11>s11,c11>d11,c11>c6,s8>h8,c2>c11,c2>d2,c2>c5,c13>c8,s10>s7,s10>h10,s5>s10,s5>d5,s5>s8,h11>h9,c3>c13,s1>d1,s1>s5,c3>c2,h3>h11,d8>d13,h4>d4,h4>h3,c10>c3,d7>d8,s13>s4,s13>s1,s3>s13,h7>d7,h7>h4,h1>h7,h12>h1,d12>h12,d3>d12,d3>s3,c9>c12,d9>c9,d9>d3,d10>d9,d10>c10,

d7,c8,s8,h3,s6,h1,h10,d2,s5,c12,c6,h6,h2,s10,c10,d5,d1,h13,s4,h9,c7,h8,c13,c9,h11,s2,s11,c3,d6,h12,s7,d4,d9,s3,s9,d3,c4,d12,d11,s1,c11,c2,s13,h7,c5,d8,d10,h5,h4,d13,c1,s12  
**178/1000: solving: solved in 117795 tries.**  
s8>c8,h10>h1,s5>s6,c6>c12,h6>c6,h2>h6,h2>d2,h2>h10,c10>s10,d5>s5,d5>d7,h2>h3,h13>h2,c9>c13,c9>h9,c9>c10,c7>c9,h11>h8,s11>s2,s11>h11,s11>s4,c3>c7,s7>s11,d9>d4,s9>s3,s9>d9,s9>s7,d12>h12,d12>d6,d3>d12,d3>c3,d3>d5,d11>d1,s9>s8,c11>d11,d10>d8,h5>h7,h4>h5,c1>c5,c1>c2,c1>c11,c4>c1,h4>c4,d13>d10,s12>s1,s12>s9,s13>s12,h13>s13,d13>d3,h13>d13,h4>h13,

h1,c2,s4,c5,d7,c7,s9,d9,h7,s5,h6,d13,c12,d12,c11,h2,s10,d2,c6,d11,h8,d5,s12,s11,h5,d10,h3,s2,h10,d4,s7,c8,c4,c10,h11,d3,c1,c9,h9,h13,s3,s1,s8,c13,d8,c3,s13,h4,s6,d1,d6,h12  
**179/1000: solving: solved in 208385 tries.**  
c7>d7,c7>c5,d9>s9,d12>c12,d12>d13,h2>h6,d2>d12,d2>h2,d2>d9,d2>c2,h7>c7,h7>h1,s5>s4,d11>c11,s11>s12,h5>h8,d5>h5,d5>d11,d5>s5,d5>d2,d10>s10,d10>d5,s7>s2,c4>c8,c4>d4,c10>c4,c10>h10,h11>h3,h11>s11,h11>h7,c10>d10,c9>c1,h9>c9,s8>s1,s13>c13,s13>s8,c3>s3,c3>d3,c3>c10,c6>c3,s13>s7,d1>d8,d6>d1,h4>h9,h4>h11,d6>c6,s6>d6,s13>s6,h13>s13,h13>h4,h12>h13,

c7,c1,s4,c13,h2,d4,s11,d11,d10,s9,c11,c4,c3,s12,c12,d6,d1,d2,s6,s5,h1,c9,h5,s1,s10,h4,h6,s3,d3,h11,c5,h12,c2,h13,c8,s2,d9,d12,h7,s7,s13,d8,h10,c10,c6,h9,h3,d13,d5,s8,h8,d7  
**180/1000: solving: solved in 28931 tries.**  
c1>c7,d4>s4,d11>s11,d11>d4,d10>d11,c11>c13,c4>c11,c3>c4,s12>s9,c12>s12,d1>d6,d2>d1,s5>s6,h5>s5,h5>h2,h1>h5,h1>c1,c12>c3,s10>s1,h6>h4,d3>s3,s2>c2,d12>d9,h7>h13,s7>h7,s7>s2,d12>h12,c8>c5,d12>d3,d8>c8,s13>s7,h10>h11,h10>s10,h6>h10,d12>d2,d12>c12,d8>d12,c10>c9,c6>c10,h6>c6,h6>h1,d8>d10,h9>h6,h3>h9,d13>s13,d5>d13,h8>s8,h8>h3,d8>h8,d5>d8,d7>d5,

s12,d8,d12,s4,h9,h12,h10,d5,c2,h8,h13,h5,c6,s9,c8,c4,h3,d11,c7,h6,h1,s11,d10,h4,d6,h11,s7,c11,c10,c5,s1,d1,s13,c9,h2,c12,h7,d2,c3,s6,c1,c13,s3,s10,d13,s5,d7,s8,d4,d9,d3,s2  
**181/1000: solving: solved in 977 tries.**  
d12>d8,d12>s12,h12>h9,h10>h12,d5>d12,h13>h8,h5>h13,c4>c8,c7>c4,h1>h6,d10>d11,h11>s11,h11>h1,h4>h11,c10>c11,c5>c10,d1>s1,d1>d6,d2>h2,c13>c1,s3>c3,s6>s3,c13>c12,c13>s13,c13>c5,c9>c13,d2>d1,s6>s7,s10>s6,s10>d10,s10>s9,h4>h3,c9>c7,d7>h7,d13>d7,d4>d13,s2>s8,s2>d2,s2>s10,s2>c2,h4>h5,c9>c6,d9>c9,d4>d9,s5>s2,s5>d5,s4>s5,h4>h10,h4>s4,d4>h4,d3>d4,

c11,c7,c3,c4,h11,h7,s11,d13,s13,c8,d3,h4,h1,h13,s12,h8,h5,s4,h2,s8,c13,d9,d11,d4,c10,h12,s6,h3,d7,c1,s3,d8,s5,c5,d2,d12,h10,s10,d1,s1,h9,s2,d6,c2,s7,c6,c9,h6,d10,s9,d5,c12  
**182/1000: solving: solved in 81937 tries.**  
c7>c11,c3>c7,c4>c3,h7>h11,s13>d13,s13>s11,c8>c4,h4>h7,h1>h4,h13>h1,s13>h13,h5>h8,d11>d9,d4>d11,s3>h3,s3>s6,c5>s5,d12>d2,s10>h10,s1>d1,c9>c2,c9>h9,h6>d6,s9>s7,s9>c9,s9>s1,s2>s9,c6>h6,c12>c6,c12>d12,c12>c1,c12>h12,c12>c10,d7>d4,c5>c12,d10>d8,d10>d7,s10>d10,s2>s10,s2>h2,s2>s4,s8>s12,s8>c8,s13>s8,s2>s13,c5>c13,c5>h5,s3>s2,d3>s3,d5>c5,d5>d3,

c9,d9,c11,h7,s10,s5,c7,d2,s3,h8,h9,d13,s11,h6,c6,s7,s2,s13,c1,h13,c10,c12,h11,d5,h3,d3,s8,c2,d12,d1,h5,c8,h1,h4,s9,c4,h10,d11,d6,d8,s12,d4,d7,c5,h2,h12,s6,d10,s4,c3,s1,c13  
**183/1000: solving: solved in 1007444 tries.**  
d9>c9,s5>s10,c7>c11,h7>c7,d2>d9,s3>s5,h9>h8,s11>s3,c6>h6,s2>s7,s13>s2,c12>c10,d3>h3,d3>d5,d12>d3,d1>d12,c8>s8,c8>c12,c2>c8,h1>h5,h1>d1,h1>h11,h1>c1,h13>h1,h13>d13,h13>h9,s13>s11,h10>h4,h10>h13,d6>d11,d8>d6,d7>d8,s12>s9,c5>c4,c5>c6,c2>c5,d4>d7,h2>c2,h12>h2,h12>h7,s12>h12,d10>h10,d10>d2,d4>d10,s4>s6,s4>d4,s12>s4,s1>s12,s13>s1,c13>c3,c13>s13,

h6,c2,d4,h5,d9,d3,h9,d10,c11,c8,h13,c4,c13,s12,h11,h10,h7,d5,s1,d1,d8,d12,s8,c1,s2,h1,s13,h2,s3,d2,s11,h8,s6,s5,c9,c10,h4,c7,d7,d13,c6,c3,h12,h3,s4,c5,d11,s9,c12,d6,s7,s10  
**184/1000: solving: solved in 321138 tries.**  
h5>h6,d9>d4,d3>d9,h9>h5,d10>d3,c8>c11,c13>c4,c13>h13,c13>c8,h10>h11,h10>d10,h7>h10,d1>s1,d1>d5,d8>d1,d12>d8,d12>s12,c1>c13,s2>s8,h1>c1,h1>h7,s2>c2,s13>s2,d2>d12,h2>d2,h2>h1,s11>s3,d13>d7,c3>c6,c12>c5,c12>h12,c12>c7,c12>c9,c10>c12,c3>c10,d11>d13,h3>c3,h3>h8,h4>h3,s9>s5,s9>s11,s9>h9,s13>s9,h4>h2,s4>h4,s4>s13,d6>d11,s7>s4,s10>s7,s6>s10,d6>s6,

d7,s9,h4,h12,d12,h10,s7,h11,c7,c12,h3,h8,d5,d6,d1,s12,h1,c6,h5,c8,s2,d3,s3,s13,c11,s11,d8,d4,c2,c1,d2,c5,s4,s1,d9,h9,c9,s10,s6,s5,s8,c13,c3,d11,h6,h13,h7,c4,c10,d10,h2,d13  
**185/1000: solving: solved in 78787 tries.**  
h12>h4,d12>h12,s7>s9,s7>d7,h11>h10,c7>s7,c12>c7,d12>c12,h3>h11,h8>h3,d6>d5,d1>d6,s12>d12,h1>d1,h1>h8,s3>d3,s3>s2,s13>s3,s11>c11,s11>s13,d4>d8,c2>c8,c1>c2,c1>h1,c6>c1,s11>s12,d2>d4,c5>c6,h5>c5,s4>s11,s1>s4,d9>d2,h9>d9,c9>h9,s8>s10,s8>s1,s6>s8,s5>s6,h5>s5,c13>c9,h13>h6,h13>c13,c4>c3,c10>c4,d10>c10,d11>d10,h7>h5,h2>h7,h13>h2,d13>d11,d13>h13,

d7,c12,c9,s3,c13,h4,d4,h10,d10,h12,s2,c2,s1,s13,d12,h8,d8,s11,d6,h9,c3,h13,h11,d3,s10,d5,h7,d1,c4,c11,h3,d2,h1,h5,d13,c8,c5,s9,s4,s7,s12,h2,d9,s6,c6,s8,c7,c10,h6,s5,c1,d11  
**186/1000: solving: solved in 38319 tries.**  
c9>c12,d4>h4,d10>h10,d10>d4,c2>s2,c2>c13,s13>s1,d12>d10,h12>d12,s13>s3,h8>h12,d8>h8,s11>s13,d6>d8,c3>c2,h13>h9,h11>h13,h11>s11,d3>d6,d3>c3,d3>d7,h7>h11,d1>d5,c11>c4,d2>d1,h1>h3,h5>h1,d13>d2,c5>c8,s4>s9,s7>s4,s12>s7,s6>s12,c6>s6,c6>c11,c10>c7,s5>s8,s5>c5,h6>h2,h6>c6,h6>h7,h5>h6,s5>h5,s10>s5,c10>s10,d11>d13,d11>d3,d9>d11,c9>d9,c10>c9,c1>c10,

c4,s7,s6,c1,c3,h4,d4,s3,c7,d11,h3,h2,c8,c6,h5,h13,s1,h7,d9,d5,d13,h6,s12,s2,d1,h8,c9,c2,h11,h9,c5,h1,s5,s8,c10,s4,d3,s10,c12,h12,d7,d8,d6,d2,h10,s13,c11,c13,d10,s9,s11,d12  
**187/1000: solving: solved in 36897 tries.**  
s6>s7,c3>c1,h4>c4,d4>h4,s3>c3,s3>s6,d11>d4,h2>h3,c6>c8,h13>h5,d5>d9,d13>d5,d13>h13,h6>h7,h6>c6,h6>h2,s12>s1,s2>s12,c2>c9,c2>s2,c2>c7,d1>d13,h11>h8,h9>h11,h1>d1,h1>h6,h9>h1,s5>c5,s5>s3,s8>s5,s10>c10,s10>s8,s4>s10,d7>d3,d8>d7,h10>h12,h10>h9,d2>d8,c11>c12,d10>d6,d10>h10,d10>d11,s11>s9,s11>c11,s11>s4,s13>s11,c13>s13,c2>c13,d2>c2,d2>d10,d12>d2,

s9,s8,s11,h7,h6,h5,d1,s4,c9,c11,s13,s10,s3,d5,h3,d2,d6,d11,d13,h10,h1,h8,s6,s12,s7,c2,h13,c4,d7,h2,s1,d12,c10,c6,h4,s5,d10,c5,c1,c13,d9,c7,s2,h12,h11,h9,c12,c8,c3,d8,d4,d3  
**188/1000: solving: solved in 612936 tries.**  
s8>s9,s11>s8,h6>h7,h5>h6,s4>s11,c11>c9,s10>s13,s3>s10,d5>d1,d5>h5,s3>s4,h3>s3,d6>d2,d11>d6,d11>c11,d11>d5,d13>d11,h1>h10,h8>h1,s12>s6,s7>s12,h13>h8,h13>d13,h13>h3,c4>c2,d12>d7,c6>c10,s5>s1,c5>c6,c5>s5,c1>c5,c13>c1,d9>d10,c7>c13,h12>h4,h12>d12,h9>d9,h9>h12,c7>c4,h11>h9,h11>h13,h2>h11,s2>h2,s7>s2,c7>s7,c12>c7,c8>c12,c3>c8,d4>d8,d3>d4,d3>c3,

s10,h9,d11,s6,c2,d4,c5,h1,c6,s7,h5,h8,s8,c12,c11,c8,h7,h6,c3,c1,d12,d9,s5,s12,h3,c9,h2,s3,c10,d8,s2,c4,d5,d6,s13,h13,d13,h4,d7,c13,c7,s4,h11,d3,h12,h10,d10,s1,d1,s11,s9,d2  
**189/1000: solving: solved in 144015 tries.**  
s6>s10,h5>h1,h5>c5,c6>c2,c6>s6,d4>d11,s8>h8,s8>s7,c11>c12,c8>c11,c8>s8,h6>h7,c1>c3,d9>d12,s12>s5,c9>d9,c9>c1,h3>h6,h2>h3,s3>s12,s2>s3,d6>d5,h13>s13,d13>h13,d13>d6,c13>d13,c13>c4,c7>c13,h11>h4,h10>h12,d10>h10,s1>s4,d10>d7,d10>d8,d10>c10,d1>d3,d1>s1,d2>d1,d2>d10,d2>h2,d2>d4,c9>c8,c9>h9,h11>h5,s11>h11,s2>s11,s2>d2,c7>c6,c9>c7,s9>s2,s9>c9,

h13,d10,h11,h1,h10,h4,c10,s6,h8,c7,h12,c12,d2,d6,s2,h9,s9,d11,h7,c1,d8,d1,s1,d7,c6,c5,d3,s5,c4,c9,s13,d12,s3,s4,s11,d5,c3,d4,d9,s8,s12,s10,h3,c13,d13,h5,c2,s7,h2,c11,c8,h6  
**190/1000: solving: solved in 653115 tries.**  
h1>h11,h10>h1,h10>d10,h10>h13,h4>h10,h8>h4,c12>h12,c12>c7,d6>d2,s2>s6,s9>h9,s9>s2,d11>d6,c1>c12,d1>d8,d1>c1,d11>d1,s1>s9,d7>h7,d7>d11,c6>c10,c5>c6,d3>d7,s5>c5,s1>s5,c9>c4,s13>s1,s3>d3,s4>s3,s11>s4,c3>c9,d4>d5,d9>d4,s12>d12,s10>s12,s10>s13,h3>c3,d13>d9,s8>s11,h5>h3,h5>h8,c13>d13,c2>c13,s7>s10,s8>s7,c8>c11,c8>s8,c2>c8,h2>c2,h2>h5,h6>h2,

h6,c5,s3,h3,c9,s2,d2,c11,c4,s1,h7,d11,s11,c10,s7,d10,d9,s13,s12,d13,d3,h2,h11,h8,h10,d4,d1,h12,s9,c13,h13,c2,c6,h9,h4,d7,d5,c1,h1,s4,s8,s10,c3,c7,s5,s6,d12,h5,c12,d8,d6,c8  
**191/1000: solving: solved in 3322 tries.**  
h3>s3,d2>s2,c4>c11,s11>d11,s7>h7,s7>s1,s11>s7,d10>c10,d10>d2,d9>d10,d9>c9,c4>c5,s13>s11,s12>s13,d3>d13,d3>h3,d9>d3,h11>h2,h8>h11,h10>h8,d4>d9,d4>c4,h10>h6,s9>s12,h13>c13,h13>h12,c6>c2,h4>h9,d5>d7,c1>c6,h1>c1,h1>h13,h1>d1,h1>h10,h4>h1,d4>h4,s4>d4,s9>s4,c7>c3,s6>s10,s5>s8,s6>s9,h5>s5,c12>d12,c12>c7,c8>c12,d8>c8,d6>d8,d6>s6,d5>d6,h5>d5,

h2,d7,h10,c9,c12,h8,s11,h12,s4,h9,c5,c6,d11,h4,s9,d5,h7,s3,s1,c8,c1,h13,s10,h3,d12,h6,c4,d4,d9,s5,c2,d1,h11,s7,d2,s8,d3,d8,d10,c3,s2,d6,s13,c7,d13,c10,s12,h5,c13,s6,c11,h1  
**192/1000: solving: solved in 17553 tries.**  
c12>c9,h12>c12,h12>h10,h8>h12,s4>s11,c6>c5,h4>h9,h4>s4,h4>h8,d11>d7,s3>s9,s1>s3,c1>c8,c1>s1,c1>c6,d5>d11,h13>h7,d4>c4,d9>d4,d1>d9,s7>s5,d8>d3,d8>s8,d8>d2,d10>d8,c3>c2,d13>d6,s13>d13,c10>c7,s12>s2,s13>s12,c13>s13,c13>c3,h1>h5,h1>h11,h1>d1,h1>h3,h1>c1,h1>h4,h13>h2,h6>h1,d10>d12,s6>s7,s6>h6,s10>s6,d10>s10,c13>h13,d10>d5,c10>d10,c10>c13,c11>c10,

d3,h12,s5,s2,s12,h2,c5,s11,c8,c7,d5,s10,d9,d1,s8,h9,h1,h10,s13,d7,s3,h7,h13,d12,h11,c13,h6,s1,d8,c9,s7,s6,c2,s4,d10,d13,d2,d6,h8,c10,c1,c3,c6,h5,c12,h4,h3,c11,c4,d4,d11,s9  
**193/1000: solving: solved in 243031 tries.**  
s2>s5,s12>s2,s12>h12,s11>s12,c8>c5,c7>c8,d1>d9,h1>h9,h10>h1,h10>s10,h10>h2,d1>d5,s13>s8,d7>c7,d7>d3,d1>d7,s3>s13,h13>h7,c13>h13,h6>h11,d8>d12,s6>s7,s6>h6,s6>s3,s1>s6,s1>d1,s11>s1,c2>c9,d10>d8,d13>d10,d13>c13,d2>d13,c2>d2,c1>c10,c3>c1,h5>h8,c6>d6,c12>c6,h3>h5,c3>h3,c4>c3,c4>c2,s4>c4,h4>h10,c11>c12,d4>h4,c11>s11,d11>c11,d4>d11,s4>d4,s9>s4,

s11,h11,h2,d10,c6,d1,h10,s7,h3,s8,s10,d12,s1,s6,c10,c3,c8,s12,s2,d3,h1,s5,c1,h5,h7,c5,s4,d5,c11,s3,d13,h8,s9,h13,s13,d9,c7,d4,c12,d7,c4,c9,c13,d6,d2,c2,h6,d11,d8,h9,h12,h4  
**194/1000: solving: solved in 97286 tries.**  
h11>s11,h2>h11,h10>d10,h10>h2,s10>s8,s6>s1,c10>s10,c3>c10,c3>h3,c3>c6,s12>d12,s12>s7,s6>s12,c8>c3,s2>s6,h1>d1,h7>h5,c5>s5,c1>c5,c1>h1,c1>c8,s4>s2,d13>d5,s13>h13,s13>s9,d7>c7,d7>d9,d4>d7,c4>c12,c4>d4,c13>s13,c13>c11,c13>d13,h8>h7,c2>c9,c2>c13,s3>d3,d11>d6,d8>d11,d8>h8,d2>d8,c2>d2,c2>c1,c4>c2,s4>c4,h6>h10,h9>h6,h12>h9,h4>h12,s4>h4,s3>s4,

d8,c12,c11,s1,h1,h8,s3,c10,d10,c7,d6,c6,h11,h4,h9,s4,c13,d13,s10,s6,d2,s13,d5,c8,s7,d11,c4,s2,d4,h5,d9,c3,h10,s5,h13,c5,s12,s8,c2,d1,h7,h6,c9,d3,s11,h12,d12,h2,h3,c1,s9,d7  
**195/1000: solving: solved in 6123 tries.**  
c11>c12,h1>s1,h8>h1,c10>c11,d10>c10,d10>d8,c6>d6,c6>c7,h11>h8,h4>h11,h9>h4,d13>c13,s6>s10,s6>c6,s6>s3,s4>s6,d13>d10,d2>d13,s13>s4,d5>d2,c4>c8,h10>h5,c5>c3,s5>c5,h13>h10,s12>s5,s8>s12,h6>h7,d3>d1,c9>c2,d3>d9,s11>s8,h2>h6,h3>h2,h3>d3,h3>h13,h12>h3,d12>h12,s9>s11,s9>s2,d7>d12,d7>d11,d7>s7,s9>s13,s9>h9,d7>d5,c9>s9,d4>d7,c4>c9,c4>d4,c1>c4,

s7,c1,c11,c4,h11,d10,s8,d2,h13,s11,s13,c9,h2,s3,d12,d3,s1,s12,h12,d6,d5,h9,d9,s10,s9,c7,h4,d13,h6,c3,d1,h10,d8,c6,s5,c13,s6,s2,d4,h3,c12,s4,h1,c10,c2,d11,c8,c5,h5,h7,d7,h8  
**196/1000: solving: solved in 865 tries.**  
c11>c1,c4>c11,s11>s8,s13>h13,h2>d2,h2>h11,s13>s11,d3>d12,d3>s3,d3>d10,s12>s1,h12>s12,d5>d6,h9>c9,h9>h2,h12>h9,d9>d5,s9>s10,s9>d9,s9>s13,d1>d13,c6>c3,c6>h6,c6>c7,s2>s6,s4>d4,s4>s2,c12>c13,h1>h3,c10>c12,c10>h10,c10>c6,d8>d1,s4>s5,h1>h4,c5>c2,h5>c5,d7>d11,h7>h5,h7>h1,d7>h7,d7>d3,s4>s9,d8>d7,c8>c10,h8>d8,h8>h12,s4>s7,c4>s4,c8>h8,c8>c4,

s1,c6,s13,c10,c2,d13,s10,h10,s7,d3,c13,h11,d11,h2,s4,s11,c3,h6,d5,h1,c7,c11,h9,c4,d12,d8,h7,d6,d10,h12,c1,s12,h4,c8,s6,s5,d2,s3,s2,h13,s8,h3,c9,d1,d7,d9,c12,s9,h8,d4,h5,c5  
**197/1000: solving: solved in 17564 tries.**  
c2>c10,s10>s13,h10>s10,c13>d13,c13>c2,d11>h11,d11>d3,s4>s7,s11>s4,d11>s11,h2>h10,d5>d11,h1>h6,c11>c7,d8>d12,h7>h9,d6>d8,d10>d6,h12>h7,c8>c1,s5>s6,s2>s3,s2>d2,h13>h4,s2>s5,s8>s2,s8>c8,s12>s8,s12>h12,h3>h13,d1>d10,d9>d7,s9>c9,d9>s9,d4>d9,d4>c4,d1>d4,c12>s12,c12>c11,h3>h1,h3>c3,h8>h3,h5>h8,c12>c13,h5>h2,c5>c12,c5>h5,c5>c6,d5>c5,d1>d5,d1>s1,

s12,h4,d4,s5,c8,h2,c10,s4,s10,d10,s6,s7,h13,d5,d7,h5,d13,c12,d11,h8,c4,c7,s8,d1,h6,s1,c1,h12,d3,s11,h9,d6,s3,h3,s2,d12,c11,c13,h7,d8,c9,d2,h11,s13,c6,c5,d9,c3,h1,h10,c2,s9  
**198/1000: solving: solved in 6464 tries.**  
d4>h4,s10>s4,s10>c10,s10>s5,d10>s10,d10>d4,s7>s6,d7>d5,d13>h13,d7>d13,d7>s7,d7>d10,h5>h2,h8>h5,h8>c8,c12>s12,c7>c4,c7>d7,c7>c12,s1>s8,d1>s1,d1>d11,h9>h12,s3>d3,s11>s3,h3>h9,c13>c11,c9>c13,d8>d12,d2>d8,d2>s2,d2>d6,h11>h7,h11>s11,c2>c3,c2>c6,c2>d2,c5>c2,c9>c5,s9>d9,s9>s13,h1>h11,h1>h6,h1>d1,h10>h3,h10>h8,h1>h10,c1>h1,c1>c7,c9>c1,s9>c9,

d1,d8,d12,c1,h4,h8,h7,h10,c2,c5,s3,d3,s7,s5,s2,h12,s8,c12,h1,h9,s11,c13,d10,h11,h3,s10,d5,h2,c4,s13,d4,h6,c11,s4,c9,c10,c8,d6,d11,s9,c6,c3,s1,d9,s12,s6,c7,d7,h13,h5,d13,d2  
**199/1000: solving: solved in 11717 tries.**  
d8>d1,d12>d8,h8>h4,h7>h8,h10>h7,c5>c2,d3>s3,s5>s7,s2>s5,h1>h12,h9>h1,h11>s11,h11>h9,c13>c12,d5>d10,s13>s10,s13>c13,s13>s8,h3>h11,h2>h3,h2>s2,h2>h10,d5>c5,d5>d12,d3>d5,c4>c1,d4>c4,d4>d3,s4>s13,c9>c11,c10>c9,c8>c10,d11>d6,c6>c8,c3>c6,d9>d11,s9>d9,s9>s4,s1>s9,s12>s1,s6>s12,h6>s6,c7>c3,d7>c7,d7>d4,h13>h6,h5>h13,d13>d7,d2>d13,h2>d2,h5>h2,

c12,s11,s12,h3,s7,d7,h4,d3,h1,h7,s8,c13,c2,c11,d6,h8,c8,d12,h5,c5,d13,h6,s2,c3,d4,h13,d5,h11,s4,s10,c1,h12,c10,d11,h10,d9,s6,s5,h9,d2,d8,c4,h2,c6,d1,s1,c7,d10,s9,s13,c9,s3  
**200/1000: solving: solved in 429098 tries.**  
s12>s11,s12>c12,d7>s7,d3>h3,d7>d3,h1>h4,h7>h1,h7>d7,c2>c13,c11>c2,h8>s8,h8>h7,c8>h8,c11>c8,d12>d6,c5>h5,s10>s4,h12>h11,c10>c1,c10>s10,d11>d5,h10>c10,h10>h12,s5>s6,h2>d2,d1>d8,s1>d1,c6>c4,c7>c6,s9>s1,s9>s5,s9>d9,c9>c7,c9>s9,h9>c9,h9>h13,h2>h9,h2>s2,h2>h6,c3>c5,h10>h2,d10>h10,d10>d12,d4>d10,d11>d4,s3>c3,s3>s12,d11>c11,d13>d11,s13>d13,s13>s3,

d12,s6,s8,d5,d2,h9,c5,h3,c3,h10,d3,h12,d6,s12,s1,c6,s4,d10,h6,h2,c8,d13,s11,c12,h13,d1,h8,s10,c2,c1,c13,s13,c7,s3,s9,d4,c10,c4,d9,d8,h4,h7,d11,c9,d7,s5,h11,h5,c11,s7,h1,s2  
**201/1000: solving: solved in 53319 tries.**  
s8>s6,d2>d5,c3>h3,c3>c5,s1>s12,h6>c6,h6>h12,d6>h6,d6>d3,s4>s1,d10>h10,d10>d2,d6>d10,h2>h9,s11>s4,d1>d13,h8>h13,h8>c8,h8>h2,c12>c3,c1>c2,c13>c1,s13>c13,s13>s10,s9>s3,c10>c7,c4>d4,d8>d9,d11>d8,h7>h4,c9>c4,c9>s9,c9>c10,d11>d1,d11>s11,c9>c12,d11>d6,h7>h8,d7>h7,d7>d12,s13>s8,s5>s13,c11>c9,c11>d11,h11>c11,h1>h11,h5>h1,s7>d7,s2>s7,s5>s2,h5>s5,

s2,d13,s5,d10,h12,d12,c3,c6,s12,c11,c9,d2,h4,s13,c5,c10,d5,c4,c1,s1,h9,s9,s10,d6,d8,h8,h1,c13,h7,s11,h2,d9,c7,d11,d3,h10,s8,c2,h6,s6,d4,s7,s3,h13,s4,c12,d1,h3,d7,h11,c8,h5  
**202/1000: solving: solved in 111578 tries.**  
d12>h12,d12>d10,c6>c3,s12>s5,d12>s12,d12>d13,c11>c6,c9>c11,d2>s2,d12>d2,c5>c9,c10>c5,c4>h4,c4>c10,d5>d12,s1>c1,s1>s13,s9>h9,s9>s1,s10>s9,d6>d5,d8>d6,h8>d8,h1>h8,s11>s10,h2>h7,c7>c13,d11>d9,d11>s11,d3>d11,s3>s6,s4>d4,s7>s4,h3>h13,h3>h6,h3>h10,s3>h3,d7>d1,c8>c12,c8>s8,s7>s3,d7>s7,d7>d3,c7>d7,c2>c7,c8>c4,c2>c8,h2>c2,h2>h1,h11>h2,h5>h11,

h10,d4,c5,s13,h9,d6,c8,c1,d3,s2,d10,d13,c4,h13,h4,s6,s12,d5,h11,h2,d1,d7,c9,h5,s9,c6,h7,s3,d2,c11,d9,c13,h12,s11,d8,c7,c3,s7,h8,s8,c12,s5,d12,h3,h6,c10,d11,h1,s4,s10,s1,c2  
**203/1000: solving: solved in 341074 tries.**  
c1>c8,d13>d10,h4>h13,h4>c4,s6>s2,s6>d6,d13>d3,d5>d13,h2>h11,d7>d1,h5>h2,h5>d5,h5>h9,h4>h5,h4>d4,h4>h10,s6>s13,c9>c1,s9>c9,s9>s6,s12>s9,c6>c5,h7>d7,h7>h4,s3>s12,c11>c6,d9>d2,c13>c11,s11>s3,s8>h8,s5>s7,c12>c3,c12>h12,c12>c13,d8>d9,h6>h3,h1>h6,s10>s4,s1>s10,s1>h1,s1>s5,s1>s11,s8>s1,d8>s8,c7>h7,d11>d8,d12>d11,c10>c7,c2>c10,c12>c2,d12>c12,

h9,d11,s4,c11,s10,c10,d10,s6,d6,s1,c2,h13,d7,h4,s7,h6,d2,c13,d13,s12,c6,c5,c9,d1,s13,s5,h1,h12,d9,s11,d12,c1,c8,s2,d4,c12,s9,s3,h5,h3,h8,h11,h2,c4,d8,d3,c3,c7,h10,h7,s8,d5  
**204/1000: solving: solved in 38795 tries.**  
c10>s10,c10>c11,d10>c10,d6>s6,d6>d10,d13>c13,d13>d2,s12>s7,c5>c6,c9>c5,s13>d13,s5>s13,h1>d1,h1>h6,h12>h1,h12>s12,h12>h4,d9>c9,d9>d7,s11>s5,d12>d9,h12>d12,h12>h13,s11>s1,s11>d11,s4>s11,c8>c1,s2>c2,c12>h12,c8>c12,d4>d6,d4>s4,s3>s9,h3>h5,h8>c8,h8>h9,h2>h11,h2>s2,c3>c4,c7>c3,h7>h10,h7>c7,h7>h2,h3>s3,d8>d4,h3>h7,d3>h3,s8>h8,d8>s8,d3>d8,d5>d3,

s5,h13,d2,d11,c10,h3,h12,h4,s4,h8,h2,c8,c11,s10,s8,h9,d3,h6,s7,c3,s6,d4,c5,s9,s1,c13,h10,d5,d13,s2,s11,c2,c9,c12,h1,c7,d10,s12,d12,h7,s13,d1,h11,d8,h5,s3,c1,d9,c6,d6,d7,c4  
**205/1000: solving: solved in 1241006 tries.**  
d11>d2,h3>h13,h12>h3,h4>h12,s4>h4,s4>s5,h2>h8,c11>c8,c11>d11,c10>c11,s10>s4,c10>s10,c3>d3,s6>s7,s6>h6,s6>s8,s1>s9,d13>d5,s11>s2,c9>c2,c7>c9,c12>c7,s12>c12,s12>s11,d10>d13,d12>d10,s12>d12,h11>h7,s13>s12,h5>h11,h5>h10,h5>c5,s13>c13,h1>h5,h1>h9,d7>d9,d7>d8,s3>s13,s3>c3,d6>d7,d6>d4,d6>s6,s1>s3,d1>d6,h1>d1,h1>h2,s1>h1,c1>s1,c1>c10,c6>c1,c4>c6,

d12,c9,s11,s9,c4,c2,c12,h3,s1,s13,c11,c10,d11,h4,d13,s7,s12,d9,d5,h12,s6,d7,h11,s2,c5,h2,s8,d3,s3,c6,h7,d6,h9,h5,d2,c1,h13,c13,d10,h10,h8,d8,d4,c7,s5,s10,h1,s4,c3,c8,h6,d1  
**206/1000: solving: solved in 220643 tries.**  
s9>s11,s9>c9,c2>c4,c12>c2,s1>s9,s13>s1,c10>c11,h4>h3,d13>d11,s12>s7,d5>d9,s6>s12,h2>h11,s2>h2,s3>d3,s3>s8,h5>h9,h13>h5,c13>h13,c13>c6,d2>d6,c1>c13,d8>d10,h8>h10,d4>d2,d8>d4,h8>d8,c7>c1,h7>c7,s5>s3,s5>c5,h7>d7,h7>h12,h8>h7,s5>d5,s4>s2,s10>s5,s4>s6,s4>h4,s10>s4,c10>s10,d13>s13,d13>d12,c10>c12,c3>c10,c8>c3,h8>c8,h1>h8,d1>d13,h1>d1,h6>h1,

s5,h7,s7,s1,h9,c12,h8,c9,c10,h11,h12,h10,s2,d2,d10,s11,c13,c11,c3,c2,s9,h13,h6,c5,d1,s3,c8,s12,s8,s10,c4,c1,d13,s4,d6,s13,h5,d11,d3,d5,d9,d12,c7,d7,h4,d8,h2,d4,c6,h3,s6,h1  
**207/1000: solving: solved in 32549 tries.**  
s7>h7,s7>s5,s1>s7,c9>h9,c12>c9,h12>h11,h12>c12,h8>h12,h10>c10,h10>h8,d2>s2,d10>d2,d10>h10,c11>c13,c11>s11,c3>c11,c2>c3,s9>s1,h6>h13,c8>c5,s12>s3,s8>s12,s10>s8,c4>c8,c1>c4,d1>c1,d1>d10,s13>d13,s13>s10,s4>s13,h5>h6,d11>d6,d3>d11,d5>h5,d9>d5,d9>s9,d1>d9,d7>c7,d8>d12,d7>d8,h3>h2,d4>d7,h3>d3,h4>d4,h4>h3,c6>c2,s6>c6,s4>s6,h4>s4,h1>h4,h1>d1,

s11,s7,h1,d2,h7,s13,c4,s1,s5,h10,s12,d12,h5,h2,c2,h12,c6,s9,h3,c12,s4,d5,c1,h9,h6,d1,c7,c10,c13,d13,d7,s8,d11,s6,d8,d9,h8,h4,c11,d10,s10,c3,d4,h11,d3,c8,s2,c9,h13,c5,s3,d6  
**208/1000: solving: solved in 37016 tries.**  
s7>s11,h7>s7,h1>h7,s5>s1,d12>s12,h5>s5,h10>h5,c2>h2,c2>c4,h12>d12,h12>h10,h3>h12,c1>c12,h6>h9,c10>c7,c13>c10,d13>c13,d13>d1,d7>d13,d8>s8,d8>d7,d11>d8,h4>h8,d10>d9,s10>d10,s10>s6,h4>h6,h11>c11,h11>h4,d11>h11,d4>d11,d3>d4,s2>s10,s2>s4,c5>c8,c5>d5,c9>c5,c9>s9,c9>c2,c3>c1,c3>c9,h3>c3,s3>s2,s3>s13,d6>c6,d6>d2,d3>d6,s3>d3,h3>s3,h3>h1,h13>h3,

s10,h7,c5,c10,s1,h6,d3,s3,h3,s5,d11,h9,s7,d13,h4,s6,s12,h13,h1,h12,d5,c3,s13,d4,c12,d1,c8,s8,d7,s11,c2,h5,d6,d8,c13,s4,d9,d12,d10,c4,c11,s9,d2,h10,c6,c1,h2,c9,h11,h8,c7,s2  
**209/1000: solving: solved in 24585 tries.**  
c10>c5,s1>s10,s3>d3,h3>s3,h3>h6,h9>h3,s6>s7,s12>s6,h13>h4,h13>d13,h1>h13,h12>h1,h12>s12,h12>h9,d5>d11,d5>s5,c3>c10,s8>c8,d8>d6,c13>c2,d12>d9,d10>d12,c11>c4,s9>s4,h10>d10,h10>h5,c9>c6,c9>s9,c9>c13,c11>c9,c11>s11,d8>d7,c1>c11,c1>d1,c1>c12,d8>d4,s8>s13,d8>s8,d8>d5,h11>h10,h8>h11,h8>h12,c1>c3,d8>h8,d2>d8,s2>d2,s2>s1,h2>s2,h7>h2,c7>c1,c7>h7,

c9,d5,h7,c7,h13,h10,s6,c13,s4,d1,c1,s11,c3,d12,d8,c12,d13,d4,s5,s9,h9,s7,s13,c4,h5,d6,h2,c11,h6,s2,h8,c10,h11,d3,s8,d10,h3,s1,s3,c2,d2,d11,c5,s12,c6,h12,d7,s10,c8,d9,h1,h4  
**210/1000: solving: solved in 23019 tries.**  
c7>h7,h10>h13,c13>c7,s4>s6,c1>d1,c1>c13,s11>s4,c3>c1,d8>d12,d4>d13,s9>s5,h9>s9,s13>s7,c4>d4,c4>c12,h6>d6,h6>h5,h2>h6,s2>s13,h2>s2,h2>h9,h11>c11,h11>h2,h11>s11,h11>h10,d8>d5,s8>h8,d10>d3,d10>c10,s1>s8,c5>c2,d11>d2,c6>c5,s10>s12,s10>s3,s10>s1,d10>s10,d11>d10,c8>c6,c8>c4,c8>d8,c8>c9,c3>c8,h3>c3,h1>h12,h4>h1,h4>h3,h11>h4,d11>h11,d7>d11,d9>d7,

s3,h7,c10,c11,c3,c12,h11,d6,h13,h9,h1,h6,d11,c5,d3,s8,c4,d4,h5,c6,d5,h2,c13,d1,s12,c8,d7,d8,s4,c9,d12,d13,h3,s1,s5,c7,h4,s13,d2,c1,s10,s6,h8,s11,s2,d10,s9,h12,s7,c2,h10,d9  
**211/1000: solving: solved in 12698 tries.**  
c11>c10,c3>c11,c12>c3,h9>h13,h1>h9,h6>h1,h6>d6,h6>h11,c5>c12,d3>d11,d4>c4,d5>d4,h5>d5,h5>h6,h5>c5,h5>h7,s8>s3,h2>h5,c13>c6,c8>c13,c8>s8,d1>d3,d8>d7,d12>d8,d12>s12,d12>d1,d13>d12,s1>s4,c7>c9,s5>s1,h4>h3,s13>s5,s13>d13,c7>c8,d2>h2,s10>s13,s9>s11,s2>s9,h12>h8,h12>h4,s7>s6,s2>s7,c2>c1,c2>d2,c2>c7,h10>h12,s2>c2,s10>s2,h10>s10,d10>h10,d9>d10,

d3,c3,c8,c5,s1,h9,h1,h7,d5,h4,d9,c7,d4,s5,d10,s6,d11,d1,h13,d7,s2,s11,c2,s8,s3,c1,c13,h8,c6,c12,c9,h5,c4,h3,s12,h10,s7,c10,d8,s13,d13,s4,d6,c11,s9,h6,d12,h2,h11,d2,s10,h12  
**212/1000: solving: solved in 72600 tries.**  
c3>d3,c8>c3,c5>c8,h1>h9,h1>s1,h7>h1,d4>h4,d4>d5,d9>d4,c7>c5,h7>c7,d1>d11,s11>s2,s3>s8,c13>c1,c12>c6,c9>c13,s13>s7,d13>d8,s4>s13,d6>d13,h6>d6,h6>h10,s9>s4,d2>d12,h11>c11,h2>d2,h12>h11,h12>h6,h12>s12,h12>h5,h12>c12,c10>c4,c10>c9,h12>h8,h2>h12,h2>c2,h3>h2,h3>h13,s9>s11,s3>h3,s10>c10,s10>s3,s10>d10,s10>s5,s6>s10,d7>d1,d7>h7,d9>d7,s9>s6,s9>d9,

c12,c11,s6,h4,s4,c8,c5,s12,s8,d11,s2,d5,c4,s3,h3,c2,d12,s13,d13,s10,s11,h2,d2,h5,h7,d6,c6,c9,s7,s5,h12,h13,c10,d8,c1,h9,c13,s9,h8,d10,h6,d1,d4,h11,d9,c3,d7,h10,c7,s1,d3,h1  
**213/1000: solving: solved in 8652 tries.**  
c11>c12,s4>h4,s4>s6,c5>c8,s8>s12,s3>s2,h3>s3,c2>c4,d13>s13,d13>d12,s11>s10,h2>c2,d2>h2,d2>d5,d13>d2,s11>d11,s11>s8,s11>c11,s4>s11,h5>c5,h3>h5,c6>d6,c9>c6,s5>s7,h12>h7,h13>h12,h13>d13,h13>h3,s5>s4,c10>c9,h8>h9,h11>h6,d4>d1,d9>d4,d9>s9,d10>d9,h10>h11,c3>c13,h10>h8,h10>c10,h10>h13,c3>c1,d7>d8,c7>d7,c3>c7,d3>c3,d10>d3,s1>s5,h1>s1,h10>h1,d10>h10,

s7,c5,c1,s13,d5,s1,d4,h1,s9,h2,h13,d13,d6,h12,d7,d10,c2,c7,d1,s10,d8,h9,c9,c11,c4,h6,d9,h10,s12,d3,s3,s2,s4,h3,h8,d2,d11,c8,h5,s8,c12,s5,h11,c6,h4,s11,c3,c10,d12,h7,s6,c13  
**214/1000: solving: solved in 834140 tries.**  
c1>c5,s1>c1,s1>s7,s13>s1,d4>d5,s9>s13,h2>h1,h13>h2,d13>h13,d13>d4,d6>d13,d10>d7,c7>c2,s10>d10,s10>s9,d1>d6,d8>d1,c9>h9,c9>c7,c11>c9,c4>c11,d3>d9,s3>s12,s2>s3,s4>s2,h3>d3,h3>h6,s4>c4,s4>s10,h3>h12,c8>h8,d11>d2,s8>c8,h11>h5,h11>d11,s11>s5,s11>s8,c10>c3,h7>h4,h7>h11,h7>h3,h10>h7,s11>s4,c10>h10,c12>c10,d12>d8,c12>d12,s6>s11,c6>c12,c6>s6,c13>c6,

d11,s12,s9,s2,c12,h2,h11,d4,s10,h7,s7,d9,h8,c1,d10,s3,s13,h9,h3,s11,s6,h12,c4,d13,s1,c11,s5,c5,c3,c10,d1,c13,h1,d6,h10,d3,c9,s4,c2,d12,c6,h5,h4,d5,d7,c7,c8,h6,h13,s8,d2,d8  
**215/1000: solving: solved in 309 tries.**  
s9>s12,s2>s9,h11>h2,h11>d11,s10>s2,s7>h7,s7>s10,d9>d4,c1>c12,s13>s3,h9>h8,h9>d9,h9>h11,s13>s7,s6>s11,c11>c4,s5>s1,c5>s5,c3>c5,c10>c3,c13>d13,c13>c11,c10>c13,h1>d1,h10>c10,h10>h12,h10>d10,h10>h9,h3>h10,d3>d6,h4>h5,d5>d12,d7>d5,c7>d7,c7>c2,c6>c7,h6>c6,h4>h6,h4>s4,h4>h1,c8>c9,h13>h4,d2>d3,d8>d2,c8>d8,c8>c1,s8>c8,s6>s8,h13>h3,s13>h13,s6>s13,

s3,d2,d6,c7,h9,s5,s1,d10,h3,h12,h4,s4,c1,d4,s7,c3,d7,s2,h1,c5,d3,s11,s9,d12,h8,d5,h7,d13,h2,s10,s8,c6,c10,d8,d9,c4,s13,c11,h5,c8,c12,c2,h6,d11,h10,c13,h11,s12,d1,h13,s6,c9  
**216/1000: solving: solved in 26044 tries.**  
d6>d2,s1>s5,h3>h9,h3>s3,d10>d6,h4>h12,s4>h4,s4>s1,s7>s4,s7>c7,d4>d10,c3>c1,c3>h3,d7>s7,d7>d4,s9>s11,s8>s10,c10>c6,d9>d8,c12>c8,c2>c12,h11>d11,h11>h5,h11>c11,c13>c2,c13>c4,s13>c13,h6>h11,s6>s12,s6>s13,s6>s8,h10>c10,h6>s6,h6>h7,h13>h10,h13>h6,d13>h13,h2>h8,d13>d12,d9>d13,d9>s9,d9>d3,d5>c5,d5>d7,h2>s2,d9>d5,h1>h2,d1>h1,c9>c3,d9>c9,d1>d9,

c8,d5,s4,s7,h11,d11,c7,h7,s10,h10,c12,d10,s2,h3,s11,d8,h5,h1,c9,c3,s13,c10,d4,s3,c1,d13,d1,d12,h12,h2,s9,c6,c13,h9,s1,d7,d6,h6,d3,d9,h8,s5,h13,s12,s6,c2,h4,c5,s8,d2,c11,c4  
**217/1000: solving: solved in 292 tries.**  
s7>s4,d11>h11,h7>c7,s10>s7,h10>h7,d10>d11,d10>s10,d10>d5,h10>d10,h3>h10,s11>s2,h1>h5,c3>c9,s3>s13,s3>c3,s3>s11,d4>d8,c1>c10,c1>h1,c1>c12,d13>d4,d1>d13,d12>d1,h12>d12,h12>h3,h2>h12,s9>s3,c13>c6,s1>s9,s1>c1,c13>c8,d6>d7,h6>d6,h6>h9,d9>d3,s6>s12,h4>h13,s8>s6,s8>h8,s8>s1,h4>h6,s5>s8,d2>d9,d2>h2,c2>d2,c2>c13,c4>h4,c5>c4,c5>s5,c5>c2,c11>c5,

h6,c11,c9,c13,h2,c12,s4,d2,h7,c5,s10,s7,h4,c3,h8,c1,h5,d6,d11,h9,c10,c4,d4,s12,h12,s3,d7,d10,s9,c2,d3,s8,h3,c7,c8,d13,s5,d9,s11,s13,s1,d5,d1,s6,h1,h11,c6,h13,h10,d12,s2,d8  
**218/1000: solving: solved in 23978 tries.**  
c9>c11,c13>c9,d2>h2,c5>c12,s7>s10,s7>h7,s7>s4,c3>c5,h8>h4,c1>c3,h5>h8,d11>d6,c4>c10,d4>c4,h12>s12,d7>d4,d10>d7,s9>s3,s9>h9,s9>s7,d10>d11,d3>d10,h3>h12,h3>d3,h3>h5,c2>c1,c2>d2,c2>c13,h3>h6,s8>s9,c8>c7,c8>s8,c8>c2,s13>s5,d5>d9,h1>s1,h10>h11,h10>h1,s6>s11,d12>d1,h13>h10,d8>d12,d8>d5,d8>c8,d13>d8,s13>d13,h13>h3,s13>h13,s2>s13,s6>s2,c6>s6,

s3,h5,h13,h6,s12,h9,s2,s1,c10,s6,d1,s7,c13,c8,d3,h1,h11,d10,s10,d5,d2,d7,s8,c12,c4,c11,h10,h3,c2,s11,d4,d9,c1,h12,c9,s4,c7,h4,s9,h8,d6,s5,s13,d12,d11,c5,h2,c6,h7,d13,c3,d8  
**219/1000: solving: solved in 55017 tries.**  
h13>h5,h6>h13,s1>s2,d1>s1,s7>s6,c8>c13,h11>h1,s10>d10,d5>d3,d2>d5,d7>d2,s8>s10,s8>c8,s8>s7,d7>d1,c12>c10,c12>s12,h11>h9,c11>c4,c11>h11,c11>c12,h3>h10,s11>s8,d9>d4,c9>d9,c9>c2,c1>c9,c7>c1,c7>d7,c7>c11,h3>h6,h4>s4,h8>h12,s13>s9,s13>s11,c5>s5,d11>d12,c6>c5,c6>d6,h2>h4,h7>h2,h7>c7,d13>d11,d13>s13,c3>c6,d8>d13,h8>d8,h8>h7,c3>s3,h3>c3,h8>h3,

h10,s8,d9,d11,c4,h8,s1,s6,h9,h3,s2,h5,h12,c7,c12,h1,h4,c5,d2,c8,d8,s13,d4,d1,s10,d7,d6,c6,h13,c3,d3,s7,d12,s11,d13,s4,c11,d10,h2,s3,c10,h6,s12,h7,c1,c2,s9,c9,d5,c13,s5,h11  
**220/1000: solving: solved in 59791 tries.**  
d11>d9,h8>s8,h8>h10,s6>s1,h3>h9,h12>h5,c12>c7,c12>h12,h1>h3,h4>h1,c5>c12,d8>c8,d8>d2,s13>s2,d4>d8,d4>h4,d4>d11,c4>d4,s13>s6,s10>s13,d7>d1,d6>d7,c6>d6,c6>c5,d3>c3,c11>s11,c10>d10,s3>s4,h7>h2,h6>h7,s12>s3,s12>d12,s12>s7,d13>d3,d13>h13,c9>c1,c13>c2,c13>c10,c13>d13,c13>c4,h6>c6,h6>h8,s9>s12,c11>c13,s5>d5,s5>s10,s9>s5,c9>s9,h11>h6,c11>h11,c9>c11,

h11,h3,s10,d6,d1,h9,h4,d9,d2,s12,h5,c12,c11,s6,h8,s5,c3,h7,h13,d10,c6,s11,d4,c4,s3,h6,s2,s9,d5,s8,c13,c1,d8,h12,c5,s4,d3,c8,s13,d11,d7,s1,c9,h1,c10,s7,d12,c7,c2,h10,h2,d13  
**221/1000: solving: solved in 52243 tries.**  
h3>h11,d1>d6,h9>h3,h4>h9,d9>d1,d2>d9,c11>c12,s6>s12,s5>h5,s5>s6,h13>h7,c6>c3,c4>d4,s9>s2,c1>c13,d8>d5,s8>d8,s8>s9,h12>h6,c5>c1,c8>c5,c8>s8,c8>c4,d3>s3,s13>s4,d11>d3,d11>d10,s11>d11,c8>c6,c8>h8,c8>c11,s11>s5,h12>h13,s13>s11,c7>c10,s7>c7,s7>s1,s7>d7,c2>c9,c2>c8,h2>h1,d12>h12,h2>c2,d13>d12,d13>d2,s13>d13,h2>h4,s7>s13,h10>h2,s10>h10,s7>s10,

h5,s1,c11,d3,d10,c1,c8,h11,d6,s7,s11,c5,h3,s13,c2,h1,d13,h2,s2,s9,h8,d11,s5,s3,c12,s6,c6,d4,s10,h4,d1,s4,d9,h13,c4,d8,c7,c3,c10,d12,s12,d5,h9,h6,h7,h10,c13,d2,s8,h12,d7,c9  
**222/1000: solving: solved in 88622 tries.**  
d10>d3,c1>s1,c11>c1,h11>c11,h11>h5,s11>s7,c5>c8,h1>h3,s2>h2,s2>s13,c2>s2,d11>d13,d11>s11,d11>d6,d11>h11,d10>d11,h8>h1,s5>s9,s5>c5,s3>s5,c12>c2,s6>s3,c6>c12,d1>d4,s4>h4,s4>s10,d8>d9,c10>c3,h6>h9,h7>h6,h10>h7,d2>d5,h12>h10,h12>d12,s12>h12,s8>s12,c13>c10,c13>h13,c4>c13,c7>c4,s8>s4,s8>h8,s8>s6,d8>s8,d1>d10,d8>d1,d2>d8,d7>d2,c7>c6,c7>d7,c9>c7,

c8,s8,h4,s2,h3,s1,c11,h2,c1,h5,s13,h11,d4,h8,h12,d7,s7,c9,c2,c13,s6,s10,d6,d9,s4,d13,s5,d12,c3,h6,c7,h10,h9,h1,s12,d10,s9,c5,d1,h7,d11,d8,c4,c10,c12,d5,d3,c6,d2,h13,s11,s3  
**223/1000: solving: solved in 6942 tries.**  
s8>c8,h2>h3,h2>s2,h2>h4,c1>c11,c1>s1,h12>h8,s7>d7,c2>c9,c13>c2,s10>s6,d9>d6,h9>h10,h1>h9,c10>c4,d2>d5,d2>d8,d3>d2,d3>d1,d3>d10,c10>c5,c12>c10,c12>s12,s11>d11,s3>s11,s3>d3,s9>s3,c6>c12,c6>h6,c6>c3,c7>c6,h7>c7,h1>h7,s9>s5,s9>d9,s9>s10,d13>c13,d13>d4,s9>s7,s4>s9,d12>d13,h12>d12,h1>h11,h1>c1,h1>h2,h12>h1,h5>h12,h13>h5,s13>h13,s13>s8,s4>s13,

s2,d7,c2,h1,s9,s5,s11,c7,c5,h12,s7,s13,c4,d4,d5,h8,d11,s12,c13,d8,h13,h4,s1,c8,d6,c12,d9,h11,h5,d3,h6,c1,c9,d13,h7,h9,s3,d1,h2,d10,c6,d12,s10,d2,h3,c11,s6,c10,s4,c3,s8,h10  
**224/1000: solving: solved in 5664 tries.**  
s5>s9,s11>s5,c7>c2,c7>d7,s11>s2,s13>s7,c4>c5,d4>c4,d5>d4,s12>s13,s12>h12,h8>h1,h4>h13,c8>d8,c8>c13,h5>h11,c9>c1,d13>d3,h9>h7,h9>c9,h9>h6,h9>d9,h5>h9,d13>d6,h2>h5,d12>d1,d12>c12,d12>d13,s3>s1,h2>h4,d10>d12,s10>s3,d10>s10,c11>c6,d2>h2,d10>d2,c11>d11,c8>c11,c8>h8,c8>c7,s6>s12,s6>s11,d10>d5,c3>h3,c10>c3,c10>d10,s4>s6,s8>s4,c8>s8,c10>c8,h10>c10,

c4,s10,h13,d5,h4,s3,h5,c12,c9,d8,h12,c11,d10,s12,h11,h9,d9,s2,s6,s1,c5,c7,s11,s8,h2,d7,d4,d13,c6,c3,c1,s9,c13,h3,h6,h1,s7,h7,s5,h8,d2,c10,d3,d11,s13,h10,c2,d12,d1,c8,d6,s4  
**225/1000: solving: solved in 373956 tries.**  
h5>d5,h5>h13,h4>h5,c9>c12,c11>c9,h11>h12,h9>h11,d9>h9,d9>d8,d10>d9,s12>s3,s2>s12,s6>s2,s1>s6,c7>c5,s11>c11,s11>s1,d10>s10,d7>c7,d7>d10,s8>s11,d4>h4,d4>d7,d4>c4,d13>d4,c3>c6,c1>c3,h7>s7,h8>h1,d11>d3,h10>c10,h10>h7,h10>h3,h6>h10,d12>d11,d1>d12,s13>s5,s13>c13,s13>s9,d6>d1,d6>h6,c8>h8,c8>c1,d2>d6,d2>h2,c2>d2,c8>c2,s13>d13,s4>s13,s8>s4,c8>s8,

s11,d5,c11,h10,h4,c5,s9,c13,d4,c2,c10,h5,c12,d11,h9,s8,h13,c6,c3,d3,c1,d7,c7,s12,h11,h2,c4,d1,d10,s10,c9,h8,d8,h6,h1,h3,d6,s6,d12,h7,d9,s13,s1,d2,d13,s7,s2,s3,s5,c8,h12,s4  
**226/1000: solving: solved in 9596 tries.**  
h4>h10,c5>d5,c11>c5,c11>s11,c13>c11,c10>c2,h9>h5,h9>s9,h9>h4,c10>c13,c12>c10,d11>d4,h13>h9,c3>c6,d3>c3,c7>d7,c7>c1,s12>s8,s12>c12,d3>d11,h11>h13,h2>h11,c4>c7,d10>d1,s10>d10,d8>h8,h1>h6,h3>h1,s6>d6,d12>d8,s13>s6,d13>d9,s1>s13,d2>d13,s5>s7,s5>s1,s2>d2,s3>s5,h12>h7,h12>d12,h3>h12,s3>h3,s2>s10,s2>h2,s2>s12,s3>d3,s3>s2,c8>c9,s4>s3,c4>s4,c8>c4,

c1,h9,s7,h7,d7,h6,c2,c6,h13,d9,h1,d12,s10,s1,h8,s5,d6,h4,c8,c3,c7,h12,d5,s9,c9,s2,s12,d2,c4,d10,s13,h11,d4,s4,h5,c11,h10,d3,s3,s8,s6,c13,c5,c10,d11,c12,d8,d13,s11,h2,h3,d1  
**227/1000: solving: solved in 138038 tries.**  
h7>s7,h7>h9,d7>h7,c2>c1,c6>h6,d9>d7,h1>h13,d12>d9,s1>s10,s1>h1,h4>h8,c3>c8,c7>c3,d5>d6,d5>s5,h12>h4,h12>d12,c7>c6,c9>s9,c9>c7,s12>s2,d4>d10,d4>c4,d4>d2,s4>d4,s4>s12,s13>s4,h5>d5,h5>h12,s13>s1,h11>h5,s3>d3,s3>s13,s8>s3,c10>c5,c10>h10,s6>s8,c12>c10,c12>c9,c13>c12,d11>c11,d13>d8,s11>s6,d13>c13,d11>s11,d11>d13,h2>c2,h3>h2,h11>h3,d11>h11,d1>d11,

s11,c2,d2,d7,s4,s8,c4,s12,d4,s2,s13,h12,c1,d9,h5,c12,c7,h13,d5,h1,h6,d10,c6,d3,s10,h2,c13,s7,h3,d13,h9,c5,d6,d1,c3,s6,h10,s9,s1,h8,c8,h11,h4,s5,c11,d12,c10,s3,d8,h7,c9,d11  
**228/1000: solving: solved in 42343 tries.**  
d2>c2,d7>d2,s8>s4,s13>s2,h12>s12,d9>d4,c7>c12,d5>h5,d5>d9,c7>c1,h1>h13,h6>h1,c6>c7,h6>c6,h6>h12,d3>d10,s7>s10,d6>d13,d1>d6,c3>c5,c3>h3,c3>c13,c3>d3,s9>h9,s9>s7,h10>h2,s6>s9,h8>h10,h4>h11,s5>s1,s5>s6,s5>d5,s5>s8,h4>h8,h4>h6,d8>d12,d8>d1,c8>d8,c11>c8,c10>c11,c9>c10,s3>s13,s3>s5,c3>s3,c9>c3,c4>c9,h4>c4,h7>h4,d11>s11,d7>d11,h7>d7,

s8,c5,s5,c12,h10,s1,c3,s3,c1,d2,s11,d7,c9,d8,d11,c2,h1,c11,s13,h2,s6,d3,s7,c10,d1,s12,s9,c13,d4,h12,h13,c4,s10,h7,d6,h5,d12,d5,c8,s2,c7,s4,d10,h4,d13,h3,h6,d9,h9,c6,h8,h11  
**229/1000: solving: solved in 3667 tries.**  
s5>c5,s5>s8,s1>s5,s3>c3,s3>s1,d11>d8,d11>s11,d11>d2,d7>d11,c2>c9,h1>c1,h1>h10,c2>c12,c11>c2,h2>h1,s6>s13,s7>d7,s7>s3,s6>s7,c10>c11,d1>d3,s9>s12,d4>d1,h13>h12,h13>c13,c4>d4,h13>h2,s10>s9,s10>c10,s10>s6,d5>d12,d5>h5,d5>d6,c8>c4,c7>h7,c7>c8,d10>d5,d10>s10,s4>s2,h4>s4,d13>h13,d13>d10,h3>h4,h6>h3,d9>d13,c6>c7,h6>c6,h9>h6,h9>d9,h8>h9,h11>h8,

c8,c13,d8,s5,d11,d5,d3,s9,s10,c11,d6,c7,s12,d7,d1,s3,s6,c3,s13,h7,d2,d12,s7,h4,d10,s4,c4,d4,c2,h10,s11,h8,c9,c5,s1,s2,h6,h2,s8,h9,d13,c12,h12,h13,c6,h3,h5,c10,c1,d9,h11,h1  
**230/1000: solving: solved in 5752 tries.**  
c13>c8,d5>d11,d5>s5,d5>d8,d3>d5,s10>s9,c11>c13,s12>s10,d7>c7,d7>d6,d1>d7,s3>d3,s12>s3,d12>d2,s7>s13,h7>s7,c4>s4,d4>c4,d4>d10,d4>h4,d4>d12,c2>c3,c5>c9,s1>s11,s2>s1,h2>h6,h2>s2,h2>h10,h2>c2,h7>h2,d4>d1,h8>h7,s8>s6,h8>s8,c12>c5,c12>s12,c12>c11,d13>d4,h9>h8,h12>c12,h13>h12,d13>h13,c10>c6,c1>c10,h5>h3,h1>h11,h1>c1,h5>h1,d9>d13,h9>d9,h5>h9,

h11,c3,c8,d9,h3,d8,h8,s3,d12,s4,d10,h12,h1,h4,s10,s13,c5,d11,h10,d7,d13,c9,c1,c7,s11,d1,d2,d5,c2,h5,s5,s12,s8,d3,d4,c11,c13,c6,s9,s1,h7,d6,h2,s6,c4,s7,h13,h9,h6,s2,c10,c12  
**231/1000: solving: solved in 15237 tries.**  
c8>c3,h3>h11,d8>d9,d8>c8,h8>d8,h8>h3,h12>d12,h1>h12,h4>h1,s4>h4,s4>s3,s10>d10,s10>s4,s13>s10,d13>d7,c1>c9,c7>c1,d1>d13,d2>d1,d5>d2,d5>c5,d11>d5,h10>h8,s11>s13,d11>s11,c2>c7,h5>h10,s5>h5,s12>s5,s8>s12,d4>d3,c11>d11,c2>c11,c6>c13,s1>s9,d6>c6,s6>s1,s6>d6,s6>s8,c4>d4,h13>h7,h9>h13,h6>h9,h6>s6,h2>h6,s2>s7,s2>h2,c2>s2,c4>c2,c10>c4,c12>c10,

h2,c10,h3,c6,s3,d9,c3,d13,s11,c4,h12,h6,h1,c8,d5,c7,d7,s1,s12,d3,d12,c11,s13,h10,s4,h8,h11,h5,d6,h4,d4,s9,s10,c12,c13,c9,s6,s7,s8,h9,s5,d10,d1,d11,c2,d2,s2,d8,h7,c5,c1,h13  
**232/1000: solving: solved in 170121 tries.**  
c3>c6,c3>h3,c3>c10,s3>c3,d13>d9,h6>h12,h1>h6,d7>c7,d7>d5,s1>h1,s12>s1,d3>d7,d12>d3,h11>h8,h5>h11,h4>s4,h4>h10,h5>h4,d4>d6,s9>s13,s10>s9,c13>c12,c9>c13,s7>s6,s5>s7,s5>h5,s5>s10,d4>d12,d4>c4,c11>c8,c11>s11,s5>s12,c9>c11,s8>s5,h9>c9,h9>h2,d1>d10,d11>d4,d2>c2,s2>s8,s2>s3,d1>d11,d2>s2,d8>d2,d13>d8,h13>h7,h13>h9,d13>h13,d1>d13,c1>c5,c1>d1,

c13,h8,h10,h9,s8,c6,s13,d6,s3,d1,h5,h4,s9,c9,d9,h3,s10,s7,h13,s5,d3,d8,c1,d12,c3,h11,h6,d13,c10,s11,d4,d10,d2,d5,s4,c8,s12,c12,c2,h12,c11,c4,c5,s2,c7,d7,h7,h2,s1,s6,h1,d11  
**233/1000: solving: solved in 23999 tries.**  
h10>h8,h9>h10,c6>c13,s13>s8,d6>c6,s3>s13,d1>d6,h4>h5,s9>h9,s3>s9,d9>c9,d9>d1,h3>h4,h3>s3,s7>s10,d8>d3,h6>h11,d13>d12,d10>d4,d2>d10,d5>d2,c12>s12,c12>c8,c2>c12,c4>c11,c4>s4,c4>c10,c5>d5,c2>c5,s2>s11,c2>s2,c7>c4,c2>c3,h2>h12,h2>c2,h6>h2,c7>c1,d7>c7,d7>d8,s6>h6,s6>s5,d7>s7,s1>s6,h1>s1,h1>h3,d13>h13,h7>h1,d7>h7,d7>d9,d13>d7,d11>d13,

s13,d9,s2,s10,h2,h3,s9,c2,c10,s3,c9,h10,c6,s12,d7,d12,s4,d5,d6,d3,d13,h12,h9,h8,h13,s6,c4,h6,c5,c3,c13,s5,c7,h4,d2,h5,d11,d10,d8,s8,d4,h11,c8,c11,s11,c1,d1,s1,s7,h7,c12,h1  
**234/1000: solving: solved in 3603 tries.**  
s10>s2,h3>h2,s9>d9,s9>s13,s10>s9,c10>c2,s3>s10,h3>s3,c9>c10,d12>d7,d12>s12,d6>d5,d6>c6,d12>d6,d13>d3,h12>d12,h12>h10,h9>h12,h9>c9,h9>h3,h8>h9,h13>d13,c4>s4,h6>s6,h6>h13,c3>c5,c13>c3,d10>d11,d8>d10,s8>d8,d4>d2,d4>h4,h5>s5,c11>c8,c11>h11,s11>c11,s11>s8,s1>s11,s7>s1,h7>s7,h7>h5,c7>h7,c7>c13,d4>c4,c1>c7,d1>d4,h1>h6,h1>d1,h1>h8,c1>h1,c12>c1,

h10,d2,c11,d6,d1,s1,c3,c2,d12,c4,s5,s2,s3,h3,h6,d11,h11,s8,s6,c6,c8,d3,c13,s9,d5,h5,s13,c9,d10,s4,h7,h2,c12,c7,c10,h4,s7,h1,c5,s12,s11,h12,s10,h9,d4,d13,d7,c1,d9,h13,d8,h8  
**235/1000: solving: solved in 152272 tries.**  
d1>d6,s1>d1,c2>c3,c2>d2,c11>c2,c4>c11,s2>s5,s3>s2,h3>s3,h6>h3,h11>d11,h11>h6,s8>s1,s6>s8,c6>s6,c6>c4,h11>h10,d5>d3,h5>d5,s13>s9,s13>c13,c9>c8,h2>h7,c7>c12,c10>c7,c10>d10,c10>c9,s4>s13,s7>s4,h4>h2,h1>h4,c5>h5,c5>c6,s10>s12,s10>c10,s11>s10,s11>h11,h12>d12,s7>s11,h1>h12,d13>d4,d7>d13,d9>h9,d7>d9,c1>c5,d7>s7,h1>c1,d8>d7,h13>h1,h8>h13,h8>d8,

h7,c5,c1,h9,h3,h8,d5,d12,d10,d7,c7,s10,c11,h12,s13,s6,d9,d13,h10,d1,s5,s7,c3,c9,d4,d2,h6,s11,s3,h11,d8,c2,c12,s2,s1,h1,d11,h2,c6,d3,h5,c4,s9,c10,h13,s4,c8,s8,d6,s12,c13,h4  
**236/1000: solving: solved in 51010 tries.**  
c1>c5,h3>h9,h8>h3,d12>d5,d10>d12,d7>d10,d7>h7,c7>d7,c1>c7,c11>c1,s6>s13,d13>d9,h10>h12,h10>s10,h10>h8,d1>d13,s7>s5,c9>c3,d4>d1,d2>d4,s11>s7,s3>s11,h11>h6,c2>c9,c12>c2,s1>s2,h1>s1,d11>h11,d11>d2,d11>c11,h2>h1,c4>c6,d3>d8,h13>h5,c10>c4,s8>s9,s4>s8,c13>c8,c13>c10,c13>c12,h13>c13,h13>h10,d3>s3,d6>d3,h4>h2,h4>h13,s4>h4,d6>d11,s6>s4,s6>d6,s12>s6,

h2,h6,d1,s6,h10,s2,s1,d13,c6,d7,c7,s10,d4,s3,c12,h5,h4,s12,h1,h3,d8,d2,d12,s8,d3,d6,c1,c3,s11,s13,d11,h13,h12,s5,c9,c5,s9,h11,d5,s4,d10,c4,s7,d9,h8,c8,c10,c13,c11,c2,h9,h7  
**237/1000: solving: solved in 14855 tries.**  
h6>h2,h10>h6,s2>s6,s1>s2,s1>d1,c7>d7,c7>c6,s10>s1,s10>h10,c12>c7,h4>h5,h3>h1,h3>s3,h4>h3,h4>d4,d2>d8,d12>d2,d12>s12,d12>d13,c12>d12,s8>s10,d6>d3,c1>c12,c3>c1,s13>s11,h12>h13,s5>s13,c5>c9,c5>s5,c5>c3,d11>d6,h11>d11,h11>h4,h12>h11,d5>c5,s9>s8,s7>s4,d10>d5,s7>s9,h8>h12,c10>c4,c13>c10,c11>c13,c2>c11,d9>d10,c8>c2,h9>d9,h8>h9,h7>s7,h8>h7,c8>h8,

d13,d11,h8,c5,s13,c7,h5,d12,c8,s11,s12,h10,c2,h6,s4,c11,c4,s7,c12,d2,d3,s6,s2,h4,d4,c6,s9,c1,s10,s5,d5,h2,h1,d6,s3,d9,s1,h3,h11,d1,h13,h12,s8,d7,c3,d10,d8,h9,h7,c9,c10,c13  
**238/1000: solving: solved in 776 tries.**  
d11>d13,h5>c5,h5>h8,s12>s11,c2>c8,h6>h10,c4>c11,c4>s4,c4>c2,c12>s12,c12>c4,c12>d12,c12>c7,h6>h5,d3>d2,s2>s6,d4>h4,s9>s2,c1>c6,s10>s9,s5>s10,d5>s5,d5>d3,d4>d5,c1>c12,h1>h2,h1>c1,d6>d4,h3>s3,h3>h1,d9>d6,d1>d9,s1>d1,s1>s7,h13>h11,h13>s13,h13>h6,h12>h13,h3>h12,s8>s1,c3>h3,d8>s8,d7>d8,h7>d7,d10>d11,h9>h7,c9>h9,c9>c3,c10>c9,c10>d10,c13>c10,

d7,h6,h4,c13,s12,s2,c9,s13,c10,s6,c7,s9,h9,h13,h8,h1,d5,d11,h10,d2,s4,d3,s1,s3,d6,h2,h7,c2,h11,h3,d10,d12,d4,s8,c11,s5,c1,h12,c6,c3,h5,c4,d13,s7,d8,s11,d9,c12,s10,c8,c5,d1  
**239/1000: solving: solved in 261464 tries.**  
h4>h6,s2>s12,s13>c13,s2>s13,c10>c9,h9>s9,h13>h9,h8>h13,h1>h8,d11>d5,s3>s1,s3>d3,s3>s4,h2>d2,h2>h10,d6>d11,d6>s6,h2>h1,h7>c7,h2>h7,h2>s2,h2>h4,d6>d7,c2>h2,c10>c2,h3>h11,d10>c10,d10>d6,d4>d12,s8>s3,h5>h12,c3>c6,c4>c1,c4>d4,c11>c4,h5>h3,s7>s5,d8>d13,s11>s7,c5>c12,c5>c3,c5>h5,c11>c5,s10>s11,s10>d10,s8>s10,c8>c11,c8>s8,d8>c8,d9>d8,d1>d9,

c13,c8,d6,s2,h5,d13,s13,c3,c5,s10,h9,d7,c6,c2,h1,c9,h2,d9,d12,s3,s9,h7,d3,s11,c4,s1,h3,d8,d11,s7,h13,c11,c12,s8,s12,h6,h4,s5,c10,c7,d5,h12,s4,d4,c1,h11,s6,d10,h8,d2,d1,h10  
**240/1000: solving: solved in 41628 tries.**  
c8>c13,d13>d6,s13>d13,s2>s13,c3>c8,c5>h5,c2>c6,h1>h9,c9>c2,h2>h1,h2>s2,c9>c5,d9>d7,d12>d9,s9>s3,s9>c9,s10>s9,h7>h2,d3>d12,d3>c3,s11>s10,d11>d8,s7>s1,s7>h7,s11>s7,h3>d3,c11>c4,c11>s11,d11>c11,s12>s8,s12>c12,h4>h13,d5>s5,c7>c10,d4>s4,d4>d5,d4>h4,d4>d11,h12>s12,c1>c7,h8>h11,h8>h12,d1>d2,d1>c1,d1>d4,h6>h8,d10>d1,h10>d10,h10>h3,h6>h10,s6>h6,

d9,h13,d4,h2,s6,c11,h8,d6,d7,s2,s3,d8,c4,c2,h11,d5,d2,s9,d13,c3,s11,s5,c12,s4,s8,h3,s1,c5,h1,d3,h4,h5,h6,c6,s7,h12,c8,s10,h7,c1,d11,d12,s13,c7,d10,h10,s12,c10,d1,c9,c13,h9  
**241/1000: solving: solved in 38552 tries.**  
h8>h2,d7>d6,s2>s6,s3>s2,d8>d7,d8>h8,d8>d4,c4>c11,c2>c4,d2>d5,s11>s9,s5>s11,c12>c3,s4>s5,s8>s4,c5>c12,h1>s1,h1>h3,d3>d13,h4>h1,h5>h4,h5>c5,h6>h5,c6>h6,s7>s8,h7>h12,h7>s7,c1>c6,c8>c1,d11>d3,d11>h11,d11>d8,c8>c2,d2>d11,s10>s3,c7>h7,c7>c8,d12>d2,s12>s13,s12>d12,s10>s12,c13>c10,c13>c7,h10>s10,c9>c13,h9>c9,h9>d9,h13>h9,h10>h13,d10>h10,d1>d10,

d10,s4,d8,d6,h13,s9,c1,s13,c10,h5,d4,d11,s8,s3,h8,s12,h6,h12,s1,h4,h1,h7,d5,d9,c13,s7,h2,c6,d2,c7,s2,d1,h10,c8,d3,h3,c11,s10,c2,c9,c12,c3,h9,s6,d13,c5,h11,d7,s11,s5,d12,c4  
**242/1000: solving: solved in 28089 tries.**  
d6>d8,s9>s4,d11>d4,s3>s8,h8>h5,s12>s3,h6>h8,h12>s12,h1>h4,h1>s1,h1>h12,h7>h1,d9>d5,s7>h7,d1>d2,c8>c7,h3>d3,h3>h10,c11>c8,c2>s2,c2>c11,c2>h2,c2>c13,c6>c2,c12>c9,c3>c12,h9>h3,h9>d9,h9>h6,s10>s7,s10>c10,s10>s13,s6>c6,s6>s10,h9>h13,d1>c1,s6>d6,s6>s9,d12>d7,d12>d13,d12>d1,d12>d10,d11>d12,h11>h9,s11>h11,s11>s6,s11>d11,s5>s11,c5>c3,c5>s5,c4>c5,

c9,s4,s1,s2,s8,s6,d12,s13,h8,h7,s12,s5,c2,c1,c13,h10,d9,h4,d5,s7,s9,h12,h2,d13,d11,c3,d1,h9,d10,c11,d6,d8,c10,s10,h5,s11,h1,c5,c4,s3,c12,d4,c8,h13,h3,h11,d2,h6,d3,c6,c7,d7  
**243/1000: solving: solved in 44188 tries.**  
s1>s4,s2>s1,s8>s2,s6>s8,h7>h8,s12>d12,s12>s6,s13>s12,c1>c2,c13>c1,c13>s13,c13>c9,s9>s7,s9>d9,h2>h12,d11>d13,d8>d6,c10>d10,c10>c3,c11>c10,c11>d11,d1>d5,h5>h9,s11>s10,s11>c11,c12>c5,c4>c12,c8>c4,h3>h13,h6>h3,h11>h6,d3>d4,d3>s3,h11>h1,d3>d8,d2>d3,d2>h2,d2>d1,s11>s9,h11>h4,h11>s11,h11>h10,h5>s5,h11>h5,c6>c8,d7>d2,c7>c6,c7>d7,c7>c13,h7>c7,h11>h7,

s8,c7,s10,d2,h8,s12,h3,h12,h10,d10,c3,h4,d11,d3,c5,c13,s9,h6,h13,s3,d13,s11,c6,c10,d1,c12,c2,s1,h9,d9,s5,s7,c4,s2,d8,d6,c1,c9,s4,d5,h2,d12,h1,d7,h7,c8,h11,s6,c11,d4,s13,h5  
**244/1000: solving: solved in 140428 tries.**  
s12>s10,h3>h8,h12>h3,h10>h12,d10>h10,d10>d2,c3>c7,d3>d11,c13>c5,h13>h6,c10>c6,d1>d13,c12>c10,c2>c12,s1>d1,s1>s3,s11>s1,h9>h13,h9>s9,h9>h4,s5>s11,s7>s5,s2>c2,s2>s7,d9>d3,d9>h9,d9>d10,c13>c3,d8>d9,c9>c1,d5>d6,s4>c4,s4>s12,d12>d5,h1>h2,d7>d12,s13>s6,c11>c8,c11>c9,h11>c11,h1>h11,h7>h1,s13>s2,s13>c13,s13>s8,s4>s13,d7>d8,d4>s4,d7>d4,h7>d7,h5>h7,

h10,d6,s3,h9,h6,s2,d12,d11,c1,h8,h2,d5,s8,c8,c6,s10,s5,h3,c10,s4,s6,s12,d9,s7,c4,c11,c13,c12,d13,h7,h4,c2,d3,d2,h1,h12,c7,s11,d4,d8,c3,d1,d7,c5,h13,s13,c9,s1,h11,d10,h5,s9  
**245/1000: solving: solved in 30632 tries.**  
h9>h10,h6>h9,d6>h6,s2>s3,d11>d12,h2>h8,h2>s2,c8>s8,c6>c8,s5>s10,c10>c6,s6>s4,s12>s6,c11>c4,c13>c11,c12>c13,c12>s12,c12>c10,s7>s5,d13>d9,h7>s7,h3>h7,d13>d5,h4>h3,d2>d3,d2>c2,d2>d13,d2>h2,d2>d6,d11>d2,c12>c1,h1>h4,d8>d4,c9>c5,c9>c3,s13>h13,s1>s13,d10>d7,d10>d8,c9>c7,c9>c12,d1>d10,s1>d1,h11>h12,s9>s11,s9>c9,s1>s9,h1>s1,h11>h1,h11>d11,h5>h11,

c12,h7,c2,c3,c4,d13,s1,h8,h3,d8,d4,d12,h2,s2,s9,h6,c10,d3,h1,s6,c1,h13,c13,h10,d1,d9,s5,s11,c5,d6,d5,h5,d10,d7,c6,c11,c9,s12,c8,s3,h9,h4,d2,s13,s7,s8,d11,s4,h11,c7,h12,s10  
**246/1000: solving: solved in 7406 tries.**  
c3>c2,c4>c3,h3>h8,d8>d13,d4>d8,d4>c4,h3>h7,s2>h2,s9>s2,h1>h6,h1>s1,d3>d12,d3>h3,d4>d3,c13>h13,c13>c1,h10>c10,d9>d1,s5>s6,s11>s5,d5>d6,d5>c5,d5>d9,h5>d5,h5>h10,d7>d10,c11>c6,c11>s11,c13>c11,h4>h9,s13>s3,d11>d2,s4>s8,c7>s7,h11>d11,h11>h4,h12>h11,c7>c8,c7>d7,c9>c7,c9>s9,c9>c12,h5>h1,c13>c9,h12>h5,s12>h12,s13>c13,s4>s12,s4>d4,s4>s13,s10>s4,

d1,d7,s8,h9,d12,h4,h2,h3,c4,d5,s12,s1,c10,c9,d8,s2,d11,d9,s11,c7,c1,c2,h12,h7,s4,c13,d3,c11,h6,c5,d4,s7,h8,s9,d6,d2,c3,h5,s10,c8,s3,h13,h10,d13,c6,s13,h11,d10,s6,s5,c12,h1  
**247/1000: solving: solved in 15925 tries.**  
d7>d1,d12>d7,h4>h9,h2>h4,h3>h2,s1>s12,c10>c4,c9>c10,d9>d11,c1>c7,c2>c1,c2>s2,h7>h12,d2>d6,c8>c3,c8>h8,c8>c5,s9>s7,s10>s9,h10>h5,s3>s10,s13>h13,d10>d13,d10>d2,s6>s13,s6>s3,c6>s6,c6>h6,c6>c13,c8>c6,d10>d3,h10>d10,h11>h10,h11>h7,c11>h11,c11>c2,s4>s11,d4>d9,c8>c11,c8>d8,d4>d5,s4>d4,s5>s4,s1>s5,c12>c9,c12>d12,h1>h3,s1>h1,c8>c12,s8>c8,s1>s8,

c11,c7,c8,d6,s11,d13,c12,s7,h4,d4,s13,h11,s2,c2,h2,h8,d9,h13,h7,h5,d7,d12,s6,d10,c10,d1,c5,d2,d8,h9,c6,c3,s8,c4,s10,s4,h6,h10,s5,c13,c1,s9,h3,h1,s12,d5,c9,d11,s3,d3,h12,s1  
**248/1000: solving: solved in 19699 tries.**  
c7>c11,c8>c7,s7>s11,d4>h4,s13>d13,s13>s7,c12>c8,s2>s13,c2>s2,h2>h11,h8>h2,h7>h13,h5>h7,d12>d7,c10>d10,d1>d12,c5>c10,c5>h5,d8>d2,c6>s6,c3>c6,s4>s10,s4>c4,s4>s8,h10>h6,s9>s5,s9>h9,s4>s9,c1>c13,h1>h10,c1>h1,s12>s4,c9>c1,c9>c3,c9>d9,c9>c2,c5>c9,d8>d1,d8>h8,d8>d4,d5>d8,d5>c5,s12>c12,d11>d6,d5>d11,d3>d5,h3>d3,h12>s12,h3>h12,s3>h3,s1>s3,

c2,c9,c6,c7,s2,s5,d6,d12,s9,c5,d2,s11,h10,c12,c8,h9,h12,d7,d5,d8,h4,h5,h1,s10,d3,c1,s12,h3,d1,s6,s3,c13,s4,c4,d11,d13,h11,h13,s13,c11,s1,h8,d4,h6,s8,d9,c3,h2,s7,c10,d10,h7  
**249/1000: solving: solved in 105129 tries.**  
c9>c2,c6>c9,c7>c6,s5>s2,d12>d6,c5>s5,c5>c7,c8>c12,h12>h9,d5>d7,d8>d5,h5>h4,h1>h5,d3>d8,d1>c1,d1>d3,h1>d1,h1>h12,s10>h10,s10>s11,s12>s10,s12>d12,s9>s12,c8>c5,h3>h1,s6>s9,s3>h3,c4>s4,c4>c13,d11>d2,d13>d11,h13>h11,c11>c4,s13>h13,s8>h8,c10>c3,h7>h2,h7>h6,s7>h7,s7>s1,s7>s3,s8>s7,s8>c8,s6>s8,s13>s6,d13>s13,c10>c11,d9>d4,d10>d9,d10>c10,d10>d13,

s4,s7,d12,h3,h1,h13,c6,c4,d6,c13,h12,d9,d13,c1,h6,c12,s6,h10,c8,d3,c3,h11,h4,d5,h5,s2,s13,s12,d1,h2,c5,d11,s11,s1,d10,c10,s8,c2,s5,c7,d8,d2,s10,h8,d4,s3,c9,c11,d7,s9,h7,h9  
**250/1000: solving: solved in 6048 tries.**  
s7>s4,h1>h3,h13>h1,c4>c6,d6>d12,c13>c4,c13>h13,d9>d6,d13>d9,c13>d13,c12>h12,c12>c13,c1>c12,s6>h6,c8>c1,c3>d3,c3>c8,h11>h10,h4>h11,h5>d5,h5>h4,s13>s2,s12>s13,h2>h5,s11>d11,s11>s12,s1>s11,d1>s1,c10>d10,c10>c5,d2>d8,d2>c2,d2>d1,d2>h2,c10>c3,s3>s10,d7>d4,d7>c7,d7>d2,h8>s8,s5>s6,s9>s3,s9>s5,d7>s7,h7>h8,h7>d7,c9>s9,c9>c10,h9>h7,c9>h9,c11>c9,

d6,s7,c6,s4,s8,h11,d8,s10,c5,d13,h2,c1,d9,c9,c2,h9,s5,d7,d5,h5,s2,d10,h1,s12,h12,d11,c12,c10,s3,c3,s11,d2,d1,h8,h4,c13,h6,h10,c8,s9,s1,s6,h7,c7,d12,d3,d4,c11,h3,c4,s13,h13  
**251/1000: solving: solved in 3947 tries.**  
s8>s4,s10>s8,c1>c5,c9>d9,c9>c1,c2>h2,h9>c9,d7>d13,d5>s5,h5>d5,h5>h9,s2>c2,s12>s2,h12>h1,c10>c12,c10>d10,c3>s3,c3>c10,s11>d11,s11>s12,d1>d2,h4>h8,h10>h6,s1>s9,s6>s1,h7>h10,c7>h7,c7>c13,c8>c7,d3>d12,c4>d4,c4>c8,c4>h4,d3>d1,s13>s6,h13>s13,h13>h12,c11>c4,h3>h13,h3>c3,h3>h5,d3>h3,d3>d8,s11>h11,s11>s10,d7>d3,c11>c6,s11>c11,d7>d6,s7>d7,s11>s7,

d11,s6,c8,d13,h1,d10,s5,s13,c7,c1,h8,s11,c13,s3,h10,d9,d2,h7,c9,c6,d6,h9,d5,s2,h3,c3,s12,h13,s10,h6,d7,d4,s7,s1,s9,c5,h12,c2,s4,h4,c4,c10,s8,h11,h5,d3,c11,d12,c12,h2,d8,d1  
**252/1000: solving: solved in 78864 tries.**  
d13>d11,s13>s5,c1>c7,c1>h1,c1>c8,d10>d13,c13>s13,c13>c1,s11>s6,s3>s11,h10>h8,h10>d10,d2>d9,c9>c13,c6>c9,d6>c6,d2>d6,h7>h10,h9>h7,d5>d2,h3>s3,h3>h9,c3>h3,s12>s2,d4>d7,s7>s10,s1>s7,s9>s1,h12>h6,h12>s12,h13>h12,d4>d5,s4>s9,c2>c5,c4>s4,c10>c4,c10>c3,c11>h11,d12>d3,c12>c11,c12>c2,c12>c10,h5>h13,h4>h5,d8>s8,d1>d8,d12>d1,d12>c12,d4>d12,h4>d4,h2>h4,

d5,h11,c7,s1,s8,c9,c2,h8,d4,c13,d3,d9,h9,h1,c3,s4,d2,s11,d13,s5,h5,s3,c4,h13,d12,h4,h3,d1,d11,s2,c11,s7,d10,d7,d8,c1,h12,h10,h2,h7,c10,s10,h6,c12,s6,c6,s9,c5,s13,c8,d6,s12  
**253/1000: solving: solved in 470 tries.**  
s8>s1,c2>c9,c13>c2,d3>d4,d9>d3,h9>d9,h9>h8,h1>h9,h5>s5,s3>s11,s3>c3,s3>s8,s4>s3,d13>d2,h13>d13,h13>h1,h13>c13,h13>h11,h5>h13,h5>d5,c4>s4,c4>c7,h4>h5,c4>h4,d11>d1,d7>d10,d7>s7,d7>d11,d8>d7,c1>c11,h10>h12,h2>h10,h7>h2,s10>c10,s10>s2,h6>h7,c6>s6,c6>c1,h6>c6,s9>s10,h6>h3,s13>s9,c8>c5,c8>d8,c8>c4,s12>s13,c12>s12,c12>c8,d12>c12,d6>h6,d6>d12,

h11,d12,c7,h9,h5,h6,d1,c5,s5,s1,d2,h10,s7,s3,d11,d3,c4,s13,s10,s11,c12,s6,d4,c9,h3,h8,d8,s4,h7,c2,h2,c11,h1,c6,s9,h12,h4,d7,d9,s8,d10,c13,h13,d5,d13,s2,d6,s12,c1,c8,c10,c3  
**254/1000: solving: solved in 10973 tries.**  
h9>h11,h5>h9,h6>h5,s5>c5,s1>s5,s1>d1,d2>d12,s7>c7,s1>s7,h10>h6,s3>s1,d3>d11,d3>s3,d3>d2,s10>s13,s10>h10,s11>s10,c12>c4,s6>s11,h8>h3,d8>h8,s4>d4,s4>s6,c9>c12,c2>c9,h2>h7,c11>c2,h1>h2,c6>c11,h4>h12,d9>d7,s8>s9,d10>d9,d6>d5,d6>d10,d13>d6,h13>h4,d13>h13,c13>d13,s12>s2,c8>c13,c8>d8,c1>h1,c10>c1,c3>c10,c3>d3,c6>c3,c8>c6,s8>c8,s8>s4,s12>s8,

s11,h7,c3,s2,h4,c7,d13,s4,h11,d7,s10,d10,h3,d2,h9,h10,h5,c11,d11,c1,c2,d5,s7,d1,s12,h1,d9,c4,c8,d4,s9,c12,h13,c5,c6,d6,s6,s3,h6,s5,h2,c13,d8,s13,d3,d12,s8,c10,h8,h12,s1,c9  
**255/1000: solving: solved in 24781 tries.**  
s2>s11,c7>h7,c3>c7,h11>h4,d10>s10,d10>d7,h10>h9,h10>d10,h10>h11,h3>h10,h3>c3,s4>s2,d2>d13,d11>c11,c2>c1,c2>d2,d5>d11,d5>h5,d9>d1,c8>c4,c12>c8,c6>c5,d6>c6,d6>d4,s6>d6,s6>s12,s9>s6,s9>d9,d12>d3,s8>d8,s8>s5,c10>c13,s13>s8,s13>h13,s3>s13,h6>h1,h8>h2,h12>h8,h12>h6,c12>h12,s3>s7,s3>h3,s9>s3,d12>d5,c12>d12,c12>c2,c10>c12,s1>s4,s9>s1,c9>c10,c9>s9,

d1,d11,s9,c3,h1,c5,d10,s3,s13,c4,d9,h5,s8,s5,s6,s7,c12,s10,s2,s4,d6,s12,d3,h10,c6,h12,d7,h11,c1,s1,h2,d4,d5,h13,c2,c9,h7,h3,h8,d12,d8,d2,c10,c8,c7,h6,c13,s11,d13,h4,c11,h9  
**256/1000: solving: solved in 11897 tries.**  
d11>d1,s13>s3,c4>c5,s8>s13,s5>h5,s6>s5,s7>s6,s2>s10,s4>s2,s12>c12,s12>s7,s4>s12,d3>d6,s1>c1,d5>d4,c2>h2,c9>c2,h7>h13,h3>h7,h8>h3,d8>d12,d2>d5,d8>h8,d8>d2,c8>c9,d8>c8,d8>d7,c7>c10,h6>h11,h6>c6,h6>h10,d8>d3,d8>s8,d8>d10,d9>d8,s1>s4,h12>h6,c13>c7,s11>s1,h4>h12,h4>c4,h4>h1,c11>s11,c11>c3,c13>c11,h9>h4,d13>c13,d9>h9,d9>d13,d9>s9,d9>d11,

d1,c5,h13,s6,c12,s3,d13,s9,s7,h10,c11,d3,s11,s5,c3,c2,d11,c1,h4,d2,d7,c7,d10,h8,s12,d6,s4,c13,h6,h3,s10,c6,c9,c10,h11,c4,h9,d5,h7,h2,h1,d9,h12,s8,d8,s13,d4,d12,h5,c8,s2,s1  
**257/1000: solving: solved in 24787 tries.**  
c12>c5,s3>s6,s7>s9,s5>s11,c3>c11,d3>c3,d3>d13,d3>s3,d3>d1,d2>d11,d2>c2,d7>d2,d7>s7,d7>d3,h10>h13,c1>c12,h8>h4,h6>d6,h3>h6,c9>c6,c10>c9,c10>s10,c10>c13,h11>h3,c4>c10,c4>s4,h2>h7,h1>h2,d9>h9,d5>d9,h1>h11,h12>h1,h12>s12,d5>d10,d8>s8,d4>c4,d8>d4,d12>h12,d8>d12,c8>d8,h5>d5,c8>h8,c7>c8,h5>h10,s5>h5,c7>d7,c1>c7,s13>s5,s2>s13,s1>s2,s1>c1,

s13,d10,c6,h2,h7,s7,d2,s8,h11,h1,c4,s1,h3,s5,s2,d5,h8,c5,c11,s11,h13,d9,c8,h12,d11,c7,s12,s4,d4,d3,s9,c1,c10,s6,h9,c2,d13,d1,h4,c9,c13,d12,d8,h10,d6,h6,s10,c12,h5,s3,d7,c3  
**258/1000: solving: solved in 4896 tries.**  
h7>h2,s7>h7,s7>s13,h1>h11,s1>s8,h1>s1,c4>c6,h3>h1,s2>s5,d5>d2,c11>c5,s11>c11,h12>h13,s4>s12,d4>s4,d3>d4,c1>c7,c10>c1,s6>s9,d1>d13,h4>h9,d12>d1,d8>d12,c13>c9,d6>d8,d6>s6,d6>d11,c2>c10,h6>h4,h6>d6,h6>h12,d3>d9,c2>c8,c13>c2,h10>h6,s10>h10,s10>s11,c12>c13,s3>d3,s3>s2,c3>c12,h5>h8,h5>d5,h3>h5,s3>h3,c3>c4,s3>c3,s10>s3,d7>s7,d10>d7,s10>d10,

s6,h2,h1,h5,s3,c2,h3,s10,s11,d2,d4,s5,c11,h11,c7,d11,d7,h6,h13,d12,s2,h12,d9,h7,c6,d3,h4,s12,c5,h8,h9,d5,c1,s13,d8,s7,c12,c4,c13,c9,c10,s1,d6,s9,s8,s4,c3,d10,d13,d1,h10,c8  
**259/1000: solving: solved in 381472 tries.**  
h1>h2,h5>h1,h3>h5,s3>h3,s3>s6,s11>s10,d4>d2,c11>s11,c11>c2,s5>s3,c7>c11,d11>h11,d11>d4,d7>d11,d7>c7,h13>h6,h12>h13,d12>h12,d12>d7,d3>d9,c5>c6,h9>h8,d8>d5,s7>s13,c4>c1,c10>c12,c13>c10,s9>c9,s1>s7,s4>s9,d10>d6,d1>d13,c8>c3,c8>s8,c8>c13,c8>d8,c4>c8,c4>h4,c4>c5,h9>h7,s4>c4,s4>s2,s12>s4,s12>d12,s12>s5,s1>s12,h10>h9,d10>h10,d10>d3,d1>d10,d1>s1,

d1,s13,d7,d4,c3,c2,h2,c1,c11,s9,d11,s11,h10,s8,h11,h1,c6,c7,h3,h13,h7,d12,s10,d9,d10,d3,s3,h6,h9,c10,h8,s2,h5,d6,h12,s12,c8,c4,s7,s1,c12,d8,s4,s6,d13,c13,c9,h4,c5,d2,s5,d5  
**260/1000: solving: solved in 3059 tries.**  
d4>d7,c2>c3,h2>c2,c11>c1,s11>d11,s11>s9,s11>c11,s11>s13,h10>h2,s8>s11,h11>h10,h1>h11,h1>d1,c7>c6,h13>h3,h7>h13,h7>c7,h7>h1,d12>d4,d10>d9,d10>s10,d10>d12,d3>d10,s3>d3,s3>s8,h9>h6,s12>h12,s12>s2,c4>c8,s1>s7,s4>s1,s4>c4,d8>d6,d8>h8,c12>s12,c13>d13,c5>c13,c5>h5,c5>c10,c9>c12,c9>h9,c5>c9,s4>s3,s5>s6,d2>d8,d5>d2,d5>c5,s5>d5,h4>h7,s4>h4,s5>s4,

c11,h3,s9,c12,s4,s8,d3,c9,h8,d7,d10,s13,s3,d1,d11,s1,c2,c10,s11,c6,h9,s10,s6,h13,c1,d4,h12,h4,d8,d13,h5,h1,d6,s2,d12,h11,s5,c3,c7,d5,s7,h2,h7,c4,c8,d9,c5,c13,d2,h10,h6,s12  
**261/1000: solving: solved in 36763 tries.**  
c12>c11,s4>s9,s8>s4,h8>s8,h8>h3,c9>c12,d7>d3,d10>d7,s3>s13,d11>d1,c10>c2,s11>d11,s11>s3,s1>s11,c6>c10,s10>s1,s10>d10,c6>c9,h12>h13,h4>d4,d13>d8,h1>h5,h1>c1,h1>h12,h4>h1,d6>d13,s2>s6,d12>d6,c7>c3,s7>s5,c7>s7,h2>h11,d5>d12,h2>s2,c13>c8,c5>c4,c5>d5,c13>c5,c7>c13,h7>c7,h7>h4,d9>h9,d2>d9,h2>d2,h7>h2,h10>h8,h6>h7,h6>c6,h10>h6,s10>h10,s12>s10,

s11,h8,s6,s10,s5,d13,h12,s8,d7,c11,d3,h7,d9,h10,s9,c9,d2,h9,h11,s12,c1,d11,h4,h13,c10,c13,d10,c4,d8,c12,c7,d6,d1,h6,c6,s4,s7,s1,s13,c2,c5,d4,d12,h1,c8,s3,h2,s2,h5,c3,d5,h3  
**262/1000: solving: solved in 7626 tries.**  
s10>s6,s5>s10,h12>h8,h7>d7,d9>d3,h10>h7,s9>d9,s9>s8,c9>c11,h9>h10,h9>s9,h9>h12,c9>h9,d2>d13,s12>s5,d11>d2,d11>s11,h11>d11,h13>h4,c13>c10,c13>h13,c13>c1,c7>c12,d1>d6,c6>h6,s7>s4,s7>c7,s1>s7,d1>s1,d1>d8,c5>c6,h2>h1,s2>h2,s2>c2,s2>s13,d4>d1,d4>c4,d4>d10,c3>c8,s3>s2,d5>d12,d5>d4,c5>d5,c5>c13,h5>c5,h5>h11,s3>s12,c3>s3,c3>c9,h3>c3,h3>h5,

c10,s5,s11,d13,h8,s4,h7,c4,h13,s1,d2,c2,c11,s8,d10,s7,s12,d4,s6,h6,d7,c7,h12,c9,d5,s9,h10,h9,h11,c12,d6,h4,d12,c8,c1,c13,h1,d11,h3,d1,d3,h5,s13,s10,s3,c6,s2,c5,d8,c3,d9,h2  
**263/1000: solving: solved in 39845 tries.**  
s11>s5,s4>s11,h7>h8,c4>s4,c4>c10,h13>h7,h13>d13,c2>d2,c2>c4,c11>c2,s8>s1,s12>s7,h6>s6,c7>d7,h9>h10,h9>s9,h9>h12,c9>h9,c9>c7,d5>d4,h4>h11,d12>d6,d12>c12,c8>c9,c1>c8,c13>c1,d1>h1,d1>d12,d11>d1,d3>h3,h5>h4,d3>d11,s13>c13,s13>s12,s13>h13,s8>s13,d5>d10,s2>s10,c5>c6,c3>s3,c5>c3,d8>d3,h2>s2,h2>h6,h5>h2,d8>s8,c5>h5,c5>c11,d5>d8,d5>c5,d9>d5,

c3,h10,s8,h11,h7,s1,h2,h9,c4,c12,h5,d7,h4,d9,s11,c5,c10,h6,c6,c1,d5,s9,s10,s4,s12,h13,d13,d12,s6,d10,h8,d3,d6,h12,s2,d2,c7,d4,h1,d1,d8,c11,c13,c9,s5,s13,h3,c8,d11,s3,c2,s7  
**264/1000: solving: solved in 146591 tries.**  
h7>h11,h9>h2,c12>c4,c10>c5,c6>h6,c6>c10,c1>c6,d5>d9,d5>h5,d7>d5,h4>h9,c1>c12,s9>s11,s10>s9,s4>s10,s4>h4,s4>s1,d7>h7,d13>h13,d12>d13,d12>s12,d12>d7,d6>d3,d6>s6,d6>d12,d10>d6,h12>h8,s2>s4,d2>s2,d2>d10,h1>h12,d1>d4,d1>c1,d8>d1,c9>c7,c11>c9,s13>s5,s13>c13,h3>h1,d11>c11,d11>d2,d8>d11,c8>d8,h3>h10,h3>c3,s7>s13,s3>s7,s3>h3,s8>s3,c8>s8,c2>c8,

d7,c7,s8,c3,s10,d5,c12,c4,h9,d12,h11,c1,s3,h4,d3,h6,d1,s6,h13,s4,c9,d8,h10,s13,h5,c10,d2,h7,s9,s12,s11,d13,h8,c6,s2,c8,d9,d11,d4,d10,s5,h1,c5,c2,c13,h12,c11,d6,h2,h3,s1,s7  
**265/1000: solving: solved in 392200 tries.**  
c7>d7,c12>c3,c4>c12,h4>h11,d3>s3,d3>d12,h13>h6,s4>s6,d8>d1,s13>s4,h5>h10,h7>h5,s12>s9,s11>s12,c8>h8,c6>c8,s2>s11,s2>d2,c6>c10,d9>d13,d11>d9,d4>d11,s5>s2,d10>d4,c5>s5,c11>c2,c11>c5,c13>c11,c13>c9,c13>s13,c13>c1,h13>c13,h13>h9,d10>d8,d6>c6,h12>h7,h2>h12,h3>h2,h3>d3,h3>h13,h4>h3,d6>d5,h4>c4,d10>d6,h1>h4,s1>h1,s1>s8,s10>s1,s7>c7,s10>s7,d10>s10,

h7,h1,s11,h11,h13,d9,c13,c9,c8,d3,c6,h8,c7,d5,s2,c4,s7,h10,c1,s4,c3,h3,s10,d6,c5,c12,d2,s12,h5,s13,s8,h6,d4,s1,d13,d11,d10,d12,s5,s6,s9,c11,c2,h9,d8,h12,d1,h2,d7,h4,s3,c10  
**266/1000: solving: solved in 1664 tries.**  
h1>h7,h11>s11,h11>h1,h13>h11,c9>c13,c9>d9,c8>c9,h8>c8,h8>h13,c7>c6,c4>c7,s7>s2,s4>s7,c3>c1,h3>c3,h3>h10,c12>c5,s8>s13,s1>s8,d13>d4,d11>d13,d10>d11,d12>d10,s5>s1,s5>h5,s5>s12,d12>d2,d12>c12,d12>d6,s6>h6,s6>s5,s9>s6,h9>s9,c2>c11,h12>h9,h12>h3,h2>c2,d1>d12,d7>d1,h2>h12,d8>d7,h4>h2,h4>c4,d8>d5,d8>h8,d3>d8,s4>h4,s3>d3,s4>s3,s10>s4,c10>s10,

s2,h2,c4,d7,d2,h8,c5,c10,s3,h9,s11,h10,s1,d13,c3,d4,c12,h6,s6,s4,h11,d11,h4,c8,d12,d9,d5,s12,d1,c1,c9,c13,s5,d8,s13,c11,s10,s9,c6,h3,c2,h12,h7,c7,d10,s8,d6,h13,s7,d3,h1,h5  
**267/1000: solving: solved in 20760 tries.**  
h2>s2,d2>d7,h8>h2,c10>c5,s6>h6,s4>s6,d11>h11,d11>d4,h4>s4,d12>c12,d12>d11,c8>c3,d5>d9,s12>d12,s12>s1,d5>d13,d1>d5,c1>d1,c8>c1,h4>h10,c9>c8,c13>c9,s13>c13,s13>s12,s5>s13,s10>s5,s9>s10,s9>h9,s9>s3,s11>s9,c11>s11,c11>c10,d8>d2,h4>c4,h4>h8,c6>c11,c7>c2,h7>h12,s7>s8,s7>c7,h7>s7,d6>d10,d6>c6,d6>d8,h7>h4,d3>d6,h3>d3,h3>h7,h13>h3,h1>h13,h5>h1,

h3,h6,s4,d2,s13,s3,s2,d9,h11,c11,c8,h2,s10,s11,h12,s6,d10,s5,c12,c3,c10,s12,d4,c7,d13,c2,d12,s1,c9,d3,d5,d11,d6,h7,c13,h4,c1,h13,s8,h9,c5,c6,d1,s7,c4,h1,h5,h10,d7,d8,h8,s9  
**268/1000: solving: solved in 17281 tries.**  
h6>h3,s3>s13,s2>s3,s2>d2,s2>s4,h11>h6,c11>h11,c8>c11,s10>s2,s11>s10,h12>h2,s6>s11,c12>h12,c12>c8,d10>d9,c10>c3,c7>c10,d13>d4,c2>c7,d12>d13,d12>s12,d12>d10,d5>d3,d11>d5,d6>d11,c13>c9,h4>h7,c1>c13,c1>s1,c1>c2,d6>d12,d6>s6,c1>c12,s8>s5,h13>h4,h9>h13,h1>d1,h5>h1,h5>h9,c5>h5,c4>c5,c4>c1,c6>c4,d6>c6,h8>h10,d8>d7,d8>h8,d8>d6,s8>d8,s7>s8,s9>s7,

c4,h13,d8,h7,h5,s2,h1,h8,s6,h10,c8,s10,h9,s3,c12,h12,c7,h6,s1,h4,s7,d1,s12,c10,s9,c3,h3,d2,c2,s8,c9,s5,c6,s11,d12,d7,d10,d5,d3,d13,d6,c1,h2,c13,d9,c5,s13,d4,s4,c11,d11,h11  
**269/1000: solving: solved in 438 tries.**  
h5>h7,h8>h1,h8>d8,h8>h13,h5>h8,s6>s2,s10>s6,h10>s10,h10>h5,c12>c8,h12>c12,h12>h10,h9>h12,c7>c4,d1>s1,s12>s7,h3>c3,c2>d2,c2>c10,c9>s9,c9>c2,h3>h4,h3>s3,h3>h9,h6>h3,s5>s8,d7>d12,d10>d7,d5>d10,d5>s5,d5>d1,c6>c9,c6>h6,c6>c7,s11>s12,d13>d3,d6>d13,d6>c6,d5>d6,d4>d9,s13>c13,s4>s13,s4>s11,d4>s4,d4>d5,c11>c5,h11>h2,c11>h11,c11>c1,d11>c11,d11>d4,

c1,s3,s13,c6,h4,d10,d9,s9,s11,d13,h11,h1,s10,c8,s5,s1,c9,h3,d3,d11,d1,s7,s6,h7,h8,c12,h5,h13,h12,c3,s8,s4,c11,h6,d2,d5,c10,s2,s12,c5,d6,d12,h2,c4,d4,h9,d8,h10,c7,c13,c2,d7  
**270/1000: solving: solved in 3689 tries.**  
s13>s3,d9>d10,s9>d9,s9>s13,s11>s9,h1>h11,s1>s5,s1>h1,s10>s1,c9>c8,d3>h3,d3>d13,d11>d3,d11>s11,c9>c6,s6>s7,h8>h7,h13>h5,h12>h13,h12>c12,h12>h8,s8>s6,s4>s8,s4>h4,s10>s4,d1>d11,d1>c1,c3>c9,c11>c3,h6>h12,d5>d2,c10>s10,c10>c11,d5>d1,s12>s2,c5>c10,d12>d6,d12>s12,d12>d5,c4>c5,h9>h6,d4>c4,d4>d12,h10>h9,d8>d4,h2>h10,c2>h2,c7>c2,d7>d8,c7>d7,c13>c7,

c7,d8,h10,h11,c9,c8,h8,d13,h3,h5,c12,d3,c5,s3,h9,d4,s12,s11,d12,h12,s2,h13,d9,d1,c13,c4,s13,c2,c1,s9,s6,d11,d7,c3,h2,s1,h7,d6,d2,h1,c10,c6,d10,s4,s7,h6,h4,s10,s8,c11,d5,s5  
**271/1000: solving: solved in 3521 tries.**  
h11>h10,c9>c7,c8>c9,d8>c8,h8>h11,h8>d8,h5>h3,d3>d13,c5>c12,c5>h5,s12>s3,s11>s12,d12>d4,h12>d12,h12>h9,d1>d9,c4>c13,s13>h13,s13>s2,c2>c4,c1>c2,c1>d1,s6>s9,d7>d11,c3>c1,s1>s6,h7>h2,h7>d7,d2>d6,h1>s1,h1>h12,h7>h1,c6>c3,d10>c10,d10>d2,s4>s13,h4>h6,s10>d10,s7>s10,s7>h7,s4>s7,c11>c6,c11>c5,s11>c11,s4>s11,h4>h8,d5>d3,s5>d5,s4>s5,s4>h4,s8>s4,

h8,d4,d3,d13,h13,h9,c1,d9,d6,h4,s2,s11,s1,d1,s9,d5,h3,c2,h11,h6,c13,h2,d8,c6,d11,s13,s7,c3,s4,c11,d10,d7,h1,d2,h10,s10,c5,c4,c10,c9,h12,h7,s8,d12,c12,s5,c7,s6,c8,s12,s3,h5  
**272/1000: solving: solved in 32206 tries.**  
d3>d4,d13>d3,h13>d13,h13>h8,h9>h13,d6>d9,h4>h9,s11>s2,s1>s11,d1>s1,d1>d6,d1>c1,h6>h11,h2>c2,h2>h3,h6>h2,d8>d5,c6>c13,c6>h6,s7>s13,c3>c6,s4>s7,c11>c3,d11>c11,d11>d8,d7>d10,s10>h10,c4>c5,c10>c4,c10>s10,s5>s8,d12>h12,d12>d2,c9>c10,c8>c12,c8>c9,c7>c8,c7>d7,h7>c7,h1>h7,d12>d11,s6>s4,s12>s6,s12>d12,h1>d1,h1>h4,s12>s9,s5>s12,h5>h1,s5>h5,s3>s5,

d2,d3,c8,s12,s2,h7,h5,s9,d6,d5,h13,s8,s4,d11,h2,s6,d4,h12,c13,h10,c10,h9,h6,s11,s5,s7,d1,c1,d8,c7,h8,s13,c11,c2,s3,c4,c3,d7,c6,d13,c9,c5,s10,d10,c12,h4,h1,h11,d12,s1,d9,h3  
**273/1000: solving: solved in 299437 tries.**  
d3>d2,s2>s12,h5>h7,d5>d6,h13>h5,s4>s8,s6>s4,c10>h10,c10>c13,h6>h9,s5>s11,s7>s5,c1>d1,c1>c10,c11>c7,c2>c11,s3>s13,c6>c4,c6>c2,c6>h6,c6>c1,h8>d8,c3>s3,d7>s7,d7>d4,d10>s10,d10>d13,c5>c3,c12>c5,c12>h12,c6>c12,d10>d7,h1>h4,h11>h8,h11>h2,h11>d11,c6>s6,d12>d10,c9>c6,d9>d12,d9>d5,c9>d9,h3>h11,h3>h13,h3>d3,c9>c8,s9>s2,h1>h3,s9>c9,s1>s9,s1>h1,

c5,d3,d2,h13,s6,s4,d9,h8,s5,d7,s7,s13,c2,c1,d6,s9,s2,c4,c10,c6,s1,d11,c7,h11,d5,d10,h1,c3,d1,h6,s8,d13,d12,s11,h12,h7,d4,h4,h10,c12,c13,c11,h9,h3,s12,d8,c8,h2,h5,c9,s3,s10  
**274/1000: solving: solved in 254497 tries.**  
d2>d3,s4>s6,d9>d2,s7>d7,s7>s5,s13>s7,s13>h13,s4>s13,c1>c2,s2>s9,c4>c1,c10>c4,c6>c10,d6>c6,d6>d9,s1>s2,d5>d11,d10>d5,h1>h11,h1>s1,h1>h8,d10>d6,c3>c7,h6>h1,d12>d13,h4>d4,h4>h7,h10>h4,c13>c12,c11>c13,h3>h10,c11>s11,s12>h12,s12>s8,d12>s12,c11>c3,d12>d1,d8>d12,h2>h3,h5>h2,h5>h6,c8>c11,h9>h5,c9>h9,c9>c5,c8>c9,d8>c8,d10>d8,s3>s4,s10>s3,s10>d10,

c11,s7,h2,d9,c3,c7,h1,d13,s5,d3,c1,d10,s6,d6,c2,s10,c9,d8,d4,d2,c13,c6,c10,h9,d12,h7,s11,d5,d11,s1,d7,s9,h6,s3,s13,c5,h12,c8,c4,h8,h4,d1,h3,h5,h10,s8,s12,s2,s4,c12,h11,h13  
**275/1000: solving: solved in 902073 tries.**  
c7>c3,c7>s7,c7>c11,d6>s6,d6>d10,d4>d8,d2>d4,d2>c2,d2>d6,c9>c1,c13>c9,c13>d13,d2>d3,c10>c6,c10>s10,c10>c13,d5>d12,d5>s5,d5>d9,d2>d5,d2>h2,c10>c7,h9>h1,h7>h9,d11>s11,d7>h7,d7>d2,d11>d7,s13>s3,c4>c5,h8>c8,h4>c4,h3>h12,h5>h3,s8>h8,s12>s8,s4>s2,h11>h10,h13>h11,h13>h5,h13>h6,s13>h13,s13>s9,s4>h4,s4>s13,s12>s4,d1>d11,s1>d1,s12>s1,c12>s12,c12>c10,

h8,s10,d12,d4,d13,d1,d10,c3,s6,s9,h6,c1,s13,d3,h1,s5,h4,c5,h7,c11,s8,c2,c13,h9,s1,c8,s11,c4,h2,c10,c6,c9,d6,d9,s2,h12,d5,s7,c12,h3,h13,s12,d11,d7,s4,d8,h5,h10,c7,s3,h11,d2  
**276/1000: solving: solved in 3157 tries.**  
d4>d12,d13>d4,d1>d13,d10>d1,d10>s10,s9>s6,c1>c3,h1>h6,c13>c2,s1>s8,c6>c10,c9>c6,d9>d6,d9>c9,h12>h2,h13>h3,s12>s7,d8>d11,d7>d8,h5>h13,h5>d5,h5>h12,s12>s2,d7>d9,c12>s12,c7>c12,c7>d7,s4>c4,s4>s11,c7>c8,h11>h5,h11>h9,h11>c11,h11>h4,c13>c5,c7>c13,h7>c7,s1>s5,s1>h1,s1>s9,s1>c1,s13>s1,h7>h11,s4>s13,h10>h7,s3>s4,d3>s3,h10>h8,d10>h10,d3>d10,d2>d3,

h8,c10,s7,h9,h11,h10,c5,c4,d2,d11,c6,d5,h12,c11,s11,d1,s13,c2,s12,c1,h1,c7,s2,h13,d3,s8,c12,h2,d8,s4,d4,s3,d7,h6,s1,h3,h4,d13,c13,c8,h5,d10,d12,c3,c9,s5,d9,d6,s10,s9,s6,h7  
**277/1000: solving: solved in 15665 tries.**  
h9>h8,h11>h9,h10>h11,c10>h10,c4>c5,d11>d2,c11>c6,c11>d11,c11>c4,s11>c11,s11>s7,h1>c1,c7>c2,s8>s2,h2>h13,d4>s4,d4>d8,s3>d3,d7>d4,h4>h3,c13>d13,c8>c13,d12>d10,c3>c8,c9>c3,d6>d9,s9>s5,s9>c9,d6>d12,s10>s9,s6>s10,s6>h6,h7>h4,h7>d7,h7>h2,s1>s3,s1>h1,s1>s12,s1>d1,s8>s1,s8>s11,s13>s8,c12>h12,c12>c10,c7>c12,s6>s13,h7>c7,d6>s6,d5>d6,h5>d5,h5>h7,

d8,s9,h6,c2,d9,s11,s8,h8,d4,c12,s1,h7,c10,c9,s7,d6,h9,c6,s13,d2,d10,c13,h4,d13,d11,c8,d5,h3,s4,h13,d1,c3,h1,d3,h2,s10,c5,h10,h5,h11,d12,s3,s5,c7,d7,c11,c4,s12,s6,h12,c1,s2  
**278/1000: solving: solved in 68712 tries.**  
d9>s9,d9>d8,s8>s11,h8>s8,c12>c2,h7>h8,c9>c10,h9>c9,h9>h7,h9>d9,h6>h9,s7>s1,c6>d6,c6>c12,c6>h6,s13>s7,d10>d2,d13>d10,d13>s13,d13>d4,c13>d13,c13>c6,c8>c13,d5>d11,s4>h4,h13>h3,h1>h13,d1>h1,d1>d5,c3>c8,d3>d1,h10>h2,s10>h10,h5>c5,h11>h5,s3>s10,d7>d12,d7>d3,s3>c3,c7>d7,c11>c7,c4>c11,s12>s5,h12>h11,s12>h12,s2>s12,s2>s3,s6>s2,s4>s6,c4>s4,c1>c4,

d1,s5,d4,d8,h8,s1,s12,h7,h12,s6,c6,d5,c9,h1,h10,c1,c13,d13,d11,c12,h11,c2,d6,s3,h13,c10,s9,c7,c5,d12,h5,s11,c11,c3,s4,s8,h6,s10,h9,d3,d9,h3,d2,s7,h4,s2,s13,c8,h2,c4,d7,d10  
**279/1000: solving: solved in 87930 tries.**  
d8>d4,h8>d8,s1>d1,s5>s1,h12>h7,h12>s12,h12>h8,c6>s6,d5>s5,c9>c6,h10>h1,c13>c1,d13>c13,d11>d13,c12>c9,c12>h12,d11>d5,h11>h10,s9>s3,c7>c10,c5>c7,h5>h13,c5>h5,c5>c2,c11>s11,c3>c11,s4>s9,d9>d3,d9>h9,h3>h6,s13>s7,s13>s10,d2>d9,s2>s13,d2>s2,h2>d2,h2>h3,c8>s8,c8>c3,h4>h2,h4>s4,h4>h11,c8>c5,d7>d6,d10>d7,d12>d10,c4>h4,c8>c4,d12>d11,c12>d12,c8>c12,

s2,d4,d2,h11,d11,s5,h1,h3,d1,h4,d7,s7,s10,c13,h12,h13,c6,s3,c8,c2,d10,c5,d12,c3,d5,h8,c11,d13,c4,s9,s1,h6,s6,d9,d3,c12,s12,h7,d6,c10,d8,h10,c7,s11,h2,s13,c1,h5,h9,s4,c9,s8  
**280/1000: solving: solved in 52620 tries.**  
d2>d4,d2>s2,d11>h11,d11>d2,h3>h1,d1>d11,h4>h3,d7>d1,s7>d7,s5>s7,h12>h4,h13>c13,s3>s10,c8>c6,c2>c8,d5>c5,d5>d10,d12>d5,s1>s9,s6>h6,s6>s1,d9>d13,d3>d9,d3>c3,d3>d12,d3>s3,c4>c2,s12>c12,d6>s6,h10>h7,c10>h10,d8>d6,s11>s12,c10>c11,c1>c7,s4>s13,h9>h2,s4>s11,c9>c1,c9>c10,h9>c9,h5>h9,h5>h13,h5>s5,h12>h5,d8>d3,h8>h12,d8>h8,s4>c4,s8>s4,s8>d8,

c6,h11,c8,h1,c1,s6,s2,s12,s4,d9,c7,c5,h8,s10,s9,h2,c12,c2,d3,s13,d7,h10,c10,h3,s8,h6,c11,c4,h7,s7,h5,s11,h9,d13,d1,c9,h13,h12,d2,s1,h4,d4,d12,d8,d10,d5,c3,s3,d11,c13,d6,s5  
**281/1000: solving: solved in 1551 tries.**  
c1>h1,c1>c8,s6>c6,s2>s6,s12>s2,s4>s12,c5>c7,s9>s10,s9>d9,s9>s4,c5>c1,h2>h8,c2>c12,c2>h2,c2>c5,c10>h10,c4>c11,s7>h7,s7>s8,s7>d7,s7>s13,c10>c2,h6>h3,d1>d13,h13>h9,h12>h13,s1>d1,d4>h4,d4>d2,d12>d4,d12>h12,d8>d12,d10>d8,d5>d10,s3>s1,c13>c9,c3>c13,d11>d5,s5>s3,s5>h5,s5>s7,s11>s5,s11>h11,s11>s9,c4>c10,d6>h6,d11>d6,c3>c4,d3>c3,d11>d3,d11>s11,

s7,h5,h12,d1,s12,h4,s10,s4,h9,c4,s13,h3,s2,c6,d6,s9,h6,s5,d12,c9,d10,h11,d7,d2,s3,h10,d9,c12,c5,s1,c10,d3,d4,c1,c11,h1,c2,h8,d8,c8,d11,c7,c13,h13,d13,h7,h2,c3,s8,s6,s11,d5  
**282/1000: solving: solved in 43079 tries.**  
h12>h5,s12>s7,h12>s12,s4>s10,s4>h4,h9>h12,c4>s4,d6>c6,d2>d7,h10>h11,h10>d10,d2>d12,d9>c9,d9>d2,d9>s9,d9>d6,h6>h3,c5>c12,c5>s5,s1>s3,c10>c5,h10>c10,h10>h6,d4>d3,c11>c1,h1>s1,h1>h10,h1>d1,h1>h9,s2>s13,d4>d9,c11>c4,c2>c11,s2>c2,c8>d8,d13>h13,h7>c7,h2>h7,h2>h8,d11>d4,h2>h1,s2>h2,c3>c8,c13>c3,d13>c13,s8>s2,s6>s8,s11>s6,d11>s11,d13>d11,d5>d13,

d8,d5,h7,h5,h3,h13,h12,c7,d11,c2,d2,h6,c12,s1,h1,d1,h11,h9,c4,d4,c1,s11,s7,h4,s10,c6,d7,d3,s2,c5,s6,s8,c3,s4,h10,s5,c8,h2,s3,d12,d13,s9,d6,c10,s12,s13,c9,h8,c11,d9,d10,c13  
**283/1000: solving: solved in 1564 tries.**  
d5>d8,h5>h7,h5>d5,h3>h5,h13>h3,h12>h13,d2>c2,d2>d11,h6>h12,h1>s1,d1>h1,h9>h11,c4>c12,d4>c4,d4>d2,d1>d4,h9>h6,c1>d1,c1>c7,s7>s11,h4>h9,s10>s7,d3>d7,s2>s10,s6>c6,s6>s2,c5>c1,h2>h10,d13>d12,s12>s9,s13>s12,s13>d13,s13>s5,c11>c10,c9>c11,d9>d6,c9>d9,c13>c9,c13>s13,c8>c13,h8>h2,h8>s8,c8>h8,c8>c5,c3>c8,s3>s6,s3>c3,s4>h4,s3>s4,d3>s3,d10>d3,

s3,d1,s9,d9,s7,c2,s13,c6,s10,s11,d8,d3,c12,h6,d12,c1,h11,h4,s2,s4,c9,c7,c8,c11,c4,d4,d10,d7,s8,c5,d13,h13,s5,h12,d11,h1,h10,h3,s6,h8,c10,d6,h9,d5,d2,h5,c13,s12,c3,h7,h2,s1  
**284/1000: solving: solved in 10859 tries.**  
d9>s9,d9>d1,s11>s10,d3>d8,c12>c6,h11>h6,h4>h11,s4>s2,s4>h4,c9>c1,c7>c9,c8>c7,c11>c8,c4>c11,d4>c4,d4>d12,d4>s4,d4>d3,d10>d4,d7>d10,d13>d7,d13>s13,d13>d9,c12>c2,s8>s11,s5>s8,c5>s5,c5>c12,h13>d13,h12>h13,h10>h1,d6>s6,d6>d11,c10>h10,h9>h8,h5>h9,d5>h5,d5>d6,d5>c5,c13>c10,d2>d5,c3>c13,h3>c3,s12>s7,h2>d2,h3>h2,h3>s3,h7>h3,h12>h7,s12>h12,s1>s12,

s13,d10,c9,s10,c2,h11,c8,s1,c5,d11,s8,s11,h6,h4,h3,c4,d5,h9,c1,s5,s7,s3,d1,c3,h12,c6,c11,h8,d6,s4,s6,h7,c13,c7,s2,c12,d7,s9,h13,d8,d2,h2,s12,h5,h10,d13,d4,d12,h1,d9,c10,d3  
**285/1000: solving: solved in 1416 tries.**  
s10>s13,d10>s10,c2>c9,s8>s1,s8>c8,c5>c2,s11>d11,s11>s8,s11>h11,h4>h6,h3>h4,c4>c5,s5>d5,s7>s5,s3>s7,s3>h3,s3>s11,c1>c4,d1>c1,d1>d10,c11>c6,s6>s4,s6>d6,c7>c13,c7>h7,c7>c11,s2>s6,c12>c7,c12>h12,c12>c3,d8>d7,d2>d8,d2>s2,h13>h8,h2>h13,d2>h2,s9>h9,s9>s3,s12>s9,c12>s12,d13>d2,d4>d13,h1>h5,h1>d1,d9>d4,h10>h1,d12>d9,c10>h10,c12>c10,d12>c12,d3>d12,

s3,c4,c10,s2,d1,s5,c8,h13,d4,h9,d10,d12,d8,h6,c5,c1,c11,c2,d6,s7,c7,s9,d3,h5,d9,h4,s12,d11,h7,c12,h10,c3,c6,d5,s4,c13,s8,h2,h12,s11,c9,d13,h8,s13,d2,h3,d7,h11,s10,s6,h1,s1  
**286/1000: solving: solved in 6477 tries.**  
c10>c4,d12>d10,d8>d12,c1>c5,c11>c1,c2>c11,d6>d8,h6>d6,h6>h9,c7>s7,c7>c2,d9>s9,d9>d4,d3>d9,h4>h5,h7>h4,h7>c7,h7>h6,d11>d3,c12>s12,c6>c3,c13>c6,s8>s4,s11>s8,h12>h2,h3>h8,d2>d13,h11>h3,h11>h12,h11>s11,h11>h10,h11>d11,h11>h13,h7>h11,c9>c12,d7>d5,d7>h7,d7>d1,c9>c8,c13>c9,d2>d7,s13>c13,s13>s5,s10>s13,s10>c10,s10>s3,s6>s10,s1>h1,s1>s6,s2>s1,d2>s2,

d9,h9,c6,h4,s7,c12,d13,c9,c5,h13,s6,s3,c10,h6,h5,s4,c13,h3,s5,h2,c3,d2,c4,d4,c8,s11,d12,d5,h11,d11,s13,d7,h1,d8,c7,c11,s10,h10,h8,s1,h7,d10,s8,c2,s12,d6,s9,d3,s2,d1,h12,c1  
**287/1000: solving: solved in 3822 tries.**  
h9>d9,c12>c6,c5>c9,s3>s6,c10>c5,h5>h6,h3>h5,h3>s3,h3>h13,c13>c10,c13>d13,c13>c12,s4>h4,s7>s4,h3>h9,s5>s7,h2>h3,d4>c4,d4>d2,d12>d4,d5>d12,h11>s11,d11>h11,c7>d7,c7>c8,d8>d11,s10>s13,h10>s10,h1>h10,c11>c7,h7>h1,h8>h7,h8>d8,s8>h8,s1>s8,d6>d10,c2>c11,d3>d6,d3>d5,d3>c3,c2>c13,s12>s5,s2>s9,d1>d3,s1>d1,s2>c2,s12>s2,h12>h2,s12>h12,s1>s12,c1>s1,

h5,d5,c12,s13,c11,s8,d10,d12,s9,c7,s3,h9,s12,h6,d11,s7,c13,h1,s4,c4,c8,d7,d4,h13,d8,s2,d3,d1,h8,s10,h3,d2,s11,d6,h11,h7,h4,s6,c6,c1,d9,c2,c5,s5,h2,c3,c10,h10,s1,h12,c9,d13  
**288/1000: solving: solved in 474889 tries.**  
d5>h5,d12>d10,h9>s9,s12>s3,s12>d12,s12>s8,s12>c12,s13>s12,s7>c7,s7>s13,h6>h9,c13>c11,c4>s4,c8>c4,d7>d11,d7>s7,d7>d5,h1>h6,h13>h1,h13>c13,d4>d7,d8>c8,d1>d3,h8>d8,h8>h13,d1>d4,s10>s2,s11>s10,d6>d2,h11>s11,h11>h8,s6>d6,h7>h11,c1>c6,h2>c2,h2>h4,c10>c5,s1>s5,h10>c10,h12>h10,h12>h2,h12>h7,h3>h12,s1>s6,c1>s1,c9>c1,c3>h3,c9>c3,d9>c9,d9>d1,d13>d9,

s11,c10,s5,d10,s10,d7,s1,d1,s7,c7,h12,s4,c13,h5,s9,d9,s6,h13,c3,d8,h3,s3,d6,h1,c2,h4,d2,c4,c5,c1,d4,c8,h7,d11,c12,c9,s13,h10,d5,h11,d3,s2,c11,s8,s12,h2,d12,c6,d13,h6,h8,h9  
**289/1000: solving: solved in 13801 tries.**  
s10>d10,s10>s5,s10>c10,s10>s11,d1>s1,d1>d7,c7>s7,c13>c7,d9>s9,s6>s4,d8>d9,h3>c3,h3>h13,s3>h3,s3>s6,d6>d8,c4>c2,h4>c4,h4>h1,c1>c5,d4>h4,d4>d6,d2>d4,c8>c1,d11>d2,c9>c12,h10>h7,h10>h5,c9>c8,c11>h11,c11>c9,c11>d11,s13>s3,d3>d5,h2>s2,d12>s12,d12>d3,h2>h10,d13>d12,d13>s13,d13>d1,c13>d13,c11>c13,h2>h12,c6>c11,s8>s10,h6>h2,h6>c6,h8>h6,h8>s8,h9>h8,

d12,d2,c9,s7,c7,d1,h1,d7,h13,d8,d9,c8,c3,h9,s12,h6,d4,s3,d5,h7,c1,s11,s13,s9,s10,s4,s8,c13,d6,d11,c2,h8,d3,h10,d10,c4,d13,s6,s2,h4,c12,h11,c6,h2,h12,c10,c11,h5,c5,h3,s1,s5  
**290/1000: solving: solved in 12765 tries.**  
d2>d12,c7>s7,c7>c9,h1>d1,d7>d2,c7>d7,h13>h1,d9>d8,c8>c7,c3>c8,h9>d9,h9>h13,s3>s12,d5>d4,s13>s11,s9>s13,s10>s9,s4>s10,s8>s4,d11>d6,d3>d11,h10>h8,d10>h10,s2>s6,h4>c4,h12>h2,h12>c12,c5>c10,c11>h11,c6>c11,c5>c6,h3>h12,h3>h4,h3>d3,d13>d10,d13>c13,s2>c2,s1>s2,s5>s1,s5>s8,c5>s5,c5>c1,h3>h7,h3>s3,h3>h9,h6>h3,c5>c3,h5>h6,h5>c5,d5>h5,d13>d5,

h13,h4,d5,c2,c11,s8,c3,s3,h3,c5,d9,c4,c1,h6,s2,h12,d11,d13,s13,s11,d6,d7,h11,s9,d10,d3,h10,h8,s12,s10,s7,c12,c8,d8,c9,s5,c10,h1,s6,c7,h5,c6,d4,d1,s1,s4,h2,c13,h7,d2,d12,h9  
**291/1000: solving: solved in 93115 tries.**  
h4>h13,c11>c2,s3>c3,s3>s8,h3>s3,h3>h4,c5>c11,c5>d5,c1>c4,d13>d11,s13>d13,s11>s13,d7>d6,h11>h12,s11>h11,s11>s2,d3>d10,h8>h10,s12>s9,s10>s12,s7>s10,s7>d7,s7>s11,h8>h6,c8>c12,c8>h8,c8>c1,d3>d9,d8>d3,c8>d8,c8>c5,c7>c10,s4>d4,s4>s6,s1>d1,c13>c6,s1>s4,s1>s5,c7>s7,c7>c8,h1>s1,h1>h3,c13>c7,c9>c13,h9>h7,h9>c9,h9>h1,h5>h9,h2>h5,d2>h2,d12>d2,

c13,h2,d1,c12,c1,h9,s6,d13,h7,s10,s11,d2,d5,h10,h12,h13,c5,d7,c6,c8,s12,c3,d10,s8,d8,c4,s2,h11,c2,h1,d6,d4,h3,c9,s13,s5,s3,s1,c10,h8,s4,h6,s9,d3,c7,d9,d12,h5,c11,h4,d11,s7  
**292/1000: solving: solved in 123129 tries.**  
c12>c13,c1>d1,h7>h9,s11>s10,d5>d2,h12>h10,h13>h12,h13>d13,c5>d5,c8>c6,s8>s12,s8>c8,s8>s11,d8>d10,c2>c4,s2>c2,h1>h11,d6>d8,d4>d6,h3>h1,h3>c3,s5>s13,s3>s5,s4>s1,s4>s2,s4>d4,s3>h3,s3>s8,s4>s3,c10>c9,h6>h8,d9>s9,d3>d9,c7>c10,c7>d7,c7>c5,h6>h13,h6>s6,c7>h7,d12>d3,h5>h6,d11>d12,c11>d11,h4>h5,h4>h2,s4>h4,c7>c1,s7>s4,c7>s7,c7>c12,c11>c7,

h4,h6,h9,c12,d3,d7,h13,h5,c5,s9,c7,h2,s8,h12,d5,c6,d6,c10,c4,d12,h11,h3,d13,c8,h7,d10,h1,c13,s2,s5,c1,d1,c9,h10,s10,s12,d4,s13,s1,c11,s7,c2,c3,d2,s6,h8,d11,s3,d8,s4,s11,d9  
**293/1000: solving: solved in 318 tries.**  
h6>h4,h9>h6,d7>d3,h13>h9,h5>h13,c5>h5,c12>c5,c7>c12,d7>c7,d6>c6,d6>d5,c4>c10,d12>h12,d6>d12,h3>h11,d13>d6,s5>s2,c1>h1,c1>c8,c13>c1,c13>d13,c4>c13,h3>h2,h7>h3,s5>s8,d1>d10,s10>h10,s12>s10,d4>d1,d4>c4,s12>s5,s13>s12,s1>s13,c11>c9,s7>s1,s7>h7,s7>s9,s7>d7,c2>c11,c3>c2,d8>h8,d11>d8,s4>s6,s4>d4,s4>s7,s3>c3,s3>s4,s11>s3,d11>d2,d11>s11,d9>d11,

h6,d9,c1,d5,d6,s1,h12,d3,s10,s3,c5,c10,h2,h4,c12,c2,d2,s4,s2,h7,c11,s6,h10,h13,d7,h8,h5,c9,d13,s9,c7,d4,s11,d11,c3,c8,d8,s8,s7,d12,h1,c6,s13,h3,h11,c4,d1,c13,s12,d10,h9,s5  
**294/1000: solving: solved in 102220 tries.**  
d6>d5,d6>h6,d9>d6,s1>c1,d3>d9,s3>s10,s3>d3,s1>s3,c10>c5,h4>h2,c12>h12,c10>c12,d2>c2,s2>s4,s2>d2,s2>s1,h7>h4,h10>h7,h10>c10,s6>s2,h5>h8,d13>d7,d13>h13,h5>h10,s9>c9,c7>c11,d11>s11,d11>d4,d8>d11,c8>c3,c8>d8,c8>c7,s8>c8,h3>h1,c4>c6,h11>h3,d10>d1,c13>c4,s13>c13,s13>s7,s13>s8,d13>s13,s9>s6,h9>h11,d10>d13,d12>d10,h9>s9,h5>h9,s12>d12,s5>s12,s5>h5,

c1,h4,d5,c5,h2,h5,d3,d12,h8,d1,c3,c6,d11,d4,d2,c9,c7,h10,h9,s1,s7,s2,s11,c8,h6,s5,h13,d7,h3,d8,c13,s12,c12,s9,s8,c2,s13,c11,h11,d6,c4,s3,d9,h1,h7,h12,c10,s4,d10,s10,s6,d13  
**295/1000: solving: solved in 51904 tries.**  
c5>d5,h5>h2,h5>c5,h5>h4,d12>d3,c6>c3,d4>d11,d2>d4,c7>c9,h9>h10,s7>s1,s2>s7,s2>d2,s11>s2,c12>s12,c12>c13,c2>c12,s8>s9,c11>c2,h11>c11,s13>s8,s3>s13,s3>h3,s3>s5,h11>h13,d9>d8,d6>d9,h7>h1,h7>d7,h7>h6,h7>c7,h9>h7,h12>h11,h12>h9,c10>c4,s6>s4,s6>s3,s6>s11,s6>c6,d6>s6,d6>d1,c8>h8,c8>c1,h12>h5,d12>h12,c10>c8,d6>d12,s10>c10,d10>d6,d10>s10,d13>d10,

c9,h4,s2,c5,d11,d5,d1,c2,d3,d10,s4,s10,s13,d9,h7,d8,c11,c4,c10,h9,c3,d2,s7,h13,d7,s5,h11,h10,c12,h1,s1,h12,c13,d12,c6,h3,c1,h8,c8,s11,d13,d6,h6,s6,s9,s8,d4,h2,s3,h5,s12,c7  
**296/1000: solving: solved in 404260 tries.**  
c5>c9,d5>d11,d5>c5,d1>d5,c2>s2,d3>d1,d10>d3,s10>s4,s10>d10,s13>s10,h7>h4,d8>d9,c4>c11,c10>c4,d7>d2,s7>d7,h13>h9,s5>s7,h11>h13,h10>h11,h10>c10,h10>h7,s1>h1,c13>c12,d12>h12,c6>c13,c1>s1,c1>c6,c8>h8,c8>c1,c8>d8,s6>h6,s6>s11,s8>s9,d4>d13,d4>d12,d6>d4,h3>c3,s6>d6,s8>s6,h2>h3,s8>c8,s3>s8,h2>h10,s12>s3,s12>s13,s5>s12,h5>s5,h2>h5,c2>h2,c7>c2,

d5,d1,d11,d9,c12,h7,h10,d12,s12,s13,d4,c13,c4,h12,s1,c8,d3,s10,c7,s3,c6,h8,d7,h11,d6,s8,h1,h2,h13,s11,d13,c9,h4,c2,d10,s5,c10,s7,s9,s2,h5,h9,s4,h3,d8,s6,d2,c1,c5,c11,c3,h6  
**297/1000: solving: solved in 101609 tries.**  
d1>d5,d11>d1,d9>d11,h10>h7,d12>d9,c12>d12,s13>s12,c4>c13,c4>d4,c4>c12,s10>s1,s10>h10,s13>s10,c8>c4,h1>h11,h2>h1,h13>h2,s11>s8,d13>h13,d13>d7,d6>d13,c10>c2,d10>c10,s7>s5,s9>s7,s9>c9,s9>s11,h4>h8,s6>s4,s6>s2,s6>d6,s9>s6,h9>s9,h3>h9,d2>d10,h5>h4,d8>d2,c5>c1,c5>h5,c11>c5,c3>c11,c3>c7,s3>c3,h6>c6,h6>h12,h3>h6,s3>s13,h3>s3,d3>h3,d8>d3,d8>c8,

d4,d9,d8,d3,h10,c3,h11,s4,s1,c12,s13,d7,s7,h6,s5,d10,h8,h12,s8,h7,c4,s6,d2,c7,h2,c8,d11,d13,c10,s9,c6,s10,d1,h4,h13,c11,s11,h9,s12,h1,h3,c13,c2,d12,c1,d5,h5,d6,c5,s3,c9,s2  
**298/1000: solving: solved in 5380 tries.**  
d9>d4,d8>d9,d3>d8,s1>s4,c12>c3,s13>s1,s7>d7,s7>s13,h8>h6,h12>h8,h12>c12,h12>h10,h11>h12,s5>s7,d10>d3,s8>s5,s6>s8,c7>h7,c4>c7,h2>d2,h2>h11,c8>c4,d13>d11,s10>c10,s10>s6,s9>s10,h13>h4,h13>d13,h13>h2,c6>c8,s11>c11,s11>s9,h1>d1,h1>h13,s12>s11,h9>h1,h3>h9,c1>c13,d6>d12,d6>c6,d5>d6,d5>d10,c2>c1,h5>h3,h5>d5,s3>s12,c5>h5,s2>s3,c2>s2,c2>c5,c9>c2,

d4,s8,s11,h5,c9,h8,d11,d12,s9,c11,c4,d6,d9,d3,s5,s6,c3,s4,d8,h6,h13,h2,s13,s1,h4,h12,d10,s10,c5,c6,c1,d2,s12,s7,d1,d5,c13,d7,c10,c12,s2,h10,h1,h7,s3,c8,h3,h11,d13,c2,h9,c7  
**299/1000: solving: solved in 25128 tries.**  
s11>s8,d12>d11,s9>c9,c4>c11,d9>d6,d3>d9,s6>s5,c3>c4,d3>c3,d3>d12,s6>s9,s4>s6,s4>d4,s11>s4,h8>h5,d8>d3,d8>h8,h13>h6,h2>h13,s13>s11,s1>s13,h4>h2,h12>h4,s10>d10,s10>s1,c6>c5,c1>c6,d2>d8,s7>s12,d5>d1,c13>c1,d7>d5,d7>s7,d7>d2,c12>h12,c13>c12,c10>s10,h1>h10,s3>s2,h7>h1,h3>s3,h9>h11,h9>h3,h7>h9,d13>c13,c2>c8,c7>c2,c7>h7,c7>c10,d7>c7,d13>d7,

s13,c7,d1,h10,s2,d3,d2,h8,d8,h1,h3,c1,c5,d9,h4,c10,h12,h9,c6,d7,s4,c4,s7,h5,h6,d4,c2,c12,c9,s10,s5,h11,d11,s12,s11,h2,c8,s1,c13,d6,d13,s9,s6,c3,d5,d10,s3,d12,h13,h7,s8,c11  
**300/1000: solving: solved in 9397 tries.**  
d3>d1,d2>s2,d8>h8,d8>d2,h3>h1,h3>d3,h10>h3,c1>c7,c5>c1,d9>d8,c10>h10,c10>c5,h12>h4,h9>h12,h9>d9,c4>s4,h6>h5,d4>c4,d4>d7,h6>c6,h6>h9,c12>c2,c9>c12,s5>s10,d11>h11,s11>s12,s11>d11,s11>s5,c8>c9,s6>s9,s3>c3,s3>s6,d5>d6,d10>d5,d12>d10,d13>d12,s8>s3,s8>s1,s8>c8,s8>s7,s11>s8,h2>h6,d13>d4,h13>d13,c11>s11,c11>c10,c13>c11,c13>s13,h13>h2,h13>c13,h7>h13,

h6,s2,c13,c2,d8,h12,c1,c9,s5,h5,h1,s1,d2,d9,h13,c7,s6,d11,h4,h7,s12,s7,c5,s4,c10,d13,h11,c4,h10,c12,c8,h2,c11,s8,c3,d1,h3,h8,d10,c6,d5,d3,d6,d4,s9,h9,s11,d12,s10,s13,d7,s3  
**301/1000: solving: solved in 24451 tries.**  
c2>c13,c2>s2,h12>h6,c9>c1,h5>s5,h1>h5,s1>h1,d2>d8,d2>c2,d9>d2,c9>d9,h13>h12,h7>h4,h7>c7,h7>h13,s6>s1,s7>s12,c4>c10,c4>s4,c4>c5,d13>d11,h10>h11,c8>c12,s8>c8,s8>s7,h2>h10,c3>c11,h3>h2,c3>h3,c3>c4,d1>d13,c6>c3,c6>s6,c6>c9,h8>s8,d5>d10,d3>d1,d6>d5,d6>c6,d3>d6,h9>h8,d12>d4,s10>s11,s13>s10,d7>d12,d7>h7,d3>d7,s9>h9,s13>s9,s3>s13,s3>d3,

h10,d1,s9,h3,d6,h8,d2,c6,c4,s12,s11,c7,h7,d3,c9,d5,c10,s5,c8,h13,s1,h6,h11,d4,c11,c2,d9,h12,d12,s3,s10,h9,s2,d11,h2,c1,s7,h4,s6,d7,s8,h5,h1,c5,c12,s4,c3,d13,d8,s13,d10,c13  
**302/1000: solving: solved in 1455 tries.**  
h3>h10,c6>d6,c4>c6,s11>s12,h7>c7,h7>h8,s1>s5,h6>h13,h11>h6,c11>c8,h11>c11,d12>h12,d12>d9,s10>s3,h2>h9,h2>c2,s2>s10,s7>s2,h1>h5,c12>c5,s4>s8,s4>h4,s4>s7,s4>d4,d11>d12,d11>h11,d11>d5,d11>s11,d11>d2,d3>d11,c9>c4,c9>s9,h7>h3,s4>s1,s6>s4,h1>h2,c1>h1,c3>c1,c3>d3,c3>c9,c10>c3,d7>d1,d7>h7,d8>d13,s13>s6,d10>d8,c13>s13,c12>c13,d10>d7,c10>d10,c12>c10,

d5,h4,h10,d10,s1,c1,s11,s13,s9,d1,h5,c9,d8,s12,c5,d12,d13,c11,s8,c3,s5,c7,h3,d4,h2,d9,d2,h8,h9,h1,h13,c10,h12,s6,h11,d7,c2,c13,c4,s2,c12,d11,d6,c8,s7,s3,d3,s4,h6,c6,h7,s10  
**303/1000: solving: solved in 13942 tries.**  
h10>h4,d10>h10,d10>d5,c1>s1,s13>s11,s9>s13,d1>d10,c1>d1,c9>c1,s9>c9,s12>s9,d13>d12,h3>c3,d2>d9,d2>h2,d2>d4,h9>h8,h1>h9,h13>h1,c10>c7,h12>h13,c13>c2,c4>c13,c8>c12,d6>d11,s7>s2,s3>s7,d3>s3,c6>d6,c6>c8,s4>c4,h6>c6,h7>h6,s10>s4,s10>s6,s10>c10,h11>h12,d3>d2,d3>h3,s10>s8,d3>d13,s5>s10,s5>c5,s5>s12,h5>s5,d3>d8,d7>d3,h11>c11,h7>h11,h7>d7,h7>h5,

d5,h9,s5,s11,c9,h11,d9,h7,d8,c5,c13,c8,d2,h4,d12,c3,s12,c12,s6,c10,c1,s7,h3,c6,h8,d6,d7,h5,h13,s10,s2,c7,d13,s4,s1,s3,h2,c2,d1,s9,s8,h10,h6,d4,d11,c4,d3,h1,s13,h12,c11,d10  
**304/1000: solving: solved in 52354 tries.**  
s11>s5,h11>h9,s11>h11,d9>c9,c13>c5,c8>c13,c8>d8,d2>d9,c3>c8,s12>d12,c12>s12,c1>c10,c6>c1,c6>s6,c6>c12,h3>h4,h3>c3,h3>h7,h8>h3,d7>d6,d7>s7,d7>d2,h13>h5,s2>s10,c7>c6,s1>s4,s3>s2,c2>h2,d1>d13,s1>d1,s9>s3,s8>s9,s8>h8,d3>d4,d11>d3,h1>h6,h1>s1,c11>c4,c11>c2,c11>c7,h10>h1,d11>c11,d11>s11,d11>d5,d7>d11,s13>s8,h13>s13,h10>h13,d10>d7,h10>d10,h12>h10,

d12,c8,s4,h8,s13,s2,c12,s5,d4,h2,c6,s7,s9,d1,s12,c3,c11,c1,d11,d13,s1,d9,s8,h6,h9,c2,d8,c4,h3,d2,s6,h12,c9,h10,h11,h5,d3,s3,c13,h7,c7,d6,h13,d5,c10,c5,d10,s11,h4,s10,d7,h1  
**305/1000: solving: solved in 63513 tries.**  
s2>s13,s9>s7,c11>c3,c1>c11,d11>d1,d13>d11,s1>c1,s1>s12,d9>s9,d9>d4,d13>d9,s8>s1,h6>h2,c6>h6,c6>c12,d8>s8,d8>d13,c4>c2,h12>h3,h11>h10,h5>h11,s3>d3,c13>c9,c7>h7,c5>c10,c5>d5,c5>c7,c5>c13,h5>c5,h5>h12,d6>d2,s6>d6,h4>h13,s11>s3,s10>s11,h4>h5,h4>c4,h4>h9,s6>s5,s6>c6,s6>s2,s10>s6,d10>s10,d8>d10,h4>s4,d8>c8,h8>h4,d7>d12,d8>d7,h8>d8,h1>h8,

c12,h7,d3,s7,h10,h1,h11,s12,d1,s5,d7,c13,s13,c2,d9,s6,h4,d11,d2,d10,c6,d5,c5,s11,s10,d13,c1,c11,h13,d4,s2,h8,d8,h6,s9,h5,s4,s3,c10,s1,c3,d6,h12,c8,c9,h9,h3,h2,d12,c7,s8,c4  
**306/1000: solving: solved in 185877 tries.**  
h10>h7,h1>h10,h11>h1,s12>s7,s12>c12,d1>d3,s5>s12,d7>d1,s13>c13,s13>s5,d11>d9,d11>h11,d7>d11,s6>s13,d2>d7,c2>d2,c6>c2,c6>s6,d5>d10,c5>d5,s10>s11,c1>c5,c11>c1,h13>d13,h13>h4,d8>d4,s9>s2,h6>h8,s1>s4,s1>s9,s3>s1,h5>h6,c3>s3,c3>c11,h12>h5,c9>c10,h9>c9,h3>h9,d12>d6,d12>d8,h12>d12,h2>h12,h2>h13,h3>h2,c3>h3,c3>c6,s8>s10,c8>s8,c8>c3,c7>c8,c4>c7,

h2,d3,h13,s5,d4,c2,s12,h9,c8,d2,h10,d13,d9,c4,d11,c7,s1,d8,s2,c1,h6,c5,s7,h5,h7,h1,d6,d7,h12,d10,s8,d1,s9,h3,c6,d12,h11,c10,s13,h8,s6,h4,c11,c12,s10,s11,d5,c9,s4,s3,c3,c13  
**307/1000: solving: solved in 21115 tries.**  
d4>d3,c8>c2,d9>d13,d9>h9,d2>d9,d11>d2,c7>c4,c1>s1,c1>c7,d8>d11,h6>h10,h7>h5,h7>s7,h1>h7,h1>c1,h1>h6,s2>s12,d6>d8,d7>d6,h11>h3,c12>c11,s10>s6,s10>c10,s13>s10,h4>h8,s11>s13,s11>h11,s11>s8,c12>c6,d12>d1,d12>h12,d12>d7,s9>s11,c9>c12,c9>s9,d5>d10,d5>d12,d5>s5,c5>c8,c5>d5,c9>c5,h1>h13,h4>h1,h4>d4,s4>h4,s3>s4,s2>h2,s3>s2,c3>c9,c3>s3,c13>c3,

h5,h12,h9,s7,h6,c8,d8,d11,s11,h11,c7,c13,c11,s2,h4,d4,h7,d3,h13,d5,h8,d12,s4,c4,c3,s8,s3,s1,s9,d9,d6,s10,h3,c10,c9,h2,h1,d10,c12,d1,s6,c6,c1,d13,d7,s5,d2,s13,c2,s12,c5,h10  
**308/1000: solving: solved in 35211 tries.**  
h12>h5,h9>h12,d8>c8,d11>d8,s11>d11,h11>s11,h11>h6,c13>c7,c11>c13,c11>h11,d4>h4,c4>s4,c3>c4,s8>h8,s3>c3,s1>s3,s9>s1,d9>s9,d9>d12,d6>d9,c9>c10,h1>h2,c12>c9,d1>d10,d1>h1,c6>c12,c6>d6,s6>s10,s6>c6,s6>s8,d7>d1,d7>d5,d7>h7,d7>d4,d3>d7,h3>d3,s6>s2,h13>h3,s13>d13,c2>d2,c2>c1,s13>s6,c5>c2,c5>c11,s5>c5,s5>s7,s12>s5,s13>s12,h13>s13,h13>h9,h10>h13,

s1,h4,c3,c12,d4,h11,c1,d11,h8,s7,h10,s5,s11,h7,d5,h12,s4,c13,c6,c5,h3,c10,d6,h9,d12,h5,c9,h13,h6,d8,s9,d10,s3,s13,d13,d2,h2,c8,c7,s12,s6,c2,d7,c4,d3,d1,s2,h1,s10,d9,s8,c11  
**309/1000: solving: solved in 38216 tries.**  
c12>c3,h11>h4,s11>s5,h7>s7,h7>h8,h10>h7,d5>d11,c6>c13,c5>c6,h3>h12,c10>c5,c9>h9,h13>h5,h6>h13,h6>d6,h6>h3,c9>c10,d8>d12,s9>s4,c9>s9,d10>d8,s13>s3,d13>s13,d13>d10,d2>d13,h2>h6,s6>s12,c2>c8,c2>h2,c4>c7,c4>c2,c9>c4,d3>d7,d1>d3,s2>d2,s6>s2,s10>s6,s10>h10,d9>c9,d9>d5,d1>d9,d1>c1,d1>d4,d1>s1,s8>s10,s11>s8,c11>c12,s11>c11,h1>d1,h11>h1,s11>h11,

c4,c8,c3,s13,s1,c10,h2,h12,h13,d3,d12,d10,s7,d13,h1,d5,c7,s4,c6,s11,h5,h6,c1,h3,h9,s12,h8,s3,d11,c5,h10,d1,c13,c11,d6,s10,d8,d7,c2,c9,d2,s5,d9,c12,h7,s6,d4,s8,s2,s9,h4,h11  
**310/1000: solving: solved in 4144 tries.**  
c8>c4,c3>c8,s1>s13,h12>h2,h13>h12,d12>d3,d10>d12,d13>h13,d10>d13,d10>c10,h1>s1,s4>s7,c6>c7,s11>s4,h6>h5,h6>c6,h9>h3,d1>d11,c11>c13,s10>h10,s10>s3,c11>c5,d8>d6,d7>d8,c9>c2,d9>c9,d9>d7,d2>d9,s6>s5,s2>s8,h4>d4,h4>h7,s2>s6,s2>d2,s9>s2,s9>s10,s9>h9,s12>s9,h8>h6,c12>s12,c12>c1,d1>d5,c11>c12,c11>s11,c11>c3,d1>d10,h4>h8,h11>h4,h11>c11,h1>h11,d1>h1,

c11,c8,s4,h3,s3,d2,h8,c12,s10,s7,d10,s13,s6,h12,h13,c13,d9,h11,h9,s2,s12,c9,s5,d3,c7,d1,c1,d8,h10,h2,c3,s9,c6,h5,s8,d12,d13,d5,h6,d6,d11,c4,h1,c2,s1,d7,c10,h4,c5,s11,h7,d4  
**311/1000: solving: solved in 11163 tries.**  
c8>c11,s3>h3,s3>s4,h8>c8,s10>s3,s7>s10,s6>s13,h12>c12,h12>h8,d10>d2,c13>h13,d9>d10,h9>h11,h9>d9,s12>s2,c7>c9,d1>d3,c1>d1,h2>h10,c3>c1,h5>h2,h5>s5,c6>c3,s8>s9,s8>d8,d13>d12,d5>d13,d5>h5,d6>c6,d6>d5,h1>h6,d11>d6,c2>c4,c10>c2,s1>s8,s1>s12,h1>s1,h1>h9,c5>c10,c5>c13,c7>c5,c7>s7,h7>d7,h7>h1,h7>c7,h7>h12,s11>s6,h4>h7,d11>s11,d4>d11,d4>h4,

d2,h6,c2,s3,c5,s10,c8,h12,c3,h3,c4,h9,c13,d4,c11,h2,s2,h13,d5,h5,h8,c7,d9,h4,d7,s4,d6,c6,d1,d11,h11,h10,s6,s11,d12,c12,h7,s7,d3,d13,d8,s9,d10,s13,s8,s5,c1,h1,c9,s1,s12,c10  
**312/1000: solving: solved in 20102 tries.**  
h3>c3,h3>h12,d4>c4,c11>c13,s2>h2,h13>h9,h5>d5,h5>h13,h8>h5,h8>c8,h3>h8,h3>s3,c11>c5,d9>d4,c6>d6,d1>d7,d11>d1,h11>d11,h11>h4,s4>s2,s11>s6,s11>h11,c12>d12,s7>h7,d13>d3,d8>d13,s8>s13,s8>d8,s8>s7,s9>s8,h1>c1,c10>c9,c10>d10,c10>h10,c10>c7,c10>s10,c10>c11,s11>s4,c6>c10,c6>h6,c2>c6,c2>d2,s9>d9,s11>s9,c12>c2,h1>h3,s5>s11,s1>s5,s1>h1,s12>s1,s12>c12,

c3,c9,h9,c5,s13,c1,h11,s3,c2,d8,c8,d1,d3,s4,d6,s10,h5,s6,h10,s2,d11,d4,c10,d5,s11,d9,d13,h4,h13,c12,s1,h6,c6,h8,h1,s9,h12,d7,s12,h3,c7,d10,h2,s7,s8,c4,d2,h7,d12,s5,c13,c11  
**313/1000: solving: solved in 45823 tries.**  
c9>c3,h9>c9,s3>s13,c8>d8,c8>c2,d1>c1,d3>d1,d3>s3,h11>h9,d6>d3,s10>s4,h10>s10,h5>h10,h5>c5,h5>h11,s2>s6,d11>d6,d4>d11,s11>s2,d9>d5,d13>d9,h13>h4,h13>d13,h6>h13,c6>h6,c6>c10,c12>c6,h1>h8,h1>s1,s9>s11,h12>h1,h12>c12,s7>c7,s8>s7,h7>h2,d2>d10,d12>d2,h7>h3,h7>h12,d7>h7,d12>d7,d12>d4,s12>d12,s5>s9,s8>s12,s5>h5,s8>s5,c8>s8,c4>c8,c13>c4,c11>c13,

h8,d1,c2,d8,h7,c1,h3,s5,s7,d10,c3,d2,d12,c12,s11,s2,h5,h1,d3,c13,h12,s8,h13,c11,d4,c7,s13,h6,s4,d5,d7,d13,c8,c4,c6,d9,h10,c5,h9,c9,h4,h11,d6,d11,s6,s3,c10,s9,s10,h2,s1,s12  
**314/1000: solving: solved in 6555 tries.**  
d8>h8,d1>d8,c1>d1,c2>c1,h3>h7,s7>s5,c3>h3,c3>c2,d2>d10,d12>d2,c12>d12,s2>s11,h1>h5,h12>h1,c11>c13,s13>h13,s13>s8,d4>d3,s4>s13,d7>d5,d13>d7,c8>c7,c4>c8,c4>s4,c4>c11,c4>d4,c4>c12,h6>h12,c5>c6,h9>h10,h9>d9,h9>h6,c9>c5,h4>h9,h11>h4,d11>d13,d11>h11,c9>c4,d6>d11,s6>d6,s6>s7,s3>s6,s3>c3,s9>c9,s10>c10,s10>s3,s9>s10,s1>s9,s12>s1,s2>s12,h2>s2,

h10,d8,s11,s13,h5,h9,d12,c13,h3,h2,s8,s9,h4,s10,d10,h6,s3,c5,h8,d2,s12,d6,s7,s5,c4,h13,c1,h7,s1,c3,d13,d3,d4,c9,c10,d5,h12,c8,h1,h11,s2,d7,s6,c11,d1,d9,c7,c12,s4,c6,d11,c2  
**315/1000: solving: solved in 5779 tries.**  
s13>s11,h5>h10,h9>h5,h2>h3,s9>s8,d10>s10,h8>h6,s12>s3,d6>d2,s7>s12,s5>s7,c5>s5,d6>d10,c4>c5,c4>h4,c4>c13,h8>h2,h13>h8,h13>s13,d6>d12,s1>s9,c1>s1,c1>c4,h7>h13,c3>c1,d3>d13,d3>c3,d3>d6,d4>d3,c10>c9,c8>c10,c8>d8,d5>d4,h1>h12,h11>h1,d7>d5,c11>h11,c11>c8,d1>d7,d9>d1,d9>h9,c7>h7,s4>s2,s6>s4,c6>c12,c6>s6,c6>c7,d11>d9,c11>d11,c6>c11,c2>c6,

d8,c6,h8,c5,h5,s10,d11,h1,s13,s9,h4,h9,h3,s6,c11,c3,d2,c8,s2,c9,s11,h13,d5,h6,s1,c12,h10,d6,c1,d13,d7,c2,d4,d1,c10,c4,h11,s4,d9,d3,d12,s12,s3,c13,s8,c7,s7,d10,h7,h2,s5,h12  
**316/1000: solving: solved in 76469 tries.**  
h5>c5,h5>h8,h1>h5,s9>s13,h9>h4,h9>s9,h9>h1,h3>h9,c3>c11,d2>d11,c8>c3,s2>d2,s2>s10,s6>s2,c8>c6,c8>d8,c9>c8,s11>s6,h10>h6,c1>s1,c12>c1,d6>d5,d13>d6,d13>h13,h10>h3,d1>d4,c4>c10,d3>d9,s8>s12,s8>s4,s3>s8,d3>s3,d3>d1,c13>c4,c7>c13,s7>c7,s7>d7,s7>s11,d10>d3,d10>d13,h2>h11,h2>c2,d12>d10,c12>d12,c12>c9,h12>h2,h7>h10,h12>c12,h7>h12,s7>h7,s5>s7,

s8,h10,s1,d8,c3,h6,h12,c6,h11,c8,s9,s10,c13,h4,c11,h7,s4,h2,s11,d3,h9,c5,d11,d13,h5,h3,c1,d12,d4,s7,d6,d1,s6,s13,h1,c10,s2,h13,h8,s3,c7,c4,c12,c9,d10,d2,s12,d7,d9,s5,c2,d5  
**317/1000: solving: solved in 142069 tries.**  
d8>s8,h6>h10,h12>h6,c6>c3,h11>h12,c8>c6,c8>d8,s9>s1,s10>s9,c13>c8,c11>h11,c11>c13,h7>h4,h9>h2,d11>s11,d3>d11,h3>h5,h3>d3,h3>h9,d4>d12,d1>d6,d1>c1,d1>d13,d4>d1,d4>s4,s6>s7,s13>s6,h1>h3,c9>c7,c4>c9,d7>d10,d5>d9,d5>d7,s5>d5,s5>s3,s5>s2,s5>c5,s13>s5,c4>c10,h13>h1,c4>d4,c4>c11,h8>h7,h13>h8,s13>h13,s13>s10,s12>s13,c12>s12,c12>c4,c2>d2,c2>c12,

h1,h9,h2,c11,d10,d3,h4,s12,c4,s3,h8,c13,c9,s11,s6,h5,d4,d12,s10,d7,h3,d1,d11,d6,d5,c12,d9,s1,s4,s13,s2,s8,h13,d2,c7,c1,d13,c10,c5,h7,c3,d8,h10,c6,c8,s5,h11,h6,s9,c2,s7,h12  
**318/1000: solving: solved in 103704 tries.**  
h9>h1,h2>h9,d3>d10,h4>h2,c4>c11,c4>h4,s3>s12,s3>d3,c13>c4,c9>c13,s6>s11,d12>d4,s10>s6,d7>d12,d11>d1,d6>d11,d5>d6,d5>h5,d7>d5,h3>h8,h3>s3,s4>s1,s13>s4,s2>s13,s8>s2,d2>d9,c1>c7,c5>c1,h10>h7,h10>c10,d8>d13,c3>c5,c8>d8,s9>s5,h6>h11,c2>c6,c2>c3,c2>d2,c2>c12,c8>c2,s8>c8,h6>h13,s9>s8,h12>h6,h10>h12,s7>d7,s9>s7,h10>h3,s10>h10,s9>s10,s9>c9,

c5,c8,s12,c7,d4,h7,h3,h12,c10,h5,s11,c13,d10,d7,s2,h10,h9,h11,h2,d13,s6,s10,d1,c9,s7,s4,s3,s1,c6,h8,c3,c1,s13,d11,h4,c2,s5,d3,h6,s9,h13,c4,d6,d8,h1,d9,d2,s8,d12,c12,c11,d5  
**319/1000: solving: solved in 129870 tries.**  
c8>c5,h3>h7,h12>h3,h12>s12,c13>c10,d7>d10,h9>h10,h11>h9,h11>s11,h11>h5,d7>d4,d7>c7,c13>c8,h2>s2,h2>h11,s10>s6,s7>s10,s7>d7,d1>d13,s3>s4,s1>s3,c1>c3,c1>s1,c1>c9,c1>d1,c6>c1,h4>h8,s9>s5,d3>d11,s9>s13,c4>c2,c4>h4,c4>c6,d6>d3,h6>d6,h1>h6,h1>h2,h13>h1,d2>d9,s8>s9,s8>s7,d8>s8,c12>c4,d5>d2,d5>d8,d12>d5,h13>c13,h12>h13,d12>h12,c12>d12,c11>c12,

c9,h13,d10,h7,h3,d4,s7,c1,c4,d9,c10,s6,h9,s9,s8,h10,h4,d11,d3,s4,h8,d6,s10,d1,c12,s13,d2,s5,s1,c8,h12,c11,h2,h6,d7,d8,h1,d5,c5,c7,h11,c3,s12,d12,c2,s3,s2,c6,h5,c13,d13,s11  
**320/1000: solving: solved in 2270 tries.**  
h3>h7,c4>c1,d9>d4,c10>c4,s9>h9,s9>s6,s9>d9,s7>s9,c10>d10,s8>s7,h10>c10,h10>h13,h3>h10,d3>d11,d3>h3,s4>h4,s4>s8,d6>d3,s13>s10,s1>s5,s1>d1,s1>s13,h12>c12,c11>c8,h2>h12,d2>h2,d7>d2,d8>d7,h1>h6,h1>s1,h1>h8,d8>d6,c5>d5,c5>c11,h11>h1,c3>c7,d12>s12,c6>c2,s3>c3,c13>c6,s11>s2,s11>s3,s11>s4,h11>s11,d12>d8,h5>h11,c5>h5,d13>d12,c13>c5,c13>d13,c13>c9,

h3,c4,s4,c11,c13,h8,d11,s2,d12,h11,s11,h13,s5,s6,c3,c12,d5,h7,s9,d2,c9,d13,d6,s7,c5,c8,s3,h4,d1,h1,s1,c2,h5,d4,h12,d7,c7,h9,d10,s10,d8,s8,d3,c10,d9,s13,h6,c6,s12,h10,h2,c1  
**321/1000: solving: solved in 12249 tries.**  
s4>c4,c13>c11,h8>h3,s2>s4,d12>d11,s11>h11,s11>s2,s6>s5,c12>c3,c12>d12,c12>c13,h13>h8,s9>s6,d6>d13,c5>c9,c5>d5,d6>d2,h1>d1,h1>h4,s1>h1,s1>s3,h9>h12,c7>d7,d10>d4,s10>d10,s10>s1,h9>h5,s8>d8,c10>c7,c10>s10,c10>c8,c2>c10,s13>s8,s13>s7,d9>d3,h10>h6,h2>h10,h2>c2,h2>h7,h9>h2,d9>h9,d6>d9,s13>s9,s13>h13,s11>s13,c6>d6,c6>c5,s12>s11,c12>s12,c6>c12,c1>c6,

c2,d11,s2,s3,c9,c11,d13,h13,h12,c3,s6,h8,s7,c6,s13,s9,c13,s12,h4,c1,s11,d3,c10,h2,d5,d12,d9,d6,d8,c7,h10,d1,d4,c12,s10,h11,c8,h6,c4,s5,s1,h9,h3,d2,c5,s4,d7,h7,s8,h5,h1,d10  
**322/1000: solving: solved in 3735 tries.**  
s3>s2,c9>c2,c11>c9,d11>c11,h13>d13,h12>h13,s6>s3,c6>c3,s13>s7,s9>s13,c13>c6,s12>s9,s12>h12,s12>s6,h4>h8,c10>c1,d12>d5,d9>d12,d6>d9,d8>d6,h10>h2,h10>c10,h10>h4,s11>s12,s11>d11,d8>d3,c7>c13,d1>d8,d4>d1,c12>c7,h11>h10,s1>s5,h9>h6,h3>h9,d7>d2,s4>s1,s4>c4,s4>s10,s4>d4,h7>h3,h7>h11,c8>c12,s8>s4,s8>s11,c8>s8,c5>c8,h5>c5,h1>h5,h7>h1,d7>h7,d10>d7,

s5,s11,h1,h12,h2,s8,s6,h9,d3,s1,d6,d2,c9,c10,d10,h11,c7,c3,d4,c8,h6,c4,s10,c13,h5,d13,s4,c1,d7,d5,s3,s13,s9,h7,s7,c11,c2,c12,d9,d8,h8,c6,h4,h3,c5,h10,d12,s2,s12,d1,h13,d11  
**323/1000: solving: solved in 3572 tries.**  
s11>s5,h12>h1,h2>h12,s6>s8,s1>s6,d6>d3,d2>d6,d2>h2,c9>h9,c10>c9,d10>c10,c3>c7,d4>d10,c8>c3,d7>d13,d5>d7,d5>h5,s4>s10,s4>c4,c13>c8,s3>s4,s13>s3,s9>s13,s7>h7,s7>s9,c11>c1,c2>c11,c12>c2,d8>d9,h8>d8,c5>c6,c5>d5,c5>c13,c12>c5,h4>h6,h4>d4,h11>h4,h3>h8,h10>h3,s2>s7,d12>c12,s12>d12,s2>s12,s2>d2,s2>s11,s1>s2,d1>s1,h13>h10,d11>d1,h11>d11,h13>h11,

s9,d2,c4,d7,c12,h11,c1,s3,s12,s10,d1,h2,s7,s2,d10,c5,h1,h5,s11,c6,s4,c11,s6,h4,d12,d3,d8,d9,h10,d6,h12,s13,c8,h6,c2,d11,h3,h13,c9,s1,d4,s8,h8,c3,d13,c13,c7,h9,s5,c10,h7,d5  
**324/1000: solving: solved in 20403 tries.**  
s12>s3,s12>c12,s10>s12,d1>c1,d1>d7,h2>h11,s2>s7,s2>h2,s2>s10,s2>d2,s2>s9,d10>d1,h5>h1,h5>c5,c11>s11,c11>c4,c6>c11,s6>s4,s6>c6,s6>s2,h4>h5,d3>d12,d8>d3,d9>d8,h10>d10,h4>h10,d6>d9,h6>h12,h6>d6,h6>h4,h6>s6,c2>c8,h13>h3,c9>c2,h13>s13,h13>h6,h8>s8,c7>c3,d13>d4,h7>h9,h7>h8,c7>h7,c10>c7,c13>c10,s5>s1,d5>s5,d5>d11,d13>d5,c13>d13,c13>c9,c13>h13,

d6,d9,h1,d12,s5,h3,h5,d10,h13,s2,s11,h7,s7,d1,h4,s8,c8,d3,c3,d8,s6,d4,d2,d11,s1,c10,d7,c12,c7,s9,s13,c4,h8,c13,h6,c2,c9,s3,c6,h2,s12,c5,c11,c1,d13,d5,h12,h11,s10,s4,h10,h9  
**325/1000: solving: solved in 29217 tries.**  
d9>d6,h3>h1,h5>s5,s11>s2,s7>h7,s7>s11,d1>d10,c8>s8,c3>d3,c3>c8,d2>d4,d11>d2,d7>d11,c12>c10,c7>c12,s13>s9,c13>s13,c13>c7,c4>c13,h6>h8,c9>c2,c6>h6,c9>c6,s3>s1,c5>c9,c11>c5,c1>c11,d5>d13,h10>h11,s10>h10,s10>s12,s4>s10,s4>c4,s4>s6,s4>h4,d7>d8,s3>s4,d7>s7,c3>s3,c1>c3,h9>h2,d5>d7,h9>h13,h12>h9,d5>h5,d5>d9,h12>h3,d12>h12,d12>d5,d1>d12,c1>d1,

h7,s1,d5,d6,h5,s3,d12,d13,s7,h10,h6,s10,d8,h13,c13,h1,s12,c6,c1,s4,d7,c5,c4,c3,h3,h11,d9,s13,d3,c10,d2,c12,c8,d10,d1,h9,h4,d11,c7,s8,c11,h12,s6,d4,h8,c9,h2,s5,c2,s11,s2,s9  
**326/1000: solving: solved in 52 tries.**  
d6>d5,h5>h7,d13>d12,h6>h10,h13>h6,c13>h13,s12>s10,c1>c6,c1>h1,c1>c13,c4>c5,c3>c4,h3>c3,h11>h3,c8>c12,d10>c10,d10>d3,d2>d10,h4>h9,c11>d11,c11>c8,c7>c11,h8>h12,h8>s8,h8>h4,d4>d1,h2>h8,h2>d2,h2>h11,d4>d9,d4>s4,d4>d8,d7>d4,d7>s7,d7>d13,s12>s3,c7>c1,c7>d7,s13>s12,s6>s13,s6>d6,s6>s1,h2>h5,c9>c7,s2>s11,s2>c2,s2>s5,s2>h2,s6>s2,s9>c9,s9>s6,

h13,h10,d3,s2,d7,s7,s5,c9,c10,d9,h4,s1,c8,c13,s13,d12,s6,s4,d13,d1,s9,h7,d11,s11,d2,c7,c5,c11,h5,h1,h3,c1,c12,s12,d4,h12,h8,d10,c2,d5,d8,d6,c3,c6,s3,h11,h6,h2,s10,s8,c4,h9  
**327/1000: solving: solved in 35619 tries.**  
h10>h13,s7>d7,s7>s2,s5>s7,c10>c9,c10>h10,s1>s5,c13>c8,s13>c13,s13>s1,s4>s6,d1>d13,d11>d1,s11>d11,s11>s4,s9>s11,s9>d9,s9>s13,d12>d3,h7>h4,d2>d12,c7>h7,c7>c10,c5>c7,c11>c5,h1>h5,h3>h1,c12>c1,s12>c12,h12>h3,s12>h12,s12>s9,d8>d5,d6>d8,c6>c3,c6>d6,h6>h11,s10>s3,s10>d10,s10>s12,h2>h6,c4>c6,c4>d4,c4>c11,c2>d2,c2>c4,s8>s10,h8>s8,h2>h8,h2>c2,h9>h2,

c8,h6,h8,c7,s3,c10,d11,s7,s5,c6,h2,c5,s12,s13,s6,c12,s9,h10,d7,h7,d1,s10,s2,h13,h9,c4,d5,d9,d10,s1,h12,h11,d6,d12,h4,d2,c11,h3,c1,d4,c13,h5,s8,s4,d13,s11,d8,c2,d3,c3,c9,h1  
**328/1000: solving: solved in 1947 tries.**  
h8>h6,h8>c8,s7>s3,s7>c7,s5>s7,s13>s12,s6>s13,s6>c6,s6>s5,c5>c10,c12>c5,h7>d7,h7>h10,s10>s9,s2>s10,s2>h2,s2>s6,h9>h13,d5>d1,d9>d5,h9>d9,h9>h7,c4>c12,h12>h9,h11>h12,h11>d11,h11>h8,s1>s2,d6>d10,d12>d6,h3>h4,c1>c11,s11>s8,s4>s11,d13>c13,d8>d13,s4>d4,d3>d8,d3>d2,d3>h3,d3>d12,s4>c4,c3>c2,c3>d3,c9>c3,c1>c9,h1>h5,h1>c1,h1>h11,s1>h1,s4>s1,

d5,h8,s11,c13,d8,s13,s8,d12,c8,s5,h13,h9,d3,c3,s4,h3,d7,c12,c2,c10,d9,s9,d13,s10,h1,d6,d2,d1,c4,d10,c9,h4,c7,h10,h11,s6,s3,c6,h5,s2,d11,h12,s7,c11,h6,s12,h2,c5,d4,h7,c1,s1  
**329/1000: solving: solved in 11655 tries.**  
d8>h8,d8>d5,s13>c13,s13>s11,s8>s13,s8>d8,s5>s8,h9>h13,d3>d12,c3>d3,c8>c3,s4>s5,h3>h9,c12>c8,c2>c12,c10>c2,d9>d7,s9>d9,s9>s4,s10>c10,s10>s9,d2>d6,d1>d2,d1>h1,d1>d13,h4>c4,c7>c9,h10>h4,h10>s10,h3>h10,d10>d1,h11>h3,s3>s6,s7>s2,h12>h5,s7>s3,h6>h12,c11>c6,c1>c5,h7>h2,h7>h6,h7>c7,s7>h7,s1>s12,s1>s7,c1>s1,c11>c1,d11>c11,d11>d10,d11>h11,d4>d11,

h7,d6,c11,d7,s1,h6,c4,h11,h1,s3,s9,s2,c9,h13,c2,s6,d13,d1,d4,c1,s12,h3,h4,c5,d3,d2,d8,c8,d11,h12,d12,h5,h9,c13,d9,c10,h10,s4,c12,d5,c6,s7,s10,s5,s13,d10,s11,h8,c7,c3,s8,h2  
**330/1000: solving: solved in 161069 tries.**  
d7>h7,d6>d7,h6>d6,h11>c11,h11>h6,h1>h11,s1>h1,s9>s3,s2>s9,c2>s2,c2>c4,c9>c2,s6>s1,d13>h13,d1>d13,d4>d1,h4>h3,h4>d4,d2>d3,d8>d2,c8>d8,c8>c5,h12>s12,d12>d11,h5>h12,h9>h5,h9>c9,h4>h9,c8>c1,c12>c10,c12>d12,c13>c12,d5>d9,s10>s7,s5>s4,s13>s5,s13>c13,d10>s10,d10>d5,h10>d10,c7>c6,s8>s11,c3>c7,s8>s13,h2>h10,h2>h4,s8>s6,h8>h2,h8>s8,c8>h8,c3>c8,

c9,s6,s3,s8,d3,h7,c6,d10,d13,d4,c2,s9,h4,s2,c12,d6,c13,s10,s1,h11,c10,h6,s11,d8,h5,h13,s7,c8,c11,c1,d7,h8,c7,h3,d1,s12,c4,d5,s13,s5,c5,h12,h1,s4,h9,d12,d2,h2,c3,d9,h10,d11  
**331/1000: solving: solved in 123835 tries.**  
s3>s6,s8>s3,d10>d3,d13>d10,d4>d13,c2>c6,h4>h7,h4>d4,c2>c9,s2>s9,s2>c2,s8>s2,s1>s10,c10>c13,h6>h11,h6>d6,s11>s1,h13>h5,s7>s11,c11>c8,c1>c11,d7>d8,d7>s7,h13>h6,c7>d7,c7>c10,c1>c7,h3>h8,d5>d1,s5>s13,s5>d5,s12>s5,h12>s12,h12>h13,h12>c12,s4>c4,h9>h1,d2>d12,h2>d2,c3>c5,c3>c1,h3>c3,h3>h12,s4>s8,h4>s4,h2>h4,h3>h2,h10>h3,h9>h10,d9>h9,d11>d9,

h7,h4,s6,c2,d12,s3,h3,c12,d13,c4,s9,s13,h8,c3,h9,d2,c8,h5,c7,h13,d8,d7,c9,h2,s2,s5,c6,h1,s4,h11,c1,h6,s11,s10,d3,d10,s7,d5,d9,d4,h10,s1,c13,c10,d11,c5,c11,s12,s8,d1,d6,h12  
**332/1000: solving: solved in 92528 tries.**  
h4>h7,s3>s6,h3>s3,h3>h4,c12>d12,c12>c2,s13>s9,c3>c4,c3>h3,c12>c3,s13>d13,h9>h8,h5>h9,c7>c8,h13>h5,h13>s13,c7>c12,d8>d2,d7>d8,c9>c7,s2>h2,s5>s2,s4>s5,h11>h1,h6>c6,h6>h13,h11>h6,s10>s11,d10>d3,d10>s10,s7>s4,s7>d7,c1>c9,d9>d5,h10>d10,d4>d9,c10>c13,c10>h10,s1>s7,c5>c10,c11>c5,c11>c1,s12>s1,d1>d4,d6>d1,d11>d6,d11>c11,h11>d11,h12>h11,s12>h12,s8>s12,

h12,h1,s2,s4,c8,d9,d3,h6,h11,d1,h7,c1,d5,d13,s11,c13,h5,s10,c7,s3,h8,s7,h4,d7,s9,s6,c3,s1,d4,s8,h10,h9,c4,c2,d6,c5,h3,c11,c12,d12,d8,h13,s12,h2,s13,d11,c10,d10,c6,c9,d2,s5  
**333/1000: solving: solved in 17297 tries.**  
h1>h12,s4>s2,d3>d9,h11>h6,d5>d1,d13>d5,s10>s11,h8>h5,s7>s3,s7>c7,s7>s10,h4>h8,d7>s7,d7>d13,h7>d7,h7>h11,c1>c8,c13>c1,h4>h7,h4>s4,h4>h1,s6>s9,c3>c13,d3>c3,s1>s6,d4>h4,d3>d4,s8>s1,h9>h10,c2>c4,c12>c11,d12>c12,d12>d6,d8>d12,h2>h3,s13>s12,d10>c10,d10>d11,d2>d10,d2>h2,d2>c2,d2>d3,d8>d2,s8>d8,s13>h13,s13>s8,c9>h9,c5>c9,s5>s13,c5>s5,c6>c5,

s13,s2,h5,h13,h8,c11,d1,d10,c6,c5,d12,s5,d6,s11,s8,s12,d7,d13,s4,c13,s6,d3,h9,c8,h3,h12,h6,d2,s7,d9,h4,h2,h10,s9,c12,c4,h1,d5,h7,c9,c3,h11,c1,c2,d4,s1,s10,s3,d8,c7,d11,c10  
**334/1000: solving: solved in 4660 tries.**  
s2>s13,h13>h5,h8>h13,d10>d1,c5>c6,s8>s11,s12>s8,s12>d12,s5>s12,s5>c5,d7>d6,d13>d7,h3>d3,h9>h3,c8>c13,h12>h9,h6>h12,h6>s6,h2>h4,h2>d2,h2>h6,s7>s4,c4>c12,h1>h10,c9>c4,c9>s9,h7>h1,d5>d9,c3>c9,c2>c1,s10>s1,d8>d4,s3>s10,c7>c2,c7>h7,c7>c8,c7>s7,c3>c7,d5>d13,d5>s5,h11>h2,d11>h11,d8>d5,d8>h8,d11>c11,d11>d8,d10>d11,c10>d10,c3>c10,s3>c3,s3>s2,

d8,s7,d1,h6,d13,h4,d10,c3,c8,d5,s5,d3,s6,s11,h9,h11,d12,h7,s1,s8,c1,c12,s2,c10,d11,d6,c6,c11,s12,d4,h13,s13,c2,h3,h1,h10,c4,d9,s3,s10,s9,s4,h12,d2,h2,h8,c9,h5,c5,d7,c7,c13  
**335/1000: solving: solved in 69068 tries.**  
c8>c3,s5>d5,d3>d10,s6>s5,s11>s6,h11>h9,h11>s11,h11>h4,s8>s1,s8>c8,c12>c1,d6>d11,c6>d6,c6>c10,c11>c6,s12>c12,s12>s8,d12>s12,d12>d3,s13>h13,s13>s2,h1>h3,h10>h1,c4>d4,c4>c11,c2>c4,h10>h7,s3>s13,s10>s3,s10>h10,s9>d9,s4>s10,d2>c2,h2>d2,h2>h11,s9>s4,h12>h2,d12>h12,d12>d13,h8>h6,h8>d8,s9>s7,c9>s9,d12>d1,h5>h8,c5>h5,c9>c5,d7>d12,c7>d7,c7>c9,c13>c7,

d5,h5,d1,h13,c10,c8,s1,c11,h8,c5,d9,s2,s6,s7,c9,h12,d6,h2,c7,s4,d8,c6,h9,s3,d2,h10,d7,c1,s8,h6,s11,h11,h3,d4,c12,h4,d10,s13,s9,s12,c3,s10,h1,d3,c13,d12,c2,h7,c4,d11,s5,d13  
**336/1000: solving: solved in 17087 tries.**  
h5>d5,c8>c10,s1>d1,c11>c8,s6>s2,s7>s6,c9>c5,d9>c9,h12>h8,c7>s7,c7>c11,d6>d9,d8>d6,h9>h2,h11>s11,h11>h6,h3>h11,h4>h3,d4>h4,d4>d7,s13>s8,s9>s13,s12>s9,c12>s12,c12>c1,d10>h10,d10>d2,d4>d10,c12>c6,d3>c3,s10>s3,d12>d3,d12>c12,d12>d8,d12>h12,h9>h13,d4>d12,s4>d4,s4>s1,h7>h1,h7>h9,c7>h7,c2>c7,c4>c2,s5>s10,s5>h5,s4>s5,c4>s4,c13>c4,d13>d11,d13>c13,

h5,s7,h1,d7,h3,d8,s11,s3,h12,c6,c4,d9,s6,c11,s13,c1,s8,d1,c7,h8,h2,h6,h7,s5,c5,c10,h11,s10,s12,c3,d10,c9,c2,d4,s4,c8,d5,d6,d2,s2,d11,h4,d12,c12,d13,h9,s1,c13,s9,h13,h10,d3  
**337/1000: solving: solved in 8316 tries.**  
s3>s11,h12>h3,c4>c6,d9>d8,c7>c1,h2>h8,h6>h2,h7>h6,h7>c7,c5>s5,c10>c5,s12>s10,c3>c10,c2>c9,s4>d4,s4>s12,c8>c2,d6>d5,d2>d6,s2>d2,s2>s4,c12>d12,d13>d11,c12>c8,s9>h9,s1>s9,c13>d13,c13>c12,h13>c13,h13>h11,s1>s2,s1>d1,s1>s8,h13>h7,h13>s13,s1>s6,h4>h13,h4>c4,h4>h12,c3>c11,d3>c3,d3>d9,s3>d3,s1>s3,d10>d7,h10>d10,h10>h5,s1>s7,h1>s1,h1>h10,h4>h1,

c8,h11,h6,h12,s10,c6,d8,d6,h13,c13,d1,s9,h5,c9,h3,s13,c3,s7,s2,h9,d4,d2,c5,c10,s6,d12,s11,c11,h4,c2,d9,d3,s12,s5,c7,h10,d10,c4,d13,h1,d11,h2,s1,c1,s4,h7,d5,c12,s3,h8,d7,s8  
**338/1000: solving: solved in 17168 tries.**  
h6>h11,h12>h6,c6>c8,d6>d8,d6>c6,c13>h13,s9>s10,c9>c13,c9>s9,d1>d6,h3>h5,c3>c9,h3>c3,h3>h12,s7>s13,s2>s7,d2>d4,c10>c5,d12>d2,s11>s6,c11>s11,c11>c10,h4>h9,c2>c11,c2>s2,d9>d12,d3>d9,d3>h3,d3>d1,s5>s12,c7>c2,d10>h10,c4>h4,d13>d10,s1>h1,h7>h2,c1>s1,d5>d11,d5>s5,d13>d5,c12>c1,c12>c7,c4>c12,s4>c4,s3>s4,s3>d3,d7>d13,h7>d7,h8>h7,s8>h8,s8>s3,

s12,d4,d2,h8,d11,h6,h11,s1,s9,d3,c7,c3,d10,c12,h5,d9,c2,s4,s8,c5,d7,s11,h1,c1,h10,s7,h2,c13,c9,s10,d6,c11,h7,h12,d13,d12,c10,s6,h3,s13,h9,d1,s3,d5,d8,s5,c4,h13,c6,c8,s2,h4  
**339/1000: solving: solved in 17817 tries.**  
d2>d4,h11>h6,h11>d11,h11>h8,s1>s12,s9>s1,c3>c7,c3>d3,d10>d2,c12>c3,c2>c12,s8>s4,c5>h5,c5>c2,d9>d10,d9>s9,c1>h1,s7>s11,s7>d7,s7>s8,h2>h10,c9>c13,c11>c9,h12>h7,d12>d13,d12>h12,d12>d6,c10>c11,s10>c10,s10>s7,s3>s13,s3>h3,s3>s6,d1>d12,d5>d1,s5>s3,s5>d5,s5>s10,s5>c5,c8>c6,h4>h13,c8>d8,c8>c1,c4>c8,h4>c4,h2>h4,s2>s5,h2>s2,h2>h11,h9>h2,h9>d9,

d5,c6,s4,d9,s12,d4,c11,h13,h12,h5,s11,c1,s7,c10,h8,d8,h6,c4,s13,d7,s3,h1,d3,c13,d1,h9,d6,c12,d2,s10,s1,c3,c9,s2,h10,s9,d10,h11,d12,h2,c2,h4,s5,c7,d13,c8,h3,s8,h7,s6,d11,c5  
**340/1000: solving: solved in 290770 tries.**  
d9>d5,s12>s4,d4>d9,h12>h13,h5>h12,s11>s12,c11>s11,c11>c6,d8>h8,c4>c10,d7>d8,s3>s13,d1>h1,d1>d7,d1>c1,d1>d4,c4>c11,d3>s3,h9>h6,s1>s10,c3>c12,c3>d3,c13>c3,d2>d6,c9>c13,c9>h9,s2>s1,s2>d2,h11>h10,s9>c9,s2>s9,h11>h5,h2>s2,d12>d10,c7>c2,h4>h2,h4>c4,h11>h4,c8>c7,d13>d12,s8>c8,h7>h3,s6>s8,s5>s6,d11>d13,d11>d1,h11>d11,h7>h11,s7>h7,s5>s7,c5>s5,

d1,c2,h7,c11,h9,h1,c5,h6,s12,d6,c13,d12,c9,d10,c10,h2,h13,s1,h8,s3,d8,h11,d3,s2,c6,c3,c7,s9,s8,h10,s10,c1,c8,s6,c4,s13,d4,d5,h5,s7,s5,s4,d9,d7,h3,d2,d11,d13,c12,h12,h4,s11  
**341/1000: solving: solved in 2062 tries.**  
h1>h9,d12>s12,d6>d12,d6>h6,c9>c13,c10>d10,c10>c9,h13>h2,h11>h8,d3>d8,d3>s3,s2>s1,c3>c6,c3>d3,c7>c3,s9>s2,s8>s9,s10>h10,s10>s8,c1>c7,c8>c1,s6>s10,s6>d6,h11>h13,c4>c8,d5>d4,h5>d5,h5>h11,h5>c5,h5>h1,c10>c11,c4>c10,s13>s6,s7>s13,s7>h7,s5>h5,s4>s5,s4>c4,d2>d9,d2>c2,d2>d1,d13>d7,d13>d2,s4>s7,d11>d13,h12>c12,h12>h3,h4>h12,s11>d11,s4>s11,h4>s4,

h7,d10,d7,h6,s10,d13,c8,c1,c4,h1,h8,c5,h13,d6,s5,d4,d12,s8,c9,d11,d2,s6,h12,c6,h11,h9,d8,s4,d3,s13,s2,c11,c10,s9,d5,d9,c3,c2,s11,h10,d1,c12,s7,h2,c7,s12,s3,c13,s1,h4,h5,h3  
**342/1000: solving: solved in 11151 tries.**  
d7>d10,d7>h7,d13>d7,c1>c8,c4>c1,h1>h6,h8>h1,c5>c4,h13>h8,h13>d13,s5>s10,c5>s5,d4>d6,d12>d4,c9>c5,d2>d11,h9>h11,s2>s13,c10>c11,d9>d5,d9>s9,d9>d3,d9>h9,d8>d9,s2>s4,c10>c6,c3>c10,c2>c3,c2>d2,c2>c9,s6>s8,d8>d12,s11>s6,c7>c12,s7>c7,h2>h10,h2>s2,h2>h12,d1>d8,s12>s7,s1>s12,s3>s11,s1>d1,s3>s1,h5>h4,h3>h5,h3>s3,h2>h3,c13>h13,c2>c13,h2>c2,

h2,h7,d1,s2,s11,s1,s8,d8,h6,c9,h5,h13,h1,s5,s6,h10,c10,s13,h3,h11,h4,s3,h8,h12,c13,d3,c3,d5,d13,s12,h9,d12,c1,c5,c4,c6,c12,c2,d2,s7,c7,d11,d4,s10,s9,c11,d10,d7,d9,d6,s4,c8  
**343/1000: solving: solved in 31320 tries.**  
h7>h2,s11>s2,s1>s11,s1>d1,s8>s1,d8>s8,h13>h5,h1>h13,s6>s5,s6>h6,h10>h1,c10>h10,c10>c9,h11>h3,h4>h11,h12>h8,d3>s3,c3>c13,d5>d3,d13>d5,h9>h12,d12>s12,d12>d13,c1>c3,c5>c1,c4>c5,c4>h4,c6>c4,c6>s6,c10>c6,d12>d8,c12>c10,c12>d12,h9>h7,d2>c2,d6>d10,d7>d6,d9>s9,d9>d11,d9>d2,d9>h9,s4>s10,s4>d4,s4>s13,s7>s4,c7>s7,c7>c12,d7>d9,c7>d7,c11>c7,c8>c11,

d11,d8,s1,s9,d4,d2,s2,c9,h9,c12,h11,s4,d13,c11,d5,d12,s5,h13,d10,c10,s13,s7,s3,c4,h3,h7,c1,h4,d3,d7,c8,h12,c3,s11,d9,c13,c7,h1,d1,s6,c2,d6,c6,h10,s8,h5,h2,h8,c5,s12,h6,s10  
**344/1000: solving: solved in 1045 tries.**  
d8>d11,s9>s1,d2>d4,s2>d2,s2>s9,h9>c9,c11>h11,c11>c12,s4>s2,d5>d13,d12>d5,d10>d12,c10>d10,c10>c11,s5>s4,s13>h13,s13>s5,s7>s13,s3>s7,c4>c10,h3>s3,h9>h3,h4>c4,h4>h9,h7>h4,d3>d8,d7>d3,h7>d7,c8>c1,c13>c3,c7>c13,c7>h7,c8>c7,h1>h12,d1>d9,d6>d1,s6>d6,s6>s11,c2>c8,c6>s6,h8>s8,h8>h1,h6>h2,h6>c6,h5>h8,h10>h6,c5>c2,h5>c5,h10>h5,s10>s12,s10>h10,

d8,c10,h11,s2,s7,h1,c3,c5,h3,h5,d4,c4,d6,h2,d9,h7,h6,d11,d1,c13,s6,s9,h10,s12,c9,d13,c7,s5,d5,d3,h8,s10,c8,s11,h13,h12,d2,c1,d10,c6,c12,s1,d7,s13,s4,h9,s3,d12,s8,h4,c2,c11  
**345/1000: solving: solved in 3960 tries.**  
s7>s2,c5>c3,h5>h3,h5>c5,h5>h1,c4>d4,h2>h5,d9>d6,h7>h2,h7>s7,h7>h11,h6>h7,d11>d9,d1>d11,s9>s6,c9>s9,c9>c13,s5>s12,d5>s5,d5>d1,d13>d5,h8>h10,c8>c7,c8>h8,c8>c9,s11>s10,h12>h13,d2>d3,c12>c6,c12>h12,c12>c8,d10>d2,s1>c1,s1>s11,s3>s13,s4>s3,d12>d7,d12>c12,d12>d13,d10>d12,s8>s1,s4>s8,h4>h9,h4>s4,h4>h6,c4>h4,d10>d8,c10>d10,c4>c10,c2>c4,c11>c2,

c2,d6,c8,s13,s6,d8,h4,h2,s10,h7,h1,c9,d10,d3,c5,s12,c7,s1,s9,c13,c11,c12,d2,c6,c1,h10,h12,h5,h9,c10,d5,h6,d7,s11,h3,h11,s5,d11,d4,c4,s7,s4,s8,d9,d13,s2,s3,c3,d12,d1,h8,h13  
**346/1000: solving: solved in 22605 tries.**  
s6>s13,d8>d6,c8>d8,c8>c2,h2>h4,h1>h7,d10>s10,d3>d10,c5>c9,s9>s1,c11>c13,c12>c11,c12>s12,c12>c5,c7>c12,c6>c7,c1>c6,c1>h1,d2>d3,d2>h2,c1>c8,h12>h10,h5>h12,h9>h5,h9>s9,d5>d2,h3>h6,h11>s11,d11>d7,h11>d11,h11>h3,c4>d4,s4>s7,s8>s4,s2>s8,s3>s2,d13>d9,c3>c4,c3>c10,s3>c3,s3>s6,h11>h9,s5>s3,d5>s5,d12>d5,h8>h11,h13>h8,d13>h13,d13>d12,d1>d13,d1>c1,

c8,h3,s1,d1,s6,d7,h7,c4,d12,c9,d11,c11,d4,h1,h8,h5,h12,h10,s13,h6,s3,d10,c7,d5,h4,c12,s5,s9,d3,h9,h13,s12,d2,s8,s7,h2,d13,c6,s2,d8,s11,d9,s4,h11,d6,c10,c13,c5,s10,c1,c2,c3  
**347/1000: solving: solved in 727240 tries.**  
d1>s1,h7>d7,h7>h3,d12>d1,c9>c4,d11>d12,c11>c9,d4>d11,h8>h1,h5>h8,h12>h5,h10>h12,s13>s6,h6>h10,s3>s13,c7>c11,c7>h7,c7>c8,d10>d4,d5>d10,h4>h6,s5>s3,s5>d5,c12>c7,h9>h4,s9>h9,s9>s5,s12>s9,s12>c12,s7>s8,h2>h13,d8>d13,s2>s7,s2>d2,d9>d8,s11>s2,s4>s11,d6>d9,c6>d6,c13>c6,c2>c1,c3>c5,c3>c13,c3>d3,s10>s4,s10>s12,c10>c3,c10>s10,c2>c10,h2>c2,h11>h2,

d3,s13,d11,d2,s8,h11,s11,d1,d13,s9,d4,h10,c8,c4,c2,s2,h1,h2,c1,d8,c9,h8,c11,s3,h13,c13,c3,d9,c10,h4,s6,c7,s10,d10,h6,s5,h9,s4,s7,d6,c5,c6,d5,d12,d7,h5,s1,h12,s12,h7,c12,h3  
**348/1000: solving: solved in 2152 tries.**  
d2>d11,s11>h11,s11>s8,d13>d1,d13>s13,d13>d3,d2>d13,s9>s11,c4>c8,c2>c4,s2>c2,s2>s9,s2>d2,h1>h10,h2>h1,d8>d4,c9>c1,h8>d8,h2>h8,h2>s2,c11>c9,h13>h2,c13>h13,c11>c13,c3>s3,c3>c11,c7>c10,s10>s6,d10>s10,d10>d9,h6>h4,s7>s4,c6>c5,c6>d6,d12>d5,d7>d12,s12>h12,h7>h5,h7>s7,h7>h9,c6>h6,c6>c3,s1>s5,s12>s1,c12>s12,c12>c6,d7>d10,c7>d7,c7>c12,h7>c7,h3>h7,

h5,d7,h1,c11,d6,s3,c12,h13,c10,h10,s6,d1,c4,d13,c3,h7,d4,c2,d12,s10,c6,h2,d2,h6,c1,h8,d3,s2,s12,s9,s8,h3,d8,h9,s13,d9,s5,s11,c9,s7,s4,d5,c5,c8,c13,h12,d11,c7,h11,d10,h4,s1  
**349/1000: solving: solved in 26357 tries.**  
d6>d7,h10>c10,h10>h13,s6>s3,s6>d6,c12>c11,d1>h1,d4>d13,d4>c4,d4>d1,c6>c2,d2>h2,s12>s2,s9>s12,s8>s9,h3>h8,d3>h3,d3>d2,d8>s8,d8>d3,s11>s5,c8>c5,c13>c8,c7>c13,d11>d5,h4>h12,h4>s4,h11>h4,h11>s11,h11>h9,s7>s13,c9>d9,d11>h11,c7>c9,d10>d11,d10>d8,s1>c1,s1>s10,s7>s1,c7>s7,c7>h7,c7>c3,c6>c7,d12>c12,d12>d4,d10>d12,h10>d10,h6>c6,h6>h10,h6>s6,h6>h5,

d8,c9,h13,s7,d1,s3,h10,s12,d11,h5,d5,s11,d10,s5,s9,d4,c1,h6,h4,h1,d2,d12,c2,s2,c10,d7,s4,d13,h11,c11,c6,c5,c8,d9,h7,c13,h9,c4,h3,s13,c12,s10,d3,c3,c7,d6,s8,h8,s6,h12,h2,s1  
**350/1000: solving: solved in 68960 tries.**  
h5>h10,d5>d11,s5>d5,s5>s12,s5>h5,s5>s3,s11>s5,h4>h6,h1>h4,h1>c1,d12>d2,s2>c2,d7>d12,c11>h11,c11>c10,c6>c11,c5>c6,c8>c5,d9>d13,h9>d9,h7>h9,c13>c8,c4>c13,s4>c4,s4>s2,s4>d4,s4>s9,d7>d10,d7>s7,d7>d8,d1>d7,s4>s11,h7>h1,s13>s4,h3>h7,s10>s13,c3>h3,c7>c3,c7>c9,c12>c7,d6>d3,s6>d6,s6>s10,h8>h13,s8>s6,h12>c12,h2>h12,h8>h2,s8>h8,s1>s8,s1>d1,

d3,h13,h3,c13,h9,c7,h6,d10,s4,d11,c10,s6,d1,c5,d8,d6,c6,h12,s7,d12,s11,h5,h1,h7,s5,c2,d9,h10,s3,h11,d7,c1,s9,s2,d4,s8,h4,s1,c4,d2,c3,c9,h8,s12,c11,d13,h2,c12,s10,c8,s13,d5  
**351/1000: solving: solved in 84875 tries.**  
h3>h13,h3>d3,c10>d10,d6>d8,d6>s6,d6>d11,d6>h6,d1>d6,c6>c5,s7>s4,s7>c7,c6>c10,d12>h12,h1>h5,h7>h1,s2>s9,d4>d7,s8>s2,h4>d4,h4>h11,s8>s3,c4>h4,c1>c4,s1>c1,s1>s8,d2>d9,d2>c2,c9>c3,s12>s1,s12>s5,s12>d12,s12>s7,s11>s12,d2>d1,h8>h7,c9>c6,h2>h10,h2>d2,c9>h9,h8>h2,c11>c9,s11>c11,h8>h3,s10>s11,c8>c12,s13>s10,d13>s13,c8>h8,c13>c8,d13>c13,d5>d13,

c8,s8,h10,h1,h3,s3,h9,c4,d13,c5,s2,d12,d2,s10,c7,d10,h13,c6,c10,h5,h7,c2,s4,c9,d6,s12,h12,s6,d9,s9,d4,h6,h4,h11,d1,c13,d7,c11,s5,d11,s1,h2,c1,s11,d8,s13,c3,d5,h8,c12,d3,s7  
**352/1000: solving: solved in 300191 tries.**  
s8>c8,h1>h10,h3>h1,s3>h3,s3>s8,d12>d13,d2>s2,c7>c5,d10>s10,d10>d2,c6>c7,c10>c6,d10>c10,d10>d12,h13>h9,h5>h13,h7>h5,s4>c4,c9>c2,h12>s12,d9>d6,d9>c9,d9>d10,h12>h7,s9>s6,s9>d9,s9>s4,h6>h12,h4>h6,h11>h4,s11>s1,s11>d11,c3>c1,d3>d5,d3>c3,d8>d3,h8>h2,d8>h8,s13>s5,s13>c13,s11>s13,s11>s9,d1>d4,d8>d1,d7>d8,s7>d7,s7>s3,s11>h11,s11>s7,c11>s11,c12>c11,

d2,d7,d1,d9,c3,c8,c7,c10,h2,h5,c13,c12,d10,c11,h8,d3,c9,h4,h6,d4,h1,s5,h13,s1,s7,h10,h3,h7,h9,s4,d12,s8,h12,s9,d6,d11,s12,c6,s6,s13,s10,s2,c2,d13,c4,s11,c5,d8,d5,s3,c1,h11  
**353/1000: solving: solved in 127156 tries.**  
d7>d2,d1>d7,d9>d1,c8>c3,c7>c8,c10>c7,h5>h2,c12>c13,d10>c10,d10>d9,c11>c12,c9>c11,h6>h4,s1>h1,s5>s1,h13>h6,s7>s5,h10>h13,h3>h10,h3>d3,h3>h8,h7>s7,h9>h7,h9>c9,h9>h5,h3>h9,s4>d4,d12>d10,s8>s4,h12>d12,h3>h12,s9>s8,c6>d6,s10>s12,d13>s13,d5>d8,s3>s11,s3>s2,s3>s10,s3>s9,s6>s3,c6>s6,c2>c6,c1>c4,c1>c2,c5>c1,d5>c5,d11>d5,h11>h3,d11>h11,d13>d11,

h11,h8,d8,d3,c11,h10,h13,c1,s3,h6,s1,s7,c8,c7,h9,h1,d12,s2,d10,s4,d11,c3,c9,c13,c12,s12,d9,c6,h2,s6,h7,s11,d13,c5,s5,s9,h3,s13,c2,s10,d7,d2,c4,d1,d4,d5,h12,c10,s8,h5,h4,d6  
**354/1000: solving: solved in 63519 tries.**  
h8>h11,d8>h8,d3>d8,h13>h10,h6>h13,s1>s3,s1>c1,s7>s1,c8>c11,c7>s7,h1>h9,c9>c3,c13>c9,c12>c13,s12>c12,s5>c5,s9>s5,s13>d13,s13>s11,s9>s6,s9>d9,s9>s12,h7>h2,s13>s9,h3>h7,d2>d7,d4>d1,d5>d2,h5>h12,h4>h5,c10>c4,c10>c2,s10>c10,s10>s13,s10>d10,s10>s2,h4>h3,d6>d5,d6>d11,d6>d12,d6>h6,s4>s10,h4>h1,d4>h4,c6>c7,c6>d6,d4>d3,s4>d4,s8>s4,c8>s8,c6>c8,

c11,d13,d10,h8,s4,c3,d11,d2,h10,c7,s12,h13,s7,c13,h5,c5,s3,c6,h1,h12,h7,d4,c10,d6,s6,s9,d9,c12,s1,h3,d5,c9,c4,h6,h9,s2,s8,d12,d1,s11,s13,d3,d7,h11,s10,h2,c1,h4,c2,c8,s5,d8  
**355/1000: solving: solved in 12826 tries.**  
d10>d13,d2>d11,c7>c3,h5>h13,c5>c13,h12>h1,h7>h12,c10>c6,d6>d4,s6>d6,s6>s3,s9>s6,d9>s9,h3>h7,c9>c12,c9>d9,c9>c5,c10>c9,h3>h5,c4>c10,h9>h6,s2>s1,s8>s2,d1>d12,d3>d1,d7>d3,s13>s11,h11>h9,c8>c1,c2>h2,c8>c2,d8>c8,d8>d7,s5>s13,s5>d5,s10>s5,s10>s7,s10>h10,s12>s10,h11>h3,s8>s12,d8>s8,d8>d2,c4>c7,c4>s4,d8>d10,h8>d8,h11>c11,h8>h11,h4>c4,h4>h8,

c6,s10,h1,c5,c11,s8,c12,h7,d11,d7,h6,d4,c8,c4,c7,s13,s3,h2,d9,h11,h12,h8,s6,h5,h4,s7,d1,c9,d5,h10,d8,s4,c10,c13,c1,s9,d3,s5,c3,s2,s1,s12,h3,d10,d13,s11,d6,d12,h9,h13,c2,d2  
**356/1000: solving: solved in 43614 tries.**  
c5>c6,c11>c5,h7>h1,d7>d11,d7>h7,c8>c12,c8>s8,c8>c11,c4>d4,c7>c4,s3>s13,h2>h6,h12>h11,h8>h12,s6>s3,h5>h8,h4>h5,s7>s6,s7>c7,s7>s10,d7>s7,c9>d9,c9>c8,h4>h2,d5>d1,c10>h10,c13>c10,c1>c13,d3>d8,s9>s4,s5>s9,s5>d5,c3>d3,s2>s5,h3>c3,h3>h4,s1>c1,s1>s2,d13>d10,s11>s1,s12>s11,d12>s12,d13>d12,h9>h3,h13>h9,d13>h13,d13>d7,c2>c9,d6>d13,d2>d6,d2>c2,

c6,h11,c9,c4,d5,h8,s8,s1,h6,h4,c11,s11,h5,d13,d9,h2,d11,d12,s7,s9,h12,d2,d7,s2,s12,d10,s4,s10,c12,s3,h3,c2,d8,h13,c13,h9,c1,s6,d6,d1,h10,s13,c3,c5,c8,s5,d3,d4,h7,c7,c10,h1  
**357/1000: solving: solved in 3346 tries.**  
c4>c9,h8>h11,s8>h8,s1>s8,h4>h6,c11>c4,s11>c11,s11>s1,h5>h4,h5>d5,d9>d13,d12>d11,s9>s7,s9>d9,h12>d12,h12>h2,d7>d2,s2>s9,s12>s2,h12>s12,h12>h5,d10>d7,s4>s11,s10>d10,h3>s3,h3>h12,c2>c12,c13>h13,d6>s6,d1>d6,d1>c1,d1>d8,h10>h9,c3>c13,s5>s13,c5>s5,c8>c5,c7>h7,c7>c8,c10>c7,c10>h10,c10>c2,c10>s10,d4>d1,d4>s4,c10>c6,d3>d4,c3>c10,d3>c3,h3>d3,h1>h3,

c1,s2,h1,s10,h11,h6,c4,d11,s11,d4,c7,d10,s9,s8,h7,s6,c12,d2,d3,h3,c3,c10,d12,s7,d9,s4,h2,d13,c9,d8,d6,c5,c11,c6,c8,h13,s5,h12,h8,d1,h9,h5,h4,s12,c2,s13,s3,s1,c13,d7,d5,h10  
**358/1000: solving: solved in 46203 tries.**  
h6>h11,s11>d11,s11>s10,d4>c4,s8>s9,h7>c7,s6>s8,d2>d10,d3>d2,h3>d3,h3>h7,s6>h6,s6>s11,h3>h1,c3>c12,c3>h3,c10>c3,d12>d4,d13>d9,d6>d8,c11>c5,c6>c11,c6>d6,c6>c9,c8>c6,h8>h12,h8>c8,h8>h2,h13>h8,h9>h13,h5>h9,s12>s5,s1>s3,c13>c2,s13>c13,s13>s12,s13>d13,s13>s6,h4>s4,h5>h4,d1>d12,s1>d1,s1>s13,s7>s2,s1>c1,s7>s1,d7>s7,h10>c10,h5>h10,d5>h5,d5>d7,

c6,c9,h2,s4,h4,h13,d4,d2,c10,s12,c3,d9,s8,h7,s13,d7,c12,s7,d5,s3,h1,d8,c1,d1,h11,h3,c7,s2,d3,c13,d12,c5,s5,c2,h10,d10,c8,h8,s9,h6,c4,h12,s10,s6,d13,d11,d6,s11,h5,s1,c11,h9  
**359/1000: solving: solved in 156607 tries.**  
c9>c6,h4>s4,h4>h2,h13>h4,d2>d4,c10>c9,d9>d2,s7>s13,s7>h7,s7>s8,d7>s7,d7>d9,c12>c3,c12>s12,c12>c10,d5>d7,h1>h13,d1>c1,d1>d8,d1>h1,d5>d1,h3>h11,h3>s3,c7>c12,d3>d5,h3>d3,c13>c7,s5>c5,c2>s2,h8>h10,c4>c8,d6>s6,d6>h6,d13>d6,d11>d13,d11>d10,d11>d12,s1>s10,h5>h12,h5>h8,h5>s5,s11>s1,c11>c4,c11>c2,h9>h5,h9>h3,s9>h9,s11>s9,c11>s11,c11>c13,d11>c11,

s7,s2,s12,c9,d6,h7,h13,c2,d2,d4,d12,c11,c10,c6,d10,h12,c4,d8,c5,d3,h5,s8,s5,c3,h6,d9,h2,s6,c8,d13,s1,s9,d5,h1,h10,d1,s4,c7,c1,h11,c13,h4,c12,s10,d11,h9,d7,s3,h8,h3,s11,s13  
**360/1000: solving: solved in 10740 tries.**  
s2>s7,s12>s2,h13>h7,c2>c9,d2>c2,d6>d2,d12>d4,d12>s12,d6>d12,c10>c11,c6>c10,d10>d6,s5>s8,s5>h5,c3>c5,d3>c3,d3>d8,d9>d3,h2>h6,s1>s6,s9>s1,s9>d9,s5>s9,h2>h12,d5>d13,h10>h1,c1>d1,c1>c8,h11>h10,c12>c7,c13>c12,h4>h11,s4>h4,c13>c1,s4>s5,s4>c4,s10>s4,c13>c6,c13>h13,s10>d10,d7>d5,h9>h2,d11>d7,h8>h9,s11>d11,h3>h8,s11>s10,s3>h3,s13>s3,s13>c13,s13>s11,

c4,c10,h7,h8,s3,d6,c11,d8,c6,c7,c9,s11,d11,d10,s12,c5,d4,c2,c12,h13,s10,h4,h3,d1,c1,d12,s9,c8,d9,c13,d3,d13,d2,s8,h1,s2,s5,h12,h10,c3,s1,h5,s6,h2,d7,h11,s4,h9,s7,d5,h6,s13  
**361/1000: solving: solved in 197772 tries.**  
c10>c4,h8>h7,c6>d6,c6>c10,c11>c6,c9>c7,s11>s3,d11>s11,d8>d11,d8>h8,c5>c9,c12>c2,h3>h4,c1>d1,c8>c1,d9>s9,d9>d12,d13>d3,d13>c13,d13>d9,d2>d13,s2>d2,s2>s10,s8>s2,h10>h12,s1>s5,s1>h1,s1>s8,c3>h3,c3>c12,c8>c3,h2>h10,h5>h2,h11>h5,h6>h9,s7>d7,s7>s1,h6>h11,s6>h6,s6>s7,s4>s6,s13>h13,s13>s12,s4>s13,d4>s4,d4>d10,c8>d8,c8>c11,c5>c8,d5>d4,d5>c5,

s11,c3,d4,c5,d10,s12,h7,h8,s9,s1,s6,h13,s10,h12,s13,c6,d12,d2,d3,c2,s4,c4,h3,s3,d11,c11,c7,h6,h4,h10,c8,c9,s7,s2,h11,d13,d6,c12,d8,h1,h2,d5,s8,c1,d1,s5,d9,d7,h9,c10,h5,c13  
**362/1000: solving: solved in 24633 tries.**  
h8>h7,s1>s9,s6>s1,s13>h13,s13>s6,s10>s13,s10>d10,s12>s10,h12>h8,h12>s12,d2>d12,d3>d2,c4>s4,c4>c2,s3>h3,d11>d3,c11>d11,c11>c6,c4>c11,c4>d4,c4>c3,c5>c4,s3>s11,h4>h6,h10>h4,c9>c8,s7>c7,s7>s3,h10>h12,h11>h10,d6>d13,c12>c9,d8>d6,d5>d8,d7>d1,s5>s8,s5>d5,s5>s2,h1>h11,c1>c12,c1>h1,s5>s7,d9>d7,h9>d9,c10>c1,h9>h2,h5>h9,h5>s5,c5>h5,c10>c5,c13>c10,

s11,d6,d1,h7,d4,h3,h6,d7,h1,c6,d11,c12,s4,h2,s7,s8,s3,d12,s6,h5,d10,s1,s10,s13,h9,c9,s12,h4,h11,s2,d13,h13,c2,h10,c7,d5,s5,c11,d8,c8,c5,h12,d2,d3,c1,c10,s9,c4,h8,d9,c13,c3  
**363/1000: solving: solved in 35926 tries.**  
d1>d6,h6>h3,d7>h7,d7>d1,d4>d7,h1>h6,d11>d4,d11>s11,c12>c6,h2>h1,s7>s4,s8>s7,s3>s8,d10>d12,s10>s1,s10>d10,s10>s3,s6>s10,h5>h2,s13>s6,h9>h5,c9>h9,c12>c9,s12>s13,s12>c12,h11>h4,h13>d13,s5>d5,c8>d8,c8>c11,c5>c7,s5>c5,d3>d2,c4>c1,c4>c8,c10>c4,c10>c2,h10>c10,s9>s5,s9>s2,h8>h10,h8>h11,h12>h8,d9>s9,d9>d11,h12>s12,d3>d9,h13>h12,c13>h13,c3>c13,c3>d3,

h1,s11,d7,c13,h4,h9,d10,h13,d9,c4,c1,s10,c9,c6,h10,c8,c11,d12,c2,d2,d11,s6,s2,d6,h6,h11,s1,d5,d8,s3,h5,c12,d13,c7,c10,s13,h7,h2,d1,c5,h12,c3,h3,d4,s7,s4,s9,s12,d3,h8,s8,s5  
**364/1000: solving: solved in 18789 tries.**  
h9>h4,d10>d7,h13>h9,h13>c13,h13>h1,d9>d10,c1>c4,s10>s11,c9>c1,c9>d9,c6>c9,h10>h13,s10>h10,c8>c6,c11>c8,d2>c2,d2>d12,d11>d2,d11>c11,s2>s6,h6>d6,h11>h6,d8>d5,c10>c7,h2>h7,h12>h2,c3>c5,h3>h12,s4>s7,s4>d4,s9>s4,s12>s9,d3>d1,d3>h3,c3>c10,d3>d13,s12>s13,s12>c12,s8>h8,s8>s12,s8>d8,s8>s1,h5>h11,s3>s2,s5>s8,s5>h5,d3>d11,s5>s10,s3>d3,s3>s5,c3>s3,

h2,d4,c4,c11,s12,d3,h1,c12,c5,c7,s9,d2,d5,c10,s11,d9,h11,s5,s7,h10,s13,s8,d10,s10,s1,d12,d11,s6,s2,s3,d7,c6,c3,c1,c8,d6,c2,h3,h5,h13,h9,h12,h8,d8,d13,c9,d1,h4,c13,s4,h6,h7  
**365/1000: solving: solved in 3855 tries.**  
c4>d4,c11>c4,c12>s12,c12>c11,h1>h2,c7>c5,d2>d3,d5>d2,d9>s9,h11>s11,s7>s5,h10>c10,h11>h10,s7>c7,s13>s7,s8>s13,s10>d10,s10>s8,s1>s10,s1>h1,d9>d5,d12>c12,d9>d12,d11>h11,d11>d9,s2>s6,s3>s2,c3>c6,c1>c3,c8>c1,h5>h3,h13>h5,h9>h13,h12>h9,h8>h12,h8>c8,c9>c2,d8>h8,d8>d7,d6>d11,d1>d8,d1>s1,c13>c9,d13>c13,s4>s3,d13>d1,d6>d13,h4>s4,h6>h4,h6>d6,h7>h6,

d11,s1,c1,d13,c6,s11,c13,c5,s3,h6,h2,d2,d1,c11,d3,d6,c7,d10,c12,h13,d5,s10,h8,c4,c3,s2,h11,d12,h7,c2,h5,d4,s12,h12,s5,s13,s7,d8,d9,d7,s6,s4,c8,s9,h1,s8,h9,c10,h10,h4,c9,h3  
**366/1000: solving: solved in 1358417 tries.**  
c1>s1,c13>d13,c13>c1,c6>c13,h2>h6,d2>h2,d1>d2,c11>c5,c11>s11,c11>c6,c11>d11,d3>d1,d3>s3,d6>d3,d5>d10,c3>c4,s2>s10,h12>s12,s5>h5,s13>s5,s7>s13,d9>d8,d7>d9,d7>s7,d7>d12,h7>d7,h12>h7,h12>h8,h12>c12,h13>h12,h11>h13,c2>c3,c2>s2,d4>d5,c2>c7,s4>d4,s8>c8,s9>s8,h1>h11,h4>h9,h4>h1,h4>s4,s6>d6,c10>c2,s9>s6,h10>h4,c9>s9,c9>c11,c10>c9,h10>c10,h3>h10,

s10,d11,h6,d1,h5,h12,d5,d4,s11,d6,s9,h2,h10,h13,h1,c4,c2,s4,s6,c9,d3,c5,d8,h9,h7,c8,c1,h11,d10,c11,d13,c12,s8,c3,s2,s3,h3,s13,d2,d7,h4,c6,h8,s12,d9,s1,d12,c7,c13,s7,c10,s5  
**367/1000: solving: solved in 858712 tries.**  
h12>h5,d4>d5,h10>h2,h13>h10,h1>h13,c2>c4,s4>s9,s4>d4,s11>s4,d6>d1,d6>h6,d6>d11,s11>s10,h1>h12,s6>d6,s6>s11,c9>c2,h7>h9,c8>c5,d8>c8,d8>d3,h7>h1,d10>d8,c11>h11,d13>d10,c11>c1,c3>c11,c12>c3,s13>s2,s13>d13,s13>s6,c12>c9,s8>s13,h3>s3,h4>h3,d7>d2,h8>h4,h8>s8,h7>h8,d12>s12,d12>c12,d9>d12,d7>d9,c13>c6,c7>d7,s5>s1,s7>s5,s7>h7,c7>s7,c13>c7,c10>c13,

c13,c10,s1,c12,d6,h3,h13,d7,h10,s8,h6,s2,s7,c3,d5,d9,h1,d3,h9,d4,s12,c8,c2,c7,s11,c4,d11,s4,c9,d13,d8,s13,c11,c1,d2,s3,s6,d1,s5,c6,d10,h4,c5,h5,s10,s9,h11,d12,h7,h2,h8,h12  
**368/1000: solving: solved in 8259 tries.**  
c10>c13,h13>h3,s7>s2,d9>d5,d3>c3,d9>d3,h1>h6,h9>d9,s12>s7,c2>c8,c7>c2,c4>d4,c7>c4,s11>s12,d11>s11,c9>h9,c7>c9,d13>d11,d8>d13,s13>s4,c1>c11,s3>s13,s6>s3,d1>d2,d1>c1,d1>d8,d1>h1,d1>d7,s5>s6,c5>c6,c5>s5,c5>c7,d10>h10,d10>d1,h5>h4,h5>c5,h11>h5,s9>s8,h7>h11,h2>h7,h8>h2,h12>h8,h12>h13,s10>s9,d12>h12,d12>d6,d12>c12,d10>d12,s10>d10,s10>s1,s10>c10,

h9,d12,s12,d4,s8,s5,h6,d10,d2,h7,c7,c2,d3,d7,h12,s1,h3,c8,d9,h5,d13,d11,h8,d1,s11,s7,h4,c12,h11,h2,s3,c9,s2,c1,c3,d8,c6,s4,s6,c5,c11,s13,c10,s10,d5,h10,h1,c13,d6,h13,s9,c4  
**369/1000: solving: solved in 17905 tries.**  
s12>d12,s5>s8,d10>d4,d2>d10,h7>h6,c7>h7,c2>c7,d3>d2,d7>d3,s1>s5,h3>h12,h5>h3,d13>d9,d11>d13,h8>h5,c8>h8,c8>c2,d11>d7,d1>d11,s1>d1,s1>s12,s7>s11,c12>c8,h11>h4,h2>h11,s2>h2,s2>s7,s3>s2,c1>c9,c1>s1,c12>c1,c3>s3,c3>c12,s6>s4,s13>s6,c10>c11,d5>c5,h10>s10,h1>h10,h13>h1,c13>h13,d6>d5,d6>d8,c6>d6,c4>c10,c13>c6,c4>c3,c13>c4,s13>c13,s9>s13,s9>h9,

d3,d6,c4,d10,h1,c8,c12,h13,d13,s7,h10,h12,c2,s1,c10,s4,d4,c6,d9,s6,h9,h2,d1,c13,s12,h6,s13,s9,h5,s11,h3,c3,c9,h8,d11,s5,c5,d12,c7,h11,d8,d2,s3,h4,c11,h7,s10,d7,d5,s2,c1,s8  
**370/1000: solving: solved in 105709 tries.**  
d6>d3,c8>c4,c12>c8,h13>h1,d13>h13,d13>d10,h12>h10,h12>c12,d4>s4,h2>h9,d1>d9,s12>s6,s9>s13,c3>h3,c9>c3,c9>s9,s5>s11,s5>h5,h8>h6,c5>c9,s5>c5,d12>d11,d8>d12,h4>h11,d2>d8,h7>h4,c11>c7,d7>h7,d5>d7,d5>s5,d2>d5,s10>s3,c1>c11,c1>c13,c1>d1,c1>c6,c1>s1,c1>c2,c10>c1,s12>s7,d2>d4,d2>d13,s10>c10,s10>s12,h2>h12,d2>h2,d2>d6,s2>d2,s10>s2,s8>h8,s8>s10,

h10,c4,s1,d11,d1,s12,h3,c12,s9,c11,s2,d2,c8,d13,c7,d12,c9,h9,c5,s7,c1,d8,s8,h13,c6,h2,d7,h1,d3,h7,c3,s6,h6,h4,d10,d6,s10,h12,d5,s11,s5,h5,h11,s3,c13,d4,c10,s13,s4,d9,c2,h8  
**371/1000: solving: solved in 231885 tries.**  
d1>d11,d1>s1,s9>s12,c11>c12,s2>s9,d2>s2,d2>d1,h3>h10,c8>c11,h9>c9,c5>c7,s8>d8,c6>c1,h2>h13,h7>d7,h7>h2,h7>s7,h7>h9,c6>c5,c3>d3,s6>s8,s6>c6,h1>h7,h4>h6,d6>d10,h12>h4,h12>d12,h1>h12,d6>s6,d6>d13,s5>s11,s3>s5,s3>c3,s10>s3,h5>h1,h11>h5,s13>c13,s4>s13,d4>s4,d9>d5,d9>d6,d4>d9,d4>c4,d2>d4,h11>h3,c10>s10,c2>d2,c8>c2,h8>h11,c8>h8,c10>c8,

s12,s7,s9,s13,s2,s5,c1,c13,h4,c9,h9,h11,s10,h6,d3,d7,h2,c6,d13,c4,c8,h12,d6,h8,c12,d10,h7,c7,d12,c2,d2,h3,s1,s3,h10,s6,h5,d4,s11,s4,s8,c3,d8,c11,d5,h13,d1,d11,h1,c5,c10,d9  
**372/1000: solving: solved in 28259 tries.**  
s7>s12,s9>s7,s13>s9,s2>s13,s5>s2,c13>c1,h9>c9,h9>h4,h11>h9,s10>s5,h6>h11,d7>d3,c6>h6,c6>c13,c8>c4,h12>h2,c12>c8,c7>h7,d2>c2,d2>d12,s3>s1,s3>h3,s11>s6,s4>d4,h1>h13,d1>h1,c5>d5,c5>c3,c5>h5,s8>s4,c11>c5,c11>s11,s8>s3,d8>s8,d8>d2,d8>h8,d8>d6,d10>d13,d11>d1,c10>h10,c10>c7,c10>d10,c10>c6,c10>s10,d9>d8,d9>d7,c12>h12,d11>d9,c11>c12,c11>d11,c11>c10,

s3,c7,d1,d2,d13,s6,h7,c9,s7,c6,h9,h11,d11,d3,d9,s4,h6,s13,s1,h10,c11,h13,h1,s9,d5,d12,h12,d6,h4,c5,s12,c12,c10,c8,d7,s8,c1,s11,d8,c13,c3,s2,h5,d10,d4,s5,s10,h3,c2,c4,h8,h2  
**373/1000: solving: solved in 66900 tries.**  
d2>d1,d13>d2,s6>s3,c9>c7,s7>h7,s7>s6,h9>c9,h11>h9,d11>h11,d13>d11,d9>d3,h6>c6,s13>s4,s13>d13,s13>s7,s1>s13,h1>h13,d12>d5,h12>d12,c12>s12,c12>c5,c12>h12,c12>c11,h4>h1,c8>c10,c1>c8,d8>d7,s8>d8,s8>s9,s11>s8,c13>c1,c3>c13,s2>s11,s5>h5,s5>s2,d4>d6,h8>h3,h2>h8,c2>h2,c2>c3,c4>c2,c4>d4,c4>c12,h4>c4,h4>h6,d10>d9,h10>d10,h10>h4,s10>s5,s10>h10,s10>s1,

d10,c7,h12,d5,d3,h3,s10,s8,h1,s13,d11,h8,h4,d4,c13,h11,s4,s1,h7,c8,d9,s3,h10,s9,h5,s6,s7,s11,c10,d8,d1,c2,c4,d2,c5,s2,s12,c9,h13,d13,c11,h6,c3,h9,d12,h2,c6,d6,c1,d7,c12,s5  
**374/1000: solving: solved in 22442 tries.**  
d5>d10,d3>d5,h3>h12,s8>s10,h8>h1,h8>s8,h8>h3,h4>h8,d4>d11,s4>d4,s4>s13,s4>h4,s1>s4,h7>h11,h7>c7,c8>c13,s3>s1,s7>s6,s11>s7,d1>d8,c4>c2,s12>s2,c11>c9,d6>d12,d6>h6,d6>d13,h9>h13,c6>d6,c1>c6,c3>c1,c12>c3,c12>s12,c12>c4,c11>c12,c11>s11,d2>d1,h2>d2,h2>h5,c10>c11,h9>h2,h9>d9,h10>h9,c10>c8,s5>s9,s5>s3,c5>s5,c10>c5,h10>c10,d7>d3,h7>d7,h10>h7,

s6,s8,s2,s1,c4,c10,s11,c5,d8,c12,d1,d7,c6,h7,s3,s5,c7,h2,d5,h10,h1,d12,d9,c2,s4,d10,s10,h13,c1,s12,s7,h6,h5,h12,d3,d2,d6,d13,h3,c8,h9,s13,c11,d4,h11,c9,h8,h4,s9,c3,d11,c13  
**375/1000: solving: solved in 270 tries.**  
s8>s6,s2>s8,s1>s2,c10>c4,d7>d1,s5>s3,c7>c6,c7>d7,c7>c12,h7>c7,s5>c5,s5>s11,h2>h7,d5>s5,d8>d5,h10>h2,h1>h10,h1>s1,d12>d8,d9>d12,d10>d9,d10>c10,s10>s4,c1>c2,s7>s12,h5>h6,h12>h5,d2>d3,d6>d2,d13>d6,d13>h13,d13>d10,s7>s10,h3>h12,c8>c1,h9>h3,c9>c11,h8>h11,h4>h8,s9>c9,s9>s7,h9>s9,h4>h9,h4>h1,c3>c8,c13>s13,c13>c3,d4>h4,d11>d4,d13>d11,c13>d13,

d9,c1,c6,c10,s7,h1,s13,d12,d4,s4,c4,c13,d7,s8,d2,d13,h3,d6,d10,s1,s2,h6,c7,d11,d8,h9,h5,h13,d5,h2,s12,c3,c5,c12,s3,s9,h12,d1,c8,s5,d3,c11,s6,s11,h11,h10,c2,c9,h8,s10,h4,h7  
**376/1000: solving: solved in 193353 tries.**  
c6>c1,c10>c6,d4>d12,s4>d4,s4>s13,c4>s4,c4>c10,c13>c4,s8>s7,d2>d7,d13>d2,d13>c13,d13>d9,h3>h1,d6>d13,d10>d6,s2>s1,d8>d11,h9>h6,h5>h9,h13>h5,d5>d8,h2>h13,h2>s2,h2>h3,c3>c7,c5>c3,d5>c5,d5>d10,c12>s12,s3>s8,h12>h2,c12>h12,d3>d1,c8>c12,s11>s5,c11>s11,h10>h11,c2>c11,c9>c2,c9>c8,s9>c9,d3>d5,s3>d3,s9>s3,s6>s9,s10>s6,h10>s10,h8>h10,h4>h8,h7>h4,

c11,s4,d9,c5,h5,s1,d10,s5,s12,h8,c2,c12,h1,d11,d3,s8,s9,h9,s10,d13,d4,h11,s2,c9,c4,d5,c8,c10,d12,h4,c1,d2,c6,h6,c13,d6,s6,s3,c3,d8,h12,d7,h10,s11,h2,d1,h7,c7,h3,s7,s13,h13  
**377/1000: solving: solved in 30798 tries.**  
c5>c11,h5>c5,s12>s5,c12>c2,d3>d11,s9>s8,h9>s9,d13>d3,d4>d13,c4>c9,c10>c8,c1>c10,h6>c6,d6>d2,h6>d6,h6>h4,c13>c1,s6>h6,s3>s6,c3>c13,h12>d12,d7>d8,s7>h7,s7>s11,s7>s3,d7>s7,d1>d7,h3>h10,h3>c3,h2>h3,h2>s2,h12>h2,h12>h9,h12>c12,h12>h8,h12>s12,d4>d10,h11>h12,d1>d5,d1>h1,d1>s1,d1>d9,d4>d1,s13>s10,c4>d4,h13>h11,h13>h5,s13>h13,s4>s13,c4>s4,c7>c4,

s1,h9,s3,s12,c13,c4,s8,d6,d2,d3,c3,c10,d10,c1,d11,c9,d4,h11,h13,s6,s13,d5,c8,s5,h5,s2,h2,h6,h7,d7,c5,d8,c7,h8,h1,s4,h12,h4,s9,h10,c12,d1,d12,s10,c2,c11,s7,d13,c6,s11,d9,h3  
**378/1000: solving: solved in 1178171 tries.**  
s12>s3,c4>c13,d2>d6,d3>d2,c3>d3,c10>c3,d10>c10,c1>c4,c1>s1,s8>s12,d11>d10,c9>h9,c9>c1,d4>d11,h13>h11,s6>s8,s13>h13,s5>s13,d5>s5,d5>d4,c8>c9,h5>d5,h2>s2,h2>h5,h6>h2,h6>s6,h7>h6,d7>h7,d8>c8,c7>c5,h8>d8,s9>s4,h4>h1,h10>h4,s7>s10,c6>c2,c11>c6,s11>s7,c11>s11,d13>d1,d9>d13,d9>s9,d12>d9,d12>d7,h12>d12,c11>c7,h10>h8,c12>c11,h3>h10,h12>h3,c12>h12,

d8,c13,d1,d13,s7,d9,s10,d3,h8,h3,h7,d7,s2,h12,c6,h10,d10,s12,c5,c7,h4,d4,s4,h6,h5,s13,s8,d2,c8,s6,c9,c3,c11,h13,h2,d6,d5,s1,s5,c12,d12,h11,s3,h1,c2,h9,c1,s9,s11,d11,c4,c10  
**379/1000: solving: solved in 6696 tries.**  
d13>d1,d13>c13,d13>d8,h3>h8,h3>d3,h7>h3,h7>s7,d7>h7,d7>d13,d9>d7,s2>s10,d10>h10,s12>h12,s12>s2,d10>d9,c5>c6,c7>c5,d4>h4,d4>d10,s4>d4,s12>s4,h5>h6,s13>s12,s8>s13,c8>c7,c8>s8,c3>c9,c11>c3,h2>h13,h2>d2,h2>h5,c11>c8,d6>s6,d5>d6,s5>s1,s5>d5,c12>c11,c1>h1,s9>h9,s9>s3,s11>s9,s11>s5,c4>c1,c10>c4,c2>c10,d11>d12,d11>s11,h11>d11,c2>c12,h2>c2,h11>h2,

s9,d12,s6,c2,d11,c6,d3,d13,c4,d1,h5,h11,c1,d6,s7,d9,c7,h1,h9,h6,d5,c8,s3,d10,h7,c12,h2,s4,h3,h4,c13,c11,d4,s11,s5,s13,s1,s12,h8,d8,s10,c3,d7,h13,c10,d2,h12,s2,s8,c9,h10,c5  
**380/1000: solving: solved in 9418 tries.**  
d11>d12,c6>c2,c6>s6,d13>d3,h11>h5,c1>c4,d1>c1,d1>d13,h11>d11,d6>d1,d6>c6,s7>s9,d9>d6,c7>s7,h9>h1,h9>d9,h9>h11,h6>h9,c8>c7,h4>h3,h4>s4,h4>h2,c11>c13,s5>s11,s13>s5,s1>s13,s12>s1,d8>h8,h12>h13,d2>d7,s2>d2,s8>s2,s8>d8,s8>s12,s10>s8,c3>c11,c9>c10,h10>s10,h10>h4,h10>d10,h10>h6,c3>s3,h12>h7,h12>h10,c12>h12,c3>c8,c12>c3,c9>c12,c5>c9,d5>c5,d4>d5,

s7,d3,d13,c12,d7,d9,d6,d2,d11,s11,d10,s6,s5,c2,c1,h9,h5,s10,h7,d8,h1,d4,s1,s13,h6,s12,s4,c9,d12,h4,c11,h3,d5,h13,h10,c4,h12,c7,c13,h11,c10,h8,s2,s8,c5,h2,c6,c3,s3,s9,d1,c8  
**381/1000: solving: solved in 752495 tries.**  
d13>d3,d7>s7,d13>d7,d6>d9,d2>d6,d11>d2,s11>d11,d10>d13,s6>s11,s5>s6,c1>c2,h5>h9,s10>s5,h7>h5,h1>c1,h7>h1,d4>d8,s1>s10,s13>s1,s4>s12,h4>s4,h4>h6,h4>d4,h4>h7,c9>c12,h3>h4,h10>h13,c4>c11,h12>h10,h2>s2,h2>h11,h2>h12,c7>c4,h8>h2,c13>c7,c13>s13,c13>c9,h8>h3,c6>c10,c3>c6,s3>c3,s9>s3,s8>s9,s8>h8,d1>d12,d1>d10,d5>d1,c5>d5,c13>c5,c8>s8,c8>c13,

c11,c3,d11,d5,c10,c7,h13,s10,s7,d7,s6,d2,s12,s9,s11,h8,h7,h6,d8,d4,h11,c4,h9,d12,c9,c1,s1,s8,c5,s2,c6,s3,d6,c12,d9,c13,s13,d13,h12,h2,h10,c2,s4,d10,c8,d1,h4,s5,h1,d3,h5,h3  
**382/1000: solving: solved in 24410 tries.**  
c3>c11,d5>d11,c7>c10,s7>s10,d7>s7,d7>d5,c7>d7,c7>c3,s9>s12,s11>s9,h7>h8,h6>h7,h6>s6,h6>h13,d4>d8,c9>c4,h9>c9,h9>h11,s1>c1,s8>s1,c12>c6,d9>d6,c13>c12,s13>c13,s13>s2,s3>s13,d13>d9,h2>h12,h10>h2,c8>c2,h4>s4,d10>h10,d10>d13,d3>d1,d3>d10,d3>s3,c8>s8,d3>d12,c5>c8,h4>h9,h4>d4,d3>d2,s5>s11,h4>h6,c5>s5,c5>c7,h5>h1,h5>c5,h4>h5,h3>d3,h3>h4,

d3,c2,h13,c1,s9,c10,d13,h4,d9,s8,d6,h9,s12,d5,c8,d4,s13,h3,c6,h2,c11,d10,d11,d12,s3,s4,h5,s10,d2,s1,s11,s5,d7,c5,s7,s2,s6,h1,d1,h10,d8,h11,c4,h7,c9,h12,c12,c3,c13,h8,c7,h6  
**383/1000: solving: solved in 5014 tries.**  
h9>d9,h9>h4,h9>s9,d11>d10,d11>c11,d12>d11,s4>s3,h5>h2,s10>s4,s11>s1,s5>s11,s7>s5,d7>s7,d7>d2,s2>s10,s6>s2,s6>c6,d7>d12,h1>h5,d1>h1,d7>d1,d8>d7,h11>h10,c12>h12,c12>c9,c3>c12,c13>c3,c7>h7,c7>c4,c13>c7,h6>h11,h6>s6,h6>h3,d8>d4,d8>c8,s13>s12,d8>d5,c13>c5,c13>s13,h6>d6,h8>h6,h8>s8,c13>c10,h8>h9,d8>h8,c13>h13,c13>c2,d8>d3,d13>d8,c13>d13,c1>c13,

h10,s11,c4,d9,s9,s10,c10,s1,h13,h9,c1,c11,c3,h6,h5,s12,h11,c5,s4,s13,c2,d7,h7,h12,d5,s5,h4,s2,d11,d8,d10,s7,d12,c9,d6,s6,d4,h1,d1,c6,d3,d2,c7,s3,h8,c8,c12,c13,h2,d13,s8,h3  
**384/1000: solving: solved in 6347 tries.**  
s9>d9,s10>s9,s10>h10,s11>s10,c10>c4,h9>h13,c1>c10,s1>c1,s1>s11,c3>c11,h5>h6,c5>h5,c5>c3,s12>s1,s13>s4,c2>c5,h7>d7,h12>h7,s5>d5,d8>d11,d10>d8,s6>d6,s6>s7,d1>h1,d1>d4,c7>c6,d2>d1,s3>d3,c8>h8,c12>c7,c12>d12,c9>c12,d2>d10,d2>s2,c13>c9,s8>c8,s8>s6,s8>s5,d13>c13,h2>d2,h2>h12,h2>c2,h2>h9,h11>h2,h3>h4,h3>h11,s8>s12,s3>h3,s3>s8,s13>s3,d13>s13,

h4,d4,s10,d1,s3,d13,h12,h9,s5,c8,s7,s11,d12,h8,d5,h2,d8,c7,h1,c2,d10,c10,s12,c9,h10,c6,h5,d6,h13,h3,d2,d7,h6,s9,s6,s13,c3,c4,s2,s1,d9,c1,c13,c11,h11,d11,s4,s8,c12,d3,c5,h7  
**385/1000: solving: solved in 93954 tries.**  
d4>h4,h9>h12,s5>s3,s11>s7,h8>c8,h8>h9,s11>s5,d5>d12,d8>h8,d8>d13,d5>d8,c2>h2,c7>c2,d10>d5,d10>s10,d10>d4,d1>d10,h1>d1,c10>c7,h10>c10,c6>c9,h5>h10,d6>c6,h13>h5,h3>h13,d2>d6,d7>d2,h6>h3,s6>s9,s6>h6,s6>s11,s13>s6,s1>s2,c1>c4,s1>c1,c11>c13,s8>s4,d3>d11,d3>d9,d3>d7,c3>d3,s8>s1,s8>s13,s12>s8,c11>c3,c12>s12,c5>c12,c11>c5,h11>c11,h11>h1,h7>h11,

c12,d7,d5,h7,d9,h4,c11,d12,h9,h11,s2,c8,c1,h1,c7,h8,s8,d6,d10,c4,c3,s10,s12,h12,d1,d3,h5,c13,h13,d2,s13,s3,h2,c10,s6,d4,d13,s9,c2,s4,h3,h10,c9,s7,s1,s11,d8,c6,c5,h6,d11,s5  
**386/1000: solving: solved in 1769 tries.**  
d5>d7,d12>d9,d12>c12,d5>d12,h4>h7,h11>h9,h11>c11,h11>h4,c1>c8,h1>c1,s8>h8,s8>s2,d10>d6,c3>c4,s12>s10,h12>s12,d1>d10,d3>d1,c3>d3,c3>c7,h5>h12,h13>c13,h13>h5,s3>s13,s3>c3,h2>d2,h2>h13,s6>s3,d13>d4,c2>c10,c2>h2,s9>s6,h10>h3,s7>s4,s1>s7,s1>s9,s1>h1,c9>c2,d8>d13,d8>s8,s11>s1,h6>h10,c6>h6,c6>c9,c5>c6,d11>d8,d11>h11,d11>d5,s11>d11,s5>c5,s5>s11,

d10,d1,d6,d4,d2,c3,d9,d12,c6,d11,s4,s6,c7,c2,s2,d5,c12,s7,h11,s9,h3,s11,s3,h13,h8,h12,s12,h2,c8,s1,s13,c5,c9,h1,c1,h6,h5,c4,h4,c10,d3,s5,s8,d8,c13,c11,d13,h7,d7,h10,h9,s10  
**387/1000: solving: solved in 1021 tries.**  
d1>d10,d6>d1,d4>d6,d2>d4,d12>d9,s6>s4,c7>c6,c2>c7,c2>d2,c3>c2,d11>d12,s2>s6,s7>s2,s11>h11,s11>s7,s11>d11,c12>c3,s3>h3,s3>s9,h8>h13,h12>h8,s12>h12,s12>s3,s12>c12,s11>s12,s13>s1,c9>c5,c1>h1,c1>c9,h5>h6,h4>c4,h4>h5,s8>s5,d8>s8,d8>d3,d13>d8,c13>d13,c13>c1,c13>s13,c13>c8,c11>c13,c11>s11,h4>h2,c10>c11,d7>d5,h7>h4,h7>d7,h10>h7,s10>c10,h10>s10,h9>h10,

h8,d6,c2,d10,h12,s9,s3,s8,s11,h10,h2,h9,d4,c5,c3,d7,h5,s5,d9,s2,c6,d11,d3,d5,d8,h7,d2,c12,d12,c7,s10,h13,c4,d1,s4,s6,h3,h1,c10,h11,s1,d13,c1,s12,h6,c8,c9,s13,s7,c11,h4,c13  
**388/1000: solving: solved in 15422 tries.**  
s3>s9,s8>s3,s11>s8,h10>d10,h10>h8,h12>h10,h9>h2,c3>c5,s5>h5,d11>d9,d3>d11,d3>c3,d3>d4,d7>d3,s5>s11,s2>s5,s2>c2,h9>h12,c6>d6,d5>d7,d8>d5,d2>s2,d8>d2,h7>h9,d12>c12,d12>d8,c7>h7,c6>c7,s6>s4,h1>h3,s1>h1,s1>s6,s1>d1,s1>s10,c1>c10,h6>h11,h6>h13,c1>s1,h6>c6,d13>d12,c8>c1,s7>s12,c9>c8,s13>s7,c11>c9,s13>d13,c4>c11,c13>s13,c4>c13,h4>c4,h4>h6,

d8,d7,c12,s11,s6,c9,s2,h11,h1,s9,c10,c11,c6,d1,c1,s4,s13,h13,s5,d3,d2,h6,c5,s7,d10,c4,c3,h12,d4,h9,s3,d9,c8,d6,s1,h10,s8,c7,h4,s10,d11,d12,h2,d13,h5,c13,h3,h7,c2,s12,h8,d5  
**389/1000: solving: solved in 16904 tries.**  
d7>d8,s6>s11,h1>h11,s9>c9,s9>s6,s2>s9,c10>c12,c11>c10,c6>c11,d1>h1,d1>d7,c1>d1,c6>c1,s4>s2,s13>s4,h13>s13,d2>d3,h6>h13,h6>c6,s7>s5,c3>c4,d4>d10,h9>h12,s10>s8,s10>h10,s10>s1,c7>c8,d13>d11,d13>d6,d12>d13,h2>h4,h3>h2,h7>h3,h7>c7,h7>h9,c2>c13,s12>s10,s12>s3,d12>d9,d12>s12,d12>d4,c2>c3,c2>d2,c5>c2,h7>s7,h7>h6,d5>d12,d5>c5,h5>d5,h5>h7,h8>h5,

h10,d2,c9,c10,d7,d3,d8,s7,d1,c3,s5,s3,s13,h2,s9,c4,d4,h12,h13,h7,h6,c2,h9,d9,h5,h8,s1,d12,d13,c12,s8,h3,c13,h4,s11,c5,c7,d11,c8,d10,h1,c6,s12,s6,s4,s10,d6,c11,c1,d5,s2,h11  
**390/1000: solving: solved in 57955 tries.**  
c10>c9,d3>d7,d8>d3,s5>s7,s3>c3,s13>s3,d4>c4,h12>h2,h13>h12,h13>s13,s9>s5,h6>h7,d9>h9,d9>d4,d9>s9,d9>d8,d1>d9,h6>h13,c2>c10,c2>d2,h6>h10,h5>h6,h8>h5,s1>d1,d13>d12,c12>c2,c13>d13,h4>h3,d11>s11,c7>c5,c8>c7,c8>s8,c8>c13,c8>h8,c12>c8,s6>s12,s6>c6,s4>s6,s10>s4,d5>d6,h11>c11,h11>h1,h11>h4,d11>h11,d5>d11,d10>d5,s10>d10,c1>c12,s1>c1,s10>s1,s2>s10,

s3,c4,s10,d11,h3,c6,c5,h8,s4,d8,s1,c1,d5,c10,d7,d12,d4,s9,d13,d3,d6,s7,s11,c2,h10,c3,h9,s13,h2,c13,h6,d2,c12,s8,h5,s2,s6,h1,s5,h13,d1,h7,c8,h11,h4,s12,c11,d9,d10,h12,c9,c7  
**391/1000: solving: solved in 176336 tries.**  
c5>c6,c1>s1,d12>d7,d4>d12,d3>d13,d6>d3,s11>s7,d2>h2,h5>h6,s2>s8,s6>s2,h1>h5,s5>s6,h13>h1,h13>c13,h13>h9,s13>h13,c12>c3,h4>h7,c11>c8,h11>c11,h11>h4,d9>d1,s12>s5,s12>c12,d10>d2,d10>h10,d10>d6,d10>c10,d10>d5,d4>d10,d4>s4,d8>d4,s13>s11,c2>c1,c2>c5,d8>h8,s12>s13,d9>d8,d9>d11,s9>d9,s9>s10,h11>h3,h12>h11,c7>c2,c7>c4,s12>h12,c9>c7,s9>c9,s9>s3,s12>s9,

c3,c4,s2,d7,d10,h4,h9,d6,c1,s5,h6,s11,h7,c9,h12,c10,d1,c2,s9,s7,d8,s4,d5,h2,h11,h13,s12,c6,h10,s1,s8,s6,d4,c7,h1,s13,c11,c12,s3,d11,h5,h8,c8,h3,d12,c13,c5,d3,d9,d13,d2,s10  
**392/1000: solving: solved in 3399 tries.**  
c4>c3,d10>d7,h4>c4,h9>h4,d6>d10,s5>s2,s7>s9,d8>d1,s4>s7,d5>d8,h11>h2,h13>h11,h10>h13,s8>s1,s6>s8,s6>c6,s6>s12,d4>s4,h1>h10,c12>c11,h8>h5,c8>h8,h3>s3,c8>c12,d12>d11,c13>c8,c13>s13,d3>h3,d12>d3,c5>c7,c13>c5,d13>c13,d2>d13,d2>d4,d2>c2,d12>d2,d12>h12,d9>d5,d9>c9,d12>d9,s10>c10,h1>h7,h1>c1,h1>h9,s11>s5,h6>h1,s10>s11,s6>s10,s6>h6,d6>s6,d12>d6,

h5,c3,h6,c13,c11,d3,s13,h13,h12,d1,c12,d7,d6,d2,s1,s8,h3,h7,s11,d5,c10,c9,s3,s5,d9,c2,s10,d10,h8,h2,c8,d8,c7,h1,c5,s9,h4,h11,s12,c1,d13,c6,d4,s7,h9,h10,s6,d11,s2,s4,c4,d12  
**393/1000: solving: solved in 7089 tries.**  
c11>c13,d3>c3,h13>s13,h12>h13,c12>c11,h12>c12,h12>h6,d7>d1,d6>d7,d2>d6,s8>s1,h3>h12,h3>d3,h3>h5,h7>h3,s11>s8,c9>c10,s3>s11,s5>s3,d5>s5,d5>d2,d9>c9,d9>d5,d10>s10,h2>h8,c8>c2,d8>c8,d8>d9,d10>d8,c7>h7,h1>h2,h4>h1,h11>h4,c1>c5,s12>s9,c6>c1,c6>c7,s7>s12,d4>d13,h9>h11,s6>s7,h10>h9,s2>s6,s4>s2,c4>s4,c4>c6,d4>c4,d11>d4,d12>d11,d10>d12,h10>d10,

d2,h9,h1,d1,c1,s8,s2,c11,d5,c4,s9,s13,c12,s1,h2,d12,d10,d9,s11,d7,h10,d8,c10,s12,s4,h6,d3,c3,s3,d13,h8,c9,d11,h5,c8,h4,d4,h7,c5,h13,s10,s7,h11,c7,s6,c13,h3,h12,c6,s5,c2,d6  
**394/1000: solving: solved in 57479 tries.**  
h1>h9,d1>h1,d1>d2,c1>d1,s2>s8,s13>s9,d12>c12,d12>d5,s1>s13,d9>d10,s11>s1,s11>c11,s11>s2,c4>c1,d7>d9,s4>s12,c3>d3,c3>c10,s3>c3,s4>s3,h6>h10,h8>d8,h8>h6,d13>d7,c8>c9,h4>h5,h4>s4,h4>h8,d11>d13,d11>s11,d12>d11,h4>h2,d4>d12,c8>c4,h4>d4,c5>c8,h7>h4,s7>s10,s6>s7,h3>h11,h12>h3,h12>h7,h13>h12,c13>h13,c2>c7,c6>c13,c2>c5,c6>c2,d6>c6,s6>d6,s5>s6,

c8,c6,c10,h12,s13,d11,s11,d4,s6,c3,d6,d8,h9,s9,c4,c13,c1,h3,s8,s1,d10,s2,s7,s4,h7,h11,h5,d7,c5,h10,c2,h4,c7,d3,d2,c11,h8,s10,s5,d1,c12,d5,d9,c9,d13,s12,h1,s3,h6,h2,d12,h13  
**395/1000: solving: solved in 13270 tries.**  
c6>c8,c10>c6,s11>d11,s11>s13,d6>d4,s6>d6,s6>s11,c3>c10,h9>h12,s9>h9,s6>s9,c4>c3,c13>c4,c1>c13,s8>s6,d8>s8,s1>c1,s7>s2,s4>s7,h7>h3,h11>h7,h5>h11,d2>d3,d2>c2,d2>d7,h4>h10,h4>s4,c7>c5,c11>c7,h8>h4,h8>d8,h5>h8,d2>d10,s5>s10,d1>d2,s5>h5,d5>d1,c9>c11,c12>c9,s12>c12,d13>d9,s3>s12,s3>s1,s5>s3,d5>s5,h6>h1,h2>h6,d12>d5,d13>d12,h13>h2,h13>d13,

d7,h3,s4,d9,s2,h12,c9,s1,c6,d2,s9,h10,d5,c12,d11,c1,c2,d4,d13,c11,d8,s10,s8,d10,c4,h8,c13,c7,c5,d12,h5,s7,h13,s6,h2,c3,h1,h4,h7,c10,s12,h6,d6,d3,c8,s11,h9,s13,s3,s5,d1,h11  
**396/1000: solving: solved in 63614 tries.**  
d9>d7,s2>s4,s1>s2,c6>c9,d5>d2,c2>c1,d13>d4,c11>d11,c11>c12,c2>c11,d8>d13,s10>h10,s10>s9,c2>c6,s8>d8,s8>s10,h8>s8,h8>h12,d10>d5,c13>c4,c7>c13,c5>c7,h4>h1,h7>h2,h7>s7,h7>h5,h13>h7,h6>h4,h6>h13,s6>h6,c3>c5,s12>d12,s6>s12,c10>d10,c10>c2,c3>c10,s6>s1,d6>s6,c8>h8,d3>d6,c3>c8,s3>s13,s3>c3,s5>s3,s11>s5,h11>s11,h9>h11,h9>d9,h3>h9,d3>h3,d1>d3,

c1,s13,s9,h13,c8,s2,d10,h4,h2,c4,h5,d4,s11,c3,d5,h7,h1,d11,c9,d1,d9,h9,c2,d7,h8,h3,h10,s7,c7,c5,d2,c12,d6,s12,d13,c13,s1,c10,s10,s3,s5,s4,d8,h12,s6,h11,d3,s8,c6,c11,d12,h6  
**397/1000: solving: solved in 388 tries.**  
s9>s13,c8>c1,h4>h13,h2>h4,s2>h2,s2>s9,c4>c8,d5>d4,d5>h5,d5>d10,h1>h7,d11>s11,d11>d5,c3>c4,d1>d11,h1>d1,c9>c3,d9>c9,h9>h1,h8>h9,h3>h8,h10>h3,s7>d7,s7>s2,c7>c2,c5>c7,c13>d13,c13>c12,s1>s12,c10>c13,c10>h10,c5>c10,d2>d9,d6>d2,s10>s1,s3>s10,s5>s3,s5>c5,s5>s7,s4>s5,s8>s6,s8>s4,d8>s8,d8>d6,c11>h11,d3>d8,c6>c11,d12>d3,h12>d12,h6>c6,h6>h12,

h3,h8,d7,h4,c8,s10,d1,h12,c9,d11,c1,h7,h11,h2,c10,h5,d6,s6,d10,d2,s12,c6,c11,h1,s5,c5,d9,s8,d13,c7,c2,c13,c3,h6,s11,c4,s1,h13,c12,d5,d12,h9,s7,s2,s3,s9,d4,d8,d3,s13,h10,s4  
**398/1000: solving: solved in 8520 tries.**  
h8>h3,c8>h8,d1>d7,h11>h7,h2>h11,s6>d6,d10>c10,d10>d11,d10>s10,c1>c9,h5>h2,c6>s6,c11>c6,c5>s5,c2>c7,c13>c2,c13>d13,c13>c5,c3>c13,c12>c4,d12>d5,d12>c12,h9>h13,s2>s7,s3>s2,s9>s3,s9>h9,s9>s11,s9>d9,s9>s12,s1>s8,s1>s9,h1>s1,h1>h5,h1>c1,h1>h12,d2>d10,h6>h1,c3>c11,d12>d2,d3>c3,d4>d3,d8>d12,d8>c8,d1>d8,h10>h6,d4>d1,s4>s13,s4>d4,h4>s4,h10>h4,

d1,d6,c3,h10,s5,s11,d7,h11,d12,s9,s3,h8,c9,s2,d2,s1,c5,c4,h4,h5,s12,c7,h7,c12,s8,s4,h2,s6,d5,d13,s10,h9,s13,h12,h3,c8,c2,c1,d4,c11,s7,h6,c6,d9,h13,c13,c10,d10,d11,h1,d3,d8  
**399/1000: solving: solved in 983639 tries.**  
d6>d1,s11>s5,h11>h10,s11>h11,d7>d6,d12>d7,s9>s11,s3>s9,s3>c3,s2>s3,d2>s2,d2>d12,c4>c5,h4>c4,h4>h8,h5>h4,s12>s1,h7>c7,h7>h5,c12>s12,c12>c9,s4>s8,h2>h7,h2>d2,s6>s4,d13>d5,s13>d13,s13>s6,s10>s13,h9>h2,c2>c8,c11>c2,c13>c6,c10>c13,h1>h13,h1>h6,h1>c1,h1>h12,h1>h9,c10>c11,c10>c12,h3>h1,d3>d11,d8>d9,d10>d8,d3>d4,d3>h3,s10>c10,d10>d3,s10>d10,s7>s10,

s3,c2,c1,c6,h9,d3,h3,d9,s4,s1,d6,d8,c9,s11,d4,h7,c12,c7,h5,h2,d10,h4,h12,s8,c8,d11,d13,h10,c11,c13,s10,d5,s9,h1,s13,s5,h8,h13,s2,c10,h6,d2,c5,c3,c4,s6,s7,d1,d12,d7,s12,h11  
**400/1000: solving: solved in 634223 tries.**  
c1>c2,c6>c1,d3>s3,h3>h9,d9>d3,s1>s4,d6>c6,d6>d9,d8>d6,c7>c12,c7>h7,c7>c9,h2>h5,h4>d4,h2>h4,c8>s8,d11>d10,d13>d11,c13>c11,s5>s13,s5>d5,s5>s10,s9>s5,h1>h10,h8>h1,h8>c8,h8>h12,h13>h8,s2>s9,d2>s2,d2>d13,c5>c13,c3>c5,c4>c3,d12>d1,d7>d12,s12>s6,s7>s12,h11>h6,h11>h13,h11>s11,h11>h3,h2>h11,d2>h2,d2>d8,c10>c4,s7>s1,c7>s7,d7>d2,c7>d7,c10>c7,

s9,h1,c5,h9,c6,d6,d10,s11,c3,c1,s1,d8,c8,c4,s8,s5,d11,s7,s10,h3,c2,s13,s3,s6,h13,c10,h11,c11,s4,d2,c13,d9,h6,d13,c9,d3,h7,c7,h5,s12,h2,c12,h8,d7,h4,h12,s2,h10,d4,d5,d1,d12  
**401/1000: solving: solved in 8957 tries.**  
h9>s9,h1>h9,c6>c5,d6>c6,d10>d6,c1>c3,c1>h1,s1>s11,c8>d8,c8>c1,c4>c8,s8>s1,s5>s8,s10>s7,s10>d10,s5>s10,s3>s13,s6>s3,h13>h3,c11>h11,c11>c10,c13>c11,c13>h13,c13>c4,c2>c13,s4>s6,d9>d2,c9>d9,d3>d13,c7>h7,c7>c9,h12>h8,h12>c12,h12>h2,h12>s12,h12>h5,d4>h4,d4>d3,d4>s4,d4>d11,d7>c7,d7>d4,h10>h6,h12>h10,d12>d1,d12>h12,d12>d7,s2>c2,s5>s2,d5>d12,d5>s5,

c5,d5,h7,d13,s10,d2,c8,s7,h10,h13,s3,h9,h4,h8,d3,h1,s1,c10,h12,h2,d9,s11,c2,c12,s13,d10,c4,c1,h5,s5,s2,d4,d8,h6,c7,s4,c13,s8,s12,d6,c11,s9,h11,d12,d1,c6,c3,h3,d11,s6,c9,d7  
**402/1000: solving: solved in 23097 tries.**  
d5>c5,s7>s10,h13>h10,h4>h9,h8>h4,h8>c8,h13>h8,h13>d13,h13>h7,d2>d5,s3>s7,d3>s3,s1>h1,h2>h12,c2>h2,c2>c10,d9>d3,c4>c12,c1>c4,c1>s1,c2>c1,c2>d2,s13>s11,s5>h5,s2>s5,d8>d4,s12>s8,s9>s12,d1>d12,c6>c11,c6>c13,c6>h6,c7>c6,s4>s2,s9>s4,s9>d9,d8>d10,d7>d11,d7>d1,h3>h11,d7>c7,d7>d8,d6>d7,s6>d6,s6>s13,h3>h13,c3>h3,c3>c2,c9>c3,s9>c9,s6>s9,

c8,c3,d7,c12,d2,s10,d6,s6,s8,c1,c13,d5,s4,h3,h10,h13,c2,s1,c5,d11,s13,c10,h1,d9,c4,d13,s7,c9,d12,d3,d10,c11,h7,h2,d1,d4,h5,c6,h8,h12,s12,h6,h4,s11,s5,s2,c7,h9,s9,d8,s3,h11  
**403/1000: solving: solved in 155732 tries.**  
c3>c8,s6>d6,s6>s10,s8>s6,c1>c12,c13>c1,h10>h3,h13>h10,s1>s4,c5>c2,c5>d5,c5>c13,s1>s8,d11>d2,s13>h13,s13>s1,c10>c5,d9>d11,d13>s13,d13>d9,c4>c10,d3>d12,d10>d3,h2>h7,d1>d10,d1>h1,d1>d13,s7>d7,c11>c9,d4>d1,d4>c4,h5>h2,h12>h5,h6>c6,h6>h12,h8>h6,s5>s12,s2>s5,h9>h4,s9>h9,s9>s2,s11>s9,c7>c11,c7>c3,s7>c7,d8>d4,h8>d8,h11>h8,s11>h11,s11>s7,s3>s11,

d4,c8,h10,d9,s7,h11,s13,h12,d7,c1,h8,d2,c3,c6,d8,d3,h13,s3,s5,c7,h5,s10,h7,c9,d11,c4,s11,s8,s2,h6,s4,d12,h9,d10,d6,d5,c2,s9,h1,h3,c5,s1,d13,c10,h2,s6,c12,c13,s12,d1,h4,c11  
**404/1000: solving: solved in 39673 tries.**  
d9>d4,h8>h12,c6>c3,d3>d8,s5>s3,h5>h13,s5>h5,c7>c6,c7>d7,c1>c7,d3>d2,s10>s5,s8>s11,s2>s8,s4>c4,s2>s4,d12>d11,h9>h6,h9>c9,h9>h7,d12>d3,d10>s10,d10>d12,h9>h8,d5>d6,s9>s2,s9>h9,s9>s13,d5>d10,s1>h1,c5>c2,c5>d5,s1>s9,h2>h3,s12>s6,c12>s12,c13>d13,c10>c13,c11>c12,c11>c5,c11>h11,c11>c8,s1>s7,c1>c11,d1>s1,d1>d9,c1>d1,c10>c1,h10>c10,h2>h10,h4>h2,

h12,d5,h11,s6,d4,c12,s3,s10,s2,h2,c11,s11,c4,s5,s12,d1,d2,s4,c5,c13,d13,c7,h4,c8,d7,c10,d11,d6,c1,h7,c6,h8,h6,d10,c9,c3,d8,s7,h13,h3,d9,s9,s1,h1,s8,d12,d3,h5,h10,s13,c2,h9  
**405/1000: solving: solved in 65598 tries.**  
d4>d5,s10>s3,s2>s10,h2>s2,h2>h11,c11>c12,s11>c11,s11>s6,c4>d4,s5>s11,s12>s5,s12>h12,d2>d1,d2>h2,s4>s12,c4>s4,c13>c5,d13>c13,d13>d2,h4>c4,c8>c7,d6>d11,c6>d6,c6>c10,c1>c6,h8>h7,h8>c8,h6>h8,c3>c9,h3>h13,d9>d8,d3>d12,h10>h5,h9>h10,s13>s8,s13>s9,s1>s13,d3>h3,d3>c3,d3>d10,d9>d3,s7>d7,s1>s7,c1>s1,h1>h6,d9>d13,h9>d9,h9>h4,h1>h9,c1>h1,c2>c1,

c1,h3,s12,c8,s1,s6,h6,d13,c4,s3,d9,d8,d6,d12,s5,c7,d2,c6,s7,d3,s11,c2,h10,d10,h2,h11,s2,c5,c9,h12,c11,s9,h1,d1,c12,h4,c10,h7,s10,d11,s13,h5,h13,s4,h9,s8,d7,d5,h8,c3,c13,d4  
**406/1000: solving: solved in 3112 tries.**  
c8>c1,s1>s12,s6>s1,h6>s6,h6>h3,c4>c8,d8>d9,d6>d8,d6>h6,d13>d6,d2>d12,c6>c7,d10>h10,d10>d3,h2>c2,h11>h2,h11>s11,s2>s7,s2>d2,s2>s3,s5>s2,c6>c4,c5>s5,c9>c5,h12>h11,c11>c9,d1>h1,d1>d10,h4>h12,c10>c12,h7>h4,s10>c10,s10>s9,d11>d1,d11>c11,d11>d13,s13>s10,h9>h5,h13>h9,c13>c3,d4>d5,d4>s4,s8>s13,d7>d4,h8>s8,h13>h8,d7>d11,h7>d7,h13>h7,c13>h13,c13>c6,

s11,d8,c8,s5,h5,c6,s1,c2,h1,c12,h4,d12,d7,d10,s9,c4,c10,c5,h3,h12,h2,d6,d5,c11,s12,s6,s13,d13,c9,h10,d9,h13,d3,c13,c7,h8,s4,h7,c1,h11,h9,s3,s7,d2,h6,c3,d1,d4,s8,d11,s10,s2  
**407/1000: solving: solved in 35466 tries.**  
c8>d8,h5>s5,d7>d12,d10>d7,c4>h4,c4>c12,c10>c4,d10>c10,h12>h3,h2>h12,d5>d6,c11>c5,s6>s12,s13>s6,d13>s13,d13>d5,c9>c11,c9>s9,c9>c2,h10>d10,h10>h1,h2>h10,d9>d13,c7>c13,h8>h13,c1>c7,h9>h11,s3>s4,s7>s3,h7>s7,h7>h8,h9>h7,h9>d9,h9>h2,h9>c9,c1>s1,h6>h9,h6>h5,c6>h6,c6>c8,c1>c6,c3>c1,d3>c3,d2>d3,d4>d1,s8>s11,d11>d4,s10>s8,s2>s10,d2>s2,d11>d2,

c1,d11,d6,h10,d13,d5,s2,d7,s7,h13,s8,d9,d8,h4,d12,h8,d3,s11,h9,s1,d4,h11,s6,d1,c4,h3,d10,s3,s12,c12,c9,c3,h6,c13,h7,s5,c11,h5,h2,h12,s10,c10,c2,h1,s9,d2,c6,c7,c5,s4,c8,s13  
**408/1000: solving: solved in 650720 tries.**  
d6>d11,d5>d13,s7>d7,s7>s2,h13>h10,s8>s7,d8>d9,d8>s8,d8>d5,h8>d8,h8>h13,h4>h8,d3>d12,h9>h4,s1>s11,s6>s1,s6>d6,d4>d3,c4>d4,c4>c1,h11>h9,s12>s3,c12>s12,c9>c12,c3>c9,h6>h3,h6>s6,h11>h6,d10>d1,c3>c4,c11>c13,h2>h5,c2>c10,h1>h12,h1>h7,h1>h11,c11>c3,s10>d10,h2>h1,c7>c6,c8>c7,c5>c8,s4>s9,s13>s4,s13>s10,s5>s13,c5>s5,c2>c5,c2>h2,c2>c11,d2>c2,

d9,h7,d2,d12,d8,c1,d5,c3,c11,c4,c8,h2,d4,c13,s8,d6,s4,s9,h6,d10,h4,c7,h12,s1,d1,d13,s10,s11,c10,s7,h10,s2,h3,s13,h9,s12,c9,d11,c6,h5,h13,s3,s5,h8,c5,c12,d7,d3,s6,h1,h11,c2  
**409/1000: solving: solved in 1652725 tries.**  
d12>d2,d8>d12,c11>c3,c4>c11,c8>c4,c8>d8,c1>c8,d5>d9,c13>c1,s4>d4,s8>s4,d10>d6,h4>h6,d1>s1,d13>d1,s7>s10,s7>c7,h10>c10,h10>h12,s11>s7,h3>h10,s2>s11,h9>h3,h9>s9,h4>h9,d13>d10,s13>d13,s2>s8,s5>s3,h8>h5,c12>c5,d3>d7,s6>s5,s6>c6,s6>s12,s6>s2,s13>s6,h8>h4,h13>h8,h13>s13,c9>c13,h13>h7,h11>h1,c2>c12,c2>c9,h2>c2,h2>h13,h11>h2,d11>h11,d11>d5,d3>d11,

h5,d1,c1,c2,s13,c3,d9,d6,h2,h9,h11,h3,s7,d8,s10,c8,h13,d13,s3,c13,d5,s1,s9,h6,h4,s4,c12,c9,s5,s2,s12,h7,h1,c4,d4,d3,c7,c6,h12,s6,h10,d7,c10,d11,c5,d10,c11,s11,h8,d2,s8,d12  
**410/1000: solving: solved in 11725 tries.**  
c1>d1,c2>c1,d6>d9,h9>h2,h11>h9,h3>h11,d8>d6,s10>s7,c8>d8,c8>c3,s10>s13,h13>h3,d13>h13,s3>s10,c13>d13,c13>c8,s1>s3,s9>s1,h4>h6,s4>h4,s4>s9,c9>c12,s2>s5,s12>s2,h1>h7,c4>c9,c4>s4,c4>c2,c13>c4,d4>d5,d3>d4,c6>c7,h12>s12,h12>h5,c6>c13,s6>c6,h1>h12,h10>h1,d7>d3,d10>c10,d10>d7,c11>c5,s11>c11,s11>s6,d2>d10,d11>d2,h8>h10,s8>h8,s11>s8,d11>s11,d12>d11,

d1,c3,s10,h13,c2,d9,c9,s4,c6,c4,h7,c10,c11,d2,s11,s2,h11,d13,h12,d10,c7,d11,s5,h5,c13,s13,h10,h2,d7,s1,s7,s6,c5,s8,h6,s12,h9,c12,c1,d6,c8,s3,d5,h1,h4,d4,s9,d12,d3,h8,h3,d8  
**411/1000: solving: solved in 1486 tries.**  
c2>c3,c9>d9,c9>c2,c4>c6,c4>s4,c4>c9,h7>h13,c10>c4,s10>c10,s2>s11,s2>d2,s2>s10,h11>c11,h11>h7,d13>d1,h12>h11,d10>d13,h5>s5,h5>h12,s13>c13,h2>h10,d7>d11,d7>c7,d7>d10,h2>s2,h5>h2,s1>s13,s7>s1,s6>s7,h6>s6,h6>h5,s12>s8,h9>h6,c12>s12,c12>c5,c1>c12,d6>d7,c8>c1,h4>h1,d3>d4,d8>d12,h8>d8,h8>h4,h8>c8,h8>h9,d5>d6,d3>d5,h3>h8,h3>d3,s3>h3,s9>s3,

c8,s4,c9,s11,d5,d7,h12,d3,s3,h10,h11,d12,d1,s7,d4,h9,d13,d11,c11,d10,c5,d9,s8,s6,c6,h4,s10,h2,s13,s1,h3,s12,h1,c4,s9,c1,h13,h5,c10,c7,c3,d6,s2,c13,c2,c12,h6,s5,h7,d2,d8,h8  
**412/1000: solving: solved in 15176 tries.**  
d7>d5,s3>d3,s3>s11,h10>h12,h11>h10,d1>d12,s7>d7,s7>s3,d4>d1,d11>d13,d11>h11,d4>d11,d4>s4,c11>c9,d9>h9,d9>d4,d10>d9,s6>s8,c6>s6,c6>c5,s10>s7,h2>h4,s13>s10,s1>s13,h3>h2,s12>s1,h1>h3,c1>h1,c1>c6,c4>c1,h5>h13,c10>c4,c10>d10,c10>c8,c11>c10,c13>c3,c2>c13,h6>d6,c12>c2,h7>h6,h7>h5,c7>h7,c7>c11,c12>c7,s12>c12,s5>s12,s9>s5,s2>s9,d2>s2,d8>d2,h8>d8,

c7,c4,d5,c12,h2,s9,c9,s13,h10,c8,c6,c1,c13,d3,h3,d7,s11,d10,h8,s7,d6,s3,c10,h12,d2,h4,d4,d12,h5,h13,c5,s12,s6,s5,d9,d8,c2,d1,d11,s4,s1,s10,h9,d13,s2,c11,c3,h6,h7,h1,h11,s8  
**413/1000: solving: solved in 330892 tries.**  
c4>c7,c9>s9,h10>h2,c6>c8,c1>c6,c13>c1,c13>s13,c13>c9,h3>d3,s7>s11,s7>d7,h8>h3,d6>d10,d4>h4,d4>d2,d12>d4,d12>h12,d12>d6,h13>h5,s6>s12,s5>s6,s5>c5,s5>s3,d8>d9,c2>c10,s1>d1,s10>s4,d13>d11,d13>h13,d13>d12,d13>c13,d13>d5,s5>s7,d8>h8,d8>d13,s2>s1,s10>s5,c2>c12,h6>h9,h7>h6,h1>h7,h11>h1,h11>h10,c11>h11,s8>s10,s8>d8,s2>s8,c2>s2,c2>c4,c11>c2,c3>c11,

s12,s3,s11,d10,h12,h10,d2,c5,c6,s1,s7,h3,d7,s2,d4,c2,h2,d9,d8,s5,h5,c8,d5,d6,h4,d11,c3,d13,s10,c1,s4,s6,s13,d1,c11,c9,d12,d3,h9,h7,h6,c10,s8,c12,h11,h13,h1,h8,s9,c13,c4,c7  
**414/1000: solving: solved in 248883 tries.**  
s3>s12,s11>s3,h10>h12,h10>d10,c6>c5,s7>s1,s2>s7,d4>d7,c2>s2,c2>c6,c2>d2,h2>c2,h2>h10,h3>h2,d9>d4,d8>d9,s5>s11,h5>s5,h3>h5,c8>d8,d6>d5,h4>h3,d11>d6,c1>c3,s4>s10,s6>s4,s13>s6,s13>d13,c11>c1,c11>d11,c11>c8,d3>d1,c9>c11,d12>d3,h9>c9,h9>h4,h13>h11,h8>h1,h8>s8,h8>h7,h6>h8,h13>h6,c13>c10,c12>d12,c13>h13,c13>c12,s9>h9,s13>s9,c13>s13,c4>c13,c7>c4,

h13,s2,s13,s11,h1,c2,h2,s7,d10,d7,c13,h11,c11,c6,d4,h10,d3,c5,h4,d13,h12,s3,d5,c8,s10,h7,c3,s6,d11,h3,h8,c10,d12,c9,c7,h6,s5,s8,s4,c4,d6,d2,h9,s12,d9,h5,c1,c12,s9,d8,s1,d1  
**415/1000: solving: solved in 4398 tries.**  
s13>s2,s13>h13,s11>s13,h2>c2,h2>h1,d7>d10,d7>s7,h11>h2,h11>s11,c11>c13,c6>c11,h4>h10,h4>d4,h4>h11,d5>d13,d5>c5,d5>d3,c3>c8,c3>s3,c3>c6,h3>h7,h8>h3,c7>c9,s8>s5,s4>s8,c4>s4,d2>d6,d9>d2,c12>s12,c12>c4,c12>d12,c12>c10,c7>c12,h6>s6,h9>d9,h9>h6,h9>h12,h5>h8,h5>d5,h5>h4,h9>h5,d11>d7,s9>s10,s9>h9,c7>c3,c1>c7,d1>c1,d1>d11,s1>s9,d1>s1,d8>d1,

s5,h7,h2,d1,c2,s8,c6,d8,c12,s2,s13,h10,s10,d13,c13,h11,s1,c9,s4,s12,h3,h8,s6,h6,s7,s9,d7,h9,c7,d2,d6,d10,c11,s11,d12,d3,d9,s3,h1,h12,c5,c3,h13,c10,d5,d11,c4,c1,c8,h4,d4,h5  
**416/1000: solving: solved in 1135 tries.**  
h2>h7,s13>s2,s10>h10,s10>s13,d13>d8,c13>d13,c13>c6,c12>c13,s12>s4,h8>h3,h6>s6,h6>h8,s9>s7,s9>c9,s9>s1,s12>s9,s12>c12,s12>s8,s10>s12,h6>h11,d2>d7,d2>c2,d2>d1,d2>h2,h9>h6,d10>d6,d10>s10,d10>d2,c11>c7,s11>c11,s11>s5,d3>d12,d9>d3,d9>h9,d9>d10,h12>h1,c3>s3,d5>c5,d5>d9,c1>c10,c8>c1,c8>c3,h13>h12,c4>c8,d11>d5,d11>s11,h4>h13,d4>d11,c4>d4,h4>c4,h5>h4,

d13,c5,d10,c1,d11,s10,d9,s1,d1,h2,d5,s11,c2,s12,c10,h10,h12,s6,c9,d8,h3,s3,c12,h11,d12,c13,c6,c7,c3,d7,d2,h6,h8,c4,h4,h13,s8,h9,s13,h1,c8,h7,d6,s9,s4,s2,c11,h5,d4,d3,s7,s5  
**417/1000: solving: solved in 178330 tries.**  
s10>d10,d9>d11,s1>s10,c1>s1,c1>c5,d1>d9,d1>c1,d1>d13,c2>h2,s12>s11,c10>c2,h10>c10,h12>s12,s3>h3,s3>s6,d12>d8,d12>h12,d12>d5,c12>c9,c6>c13,c7>c6,c3>c7,c3>s3,c12>c3,c12>d12,d2>d7,h8>h6,h4>c4,h9>h4,c8>s8,c8>h8,h1>h9,h7>h1,h13>h7,s13>h13,d6>d2,s2>s13,s9>s2,c11>c8,c11>c12,h11>c11,s4>s9,h5>h11,d3>d6,d3>d1,h5>h10,d4>d3,s5>h5,s4>s5,s4>d4,s7>s4,

c7,d12,d3,h6,s7,s8,c1,h2,d2,c6,d8,h1,s12,h12,s4,c3,s3,d7,s5,s10,h8,h7,d11,d5,s6,h11,s13,d10,c5,d4,c12,d9,c9,d6,c13,s11,s2,s1,c10,d13,c8,h9,h10,c11,c2,c4,h4,h13,s9,h3,h5,d1  
**418/1000: solving: solved in 8417 tries.**  
d3>d12,s7>c7,s8>s7,d2>h2,d2>d3,c6>c1,c6>h6,d8>s8,d2>d8,h12>s12,h12>h1,c3>c6,s3>s4,s10>s5,h7>h8,d11>d7,d5>d11,c9>d9,c9>c12,s2>s11,s1>s2,d13>c13,d13>d6,c10>c9,c10>d10,c5>c10,d13>d4,s1>s13,c11>c8,c2>c11,c4>c2,h4>c4,h9>h4,h13>d13,h13>h11,h9>h13,h10>h9,h10>s10,h10>h12,s9>s6,s9>s3,h3>h7,s1>s9,h3>h10,h3>c3,h5>c5,d1>s1,h5>h3,d5>d1,d5>h5,d5>d2,

h9,d5,h10,s9,h2,c3,s10,d10,d8,s8,d3,s1,c8,s2,s5,s4,h4,d1,d2,d9,c10,c1,c6,d11,c5,h6,s3,c2,s12,s7,c7,d6,h3,c11,d12,h1,s13,s11,d4,c12,h11,h12,s6,h8,d13,c4,d7,h13,c13,h5,h7,c9  
**419/1000: solving: solved in 135945 tries.**  
s9>h9,h2>h10,d10>s10,d10>d5,d8>d10,s8>d8,s8>s9,d3>c3,s1>s8,s2>h2,s2>s1,s5>s2,s4>s5,h4>s4,d2>d1,d9>d2,c1>c10,c6>c1,h6>c6,s7>s12,c7>s7,c7>c2,h3>s3,h3>h6,h3>d3,h3>h4,d11>d9,c7>c5,c11>d11,c11>c8,c7>c11,d12>d6,h1>h3,h11>s11,h12>h11,h7>h5,h7>d7,h7>h8,c9>c4,h13>h7,d13>h13,d13>d4,d13>d12,s13>d13,h12>h1,c12>h12,c7>c12,c9>c7,c13>c9,s13>c13,s6>s13,

h6,d2,c11,d3,d13,d6,s1,s12,s7,c12,h8,d11,d1,s8,s10,d12,c6,d9,h5,c1,h10,c13,d5,s5,h4,h12,c7,c8,s2,d7,d8,s13,c3,s4,c9,c2,h3,h2,c10,h13,d4,s9,h11,d10,h9,c4,h7,c5,s11,h1,s6,s3  
**420/1000: solving: solved in 184083 tries.**  
d13>d3,d6>d13,d6>h6,d2>d6,s12>s1,s7>s12,d1>d11,s10>s8,c1>c6,c1>d1,d9>d12,h10>h5,d5>d9,s5>d5,s5>s10,h10>h8,h12>h4,c8>c7,d8>d7,c2>c9,h3>c3,h2>h3,h2>s2,s4>s13,c2>h2,c2>c8,c10>c2,h9>s9,h11>h13,d4>d8,s4>d4,h11>h12,h7>h9,c4>s4,c5>c4,c5>c13,c5>s5,c5>c12,h1>h7,h1>c1,h11>h1,c10>c5,d10>c10,d10>d2,h10>d10,h11>h10,c11>h11,s11>s7,s11>c11,s6>s11,s3>s6,

s1,d1,s11,c2,h9,s5,c6,h13,d12,s2,s13,s10,d8,s9,c13,c3,d4,h1,c1,s6,h5,d2,d5,h10,h12,d3,c8,d10,h11,s7,s12,c4,d6,c12,c11,d11,d9,s8,h8,h2,c5,h7,d13,h4,s3,s4,h3,c9,c10,h6,c7,d7  
**421/1000: solving: solved in 8627 tries.**  
d1>s1,s5>s11,s13>s2,s10>s13,c3>c13,d4>d8,c1>h1,c1>c3,d5>d2,d5>h5,h12>h10,s12>s7,c12>s12,c12>c8,c4>c12,d11>c11,d11>d6,d11>h11,d11>d10,d9>d11,h8>s8,h2>h8,c5>c4,c5>d5,d9>d3,h4>h2,h7>h12,s4>h4,h3>s3,h6>h3,c7>c10,d7>c7,d7>d13,d7>h7,d9>d7,s4>s6,s4>d4,s4>s10,s9>s4,c5>c1,d9>d12,d9>h9,d9>d1,c6>c2,h6>h13,s9>s5,s9>d9,c9>c5,c9>s9,c6>c9,h6>c6,

h1,d12,c1,d1,c8,s4,s13,h6,c2,c5,d7,d10,c9,c11,h7,d13,s10,d8,s12,h2,s6,c3,h5,c6,s7,d2,d4,s3,c12,s8,d5,h4,h13,c4,h9,d6,d3,h3,c7,c10,c13,s11,h10,h11,d11,s5,s2,h8,d9,s9,s1,h12  
**422/1000: solving: solved in 1514930 tries.**  
d1>c1,d1>d12,d1>h1,s13>s4,c2>c8,c5>c2,d10>d7,c11>c9,h7>h6,s10>d10,d8>d13,s12>s10,h5>h2,c6>c3,c6>s6,c6>c11,d2>d8,d4>d2,s3>s7,h13>h4,d3>d6,h3>d3,h3>h9,c10>c7,c13>c10,c13>h13,c13>c12,c4>c13,s11>s8,h10>h3,h11>h10,s5>d5,s5>s3,s5>h5,c4>c6,d4>c4,h11>s11,d9>d11,h8>h11,d9>d4,s9>s2,s9>d9,s9>s13,h8>h7,s5>s9,s5>c5,h12>h8,s12>h12,s12>s5,s1>s12,s1>d1,

h1,s3,h9,h13,c6,s12,s13,s11,c13,h7,h4,h3,c12,c8,h8,c1,c2,c10,h6,c5,s9,d8,s1,h2,d3,s8,d10,c3,h12,s7,h10,s4,d13,d1,s2,h11,c7,c11,d11,s6,c4,h5,c9,d2,d5,d12,d9,d6,s10,s5,d7,d4  
**423/1000: solving: solved in 108217 tries.**  
h13>h9,s12>s3,s13>s12,h13>s13,h13>h1,c13>h13,c6>c13,h4>h7,h3>h4,c12>c6,c8>c12,h8>h3,c1>c8,c2>c1,c10>c2,h6>h8,c5>c10,d3>d8,d1>d13,c11>c7,c11>h11,d11>c11,d5>h5,d5>d11,c9>c4,d2>d5,d2>s2,s6>s4,d2>d1,d9>d12,d7>d6,d7>d2,d7>s7,d7>d10,h10>h12,c9>c3,d9>c9,d9>d7,h10>h2,s10>s8,s10>h10,d9>d3,s10>s1,s6>s10,s6>h6,s6>s11,s9>s6,s5>c5,s9>s5,d9>s9,d4>d9,

c4,d2,s7,d5,s9,c5,h5,h6,c13,s11,s13,d10,s10,h12,c8,d6,c2,h1,d8,s4,d3,c3,s3,h7,h4,c1,c9,c12,d1,d12,h10,d11,d4,h13,h2,d7,s8,d13,c6,s5,c7,h8,s6,s12,c11,h3,h11,h9,d9,c10,s1,s2  
**424/1000: solving: solved in 596057 tries.**  
h5>c5,h6>h5,s11>s9,s13>c13,s10>d10,s10>s13,d8>d6,d8>c8,h1>h12,d3>d8,c3>d3,c2>c3,s4>s10,s3>s4,h4>h7,c1>h1,c2>c1,h4>h6,c9>c2,c12>c9,d12>d1,d12>c12,h10>h4,d11>d12,d11>s11,d11>d5,s3>s7,h2>h10,h2>d2,d4>d11,d13>h13,d13>d4,s8>s3,s6>s5,s6>c6,s12>s6,s12>s8,h11>h3,h9>h8,d9>h9,d9>d13,d7>d9,c7>d7,c10>c7,c10>c4,c11>c10,h11>c11,h2>h11,s1>s12,s2>s1,s2>h2,

d1,c12,d10,d4,h10,s6,s8,s11,d9,c4,h5,d11,d12,c1,c3,d13,h4,c5,h12,c13,d3,c2,h9,d6,h6,s1,c10,s2,s9,h1,h13,c7,c11,d2,s3,s4,d7,h8,d5,s12,h3,c9,c8,s10,s5,d8,s13,c6,h11,h2,s7,h7  
**425/1000: solving: solved in 26649 tries.**  
d4>d10,s8>s6,s11>s8,d9>d4,h5>h10,d12>d11,c3>c1,c5>c3,h12>h4,h12>d12,h12>h5,c5>c4,c13>d13,c13>c5,d6>d3,h6>h9,c10>c2,s2>s1,s9>s2,h13>h1,c11>c7,s4>s3,h3>h8,c8>c9,s5>s10,s5>d5,s5>s4,d8>c8,d8>d7,s12>s5,s13>s12,h2>h3,h2>d2,s13>h13,s13>s9,c11>c10,h11>h2,h11>c11,h11>s11,h11>h12,d6>d9,s7>s13,h7>s7,h7>h11,c6>c13,c6>c12,d6>c6,h6>h7,d8>d1,d6>d8,h6>d6,

d3,s12,s4,d4,d12,h2,h9,d9,c12,c6,s8,d7,h8,c4,d11,s9,c9,c11,h6,h13,h1,d2,s13,s3,c8,h10,c3,h5,s7,d1,s1,d10,h7,d8,h11,h3,s10,c7,c2,d5,h4,c10,c1,d13,s5,h12,d6,c5,s6,s11,c13,s2  
**426/1000: solving: solved in 303883 tries.**  
s4>s12,d4>s4,d4>d3,d12>d4,h9>h2,d9>h9,d9>d12,c6>c12,d7>d9,h8>s8,c9>s9,c11>c9,c11>d11,c11>c4,h6>c6,h8>h6,h1>h13,s3>s13,c3>s3,c3>c11,c8>c3,c8>h8,d2>d7,h10>h1,h5>h10,s1>d1,s1>s7,h7>h5,d8>d10,d8>c8,c2>c7,c10>c2,d13>d5,h12>h4,c13>c5,c13>c1,c13>c10,d13>c13,d6>d13,h12>h3,s10>s1,h12>h7,s2>s5,s2>s10,s2>d2,d6>d8,s6>d6,s6>s2,h11>h12,s11>h11,s11>s6,

h3,s12,h6,s1,c7,h4,d8,c1,h10,s4,s6,c6,d11,d7,d3,s10,c12,h7,h9,c4,c9,d4,h1,c11,c8,h12,s5,s8,s11,h8,d13,d12,c5,s2,d10,c3,h13,c2,s9,h2,d5,h11,d6,s3,d9,h5,d1,c10,s13,c13,d2,s7  
**427/1000: solving: solved in 79697 tries.**  
h4>h6,c1>s1,c7>c1,h10>h4,s6>s4,c6>s6,d7>d11,d7>c7,d8>d7,c12>c6,c12>s12,d3>d8,d3>h3,s10>h10,h9>h7,c4>c12,c9>h9,d4>c4,d4>d3,c8>c11,s8>s5,s11>s8,h8>c8,h8>h1,h12>h8,s11>s10,d12>d13,d12>h12,d12>d4,s2>s11,c3>c9,h2>h13,c2>h2,d5>d10,c2>c3,s3>s9,h5>h11,h5>c5,d5>h5,d5>d12,d9>d6,d1>d9,s13>s3,c10>c2,c13>c10,s13>c13,d1>d5,d2>d1,s2>d2,s13>s2,s7>s13,

h11,c6,h6,h10,h2,d1,s2,h9,s8,d12,c1,s12,s6,h5,d3,s4,c10,c7,h13,h1,h8,h12,c9,d4,h4,h3,d6,d8,d13,d11,d7,c2,c13,s3,s7,s13,h7,s5,d9,d5,c11,s9,c4,s11,d2,c5,d10,c8,c3,s1,c12,s10  
**428/1000: solving: solved in 96486 tries.**  
h6>c6,h6>h11,h10>h6,h2>h10,h9>h2,s8>s2,c1>d1,s12>d12,s12>s8,s6>s12,h5>h9,c7>c10,h1>h13,h8>h1,h12>h8,h4>d4,h3>h4,d8>d6,d13>d8,d11>d13,d7>d11,c2>c9,c13>c2,s7>s3,s7>d7,s13>c13,s13>s4,h3>h12,h3>d3,h3>h5,s13>s6,s7>c7,s7>s13,h7>h3,d5>d9,d5>s5,c5>c4,d10>d2,c12>c8,c3>c12,s10>d10,s10>s9,c5>d5,s11>s10,c3>c5,c11>c3,s11>c11,s1>c1,s7>s1,s7>h7,s11>s7,

h12,s1,d2,h13,h4,d1,h7,s13,c11,d11,c4,d13,c13,d5,c8,h2,c3,d10,h5,h1,s10,h8,d9,d12,c2,d4,c10,s2,d3,s8,d7,s3,c7,c9,c6,s6,d6,h10,s12,h9,s11,s5,s4,c5,d8,h3,c1,c12,h6,s7,h11,s9  
**429/1000: solving: solved in 199041 tries.**  
h13>h12,h4>h13,d1>d2,d1>s1,d11>c11,d11>d1,c13>d13,c13>c4,c13>s13,d5>d11,c8>c13,h5>h2,h5>d5,h5>h4,h7>h5,c3>c8,h1>h7,s10>d10,h8>h1,d12>d9,c2>c3,d4>d12,c10>c2,s10>c10,s3>d3,s3>s2,s8>s3,s8>h8,s10>s8,s6>c6,d6>s6,d6>d7,s5>s11,s4>s5,c1>c5,c12>c1,c12>s12,c12>c7,c9>c12,h11>h3,h6>h11,s7>s4,s9>s7,s9>c9,s9>s10,h9>h10,h9>s9,d6>d4,h6>h9,d6>h6,d8>d6,

s12,d6,d12,h4,h7,d9,s7,c3,c4,s2,s13,d11,h10,s1,h12,d8,h13,d2,s10,c7,c1,h11,d13,h1,h2,h6,c11,s9,c13,d5,h3,c10,c9,s11,d1,h9,d7,h5,h8,s5,d10,c6,d3,d4,s6,c8,s4,c12,s8,s3,c2,c5  
**430/1000: solving: solved in 18696 tries.**  
d12>d6,d12>s12,h7>h4,c4>c3,s13>s2,s1>s13,h12>h10,c1>c7,h1>c1,h1>h13,h11>h1,h11>d11,h12>h11,d2>d8,s10>s1,d13>d2,h6>h2,c10>c13,c9>c10,c9>s9,c9>c11,d5>d13,h9>h3,h9>c9,h9>h6,d1>d5,d7>d1,h8>h5,s6>c6,s8>c8,s8>s6,d4>d10,s8>h8,s8>s11,s5>s8,d4>d7,s3>d3,s4>s3,s4>d4,s4>c4,s4>s7,s10>s4,s5>s10,h9>d9,c5>c2,c5>s5,h12>h7,c12>c5,c12>d12,h12>c12,h9>h12,

s6,s12,h9,d2,h1,c9,s8,s2,h8,h11,c13,s4,d7,s1,d8,d3,s11,h7,h4,d1,c7,d5,d12,h10,h2,s10,d4,d9,d13,c5,s9,h3,c11,s13,c10,c1,h12,c2,c8,c4,h6,c6,d6,c3,c12,s5,d11,h13,s7,h5,d10,s3  
**431/1000: solving: solved in 36364 tries.**  
s12>s6,c9>h9,s2>s8,h11>h8,s4>s2,d3>d8,h4>h7,d1>d3,d1>s1,d1>d7,s11>h11,s11>s4,d1>h1,d1>d2,s11>s12,d12>d5,h10>h4,h2>h10,d9>d4,d13>d9,s9>s10,c1>c10,c8>c2,c4>c8,c6>h6,c6>c4,d6>c6,c3>c1,c3>h3,c3>c5,c11>c3,s13>s9,d13>s13,c12>c11,c12>c7,d12>c12,d6>d12,h13>h12,h13>h2,d10>d11,d10>d6,d10>d1,d13>d10,c13>d13,c13>c9,h13>c13,h5>h13,s5>h5,s5>s11,s7>s5,s3>s7,

d9,s4,s3,h1,s13,s2,h2,c13,c2,d7,s1,s5,c4,h9,c5,h3,c3,h4,h13,h7,c11,d13,c9,d10,c8,h11,s9,c6,s6,h10,d2,d4,d12,d1,c10,c12,s10,d8,d6,d5,d11,s12,h8,d3,s11,s7,c7,c1,h6,s8,h5,h12  
**432/1000: solving: solved in 111902 tries.**  
s3>s4,s2>s13,h2>s2,h2>h1,c2>c13,c2>h2,d7>d9,s5>s1,c5>s5,c5>c2,c4>c5,h3>h9,c3>h3,c3>c4,c3>s3,h13>h4,h7>h13,c6>c8,s6>s9,d4>d2,d12>d4,d1>d12,c12>c10,s10>h10,s10>s6,s10>d10,c12>c6,d8>d1,d6>d8,d11>h11,s11>s12,s11>d11,d3>d6,d5>d3,s7>s11,c7>s7,c7>c9,c7>h7,c7>c3,d5>d13,d5>d7,c12>c7,c1>c11,s8>s10,h8>s8,h6>h8,h5>h6,h5>d5,h12>h5,c12>h12,c1>c12,

d12,s6,d1,c2,h5,s1,d11,c8,h11,h7,s4,s7,h9,h12,s5,c3,h6,c13,h13,s13,s3,d13,s12,c12,d5,c1,h2,s9,c6,c5,d9,d3,s11,c9,s8,d10,d6,c11,h3,h8,d7,s10,h1,s2,c10,d2,h10,d8,h4,d4,c4,c7  
**433/1000: solving: solved in 138 tries.**  
s1>d1,s1>s6,c8>c2,h11>d11,h11>h5,h7>h11,s4>s1,s7>h7,h12>h9,h6>h12,c13>c3,h13>c13,s13>h13,s13>s5,s3>s13,c12>s12,c6>c1,c5>c6,c5>d5,c5>c12,d9>s9,d9>d13,d3>d9,d3>s3,h2>h6,d6>d10,c11>c9,c11>s11,c11>c5,d6>d3,h8>h3,h8>s8,h8>h2,c10>s10,d2>s2,d2>d7,h10>h1,d8>d2,d8>h8,d6>d8,c11>c8,c10>c11,h10>c10,h4>h10,h4>s4,d6>d12,c4>h4,d4>d6,c4>d4,c7>s7,c7>c4,

h6,c9,s7,c13,h11,d1,c2,s6,s8,h7,d8,d5,c5,h8,s2,c1,h5,c7,d13,s4,c11,c6,d10,s13,d9,s9,s10,s3,s1,c4,c8,c12,d11,h3,d12,d3,h9,h10,d6,s5,c10,s11,d4,d2,h1,h4,h13,h12,c3,h2,d7,s12  
**434/1000: solving: solved in 199022 tries.**  
c2>c13,s8>s6,h7>h11,d8>s8,d8>d1,d5>d8,c5>d5,c1>c5,c11>c7,c6>c11,s13>d13,s13>s2,s4>s13,d9>d10,s9>d9,s9>s4,s10>s9,s3>s10,s1>s3,c4>c6,c8>c4,c8>h8,c8>c1,h5>h7,d12>c12,c10>h10,s11>s5,h4>d4,h13>h1,h2>h13,h12>h4,d7>d2,d7>d6,d7>d3,d7>d12,d11>d7,h9>h3,s11>d11,s11>s1,c3>c10,c3>c8,h9>h5,h9>c9,h9>h6,s12>s11,s12>s7,h12>s12,h12>h9,h2>h12,c2>h2,c3>c2,

h5,c10,h9,s1,c12,h10,c7,c4,d2,s5,c3,h13,s6,c8,c1,d13,h12,s10,s11,h1,s4,c11,h3,s9,s7,h6,d11,d6,h8,d3,s2,c2,d12,s12,d1,d8,h7,d5,c5,h11,c6,h4,d4,h2,d10,c9,s3,s8,d9,d7,c13,s13  
**435/1000: solving: solved in 5927 tries.**  
c12>c10,c4>c7,c3>c4,c1>c8,d13>h13,s10>s6,s11>s10,h1>h12,h1>c1,c11>s11,s7>s9,d6>d11,d6>h6,h8>h3,d3>d6,c2>s2,s12>d12,s12>s7,d8>d1,c5>d5,c5>c2,h11>h7,c6>c5,h4>h11,d4>h4,d4>d3,d4>s4,d4>d13,d8>h8,d8>d4,h2>h1,c6>c11,s3>s12,s8>s3,s8>d8,s8>s5,d7>d10,c9>c6,c9>c3,c9>h9,c9>c12,h2>h10,h2>h5,d2>h2,s8>s1,d7>d2,s13>s8,d9>d7,c9>d9,c13>s13,c13>c9,

c9,d6,d11,c13,h8,s2,h9,h3,c3,s6,d12,s9,s8,s10,h13,d2,c11,d7,h11,s12,d13,c1,d1,d10,c10,s1,c7,d3,d5,d9,h7,d8,s5,c8,h1,c5,h12,h10,s7,c2,h2,c6,h6,s11,h5,h4,c4,s3,d4,s13,c12,s4  
**436/1000: solving: solved in 1204 tries.**  
d11>d6,h3>h9,c3>h3,c3>c13,s6>s2,s8>s9,s8>h8,s6>s8,d12>d11,s10>s6,d13>d7,d13>h13,d13>d12,d2>d13,h11>c11,d1>c1,d10>d1,d10>s10,c10>d10,c10>c3,s1>s12,c7>c10,d5>d3,d9>d5,h7>h11,h7>c7,d9>d2,d9>c9,d8>d9,s5>s1,c8>d8,h10>h12,c2>c5,h2>c2,h2>h1,h10>h2,s7>h7,s5>s7,c6>c8,h6>h10,h4>h6,s3>s11,h5>s5,h4>h5,s13>s3,d4>h4,s4>s13,s4>d4,c4>s4,c4>c6,c12>c4,

s1,s4,d8,d2,h6,s12,h2,c7,c9,h12,c2,s2,s9,d3,d13,h10,h1,h11,d6,c10,c13,c4,s3,d12,h3,h7,h5,h8,c1,d4,c8,c5,c11,d10,s5,d9,s7,s13,s6,d11,d7,s10,d5,c12,c6,h13,s8,h9,d1,h4,s11,c3  
**437/1000: solving: solved in 198943 tries.**  
s4>s1,d2>d8,s12>s4,h2>h6,h2>d2,c9>c7,h12>s12,h2>h12,c2>c9,c2>h2,s2>c2,s9>s2,d13>d3,h1>h10,h11>h1,c13>c10,c13>d13,c4>c13,h7>h3,h5>h7,h8>h5,d4>d12,c8>c1,c8>h8,c5>c8,c11>c5,s13>s5,s6>s7,s10>s6,d7>d9,d5>d7,s10>d10,d11>d5,d11>c11,d11>d6,h13>s13,c6>c12,h9>h13,s11>s8,s11>s10,s11>d11,s11>s9,c3>c6,h4>h9,h4>h11,s3>s11,d4>h4,c3>s3,c4>c3,d4>c4,d1>d4,

s13,h8,d8,c10,h11,s6,h10,d6,c5,d10,s2,d7,h9,h5,s7,d4,d13,d12,c9,c13,s11,h2,d5,c8,c12,d2,h4,h1,s3,s8,s1,s12,c11,s9,s5,h3,h6,d3,d11,c6,d1,s10,h13,d9,c4,s4,c2,h12,c1,h7,c7,c3  
**438/1000: solving: solved in 33400 tries.**  
d8>h8,h10>c10,h11>h10,s6>s13,d6>s6,d8>d6,d10>d8,h5>h9,h5>c5,h5>h11,d7>d10,s7>s2,d4>d7,d13>d4,d12>d13,c13>c9,c12>c8,d2>h2,d5>d2,c12>c13,c12>d12,s11>s7,h4>h5,h1>h4,s8>s3,s1>s8,s1>h1,s11>s1,s12>c12,s11>s12,s9>s11,s5>s9,d5>s5,h6>h3,c6>h6,c6>c11,d11>d5,d9>d1,s4>s10,h12>h13,c1>c2,h7>h12,c7>h7,c4>c7,c4>s4,c4>c6,c1>c4,c3>c1,d3>c3,d3>d11,d9>d3,

d7,s12,h4,c10,c8,h8,c9,h10,d4,d11,c4,h11,d2,h9,d9,h2,h7,s10,s7,d5,h1,c5,c7,s4,d12,h13,c12,c3,s9,s8,c1,h5,s11,c2,d1,s1,h6,c6,h3,d13,s3,d6,s6,s13,s5,h12,c11,s2,d3,d8,d10,c13  
**439/1000: solving: solved in 5467 tries.**  
c8>c10,h8>c8,h8>h4,d11>d4,c4>c9,h11>d11,h11>h10,d9>h9,d9>d2,h7>h2,s7>s10,s7>h7,c7>c5,c7>s7,c7>c4,c7>d7,h11>h8,d5>d9,d12>d5,c3>c12,s9>s4,s8>s9,c1>c3,c1>h1,h5>h13,s1>d1,c6>h6,s6>d6,s6>s3,s6>c6,s6>s1,s13>d13,s5>s6,s5>h5,s5>s8,s11>s5,s13>s11,h12>h3,d8>d3,d10>d8,c13>c11,c13>s13,c13>c1,c2>c13,h12>h11,d12>h12,c2>c7,s2>c2,s12>s2,d12>s12,d10>d12,

h4,h3,d4,c11,h9,s4,d8,s8,h12,c1,c10,s3,s10,d10,h10,h5,h1,c2,s11,d1,d11,s12,c13,d6,c4,s9,c3,h13,c7,h6,d13,s5,s7,c9,c6,h7,s1,c12,d2,d9,s6,h8,s2,d3,d5,d12,c8,h2,d7,c5,h11,s13  
**440/1000: solving: solved in 157084 tries.**  
h3>h4,h9>h3,d8>d4,s8>s4,c1>c11,c10>c1,s10>s3,s10>c10,s8>s10,s8>d8,h10>d10,h10>h12,h5>h10,h1>h5,s11>s8,d11>d1,d11>s11,d13>h13,s7>s5,c9>c7,c9>s9,c9>c4,c3>c9,d13>c13,d6>d13,c3>c2,h6>d6,h6>h1,c6>c3,s7>s12,h7>s7,c12>c6,s6>s1,d9>d2,s2>s6,h8>h7,d7>d12,d7>d9,d3>d7,d5>d3,c5>d5,c5>c12,c8>c5,h8>c8,h2>h6,h8>h9,h11>d11,h11>h8,h2>h11,s2>h2,s13>s2,

c9,d8,s5,h5,h4,s10,s8,h2,d2,d12,h11,c7,s11,h6,d7,s3,c8,h9,c3,d13,h1,s6,s12,d3,d6,h7,d5,s4,s2,h3,d4,d10,c13,h8,s9,c5,d11,c2,c1,d9,h13,h12,c10,c4,s7,c11,d1,s13,s1,c6,h10,c12  
**441/1000: solving: solved in 152903 tries.**  
h5>s5,h4>h5,s8>s10,d2>h2,d2>d8,d12>d2,s11>s8,h11>s11,h11>h4,c7>c9,h6>h11,d7>c7,d12>d7,h9>h6,c3>c8,c3>s3,d13>d12,s12>s6,d3>c3,d6>d3,s4>s12,s2>s4,d10>d4,c5>c13,h8>h3,c5>d5,c1>c2,d9>s9,d9>d10,d11>d9,c1>c5,c1>h1,h12>h8,h13>h7,c11>c10,c4>c11,d1>d11,s13>s7,s1>d1,s1>s2,s1>c1,h13>h9,s13>s1,c6>c4,c6>d6,s13>d13,h13>s13,c12>c6,h12>c12,h12>h13,h10>h12,

d9,h5,c9,h2,c6,c10,h9,d8,h13,s8,h7,c1,c7,d1,s4,d7,s9,s6,s5,d12,s2,d11,h10,d6,s13,s7,h12,s10,c5,h1,d10,c3,h8,s12,h3,d3,d13,d2,c2,h11,c12,c4,c8,d5,s3,h4,c11,s11,d4,h6,s1,c13  
**442/1000: solving: solved in 130688 tries.**  
c10>c6,h9>c9,h9>h5,h9>d9,h2>h9,h13>h2,s8>d8,h7>h13,c7>c1,c7>h7,c10>c7,s6>s9,s5>s6,s7>s13,h12>h10,h12>d12,d6>d11,s10>s7,d10>s10,d10>d6,h3>c3,h3>h1,h8>h3,d13>d3,d2>d13,c2>d2,h11>h8,c8>c2,c8>c5,c12>c8,c12>h12,s12>s2,s12>c12,d5>d10,d5>d7,s5>d5,s5>s8,s3>s12,c4>s4,s11>c11,s11>s3,h6>h11,h4>h6,s1>s11,s1>s5,d1>s1,d4>d1,c4>d4,c13>c10,c4>c13,h4>c4,

d11,h10,s8,s10,d5,d7,d9,h3,d4,h4,c11,c12,c1,s5,d8,h8,c9,c6,s4,d13,c4,s2,c7,s12,d12,c2,d2,h5,h13,d3,h11,h6,h7,s9,s7,c13,h2,s6,d10,s11,c3,c8,c5,s3,c10,h9,s13,s1,d1,d6,h12,h1  
**443/1000: solving: solved in 7927 tries.**  
s10>s8,s10>h10,d7>d5,d9>d7,h4>d4,h4>h3,c12>c11,c1>c12,h8>d8,h8>h4,c6>c9,c4>c6,s4>c4,s4>s5,d12>s12,d12>d13,c2>c7,c2>s2,c2>c1,d2>d12,h13>h5,h6>h11,h7>h6,s7>s9,s7>h7,c13>h13,c13>c2,d3>d2,s3>c3,s3>s6,s3>d3,s3>s4,s7>s3,h2>h8,c5>c8,c10>c5,s13>s11,s13>c13,s7>s13,d10>d9,s1>s7,h12>h9,h1>h12,h1>h2,s1>h1,c10>s10,d10>c10,d10>d11,d1>s1,d1>d10,d6>d1,

d10,s8,c12,s10,h9,d5,h8,d4,c13,d12,c7,c6,c10,s9,h4,h7,s2,s3,c1,s6,s1,s13,h3,d13,c4,d6,d3,c11,c9,d2,h12,c2,h1,d8,c3,s7,h2,h11,s4,c8,s5,h6,s12,d9,d11,d1,h10,d7,h5,h13,c5,s11  
**444/1000: solving: solved in 3525 tries.**  
s10>d10,s8>s10,c6>c7,c10>c6,h7>h4,s3>s2,s1>s6,s1>c1,s1>s3,s13>s1,d3>d6,d3>h3,d13>d3,d13>s13,c11>c4,c9>c11,c9>s9,c9>c10,d13>d12,d13>c13,d13>d4,h7>h8,c2>c9,d2>c2,d2>d13,h1>h12,s4>s7,h11>h2,c8>c3,c8>d8,h11>h1,s12>s4,s5>s12,d11>d9,h13>h10,h13>h6,d7>d1,h5>h13,h5>h11,h5>d5,h5>h9,h7>h5,d11>d2,c8>c12,c8>s8,d7>h7,d11>d7,s11>d11,s5>s11,c5>s5,c5>c8,

h11,s5,h13,d4,h4,d1,s13,c4,d6,c7,s2,c10,d2,d9,s1,c1,s7,d11,s4,d8,h5,s10,c2,c11,h7,c5,c6,d3,h8,s12,h12,c9,d7,s6,c12,s8,s3,c13,c8,h10,d12,c3,h1,d10,s9,h3,s11,h9,d5,d13,h6,h2  
**445/1000: solving: solved in 128173 tries.**  
h4>d4,h4>h13,s13>s5,d9>d2,s1>s2,c1>s1,c1>c7,c1>d1,c4>c1,c4>h4,s10>s4,c11>c2,c5>h5,c11>c5,c11>d11,c11>c10,s10>s7,d3>d8,h12>s12,h12>h8,c12>c9,c12>h12,c12>c6,d7>d3,h7>d7,s6>s10,s6>d6,c12>c11,s3>s8,c3>c8,d10>h10,d12>d10,h9>s9,h9>h1,h3>c3,h3>h7,s3>h3,s3>s6,d12>c12,d9>d12,c13>c4,s11>s3,s11>h11,s13>s11,c13>s13,d13>d5,d13>c13,d9>d13,h9>d9,h6>h9,h2>h6,

d1,h12,c6,c9,s5,h4,c10,d11,h3,h9,c2,h6,s6,d13,d7,c7,d5,c11,h1,h10,d2,d3,c5,c3,h7,c1,c12,s9,s1,h5,s3,s2,s8,s12,d10,d12,c8,h11,s7,c4,d9,d4,c13,s10,d6,d8,h2,s13,s4,h8,s11,h13  
**446/1000: solving: solved in 1923 tries.**  
c9>c6,h4>h12,h9>h3,c2>c10,h6>h9,s6>h6,s6>s5,d13>d11,d7>d13,c7>d7,c7>c2,h10>h1,d2>d5,d3>d2,c3>c5,c3>d3,c3>c7,c11>c3,h7>h10,c12>c1,s1>s9,h5>h7,s3>s1,s2>s3,s8>s2,s12>s8,s12>c12,s12>s6,d12>d10,d12>s12,d12>d1,c11>c9,h11>c11,h11>h4,h5>h11,d4>d9,d4>c4,s10>s7,c13>c8,d6>d4,d8>d6,s13>s10,s13>c13,h2>h5,d8>d12,h8>h2,h8>d8,s11>s4,h13>h8,s13>h13,s11>s13,

c12,d6,d10,h13,s11,d3,s1,c9,s7,d12,c13,s6,s12,h9,d13,d9,d7,s2,h3,d5,d11,c5,h4,h2,c4,d1,c10,s13,c8,c6,h11,h7,s10,d4,s3,h5,s8,c3,c1,c7,h10,h8,d2,s9,d8,s5,c11,c2,h1,h6,s4,h12  
**447/1000: solving: solved in 33893 tries.**  
d10>d6,d3>d10,s1>s11,c13>c9,s12>s6,s12>d12,s12>s7,d13>c13,d13>d3,h13>d13,s12>s1,d9>h9,d7>d9,d5>d7,d11>d5,h2>h4,h2>s2,h2>h13,h3>h2,c4>c5,c6>c8,h7>h11,s10>s13,s10>c10,c6>c4,d4>d1,c3>s3,c1>c3,c7>c1,c7>h7,s8>s10,h10>h5,h8>h10,d8>h8,d8>d4,s8>d8,s9>s8,c11>c7,s5>s9,c11>d11,c2>d2,c2>c11,c2>c12,c6>c2,h1>h3,h6>h1,h6>c6,s4>s5,h12>h6,s12>h12,s4>s12,

s2,h6,d10,s1,d11,d1,c3,h9,h3,c5,c2,c11,c4,h10,d12,c7,s11,d6,c10,s3,c8,s9,s8,c6,s12,d3,d5,s10,c13,h4,s13,d13,c12,d2,h1,h11,s4,s5,d9,h7,s7,c1,d7,d4,h5,d8,s6,h12,h13,c9,h2,h8  
**448/1000: solving: solved in 4688 tries.**  
s1>s2,d11>d10,d1>d11,h9>h6,h3>c3,c2>c5,c11>c2,c4>c11,c7>c4,s3>s11,c8>c10,s9>s3,s8>c8,d5>d3,s13>s10,c13>s13,c13>c6,h11>h1,s5>s4,d9>d2,d7>h7,d7>d9,s7>d7,h5>s5,h5>h11,c1>c12,d8>d4,s6>s7,h13>h5,h13>d13,h13>h4,h13>c13,s6>s12,s6>d6,s8>s6,h8>h2,h8>d8,h8>h13,h8>s8,h12>h8,h12>h10,c9>s9,c9>c7,c9>h9,h12>h3,d12>h12,d5>d12,c1>c9,c1>s1,d1>c1,d5>d1,

s12,c10,h8,d9,d13,d10,c13,s2,s11,c1,c6,s1,s13,h10,d4,s8,d6,c2,d7,s9,d3,h7,c9,c11,s4,d5,c4,h4,d2,h13,s5,c7,c3,h6,s10,s6,c12,h1,h12,h3,h9,d11,d12,h11,c8,h2,s7,d1,d8,c5,h5,s3  
**449/1000: solving: solved in 16359 tries.**  
d13>d9,d10>d13,c13>c10,s11>s2,c6>c1,s13>s1,s8>s13,d6>d4,d6>c6,h7>d7,c11>c9,s4>s9,h4>c4,c3>c7,h6>h13,s6>s10,s6>h6,s5>s6,s5>d5,s5>s4,d2>d3,d2>c2,d2>d6,h7>h10,h4>h7,c3>c11,c12>c3,h1>h4,h12>c12,h3>h12,h11>h9,h11>h1,h11>s11,s5>s8,d11>d2,d11>h11,d11>d10,h2>h3,d1>d12,d8>d1,d8>d11,c8>d8,h5>h2,h5>h8,c5>c8,c5>h5,c5>c13,s5>c5,s5>s12,s7>s5,s3>s7,

h6,c7,h2,s5,d13,h13,h7,c5,c3,h8,h12,h5,s1,d7,d8,d11,s12,d9,s4,c13,d1,c6,c4,d2,h9,c2,s7,h10,d6,s8,d12,h3,h4,s10,s6,h11,s11,d4,c10,d3,h1,c9,c12,c8,s2,d5,s13,s3,d10,c1,s9,c11  
**450/1000: solving: solved in 26951 tries.**  
h13>d13,h7>h13,h7>c7,h7>h6,h2>h7,c5>s5,c3>c5,h12>h8,h5>h12,d8>d7,d11>d8,d1>d9,d1>s1,d11>d1,s4>s12,c6>c13,c4>c6,c4>s4,c4>c3,d2>d11,d2>h2,h9>h5,c2>d2,c4>c2,s8>s7,d12>d6,h4>h3,s10>h10,s10>s8,h4>h9,s11>h11,d4>d12,d4>c4,c12>c9,c8>c12,d10>d5,s3>s2,s3>d3,s3>s6,c10>s10,s11>s3,h1>h4,c1>c8,c1>h1,c10>c1,d10>d4,c10>d10,s9>s13,c11>c10,s11>c11,s9>s11,

c7,h2,d11,h9,h8,c2,c10,c12,c5,d9,h6,s1,s2,s4,d3,d13,c4,d6,d12,s10,h3,c11,d8,h12,c13,h10,s13,s7,d1,s6,s3,s9,h5,h4,c6,c3,s5,h13,s8,d2,c1,c9,h11,s12,h1,c8,h7,d5,d4,d10,d7,s11  
**451/1000: solving: solved in 3758 tries.**  
h8>h9,c2>h2,c2>c7,c10>c2,c12>c10,c5>c12,s2>s1,s4>s2,d3>d9,d13>d3,c4>s4,d6>d13,h6>d6,h6>h8,c4>c5,h3>h6,d8>d12,s7>s13,s3>s6,s9>s3,h4>h5,c3>c6,h13>h4,s5>s9,s8>s5,c9>c3,h1>c1,h1>h13,h7>h11,h7>h1,h7>s7,h7>h12,c8>c9,c8>s8,c8>c13,d5>d1,d10>d2,d4>d5,d7>d4,d7>h7,d10>d7,d10>d8,s10>d10,c11>d11,h10>h3,s10>h10,c8>c4,c11>c8,s12>s10,s11>s12,s11>c11,

d3,h2,h9,c13,s11,h10,s12,c11,s5,c3,s13,h13,c1,h4,s7,h1,h7,c8,c9,c10,s8,d1,c6,c7,d13,d9,s3,h5,s2,d5,c4,s6,h6,d10,d2,d6,h11,c12,h12,h8,h3,s10,s1,s9,s4,d8,d11,c2,d12,d4,c5,d7  
**452/1000: solving: solved in 44270 tries.**  
h9>h2,h10>h9,s12>s11,h13>s13,h1>c1,h1>h13,h4>h1,s7>s5,h7>h4,c9>c8,c10>c9,c6>c10,c7>c6,c7>h7,c7>c3,c7>s7,c7>c11,d13>d1,d9>d13,s6>s2,h6>s6,h6>h5,d5>d9,d2>d10,d6>d2,h11>h6,h12>c12,h12>h11,h8>h12,h8>s8,s1>s10,s9>s1,s4>s9,d8>d6,d11>d8,s4>c4,d12>d11,d12>d5,d12>s12,d12>d3,h3>h8,h3>h10,s3>h3,s4>s3,c7>c13,d4>s4,d4>d12,c5>c2,d7>d4,c7>d7,c5>c7,

c11,c3,h12,s5,h3,s8,h4,s3,h13,c2,s12,c4,d6,h11,c9,s11,s10,s9,c8,d10,d5,d4,c7,d3,d13,d1,c5,d11,d12,d9,s7,s4,s13,d7,c13,s2,d8,c6,c12,h7,h5,c1,s6,c10,h8,h1,h6,h10,h9,h2,d2,s1  
**453/1000: solving: solved in 9758 tries.**  
c3>c11,h3>c3,h12>h3,s8>s5,s12>s3,s12>h12,s8>s12,h13>h4,c4>c2,h11>h13,s10>s11,s9>s10,s9>c9,c8>c4,d5>d10,d4>d5,d13>d3,d1>d13,d12>d11,d9>d12,s4>s7,s13>s4,s2>s13,c12>c6,h5>h7,h1>h8,h1>c1,h1>h5,c10>c12,h6>s6,h2>h6,d2>h2,d2>d8,d2>s2,d2>d1,d7>d2,d7>c7,d9>d4,d7>d6,d9>s9,c5>c8,c13>c5,c10>c13,d9>d7,h10>c10,h1>h11,h9>d9,h9>h10,s1>s8,h1>s1,h9>h1,

h7,c11,h11,h6,s8,d11,d13,s4,h9,c8,d12,s5,c6,d10,s11,d1,c9,h1,s10,c7,s3,d2,c1,d9,d3,d8,c5,h8,h2,h12,s9,d6,h5,h3,c10,d5,c2,s2,d7,s7,c12,c13,s13,c4,h13,h10,s12,s1,c3,s6,h4,d4  
**454/1000: solving: solved in 27965 tries.**  
h11>c11,h11>h7,h6>h11,d13>d11,c6>c8,c7>c9,s3>s10,c1>h1,c1>c7,c1>d1,d9>d2,d3>d9,d3>s3,d3>d10,d8>d3,c5>c1,c5>s5,h2>h8,h12>h2,h5>h12,h5>c5,h5>h9,d8>d12,s9>s11,d6>c6,d6>d13,d8>d6,d8>s8,h5>h6,s9>s4,h3>h5,d5>d8,c2>c10,s2>c2,d7>d5,s2>s9,c13>c12,h10>h13,s12>s13,s1>s12,s1>s2,s7>s1,h4>h10,d4>h4,c3>c13,c3>h3,c4>c3,d4>c4,d7>d4,s7>d7,s6>s7,

d10,c1,d7,c5,d12,h6,s7,s11,s1,d1,c6,h10,c7,h4,c3,d3,s3,d6,s10,c9,c12,d5,d2,h3,s4,s9,d8,s13,s8,h5,c2,s6,h13,c8,d11,d9,d4,h9,h7,d13,h8,c13,h11,h1,h2,h12,c11,c10,s12,s5,s2,c4  
**455/1000: solving: solved in 57577 tries.**  
s11>s7,s1>s11,d1>s1,h10>h6,c7>c6,h4>h10,c3>c7,d3>c3,d3>d1,s3>d3,d6>d12,s10>s3,c12>c9,d2>d5,s9>s4,d8>d2,s13>s9,s8>s13,s6>s8,d9>d11,d4>d9,h9>h13,h7>h9,d13>d4,h8>h7,c13>d13,c13>c8,h1>h11,h2>h1,h2>c2,h2>h5,h8>h2,h8>d8,h8>h4,h3>h8,c10>c13,c10>s10,c10>c5,c10>d10,d6>d7,h12>h3,s6>d6,s12>h12,c12>c1,s12>s6,c4>c11,c4>c10,c12>c4,s12>c12,s5>s12,s2>s5,

c1,h6,d8,h4,h7,c13,c8,h8,c10,c2,d2,s11,h9,d4,d13,s1,s3,s12,d12,h10,s10,d1,c11,h1,c5,s8,d5,s2,d9,h11,s6,s5,d7,c12,c3,c7,d3,s13,s7,c9,c4,d11,d10,h5,d6,h12,h3,s4,h13,c6,s9,h2  
**456/1000: solving: solved in 43192 tries.**  
h7>h4,c8>c13,h8>c8,h8>h7,h8>d8,h8>h6,c2>c10,d2>c2,h9>h8,d13>d4,s3>s1,s12>s3,d12>s12,d12>d13,s10>h10,s6>s2,s5>s6,s5>d5,s5>s8,s5>c5,h11>h1,h11>c11,s5>s10,d7>d9,c3>c12,c7>c3,c7>d7,s7>s13,c4>c9,d11>d3,d11>d1,d11>s11,d11>d2,s7>s5,h11>d11,c7>s7,d10>d12,c4>c7,d6>d10,h5>h11,h13>h12,h13>h5,h3>h13,c6>d6,c6>c1,c4>c6,s4>c4,s9>s4,h9>s9,h3>h9,h2>h3,

h8,s3,s8,h3,d11,c2,c13,s11,s1,h9,c7,h10,d7,s12,c3,d1,h11,c10,h2,h1,c1,c4,h7,s10,d9,s5,s13,s4,c9,h12,d12,d6,h6,d3,s9,h13,d8,c11,c12,c8,s6,d13,h5,s2,c6,d4,s7,d2,d10,d5,h4,c5  
**457/1000: solving: solved in 171888 tries.**  
s8>s3,s8>h8,c13>c2,s1>s11,c7>c13,h10>h9,d7>c7,d7>d11,s1>s8,c10>c3,h2>h11,h1>h2,h1>d1,h1>h10,h1>s1,h3>h1,c1>c10,c4>c1,h7>d7,h7>h3,s13>s5,s4>s13,s4>c4,s4>s12,s10>s4,c9>d9,h12>h7,d12>h12,d6>d12,h6>d6,d8>d3,s9>s10,c11>c9,c12>c11,c8>c12,d8>c8,h5>h13,d4>d13,d4>d8,s7>s6,s7>s9,s2>s7,h5>h6,d2>s2,d4>d2,d5>d10,c5>c6,d5>c5,h4>h5,d4>h4,d5>d4,

s13,c13,c3,d11,c9,s7,c1,c11,h13,s11,c6,s6,h5,c10,d10,d12,h2,h12,s5,s10,h1,d8,d4,s4,c8,s8,h10,h7,h9,h11,s1,d13,h4,s9,s3,h3,d7,s12,d6,h6,d3,c7,c2,d2,d9,s2,d1,c5,d5,h8,c12,c4  
**458/1000: solving: solved in 392431 tries.**  
c13>s13,c3>c13,c11>c1,c11>d11,c11>c3,c9>c11,s6>c6,s6>s11,d10>c10,d12>d10,h12>h2,h12>d12,h12>h5,s10>s5,d4>d8,s4>d4,s8>c8,s8>s4,h10>s10,h10>h12,h1>h10,h9>h7,h11>h9,s1>h1,s1>s6,s8>s1,d13>h13,h4>h11,s3>s9,h3>s3,h6>d6,d3>d7,d3>h3,d3>d13,s2>c2,d2>s2,d9>d2,c5>c7,d1>d9,d5>d1,h8>h6,h8>s8,h4>h8,s12>s7,d5>d3,c4>h4,c4>c9,c5>d5,c12>c5,c12>s12,c12>c4,

s3,d12,d7,h1,d10,h7,h9,d4,h5,h8,d6,c8,s10,c7,s1,h11,h12,c5,h3,s11,h2,s5,h10,s13,c9,h6,d8,d13,c6,d5,d11,h4,d3,c1,s12,h13,c4,c10,s6,s7,c13,d9,d1,s4,c12,c3,s8,s2,c2,s9,c11,d2  
**459/1000: solving: solved in 49086 tries.**  
d7>d12,h7>d7,h1>h7,h8>h5,h12>h11,c5>c7,h3>h12,h6>h10,d13>d8,d11>d5,c4>c1,c10>c4,s7>s6,d1>d9,c12>c13,c12>s12,c12>c10,h13>h4,h13>d13,h13>h6,s13>h13,s13>s5,c6>c9,c12>c6,d1>d11,d3>d1,s7>s13,s2>s4,c3>c12,s2>s7,s2>h2,s8>s2,s8>s1,s8>c8,c3>c5,d3>c3,d3>d6,h3>d3,h3>h9,h3>s3,h1>h3,h8>h1,s8>h8,s9>s10,s9>s8,s11>s9,d4>d10,d2>d4,c2>d2,c11>c2,c11>s11,

c11,c6,c13,d8,h8,h10,s11,d2,c9,s5,h6,s12,d3,h2,c1,c2,d6,s1,h9,c10,h4,s13,h13,s9,d11,d7,h5,h1,h3,d10,c7,s6,d4,d5,s10,h7,d12,s8,d13,c12,d1,h11,s4,s2,d9,s7,c3,c4,h12,c5,s3,c8  
**460/1000: solving: solved in 27922 tries.**  
c6>c11,c13>c6,h8>d8,h10>h8,s5>s11,h2>h6,c2>c1,c2>h2,c2>c9,c2>d2,c2>c13,s12>s5,d6>d3,h13>s13,h13>h4,s9>h9,s9>s1,d7>d11,h1>h5,h3>h1,c7>d7,d5>d4,s10>d10,s6>s10,h7>h3,h7>c7,h7>h13,s6>s9,s6>d6,s6>s12,h7>h10,c10>c2,d13>d5,s8>s6,s2>s4,d9>d1,d9>d13,d12>d9,c12>d12,s2>s8,s7>s2,c12>c10,h12>h11,h12>c12,h7>h12,s7>h7,c5>c4,s3>s7,c3>s3,c5>c3,c8>c5,

s3,h1,d6,s2,c5,h6,h11,s10,s11,c10,h9,d1,d12,c1,d4,d11,h8,h7,c7,d9,h3,d13,s9,s5,h10,h13,c3,c6,s7,d8,s8,d7,h5,d10,c13,h12,d3,d2,s12,c2,c12,c11,s1,c4,s6,c9,s4,s13,h2,h4,c8,d5  
**461/1000: solving: solved in 22498 tries.**  
s2>s3,h6>h1,d6>h6,s11>s10,s11>h11,s11>s2,c10>c5,d1>d6,d12>d1,d11>d4,h8>h9,h7>h8,c7>h7,c7>c10,c1>c7,d11>s11,d12>d11,s9>d9,s5>s9,h13>h10,h13>d13,h13>h3,c3>c1,c6>c3,s8>d8,s8>s7,h5>h13,h5>s5,d10>d7,d3>d10,d2>d3,s12>h12,s12>s8,s12>d12,c4>c12,c11>c13,c11>c6,s6>s1,s13>s6,h4>h2,c8>c9,c8>c2,c8>c11,c4>c8,s4>s13,s4>c4,s4>s12,h4>s4,h5>h4,d5>d2,d5>h5,

s9,c2,d2,h2,h1,c5,c10,d9,c3,s12,s1,h6,h7,d7,h12,s10,d6,h8,d3,s5,d13,c1,d12,c13,c8,d10,h9,s6,h10,s8,c12,d4,d11,d5,h13,h5,s2,c11,h3,h4,s13,c7,d1,h11,c9,c6,s3,d8,s4,s7,s11,c4  
**462/1000: solving: solved in 433548 tries.**  
d2>c2,h2>d2,h1>h2,c10>c5,d9>s9,c3>c10,s1>s12,h6>h1,h7>h6,d7>h7,d7>d9,h8>h12,d3>d6,c13>d13,c1>c13,d12>d3,c8>c1,d10>d12,d10>s10,s5>s1,h9>h8,h10>d10,h10>h9,c8>c3,s8>s6,s8>c8,s5>s8,d11>d4,d5>d11,d5>s5,h5>h13,h4>h3,c9>c7,c6>c9,d8>d1,s4>s3,c4>s4,c4>c6,c4>c11,s7>s13,s11>s7,s11>s2,c4>c12,h11>s11,h4>c4,h11>h10,h4>h11,h5>h4,d8>d7,d5>d8,h5>d5,

d12,d2,h8,h13,s5,s2,s1,d8,s4,c13,c5,d3,h6,s12,h2,c12,h7,c4,d10,c3,d1,h9,s8,s10,d5,s13,h3,c7,c8,d7,d11,h12,c11,h1,h4,d6,s3,d4,c10,d13,c2,s11,c9,s6,h11,c6,h10,h5,s7,s9,d9,c1  
**463/1000: solving: solved in 86938 tries.**  
d2>d12,h13>h8,s2>s5,s1>s2,d8>d2,s4>s1,c5>c13,s10>s8,d5>d1,s13>s10,c8>c7,d11>d7,h12>h3,c11>d11,c11>c8,h4>h1,d4>h4,d6>d4,c10>c11,s11>s3,c9>c2,c6>c9,c6>d6,h11>s11,h10>h11,h5>h10,h5>h12,h5>d5,h9>h5,c10>c3,c10>d10,c6>c10,c6>c12,c6>h6,h7>h2,c4>c6,h9>h7,s7>s6,s9>s7,s9>h9,d9>s9,d9>d3,s13>s12,d13>d9,d13>h13,d13>d8,c4>c5,s13>d13,s4>s13,c4>s4,c1>c4,

h5,s4,c8,h11,d3,s13,d5,h1,d11,h9,s7,d12,d10,s8,h13,s10,c9,s3,h2,h10,s11,d4,h7,d2,h6,s9,d13,h12,c10,c2,h4,c6,s2,d7,c1,c12,c7,s1,d9,d6,c4,d1,h8,d8,c13,h3,s12,c5,s5,s6,c3,c11  
**464/1000: solving: solved in 14697 tries.**  
h11>h5,s13>s4,d5>d3,d12>d11,d10>d12,s8>s7,h10>h2,h10>s10,h10>h13,h10>d10,h10>h1,h9>h10,s8>c8,s8>s13,h9>h11,c9>h9,s11>s3,d13>d2,c2>c10,s2>c2,c12>c1,c7>c12,c7>d7,c7>c6,s1>s2,d6>d9,c4>h4,d1>d6,d1>s1,c7>c4,c3>c5,c3>c13,c3>c7,h3>c3,d8>d1,h8>h3,s12>h12,s12>s9,d8>d13,s6>s12,s6>h6,h8>h7,d8>h8,d8>d4,d8>s8,d5>d8,s5>d5,s11>s5,c11>c9,s11>c11,s6>s11,

d7,d6,s11,h5,c6,h7,h8,c3,h3,h4,d4,c12,s6,c7,s7,s5,h13,h11,h2,d10,h9,h12,c8,c4,c10,s4,d1,s8,d13,s9,s3,c5,d2,s13,h1,c9,h6,h10,s1,d3,d8,c11,d5,d12,d11,c2,s12,c1,d9,s2,c13,s10  
**465/1000: solving: solved in 7120 tries.**  
d6>d7,c6>d6,h7>h5,h8>h7,c3>c6,h3>h8,h4>h3,d4>h4,c12>c3,s7>c7,s7>s6,s5>s7,h11>h13,h11>s11,h2>h11,h12>h9,c4>c8,c10>c4,s3>s9,d2>d13,c9>c5,h6>h1,h10>h6,d8>d3,d12>d5,d11>d12,d11>c11,d11>d8,s2>s12,s2>c2,d9>d11,c1>s1,c13>c1,c13>c9,s13>c13,s13>s3,s10>h10,s10>s8,s10>c10,s10>s5,d10>s10,d10>d4,h12>c12,h2>h12,s13>s4,d2>d1,s2>s13,d2>s2,d2>d10,d2>h2,d9>d2,

s3,c13,s11,c3,h5,s8,c11,s12,s5,c9,h9,s10,s13,h12,c6,s7,h3,c5,d12,s2,d3,h7,c4,h1,c12,s9,s1,h4,s4,d13,h8,d10,s6,d9,h11,d8,c8,d2,d6,h13,d7,c1,h2,c10,d4,d5,c7,d1,d11,c2,h6,h10  
**466/1000: solving: solved in 34472 tries.**  
c3>s3,c13>c3,c11>s11,c11>c13,s12>s8,s5>s12,s5>h5,h9>c9,s13>s10,s7>s13,s1>s9,h4>h1,h4>c4,h4>h7,s4>s1,c8>d8,d2>d9,d6>d2,d6>s6,d6>d10,c8>h8,c8>c12,d6>d13,h13>h11,h2>h13,d4>d7,d4>s4,d4>d3,h4>d4,h2>h4,h2>s2,h2>h3,c10>c8,d1>c1,d1>d6,d11>d1,d5>d11,c2>c10,d5>c5,c2>h2,c7>c2,c7>s7,c7>c11,h12>h9,d5>s5,d12>d5,c6>c7,h12>d12,h6>h12,h6>c6,h10>h6,

d4,s10,h9,d13,c11,d2,s7,c5,s13,c12,c1,h7,s5,s3,c6,s6,c2,d1,c10,h8,c9,s11,h2,s4,d5,h1,d11,c8,d9,d12,d10,h13,c7,h10,h12,h6,d6,h4,s9,s12,h3,s8,s1,h5,h11,c3,d7,c13,d3,s2,d8,c4  
**467/1000: solving: solved in 16773 tries.**  
d13>d4,c5>c11,s13>s7,c12>c5,c1>c12,s3>s5,s6>c6,s6>s3,h2>h8,h2>c2,c9>c10,s4>s11,d5>d1,d12>d9,d10>d12,c7>c8,h10>h13,h10>d10,h10>h1,h12>h10,h6>h12,d6>h6,d6>d5,d11>d6,s9>s4,s9>c9,s9>s6,h4>h2,s1>s12,h11>h5,d3>c3,d3>h3,d8>d7,d8>d3,s8>d8,s8>s1,h11>d11,h11>h7,s8>s9,c13>c7,s2>s8,s2>d2,s2>s10,h11>h9,h4>h11,s13>s2,s13>d13,c13>s13,c4>c1,c4>h4,c4>c13,

h6,c2,s3,h8,c13,d7,h7,h11,d12,c7,c1,d9,c6,d5,s6,d6,d3,c12,c5,c3,d4,d10,s13,s11,s9,d13,h10,s4,d2,c8,s5,h13,s1,d11,d1,c9,h1,s8,s10,c10,h2,s12,h3,c4,h12,h9,c11,s2,h5,d8,h4,s7  
**468/1000: solving: solved in 190041 tries.**  
h8>h6,h7>d7,h11>h7,c7>c13,c1>c7,d9>d12,c6>c1,d5>d9,s6>c6,s6>s3,h11>h8,d6>d5,d6>s6,d3>d6,c5>c12,c3>c5,c3>d3,c3>c2,d10>d4,s11>s13,s11>h11,s9>s11,d13>d10,d2>d13,d1>d11,d1>s1,h1>h13,d1>h1,s8>s5,s10>s8,s10>h10,s10>s9,c8>c3,h12>s12,h12>h2,c4>c10,h3>h12,h9>h3,h5>h9,c11>c9,c4>c11,h4>h5,h4>c4,d8>d1,d8>c8,d2>d8,s2>d2,s2>s10,s7>s2,s4>s7,h4>s4,

h7,s6,c6,s9,h13,s8,h1,d12,c8,h4,s13,c4,d13,c13,h5,s7,c1,d7,s5,h9,c9,c11,c3,c12,h10,h2,d9,c10,d8,h3,s3,s12,d1,h12,s10,c2,d3,s4,d4,h11,s1,h8,c7,d2,s11,d10,h6,c5,s2,d6,d11,d5  
**469/1000: solving: solved in 1694 tries.**  
c6>s6,h13>h7,s8>s9,h1>h13,c8>c6,s8>c8,h4>h1,d13>d12,s13>d13,s13>s8,c13>c4,c13>s13,c1>c13,d7>s7,h9>h5,c9>h9,c9>c1,c11>c9,c3>c11,c12>c3,h2>h10,d9>d7,h3>h2,s3>h3,s3>s5,c10>c12,s10>s12,d3>d1,d3>s3,d3>d9,d8>d3,s4>s10,s4>h4,d4>d8,c2>c10,h8>h12,h11>h8,s11>s1,s11>h11,s11>s4,d2>c2,d6>h6,c5>c7,d6>d10,d5>d11,d5>c5,d5>d4,d6>d5,s2>s11,d2>s2,d6>d2,

s1,d4,h9,h6,c2,c3,h5,c6,h7,c9,d2,h2,c4,h1,s9,s12,s8,d12,d9,h13,c7,d10,d1,d8,c8,c11,s2,h8,d11,d3,s3,d6,d13,s5,s10,h12,h3,c12,s4,h4,s13,h10,c5,d7,s6,s11,d5,s7,c1,c10,c13,h11  
**470/1000: solving: solved in 11391 tries.**  
h6>h9,c3>c2,c6>h6,c3>c6,h7>h5,h2>d2,s12>s9,s8>s12,d9>d12,h13>h1,d1>d10,d8>d1,d8>s8,d9>d8,c7>c4,c7>h7,c7>c3,c9>c7,h13>h2,d9>d4,c9>d9,c11>c8,h8>h13,d3>d11,s3>d3,s3>s2,d13>d6,s10>s5,h3>h12,h3>s3,h4>s4,s13>s10,s13>d13,c5>c12,s7>s6,d5>d7,s11>s7,c10>c1,h11>s11,h11>h4,h11>h3,h11>c11,h11>h8,h10>h11,s13>s1,c10>h10,c10>c9,c5>c10,c13>s13,c5>c13,d5>c5,

s9,c3,s2,h3,h6,c8,c5,h7,d13,d9,h12,h2,c12,d6,d12,c7,d11,d8,h13,s12,s6,h10,s3,h9,s5,s1,c11,c1,s10,c13,d1,s11,s8,h11,s13,d7,d3,d10,c9,h5,s4,c6,d2,h4,h1,d5,h8,c4,s7,d4,c10,c2  
**471/1000: solving: solved in 39182 tries.**  
h6>h3,c8>c3,c5>c8,h7>h6,d9>d13,h2>h12,h2>s2,h7>h2,d9>s9,d12>d6,d12>c12,d12>d9,c7>h7,c7>c5,d8>d11,s6>s12,s1>s5,c1>c11,c1>s1,s10>s3,s10>h10,s10>s6,c13>c1,c13>h13,s11>s10,s8>s11,d7>d1,d3>d7,d10>d3,s4>s13,h4>h5,h1>h4,d5>d2,c4>c6,d4>d5,h8>h1,h8>h11,h8>s8,h9>h8,c9>h9,c9>c13,c4>c9,d4>c4,d4>d8,d10>d12,s4>d4,s7>s4,c10>d10,c2>c10,c7>c2,s7>c7,

c6,h8,s3,d11,d7,s13,s10,c13,s9,h12,c12,d13,d12,h10,s6,s8,d1,c9,c8,d2,d9,d6,d4,s7,h11,c3,c5,s12,s2,c7,s11,s4,h4,c4,h6,h5,d5,c10,h3,h2,c11,s1,d3,d10,c2,c1,h1,h13,s5,d8,h9,h7  
**472/1000: solving: solved in 23159 tries.**  
d7>d11,s10>s13,c12>h12,d13>c13,d12>c12,s6>s9,s8>s6,c8>c9,d9>d2,d6>d9,d4>d6,c5>c3,s12>s7,s2>s12,c7>c5,s11>s2,h11>s11,c7>c8,h4>s4,h4>h11,h4>d4,h4>h10,c4>c7,h6>h4,h5>h6,d5>h5,d5>d12,d1>d5,c10>c4,h2>h3,d10>d3,c2>c11,c2>h2,d10>c10,d10>d13,d10>s10,s8>s3,d10>d7,d1>d10,c1>s1,c1>c2,c1>d1,c1>c6,h1>c1,h9>h13,h7>h9,h7>h1,h8>h7,d8>h8,s8>d8,s5>s8,

s3,s1,h7,d10,d4,d8,s2,d2,d3,h5,c5,c1,h3,c3,c12,c6,d5,h13,s13,h6,s7,c10,h10,h4,s12,d9,h1,s10,s8,c13,c8,h2,d13,d6,d12,d7,d11,s4,h11,s11,h12,h9,c4,s5,c9,s6,h8,c7,d1,c11,c2,s9  
**473/1000: solving: solved in 243857 tries.**  
s1>s3,d4>d10,d8>d4,s2>s1,d2>d8,d3>d2,c5>h5,c1>c5,h3>h7,d3>h3,c3>c1,c3>d3,c12>c3,c6>c12,s13>h13,s13>s2,h10>c10,h4>h10,h1>h4,s8>s10,c8>c13,c8>s8,d13>d9,d6>d13,d12>d6,d12>s12,d7>d12,d11>d7,s11>h11,h12>h2,c4>s4,h9>h12,c2>c7,c2>c9,s6>s11,c11>c2,c11>c4,c11>d11,h9>h1,c8>c11,h8>c8,s6>s7,h8>h6,s6>c6,h9>h8,s9>h9,s5>s6,s9>s13,s5>s9,d5>s5,d1>d5,

s10,d8,c13,s6,d6,h13,s4,c11,d7,d11,h10,d4,s11,c5,d5,c7,h1,c2,h4,c4,h9,s7,h3,c8,h2,d9,c10,s9,s3,c3,s2,s1,h5,d2,d3,c9,d13,c1,h12,c12,s5,s8,h6,d1,c6,h7,s13,d10,d12,h8,h11,s12  
**474/1000: solving: solved in 380 tries.**  
s6>s10,d6>s6,d8>d6,h13>c13,d11>d7,d11>c11,d11>d8,s11>s4,d5>c5,d5>d4,h1>h10,c2>c7,h4>h1,c4>c2,h9>h4,c8>c4,h2>h3,s3>s9,c3>s3,c3>c10,s2>h2,s2>s7,d9>d5,d9>h9,d9>d11,d3>d2,d3>c3,c12>h12,c12>c1,s8>s5,d12>d10,h8>h7,h8>h6,h8>s8,d1>d13,d1>s1,d1>d3,c6>c9,h8>h5,h8>c8,c12>c6,s13>s2,s13>h13,s11>s13,d1>d9,d12>c12,d12>d1,h11>h8,s12>d12,s11>s12,h11>s11,

s3,d9,c9,s4,c7,d5,h12,h10,d11,h6,s2,c11,s1,d10,c12,h11,h8,s7,c5,d8,c13,h4,d2,h13,c6,c8,d4,s8,c2,h1,d13,s6,d6,c3,s10,d3,h5,c4,h3,d12,h2,h7,c1,s5,s13,s11,c10,s12,d7,h9,d1,s9  
**475/1000: solving: solved in 4253 tries.**  
c9>d9,h10>h12,c11>d11,c11>c7,h6>h10,s1>s2,d10>d5,h11>h6,h8>h11,d2>d8,h13>h4,h13>c13,c6>c5,c8>c6,d6>s6,d6>d13,c3>c2,h3>d3,h3>h1,h3>c3,d6>d4,h3>h13,s10>s8,h5>h3,d12>d6,h7>h2,s13>s5,c10>c1,c10>s10,c4>c10,h7>h5,h7>s7,h7>h8,c8>c12,c4>c8,s11>s13,s12>s11,d7>d2,d7>h7,d7>d10,d1>d12,d1>d7,s1>d1,c4>s4,c11>c4,s1>s3,s12>s1,s9>h9,s9>s12,c9>s9,c11>c9,

s9,h8,c9,h4,c3,d4,d8,c5,d7,s13,s2,h2,s12,c12,s4,h5,d12,d2,h1,h9,d1,h3,s1,d6,c10,s5,h11,s6,c8,c7,c6,c13,d13,d10,d11,h6,s8,d5,c2,s11,s10,h13,h10,d9,c4,d3,h7,s3,h12,c11,c1,s7  
**476/1000: solving: solved in 5035 tries.**  
d8>d4,s2>s13,h2>s2,c12>s12,c12>c5,d2>d12,d2>h2,d2>d7,h1>h5,h9>h1,d1>d2,h3>h9,s1>d1,s4>s1,c7>c8,c6>c7,c6>s6,c6>c10,c6>d6,c6>c12,d13>c13,d10>d13,d11>d10,d11>h11,h6>h3,d5>s5,d11>d5,s11>d11,s8>s11,h10>h13,h10>s10,c4>c2,c4>s4,c4>c6,c4>h4,c4>c9,d8>h8,c3>c4,s8>d8,h7>h10,d3>d9,s3>d3,h12>h6,h7>h12,s3>s8,s7>h7,s7>s9,s3>s7,c3>s3,c11>c3,c1>c11,

s10,c13,s11,h3,h2,c7,h8,d8,s4,s12,s13,h1,d9,d3,s2,h6,c4,c9,s8,h4,h11,c5,h7,h5,d13,d7,s3,c10,d12,h12,d5,d4,s6,c11,d10,c12,s9,s5,d11,h13,c3,s1,c2,c6,h10,d1,s7,c8,h9,c1,d6,d2  
**477/1000: solving: solved in 78267 tries.**  
h2>h3,c7>c13,h8>h2,d8>h8,s12>s4,s13>s12,d9>d8,d3>d9,c9>c4,s8>s2,h11>h4,h5>h7,h5>c5,h5>h11,d7>d13,d12>d7,h12>d12,h12>h5,c10>c9,d4>d5,d10>d4,d10>c10,s6>s3,s6>h6,s6>s13,h12>h1,c12>c11,s9>s8,d11>d10,s1>s5,c3>c12,h10>h13,c2>c3,c8>c6,d1>s1,c1>c8,h9>h10,c1>c2,d1>c1,d1>d11,h9>h12,s9>h9,d2>d1,d2>d3,s9>s11,d6>d2,s6>d6,s6>s9,s7>s6,s7>c7,s7>s10,

c3,d8,s11,d11,c8,c12,d2,c11,d1,d10,h9,s7,h5,d7,h2,s13,s1,c2,s10,s12,c10,s5,h13,s4,h12,h11,h1,c5,h4,c9,h7,c6,c7,d3,c13,d4,c1,d9,s3,h8,s6,h6,d5,h10,d13,d12,s8,s2,s9,c4,d6,h3  
**478/1000: solving: solved in 48507 tries.**  
d11>s11,d11>d8,c12>c8,c11>d11,c11>c3,c12>c11,d1>d2,d10>d1,s1>s13,s12>s10,h11>h12,h1>h11,h4>s4,h4>h13,h1>h4,c5>c10,s5>c5,s5>s12,h1>s1,h1>h2,c7>c6,c7>h7,c7>c9,h6>s6,h10>h8,h6>h10,s2>s8,s9>s2,d6>d12,d6>h6,d5>d6,d13>d9,d13>c13,d4>d13,d5>d4,d5>s5,d5>d7,d5>h5,c1>c2,c7>c1,h3>s3,h3>h1,d3>d5,d3>d10,h3>d3,h9>h3,s9>h9,s7>s9,c7>s7,c7>c12,c4>c7,

c11,d5,h3,h13,s12,h2,d10,d2,d13,c12,h1,c3,h12,h10,h4,c13,d6,h5,s13,h6,c7,s4,s11,s2,c9,d7,s9,d8,s1,c6,h8,s3,d4,c8,h9,d12,h7,s8,c10,d1,s5,s6,s10,d3,h11,c5,c2,c1,s7,c4,d9,d11  
**479/1000: solving: solved in 1871 tries.**  
h13>h3,d2>d10,d2>h2,d2>d5,d13>d2,h13>d13,c12>s12,h12>c12,h12>h13,h1>h12,h4>h10,h5>h4,s4>s13,s11>s4,s2>s11,c9>c7,h8>d8,c8>c6,s5>s8,s6>s5,s10>s6,c10>s10,d1>d12,d3>d1,d3>s3,d4>d3,h7>h9,c10>c8,h11>h7,c5>c10,c4>c2,c4>c5,d4>c4,h11>h8,d9>d4,s7>s1,s7>d7,s7>s2,h11>h6,s9>s7,d9>s9,d9>d6,h11>h5,c1>c13,c1>h1,c1>c11,c3>c1,d11>h11,d9>d11,c9>d9,c9>c3,

c7,c4,h11,s4,h13,c12,d7,c9,h8,s9,d3,d13,s11,c10,d2,s1,d8,h7,h2,h4,c6,h3,c2,c5,d10,s7,s5,h9,s6,c8,d12,d4,h12,d5,s8,s10,s2,d9,c13,h10,d11,h1,h5,h6,c1,s13,c3,d6,d1,c11,s3,s12  
**480/1000: solving: solved in 257135 tries.**  
c4>c7,d13>d3,d2>d13,h2>h7,h4>h2,c5>c2,s5>s7,d4>d12,s10>s8,s2>s10,h5>h10,d1>d6,d1>c1,d1>d11,d1>d9,h1>d1,h6>h1,h6>h12,h6>s6,h6>h9,h5>d5,h5>h6,h5>s5,h5>h3,c5>h5,c5>c6,d10>d8,d4>h4,d4>d10,c5>c10,s2>s1,s2>d2,s2>s9,s11>s2,c5>c9,c8>h8,c8>c5,c13>c8,d4>d7,c13>h13,c13>c4,s3>s13,c3>s3,c3>c12,c11>c3,c11>c13,h11>c11,s11>h11,s12>s11,s4>s12,d4>s4,

s11,h4,c2,d9,c1,d7,h9,d6,h6,c3,h2,s12,h3,c13,h7,s6,d4,d2,c12,h10,h1,s10,s9,c5,s4,c10,h11,s1,c9,s2,d8,h12,s7,d5,d1,h13,c11,c8,c4,c7,s5,d13,d12,c6,s3,s13,h8,d10,d3,s8,d11,h5  
**481/1000: solving: solved in 35780 tries.**  
h9>d9,d6>d7,h6>d6,h3>c3,h3>h6,h2>h3,h2>c2,h2>h4,h9>h2,s12>s11,c13>c1,d2>d4,h1>h10,s9>s10,c5>c12,s4>s9,c10>c5,s1>h1,s1>s6,s4>s1,s7>s2,d1>d5,c8>c11,c4>c8,c7>c4,d13>h13,d13>d1,d12>d13,d12>h12,c7>s7,c7>c10,c7>h7,c7>c13,d8>d2,d3>d10,d3>s3,s13>s5,d11>d3,d11>d12,d11>d8,h11>d11,s8>s13,s8>s4,s8>s12,h8>h11,c6>c7,h8>s8,c9>c6,h5>h8,h9>h5,c9>h9,

d1,s9,h13,h3,d11,d4,c7,s1,d6,s7,d9,s6,h10,d3,h11,s12,h5,s3,s13,d8,s10,h4,s8,d10,s5,h12,c11,s11,c6,d2,h2,d13,c12,c8,c2,c10,c1,d12,d7,h7,c5,h1,h9,h8,c13,c3,s4,d5,h6,c4,s2,c9  
**482/1000: solving: solved in 2548 tries.**  
h3>h13,d11>d1,d4>d11,s1>s9,s6>d6,s6>s1,s7>c7,h10>h3,d3>d9,h11>h10,s3>d3,s3>s7,s12>s3,s8>d8,s8>s13,s10>s8,s5>s10,s5>h5,s5>s12,s11>c11,h2>d2,h2>h12,c8>c12,c2>c8,c10>c2,c1>c10,d7>d12,h7>d7,h1>c1,h7>h1,c5>c6,h9>h7,c13>d13,c3>c13,c4>s4,h6>h8,c9>c4,c9>c3,h9>c9,d5>c5,d5>d10,h6>h9,s2>h2,s11>s2,h6>h4,h6>s6,h11>h6,s11>h11,s5>s11,d5>s5,d5>d4,

h4,s4,d12,d3,s11,d1,c12,s10,c1,h5,h8,d7,d6,d13,c2,s3,s1,h11,d11,c5,s7,c3,h6,h2,h12,c6,s8,d10,h1,c11,s9,s5,d5,s12,c10,h9,c9,s6,h7,s13,d2,c4,d9,s2,c13,c7,c8,d4,h3,h10,d8,h13  
**483/1000: solving: solved in 61786 tries.**  
s4>h4,d3>d12,s10>s11,c1>c12,c1>d1,h8>h5,d6>d7,d13>d6,c2>c1,s1>s3,h11>h8,d11>h11,d11>d3,d13>d11,h2>h6,h12>h2,s5>s9,d5>s5,d5>d10,c9>h9,s6>s12,c9>c10,s13>s6,c13>c4,c13>c9,c13>s13,c13>c11,d9>d2,c7>h7,c7>c13,d8>d4,d8>d9,d8>d5,d8>s8,h1>h12,c8>d8,c8>c6,c7>c8,c7>s7,c7>c5,c3>c7,h3>c3,h1>h3,h1>s1,h13>h1,h13>d13,s2>c2,h10>h13,s10>h10,s10>s4,s2>s10,

s6,s12,c11,c7,c3,d10,s8,h10,d4,c1,c10,h9,c12,h7,c5,c6,d12,s1,h8,s5,d6,h2,d7,c9,s7,s4,d13,h12,h4,h1,d8,d9,c4,c13,d3,d5,c2,h6,s9,s11,d2,s13,s2,s10,h5,c8,s3,h3,h11,d1,d11,h13  
**484/1000: solving: solved in 58804 tries.**  
s12>s6,c7>c11,c3>c7,s8>s12,h10>d10,c1>c3,c10>c1,h10>c10,c6>c5,d12>c12,h8>h7,s5>s1,s4>s7,d13>d7,h4>h12,h4>s4,h4>h2,h1>h4,d9>d8,d9>c9,d9>d13,c13>c4,d5>d3,s11>s9,d2>c2,d2>d5,s13>s11,s13>c13,s2>s13,d2>s2,h6>h1,h6>c6,h6>h9,d6>d12,d6>h6,d6>d4,d9>d6,s3>s10,h3>s3,h11>h3,h5>s5,d1>d2,d11>d1,d11>d9,h11>d11,h11>h10,h8>h11,c8>s8,h8>c8,h5>h8,h13>h5,

s3,h4,d10,d9,c10,c3,h13,d3,c5,h8,d7,c6,s12,h5,s2,d4,c2,c12,s13,d6,s7,h11,s8,h3,h2,d12,d2,s6,d1,c4,h6,c9,h9,s9,c8,c13,h10,d5,h1,d8,s11,h12,d11,s1,h7,c11,c1,d13,s10,c7,s5,s4  
**485/1000: solving: solved in 6632 tries.**  
d9>d10,c3>c10,c3>s3,h8>h13,c12>c2,s13>s2,h2>h3,d2>d12,d2>h2,h6>s6,h6>h11,d1>d2,c9>c4,h9>c9,h9>h6,s9>h9,s9>s7,s8>s9,c13>c8,d5>d1,h1>h10,d8>d5,d8>s8,d8>d6,s1>s11,s1>h1,c1>c11,d13>d11,d13>c13,d13>d8,d13>s13,d4>d13,c12>s12,c12>c6,h12>h5,h12>c12,s10>s1,h7>h12,h7>d7,d4>d3,h7>h8,d4>h4,c7>c1,c7>h7,c7>c3,c5>c7,s5>s10,s5>c5,s4>s5,d4>s4,d9>d4,

s3,d12,c13,s9,h10,h3,c10,d1,d3,c12,h11,c11,d10,h8,c9,s12,c1,s8,s7,h1,s6,h12,d2,h4,c4,s5,d5,c2,c5,h7,c7,s1,s2,h5,c8,c3,h9,c6,s13,d9,d11,d7,d8,s10,h6,s4,h2,s11,d4,d13,h13,d6  
**486/1000: solving: solved in 4536 tries.**  
s9>s3,h3>h10,d3>d1,c11>h11,c11>c12,d10>c10,d10>d12,d3>h3,s7>s8,c4>h4,d5>s5,c2>d2,c4>c2,c5>d5,c5>c4,c7>h7,c7>c5,s1>s6,s1>h1,s1>s7,s1>c1,s1>s12,h12>h8,c8>c7,c3>c8,h9>h5,c6>c3,d11>d9,d7>d11,d4>s4,h13>h2,d13>d4,d13>d8,h13>d13,h13>h9,s13>h13,s10>s2,s11>s13,s11>s1,s11>c11,c6>c9,s10>s11,h6>h12,c6>h6,c6>c13,d6>d7,d6>c6,d3>d6,s10>s9,d10>s10,d3>d10,

s7,h10,d9,h7,d6,d13,c7,h13,c10,h11,d10,d7,d3,h3,c3,c4,c6,c5,s2,h9,s9,s10,s6,h4,c12,s3,h5,s1,s5,s13,d5,h8,h12,s11,s12,h1,c13,c8,c9,s4,c11,d1,d11,s8,c1,d2,h6,h2,d12,c2,d4,d8  
**487/1000: solving: solved in 305 tries.**  
h7>s7,h10>h7,d6>d9,d13>d6,h13>h10,d13>h13,c10>c7,d10>d13,c10>d10,d3>d7,h3>d3,h3>h11,c3>h3,c3>c10,c4>c3,c6>c4,c5>c6,s9>h9,s9>s2,s10>s9,s6>s10,c12>c5,s5>s1,s5>h5,s5>s3,s13>s5,h8>h4,h12>h8,s12>s11,s12>h12,s12>s6,s12>c12,s13>s12,c13>s13,c8>c13,c9>c8,d1>h1,d1>d5,c11>c9,d11>c11,d1>d11,c1>d1,s8>s4,h2>h6,d8>d12,d8>s8,c2>h2,c2>c1,d2>d8,d2>c2,d4>d2,

h7,s7,s5,s8,c12,d10,h1,d2,h11,c13,s3,s13,d3,d6,c8,d9,c1,c7,c4,d13,s12,d11,d7,c3,h10,d12,c9,c10,d1,s9,c6,d5,h5,h4,s11,c5,c2,h3,s4,h2,h8,d8,c11,s6,h9,d4,h12,h13,s1,s2,h6,s10  
**488/1000: solving: solved in 21189 tries.**  
s7>h7,s5>s7,s8>s5,s13>s3,s13>c13,d3>d2,d6>d3,c7>c1,c4>c7,d7>d11,d12>d7,d12>s12,d12>d13,c10>c9,c10>h10,c10>c3,c6>c10,h5>d5,h4>h5,c2>c5,h3>h4,h8>h2,d8>h8,c11>c2,c11>s11,s4>s9,d4>d8,d4>s4,d4>d1,d4>c4,d4>d9,c6>c8,c6>d6,c6>c12,h11>h1,d4>d10,d12>d4,h9>h3,h12>h9,h12>d12,h11>h12,c11>c6,h11>c11,h13>h11,s13>h13,s1>s8,s2>s1,s13>s2,s10>s13,s6>s10,h6>s6,

h3,c5,h9,h12,c10,c2,h7,c7,s1,h10,c3,h2,h5,d2,h1,s6,c1,d4,d10,s10,s2,s12,d11,d12,d6,d9,s4,s11,s3,s7,s8,d7,s5,d13,c11,c13,c8,c12,c9,h13,d8,s9,d5,h4,c6,d3,h11,s13,d1,c4,h8,h6  
**489/1000: solving: solved in 25297 tries.**  
h12>h9,c2>c10,c7>h7,c7>c2,h10>h12,h5>h2,d10>d4,s10>d10,s2>s10,s12>s2,d12>d11,d12>s12,d6>d12,d9>d6,s4>s6,s11>s4,s3>s11,s7>s3,s8>s7,d7>d9,s5>s8,s5>h5,c1>h1,c1>c3,c1>s1,c1>c7,s5>c5,d7>d2,d13>d7,c13>c11,c13>d13,c8>c13,c12>c8,c9>c12,s9>c9,h13>h10,d1>d3,d1>d5,d1>c1,s9>s5,d8>d1,h8>h11,h8>d8,h8>h3,h4>h8,s13>s9,h13>s13,h13>h4,h6>h13,c6>h6,c4>c6,

s7,c11,d3,s1,d8,s11,h3,s5,s3,c6,d7,h8,c7,s2,s10,d4,s8,s9,d9,d5,s6,c3,c2,h2,c12,d10,s4,d11,c4,c10,s13,h9,c13,c1,d13,c5,h4,h6,h10,h1,d6,d1,d2,h5,h13,d12,s12,h12,h11,h7,c8,c9  
**490/1000: solving: solved in 3978 tries.**  
s1>s7,d8>d3,s11>s1,c11>s11,s3>s5,s3>h3,c6>c11,h8>d8,c7>d7,c7>c6,s2>s3,s10>s2,s8>h8,s10>s8,d9>s9,d9>d4,d5>d9,c2>c3,h2>c2,c10>c4,c10>d10,c10>c12,s4>s6,c1>c13,d13>s13,d13>d11,h9>h2,c5>c1,h6>h4,h10>h6,h10>c10,h10>h9,h10>s10,c5>d5,d1>d6,d1>h1,d1>d13,d2>d1,d12>d2,s12>d12,s12>s4,h5>h10,h12>h13,h12>s12,h11>h12,h7>h11,h7>c7,h5>h7,c5>h5,c8>c5,c9>c8,

s12,d8,d12,s13,c8,s7,d2,d5,s1,s8,c2,s6,c3,s4,h3,h9,h7,c9,s3,h13,s10,d13,d1,h12,s2,c4,c6,d6,h2,h4,d10,s11,h6,s5,c10,d7,h10,h5,d4,c13,c11,c1,c7,h11,c5,s9,c12,d11,h8,h1,d9,d3  
**491/1000: solving: solved in 1247 tries.**  
d12>d8,d12>s12,d5>d2,s8>s1,s8>c8,s8>s13,s7>s8,s6>s7,c3>c2,s4>s6,h3>c3,h9>h3,h7>h9,h13>h7,s10>s3,d13>h13,d13>d5,s10>s4,c6>c4,d6>c6,d6>d1,h2>s2,h2>h12,h4>h2,h6>h4,h6>d6,d10>d13,d10>s10,d10>d12,s5>s11,c10>c9,c10>d10,h10>h6,h10>c10,h5>h10,s5>h5,d4>d7,c11>c13,c5>c1,c5>s5,c12>c7,c12>c5,h1>h8,d9>s9,d3>d9,d3>d4,d11>d3,c11>d11,c11>c12,h11>c11,h1>h11,

h11,d1,c10,d11,h6,s11,h5,d2,c2,h3,s8,d10,s9,s12,h10,c4,d3,d6,d4,d9,h2,d8,s4,h1,c9,d12,c6,h9,h13,s10,h4,c8,s13,s3,d5,c3,c12,s5,s6,c7,h8,s1,c13,c11,c1,c5,h12,s2,s7,d7,h7,d13  
**492/1000: solving: solved in 3688 tries.**  
d11>h11,d1>d11,c2>d2,s12>s9,d6>d3,d4>d6,d4>c4,d4>d10,d9>d4,h2>h10,d8>d9,d8>s8,h2>h3,h2>c2,h2>h5,s12>s11,s4>s12,d12>d8,c6>c9,h13>h9,s13>s10,s13>h13,h4>h1,h4>s4,h4>h6,h2>h4,d12>d1,c3>c8,s3>c3,s3>s13,c12>c6,c12>d12,c10>c12,s5>d5,s5>s3,s6>s5,h8>h2,c7>c10,s1>s6,c1>s1,c13>c1,c11>c7,s7>s2,h7>h12,h7>h8,s7>h7,d7>s7,d13>d7,c13>d13,c13>c11,c5>c13,

s8,c10,s2,h1,s11,c12,c2,s6,d7,d10,c4,h10,c9,h4,h3,d12,c3,d9,h13,c1,s3,d3,d13,h11,d2,d1,s12,d4,c8,h8,c13,s10,s13,d5,h5,d8,s7,s9,d6,s5,c7,h2,s4,c5,c6,d11,c11,h6,h9,h12,h7,s1  
**493/1000: solving: solved in 31281 tries.**  
c2>c12,c2>s2,c2>c10,s11>s8,s6>s11,d10>d7,c4>c2,h10>d10,h10>h1,h4>c4,h10>h4,c3>c9,h3>c3,h3>h10,d9>d12,d3>s3,d3>d9,d3>h3,d13>d3,h13>d13,d1>d2,h8>c8,s13>s10,s13>c13,s13>s12,h5>d5,h5>h8,s9>s7,h6>c6,h6>h2,h6>d6,h6>h5,s4>s9,s4>d4,s4>s13,s5>s4,d11>d8,d11>d1,d11>h11,c5>s5,h9>h6,h12>h9,h7>h12,c11>c5,c11>d11,h7>h13,c7>h7,c1>c7,s1>s6,c1>s1,c11>c1,

h12,h3,c8,h11,d10,h10,s11,c5,d7,s5,s8,d12,s4,c11,h7,s12,d2,h5,c2,c7,c10,h4,c3,d11,h8,h6,h9,h13,s10,c13,d9,s3,s13,c1,h1,s7,s9,c9,d13,d5,d8,c12,d6,c4,d3,s6,s2,s1,h2,c6,d4,d1  
**494/1000: solving: solved in 101725 tries.**  
h3>h12,h10>d10,h10>h11,c5>c8,s8>s5,s12>s4,s12>d12,s12>s8,c11>s11,d2>d7,h5>h7,c2>d2,c2>c11,h5>h10,h5>c5,h5>h3,c10>c7,h8>h4,h6>h8,h9>h6,h13>h9,c13>c3,c13>h13,c13>c10,s10>s12,d9>d11,s3>s10,s13>s3,c13>s13,c13>c2,h1>c1,h1>h5,s9>s7,c9>c13,s9>d9,d5>d13,d8>d5,c12>c9,d1>d4,d1>s1,d1>d3,d1>d8,d1>h1,s6>s9,c6>c4,c6>c12,d6>d1,c6>d6,s6>c6,s2>s6,h2>s2,

h4,s9,c10,d9,d11,h2,c1,s6,d5,h10,d6,c11,s2,d2,c4,h5,s3,c7,h12,d10,d7,s12,d8,c12,s1,s10,c5,s11,h9,s13,c13,h6,c3,c6,s8,d4,c9,h8,d13,c8,c2,d12,h7,h11,d1,s7,h13,h1,h3,d3,s4,s5  
**495/1000: solving: solved in 80172 tries.**  
d11>d9,c1>c10,d5>d11,d2>s2,c7>c4,d7>d10,s12>s3,h12>s12,h12>h5,d7>d2,c7>d7,c7>c11,h12>h10,s10>s1,c13>s13,c13>c5,h6>h9,c3>c13,c6>h6,h8>s8,c9>c6,d13>d4,c8>c9,c2>c8,d12>d13,h13>h11,h1>h13,d3>d1,h3>h1,h3>h8,d3>h3,d3>c3,d12>d3,d12>d8,s11>s10,s7>s11,s7>c7,s7>s6,d12>d6,d12>h12,d12>d5,c12>d12,c12>c1,c2>c12,s7>s9,h2>c2,h7>h2,s4>h4,s5>s4,s7>s5,h7>s7,

d10,s4,c8,s2,d4,h2,d12,c6,s11,d11,s10,h5,h3,d8,c1,c12,h4,s7,s12,c9,s6,c3,s3,c7,h8,d9,s9,c2,s8,d5,s1,s5,h1,h11,d3,d7,h12,d13,c11,s13,h7,d2,h9,h13,c4,d6,c10,c5,d1,c13,h10,h6  
**496/1000: solving: solved in 4973 tries.**  
d4>s4,d4>d10,h2>s2,d12>d4,d11>s11,h3>h5,d8>d11,d8>c8,d8>d12,h3>h2,c12>c1,s7>s10,s12>s7,c12>s12,c12>c6,s3>c3,s3>s6,s9>d9,s9>s3,s9>c9,c7>c12,s8>s9,h8>s8,h8>h4,h8>d8,h3>h8,c2>c7,s5>s1,s5>d5,h1>h3,h11>h1,d7>d3,h13>h9,h13>s13,h13>h12,d13>h13,h7>d7,h7>h11,c11>c2,c5>c4,c5>s5,c5>c11,d1>d2,d6>d1,c10>c5,c13>c10,d13>c13,d6>d13,h6>h10,h6>d6,h6>h7,

c8,h1,s10,h5,h7,s6,d10,d8,s4,h10,c1,s1,c4,c7,d6,c13,s8,s9,c9,s12,d2,h12,c10,s13,c2,d13,c3,d9,s3,s7,h9,d4,d1,c12,c11,h11,h3,d12,d5,s5,c5,d7,h13,d11,h6,s2,s11,c6,h2,d3,h4,h8  
**497/1000: solving: solved in 13452 tries.**  
h7>h5,d10>s10,d8>d10,s4>s6,s1>c1,c4>s4,c7>c4,c7>h7,c7>c8,s1>h1,s9>s8,c9>s9,c9>c13,d2>d6,h12>s12,h12>h10,c10>c9,c2>d2,c10>c2,d13>s13,d13>d8,c3>c10,d9>d13,s3>c3,s3>s1,s7>s3,s7>c7,h9>h12,h9>d9,d1>d4,c11>c12,h11>c11,h3>h9,d5>d12,s5>d5,c5>s5,d7>d1,s11>d11,s11>h11,h6>h13,c6>c5,s2>s11,s2>s7,h6>c6,h2>h6,h2>s2,d3>d7,h4>h2,h8>h4,h3>h8,d3>h3,

s2,c11,h8,c12,c4,d11,c6,d5,c3,d10,h4,c7,c5,d13,h12,s7,h1,s6,d8,s9,h9,d6,h11,c9,c2,c8,d4,h2,s1,d9,h7,s11,h13,s13,d2,h6,s12,d1,h5,h3,d7,s3,s10,s4,c10,h10,s5,d3,s8,c13,d12,c1  
**498/1000: solving: solved in 76896 tries.**  
c4>c12,d11>c11,c6>c4,d5>d11,c3>c6,d10>d5,c5>c7,h12>h4,h9>s9,h9>h1,d6>d8,d6>s6,d6>d13,h11>h9,c2>c9,c8>c2,h2>h11,s11>s1,h13>h7,s13>h13,d1>d2,s12>s13,h5>h6,d7>d1,h3>h5,s3>h3,s10>s3,s4>s12,s4>d4,s11>s4,s10>s11,c10>s10,c10>c8,h10>c10,h10>h2,d12>d3,d12>d9,d12>d6,d7>d12,s7>d7,s8>s7,h10>h12,h10>d10,h8>h10,s8>h8,s8>s2,s5>s8,c5>c3,c5>s5,c13>c5,c1>c13,

h3,h4,s12,c9,d12,s13,c11,d4,h7,d7,s3,c12,s7,d3,d5,d9,s8,c4,c7,s10,c8,d10,h5,s5,h11,h13,d2,h2,h9,d8,s6,s9,d11,h6,h12,d6,s2,c6,c10,h10,h1,s1,c2,c5,c3,s11,c13,c1,h8,d13,s4,d1  
**499/1000: solving: solved in 63771 tries.**  
h4>h3,s13>s12,d7>h7,d7>d4,c12>c11,c12>d12,c12>c9,s3>s13,s7>d7,d3>s3,d5>d3,d9>d5,s8>s7,c7>c4,c8>s8,c8>c12,c7>c8,d10>s10,s5>h5,h13>h11,d2>d10,h2>h13,h9>h2,d8>d2,s9>s6,s9>h9,s9>s5,s9>d9,d11>d8,d6>d11,h6>d6,h6>h4,h12>h6,c10>c6,h10>c10,s1>s2,h1>h10,c2>c7,c5>c2,d13>c13,c1>c3,c1>c5,s1>c1,s4>s11,s4>s9,s1>s4,h1>s1,h8>h12,h1>h8,d1>d13,d1>h1,

h6,h7,d13,h2,d9,s5,s3,d6,s12,h13,d1,d3,c6,s11,d4,h10,c11,s8,d2,c12,s13,c7,c2,h3,d5,s2,s10,h12,h8,d8,d11,d12,s6,d7,c1,s9,c3,h11,d10,h1,s4,c5,c8,c9,c13,s1,h5,c4,h4,h9,s7,c10  
**500/1000: solving: solved in 18240 tries.**  
h7>h6,s3>s5,d1>d6,d3>d1,d3>s3,d3>d9,h13>h2,h13>d13,h13>h7,c11>s11,c11>c6,d4>d3,s8>s12,c12>c11,c2>c7,s2>c2,s2>s13,s2>d2,s2>s8,h3>h10,h12>h3,h12>c12,h12>h13,d8>h8,d11>d8,d12>d11,s9>s6,c3>c1,d10>d7,d10>s10,d10>d5,d12>d10,d12>h12,d4>d12,s9>s2,h1>h11,c5>c3,c8>c5,c9>c8,s1>h1,s4>s1,h9>h5,h9>c9,c4>c13,h4>h9,s4>h4,s7>s9,s4>s7,s4>d4,c4>s4,c10>c4,

c12,h7,h10,d1,h5,d4,d6,c5,s9,h12,d7,c10,c7,d11,s13,s1,h13,d3,d13,c2,d9,c9,c1,s4,h1,s5,c3,s12,d2,h3,c13,h11,c4,s8,s7,h9,s2,c8,s6,h6,c11,h2,h4,d5,s3,d8,s10,d10,s11,d12,c6,h8  
**501/1000: solving: solved in 16537 tries.**  
h10>h7,d6>d4,c7>c10,c7>d7,c7>c5,s13>s9,s1>s13,d13>d3,d13>h13,d13>d11,c9>d9,c9>c2,c1>c9,c1>s1,c1>c7,c1>d1,h1>h12,h1>c1,h1>h10,h5>h1,d13>d6,s5>s4,h3>c3,h3>h5,s12>s5,s12>c12,d2>d13,h11>h3,c4>c13,s7>s8,h6>s6,h6>h9,c11>c8,h4>h2,d10>s10,s11>s3,s11>c11,s11>s7,s11>h11,h4>c4,h6>h4,s2>s11,d2>s2,d8>d2,d10>d5,d12>d10,d12>s12,d8>d12,h8>d8,h6>h8,c6>h6,

c2,s6,d7,h7,d11,c11,h12,d2,c8,c12,c4,h13,s5,s3,s8,d5,h5,s9,d6,d9,h1,s4,d12,c7,d4,s2,h6,s7,h8,c9,d10,s10,s13,h10,s11,h2,s12,c3,c10,c6,h9,d1,h4,d3,h3,d13,s1,h11,c1,c13,d8,c5  
**502/1000: solving: solved in 190934 tries.**  
h7>d7,c11>d11,c11>c2,h12>h7,c12>c8,c4>c12,h13>h12,s3>s5,s8>s3,d5>d2,h5>d5,h5>h13,c4>c11,s9>s8,d6>s6,d9>s9,d12>d9,s2>s4,s7>c7,s7>s2,d4>d12,d4>c4,d6>d4,h1>h5,h6>d6,h1>h6,s10>d10,s10>s7,h10>h8,h10>s10,h10>h1,s12>s13,s11>s12,c6>c10,h9>h2,h9>h10,c9>h9,c6>c9,d3>c3,d13>d1,h11>h4,h11>s11,h3>h11,d3>h3,c1>s1,c1>c6,d8>d3,d13>d8,c13>d13,c13>c1,c5>c13,

s3,c11,s6,s4,d6,s9,c12,h10,c13,c5,s8,s2,s11,h11,h7,c7,c10,d8,d12,d5,d10,c3,s5,h13,h9,h5,h2,d1,c8,d7,d11,h4,d2,c1,h12,d9,s10,h8,h3,d13,c9,h1,s1,s12,d4,s13,s7,d3,c6,c2,c4,h6  
**503/1000: solving: solved in 436309 tries.**  
s4>s6,c5>c13,s2>s8,s11>s2,h11>s11,h7>h11,c7>h7,c7>c5,c10>c7,c10>h10,c10>c12,d8>d6,d12>d8,d5>d12,d10>c10,s5>s9,s5>d5,s5>s4,c3>c11,c3>s3,h9>h13,h5>h9,h2>h5,d11>d7,d9>d2,h1>h3,h1>h12,h1>h4,h1>d1,d9>d11,c1>h1,c8>c1,d9>d10,h8>h2,c8>h8,c9>c8,s7>s12,s13>s1,s7>s10,s7>s5,c9>c3,s13>s7,d3>d9,d13>d3,d13>s13,d4>d13,c4>d4,c2>c9,c4>c2,c6>c4,h6>c6,

c11,h7,s4,h10,s9,d2,d3,c9,c3,h2,s8,h4,c2,h12,d7,c1,s10,d11,h5,h13,s5,s2,d1,s7,c8,s1,d5,h11,s12,s6,h6,c10,d6,d10,h3,c6,d8,d4,c4,s11,c7,c13,d13,c12,h9,d9,s13,h1,s3,d12,h8,c5  
**504/1000: solving: solved in 313679 tries.**  
d3>d2,c3>c9,c3>d3,h2>h10,c2>c3,h12>h4,d11>d7,h13>h5,s2>s5,s1>d1,s1>s2,s1>c1,s1>s8,s10>s1,s6>s12,h6>s6,h6>h11,c10>c8,d6>h6,d6>d5,d10>d6,d10>c10,d10>d11,c13>c4,c13>c6,d9>d13,d9>d4,c12>c7,s13>s11,s13>c13,s13>h13,s13>s10,s7>s13,d9>d10,h8>h1,h8>d8,h8>h12,h9>d9,h9>h8,h9>s9,h9>h7,s3>s7,s3>s4,h3>s3,h3>h9,h2>h3,c2>h2,c2>c11,c5>c2,c12>c5,d12>c12,

s2,d11,h8,s3,c4,c2,s10,d2,h5,d7,s1,h10,h1,s9,d4,s7,c1,c6,s6,h2,c10,c11,d8,h4,c9,d1,c7,h11,c8,s11,h9,s12,d10,d6,c12,s4,c13,d3,d9,h6,d12,c3,h3,s13,h13,d13,h7,d5,s8,s5,h12,c5  
**505/1000: solving: solved in 868 tries.**  
s3>s2,c2>c4,h10>h5,h1>s1,d4>d7,s7>s9,c6>c1,s6>c6,s6>s7,c11>c10,h4>h2,h4>d4,h4>h10,h1>h4,s6>s10,d8>d2,d8>h8,d8>d11,s6>s3,c9>c11,h9>h11,h9>c9,h9>h1,d1>d8,c8>c7,s12>s11,d6>d10,c12>c8,s12>c12,d3>d6,d9>d3,c3>c13,h3>c3,h6>h3,d12>d9,d12>s12,h6>h9,h6>s6,s13>s4,h13>s13,s5>s8,h12>h7,h12>d12,h12>h6,h13>h12,d13>h13,d1>d13,c5>c2,d5>c5,d5>d1,s5>d5,

h2,d12,d1,c3,d13,s9,c12,s13,h13,c8,h9,h1,c2,h11,c13,s2,s8,s12,d11,c5,d8,s4,d4,h6,h3,c4,s11,h10,c10,h4,c6,c11,d10,d6,s1,h7,d2,c7,s10,s5,s7,d5,s6,d3,s3,c1,h8,c9,d9,d7,h12,h5  
**506/1000: solving: solved in 35265 tries.**  
d1>d12,c12>c3,s13>s9,s13>d13,h13>s13,h13>h2,c8>c12,h9>h13,h1>h9,d1>h1,c2>c8,s2>c2,s8>s2,s12>s8,d4>s4,d4>d8,h3>h6,c4>c5,d4>c4,d4>d11,h3>h11,c10>h10,c10>c13,c11>c6,d6>d10,d2>d6,c7>h7,c7>c11,s10>s1,s5>s10,s6>s5,s7>s6,d3>d2,s3>d3,s3>s11,s3>h3,s3>s12,d4>d1,h4>d4,s7>s3,c1>c10,c7>c1,c7>s7,h8>h4,d9>c9,d7>c7,d5>d7,h12>h8,h5>h12,d5>h5,d9>d5,

s3,c10,h6,d11,d6,h8,d4,d2,s9,c3,s4,c12,c5,d12,h2,s6,s10,s12,s11,d5,d7,d1,c9,d8,d10,d3,h5,d9,c2,d13,h9,c6,s8,c7,h3,c4,h13,h4,h1,c1,s13,c11,h7,h10,s1,h11,c8,c13,s2,s5,s7,h12  
**507/1000: solving: solved in 84328 tries.**  
d6>d11,d6>h6,d2>d4,c5>c12,s10>s6,s12>s10,s11>s12,d5>d12,d5>c5,s11>s4,d1>d7,d10>d8,d3>d10,d9>c9,d9>d1,d3>d9,h5>d5,h2>h5,d3>c3,c2>h2,d13>d3,h4>h13,h4>c4,h4>h3,h1>h4,c1>h1,c1>c6,h7>c7,h7>h9,s13>s8,h11>c11,s2>s1,s2>s13,s2>c2,s2>s9,s2>d2,d13>d6,s11>s2,h11>s11,c13>c1,h10>h11,h10>c10,c13>d13,c8>c13,h8>c8,h8>h10,s5>s3,s7>s5,h7>h8,h7>s7,h12>h7,

h6,c6,s8,d4,d8,c10,s2,d3,c1,d12,h13,c7,c3,d11,h7,c13,h2,d10,h5,h9,s13,d5,h4,s9,c5,h11,s1,c2,d9,s3,h12,h8,c8,d1,s6,h3,s5,h1,d13,s11,d2,d7,s12,c11,s4,s7,h10,c9,c12,s10,d6,c4  
**508/1000: solving: solved in 59457 tries.**  
c6>h6,d8>d4,d8>s8,d3>d8,c7>c1,c3>c7,c3>d3,c3>c6,c10>c3,c13>h13,c13>c10,d11>d12,h2>h7,h9>h5,d5>d10,s9>h9,s13>s9,h4>h2,s1>s13,h8>h12,c8>h8,c8>c2,h3>s3,h3>h11,d1>d9,s5>s6,s7>s12,s7>s11,d7>d13,d7>d1,s7>d7,s5>s7,s5>c5,s5>s1,s5>d5,c9>c11,c4>c12,c4>c9,c4>c8,c4>h4,c4>c13,h1>h3,s4>s5,d2>d11,s4>c4,h10>h1,s10>h10,s10>s4,s2>s10,d2>s2,d6>d2,

d13,c2,h6,c12,d12,s11,c6,s9,h7,h8,s3,d8,d2,s8,c5,s4,s10,s7,s2,h10,s13,c11,s6,h5,h11,d9,d6,c13,s5,s12,d4,s1,c7,d1,d10,d5,h2,c9,h4,d3,h1,c8,h12,h3,d11,d7,c1,c4,c10,c3,h13,h9  
**509/1000: solving: solved in 26967 tries.**  
d12>c12,d12>d13,c6>c2,h6>c6,s9>s11,h8>h7,d2>d8,s8>h8,s8>s9,s3>s8,d2>d12,s10>s4,s7>s10,s2>s7,h11>h5,d6>d9,s12>s5,d4>d6,s1>s12,d10>d1,d5>d10,c9>c7,h4>h2,h3>h12,h3>d3,h3>h4,h1>h3,h1>s1,c1>c8,d7>d5,c1>h1,c4>c9,c4>d4,c4>c11,c13>c4,c13>s13,s6>s2,c13>c5,s6>h6,s3>s6,h11>h10,c10>c1,c3>c10,c3>s3,c13>c3,d7>d2,h13>c13,d11>d7,h11>h13,h11>d11,h9>h11,

h13,c11,s5,c2,d8,h6,d9,c3,s6,c5,c4,h1,c13,s10,c1,d11,c10,h4,d6,d10,c8,c12,h11,d3,d2,s9,s3,s13,h3,s11,h5,d4,d7,s12,s4,h9,d1,h12,h8,s1,d12,s8,d13,s2,c7,c6,h2,h7,s7,c9,d5,h10  
**510/1000: solving: solved in 149753 tries.**  
s6>h6,s6>s5,d9>d8,c5>c3,c4>c5,c1>h1,c1>c4,c13>c1,d11>d9,d11>c11,c13>c2,c13>h13,s10>s6,c10>s10,d6>d11,d10>d6,c10>d10,c10>c13,c12>c8,d2>d3,s3>s9,s13>s3,h3>h11,s11>s13,h5>h3,d7>d4,s4>s12,d1>d7,h12>h9,s8>h8,s2>s1,s2>s4,s2>d2,h7>h2,c9>c6,s7>c7,s7>s8,s7>s11,d5>d13,d5>d1,d5>h5,s7>s2,d12>d5,h7>s7,h10>h7,h10>h4,h12>h10,c12>h12,c9>c10,c12>c9,d12>c12,

s3,d11,s5,d8,c13,d13,s2,c8,c3,h8,d7,c1,d2,h3,h1,s11,d3,c7,d9,h7,d5,c12,s13,s1,h5,h6,s4,s10,h11,d10,s6,d12,d4,h2,d1,c11,s9,s12,h12,s8,s7,h9,c9,c6,d6,h4,c2,c10,h13,c4,h10,c5  
**511/1000: solving: solved in 121540 tries.**  
d13>c13,d13>d8,c3>c8,c1>c3,d2>d7,d2>s2,d2>d13,h3>h8,h1>h3,h1>c1,s11>s5,s11>d11,s11>s3,s1>s13,h5>d5,h5>h7,c12>c7,s10>s4,s6>s10,s6>h6,s6>s1,d12>d10,d4>d12,s8>s9,s7>s8,s12>s7,h12>s12,h12>h2,h9>h12,c9>c11,d6>d1,c6>c9,c6>d6,h4>d4,h4>h5,c6>s6,c2>c6,c2>c12,c2>d2,d9>d3,h9>d9,h9>h1,h4>h9,h11>s11,c4>h4,c4>c2,h13>h11,h10>h13,c10>c4,c10>h10,c5>c10,

s12,h1,s8,s3,c13,c8,h7,h9,h13,c2,c11,d6,s7,d10,s5,c12,d1,h3,d3,d12,h2,c7,s6,c4,s1,d2,h11,d5,s11,d13,c10,d11,s10,h5,c9,s2,d9,c6,h4,c3,c5,d7,d4,h10,h12,h6,s4,s9,h8,s13,d8,c1  
**512/1000: solving: solved in 17181 tries.**  
s3>s8,c8>c13,h7>h1,h9>h7,h13>h9,c2>c8,c11>c2,s7>s3,d10>d6,s5>s7,d3>h3,d3>d1,d12>d3,d12>c12,d12>d10,c7>c11,d11>s11,d11>d5,d11>h11,d11>d2,d13>d11,c10>c4,s10>c10,s10>s6,s1>s10,d13>d12,d13>h13,s1>s5,h5>h2,c6>c9,c5>c3,d4>h4,d7>d9,h12>h10,h6>h12,h8>h6,s13>s9,d8>h8,d8>d7,d4>d8,c5>c6,c5>h5,c5>c7,s4>d4,s4>s2,s13>s4,s13>d13,s13>s12,s1>s13,c1>c5,c1>s1,

d6,c8,d3,h4,s12,s9,d9,h8,s1,d1,s4,c4,h3,h1,h9,c5,d4,d12,h13,d7,s3,h11,h6,s10,c2,d2,s8,s7,d13,d10,c10,s13,d8,h2,s11,h12,s2,c13,s6,c11,h5,c9,h7,c12,c7,s5,d5,c3,h10,d11,c6,c1  
**513/1000: solving: solved in 29766 tries.**  
s9>s12,d9>s9,d1>s1,c4>s4,h3>h8,h3>d3,h4>h3,d9>d6,d1>d9,c4>h4,c4>c8,h9>h1,d4>c4,d4>d1,d12>d4,h11>h13,h6>h11,s10>s3,d2>c2,s7>s8,s7>d7,s10>s7,d13>d2,d10>d13,d10>s10,c10>d10,s11>s13,h12>h2,c7>c12,c7>h7,c7>c9,c6>c3,c6>c7,c6>s6,c6>c13,c11>c6,s5>s2,s5>s11,s5>c5,h12>h6,d5>d8,d5>s5,h12>d12,h9>h12,h5>d5,h5>h9,h10>h5,c10>h10,c1>c10,c11>c1,d11>c11,

d11,h12,s10,c3,h9,s8,c12,d10,s12,h2,d9,c5,h13,s13,c1,h7,d6,c11,c7,s6,c13,c4,s11,d2,s5,h6,d1,s7,d8,s2,h4,d13,d5,d7,s3,s4,c10,h11,c6,h5,s1,h1,s9,h10,d12,c9,c8,d3,h3,h8,d4,c2  
**514/1000: solving: solved in 113677 tries.**  
h9>h12,s12>s8,c12>s12,c12>c3,h13>h2,s13>h13,s13>s10,d9>d10,d9>h9,d9>d11,c5>c12,c1>c5,c11>c1,c7>c11,h7>c7,d6>d9,s6>d6,s13>s6,c4>c13,s11>s13,d1>d2,d13>d8,d5>d13,d5>s5,d5>d1,h6>h7,s2>s7,h4>c4,h4>h6,s2>s11,d7>d5,s3>s2,h1>s1,c9>s9,h10>h5,c9>c6,h3>d3,h3>h1,h3>h11,h10>c10,h3>h10,d4>d12,d4>s4,d4>d7,h3>s3,c2>c9,c8>c2,h8>c8,h8>h3,h4>h8,d4>h4,

c8,d9,s10,s9,d6,s1,d10,s3,c3,h3,s4,d5,d12,d13,d2,h10,c6,h2,d1,h8,d4,s12,c12,h4,h9,s7,s6,c11,c1,c9,h6,c4,d8,d11,d3,h12,d7,h1,s11,c10,c13,c5,h11,h13,s8,c7,h5,s2,c2,s5,s13,h7  
**515/1000: solving: solved in 14436 tries.**  
s9>s10,s9>d9,c3>s3,h3>c3,s4>s1,d12>d5,d13>d12,d2>d13,h10>d10,h3>h10,d2>d6,c12>s12,h4>h8,d4>h4,d4>d1,c12>c6,s6>s7,c1>c11,c9>c1,h6>h9,s6>h6,c4>c9,d8>d4,d11>d8,d3>d11,d3>h3,c4>c12,c13>c10,c5>c13,h11>h1,s11>h11,s11>s6,h13>h12,s2>s8,h5>c5,c2>c7,s5>h5,s5>s11,s2>s5,s2>h2,s2>s4,s2>d2,s2>s9,c2>c4,d7>d3,c2>c8,s2>c2,h7>d7,h13>h7,s13>h13,s13>s2,

s11,s12,s7,d4,s1,h12,d8,c12,s13,s6,d2,h2,d11,c13,c10,h7,h8,h11,h10,s3,s9,d9,c2,h13,c7,s4,c6,d12,d10,d5,h1,s10,d3,s2,s5,d7,h9,c5,c3,h4,c1,h6,c11,d6,h3,h5,d13,d1,c4,c8,c9,s8  
**516/1000: solving: solved in 4680 tries.**  
s12>s11,s7>s12,d8>d4,c12>h12,s6>s13,h2>d2,c10>c13,h7>h2,h8>h7,h11>h8,d11>h11,c10>c12,h10>c10,s9>s3,d9>s9,d9>d11,d10>d12,d5>d10,d3>d5,s2>s10,s5>s2,d7>d3,d7>c7,d7>d9,c6>c2,c3>c5,h3>h6,h3>c3,h3>h9,h4>h3,h4>s4,h4>h13,h1>h4,c1>c6,h1>c1,h1>h10,d6>d7,d6>s6,d6>d8,h5>h1,s5>h5,s5>s7,d13>d6,d1>d13,s1>d1,s1>s5,c4>c11,c8>c4,s8>s1,c8>s8,c9>c8,

d11,c1,c10,s6,c13,h11,c11,h7,d9,h10,h9,c5,c3,c7,d2,s5,d5,h3,s4,d13,h1,s13,h13,d7,h8,d12,c12,h12,h4,s10,h2,c9,h5,s3,c6,s2,c8,s9,d4,c4,d1,s1,s12,d6,s8,d3,d8,h6,s11,d10,s7,c2  
**517/1000: solving: solved in 230168 tries.**  
c10>c1,c11>h11,c11>c13,c11>d11,c10>c11,h9>h10,h9>d9,h9>h7,c5>c10,c3>c5,c7>c3,s5>s6,d5>d2,d13>d5,h13>s13,h13>h1,h13>d13,h13>h9,h3>h13,h8>h3,d12>d7,c12>d12,h12>c12,h4>h12,h4>s4,h4>h8,c6>c9,s2>s3,s2>h2,s2>s10,h5>h4,s9>s2,s1>d1,s8>s1,h6>d6,d10>d3,d8>d10,s11>s12,s7>s11,d8>s8,d8>c8,d4>d8,c4>d4,s7>s9,s7>c7,s5>s7,h5>s5,h6>h5,c6>h6,c4>c6,c2>c4,

d10,s11,d11,d8,c2,s5,c8,d2,h7,h10,c10,c5,s9,c3,h2,s13,d12,d4,s6,c6,h6,s7,h11,s2,s1,s8,h1,c1,d5,d1,d9,h5,s4,h13,c7,d3,d7,h8,h4,d6,s3,s10,c12,s12,c9,c11,h3,h12,h9,c4,c13,d13  
**518/1000: solving: solved in 9138 tries.**  
d11>s11,d11>d10,d8>d11,c8>d8,c2>c8,h10>h7,c10>h10,c10>c2,c5>c10,s5>c5,h2>d2,d4>d12,c6>s6,c6>c3,h6>c6,s1>s2,s8>s1,c1>h1,d1>d5,d1>c1,d9>d1,h5>h11,d7>d3,d7>c7,d7>d9,d7>s7,d7>d4,h5>h6,h5>s5,h2>h5,s13>s9,s4>s8,h13>s13,h13>h2,h8>h13,d6>d7,h4>s4,s10>s3,s12>c12,s12>s10,h12>h3,h12>s12,h9>h12,h9>h8,c9>h9,c11>c9,c4>h4,d13>d6,c13>c4,c13>d13,c13>c11,

h6,s13,c10,d7,s1,h4,s7,d11,d10,c8,s6,d3,d2,s10,d13,d12,c9,h13,s11,h11,h1,d5,s5,d8,h8,h2,s2,c12,h3,c11,h10,d1,c6,c1,c13,c5,s8,d6,s3,h9,h5,s12,s4,c4,c7,c3,d9,c2,s9,h12,d4,h7  
**519/1000: solving: solved in 6959 tries.**  
s1>s13,d11>d7,d10>d11,d10>c10,h4>h6,d2>d3,d12>d13,h11>s11,h11>h13,h1>h11,d5>d12,s5>d5,s5>s10,h8>d8,h8>h1,h2>h8,h2>d2,s2>h2,s2>s6,s5>s2,c12>c9,c6>c11,c1>d1,c13>c1,c5>c13,h5>h9,s4>s12,c4>s4,c2>c7,c3>c2,c3>s3,c3>c5,c3>h3,c3>c12,c6>c3,s8>s5,s8>c8,s8>s1,h10>d10,d6>c6,d9>d6,d4>c4,h12>h5,h7>h12,h7>h10,s7>h7,s7>s8,s9>s7,d9>s9,d4>d9,d4>h4,

s7,h13,h8,s8,c7,h10,d6,h4,h7,d11,s12,h2,s13,c3,s3,s1,d3,d2,d9,d13,d12,h3,c1,c9,c13,d10,h1,s10,c12,h5,c10,d8,h9,h6,h12,c11,d1,s2,c8,c5,d5,d7,s5,c2,s4,h11,s9,c6,d4,s6,s11,c4  
**520/1000: solving: solved in 140 tries.**  
h8>h13,s8>h8,s8>s7,h7>h4,h7>c7,h10>h7,d11>d6,s12>s8,s3>c3,s3>s13,s1>s3,d3>d11,d2>d3,h2>d2,h2>h10,d13>d9,d12>d13,d12>s12,c9>c1,c13>c9,h1>h3,h1>s1,h1>h2,d10>d12,s10>d10,c12>c13,h9>h5,h6>h9,h12>h6,h12>c12,h12>h1,c8>c11,c8>d8,c8>c10,c5>c8,d5>c5,d1>d5,s2>s10,d7>d1,s5>s2,s6>s9,c6>s6,c4>c6,c4>c2,s4>c4,d4>d7,h11>h12,s4>d4,s11>s4,s11>h11,s11>s5,

c10,h12,c13,s8,c1,c7,c4,s11,s3,c2,h7,s7,d10,h13,s10,c11,d12,h4,d6,s2,c5,h2,c9,d8,s4,h9,s12,d2,h1,d1,c8,s6,d5,c6,d7,h8,d11,h11,d13,d9,d4,c3,d3,s13,h10,s5,h6,c12,h5,s9,s1,h3  
**521/1000: solving: solved in 25483 tries.**  
c7>c1,c4>c7,s3>s11,s7>h7,s10>s7,d10>s10,c11>c2,h9>c9,h9>h2,s12>s4,d1>h1,d1>d2,c8>d8,h11>d11,h11>h8,d9>d13,d4>d7,d3>c3,d3>d4,h10>h11,h5>s5,h5>h10,h5>d5,d9>d3,h6>c6,h6>h5,s9>d9,s1>s9,s1>d1,s1>s12,s6>s1,h6>h9,h6>d6,h6>h4,c8>c5,s13>s2,s13>h13,s13>s3,s13>c13,s8>s13,c4>c10,d12>d10,c8>c11,c8>c4,c12>d12,s6>s8,c12>c8,h12>c12,h6>s6,h6>h12,h3>h6,

c9,c10,h12,c4,s10,h8,h6,h10,h1,s2,h3,d9,c8,s7,s12,c7,d10,d13,h2,s1,c11,c1,c5,d7,d8,h7,c3,s4,d12,d4,h5,h13,d2,c6,c13,c12,d5,s13,d3,d11,d6,s11,s6,h4,d1,c2,s5,s3,s8,h9,h11,s9  
**522/1000: solving: solved in 182286 tries.**  
c10>c9,s10>c10,h6>h8,h10>h6,h10>s10,h12>h10,s12>s7,d13>d10,c1>c11,c1>s1,c1>c7,c5>c1,d8>d7,d4>d12,d4>s4,d4>d8,h13>h5,c6>c3,c13>c6,h13>c13,h13>h7,h13>d13,h2>h13,d2>d4,d2>h2,c12>s12,c12>c8,c5>c12,d5>d2,d5>c5,d3>d9,d11>d3,s6>s11,d1>d6,d1>d11,d1>h1,d5>d1,s6>s13,s5>s6,s5>d5,s2>s5,h3>h12,c2>c4,s2>c2,s3>h3,s8>s3,s2>s8,h9>h4,s9>s2,h9>s9,h11>h9,

c5,c9,c12,c1,c8,s6,c11,d5,c2,c10,h13,d10,d7,s5,c6,s3,s7,h7,h12,h11,h4,h10,c4,d12,s1,c3,s4,s11,d8,s8,h1,d4,s12,h5,h3,d1,d9,d11,s10,h2,d3,d13,d2,s13,c7,d6,c13,h6,h8,h9,s9,s2  
**523/1000: solving: solved in 1967 tries.**  
c9>c5,c12>c9,c1>c12,c8>c1,c10>c2,d10>d5,c10>d10,c10>c11,s7>s3,s7>d7,s7>s6,s5>s7,h12>h7,h11>h12,h4>h11,h10>h4,h10>c10,h13>h10,c6>c8,c4>c6,s1>s5,s11>s4,d8>d12,s8>s11,s12>s8,h3>h5,d1>h1,d1>d8,d4>d1,d4>c4,s12>s1,h3>c3,h3>h13,d9>d4,d11>d9,d3>h3,d13>d3,s13>s10,s13>d13,d2>h2,d2>d11,s13>s12,d6>d2,c13>c7,h6>d6,h8>h6,h9>h8,s9>h9,s2>s9,s13>s2,c13>s13,

d13,c6,s1,d11,h5,h11,s8,s6,s11,d8,c3,c12,c11,c5,h12,s4,c8,h6,h8,s2,h1,d6,d12,d1,h4,h9,h7,c13,d3,h3,s9,d9,s13,s3,d2,c4,d7,d10,d5,s7,s10,c1,c7,c2,s5,c10,h13,c9,d4,h2,h10,s12  
**524/1000: solving: solved in 56632 tries.**  
d11>d13,h11>h5,h11>d11,s8>s1,s6>s8,s6>c6,s11>s6,s11>h11,c12>c3,c11>c12,c5>c11,c8>c5,c8>d8,s4>s11,h6>h12,h8>h6,h8>c8,d12>d6,d1>d12,d1>h1,h4>h8,h4>s4,h9>h4,h7>h9,h3>d3,d9>s9,d9>d1,s3>s13,s3>h3,s3>s2,d10>d7,d5>d2,c7>c1,c2>c7,s5>s7,s5>d5,s5>s3,c4>c13,h2>h13,h10>h2,c9>c2,c9>c4,c10>c9,h10>c10,h10>h7,d4>d9,d10>d4,s10>d10,s10>s5,s10>h10,s12>s10,

s8,h6,c13,s3,c8,s7,h13,d3,d12,s10,c12,s5,h10,d7,h1,d1,c4,d2,s12,h12,h7,s11,d11,s6,c5,d8,d10,c11,s2,d6,c9,h9,d9,h2,s9,d4,s13,c6,d13,h4,s4,d5,h3,c3,h11,c7,c10,h5,c1,c2,h8,s1  
**525/1000: solving: solved in 1927 tries.**  
s3>s8,c8>c13,s7>s3,d12>d3,h10>s10,d1>h1,d1>d7,c4>c12,d2>d1,h12>s12,h7>h12,s11>s5,d11>s11,d11>d12,d2>d11,c5>c4,d10>d8,s2>s6,h9>c9,d9>h9,d9>d6,d4>d9,s13>s9,s4>h4,s4>s13,d5>d13,h5>h11,h5>d5,h5>h2,h3>h5,c3>h3,c7>c6,c10>c3,c10>d10,c10>c5,c10>h10,h7>h13,h7>s7,h6>h7,s4>d4,c1>c7,c2>c11,c2>s2,c2>c10,c2>d2,s1>s4,c1>s1,c1>c2,h8>h6,c8>h8,c1>c8,

c7,c10,h1,d11,h2,d2,s12,h11,c5,c2,s3,c1,d10,s11,c11,c8,d1,d9,d6,h13,d8,h3,c13,s7,c4,h12,h8,s2,s5,h5,h7,c9,c3,c12,s1,h9,h4,s13,h6,c6,d13,s8,s6,s4,h10,d3,s9,d7,d5,d4,s10,d12  
**526/1000: solving: solved in 26493 tries.**  
c10>c7,d2>h2,d2>d11,h11>h1,c2>c5,s11>s3,c11>s11,c11>c2,c11>h11,c11>c10,c1>c11,d9>d1,d6>d9,d8>c8,d8>d10,d6>d8,h3>h13,h8>h12,s2>s7,s5>s2,h5>h8,h7>h5,c3>c9,c12>c3,h9>h7,h4>h9,h4>c4,h4>h3,s13>s1,s13>c13,s13>s12,s5>s13,h6>d6,h4>h6,s6>c6,s6>s5,s4>s8,s4>h4,s4>s6,d13>d2,c12>c1,d3>d13,d5>d7,d12>d5,s10>s9,s10>h10,d12>d3,d12>c12,d4>d12,s4>d4,s10>s4,

d8,d1,s12,h5,c11,d4,d5,h1,s7,d7,h7,s11,s1,c12,d12,c2,d2,d9,h8,h12,s4,h3,s3,s13,s6,d6,h6,h9,s9,s10,c5,c3,h10,h2,h13,c7,c1,s2,s8,s5,c4,d10,h11,d3,c13,c8,d11,h4,c10,c6,d13,c9  
**527/1000: solving: solved in 572846 tries.**  
d1>d8,d5>d4,h1>h5,d7>s7,d7>d5,h7>d7,s1>s11,s1>h1,s1>s12,s1>d1,d12>c12,c2>c11,d2>d12,d9>d2,h12>h8,s3>h3,s3>s4,s13>s3,s6>s13,d6>s6,h6>d6,h6>h12,h9>h6,h9>d9,h9>h7,s9>h9,s10>s9,c3>c5,h2>h10,c7>c3,c1>c7,c1>s1,c2>c1,h13>h2,s2>c2,s8>s2,s5>s8,s10>s5,d10>s10,c8>c13,c10>c8,c6>c10,d11>h11,d11>d10,d13>d3,d13>d11,h13>d13,h4>h13,c4>h4,c6>c4,c9>c6,

s9,d6,c11,c4,s4,d7,s10,s8,c3,c8,d1,s6,h6,h2,c9,h12,s3,s11,c2,h7,c7,c12,s7,s12,c5,h8,d2,d12,h4,s5,d13,c1,s13,h10,s1,h9,h11,h13,h5,d5,c6,d3,d11,s2,c13,c10,d9,d10,h3,d4,h1,d8  
**528/1000: solving: solved in 120037 tries.**  
c4>c11,s4>c4,s8>s10,c8>c3,c8>s8,h6>s6,h2>h6,c9>c8,h12>h2,s11>s3,h7>h12,h7>d7,c2>c9,c7>c2,c7>h7,d1>d6,s7>c7,s7>s4,s11>s7,s12>c12,s12>s11,d12>d2,d12>s12,d12>d1,h4>h8,s13>s5,d13>s13,d13>d12,h11>h9,h13>h11,d11>d3,c13>c6,c13>h13,c13>c1,c13>d13,d11>d5,d4>d9,h1>h3,d8>d4,d8>d11,d10>d8,d10>h10,h5>h4,c10>d10,c10>c13,c5>c10,h5>c5,h1>h5,s1>h1,s1>s9,s2>s1,

d4,d13,h7,c3,c7,s9,h8,d5,c13,h6,s5,d3,h13,d7,s4,h2,s1,c6,d2,h4,d9,h3,c12,c2,h12,s13,d6,s6,h9,c9,s11,d12,h5,d1,h1,d10,h10,h11,s10,c5,s7,d11,s2,s8,c4,s3,d8,c11,c1,c8,c10,s12  
**529/1000: solving: solved in 5200 tries.**  
d13>d4,c7>c3,c7>h7,h6>h8,d3>d5,s4>s5,d2>h2,d2>d7,s1>s4,h4>h13,c12>c6,c2>c12,c2>d2,c2>c13,h12>h3,d6>d9,s6>s13,c9>h9,h1>d1,h1>h5,h10>d10,h10>h1,h11>h10,s10>s11,d11>h11,d11>d12,c5>c9,s2>s7,s8>s2,d8>s8,d8>d11,s3>s10,c4>c5,c10>c11,c1>c10,c8>c1,s12>s3,s12>h12,s12>s1,s6>s12,s6>h6,s6>s9,c2>c7,d6>s6,c4>h4,c4>c2,d3>d6,c8>c4,d8>d3,d8>c8,d8>d13,

s8,h2,d2,h5,s13,c1,d5,s9,s7,d3,s12,h13,c4,s6,h6,s10,h10,s3,d1,c9,h1,s11,h4,c11,h8,d12,d11,h11,d8,c12,d7,c2,c7,h9,s2,d6,d10,d4,c6,c10,s1,s4,h12,c13,h3,c8,d13,c3,h7,s5,c5,d9  
**530/1000: solving: solved in 168103 tries.**  
d2>h2,s13>s8,d5>d2,h5>d5,s9>s13,s7>s9,s6>s12,h6>s6,h6>h5,h13>h6,h10>s10,s3>d3,s3>s7,c4>c1,c9>c4,h1>d1,h1>h10,d11>d12,h11>d11,h11>h8,h11>c11,h11>h4,h11>s11,h11>h1,c12>c9,d7>d8,c2>c12,c7>c2,d6>d7,d10>d6,c10>c6,s1>s2,c13>c10,s4>s1,c8>c13,h3>h12,c5>c3,c5>c8,d9>d13,d9>d4,d9>d10,h9>d9,h9>h11,h3>h9,h3>s3,h13>h3,s5>s4,c5>s5,h7>h13,c7>h7,c5>c7,

c10,c12,c6,h7,h6,h11,s2,h2,h10,c9,c2,s3,c13,h4,h1,d7,s1,c7,c11,h12,s13,s7,d10,d2,d9,h3,c1,d6,d3,s8,d12,c3,s11,s6,d1,c5,s9,s12,c8,d5,d11,c4,h13,h5,d4,d8,s5,d13,h8,s10,s4,h9  
**531/1000: solving: solved in 6702 tries.**  
c12>c10,c6>c12,h6>h7,h6>c6,h11>h6,h2>s2,h2>h11,h10>h2,c2>c9,h1>h4,c11>c7,s13>s1,s13>c13,s13>s3,h1>h10,c11>c2,s7>s13,d7>s7,h12>h1,d10>d7,d2>d10,d9>d2,h3>h12,d3>d6,c3>d3,c3>c1,c3>h3,c11>c3,s6>s11,s9>s6,s9>d9,s8>s9,d1>d12,c5>c11,c8>s8,c8>c5,d11>d5,s5>h5,d4>c4,d4>d11,d13>h13,s10>s5,s4>s10,s4>s12,d4>s4,d4>d1,d13>d4,d8>d13,d8>c8,h8>d8,h9>h8,

h9,c10,s12,h1,s5,s13,c3,h4,d6,c4,s1,h3,s2,c2,h10,h2,s3,s10,c6,d13,s9,h5,s6,c1,h11,h13,h12,d3,d9,d7,s11,h7,d2,d10,d11,c5,d12,c9,c12,h6,d4,c11,h8,c13,c8,c7,s7,d8,s8,d5,d1,s4  
**532/1000: solving: solved in 3070 tries.**  
h1>h9,s5>s12,s13>s5,c4>c3,h4>c4,h4>h1,c2>s2,h2>h10,h2>c2,h2>h3,s10>s3,s9>s10,s6>c6,s6>s9,s6>d6,s6>s13,s1>s6,h2>h4,c1>s1,c1>c10,h5>h2,h11>h5,h13>d13,h12>h13,d9>d3,d7>d9,h7>h12,d7>h7,s11>h11,d2>d7,d10>d2,d11>d10,c12>c9,c12>d12,c12>c5,d4>d11,c8>c11,h8>c8,c13>c12,c7>c13,h8>h6,s8>h8,s7>s8,s7>c7,s7>s11,d5>d8,d1>c1,d4>d1,s4>s7,d4>s4,d5>d4,

s12,c7,c8,c9,d8,d11,d5,c13,c1,c4,h4,h8,s10,s9,h1,s8,h13,d1,s2,s13,h7,s11,d13,c6,h3,c2,c10,s6,s4,c12,h5,d7,s7,d3,s5,c3,s3,h11,h6,d9,h2,c11,c5,s1,d10,d6,h10,h12,d4,d2,h9,d12  
**533/1000: solving: solved in 322734 tries.**  
c8>c7,c9>c8,d11>d8,d5>d11,c1>c13,c4>c1,h4>c4,h8>h4,s9>s10,s9>c9,s9>s12,h1>h8,s8>s9,h13>h1,s13>s2,h7>h13,s11>s13,c10>c2,s6>c6,s4>s6,c12>c10,s7>d7,s5>h5,s5>s4,s7>s5,c3>d3,c3>c12,h2>h11,h2>h3,h6>h2,c11>c3,s1>s3,s1>s7,s1>d1,s1>s8,s11>s1,d6>d9,d6>d13,h6>d6,h6>h7,c11>s11,c5>c11,d5>c5,h10>d10,h10>h6,d4>d5,d2>d4,h12>h10,d12>d2,h12>d12,h9>h12,

h3,s5,d10,d13,c8,h13,s1,s8,h8,s10,c1,h12,c12,c6,d5,c7,d9,s2,h6,c4,s4,d4,s9,c11,d3,s3,h11,h10,d11,c2,d12,h5,c3,c10,c9,h9,s11,h1,d2,c5,s12,h2,h4,s7,d6,s6,s13,c13,d8,h7,d1,d7  
**534/1000: solving: solved in 2570 tries.**  
d13>d10,s8>s1,h8>s8,h8>h13,h8>c8,h8>h3,c12>h12,c12>c1,c6>c12,d5>d13,d5>s5,c7>c6,d9>d5,c4>c7,s4>c4,s4>s10,s2>s4,h6>h8,s9>d9,s2>s9,s3>d3,s3>s2,h11>c11,h11>h6,h10>h11,d11>d4,c3>c2,c10>c3,c10>h10,d12>d11,h9>c9,h9>h5,s11>s3,h1>h9,h2>d2,h2>h1,h4>h2,s12>d12,s12>s11,s7>s12,s6>d6,c13>c5,c13>c10,s13>s6,h7>h4,s13>c13,s7>s13,h7>s7,d1>d8,d7>d1,d7>h7,

s8,h2,d5,h7,c7,d8,c11,h11,s13,h6,d3,s6,c10,h5,h9,s11,d2,h4,c1,d1,d13,c9,d12,h13,s1,h10,s9,c4,c2,s4,d9,c6,s12,c13,c5,d11,h3,c8,s2,h1,h8,s7,d7,d4,d6,s5,d10,c12,h12,s10,c3,s3  
**535/1000: solving: solved in 9043 tries.**  
c7>h7,h11>c11,s6>s13,h6>s6,h6>h11,h5>h6,h5>d5,h5>h2,d8>s8,d3>d8,c10>c7,h4>h9,d1>c1,d1>d2,d13>d1,h13>d13,c2>c4,d9>s9,d9>d12,d9>c9,s1>s11,c5>c13,c8>c5,h8>h1,d4>d7,s5>s7,d10>d6,c3>c12,s3>c3,s3>s5,s3>h3,s3>s12,d4>d11,s2>s3,s2>c2,d4>s4,d4>d9,d4>h4,d4>d3,h13>h5,h10>h13,c6>c10,c8>c6,h8>c8,s2>s1,s10>s2,d10>s10,d10>d4,h10>d10,h8>h10,h12>h8,

s4,s6,d13,h10,d8,c2,h5,s12,s1,c5,h11,d5,c10,s13,c3,h12,c12,h13,s5,h2,d7,d9,c13,c7,h3,h6,d4,c11,c8,c9,d1,s3,d6,h7,s8,h4,d2,s11,c4,c1,d3,h1,d11,d12,h9,s7,c6,s10,s9,s2,d10,h8  
**536/1000: solving: solved in 97032 tries.**  
s6>s4,h5>h10,s1>s12,c10>c5,c12>h12,c12>c3,s5>s13,s5>d5,s5>s1,s5>h5,c10>c2,h2>h13,d9>d7,c13>c12,c7>c13,h6>h3,c8>c11,c9>c8,c9>d9,d1>d4,d6>h6,d1>d6,c4>h4,d12>d3,d12>d2,c1>c4,d11>d12,s11>d11,s7>s11,s7>h7,s7>s3,c1>d1,c1>c9,s7>c7,s8>s7,s9>h9,s2>s9,s2>h2,h1>c1,s10>s2,h8>h1,h8>h11,s8>h8,s8>s5,d8>s8,d8>d13,s10>s6,d10>d8,d10>s10,c10>d10,c6>c10,

d12,h12,h5,c3,h4,s9,h10,s7,h6,c1,d1,s11,s10,c2,h13,d4,h2,c4,s8,s2,c11,d10,d2,c13,d7,s3,d8,c5,s12,d9,d6,s5,s6,h11,s1,h7,h9,h1,d11,d13,s4,c6,d3,c9,d5,h8,h3,c10,c8,s13,c7,c12  
**537/1000: solving: solved in 412664 tries.**  
h12>d12,h5>h12,d1>c1,s11>s7,s10>s11,s10>h10,s10>s9,h13>h6,c4>c2,d4>c4,d4>d1,d4>h4,h2>h13,s2>s8,s2>h2,s2>s10,c11>c3,d2>d10,d2>s2,d2>d4,s12>s3,d6>d9,s6>s5,s6>d6,h9>h7,h1>h9,d11>h11,d13>d11,d13>d8,s4>s6,s1>s4,c6>c5,h1>s1,c9>c6,h8>h1,h3>h8,d3>h3,c12>c8,c7>c10,c7>c9,c7>d7,d13>c13,d5>d3,c12>c7,c12>c11,s12>c12,d13>d2,s13>s12,d13>s13,d5>d13,d5>h5,

h6,c7,s8,s5,c1,s2,d5,s7,c8,h11,s12,h8,c5,s4,c2,s6,d7,h5,d3,c9,s1,h12,d10,h7,s3,h9,c10,c3,d1,c13,h4,h2,d13,h10,d2,s10,s13,c4,c11,d8,c6,c12,d4,h1,d6,d11,d12,s9,h13,s11,h3,d9  
**538/1000: solving: solved in 5451 tries.**  
s5>s8,d5>s5,s7>s2,s7>c7,c8>c1,h8>c8,h8>h6,h11>h8,c3>c10,h2>h4,d13>d1,c13>d13,c13>c3,h10>h2,s13>s10,s13>c13,c11>c4,c12>c6,d11>d6,d12>d11,h13>h1,d12>c12,d12>d8,d4>d12,s11>s9,s11>c11,s11>s13,h13>h10,h3>h13,h3>s3,h3>h12,h3>d3,h3>h5,h9>h7,s11>s1,h9>c9,h9>h3,s11>s6,d2>d10,d9>h9,d2>d9,d2>c2,d4>d2,d4>s4,s11>s12,s11>h11,s7>s11,d7>d4,d7>s7,d5>d7,c5>d5,

h10,d8,s11,s4,h4,d13,d1,s5,c13,h2,h6,s6,c12,c3,d9,c5,h7,s7,s9,h3,s10,s12,s8,c10,h9,d5,s13,d3,d11,d6,c6,c7,d10,h11,d2,d4,c8,s2,c9,h5,c11,h13,h1,s1,h12,c2,c4,s3,h8,d12,d7,c1  
**539/1000: solving: solved in 17928 tries.**  
s4>s11,h4>s4,d1>d13,h6>h2,s6>h6,c3>c12,s7>h7,s9>s7,s12>s10,s8>s12,h9>h3,h9>s9,c10>c5,d11>d3,d6>d11,c6>d6,c7>c6,d10>d5,d10>c10,d10>d9,s13>s8,h11>h9,d4>d2,h12>h13,h1>h12,c2>c11,c2>s2,h1>h5,c4>c9,c4>d4,c2>c7,c4>c2,c8>c4,h1>h11,s1>h1,s1>s6,s13>s1,s13>c13,s13>s5,d10>d1,d10>h10,s3>s13,c3>s3,h8>h4,c8>c3,c8>h8,d12>d10,d7>d12,d8>d7,c8>d8,c1>c8,

s7,s8,c6,s11,s13,c7,d10,d6,h11,s4,c13,d12,h13,h9,c12,h7,s5,d11,s6,c9,c8,d1,c1,c11,h3,d5,h1,h2,d7,s1,d2,s10,c2,h6,h8,s9,c10,d13,d8,h10,d9,h12,c5,s12,s2,s3,d4,h5,c3,h4,c4,d3  
**540/1000: solving: solved in 14167 tries.**  
s8>s7,s13>s11,d6>d10,d6>c6,s4>s13,h13>h11,c13>h13,c13>c7,d12>d6,c8>c9,d1>d11,c1>c8,c11>c1,h2>h1,d2>h2,d2>d5,d7>d2,s10>s1,h8>h6,s9>s10,d8>d13,h10>h8,c10>h10,c10>c2,d8>d7,d9>d8,s9>d9,c10>c11,s9>s6,c5>c10,c5>s5,h12>h3,s12>h12,s12>s9,s2>s12,s3>s2,d3>c3,d3>s3,d3>d1,d4>d3,h5>h7,c5>h5,c5>c12,c4>c5,h4>h9,c4>h4,c4>c13,d4>d12,s4>d4,s4>s8,c4>s4,

h3,c3,d9,h5,d2,d3,s10,c13,s12,h6,h11,d1,h2,c5,c10,h13,h8,s3,c9,s11,s9,s1,d8,h4,c2,h12,d4,d12,d13,s13,d5,c12,c11,h1,h7,s5,d6,d10,s7,d11,s8,s2,c4,c7,h9,s6,c8,d7,s4,h10,c1,c6  
**541/1000: solving: solved in 9226 tries.**  
c3>h3,d3>d2,d3>c3,d9>d3,h11>h6,c10>c5,h8>h13,c9>c10,s11>s3,s9>s11,s1>s9,h4>h8,d4>d8,d12>h12,d13>d12,s13>d13,s13>s1,c11>c12,h7>h1,s5>d5,s5>s13,c11>c2,d6>d4,d10>d6,s7>h7,s7>s5,d11>c11,d11>d10,s2>s7,s2>h2,s2>s12,d11>d1,d11>h11,c9>c13,s8>s2,h9>h4,h9>c9,h9>d9,h5>h9,c8>c4,c7>c8,d7>d11,c7>d7,s4>s8,c1>c7,c6>c1,s6>c6,s6>s4,h10>h5,s10>h10,s6>s10,

c12,h9,s1,h13,c2,c4,s7,h6,h12,h5,d11,c5,c7,s12,d2,s9,h2,s8,d9,h1,c10,h3,c13,d5,c8,s13,d3,c1,c9,d6,s2,d7,s10,s4,s3,h4,d1,s6,c11,c3,s11,h7,d10,d13,c6,d8,d4,d12,s5,h11,h10,h8  
**542/1000: solving: solved in 88951 tries.**  
c4>c2,s7>s1,h12>h6,h5>h12,c5>c4,h5>c5,h5>h13,c7>s7,d9>s9,d9>d2,s8>s12,h1>h2,s13>c13,c9>c1,s4>s10,s3>s4,s6>s3,d1>d7,s6>d6,s2>s6,d1>d3,c11>c9,s11>s2,d8>d10,d4>d8,d4>h4,c6>c3,d13>d4,d13>d1,d13>s13,d5>d13,c8>c10,c8>s8,c8>c7,h3>h1,d5>d11,s11>c11,h11>h7,h11>h3,s11>h11,s5>s11,s5>h5,d5>s5,d12>d5,d12>c12,d9>d12,h9>d9,h10>h9,h8>h10,c8>h8,c6>c8,

h9,s13,d11,d12,h1,s7,d2,d4,h2,s12,h3,h8,h5,c10,c4,h4,c12,c1,d5,c7,c6,s11,s8,s5,s1,h10,c2,d1,s2,d7,c9,h12,h13,s4,s10,d9,s3,c11,c13,h11,d8,d3,d6,d13,c8,s9,h6,h7,d10,c3,c5,s6  
**543/1000: solving: solved in 28951 tries.**  
d12>d11,h1>h9,d4>d2,s12>s7,s12>d12,s12>s13,h2>h1,h3>h2,h8>h3,h5>h8,c4>c10,c4>d4,h4>c4,c1>c12,c6>c7,s8>s11,s5>s8,s1>s5,s1>c1,h13>h12,s10>s4,d9>c9,d9>d7,s10>s2,s10>h10,s10>s1,c2>c6,d9>d1,d6>d3,c8>d8,c8>c11,c13>c8,h6>d6,d13>c13,h7>h11,h7>h13,d10>d13,d10>d9,d10>s10,d5>d10,h7>h4,d5>h5,h6>h7,s3>s12,c5>c2,c5>d5,s6>h6,s9>s6,c3>c5,s3>c3,s9>s3,

s12,h7,c12,d13,s2,d4,c4,h4,h6,d2,s4,h2,s5,c2,c1,s3,d3,c13,s7,c10,c11,c9,h12,d8,c5,h3,c3,h10,h9,d5,h13,s6,c8,d11,h1,s1,h8,c7,d10,d12,c6,s9,d9,s11,h11,d1,s8,d7,d6,h5,s10,s13  
**544/1000: solving: solved in 5421 tries.**  
c4>d4,c4>c12,h4>c4,h4>h7,s2>s12,h2>h6,h2>s2,h4>h2,d2>d13,s5>s4,c1>c2,d3>s3,d3>d2,c13>c1,c11>c10,c9>c11,c5>c9,c5>s5,c13>c5,c3>h3,h10>h12,h9>h10,s1>h1,s1>s6,c7>c8,d12>d10,d9>s9,h11>s11,d6>d1,d6>c6,d6>d12,d9>d6,h11>d11,h11>h13,h8>h11,h8>d8,h8>h9,s8>s1,c7>c3,c7>c13,s7>c7,d5>d3,d7>d9,h5>h8,h5>h4,d5>h5,d7>d5,s7>d7,s8>s7,s10>s8,s13>s10,

d11,h13,c12,c9,h10,c8,h9,h12,h3,h11,c4,s6,h1,c7,d8,s2,h5,h7,c5,d2,s13,d5,s4,c13,h8,c11,c6,d1,h6,d9,s8,d4,c3,d7,s1,s5,h2,c1,s7,s10,d10,c10,d3,s12,h4,d6,s3,s11,c2,s9,d12,d13  
**545/1000: solving: solved in 363921 tries.**  
c9>c12,h9>c9,h9>h13,h10>h9,h3>h12,h11>h3,h11>d11,h10>h11,c4>c8,h1>h10,s2>s6,h7>h5,c5>c7,c13>s13,c6>c11,h6>h8,c6>h6,c6>c13,d9>d1,d4>s4,d4>d5,d9>d4,c3>c6,s5>s1,c10>d10,s3>s12,s11>s3,d6>d3,s11>s10,c2>c10,c2>c1,c2>h2,d12>d6,d13>d12,s9>s11,s9>s5,s9>d9,s8>s9,s7>s8,s7>h7,d7>s7,d7>d8,c3>c5,d13>d7,d2>d13,c2>d2,c2>c3,c2>s2,h4>h1,c4>h4,c2>c4,

s11,s10,c10,s6,c3,s9,d12,c1,c7,s8,h8,s12,c11,d3,h1,c12,h10,h12,d8,h3,s7,s5,c13,h6,c2,h2,c5,d9,d5,d13,h13,c6,h4,h5,d2,c8,c9,d7,c4,h7,h9,s4,d11,s2,d1,d4,s3,h11,s13,s1,d6,d10  
**546/1000: solving: solved in 8572 tries.**  
s10>s11,c10>s10,c1>c3,c7>c1,h8>s8,s12>s9,d12>s12,c11>c7,h12>h10,h12>c12,h12>h1,h12>d12,h8>h12,d8>d3,d8>h8,s5>s7,h6>h3,h6>s6,c13>c11,c2>c13,h2>c2,h2>h6,c5>s5,c5>c10,d9>d8,d5>d9,d13>d5,h13>d13,h13>h2,h5>h4,h5>c5,h13>h5,c9>c8,h9>h7,h9>c9,h9>h13,c4>c6,s4>c4,d7>d2,s3>s2,d1>d7,s13>s3,s1>s13,s1>s4,d1>s1,d11>d1,h11>h9,d11>h11,d4>d11,d6>d4,d10>d6,

s2,h9,h8,h3,h10,s7,c3,d11,d4,c13,s6,h13,c7,d6,h5,d12,c11,d10,s12,c1,h6,s3,s5,c12,d8,h11,s11,c10,s8,d5,c2,c4,d13,s9,s13,c9,s10,d1,d9,c5,h1,h2,s4,h7,h4,d3,d7,h12,d2,c8,c6,s1  
**547/1000: solving: solved in 35814 tries.**  
h8>h9,h3>h8,h10>h3,d4>d11,c7>c13,c7>s7,c3>c7,d6>d4,s6>d6,s6>s2,h5>h13,c11>c3,d10>d12,d10>h10,c1>c11,s5>s3,s5>h5,s5>s6,s12>s5,h11>h6,s11>h11,s11>s12,c12>c1,c10>d10,c12>c10,s8>d8,c2>c12,c4>c2,d13>d5,s13>s9,s13>d13,s13>s11,d9>c9,h4>h2,h12>h7,h12>h1,h4>h12,s4>h4,s4>s10,s4>c4,d3>d9,d7>d3,d2>d7,d1>d2,c8>c5,s1>d1,s1>s13,s4>s1,s8>s4,c8>s8,c6>c8,

h4,d4,s5,c5,h5,s2,s7,h8,c8,d3,c12,h13,s3,d10,c10,h10,h1,s12,d2,d7,c4,c6,c11,c3,d13,s13,c2,s4,d8,s6,h7,c9,s10,d12,d9,c1,s1,d1,s9,h6,d5,s11,h3,c13,c7,s8,d11,h12,d6,h2,h9,h11  
**548/1000: solving: solved in 106349 tries.**  
d4>h4,c5>s5,h5>c5,s7>s2,c8>h8,s3>d3,c10>d10,h10>c10,h10>h13,h1>h10,s12>s3,c12>s12,c12>c8,h1>h5,d7>d2,c6>c4,c11>c6,c3>c11,s13>d13,s10>s6,d9>d12,d9>c9,d9>d8,s1>s10,d1>c1,d1>d9,s1>d1,s9>s4,h3>h6,c7>c13,d11>s11,d11>d5,c7>h7,c7>c2,c7>d7,c7>c12,c3>c7,s9>s7,h3>c3,s8>s13,s1>s8,s1>h1,s9>s1,h9>h12,h9>s9,h3>h9,h2>h3,h11>h2,d11>h11,d11>d4,d6>d11,

c8,h7,h12,h3,c6,d2,s5,d13,s7,d4,h10,c13,c5,d9,d1,h2,c10,s4,h9,s2,h11,s12,c4,s10,c1,s8,h4,s3,s1,d12,s6,d10,s13,c11,d6,c3,c12,s9,h5,d5,h13,d8,d3,c2,h1,h6,d7,s11,c9,d11,c7,h8  
**549/1000: solving: solved in 14792 tries.**  
h12>h7,h3>h12,c5>c13,d9>d4,d1>d9,c10>h10,c5>c10,s2>h2,s2>s7,s2>d2,s5>s2,d1>d13,c5>c6,s5>c5,h11>h9,c4>s4,s10>s12,c1>c4,c1>d1,c1>c8,s8>s10,s1>s3,d6>d10,d6>s6,d6>d12,c3>c11,s9>s13,d3>d5,d3>c3,h13>h5,c2>c12,d8>d3,h1>h13,h6>h1,d11>d7,d11>d8,s11>d11,s11>s1,s11>h11,s11>s5,h4>h3,c7>c2,h6>d6,c9>c7,h8>h6,h8>h4,s8>s11,s8>h8,s9>s8,c9>s9,c9>c1,

c8,d7,d8,h12,d3,h13,c5,d9,c11,s2,h4,s7,h3,c6,d11,c4,d1,d6,d5,s4,d4,s8,h9,d13,h11,c12,s11,d10,h8,h5,s10,h1,c1,s12,s5,s3,c3,h6,c9,c10,c13,h7,s1,h10,c7,d2,s6,d12,s13,h2,c2,s9  
**550/1000: solving: solved in 2400 tries.**  
d8>d7,d8>c8,d9>d3,c11>c5,h4>h13,s7>s2,h3>h4,d11>c11,c4>c6,d1>d11,d6>d1,d5>d6,s4>c4,s4>s7,d4>s4,d4>d5,h9>h3,h9>d9,h9>h12,s8>d8,d13>d4,h5>h8,s10>s11,d10>s10,d10>d13,h1>h5,c1>h1,c1>c12,s5>s12,s3>s5,c3>s3,c3>c1,c10>c9,c13>c3,h10>c10,h10>h6,h10>d10,h11>h10,s6>s1,c7>c13,h7>c7,h7>h11,s9>s13,s9>s6,s9>s8,h9>s9,h7>h9,h2>h7,c2>h2,d2>c2,d12>d2,

d11,s11,c10,s2,c13,c6,c9,c1,d2,c2,c11,s10,c3,s1,d10,d3,c4,d1,d12,d9,h7,d13,d6,h3,d8,h12,s12,c12,c8,h6,h8,s5,h2,d5,d7,s6,s13,s4,h13,s9,h11,h10,s8,h9,c7,h4,h5,d4,s3,s7,h1,c5  
**551/1000: solving: solved in 2595 tries.**  
s11>d11,c6>c13,c9>c6,c1>c9,c2>d2,c2>c1,c2>s2,c2>c10,c11>c2,c11>s11,d10>s10,d3>d10,c3>d3,c3>c11,d12>d1,d9>d12,d6>d13,s12>h12,c12>s12,c8>c12,c8>d8,h6>d6,h6>h7,h3>h6,c8>c4,h8>h3,d7>d5,s6>s5,s13>s6,s4>s13,h10>h11,h9>s9,h9>h13,h10>h9,h4>h10,c7>d7,h4>s4,h5>h2,s7>s3,s7>c7,s8>s7,s8>h8,s8>s1,c8>s8,c8>c3,d4>d9,h4>d4,h5>h4,c5>c8,h5>c5,h1>h5,

d9,c8,d7,c13,h8,d10,s10,d5,c2,s1,h4,c12,d2,d12,d11,s6,c5,c9,h1,c6,s9,d6,d3,s4,h11,c7,s8,c1,d1,h7,c3,d4,s12,d13,h10,c4,h13,h2,s11,c11,h12,s3,h9,s5,h3,h6,h5,s2,c10,s13,s7,d8  
**552/1000: solving: solved in 1015711 tries.**  
h8>c8,s10>d10,d5>d7,c12>c2,d12>d2,d12>c12,d12>d5,s1>s10,s6>s1,c9>c5,h1>h4,c6>c9,c6>s6,c6>c13,h1>h8,d6>c6,d6>d12,d11>d6,s9>d9,d3>d11,s4>s9,d1>c1,h7>c7,h7>h11,d1>d3,d1>h1,s8>s4,d4>d1,h13>d13,h13>h7,h3>s3,h3>h12,h5>h9,h6>h3,h5>h6,s5>h5,s13>s5,s7>s13,s2>s7,s2>h2,s2>s12,s11>s2,c11>s11,h10>h13,c11>c3,c10>h10,c11>c10,c4>c11,d8>s8,d4>d8,c4>d4,

c13,c12,s1,s4,s8,h7,h12,s7,s12,c4,c6,d8,c5,h9,d7,s9,h11,s11,h8,s6,d2,d9,s3,c7,s10,h5,c10,c11,c8,d1,h13,c1,d3,c2,c3,d5,s5,d12,c9,h10,h3,s13,d6,d10,h6,s2,h1,d11,h4,h2,d13,d4  
**553/1000: solving: solved in 117552 tries.**  
c12>c13,s4>s1,s8>s4,h12>h7,s12>s7,s12>h12,s12>s8,s12>c12,c6>c4,d7>d8,s9>h9,s11>h11,s11>s9,d9>d2,c10>c7,s10>c10,s10>s3,c8>c11,h13>h5,c1>d1,c1>c8,c3>c2,c3>d3,c3>c1,s5>d5,s5>s10,h3>h10,h3>c3,h3>h13,d6>d12,s2>s13,h2>h1,d4>d11,d4>d10,h4>d4,h2>s2,h2>h3,h4>h2,h6>h4,h6>s6,h6>h8,d6>h6,s5>s11,d13>d6,d13>d7,d9>d13,c9>d9,c9>c6,c5>c9,s5>c5,s5>s12,

s6,d3,h12,h9,s1,d6,d2,s2,h4,d9,d10,d8,s9,h7,s8,d1,h3,s7,s10,s13,c12,s12,s11,c2,d11,h1,h2,s4,d12,c6,c1,d4,d7,c5,c8,c3,c9,c11,h8,d13,h5,h11,h13,h6,d5,c10,c4,c7,c13,s5,h10,s3  
**554/1000: solving: solved in 28363 tries.**  
h9>h12,s1>s6,d2>d6,s2>d2,s2>s1,h4>h9,d10>d9,d8>d10,h7>h4,s8>s9,s8>d8,s8>s2,h3>d3,h7>h3,s7>s8,h7>s7,s13>s10,s12>c12,s12>s13,s11>s12,d11>d1,s11>d11,h1>h7,h2>c2,c1>c6,d4>s4,d12>d4,c8>c5,c3>c8,c9>c3,c11>c9,d13>d7,h11>c11,h5>h8,h13>d13,h6>h13,h6>h2,h11>h6,h11>s11,d5>d12,c4>c1,c7>c4,c13>c7,h5>h11,s5>d5,c10>c13,h10>c10,h10>h1,h5>h10,s5>h5,s3>s5,

h7,d3,h13,h1,d13,d11,s11,c1,d9,c7,c12,h8,d6,s12,d12,d4,c10,c5,d2,h12,h6,s5,c6,c11,s3,s9,c13,h10,s2,s1,c9,h4,s7,h5,h9,s4,s6,d7,s10,d8,s13,d5,c3,h3,c8,c2,h2,d1,h11,s8,d10,c4  
**555/1000: solving: solved in 18243 tries.**  
h1>h13,d11>d13,s11>d11,c12>c7,d6>d9,d12>s12,d12>d6,c12>d12,c12>c1,h8>h1,c5>c10,h6>h12,s5>c5,s5>s11,d2>d4,c6>h6,c11>c6,s9>s3,s2>s9,s1>s2,h9>h5,h9>c9,h9>h10,h4>h9,s7>s1,s4>h4,s6>s4,d7>s7,s10>s6,s13>c13,s10>s13,c2>c3,h2>c2,h3>h2,d10>d1,d10>d5,d10>d7,s10>d10,d8>d2,c8>c11,c8>d8,s8>s10,s8>s5,c8>c12,c8>s8,h3>d3,h3>h7,h11>h3,h8>h11,c8>h8,c4>c8,

h10,s9,c7,h3,d6,c1,c8,s7,d9,h6,d1,d11,d2,c12,d5,s6,h12,h1,s2,c13,d7,s3,h2,s12,c4,h9,c6,s8,c9,s10,c11,h7,d3,h4,h8,s11,s13,c3,d4,s5,c5,h11,c10,h13,d10,s4,d13,s1,h5,d12,c2,d8  
**556/1000: solving: solved in 32059 tries.**  
h3>h10,c8>c1,s7>c7,s7>s9,h6>d6,d1>d9,d11>d1,d2>d11,h12>c12,h12>h6,d5>d2,s3>s2,h9>h2,c6>c4,h8>h4,s13>s11,s5>s13,c5>s5,c3>c5,c10>c3,d10>d4,d10>d3,d10>s10,h8>h7,h11>c11,h8>h11,c10>c9,h8>s8,h8>h9,c10>c6,d10>c10,d13>d10,d13>d7,d13>c13,h13>d13,s12>s3,h8>h13,s1>s4,s1>h1,s1>s6,s12>s1,h5>d5,s12>h12,s12>s7,h5>h3,d12>s12,h8>h5,d8>d12,d8>h8,c8>d8,c2>c8,

h1,c8,d3,s1,c13,c9,c1,h9,s2,s8,c11,d13,c7,s6,d6,s4,d10,c3,h3,d2,h12,d11,s5,s7,s9,d8,d1,c10,d7,c4,c2,s11,c6,h2,d12,h4,h11,d5,d9,h8,c12,h5,s13,s3,s12,s10,c5,h6,h7,h13,h10,d4  
**557/1000: solving: solved in 906 tries.**  
s1>h1,c9>c13,c1>c9,c1>s1,c8>c1,s8>s2,s8>c8,d13>d3,c7>c11,d6>s6,d6>d13,c3>c7,h3>c3,h3>h9,s4>s8,d2>d10,s7>s5,s9>s7,d1>d8,c2>c4,h2>c2,h11>h4,h11>s11,h11>h2,c6>c10,d5>d12,d9>d5,s3>s13,s12>s3,s10>s12,c5>c12,h5>c5,h5>h8,h7>h5,h7>d7,h11>h7,d9>d1,d9>s9,d9>d2,h11>h12,d11>h11,d11>d9,h10>s10,h10>h3,h6>c6,d4>d11,d4>s4,d6>d4,h6>h10,h6>d6,h13>h6,

d13,h2,h8,c12,h10,c3,c8,h1,h6,s2,h4,h12,d12,c2,s13,c13,d6,d9,s10,h3,c4,s5,d2,s1,s7,h13,c9,s11,d8,c7,h5,d4,c10,h11,c1,s4,d5,s6,d7,s12,d1,d11,c11,h7,c6,h9,c5,s8,s9,s3,d10,d3  
**558/1000: solving: solved in 5291 tries.**  
h8>h2,c8>c3,c8>h8,c12>c8,h1>h10,h6>h1,h12>h4,h12>c12,h6>h12,d12>d13,c2>s2,c13>s13,c13>c2,d6>d12,h6>d6,s5>s10,s7>s1,s11>s7,d4>d8,d11>d1,c11>d11,h7>d7,c6>c11,c6>s6,s8>s12,s9>s8,h9>s9,c5>c6,c5>c1,c5>h5,c5>c7,c10>c5,s4>d4,s4>s11,h9>h11,h9>h13,c9>h9,c10>c9,d5>d2,d5>s5,d5>d9,c4>c13,d10>c10,d3>d10,d3>d5,s4>c4,h3>d3,s3>s4,h3>s3,h3>h6,h7>h3,

h4,d4,d13,c12,s3,d9,h6,d2,h9,d3,c5,d5,d8,c13,s12,s10,d10,c7,s2,s13,s5,d12,s7,s11,d7,h11,d1,c1,c11,h13,s6,c3,s1,c8,h8,c10,h7,s8,c9,h12,c2,s9,h1,h5,d6,h10,d11,h3,c6,c4,h2,s4  
**559/1000: solving: solved in 914820 tries.**  
d4>h4,d13>d4,d9>d13,d5>c5,d5>d3,d8>d5,s10>s12,d10>s10,s13>s2,s13>c13,s5>s13,s11>s7,d7>c7,d7>d10,d12>d7,h11>s11,c1>d1,c11>c1,c11>h11,c3>c11,s1>s6,c8>c3,c8>d8,s1>s5,h8>h13,h8>c8,h8>h9,d12>d2,d12>c12,h8>h6,c9>c10,s8>s1,s8>h8,s8>s3,h12>h7,h10>h1,h10>h12,h2>h3,h2>h5,h2>h10,c2>h2,s9>s8,c9>s9,d6>d12,c2>c9,d11>d9,d6>d11,c6>c2,c6>d6,c4>c6,s4>c4,

d4,h8,d12,c6,d11,h7,c12,d2,s13,s7,c8,c9,s6,d8,c4,s4,d5,s3,d9,c11,h4,c10,s12,d1,h13,s11,h10,h1,c2,d6,c1,s2,c5,h3,d13,d10,s9,h9,s8,h12,s1,h11,s10,d7,c3,h6,c7,c13,d3,s5,h5,h2  
**560/1000: solving: solved in 3581 tries.**  
c12>c6,c12>d12,d11>d4,s7>s13,c9>c8,c4>c9,s4>c4,s4>s7,s6>s4,d5>d8,s11>s12,s11>c11,h13>h4,h10>h13,c10>h10,d1>d9,h1>d1,c2>c10,s2>c2,s2>s11,c1>h1,c5>c1,d10>d13,h9>h3,s8>s9,h12>h9,s1>s8,h11>h12,s10>s1,s10>d10,s10>s2,h6>h11,d3>c3,d3>d6,d3>s3,d3>d5,s10>s6,d7>d3,d7>h7,d7>d11,c5>c12,c13>c7,s5>s10,h2>h6,h5>s5,h5>h8,d2>d7,h2>d2,h5>h2,c5>h5,c13>c5,

c8,s9,s11,h7,h11,d10,d2,h9,c1,h5,s5,c10,h10,s1,s13,c7,s6,s3,h13,h3,c3,c5,s4,d4,h12,s8,d7,c9,d9,d8,h6,c12,d12,h4,d11,d13,h8,c13,c11,c6,h1,s12,s7,s2,d6,c4,d1,c2,s10,h2,d3,d5  
**561/1000: solving: solved in 31729 tries.**  
s11>s9,h11>h7,h11>s11,d2>d10,s5>h5,h10>c10,h10>h9,s1>s5,s1>c1,s13>s1,s3>s6,h13>s13,h13>h10,h3>s3,c3>h3,c3>c7,c5>c3,d4>s4,d4>d2,d9>c9,d9>d7,d8>d9,d8>s8,c12>h12,c12>c5,d8>d4,d13>d11,c11>c13,h1>h8,s7>s12,d6>c6,d6>d13,d6>h6,d6>d8,h4>h13,d12>c12,c4>c11,c4>h4,c4>c8,h1>h11,d12>d6,d1>d12,s10>s7,s2>s10,c2>s2,c2>c4,h2>c2,h1>h2,d1>h1,d3>d1,d5>d3,

s8,h6,d4,d13,h13,s10,d8,h5,d7,s11,s6,h3,d12,c6,c2,s5,c10,h7,h10,c3,s7,s9,d1,c11,c12,c1,s12,d6,d2,s4,d9,c8,s1,d3,d5,h11,c13,c9,d10,h2,s13,c4,d11,h1,h12,h8,h4,c7,h9,s2,c5,s3  
**562/1000: solving: solved in 44608 tries.**  
d13>d4,h13>d13,h13>h6,d8>s8,s11>s10,s6>s11,c2>c6,h10>h7,h10>c10,c3>c2,s9>s7,c12>c11,c1>c12,c1>d1,d2>d6,s1>s4,s1>c1,s1>s9,s12>s1,d9>d2,d5>d3,c13>c8,d10>d5,c4>c9,c4>c13,d11>h11,h12>h1,h8>h2,h4>h8,h4>c4,d11>d10,h12>h4,h12>h10,s12>h12,s12>s5,c5>c7,s2>s13,s3>s2,s3>s12,s3>h3,s3>s6,d12>d7,d11>d12,c3>s3,d9>d11,c5>c3,h5>c5,d9>d8,h5>h13,h9>h5,h9>d9,

d10,c4,d4,h8,h3,c13,d3,s13,s1,d2,s12,c7,s4,c12,s5,h4,c1,d1,s7,h13,d12,c10,s3,s6,d8,d13,s11,s2,h1,s9,c8,d11,h6,h12,c6,c3,d7,c2,h10,d6,c11,h11,d5,h9,c5,h5,s8,s10,h7,c9,h2,d9  
**563/1000: solving: solved in 9445 tries.**  
d4>c4,d4>d10,h3>h8,d3>d4,h3>d3,s13>c13,s1>s13,c12>s12,c7>c12,s4>s1,s5>s4,d1>c1,d1>d2,s6>s3,d8>d12,d13>d8,d13>h13,s6>s7,s11>s6,s2>s11,c8>c10,h6>h1,h12>h6,c3>c6,d6>d7,h11>c11,h11>h10,d5>d6,c5>c2,c5>d5,c5>c3,h5>c5,h5>h12,h11>d11,h9>h5,s9>h9,s8>c8,s10>s8,s9>s10,h2>h11,h2>s2,h2>h4,h7>h2,d9>d13,d9>d1,s9>d9,s9>s5,c9>s9,c7>c9,h7>c7,h7>h3,

h2,s5,c11,h3,h11,d2,d1,c12,h4,d10,d9,h5,d5,h8,s1,s2,c3,h6,c9,s10,d4,s13,h10,s7,h9,h13,c7,h1,c10,s9,d3,d7,s6,c13,d13,c4,s4,c1,h12,d6,c6,d8,s8,d12,s11,c2,h7,s3,c8,s12,c5,d11  
**564/1000: solving: solved in 245464 tries.**  
h3>h2,h11>c11,d1>d2,h4>h11,d9>d10,d5>h5,d5>d9,s2>s1,h6>h8,c9>c3,h10>s10,h10>h6,s13>s2,s7>s13,h13>h9,c7>c9,c7>s7,c7>c12,h1>h13,c10>h10,d3>d4,d7>d3,d7>c7,d7>d1,d5>d7,h1>h4,s6>s9,d13>c13,c4>c10,s4>c4,s4>s5,d6>d13,c6>d6,c1>c6,c1>h1,s8>s6,d12>d8,c8>c2,s3>s11,c5>c8,s12>s3,s12>s8,s12>s4,h12>s12,c5>c1,d5>c5,d12>d5,h7>h3,h12>h7,d12>h12,d11>d12,

c11,s1,c4,s10,c3,h2,c8,s4,d3,s8,s6,c13,h5,c2,d7,c6,s5,d12,h9,d6,h1,h12,h8,d5,c7,s13,h11,h4,s2,d10,d2,d1,h6,s12,h10,c12,d9,h7,d13,s7,d4,s3,c10,d11,c1,c5,d8,c9,h13,s11,s9,h3  
**565/1000: solving: solved in 21008 tries.**  
s8>c8,s8>s10,s4>s8,s4>c4,s4>s1,d12>d7,d6>c6,d6>d12,s5>h5,h1>h9,h12>h1,h8>h12,h4>h11,d2>d10,d2>s2,d1>d2,h7>h10,d13>d9,s7>h7,s7>s12,d4>d13,c10>c12,s3>s7,c1>c10,c1>d1,c1>c7,d4>h4,d11>d4,s3>s13,d8>d11,d8>d5,d8>h8,c1>c2,d8>d6,s3>s5,c5>c1,c9>c5,h13>h6,s9>s11,s9>c9,s9>s6,h13>c13,h3>h13,h3>h2,d3>h3,s9>s4,s3>s9,c3>s3,c3>c11,d3>c3,d8>d3,

h7,d2,d10,s11,h5,c9,s9,h9,d8,s6,h13,s7,d12,h12,d1,c12,s5,h11,s3,d4,s10,s4,d5,c10,c1,s13,c3,c6,h3,h4,c5,h2,s1,h6,h10,c8,c13,d3,c2,d6,h1,c11,h8,s8,s2,c4,s12,d9,d13,d7,d11,c7  
**566/1000: solving: solved in 386196 tries.**  
d10>d2,h5>h7,s9>c9,s9>s11,h9>s9,h13>h9,s7>s6,h12>d12,h12>h13,s5>s7,s4>s10,s4>d4,s4>s3,c1>c10,s13>s4,c3>c1,c6>c3,h4>h3,c5>d5,c5>c12,c6>c5,h2>h4,h10>h6,c2>c8,c2>h2,c2>c6,s1>s13,s1>d1,d6>d3,c11>c13,c11>c2,h8>h1,s8>h8,s12>s8,d13>d9,d7>d13,c7>c4,d7>c7,d7>d6,d11>d7,d11>c11,d11>d8,h11>d11,h11>h5,s1>s5,h10>d10,h10>h11,h12>h10,s12>s1,s12>h12,s2>s12,

c8,c13,c10,s5,d4,h8,c11,h6,h3,s11,d12,c7,h7,h11,d3,s8,d13,d5,d11,d2,d9,h10,d6,s13,s12,s6,c12,h4,h13,c3,s9,d8,h5,c2,h1,h9,s4,d10,s3,s1,s2,c1,s7,c4,h12,h2,c5,d7,c6,c9,s10,d1  
**567/1000: solving: solved in 11845 tries.**  
c13>c8,c10>c13,h3>h6,h7>c7,h7>h3,h11>h7,h11>c11,h11>h8,s11>h11,d3>d12,d5>d13,d11>d5,d11>s11,d11>d4,d3>d11,d9>d2,s12>s13,s6>s12,s6>d6,s6>s8,h13>h4,h9>h1,s1>s3,s7>s1,s2>s7,c4>c1,c4>s4,h2>h12,h2>s2,c5>c4,c5>h5,c5>c3,h9>s9,c2>c5,d10>d8,h2>c2,h2>h13,h9>h2,d10>h10,c9>h9,c6>c12,c6>s6,c9>c6,c9>c10,d9>c9,d10>d3,s10>s5,d10>s10,d10>d9,d7>d10,d1>d7,

c8,c4,h9,h4,d5,d12,c6,d2,h12,d3,h3,s5,c9,c10,d8,s1,s12,h11,s4,s7,h6,s10,s11,d4,d10,h8,h1,s2,s8,c11,h13,d6,c7,c1,h5,d9,h7,c12,d1,s9,c5,c13,d7,h10,c2,s6,s13,s3,d11,d13,c3,h2  
**568/1000: solving: solved in 739 tries.**  
c4>c8,h4>h9,h4>c4,d12>d5,h12>d12,h12>h4,d3>d2,h3>d3,c9>c6,c10>c9,s12>s1,s7>s4,s11>s10,s11>h11,s11>s12,s7>s11,d4>d8,d10>d4,d10>c10,s7>s5,h8>h6,h1>h8,s8>s2,h13>h1,c1>c7,d9>d6,h7>h5,d1>c1,d1>d9,c12>c11,c13>c5,d7>h7,d7>d1,s9>s8,s13>s6,s13>c13,s13>s9,c2>c12,d11>d7,d13>d11,d13>h13,d13>d10,s13>d13,s3>s7,s3>h3,s3>s13,c3>s3,c2>c3,h2>h10,h2>c2,h2>h12,

c5,c4,d10,s13,s11,c2,s9,c13,d9,d8,d13,d2,h1,c12,d4,h11,s6,c8,h8,d6,s3,h7,s2,h9,s5,d11,s12,c6,h6,d7,s10,d1,d3,c9,h12,s7,c3,c10,h13,h5,h4,c1,s1,h10,c7,s4,c11,s8,h3,d5,h2,d12  
**569/1000: solving: solved in 396527 tries.**  
c4>c5,s11>s13,c2>c4,s9>s11,c13>c2,d9>s9,d9>d10,d8>d9,d13>d8,d13>c13,d2>d13,d4>d2,c8>c12,h8>c8,h8>h1,h11>h8,d6>s6,h7>h11,s2>s3,h9>h7,s5>s2,h6>c6,d7>d11,d3>d1,c3>c9,c3>d3,s7>s10,s7>d7,s7>s5,h6>d6,s12>s7,h12>h6,h5>h13,h4>h5,c7>c1,h10>h4,c11>c7,c11>c3,c10>c11,h10>c10,s4>s1,h3>h10,s8>s4,h2>h3,h2>h9,h12>h2,s12>h12,d5>d4,d12>d5,s12>d12,s8>s12,

d9,d3,h4,d10,c9,d1,h13,d7,c6,s6,h11,c1,s13,h2,h8,c11,h1,s11,s8,c2,c13,d4,s2,d8,c7,h12,d5,c4,d13,c10,h6,s7,h7,d11,d6,s5,h9,c3,s10,h10,s9,s4,h3,h5,c8,s3,d12,c12,s12,s1,d2,c5  
**570/1000: solving: solved in 201151 tries.**  
d3>d9,s6>c6,h11>h13,h8>h2,c11>c1,c11>h11,s13>s6,h1>h8,s8>s11,c13>c2,c13>s13,d8>s8,d8>d7,d4>d8,c7>c13,h7>s7,h7>h6,d11>d13,d6>d11,s10>s5,h10>s10,h10>h7,h10>c10,h9>h10,s4>s9,h3>h9,c3>h3,c12>c8,s12>c12,s1>s12,s3>s1,s3>c3,s4>s3,d12>d6,d12>h12,d5>d12,s4>s2,s4>d4,c4>c7,c4>s4,h1>d1,h1>h4,c11>c9,d5>d10,c4>c11,h5>h1,d5>h5,d2>d3,d5>d2,c5>c4,c5>d5,

d3,d7,h11,h1,c2,s3,h2,c11,c12,s1,c8,d5,s2,d12,s4,c10,h3,c5,c6,h4,s12,c7,s6,d10,h6,s10,c1,d4,c13,d11,s7,h7,d2,s8,h5,c4,s13,d8,d6,h10,h9,d13,s9,c3,d9,h13,c9,h12,h8,s11,d1,s5  
**571/1000: solving: solved in 84937 tries.**  
d7>d3,h1>h11,h2>h1,c2>h2,c12>c11,s2>s1,s2>c2,s3>s2,c8>c12,d5>d7,d12>d5,c6>c5,c7>c6,s6>s12,h6>h4,s6>h6,s10>d10,s10>s6,s10>c10,s10>s4,h3>s3,c1>c7,h7>s7,h5>h7,d8>s8,d8>d2,d6>d8,c9>c3,c9>h9,c9>c4,s9>s13,s9>c9,d9>s9,d13>d6,d13>c13,d13>d4,d11>d13,h13>h5,h12>h13,h8>h12,d1>d9,d1>c1,d11>d1,h8>c8,h8>h3,h10>h8,d11>d12,s10>h10,s11>s10,s11>d11,s5>s11,

s5,c11,h10,s4,s13,c5,d1,d2,c4,c6,d8,d9,c3,s9,h2,d13,h7,s11,h13,c2,s7,s12,d5,s10,h1,s3,c13,c9,c12,h11,s1,d10,s8,d6,h5,d3,c1,h9,d4,c7,c10,s2,d7,c8,h8,s6,h3,d12,d11,h4,h6,h12  
**572/1000: solving: solved in 37239 tries.**  
s4>s5,s13>s4,d2>d1,c6>c4,d9>d8,h13>d13,h13>h2,h7>h13,s7>h7,s7>s9,s11>s7,c9>c13,c12>c9,h11>h1,h9>h5,c10>c7,c8>c10,s6>s2,h8>c8,d11>d7,h3>h8,d12>d11,h12>d12,h4>h12,h4>d4,h6>h4,h6>h9,h6>d6,d3>d10,s6>h6,s6>s8,h3>d3,c1>s1,c1>c12,h3>h11,s3>h3,s3>s12,s3>c3,s11>s3,d5>d9,d5>c5,d2>d5,c2>d2,c6>c2,s10>h10,s11>c11,s11>s13,s10>s11,s6>s10,c6>s6,c1>c6,

h2,s4,s12,h12,h10,h3,c4,c6,c9,h8,s3,d7,s7,h5,s8,c10,s2,d8,c3,h9,s6,c2,d1,s5,c7,d10,h11,d6,d12,c8,d5,c12,h7,d9,s11,c1,d11,s10,d2,h1,d3,d13,s13,c5,h13,c11,d4,c13,s1,h6,h4,s9  
**573/1000: solving: solved in 4854 tries.**  
s12>s4,h12>s12,h12>h2,h10>h12,h3>h10,c6>c4,c9>c6,s3>h3,s7>d7,s7>s3,h5>h8,s8>s7,c3>c10,s6>s2,d1>d8,d12>d6,c12>d12,c12>c7,c8>c12,d11>d9,d11>h11,d11>d10,d5>d11,h1>c1,d3>d2,d13>d3,s13>d13,s13>s10,h13>h1,s13>h13,s13>s11,c5>d5,c5>c8,h4>h6,h4>d4,h4>h7,s1>s13,s1>s5,s1>d1,s1>s6,c11>c2,c13>c11,c13>c3,c5>c13,s9>s1,s9>c9,s9>s8,h9>s9,h4>h9,h5>h4,c5>h5,

d1,s10,s2,h5,d2,s4,c11,s5,c5,d13,h2,c1,d12,c2,c3,d6,d7,d8,c8,h4,d11,h7,s11,c7,d5,h6,s8,h11,d4,s7,s6,h3,c4,s9,c9,s1,s12,h8,h9,s13,d10,d3,h1,c10,h10,h12,h13,c6,c13,c12,d9,s3  
**574/1000: solving: solved in 651 tries.**  
s2>s10,d2>d1,s2>d2,s5>h5,s5>s2,s4>s5,c5>c11,c1>c5,c3>c2,d7>d6,d8>d7,c8>d8,c8>c3,h4>h2,h4>s4,d12>d13,s7>s8,s7>c7,s7>s11,s7>h7,h11>h6,h11>d11,d4>d5,c4>d4,c4>c8,c4>h4,c1>c4,s6>s7,c9>s9,s1>s6,s1>c1,h3>h11,s12>d12,s12>s1,h9>h8,h9>c9,h9>h3,d3>d10,h1>h9,h12>h10,c6>c10,c13>c6,c12>c13,h12>c12,h12>h1,h12>s12,h13>h12,s13>h13,s3>s13,d3>s3,d9>d3,

c1,s9,d3,h11,h7,c8,h8,h12,h1,c12,c6,h3,c5,d7,c9,s10,c4,c13,s6,s4,d11,d12,d8,d1,s2,d5,s13,d9,h2,c3,h13,d10,c2,s3,c11,c10,s11,h9,s5,s7,d2,d6,d13,s8,h4,h10,h5,s12,d4,h6,s1,c7  
**575/1000: solving: solved in 100354 tries.**  
h7>h11,h8>c8,h8>h7,h12>h8,h1>h12,h1>c1,c6>c12,c13>c4,s4>s6,d12>d11,d8>d12,d1>d8,c2>c3,c2>h2,h13>s13,c11>c2,c10>c11,d10>c10,d10>d9,s11>s3,h9>h13,s5>s11,s5>d5,s5>s2,d10>d1,d10>s10,d6>d2,s8>s7,d13>d6,h10>h4,h5>h10,s1>s12,s1>s8,s1>s4,s5>s1,h5>s5,h9>h5,d13>d10,h9>c9,h9>h3,h9>s9,h9>h1,d4>d7,d4>d3,d13>d4,c13>d13,c6>c13,h6>h9,c6>h6,c5>c6,c7>c5,

s1,h8,h7,d10,s11,h5,h2,s10,c10,c9,d2,d1,c8,s13,h10,s5,d5,d13,h6,s4,c4,d11,c6,d7,h13,h9,c12,s3,d6,c7,d9,d4,s7,s9,h3,d8,d12,s8,h12,c11,s12,h1,s2,c5,d3,h11,c2,c3,h4,c13,s6,c1  
**576/1000: solving: solved in 38774 tries.**  
h7>h8,s11>s1,h2>h5,c10>s10,c9>c10,d2>d10,h2>d2,h2>h7,d5>s5,d13>d5,c4>s4,d11>d13,c6>c4,c6>h6,h9>h13,c12>c6,d6>d7,d9>h9,d9>d6,c7>c12,s9>s7,s9>d9,s3>s9,d4>d11,h3>s3,h3>h10,d12>d8,s12>s8,s12>d12,h12>s12,h12>h3,c11>c7,c5>c11,h4>h11,h4>h1,h4>h12,d4>h4,c5>c8,d4>d1,s2>s13,d3>d4,c3>c5,c3>d3,s2>h2,c13>c9,c3>c13,c2>c3,s6>s11,s2>s6,c2>s2,c1>c2,

c5,s4,d1,s1,d3,s12,h6,c2,c1,h8,h12,h1,d9,c8,h2,c12,h5,c7,h7,c10,d10,d6,s3,d13,c3,s8,h11,c4,d5,h3,d4,h10,s6,h9,s10,d11,s5,s11,s13,s2,d2,c6,h4,d8,s7,d7,c11,h13,s9,c9,c13,d12  
**577/1000: solving: solved in 4263 tries.**  
s1>d1,s1>s4,c1>c2,h12>h8,h12>s12,h6>h12,c1>s1,c1>c5,h1>h6,h2>h1,c12>c8,h5>h2,c7>c12,h7>c7,d10>c10,d6>d10,s8>s3,h3>h11,h3>c3,d5>d13,d4>c4,s10>h10,s6>s10,h9>h3,s11>s5,s11>d11,s11>s6,s13>s11,s2>s13,d2>s2,d2>d4,d8>d2,d8>s8,d8>d6,d5>d8,d5>h5,d5>d3,d9>d5,h4>h7,h9>h4,c11>c6,c13>h13,c13>c11,c13>c1,s9>h9,s7>s9,d7>s7,c9>c13,d9>c9,d7>d9,d12>d7,

c13,d3,s8,d13,h6,c1,h8,h7,d11,h9,d5,c7,c2,c9,s10,d2,d8,c3,h12,h4,d7,c8,s11,h2,s1,c10,s7,s9,c4,h11,d6,d4,h1,d10,h13,h10,c11,c6,s4,s12,c12,h3,s5,s13,s2,h5,c5,s6,d1,d9,s3,d12  
**578/1000: solving: solved in 5159 tries.**  
d13>c13,d3>d13,h8>s8,h6>h8,c2>c7,c9>c2,d2>d5,d8>d2,h4>h12,c8>c3,c8>d8,c9>c8,c9>h9,c9>c1,h4>h7,s11>d11,s10>s11,h2>h4,c10>s10,s7>s1,s7>d7,s9>s7,s9>c9,c4>c10,d4>d6,h10>h13,h10>d10,h10>h1,c11>h11,c11>c4,h10>h2,s12>s4,c12>s12,c12>c11,h5>s5,s6>s13,s6>c6,d9>d1,s3>s2,s3>s6,h3>s3,h3>h10,d9>d4,d9>s9,h3>d3,h6>h3,h5>h6,d12>d9,c12>d12,c5>c12,c5>h5,

h9,d2,s2,h8,d3,d1,s4,c12,c5,c1,d6,d7,s1,h6,c7,d4,c6,c3,d10,s5,d9,s11,s10,h1,h7,s7,c10,s12,h5,d5,s13,c8,h3,s8,s6,d12,d11,h4,c2,c11,d8,c9,h2,s3,h13,h10,h12,d13,c13,h11,s9,c4  
**579/1000: solving: solved in 3035 tries.**  
s2>d2,d1>d3,s4>s2,c5>c12,c1>c5,c1>d1,d7>d6,c7>d7,c7>c1,s1>s4,c6>c7,h6>c6,h6>h8,s10>s11,s10>d10,s5>s10,d9>d4,d9>h9,s5>s1,h7>h1,s7>h7,s7>s5,c10>c3,s12>s7,d5>h5,c8>c10,s6>s8,d11>d12,h4>h3,c11>c2,h10>h2,h11>h12,h11>h10,h11>c11,h11>h4,d8>d11,s3>s6,d13>d8,d13>s13,d13>d5,h13>h11,h13>h6,c13>d13,c13>c8,s3>s12,c13>h13,s9>s3,s9>d9,c9>c13,c9>s9,c4>c9,

d3,c5,h8,d13,h7,c10,h1,d12,s2,s9,h11,d4,s12,d10,c13,d1,h6,s13,d11,d9,s1,c4,c11,c7,s11,d7,c1,h12,s7,c12,h10,c3,c6,h13,s4,d6,c9,s10,s5,c8,h2,d8,h4,d2,h3,h9,d5,c2,s3,s8,s6,h5  
**580/1000: solving: solved in 67451 tries.**  
d13>d3,h7>h8,s9>s2,h11>h1,s12>d12,s9>s12,d10>d4,d10>c10,d10>d13,h11>h7,c13>c5,h6>h11,d9>d11,d9>s9,d9>d10,d1>d9,s1>s13,s1>d1,c11>c4,c7>c11,c1>c7,c1>s1,c13>c1,h12>h6,s7>d7,s7>s11,c12>c13,h12>c12,c6>c3,d6>c6,c8>c9,s5>s4,d8>c8,d8>d6,s10>s5,h9>h4,h9>h13,s10>h10,h3>h9,c2>h2,d2>c2,s3>h3,d5>d2,s6>s3,s6>s7,s10>s6,s8>s10,d8>s8,d5>d8,h5>d5,h5>h12,

c12,h5,d7,h2,d13,s7,s6,s3,h10,h12,s12,s11,s4,c5,h1,c6,s5,d12,d5,h13,d1,d11,c2,s13,c1,d3,h3,h8,h11,s9,c11,c8,d9,h7,c3,s8,c10,s1,d2,d4,c4,h9,c7,s2,s10,c13,h4,h6,c9,d10,d8,d6  
**581/1000: solving: solved in 836 tries.**  
s7>d7,s6>s7,s3>s6,h12>h10,s12>h12,s12>s3,s11>s12,s4>s11,h1>h2,c6>c5,d12>d13,d5>s5,d11>d1,s13>h13,c1>c2,h3>d3,h8>h3,h11>h8,c11>c1,c11>d11,c11>c6,h11>c11,s9>s13,d9>d5,s9>d9,h7>h11,c3>c8,d4>d2,c4>d4,s10>s2,c9>c13,c9>h9,c9>c4,c7>c9,s10>c10,s10>s8,s1>s9,s1>h1,s1>s4,h7>h5,s10>s1,c7>c3,h6>h4,d10>d12,d10>s10,d8>d10,d6>d8,c7>c12,h7>c7,h6>d6,h6>h7,

h13,c5,h1,d13,s1,c11,s2,s13,h8,s7,s4,s5,d6,s12,c13,s8,s10,c10,d2,h10,s11,d3,d10,s6,h2,c8,c4,d1,d9,h11,d7,c7,h3,c6,c9,c3,h9,c2,d11,h4,d4,s3,h12,c1,s9,h5,h6,c12,d5,d8,d12,h7  
**582/1000: solving: solved in 647976 tries.**  
d13>h13,s1>h1,s13>s2,s4>s7,s5>s4,s10>s8,c10>s10,c10>c13,d2>d6,h10>c10,d10>d3,c4>c8,d9>d1,h11>h2,h11>s11,h11>h10,d10>d2,d7>d9,c7>d7,c7>c4,h3>h11,c6>c7,c6>s6,c9>c6,h4>h9,d4>h4,c2>c9,s3>c3,s3>s12,h3>s3,d4>d10,c1>c2,d8>d5,d12>d8,h7>h6,h7>h12,h7>h3,d11>d4,h5>h7,h5>h8,s5>h5,s5>s13,s5>c5,d11>c11,d11>d13,s9>s5,s1>s9,c1>s1,c12>c1,d12>c12,d12>d11,

d9,h9,c7,s1,h1,s2,s6,h10,h8,h3,d4,s3,s9,h6,d5,c4,s5,d12,c9,c13,h12,c2,s11,d2,c11,d8,h13,d1,d13,c5,d7,h11,c1,c10,c6,c8,c3,h7,s7,h2,c12,s10,s8,s13,s4,d3,d6,h5,d10,s12,h4,d11  
**583/1000: solving: solved in 3615 tries.**  
h9>d9,h1>s1,s6>s2,h8>h10,h3>h8,s3>s6,h3>s3,h3>h1,h6>h3,c4>d4,s5>d5,s5>s9,c9>c4,c9>h9,c7>c9,c11>c2,s11>c11,d8>d2,h13>h12,h13>c13,h13>h6,d1>d8,d13>d1,c1>c5,c10>c1,c6>c10,c8>c6,c3>c8,h7>h11,h7>d7,s7>h7,c12>c3,c12>d12,c12>c7,s11>s5,s8>s10,s13>s8,s13>d13,s7>s13,d6>d3,h4>h5,h4>h2,h4>h13,s4>h4,s12>s7,s12>c12,s4>s12,s11>s4,d10>d6,d11>d10,d11>s11,

s9,s11,d11,s1,c2,d3,c4,d13,c7,c8,d2,h10,d1,c3,c1,d12,c11,s13,c9,h2,h7,h4,s12,d5,c12,h11,s4,h5,c13,s8,c5,h3,d8,s10,s2,d4,h6,s5,d10,d6,h9,d9,d7,h12,s6,h8,s3,h13,c6,s7,h1,c10  
**584/1000: solving: solved in 19617 tries.**  
s11>s9,d11>s11,d3>d11,c4>c2,d13>d3,c7>c4,c8>c7,d2>d13,d1>s1,d1>d2,c1>c3,c1>d1,c8>c1,c11>c8,h7>h2,h4>h7,s12>s13,s12>d12,c9>c11,c12>s12,s4>h4,h5>h11,h5>d5,h5>h10,d8>s8,s2>s10,h6>h3,d6>d10,d9>h9,d9>d4,s6>d6,d7>d9,s6>s2,h8>h12,s7>s3,s7>d7,s5>s7,s5>c5,s5>s4,s6>h6,s6>s5,h8>d8,h1>h8,h13>h1,c6>s6,c6>c12,h13>h5,c13>c6,c13>h13,c13>c9,c10>c13,

c6,s11,d6,h2,d12,s8,d5,c4,s9,d10,d8,s5,h13,c1,d2,h12,d13,c7,d7,h3,s12,h6,d3,c5,h10,c2,s4,c10,s1,h9,h4,c13,s7,h5,c3,h11,s10,h1,c11,s2,d4,d9,h7,s3,c8,d11,s6,h8,s13,d1,c12,c9  
**585/1000: solving: solved in 80910 tries.**  
s9>s8,d8>d10,s5>d5,s5>s9,d8>d12,h12>h13,d13>d2,d7>c7,d7>d13,h3>h12,d3>d7,c10>h10,c10>c5,c2>c10,s4>s12,s1>s4,h4>h9,h5>h4,s10>s7,h1>h11,d9>d4,s3>s2,s3>c3,s3>s10,h1>h5,h1>s1,h1>h3,c1>h1,c1>c4,c2>c1,c2>h2,c2>c6,s3>d3,d11>d9,d11>c11,h8>h7,h8>h6,c8>h8,s13>c13,s13>s5,s13>s11,s6>s3,s6>s13,d6>s6,d11>d6,d1>d11,d8>d1,c8>d8,c8>c2,c12>c8,c9>c12,

h4,h6,c8,d2,c6,s7,s4,s2,d7,c9,s10,s1,d10,h7,d6,h12,h8,h9,d13,s5,d8,d1,c4,d4,d12,d5,h1,d3,s9,s6,c12,h13,c13,c2,s12,d9,d11,h3,c3,h5,c5,c11,c10,c7,c1,h11,s8,s13,h10,s3,s11,h2  
**586/1000: solving: solved in 1246 tries.**  
h6>h4,c6>h6,c8>c6,s4>s7,s2>s4,s2>d2,c9>c8,s1>s10,h7>d7,d6>d10,h12>h7,h8>h12,h9>h8,d13>d6,d1>d8,d1>s1,d13>d1,s5>s2,d4>c4,d4>d13,d12>d4,d5>d12,s6>s9,c13>h13,c13>c12,c2>c13,d11>d9,c3>h3,c3>c2,c5>h5,c5>c3,c11>d11,c10>c11,c7>c10,c1>c7,s3>s8,s3>s12,s3>d3,s6>s3,c5>d5,c1>c5,c1>c9,s6>s5,h1>c1,s13>s6,h11>h9,s11>s13,h11>s11,h11>h1,h10>h11,h2>h10,

d13,s4,h8,s7,s10,c9,h10,c5,c10,d5,d9,h4,h9,h3,s11,h6,h1,c13,s6,d7,h11,c2,d8,c8,c11,c3,c1,h5,d1,s12,s9,s2,c7,s5,h13,h12,d12,s1,c12,c6,h2,h7,c4,d2,d10,d3,d6,s3,d11,d4,s8,s13  
**587/1000: solving: solved in 53065 tries.**  
s10>s7,h10>h8,s10>h10,s10>s4,c5>c9,c10>c5,c10>s10,d9>d5,h9>h4,h9>d9,h3>h9,h1>h6,s6>s11,h11>h1,c8>d8,c8>c2,c11>c8,c11>h11,c11>c10,c13>c11,c13>d13,c3>h3,c3>c13,c1>c3,s9>s12,s2>s9,h12>h13,d12>h12,c6>c12,d2>h2,d2>d12,d2>s2,d2>d1,s5>h5,h7>c7,s1>s5,s1>c1,c4>c6,d10>d2,d3>d10,d4>d11,d4>c4,d6>d4,s3>d3,s8>s3,s13>s8,s13>s1,s6>s13,d6>s6,d7>d6,h7>d7,

s13,h6,h11,c6,c5,d1,c13,s1,h4,s4,c10,h3,c4,d5,d9,c12,s6,d12,s9,c7,d2,h13,h2,s3,c9,d10,d11,d3,h12,c3,h1,h5,h7,s12,c11,c1,s7,s5,c2,d8,d7,d4,h9,c8,s10,h10,s11,h8,s2,d13,s8,d6  
**588/1000: solving: solved in 10458 tries.**  
h11>h6,c5>c6,s4>h4,s4>s1,c4>s4,c4>c13,c10>c4,d5>d1,d5>c5,h3>h11,d12>d9,c12>d12,c12>c10,s9>s6,h2>h13,h2>d2,s3>s9,s3>h3,s3>s13,c7>c12,d11>d10,d3>d11,h12>h2,c3>d3,c3>c9,h5>h1,h7>h5,h7>c7,h12>h7,c3>s3,s12>h12,c11>c3,c1>c11,s7>s12,s5>s7,c2>c1,d7>d5,d4>d7,h10>h9,s2>s10,s11>s2,s8>s11,h8>h10,c8>h8,s8>s5,d8>s8,c8>c2,d8>d4,d8>c8,d13>d8,d6>d13,

d8,c7,h13,c8,d12,s12,c9,d13,c1,c10,s3,s9,d3,h3,c6,s6,s13,s4,h9,c5,c13,d6,h10,h6,d5,h4,d1,h2,h1,c4,h11,c2,d11,s2,d2,h12,h8,s5,s7,d10,h5,d9,s1,d7,s11,d4,c11,h7,s8,c3,c12,s10  
**589/1000: solving: solved in 607069 tries.**  
c8>d8,c7>c8,s12>d12,c9>c7,c10>c1,s3>s12,s9>s3,h3>d3,s6>c6,s13>s6,s13>d13,s13>s9,s13>h13,s4>s13,h9>h3,h9>c9,c5>c10,c13>c5,h6>h10,h6>d6,h6>h9,h4>s4,h4>h6,d1>d5,h2>h4,h1>d1,h8>h12,s5>s2,h5>h8,s1>s7,d10>d2,d4>d9,s10>s8,s10>s11,s10>s1,s10>s5,d10>s10,d7>d10,h7>h5,d4>d11,d4>c4,d7>d4,h7>d7,h7>h1,h11>h7,c2>h2,c13>c2,c11>h11,c11>c13,c3>c11,c12>c3,

s4,c11,s2,s1,h4,d10,c5,d1,s7,s8,c6,h10,h11,d7,c1,c10,c8,s5,c2,c4,d9,h12,s9,c13,h8,h9,s11,d3,c12,h3,s6,d11,h2,c7,d6,h1,d5,s12,h5,h13,h6,s10,s13,d8,d4,d12,d2,c3,s3,h7,d13,c9  
**590/1000: solving: solved in 14630 tries.**  
s1>s2,h4>s4,c5>c11,d1>d10,d1>s1,s8>s7,c6>c5,h11>h10,d7>d1,c10>c1,c8>c10,s5>s8,c2>c8,c4>c2,h12>h11,s9>d9,s9>s5,c13>c4,h9>h8,h9>s9,h9>h4,h12>h9,d3>d7,s6>s11,s6>c6,c12>c13,c12>h12,h3>d3,d6>d11,h5>h1,d5>h5,d5>d6,h13>h2,s13>s10,d4>d8,d12>d4,d12>s12,s3>s13,d13>d2,d13>d12,d13>d5,h13>d13,h13>h3,h6>s6,h13>h6,c3>s3,h7>h13,c7>h7,c7>c12,c3>c7,c9>c3,

d1,d13,c12,c8,s3,h11,s6,c13,c4,c11,h2,h13,c7,h7,s11,d9,h8,h6,d8,s4,h12,d2,d6,c6,s9,d4,s13,s1,d5,h10,d12,d10,h5,h3,c10,d7,s12,s2,c2,d11,s10,d3,s8,h9,c5,s7,c9,h1,h4,s5,c3,c1  
**591/1000: solving: solved in 3212 tries.**  
d13>d1,c8>c12,c4>c13,c11>c4,h2>h11,h13>h2,h13>d13,s6>s3,c7>c11,h7>c7,h7>h13,s11>s6,h8>c8,h8>h7,h6>h8,d8>d9,d2>d8,d6>d2,c6>d6,d4>s4,s13>s9,s1>s13,d5>d4,d12>h12,d12>d5,s1>s11,d10>h10,d10>d12,h3>h5,c10>c6,d10>c10,h3>h6,d7>d10,s2>s12,d11>d7,c2>s2,d3>d11,s10>s1,s7>s8,c5>c2,s7>s10,h4>h9,c3>c9,c3>d3,c5>c3,h4>h3,s5>s7,h1>h4,c5>s5,c1>c5,c1>h1,

d8,c10,c11,c3,s11,c5,h7,c7,s10,h6,s9,c6,d10,c1,d2,h5,s7,s3,d1,c2,d13,d11,d3,s1,s5,h2,h10,s8,h11,d5,d6,d4,c13,s13,d9,h4,h12,c4,h9,s12,c9,d12,h8,s2,c8,s6,s4,h13,d7,h1,c12,h3  
**592/1000: solving: solved in 27994 tries.**  
c11>c10,c3>c11,c7>h7,c7>c5,s3>s7,d1>d2,d1>c1,d1>d10,d11>d13,d3>d11,s1>s3,s5>s1,s5>h5,s5>s9,h10>h2,d6>d5,d4>d6,s13>c13,s13>s8,d9>d4,h12>h4,h9>d9,h9>h11,h12>h9,s12>s13,h12>s12,h12>h10,d12>h12,c4>c2,d12>d1,s4>s2,c8>c9,h8>c8,s4>c4,s6>s4,s6>s5,s6>h6,s6>s10,h13>h8,d7>d12,d7>c7,d7>d8,s6>s11,c6>s6,d3>d7,c12>c6,h1>h13,h3>h1,h3>d3,c3>h3,c12>c3,

d3,c3,d4,s8,d10,h13,c2,s12,s9,d8,d6,s1,h8,c5,h6,s11,s4,d11,d12,c10,h12,h1,c8,h9,h5,d13,c9,c1,h10,d9,c6,d2,s2,d5,c12,h3,h4,h11,c11,s10,d7,s5,s13,c4,h7,h2,c13,s3,d1,s7,c7,s6  
**593/1000: solving: solved in 14216 tries.**  
c3>d3,s9>s12,d6>d8,s4>s11,d12>d11,h1>h12,h5>h9,c9>c8,c1>c9,c1>h1,c1>c10,d13>d12,h10>h5,d9>d13,s2>d2,c12>c6,h4>h3,h11>h4,c11>h11,c11>c12,s5>d5,s5>s2,s10>h10,s10>s4,c11>c1,d7>d9,c4>c11,c13>s13,h2>h7,s3>s5,c7>s7,c7>c13,c7>d7,c7>c5,s6>s3,s6>h6,s6>s1,s6>d6,s6>s9,s10>s6,h2>h8,h2>h13,c2>h2,s10>s8,d10>s10,c2>c3,c7>c2,c4>c7,d4>c4,d10>d4,d1>d10,

s1,s12,s5,c9,c10,s9,s7,s13,d8,c3,h1,d6,d3,d7,c7,d5,c11,c6,c2,h10,h4,c13,h11,s6,h12,h9,s10,d1,h7,c1,c8,c5,d13,d4,s2,h3,s11,d2,h6,s4,d10,d12,s3,c12,h5,d9,h8,h2,d11,h13,s8,c4  
**594/1000: solving: solved in 146782 tries.**  
s12>s1,s5>s12,c10>c9,s7>s9,s13>s7,c3>c10,d3>d6,d7>d3,c7>d7,d5>d8,d5>s5,c7>c3,c11>c7,c6>c11,c2>c6,h10>h1,h4>h10,c13>c2,s13>c13,h11>h4,h9>h12,h7>h9,c1>d1,c8>c1,c5>c8,d4>d13,s2>s10,d10>d2,d12>d10,s4>s11,d11>d9,h2>h8,h13>h5,h13>h6,h13>h3,d11>d12,c4>c12,c4>s4,c4>c5,d4>c4,h13>h7,h13>s13,h11>h13,s2>s6,d4>d5,d11>d4,h11>d11,h2>h11,s2>h2,s3>s2,s8>s3,

h10,c13,d2,c2,d12,c12,h2,h4,s1,c3,s6,h3,d9,c8,h7,s7,h9,d6,d7,d4,c9,h6,d1,s11,h5,s8,s12,d13,c4,d3,h12,h8,c6,s5,h11,s9,s13,h1,c10,c5,c7,h13,d10,d8,s4,c11,s3,s10,d5,s2,c1,d11  
**595/1000: solving: solved in 341299 tries.**  
c2>d2,c2>c13,c12>d12,c12>c2,h4>h2,c3>c12,s6>s1,h3>c3,h3>h10,h4>h3,s7>h7,s7>s6,d6>d9,d7>d6,d7>s7,h9>h4,d1>d4,s12>s8,h8>h12,c6>c4,s13>s9,c5>c10,h13>h1,h13>s13,c5>s5,h13>h8,c5>c6,h13>d13,h11>h13,c5>h5,c5>c9,h11>h6,d8>d10,s10>s4,c11>c7,c11>s11,s2>s10,s2>s12,s3>s2,d3>s3,d8>d3,d5>d8,d5>c5,d5>d7,c11>c8,c1>c11,d1>c1,h11>h9,d1>d5,d11>d1,d11>h11,

s8,c8,h2,d7,c1,h9,h4,c13,h6,s1,d6,d3,d5,c12,s3,d4,c2,d10,h1,h7,s9,h11,d8,c5,d11,c4,s5,s4,c6,c3,c10,h12,s6,h3,d2,c7,c11,s13,h5,h8,s11,d13,c9,h10,s12,s2,d1,s7,d12,d9,s10,h13  
**596/1000: solving: solved in 6973 tries.**  
c8>s8,c1>c8,h4>h9,d3>d6,d5>d3,s3>s1,h7>h1,d11>h11,d11>d10,d8>d11,c4>c5,s4>s5,s4>c4,s4>s9,c3>c6,c10>c3,h12>h7,c11>c7,h8>h5,s11>c11,s11>s6,s13>s11,h10>h8,s7>s12,s2>s7,d1>d13,d9>c9,d9>d1,s2>d2,d12>d9,s10>s2,s10>c10,s10>s4,s13>s10,h10>h3,d12>h12,d12>d8,d12>c12,d12>d5,d4>d12,s13>s3,h13>h10,h13>s13,h13>h6,h13>c13,d4>d7,h4>d4,h13>h4,c2>c1,h2>c2,h13>h2,

d2,s1,s12,h12,s3,h2,c11,h1,h11,s10,s8,d11,d4,h4,c13,c10,s2,s5,s4,h9,h6,h13,h5,d7,s11,c3,d13,s7,c1,c8,d12,s9,c6,d3,d5,c2,d6,d10,d8,h3,h10,c9,c7,c4,d9,c12,h7,h8,s6,s13,d1,c5  
**597/1000: solving: solved in 553791 tries.**  
s12>s1,h12>s12,h2>d2,h12>h2,h1>h12,h11>c11,s8>s10,d4>d11,h4>d4,c10>c13,s2>s8,s5>s2,s4>s5,h4>s4,h4>h11,h6>h9,h13>h6,h5>h13,d13>d7,c8>c1,s9>s7,d5>d3,d6>c6,d10>d6,h10>h3,c9>c2,c12>c7,c12>c9,c12>d12,h10>d10,d9>d5,d8>d9,h7>h10,h8>h7,s13>s6,c5>c4,c5>c12,c5>c3,c5>h5,c5>c10,s9>s11,c8>c5,h8>c8,h8>h4,d8>h8,s9>s3,s13>s9,d13>d8,d13>s13,d1>d13,d1>h1,

c8,c10,d12,h6,h3,h13,s1,d9,h12,d3,h1,h5,s2,c1,d8,c2,d6,d7,s3,h2,c12,c4,c6,s7,d13,h4,h11,h9,s12,d4,s9,s4,s8,s6,d11,h8,s10,c3,d2,d1,d5,c5,c11,h7,h10,d10,c7,c9,s13,s11,s5,c13  
**598/1000: solving: solved in 8666 tries.**  
c10>c8,h3>h6,h13>h3,d9>d12,h1>s1,h1>h13,h12>h1,c2>s2,c1>c2,d8>d3,d6>d8,d7>d6,h2>h5,c4>c12,c6>c4,h11>h4,h9>h11,s12>s7,s4>s9,s4>d4,s4>s12,s8>s4,s6>s8,s6>c6,s6>s3,d1>d2,d5>d1,c5>d5,c5>c3,c11>c5,c11>d11,h10>h8,d10>h10,d10>d13,s10>d10,s10>s6,h9>h2,h9>d9,h12>h9,c1>c10,h7>d7,h7>h12,c7>h7,c7>c1,c9>c7,s11>s10,c11>s11,c11>c9,c13>c11,s13>c13,s5>s13,

d7,h1,s11,d10,s2,d2,h3,d13,h5,s10,h9,c9,c3,s3,s9,c4,s12,d11,c10,c11,d8,d1,s4,h8,c12,d6,c13,d3,s7,d12,c6,h10,h2,h6,s8,c7,d9,c5,s6,s1,d5,c8,c1,h12,h13,h7,c2,d4,h11,s13,s5,h4  
**599/1000: solving: solved in 93037 tries.**  
d10>d7,s2>s11,d2>s2,c9>h9,c3>c9,s3>c3,s3>s10,s3>h3,s9>s3,c10>c4,c11>d11,d1>d8,s4>s12,c12>c11,h2>h10,h6>h2,h6>c6,s8>s7,d9>d12,s6>h6,s1>s6,c8>c7,c8>s8,c5>c8,d5>c5,d5>d3,d9>d6,c1>c13,c1>d1,c1>c10,d5>d9,h12>h8,h12>c12,h12>h5,s1>c1,s1>s9,d5>d13,h11>h7,h11>h12,s4>s1,s13>h13,s5>s13,s5>s4,d5>s5,h4>h11,h4>h1,d5>d10,d4>h4,d4>d5,d2>d4,c2>d2,

d2,c6,c5,h4,s6,h5,s7,d13,d9,d7,c11,h3,s5,h7,c9,d1,c8,s10,h6,s8,c10,s9,d6,d3,d5,c13,h1,s13,c1,s4,h12,c2,s12,s1,h11,s11,c7,h9,c12,d8,c3,d11,s3,h10,h8,d4,d12,c4,d10,h2,s2,h13  
**600/1000: solving: solved in 84037 tries.**  
c5>c6,h5>c5,h4>h5,s7>s6,d13>d2,d9>d13,d7>s7,h3>h4,h7>d7,h7>h3,s8>c8,s8>s5,s10>s8,c10>c9,c10>s10,c10>c11,d1>d9,d3>d6,d5>d3,c1>c13,h1>c1,h1>h6,h1>d1,h7>h1,s4>s13,s12>s4,h12>s12,h9>h11,h9>h12,c3>c7,c3>c2,s11>s1,d11>s11,d11>d5,h8>d8,s3>c3,h8>h9,h10>h8,c4>c12,d4>c4,d4>d11,d12>d4,s2>s3,d10>d12,s2>s9,h2>s2,h10>d10,h10>h2,h10>c10,h10>h7,h13>h10,

s7,c11,s2,s1,s8,s10,s11,c10,d4,s5,d9,d8,s3,c7,h9,d11,h11,c13,d6,s6,c6,c12,c4,h10,d1,h13,d12,h5,h2,h7,c9,h1,s9,h12,c8,h6,s4,d7,d13,d10,d2,d5,s12,c3,h4,s13,c5,d3,c1,c2,h8,h3  
**601/1000: solving: solved in 170243 tries.**  
s1>s2,s8>s1,s10>s8,s11>s10,s11>c11,s11>s7,s5>s11,d9>d4,d8>d9,s3>s5,d11>d8,h11>h9,s6>d6,c6>s6,c6>c13,c12>c6,c4>c12,h2>h5,h7>h2,d13>d7,d10>d13,d2>d10,c2>c5,c2>c3,c2>d2,s12>s4,d3>d5,h8>h4,h3>h8,h3>d3,c1>c2,c1>c8,c1>h1,c1>c9,s12>s9,s12>d12,h12>s12,h12>h10,h7>h12,h7>c7,h11>h7,c1>c4,c1>c10,d1>c1,d11>d1,h11>d11,h13>h11,h3>h6,s13>s3,h13>s13,h3>h13,

d12,c4,c13,h9,d4,d3,s1,c7,s3,h6,d8,h11,s5,c6,h8,h4,s12,d1,s6,h7,h2,d11,c3,h12,s13,s9,s2,d7,c11,c2,d9,c5,h3,d5,s4,h13,d10,s11,d13,d6,h10,c9,c1,s8,s7,h5,c12,d2,c8,c10,s10,h1  
**602/1000: solving: solved in 85292 tries.**  
c13>c4,d4>d12,d3>d4,c7>c13,s3>s1,s3>d3,h6>h9,h8>h11,h8>d8,h8>h6,s5>s3,h2>h7,d11>d1,s9>s13,s2>s9,s2>h2,s2>s6,c11>c3,c2>c11,c2>s2,h12>s12,h12>h4,c2>c6,d7>d11,d9>d7,c5>c2,c5>s5,c7>c5,h12>h8,s7>s8,c12>c1,c10>c8,s10>c10,s10>s7,s10>h10,s10>s11,s10>s4,h13>h3,d10>s10,d13>h13,d10>d9,c12>c9,d2>d6,d2>d10,d13>d2,d5>d13,c12>c7,h12>c12,h5>d5,h5>h12,h1>h5,

s11,c2,s12,h3,h8,c4,h7,h12,c9,d4,h11,s4,c6,d10,d12,d11,d8,d5,d6,s7,h1,s2,s9,s13,h13,c5,c12,d3,c3,h5,s1,d1,c13,d9,h10,c11,s8,d13,s10,h2,h6,s5,c1,h9,d2,s6,h4,c7,s3,d7,c8,c10  
**603/1000: solving: solved in 220830 tries.**  
h8>h3,c4>c2,h7>h8,h12>h7,h12>s12,d4>c4,c6>c9,d12>d10,d11>d12,d8>d11,d5>d8,d6>d5,d6>c6,s7>s4,s9>s2,s13>s9,h13>s13,h13>h1,c12>c5,c3>d3,c3>c12,d1>s1,c13>c3,c13>h13,h10>h5,h10>h11,c11>c13,d13>d1,d9>d13,h6>h2,h9>h6,s6>s5,s6>s8,s6>s7,s10>s6,c7>c1,c7>c11,d7>d2,d7>c7,d7>d6,d9>d7,h9>d9,h9>h12,h10>h9,h4>d4,h10>h4,s3>s11,s10>h10,s10>s3,c10>c8,c10>s10,

d10,s2,h5,s4,h6,c4,s13,h4,h9,s11,d9,s10,h7,h3,h11,c13,h10,c2,d7,s8,c11,c12,c9,d12,h12,h1,s3,c7,h8,d5,d11,c6,s5,c10,d8,c8,d4,h2,d1,s1,h13,c1,s9,s6,c3,d6,d3,d2,d13,s12,c5,s7  
**604/1000: solving: solved in 6492 tries.**  
s13>s4,h4>c4,h4>h6,h9>h4,h3>h7,h11>h3,h11>s11,h11>h9,s10>s13,s10>d10,s2>s10,h11>h5,h10>h11,c2>c13,c2>s2,d7>d9,c12>c11,c9>c12,d12>d7,h12>d12,h12>h10,c9>c2,h8>h1,h8>s8,h8>h12,c7>c9,d11>d5,s5>s3,c10>c6,c8>d8,c8>c10,c8>h8,c8>c7,d4>d11,s1>d1,c3>c1,s9>s1,d3>c3,d2>d3,d2>h2,d13>h13,d13>d4,d2>d13,d6>d2,s6>s9,s6>d6,s12>s6,c5>c8,s5>c5,s12>s5,s7>s12,

s11,h3,d10,s10,c8,s5,s7,h4,c4,d11,h2,d12,c2,d5,c5,h7,h11,d9,d3,s13,d6,h5,d8,c3,d13,d7,h1,c7,d1,s6,c1,h6,c12,c6,c13,s9,s3,s2,h12,s8,h9,c9,h10,d4,s4,s12,s1,d2,c10,h13,h8,c11  
**605/1000: solving: solved in 4056125 tries.**  
s10>d10,s7>s5,c4>h4,c5>d5,c5>c2,h7>h2,h7>s7,h7>h3,c4>c8,d12>d11,d9>d12,d3>d9,h5>h11,h5>c5,d6>d3,d8>d6,d7>d13,c7>c3,d7>c7,d7>d8,d7>h7,s13>s10,h1>h5,d1>h1,d1>d7,c6>c12,c6>h6,c6>c4,c13>c6,s3>s6,s2>s3,h9>s9,c9>h9,s4>d4,s12>s4,s12>h12,c10>h10,s1>s12,h8>h13,c11>c10,c11>c9,c11>c13,c11>s11,s2>s13,c1>c11,d1>c1,s8>s1,d2>d1,s2>d2,s8>s2,h8>s8,

c10,s3,h9,d11,h8,c5,h10,s12,s10,s6,d1,h5,c9,s7,c13,d9,c2,s2,h1,h7,h2,h11,d2,s4,d12,c6,h4,h3,s13,s1,h6,c3,d7,s5,s11,d8,d6,c4,d5,d13,d10,s9,c12,d3,c8,d4,c7,h13,c11,c1,s8,h12  
**606/1000: solving: solved in 183509 tries.**  
s10>s12,s10>h10,s6>s10,h5>c5,h5>h8,d1>d11,d9>c9,d9>d1,d9>h9,s6>s3,s7>s6,c2>c13,s2>c2,s2>s7,h1>h5,h7>h1,h2>h7,h11>h2,d2>s2,d9>d2,d12>d9,h4>h11,s4>h4,c6>c10,s1>s13,c3>h3,c3>c6,s1>s4,d7>d12,s11>s1,d6>h6,d3>d10,c8>c12,d4>d3,d4>c4,d4>d6,d5>d4,s5>d5,s5>s11,c11>c8,c1>c11,c7>c1,s8>s9,s8>s5,d8>s8,d13>d8,c7>c3,d7>c7,d13>d7,h13>d13,h12>h13,

h8,h3,d7,s10,s3,h6,c13,d2,c9,s13,d11,s7,s5,c3,d4,h5,c12,h4,d12,c7,s9,c1,c8,d13,d8,d10,c10,c11,c5,s4,s2,c4,c6,h12,h2,h11,d3,d9,s12,h7,s8,d5,c2,h1,s1,h10,s6,d6,d1,h13,h9,s11  
**607/1000: solving: solved in 90480 tries.**  
h3>h8,s3>s10,h6>h3,d2>d7,c9>c13,s5>s7,d4>d11,c7>c12,c8>c1,d13>d12,d8>c8,d10>d8,c10>d10,c11>c10,c5>c11,s2>s4,c6>c4,h2>s2,h11>h12,d9>d3,h7>h11,d1>d6,d1>s1,d1>d5,d1>d9,s8>s12,h1>d1,s6>s8,h10>h1,h13>h10,h13>h2,h13>d13,h13>h5,c5>c7,c5>s5,c5>c9,c3>c5,c3>s3,h4>h13,h4>d4,h9>h7,h9>h4,s9>h9,c6>c3,s9>s13,s6>s9,c2>d2,c6>c2,c6>h6,s6>c6,s11>s6,

d9,c3,s2,s8,d4,s7,d8,h7,d6,s5,c11,s13,h11,d10,h10,s4,s1,s9,d11,s12,c10,c5,h2,h6,c7,c6,s3,c2,d5,s10,h13,c9,d12,d2,s6,h5,d1,c13,c8,c1,h8,s11,h4,h1,d7,h9,c4,d13,c12,d3,h3,h12  
**608/1000: solving: solved in 454 tries.**  
s8>s2,d4>d9,s7>s8,d8>d4,h7>s7,d6>d8,c11>c3,s13>s5,h11>c11,h7>h11,d10>d6,h10>d10,h7>h10,s4>s13,s1>s4,s9>s1,c5>c10,h6>h2,c6>c7,c6>h6,c6>c5,s10>s3,c9>c2,d2>d12,h5>h13,h5>d5,c8>c13,c1>c8,c1>d1,s11>s6,h4>h8,h1>h4,h1>c1,d7>d2,h1>h5,h9>h1,h9>c9,s11>s10,s11>d11,s11>s9,s12>s11,c4>c6,h9>h7,d13>d7,c12>s12,d3>d13,h3>d3,h3>h9,h12>h3,c12>h12,c4>c12,

c1,s13,s4,h8,h9,d12,d10,c13,d4,c3,h5,d5,h13,h6,h3,s10,d7,d2,s11,s7,d11,s12,d6,d13,h7,c10,c12,s1,h2,c2,s6,s3,d3,s8,d1,h10,c5,d8,c6,h12,h1,c9,h4,s5,c8,s9,c7,d9,s2,c11,c4,h11  
**609/1000: solving: solved in 4456 tries.**  
s4>s13,h9>h8,d10>d12,d5>h5,h6>h13,h3>h6,d7>d5,d2>d7,s11>s10,s7>s11,d11>d2,s12>s7,d6>d11,d13>d6,d13>c13,d13>d10,d4>d13,h3>c3,c12>c10,s1>s12,c2>h2,c2>c12,s6>s1,s3>s6,s3>h3,s3>s4,d3>d4,d8>d1,d8>s8,d8>d3,c6>c5,c8>c9,h4>h12,c7>c8,c7>c6,h1>h10,c7>h7,c2>c7,s2>s5,s2>c2,s9>s2,s9>s3,h9>s9,h4>h1,c4>h4,c4>c1,d9>d8,c11>c4,h11>c11,h9>h11,d9>h9,

h8,h3,c2,d10,d13,d2,d12,s11,s3,c3,h6,s8,c7,d11,c1,d6,s5,c10,c13,s2,c8,s7,s4,d8,s12,c12,h7,c11,h11,s1,h4,s10,c5,h1,c9,h2,c6,h12,d7,s13,c4,d5,s6,h5,h13,h9,d4,d9,d1,s9,d3,h10  
**610/1000: solving: solved in 2545 tries.**  
h3>h8,d13>d10,d2>d13,d2>c2,d12>d2,s3>s11,c3>s3,h6>h3,c10>c1,c13>c10,s2>s5,c8>c13,c8>s8,c8>c3,c7>c8,d6>d11,d6>h6,d12>d6,s7>s2,s7>c7,s4>s7,s12>d12,s4>s12,h11>c11,h11>h7,h1>h4,h1>s1,h1>h11,c5>c12,c9>c5,s6>s13,s6>c6,h5>d5,h5>h12,h13>h5,h9>h13,d4>c4,d4>d7,d9>d4,d3>d9,d1>d3,s9>s6,h9>s9,h9>h2,h9>c9,h1>h9,d1>d8,s10>s4,h1>d1,h10>h1,h10>s10,

s10,d13,h11,h8,d5,h9,h5,c6,d6,s11,h13,c5,h6,s13,h12,h2,h4,d2,c2,c1,d4,d1,s1,s7,h7,h1,c10,c12,c7,s9,s8,d7,c9,c11,s5,c13,c8,d8,s12,d12,s3,d11,s2,s6,c3,h3,h10,c4,s4,d9,d3,d10  
**611/1000: solving: solved in 162524 tries.**  
h8>h11,h5>h9,h5>d5,h5>h8,d6>c6,h13>h5,h13>d13,s11>s10,h6>h13,d6>h6,s13>s11,h2>h12,h4>h2,d2>d6,c2>d2,c5>c2,d1>d4,d1>c1,s1>d1,s1>s13,s7>s1,h7>h4,h1>h7,c12>c10,c7>c12,c7>s7,c5>c7,s8>s9,c11>c9,s5>s8,c13>c11,c8>c13,d8>c8,d12>d7,s2>s12,h10>h3,s4>c4,s4>s6,s4>s2,s4>s5,s3>s4,d8>d12,d11>d8,d9>d11,d3>d9,d3>s3,h10>h1,d10>h10,d3>d10,c3>d3,c3>c5,

s1,h3,h13,h2,d10,d9,d5,h7,s6,c12,c11,s10,d12,d3,s3,c3,d6,c7,s4,d11,h12,c5,h8,d8,d2,c4,d1,c9,s2,c10,c6,h1,c1,h5,s8,s5,s13,s7,h11,c2,s9,h10,h9,c13,s12,d4,d7,h6,c8,s11,h4,d13  
**612/1000: solving: solved in 114567 tries.**  
h13>h3,h2>h13,d9>d10,d5>d9,c11>c12,d3>d12,s3>d3,s3>s10,c3>s3,c3>c11,d11>d6,c5>c7,h8>h12,d8>h8,d8>d11,d2>d8,c4>s4,c4>c5,c6>c10,c1>h1,c1>c6,c1>d1,c1>c4,c9>c1,s5>s8,s5>h5,s13>s5,s7>s13,c2>s2,c2>c3,d2>c2,s7>s6,d2>d5,h11>h7,h9>h10,s12>s9,c13>c9,h4>h6,h4>h9,d4>h4,d7>d4,s11>s12,s11>h11,s11>s1,s7>s11,d2>h2,d7>s7,d2>d7,d13>d2,c13>d13,c8>c13,

d3,s9,c8,h9,d12,s5,s11,c7,c5,d2,d13,d6,h3,c11,c1,c4,s10,s8,h10,h7,h13,h12,h8,s13,s2,h4,s12,h6,h11,d5,s4,d10,h2,c10,c12,d11,d9,h1,c9,d8,d1,s6,s7,d7,c3,c2,s3,c6,c13,d4,s1,h5  
**613/1000: solving: solved in 242510 tries.**  
s11>s5,c5>c7,d2>d12,d13>d2,d6>d13,c11>s11,c11>c8,c5>c11,c4>c1,s8>s10,h10>h3,h7>h10,h13>h7,h12>h13,h8>s8,s2>s13,h4>c4,h4>h12,h8>h4,s12>s2,h6>d6,h6>h9,h8>h6,s12>s9,h11>h8,c12>c10,d11>d10,d11>h11,d11>d3,d5>c5,d1>h1,d8>d9,s7>s6,d7>s7,c2>c9,d7>d8,c6>c2,c13>c6,c13>c12,c3>c13,d4>d7,s3>c3,s1>s3,d4>s4,d4>d11,s1>s12,d1>s1,d1>d4,d5>d1,h5>h2,h5>d5,

h11,h6,s8,h9,s4,d6,d5,h2,s7,s1,s9,c4,s10,s6,d11,s5,c7,d7,h10,c3,s13,c10,c8,d13,d8,d10,c11,c5,c13,d2,c6,h4,s12,d9,h12,h5,c12,d12,s11,s2,c9,c2,d1,h13,d4,h3,s3,c1,h7,d3,h8,h1  
**614/1000: solving: solved in 11106 tries.**  
h6>h11,d5>d6,h2>h9,s1>s7,s9>s1,c4>s4,s10>s9,s6>s10,s5>d5,s5>s8,s6>s5,s6>h6,d7>c7,d7>d11,h10>h2,c8>c10,d8>d13,d8>c8,d8>d7,d10>d8,c5>c11,c13>c5,c13>s13,c13>c3,h12>h4,s12>h12,d9>d2,c12>c6,s12>c12,d12>d9,s12>d12,s2>s12,c2>c9,c2>s2,c2>c4,h13>h5,h13>c13,d1>d10,h3>h13,d4>d1,h3>h10,s3>s11,c1>c2,d3>d4,s3>d3,s3>s6,h3>s3,h8>h7,h1>h8,h1>c1,h1>h3,

s11,h7,d1,h9,c6,s9,h11,h1,d2,h5,d13,c1,d7,s5,h3,h4,c5,s2,c9,c3,d4,d6,s6,c4,s1,h12,c2,s3,s13,h6,d12,h10,d5,s4,d11,s12,s7,c13,d3,d9,c7,h8,c10,d10,d8,s10,c11,c12,s8,h13,h2,c8  
**615/1000: solving: solved in 131 tries.**  
h11>h9,h11>s11,h7>h11,h1>d1,h1>h7,h4>h3,s2>s5,c9>c5,c3>c9,d6>d4,s6>d6,s6>s2,c4>c3,c4>h4,c4>c1,s1>s6,s3>s1,s13>s3,s13>d13,s13>s9,d7>d2,d12>h12,d12>d7,c2>c4,h10>h6,d5>h5,d5>d12,c2>c6,s4>s13,s7>s12,d3>d11,d9>d3,c7>c13,c7>s7,h8>h10,c10>c7,d10>c10,d10>d9,d8>d10,d8>h8,d8>d5,s8>s10,s8>d8,s8>s4,c12>c11,h2>h13,c8>s8,c12>c8,h2>h1,c2>h2,c12>c2,

c7,h7,d3,h10,s13,c3,s9,c12,d4,s2,h8,h9,h12,s6,c11,h4,s5,d2,c13,c8,h6,d9,c6,h2,h13,s7,c4,c5,s1,s4,d10,h5,d8,c9,d6,d7,c1,d1,c10,d5,s12,c2,s10,h3,d13,s8,d12,s11,s3,h11,d11,h1  
**616/1000: solving: solved in 107474 tries.**  
h7>c7,c3>d3,s9>s13,c12>c3,h9>h8,h9>s9,h9>h10,h12>h9,h12>c12,h12>h7,s6>s2,h4>d4,h4>h12,c13>c11,c8>c13,h2>h6,h2>d2,h13>h2,c5>c4,s4>s1,h5>c5,d8>d10,d7>d8,d7>s7,d1>c1,c10>c9,d1>d6,d5>d1,s12>s4,d5>h5,d5>d9,s10>s12,c10>s10,c2>c10,d13>d7,d13>h13,d5>d13,d5>s5,c6>s6,c2>c6,c8>c2,s8>c8,h3>h4,d12>d5,s3>s8,s3>h3,d11>d12,s11>d11,s11>s3,h11>s11,h1>h11,

c9,s12,s7,h10,s2,s8,h8,c7,s10,h4,s6,h11,h7,s13,d13,d8,h5,c1,d1,d7,h12,d3,c2,h13,c13,d12,c6,c3,s9,s3,h2,s4,d5,c10,d4,c12,h3,h9,d9,s1,s5,c11,c5,c8,d6,c4,d11,h1,d10,d2,h6,s11  
**617/1000: solving: solved in 58992 tries.**  
s7>s12,s8>s2,h8>s8,h8>h10,c7>c9,s7>c7,h7>h11,d13>s13,d8>d13,d1>c1,d7>d1,d7>h7,d8>d7,h5>h4,h12>h5,d3>d8,c13>h13,c13>c2,c3>c6,c3>d3,c13>c3,d12>h12,s3>s9,d4>s4,d5>d4,c12>c10,h3>h2,h3>s3,h9>h3,c12>c13,d9>d5,d9>h9,s5>s1,c11>c12,c4>c5,c8>c4,d10>d6,d2>d10,d2>d9,d11>d2,d11>d12,h6>h1,s11>s5,s11>d11,s11>s10,s6>s7,c11>s11,c8>c11,h6>s6,h8>h6,c8>h8,

d2,d8,c10,h1,d13,d5,s8,d10,h9,c12,s10,s13,h2,s12,d12,s7,d3,h5,s9,s5,s11,c11,h13,s6,h4,c9,h6,d9,c6,s2,h8,c3,c1,c4,d4,h11,s3,d11,s1,c13,h7,h12,d1,d7,c2,h10,d6,h3,s4,c7,c5,c8  
**618/1000: solving: solved in 749134 tries.**  
d8>d2,d13>d8,d5>d13,d10>c10,d10>d5,s10>s8,s13>s10,d12>s12,s9>s7,s5>h5,s11>s5,c11>s11,h6>s6,h6>h13,h4>h6,d9>c9,d9>d3,d9>s9,d9>d12,d9>h9,d9>d10,h2>h1,c11>c12,h4>h2,c6>c11,c3>c6,c1>c3,d11>d4,h12>h7,d1>s1,d1>d11,h10>h12,c2>c13,h3>h10,h3>h11,h3>h8,s3>h3,s3>s13,c2>s2,d1>c1,c4>c2,d6>d1,d6>d9,s4>s3,s4>h4,d7>d6,c4>s4,c7>c4,c7>d7,c5>c7,c8>c5,

h6,h7,c9,d13,h13,d10,c12,d3,c13,c3,h5,c1,s1,c6,c10,c11,s6,s5,d1,s11,d4,s8,h1,s4,h2,d5,c4,h9,d8,h4,s9,d2,s10,d11,h3,h11,s13,s7,d7,s12,c8,c2,d6,h12,d9,h10,s2,c5,c7,d12,h8,s3  
**619/1000: solving: solved in 20447 tries.**  
h7>h6,h13>d13,c12>c9,d3>d10,c13>c12,h13>c13,h13>h7,c3>d3,s1>c1,c6>c3,c10>c6,c11>c10,s6>s1,s5>s6,s5>h5,s11>c11,s5>s11,d4>d1,s4>d4,s4>s5,s8>s4,h2>h1,h9>h2,d2>d8,s10>s9,d11>d2,h11>h3,h11>d11,h11>h9,h4>h11,s7>s13,d7>s7,d7>d5,c8>c4,h12>s12,c2>c8,d9>d6,h10>s10,h10>h4,h12>h10,c7>c5,d12>d9,d12>h12,d7>d12,c7>d7,c2>c7,s2>c2,h8>h13,s8>h8,s2>s8,s3>s2,

s10,d11,c13,h5,d8,h10,d9,d3,s4,h2,h13,c7,d12,c9,c8,d7,c1,c12,d10,d2,h11,h9,d4,h6,s8,h12,s1,s3,d13,s6,s5,s7,s11,c5,s12,c10,d5,d1,s2,c3,c6,c4,s13,h8,c2,h1,c11,h7,d6,h3,s9,h4  
**620/1000: solving: solved in 21525 tries.**  
d8>d11,h10>h5,h10>s10,d3>d9,h13>h2,h13>c13,d12>d3,c9>c7,c8>c9,d7>d12,c1>c8,c12>c1,d10>d7,d10>h10,d8>d10,h9>h11,s3>s1,s5>s6,s7>s5,s11>s7,d5>c5,d1>d5,c6>c3,c4>c10,c2>c6,c2>s2,s13>s12,s13>d13,s13>s8,s11>s13,c11>c2,h1>h8,h3>h1,h4>h7,h4>c4,h4>h12,h4>d4,h4>h9,h4>s4,h4>h13,h6>h4,d6>d1,d6>d2,d6>d8,h6>d6,c11>c12,s11>c11,h3>h6,s3>s11,s3>h3,s9>s3,

d8,c11,c3,s6,c13,d9,s12,h7,h9,s9,s7,s8,h11,d5,h1,d10,d13,d12,c10,d11,d1,s11,d4,c5,h5,h3,h4,c1,s5,h2,h13,c6,c7,d7,c2,h6,h10,c8,d2,s1,s10,s4,d6,s3,s13,c4,h8,c12,h12,c9,d3,s2  
**621/1000: solving: solved in 15107 tries.**  
c3>c11,s12>s6,h9>h7,h9>d9,s9>h9,s7>s9,s8>s7,d13>d10,d12>d13,d1>d11,d1>h1,d1>d5,d12>d1,s11>h11,s11>s8,d12>s12,h5>c5,h3>h5,h4>h3,h4>d4,h2>h4,h13>h2,h13>c13,c1>c10,c7>c6,d7>c7,c2>c1,s10>s1,s10>h10,s10>s5,d2>d7,s13>s3,c4>s4,c4>c8,d6>d2,h6>d6,h8>h6,s13>s10,s13>h13,s11>s13,h12>h8,h12>d12,c12>c4,c12>h12,c9>c12,s2>s11,c2>s2,c2>c9,d3>d8,c3>d3,c2>c3,

s3,s2,s8,s11,h9,c7,c5,c1,c11,c6,d10,h1,c13,d5,c10,d4,d6,d2,s7,s13,h6,c9,h3,h13,d13,d1,s4,h10,c2,h7,h4,d11,c12,s12,d7,s5,d9,s10,s6,s9,h11,h2,c4,c8,h8,s1,c3,d3,d8,d12,h12,h5  
**622/1000: solving: solved in 2337 tries.**  
s2>s3,s8>s2,s11>s8,c5>c7,c1>c5,c11>c1,c6>c11,h1>h9,c10>d10,c10>c6,c13>c10,d4>d5,d6>d4,d2>d6,s13>s7,h13>h3,h13>s13,h13>h1,c13>h13,c9>c13,d1>d13,h10>h6,h4>h7,c12>c2,s12>c12,s12>s4,h4>h10,d7>d11,s6>s10,s9>s6,s9>d9,s9>s5,h2>h11,c8>c4,h8>c8,s1>s9,s1>d1,s12>s1,h2>h4,h2>d2,h8>h2,s12>s11,c3>c9,d3>c3,d8>d7,d8>h8,d8>d3,d12>d8,d12>s12,h12>d12,h5>h12,

s3,h7,h11,d7,d4,s11,s13,s4,h4,s8,c7,c2,s7,c5,h10,c9,d10,s10,s2,c12,d6,d13,c11,c13,h3,h1,h6,d9,d3,c6,s1,h8,d2,c3,s9,d5,h2,c10,s5,d8,d11,h13,d12,h9,s6,c8,d1,c4,s12,h12,h5,c1  
**623/1000: solving: solved in 4103 tries.**  
h11>h7,d4>d7,s11>s3,h11>s11,s4>s13,s4>d4,h4>s4,h4>h11,c2>c7,s10>d10,s2>s10,d13>d6,c13>c11,c13>d13,c13>c12,h1>h3,h6>h1,d3>d9,c6>c13,h6>c6,h6>h10,d2>d3,d2>s2,s9>s1,c10>c3,h2>h8,s5>d5,s5>s9,d11>d8,h13>h2,d12>d11,h9>h13,h9>c9,h9>h6,s5>c5,s5>s7,c8>c10,s12>s6,s12>d12,d1>d2,c1>c4,c1>d1,c1>c2,h12>h9,c8>c1,h5>s5,h5>h4,h12>h5,s12>h12,s8>s12,c8>s8,

d4,d5,h3,c1,d6,h4,s13,d11,c12,s5,s9,s1,h10,h5,s12,c13,s10,c3,c10,h11,d12,d9,c7,d13,c9,d8,d7,d10,s11,s2,c2,c6,s8,h2,h6,h9,d3,h7,h13,c4,h12,h8,c11,s6,h1,s4,s3,d1,s7,c8,c5,d2  
**624/1000: solving: solved in 95174 tries.**  
d5>d4,d6>d5,s5>s13,s9>s5,s1>s9,h5>h10,c13>c12,s10>s12,c3>c13,c10>s10,d9>d12,c7>c10,d13>d9,c9>c7,d8>d13,d7>d8,d10>d7,s2>s11,c2>s2,c2>c9,c6>c2,h2>h11,h6>h2,h6>c6,h6>h5,d10>d11,h13>h7,h8>h13,h8>s8,h8>h6,h9>h8,c4>c3,d3>d10,h12>h9,h1>h12,h1>s1,s4>c4,s4>h4,h1>h3,s7>s6,s7>s4,c8>c11,c5>c8,s3>s7,d3>s3,d2>d3,d2>d6,c1>h1,d1>d2,c1>d1,c5>c1,

s12,c7,c10,h11,h10,s10,s13,c9,d7,h6,s11,s5,c1,d1,c6,d5,d3,d6,h5,d13,s7,c8,c5,d8,d2,s1,d9,h7,d11,h1,h9,h3,d12,s4,h12,s9,h8,h4,c2,c3,c12,d4,s3,h2,h13,s8,s2,c11,c13,s6,d10,c4  
**625/1000: solving: solved in 141353 tries.**  
c10>c7,h10>h11,h10>c10,s10>h10,s10>s12,s13>s10,s5>s11,d1>c1,d1>d7,d3>d5,d6>d3,d6>c6,d6>d1,h6>d6,s5>s13,h5>h6,c5>c8,c5>h5,c5>c9,c5>s5,d2>d8,h9>h1,h9>d9,h7>h9,h7>s7,h12>h3,d12>h12,d12>d11,s9>s1,h4>h8,h4>s4,c3>c2,d4>h4,d4>d12,c12>c3,c13>c11,s6>s8,s6>s3,s2>s6,s2>s9,s2>d2,h2>s2,h2>h7,h13>h2,h13>d13,c13>h13,c12>c5,c13>c12,c4>c13,d4>c4,d10>d4,

d7,h5,h13,c8,c1,c9,d1,h6,h1,d4,c13,s10,h8,s11,s8,s13,c2,h4,d8,d5,s6,s7,s1,s12,d2,c4,c3,s5,h7,h10,c6,d6,s2,h11,d13,h3,c5,c12,d12,d3,d10,c7,h12,s4,d11,d9,s3,c10,h2,h9,s9,c11  
**626/1000: solving: solved in 3456 tries.**  
h13>h5,c1>c8,c9>c1,d1>d7,h1>h6,h1>d1,h13>h1,c13>h13,c9>c13,s8>s11,s8>h8,s8>s10,s13>s8,c2>c9,d8>d4,d5>d8,s7>s6,s1>s7,s12>s1,c4>h4,c4>c2,s12>s13,s5>s12,s5>d5,c3>c4,h10>h7,d6>c6,s2>d2,s2>s5,c12>c5,d12>c12,d3>d12,d3>h3,d3>d13,d10>d3,h12>h11,s3>s4,d11>d10,h9>d9,c10>c7,s9>s3,h9>s9,h9>h12,h2>h9,h2>s2,h10>h2,c10>h10,c10>c3,d11>d6,c11>d11,c11>c10,

h8,c5,c12,d11,d12,h2,c8,h6,d9,s11,c11,d3,s10,s3,c2,s13,h12,h9,d8,s5,s7,d4,h4,d7,c1,s9,h10,h11,c6,c9,s4,c4,d1,d13,s12,h7,d10,s8,h3,h1,d5,c3,s1,h5,c10,s2,d6,c13,h13,s6,c7,d2  
**627/1000: solving: solved in 5217 tries.**  
c12>c5,d12>d11,d12>c12,c8>h8,h6>h2,c11>s11,s3>s10,s3>d3,h9>h12,s5>s13,s7>s5,d4>d8,h4>d4,h4>h9,h11>h10,c6>c1,c9>c6,s9>c9,s9>s7,s4>h4,s4>s9,c4>s4,c4>c2,d13>d1,h7>h11,h7>d7,h1>h3,d5>d10,s1>s8,h1>s1,h5>d5,h5>h7,c10>c3,c13>c10,s2>s12,h13>h1,h13>h5,d13>h13,s6>s2,s6>s3,s6>h6,d13>d9,c4>c11,c7>c4,c13>c7,d6>s6,d6>d12,c13>c8,d13>d6,d13>c13,d2>d13,

s5,h11,h7,d9,d1,d5,d10,s10,d6,c4,c5,c2,h6,c11,s2,s3,h8,c1,d12,d3,c7,s11,h9,d7,h13,d13,s1,c10,s7,c6,d2,d4,c13,h5,c12,c9,s9,s4,h2,h1,s12,c8,d8,s13,h10,c3,s8,s6,d11,h12,h4,h3  
**628/1000: solving: solved in 8136 tries.**  
h7>h11,d1>d9,d5>d1,d10>d5,s10>d10,c5>c4,c2>c5,s2>c2,s3>s2,d3>d12,d7>c7,d7>d3,h13>h9,d13>h13,d4>d2,c9>c12,s9>c9,s4>s9,s4>d4,h2>h5,h1>h2,s12>s4,d8>c8,s13>c13,s13>s12,s8>d8,s6>s8,s6>c6,s6>s7,s13>s6,s13>d13,s13>s11,s1>s13,c10>c1,h1>s1,h10>c10,h10>h6,h10>s10,h10>h7,s3>s5,d7>d6,h8>h10,h1>h8,d11>d7,c11>d11,c3>c11,h4>h12,h3>h4,h3>c3,h3>h1,h3>s3,

d3,d8,s11,d2,h3,d7,c2,d4,h13,s3,s8,h5,c7,s6,c11,h10,c5,s10,c6,d9,s2,d13,h4,s7,d1,s9,h6,h12,s13,h8,d10,c12,d5,h7,h2,c8,s4,h9,c1,c4,s5,d12,c3,d11,d6,h11,c10,h1,c13,c9,s1,s12  
**629/1000: solving: solved in 1869 tries.**  
d8>d3,c2>d2,d4>d7,s3>h3,s8>s3,s8>d8,s11>s8,h5>h13,c7>c2,h10>h5,c5>c11,s10>h10,s10>s11,s6>s10,c6>c5,c6>s6,c7>c6,d9>d4,s7>s2,h6>h4,h12>h6,s13>s9,s13>d13,s13>s7,d1>d9,h8>h12,d10>d1,h7>h8,h7>c7,d5>d10,h9>h2,c4>c1,c4>s4,c4>c8,d6>d11,c9>c10,c9>c3,h1>h11,c13>c9,c13>c4,c13>s13,c12>c13,s5>d5,h1>h9,h1>h7,d12>c12,s1>s5,s1>h1,s12>s1,d12>s12,d6>d12,

c2,s12,c10,h11,d12,s11,d4,s6,c5,s3,s1,d9,d5,s10,s4,c3,s2,s5,c1,d10,s13,c9,c8,d11,c6,d2,h3,h1,d3,h4,h7,h10,c11,c4,h2,c12,s9,h13,h5,d7,s8,c7,s7,d6,d13,h8,h12,h6,h9,d1,c13,d8  
**630/1000: solving: solved in 6721 tries.**  
d12>s12,s11>h11,d4>d12,s6>s11,s1>s3,d5>d9,s4>s10,s5>s2,s5>d5,s5>s1,s5>c5,s5>s6,s4>s5,c1>c3,d10>c10,d10>d4,c1>c2,s13>s4,c9>c1,c8>c9,h1>h3,h7>h4,h10>h7,c4>c11,h13>h2,h5>h13,s7>c7,s7>s9,d7>s7,h8>s8,h8>h5,d6>d7,h12>c12,h6>h12,h6>h10,d6>h6,d6>d3,h8>h1,d6>c6,d6>d11,d2>d6,d13>d2,d13>s13,d13>d10,c13>c4,c13>c8,d13>c13,d1>d13,d8>d1,h8>d8,h9>h8,

s5,s8,c4,s11,d11,h9,s7,c13,d7,h7,c12,d4,h10,d1,s4,s3,c10,s6,d10,c6,h5,h13,s13,c2,d3,s10,d12,s9,h1,d6,s1,d8,d2,c5,d9,c8,h11,h8,s12,c9,d13,s2,c11,h3,h6,c3,c7,d5,h4,h2,h12,c1  
**631/1000: solving: solved in 5879 tries.**  
s8>s5,d11>s11,h7>d7,h7>h9,s7>h7,s7>s8,c12>c13,d4>c4,d11>d4,d1>d11,s3>s4,c10>c12,h10>c10,s3>s7,s6>s3,d10>h10,d10>d1,h13>h5,s13>h13,s13>s6,c2>c6,s10>d10,s10>s13,d12>d3,s9>s10,d2>d8,h8>h11,h8>c8,c9>d9,c3>c11,h4>h6,h2>h4,h2>s2,h2>h8,h2>d2,h2>h1,s12>s1,s12>d12,h3>c3,d5>d13,d5>d6,c5>d5,c7>c5,c9>c7,h12>h3,h12>s12,h2>h12,c9>s9,c1>c9,c2>c1,h2>c2,

c1,d1,d12,h9,d4,h1,h10,h6,s1,s10,c5,c8,c2,d3,d11,c10,c6,h4,h5,s6,s12,c9,c4,d13,d7,s5,d10,s4,c7,h13,c11,s3,d2,h2,d5,h7,h8,s2,c3,c12,h12,s8,s13,d9,h11,s9,s11,d8,s7,c13,d6,h3  
**632/1000: solving: solved in 859905 tries.**  
d1>c1,d12>d1,h10>h1,h6>h10,s10>s1,c8>c5,c2>c8,d11>d3,c10>s10,c2>c10,d11>d4,c6>c2,c6>h6,h4>h9,h5>h4,s6>c6,s12>s6,s12>d12,c4>c9,d7>d13,h2>d2,h2>h13,h8>h7,c12>c3,h12>c12,s13>s8,s9>s13,h11>h12,d9>s9,s11>s2,d8>d9,s7>s11,s7>s3,s7>c7,s7>s4,s7>d7,s5>s7,s5>h5,s5>s12,h8>h2,d5>d10,d5>s5,d8>h8,d8>d5,c13>c4,c11>c13,h11>c11,d6>d8,d11>d6,h11>d11,h3>h11,

c5,s13,d2,s8,s4,c8,d6,d7,c3,s9,c2,c6,d9,c11,h1,d12,c10,s12,h9,h5,c4,h3,c13,h12,d10,d5,s5,h4,h11,h8,s1,d11,s10,c7,s2,c1,s11,h13,h2,h6,c12,h10,s6,s3,h7,d13,d1,s7,c9,d3,d4,d8  
**633/1000: solving: solved in 16395 tries.**  
s4>s8,d6>d2,d7>d6,c3>c8,c6>c2,d12>d9,h9>h1,h5>h9,d5>d10,s5>d5,h11>h4,h8>h11,h2>h13,h2>s2,h6>h2,s6>s11,d1>d13,s7>s3,s7>s6,s7>c7,s7>s10,h10>h6,h7>h10,h7>s7,h7>h8,d1>d11,d1>s1,c1>d1,c12>c1,c12>h12,c12>c13,c12>s12,c12>c10,c12>d12,c12>c6,c4>c12,h7>h5,h3>h7,d3>h3,c9>c11,c9>c3,s9>c9,d8>d3,s5>s9,s5>s13,s5>c5,d8>d7,d4>d8,s4>d4,s4>s5,c4>s4,

s1,c7,h8,d12,d7,s13,s11,d4,h9,h6,h7,h2,s7,c4,h12,s3,c5,d2,s6,d5,c11,h3,s5,d6,d8,h11,c6,d11,h4,c1,h5,d13,s4,c13,d9,s12,d1,c12,c3,h1,s10,d10,h10,s2,s9,h13,c10,c8,d3,s8,c9,c2  
**634/1000: solving: solved in 10761 tries.**  
d7>d12,s11>s13,h6>h9,h7>h6,h7>d7,h7>h8,h7>c7,h2>h7,s3>s7,d5>c5,d2>d5,s5>s6,d8>d6,h11>c11,h11>h12,h3>h11,c1>c6,h5>h4,d9>d13,c12>c13,s12>c12,s12>s4,d10>s10,d10>d1,h10>h1,c9>c8,c9>s9,c9>c3,c9>d9,c9>c1,d10>d11,h10>d10,s2>s12,h13>h10,h5>h13,c2>c10,c2>c9,c2>d2,d3>d8,d3>h3,d3>d4,s3>d3,s3>s11,c2>c4,s2>c2,s2>s3,s2>h2,s2>s1,s8>s2,s5>s8,h5>s5,

h9,c4,s13,d3,d2,s3,s11,d12,s5,c5,h3,c10,c7,d13,d4,s1,d10,c8,c13,h13,c11,c6,h5,h7,c3,d8,c2,s8,h4,c12,s9,h2,h8,d7,s7,s2,d11,h12,c9,s6,d1,h6,c1,d6,h10,s12,h1,s10,s4,d5,h11,d9  
**635/1000: solving: solved in 211817 tries.**  
d2>d3,s11>s3,c5>s5,c7>c10,d4>d13,c13>c8,h13>c13,c6>c11,h7>h5,c12>c2,h8>h2,h8>s8,h4>h8,s7>d7,s7>s9,s2>s7,h12>h4,h12>c12,h12>h7,s6>s2,c1>c9,d6>h6,d6>d11,d6>s6,d6>d8,d6>c6,c1>c3,d1>d6,d1>s1,d10>d1,h12>h13,h10>d10,h10>h3,c1>c7,h12>h10,h1>c1,h1>h12,d4>d12,s10>s12,s4>s10,h11>h1,d5>c5,d9>d5,d9>d2,d9>h9,s11>s13,d4>d9,c4>d4,s4>c4,s11>s4,h11>s11,

s4,h3,d12,s7,s2,c5,h1,s6,d8,d6,h2,s10,s9,d7,c10,h10,d2,s11,s12,s3,c9,s13,h6,c11,d1,c7,s1,d3,s8,c4,h9,h12,h13,d5,h5,d9,c3,c12,c8,d11,h11,d13,h4,c13,c1,h8,d4,c6,c2,d10,h7,s5  
**636/1000: solving: solved in 9943 tries.**  
s7>s4,s2>s7,h1>h3,d8>d12,d6>s6,s9>s10,d7>d6,h10>c10,d2>h2,d2>d7,s12>s11,s3>s12,c9>s9,s13>s3,d3>d1,s8>s1,h12>h9,h13>h12,h5>d5,h5>h13,c3>c4,c3>d3,c3>c11,c7>c3,s8>s13,c12>c7,c8>c12,d11>d9,h11>d11,h11>h5,c1>c13,d4>h4,d4>d13,h8>h11,h8>s8,c6>c1,d10>d4,c6>h6,c6>c9,c8>c6,c8>d8,d10>d2,h10>d10,h7>h10,h7>h1,h8>h7,c8>h8,c5>c8,s5>s2,c5>s5,c2>c5,

h10,d1,d6,c4,c7,h12,c2,h3,s2,d2,c6,d9,d12,c8,s13,s7,s3,c11,h2,c5,c9,h13,s1,d5,h6,s11,s9,c3,s8,s12,c12,s5,c1,d3,s6,d8,h4,s10,h11,d7,h7,d13,h5,h1,c10,d4,d11,d10,c13,h9,s4,h8  
**637/1000: solving: solved in 182155 tries.**  
d6>d1,c7>c4,h12>h10,c2>c7,h3>h12,s2>c2,d2>s2,d2>d6,d12>d9,s7>s13,s3>s7,c9>c5,h6>h13,s9>s11,s12>s8,c12>s12,c12>c3,s5>d5,s5>s1,s9>s5,c12>c9,c1>c12,s6>h6,s9>s6,d8>d3,s10>s9,h7>h4,h11>h7,h5>h11,d10>c10,d10>d7,h1>h5,d10>s10,d8>d10,h1>h2,c1>h1,c1>c11,d8>c8,d8>d2,d13>d12,c13>c1,c13>c6,d13>c13,d11>d13,s4>s3,d4>s4,d4>d11,h9>h3,h8>h9,d8>h8,d4>d8,

h11,h1,c13,d13,c11,c7,d4,s12,h8,c5,d7,h2,d11,s2,c2,d6,s6,s9,h5,s1,h7,c8,s3,d5,s5,s10,c9,d8,h10,s4,d9,h13,s7,s13,d2,c12,d1,d12,d10,c1,c3,s8,h9,d3,h12,c6,h4,s11,h3,h6,c4,c10  
**638/1000: solving: solved in 923130 tries.**  
h1>h11,d13>c13,c7>c11,h2>h8,d11>d7,s2>h2,s2>s12,c5>c7,s6>d6,s6>s2,s9>s6,s3>s1,s5>d5,s5>s3,s5>h5,s5>s9,d8>c8,d8>d11,c9>c2,h10>s10,h10>h7,d9>c9,d9>d8,s4>s5,s4>d4,d9>d13,h13>h10,s13>s7,s13>h13,d12>d2,c12>d12,c1>c12,c1>c5,d1>c1,d1>d9,d1>h1,s8>s13,d3>d10,d3>d1,c3>d3,h4>h9,h12>h4,h3>h12,h6>h3,c6>h6,c10>c6,c10>c3,s11>s8,c4>c10,s4>c4,s11>s4,

c13,d3,s10,d5,s6,d2,s9,h2,c10,d4,d6,h6,c5,s5,s7,s4,h3,h4,c4,h8,s11,s1,d1,s13,h12,d12,c9,c11,h13,c6,s2,h7,s8,c8,d11,h11,c3,h10,d10,c2,d7,d8,c7,h5,h1,c12,s12,c1,d9,s3,h9,d13  
**639/1000: solving: solved in 977 tries.**  
d6>d4,h6>d6,s5>c5,s7>s5,s4>s7,h4>h3,h4>s4,h4>h6,c4>h4,c4>c10,s1>s11,d1>s1,h12>h8,d12>h12,d1>d12,c9>c4,c11>c9,h13>s13,h13>h2,c8>s8,c8>c6,h11>d11,h11>h7,c3>c8,h10>h11,d10>h10,d10>d1,c2>s2,c2>c3,d8>d10,c7>d7,c7>c2,h1>h5,c1>h1,c1>c7,c12>c1,d9>d8,d9>s9,c12>c11,s12>c12,s3>s12,h9>d9,h13>h9,s3>s6,d13>h13,d13>d5,d13>c13,s3>s10,d2>d13,d3>d2,s3>d3,

d4,c13,c2,d3,s6,c3,d8,c5,c10,c12,s13,h9,s5,h12,h3,h2,s11,d13,s1,s8,s3,h5,h10,s4,d12,c8,h13,h6,c9,c11,h11,h4,h8,s12,s9,d9,d11,d7,d1,d2,h1,s7,d10,c7,d6,c6,c1,c4,h7,d5,s2,s10  
**640/1000: solving: solved in 9221 tries.**  
c2>c13,c3>c2,d3>c3,d3>d4,c10>c5,c12>c10,s13>s6,h12>c12,h9>h12,s5>s13,h3>h9,h3>d3,h2>h3,s8>s1,s8>d8,s8>s5,s11>s8,h10>h5,h6>h13,c11>c9,h11>c11,h11>h6,h4>h11,h4>s4,h4>h10,d12>d13,h8>c8,h8>h4,s12>d12,s12>s11,s3>s12,d9>s9,d11>d9,d7>d11,d1>d7,h1>h8,d1>h1,d10>d1,d6>d2,c6>d6,c1>c6,c4>c1,s7>s3,c7>c4,h7>c7,h7>h2,s7>h7,s2>s7,s10>s2,d10>s10,d5>d10,

h10,s2,d1,s3,d9,s10,s11,h1,d3,s9,s1,c1,d10,s13,h12,c12,s7,s12,h5,c7,d7,c4,s5,h2,c13,d6,c11,c10,h13,c8,h11,h8,d2,h9,d5,c5,s4,c6,h3,c3,d13,h4,d8,h7,d12,s6,h6,s8,c9,d11,d4,c2  
**641/1000: solving: solved in 3076 tries.**  
s11>s10,d3>d9,d3>s3,d3>d1,s1>s9,s1>h1,s1>s11,c1>s1,c12>h12,c12>c1,s7>s13,s12>s7,d7>c7,d7>d10,s5>s12,h5>s5,c4>c12,h2>h5,c13>c4,c10>c11,h13>h2,c8>c10,h11>h13,h8>c8,c5>d5,c3>h3,c3>c6,h4>s4,d12>d13,d8>d12,h7>h4,s8>d8,s6>s8,c9>c3,h6>h7,c9>h9,c5>c9,h6>h8,h6>d6,d2>d7,h6>h11,d4>d11,c2>c5,c2>c13,d2>c2,d2>d3,h6>h10,s6>h6,s2>s6,d2>s2,d4>d2,

c3,d11,d2,d9,h8,c2,s9,d13,h2,h9,c11,d7,s6,c6,d10,d4,c7,h11,d5,h6,c8,s10,c1,h13,c5,h10,s7,s4,s11,c10,h3,c13,c12,h7,s5,s2,s3,s13,d12,s1,d1,c4,h12,h5,s8,s12,d6,d8,h4,h1,c9,d3  
**642/1000: solving: solved in 65389 tries.**  
d2>d11,d9>d2,c2>c3,d13>d9,h9>h2,h9>s9,h9>h8,c11>c2,c6>s6,d4>d10,c7>d7,c7>c11,c6>c7,s4>s7,s11>s4,c10>c5,c10>s10,c10>c8,c1>c10,h10>h13,c12>c13,s2>s5,s3>s2,s3>h3,s3>s11,h7>h10,c12>c1,s13>s3,d12>c12,s1>s13,d1>d12,h12>h7,s8>s1,d8>d6,h4>h5,h4>c4,s12>h12,s8>s12,h4>h6,d8>s8,d3>d8,d3>d5,h4>d4,h11>h4,d3>d13,d1>d3,h1>d1,h9>h1,c9>c6,h9>c9,h11>h9,

d12,s2,d5,s3,s6,s4,h6,c2,s7,d4,d2,c3,s12,c1,c4,d10,d7,d11,d3,h4,c6,h8,h2,c13,h10,s13,h9,s11,s5,d13,h1,h11,c11,d6,h12,c7,s1,c8,s8,c5,h3,h5,c9,s9,h7,c12,d8,c10,s10,h13,d1,d9  
**643/1000: solving: solved in 1597 tries.**  
s6>s3,s4>s6,s7>s4,d2>d4,d2>c2,d2>d5,d2>s2,d2>d12,s12>s7,c1>c3,c4>c1,d7>d10,d11>d7,d3>d11,h4>h6,c4>h4,d3>d2,c6>c4,h2>h8,s5>s11,d13>s13,h11>h1,c11>h11,c7>c11,s8>c8,s8>s1,h3>h12,h5>h3,h5>s5,h5>h9,d6>d13,c5>h5,c5>c13,s9>c9,s9>s8,c12>c7,c12>c5,c12>s12,c6>c12,d6>c6,d6>d3,s10>c10,h13>h7,h13>h2,h10>h13,s10>h10,s9>s10,d1>d8,d9>d1,d9>s9,d9>d6,

d8,d12,d4,s10,s7,d9,s9,c4,c8,c5,s1,s5,h4,d7,h2,h10,h8,c12,h5,h1,s2,s12,h6,c2,c9,h9,h11,c3,c11,c7,c6,s3,s13,s4,d2,s11,d6,c1,h13,d3,c10,d11,d13,d5,h3,h7,d1,s6,d10,h12,c13,s8  
**644/1000: solving: solved in 123802 tries.**  
d12>d8,d4>d12,s7>s10,s9>d9,s9>s7,c8>c4,c5>c8,s5>s1,s5>c5,s5>s9,d7>d4,h2>h4,h10>h2,h8>h10,h5>s5,h8>h5,s12>s2,c9>c2,h9>c9,h9>h6,h11>h9,c11>c3,c11>h11,c11>c12,c7>c11,c6>c7,s3>s12,s13>s3,d3>d6,d13>d11,d5>d13,d1>d5,d1>c1,d1>d2,d1>h1,d1>d7,h3>d3,h12>h7,h12>h3,h13>h12,s6>s11,c13>h13,c13>s13,c10>c13,s8>s4,s8>h8,s6>s8,c6>s6,c10>c6,d10>c10,d10>d1,

c8,d12,s6,h3,c13,c7,d4,d1,h5,s11,s7,h10,c5,h9,h13,d7,c1,s1,d13,c12,s5,c11,c4,d5,c10,d10,h11,s13,s9,c3,s10,h12,h8,h4,h1,s3,d9,h2,s4,d3,s2,s8,d6,c9,d11,h6,c2,h7,c6,d8,s12,d2  
**645/1000: solving: solved in 43528 tries.**  
c7>c13,d1>d4,h5>h3,s7>s11,h13>h9,c1>c5,c1>d1,c1>c7,s7>s6,h13>h10,s1>c1,d13>d7,d13>h13,s5>s1,s5>h5,s5>s7,c12>d12,c12>c8,c11>c12,c4>c11,d5>d13,d5>s5,d10>c10,d10>d5,s9>s13,h8>h12,h4>h8,h1>h4,s3>c3,s3>s9,s10>s3,s8>s4,c6>h6,c6>d6,c9>c6,d11>d3,d11>d9,d11>h11,d11>d10,s8>s10,s2>s8,c2>c9,h7>h1,h2>h7,c2>h2,d8>d11,c2>c4,d2>d8,d2>c2,s2>d2,s12>s2,

s9,d4,d5,s4,d1,d8,s7,d12,s10,d7,c9,d9,h4,s5,c7,c10,s11,d11,d6,c11,h13,h7,h10,s2,s6,s12,c1,h11,d13,s3,h6,d10,d3,c4,s13,c8,s8,h2,h3,h9,c3,h12,c5,c2,s1,c6,h8,h1,c12,h5,c13,d2  
**646/1000: solving: solved in 29522 tries.**  
d5>d4,d8>d1,d7>s7,d7>d8,d12>d7,d9>c9,s5>s10,s5>d5,s5>s9,s4>s5,d9>d12,c10>c7,d11>s11,d11>d9,d6>d11,c11>c10,h7>h13,h10>h7,s6>s2,s12>s6,c1>c11,s3>s12,d3>d10,s8>c8,s8>s13,h3>h2,h3>d3,h3>h6,h3>s3,h3>h10,h11>h3,c4>c1,c4>h4,h9>h11,d13>d6,c12>c6,h1>s1,h1>h12,h1>h9,c12>c3,c5>c12,h8>s8,h8>h1,h5>h8,c5>h5,c2>c5,c13>d13,c4>c13,c4>s4,c2>c4,d2>c2,

s11,c10,d3,h4,d7,h11,d8,c11,c4,c1,c8,s13,s8,s2,h1,h13,c9,s7,h8,d2,d13,s12,s4,h9,d11,c13,h3,h6,h2,d12,c12,h12,h7,c3,c2,h5,d4,d1,s6,s5,c6,c7,h10,s10,s1,d5,d9,d6,c5,s9,s3,d10  
**647/1000: solving: solved in 13673 tries.**  
c4>c11,c1>c4,c8>c1,c8>d8,s8>s13,s8>c8,s2>s8,h13>h1,s7>s2,d13>d2,d13>h13,d13>d7,h8>h11,s4>s12,h3>h9,h6>h3,h2>h6,c12>d12,c12>c13,h12>c12,h7>h12,c2>c3,c2>h2,h5>h7,d1>d4,s5>s6,c7>c6,s10>h10,s1>s10,s1>d1,s5>s1,s5>h5,c7>c2,d9>d11,d9>c9,d6>d5,c5>c7,s5>c5,d6>d9,s5>s7,s9>s5,d10>d6,s3>s9,d10>d13,d10>c10,d3>d10,s3>d3,s3>s11,s4>s3,h4>s4,h8>h4,

h7,d8,c6,s1,c8,c10,d3,h4,d6,s10,s6,d11,h10,s8,c4,d9,s5,h2,c13,d7,s9,s2,d10,d2,h12,s4,s12,h6,d1,h11,h3,h5,d13,d4,c12,c2,c1,c3,s11,h13,s3,s13,c5,d12,c11,c7,h9,d5,h8,s7,c9,h1  
**648/1000: solving: solved in 2144 tries.**  
c8>d8,c6>c8,s6>s10,s6>d6,d11>d3,s5>s8,c13>c4,s9>d9,s2>s9,h2>s2,h2>h10,d10>d7,d2>d10,d2>h2,d2>d11,s5>s6,h12>h4,s12>s4,s12>h12,s12>s1,s5>s12,d1>d2,h11>h6,h3>h11,h5>h3,d13>d1,c13>d13,c13>c10,c12>c13,c2>c12,c1>c2,c3>c1,h13>h5,s3>s11,s3>c3,s3>s5,c7>c11,d5>d12,d5>d4,s13>s3,c5>d5,c5>c6,h8>h13,c7>c5,s7>s13,h1>h8,h1>h7,h9>h1,c9>h9,c7>c9,s7>c7,

d12,h5,h4,h6,h10,c6,d8,d10,c4,d13,d11,s13,c13,c8,d9,h7,s10,s7,c7,c9,d5,h1,c12,c3,s6,h11,c2,d2,c10,h3,d7,s2,s12,h12,d1,c1,s3,c11,h13,c5,d6,s1,h9,s8,h8,s9,h2,d3,s5,s11,d4,s4  
**649/1000: solving: solved in 14201 tries.**  
h4>h5,h6>h4,h10>h6,d8>d12,d10>d8,h10>d10,c4>c6,d11>d13,c13>s13,c8>c13,s7>s10,s7>h7,c7>s7,c9>c7,c9>d9,c9>c8,c12>c9,c3>c12,d2>c2,h3>h11,s2>d2,s12>s2,h12>s12,h12>h3,d1>d7,c1>d1,c1>c10,c1>h1,h13>h12,c5>c11,s1>s3,s1>c1,s6>s1,d6>s6,d6>d5,c5>c3,h8>h13,s9>s8,h2>h8,h9>h2,d4>d3,d4>d6,d4>c4,d11>d4,h9>h10,s9>h9,s5>c5,s11>s5,s11>d11,s11>s9,s4>s11,

s10,h11,s11,c2,c10,d10,d11,c7,s1,s13,h9,d2,d3,h1,s2,c12,s12,s5,c1,d12,h2,c8,d13,h8,h4,d6,s9,s6,c4,d8,h6,d1,h3,d9,s3,c13,c6,c9,h7,s8,h5,d5,h12,d4,d7,s7,c5,h13,c11,c3,s4,h10  
**650/1000: solving: solved in 47115 tries.**  
s11>h11,s11>s10,c10>c2,d10>c10,d11>d10,d11>s11,s13>s1,d3>d2,s12>c12,s12>s2,s5>s12,c8>c1,h4>h8,s6>s9,s6>d6,h6>s6,h6>h4,d8>d13,d8>c8,d8>d3,d12>d8,h6>h2,h3>h6,d9>d1,s3>h3,s3>s5,c6>c13,c9>c6,c9>d9,c9>c4,s8>s3,h12>h7,h12>h1,h12>d12,c9>h9,d5>h5,d4>d5,d7>d4,s7>d7,s7>s8,c3>c5,h13>h12,c3>c9,c11>c3,c11>d11,c7>c11,s7>c7,s4>s7,s13>s4,h13>s13,h10>h13,

h4,d7,c6,s11,h10,c10,h1,d5,s1,h9,s3,h12,d10,s5,c2,h8,c8,s2,h2,s9,d9,s4,s12,c4,d3,d11,s8,c5,s7,d6,d1,d12,h6,s13,d2,c11,h5,c1,c9,c3,s6,d13,c12,c13,d8,h11,c7,h13,d4,h3,h7,s10  
**651/1000: solving: solved in 14896 tries.**  
c10>h10,h9>h1,s3>s1,h12>h9,s5>d5,s5>s11,s3>s5,c2>c10,c8>h8,c8>c2,h2>s2,d9>s9,s12>s4,d3>d9,d11>d3,d1>d6,d12>d1,s13>s7,h5>h6,h5>c5,d2>d12,c1>c11,c9>c1,c3>c9,s6>s13,c13>c3,d13>c13,d8>d2,d8>s8,d13>d8,d13>d11,c12>c4,s6>s12,h13>h5,h13>d13,h13>h2,h3>h11,h7>h3,h7>h13,c7>h7,c7>c8,c7>d7,c12>h12,c12>c7,c6>c12,s6>c6,s3>s6,s10>s3,d10>s10,d4>d10,d4>h4,

s1,d4,h9,s9,c13,h8,s11,c8,h12,s8,c7,h13,d11,d3,h6,s13,d7,d2,s3,c2,h2,d9,d8,s7,h5,d5,s2,h7,h1,h11,s6,d1,s10,d6,h4,c3,c10,c4,d10,c1,s5,d12,h3,c11,c6,c12,h10,c9,d13,c5,s4,s12  
**652/1000: solving: solved in 3422 tries.**  
s9>h9,s11>s9,c8>h8,c8>c13,s8>s11,c8>s8,d3>d11,s13>h13,d2>d7,s3>d3,s3>s13,h6>h12,c2>d2,h2>c2,h2>h6,d8>d9,s7>c7,s3>s7,d8>c8,d8>d4,s3>s1,h5>h2,d5>h5,d5>d8,h1>h7,h11>h1,d6>s6,d6>d5,d1>d6,c10>c3,c4>c10,c4>h4,c6>c11,c9>c6,h10>h3,c5>c9,c5>s5,c5>c1,c12>c5,d12>c12,d13>d10,d12>d13,s4>c4,s4>s2,h10>h11,s10>h10,d12>d1,s10>s4,s12>s10,s12>d12,s12>s3,

s9,h3,c13,h4,s10,h1,d11,d8,s6,s5,s12,s11,c1,c7,c8,d12,d5,h6,d10,s2,c6,h13,d7,d13,h2,h10,h11,d1,d3,s4,c12,d2,c4,s3,h5,c11,s7,c9,s1,d4,h12,s13,c3,c5,c10,h9,s8,h7,d9,c2,h8,d6  
**653/1000: solving: solved in 281863 tries.**  
d8>d11,s6>s10,s5>s6,s12>s5,s11>s12,c7>c1,c8>c7,c8>d8,d5>d12,h6>h1,d10>d5,c6>c8,c6>h6,c6>c13,d7>d10,d13>h13,h10>h2,h11>h10,d3>d1,d2>d3,d2>s2,d2>d7,d13>d2,h11>h4,s11>h11,s11>s9,c12>c6,s7>s3,c11>c4,s13>s1,s13>s7,s13>d13,s13>s11,s4>s13,h5>h3,c11>c12,c9>c11,d4>s4,c5>c3,c5>h5,h8>h7,h8>s8,h8>h12,c10>c5,h9>h8,d9>h9,c2>c10,c9>c2,d9>c9,d9>d4,d6>d9,

s9,c11,c5,h5,h8,s3,d2,s12,c1,s5,s8,c7,s6,s13,h6,c12,c6,c10,s2,d8,s11,d5,c4,s1,h9,c9,s10,h3,h1,s4,s7,c2,h7,d9,h11,h4,h13,c8,h10,h12,d10,d12,d3,d1,d11,d7,c3,d6,h2,c13,d4,d13  
**654/1000: solving: solved in 18079 tries.**  
c5>c11,h5>c5,h8>h5,s8>s5,s13>s6,c12>c7,c12>s12,c1>c12,s8>s3,s8>h8,s8>s9,s13>s8,c6>h6,c6>c1,c10>c6,s2>s13,d2>s2,s1>s11,c9>h9,c9>c4,s10>s1,h1>h3,s7>s4,c2>c9,h7>s7,h7>h1,d9>d5,h11>h7,h4>h11,h13>h4,h12>h10,d3>d12,d1>d3,d11>d1,d7>d11,c13>c3,d13>d6,d13>c13,d13>d7,h2>h12,h2>c2,h13>h2,d10>d9,d10>s10,d10>d2,c10>d10,c8>c10,d8>c8,d13>h13,d13>d8,d4>d13,

c7,c13,c4,c8,s13,h11,d4,c9,h10,h8,h9,c5,d10,c2,s2,s8,d13,h1,h13,h2,d3,d1,h6,s10,s12,s1,s5,s3,d2,d12,h4,h5,d11,s9,h7,s6,d7,c10,s7,c11,d8,d6,c3,c6,h3,d5,h12,s4,c1,c12,s11,d9  
**655/1000: solving: solved in 96891 tries.**  
c13>c7,c4>c13,c8>c4,h10>h11,h8>h10,h9>c9,d10>d4,c2>c5,s2>c2,s8>s2,s8>h8,s8>s13,s8>c8,h13>h1,h13>d13,h13>h9,h2>h13,d1>d3,s12>s10,s1>s12,s5>s1,s3>s5,d2>d1,d2>h2,d2>d10,s3>s8,h5>h4,h7>h5,s6>s9,d7>h7,d7>d12,d11>d2,s7>d7,c3>c11,c6>c3,d5>d8,d6>d5,h12>h3,c12>h12,c12>c10,d6>s6,c1>c12,c6>c1,c6>h6,s7>s3,d6>c6,s4>s7,s11>s4,d11>s11,d6>d11,d9>d6,

h7,c9,c13,c11,c10,d8,s6,h11,d12,c5,c4,s13,s11,s10,h12,s12,h10,d2,h8,s7,c2,h9,d3,c1,h5,s8,d11,c7,d6,c6,c3,h2,h4,s1,s2,s4,d13,d7,d4,d5,s3,h6,d10,d9,h13,h3,s9,h1,d1,c8,s5,c12  
**656/1000: solving: solved in 145313 tries.**  
c13>c9,c11>c13,c10>c11,d12>d8,c4>c5,s13>s6,s11>s13,h11>s11,h11>h7,s10>c10,s12>h12,s12>s10,d12>s12,h10>h11,c2>d2,c2>c4,h8>h10,h5>h9,d11>d3,c6>d6,c6>c7,c3>c6,h4>h2,s1>s8,s1>c1,s1>s7,h4>h5,s4>s2,s4>h4,s4>s1,c3>c2,d11>d12,d13>d11,d7>d13,d4>d7,h1>h13,s9>d9,h1>h6,d1>d10,d1>d5,d1>d4,s5>s9,s5>s4,s3>s5,h1>d1,h3>h1,c3>h3,c8>h8,c12>c8,c3>c12,s3>c3,

h4,d6,s4,s13,h12,h7,c9,d10,d1,c10,s11,s10,d9,h1,c13,c11,d8,d12,c6,d5,c3,d11,c2,d2,c8,h3,s8,d4,h8,d3,h13,c1,c12,c7,s6,s1,s9,s7,d13,c5,h10,h9,s12,c4,h2,h6,d7,h11,h5,s3,s5,s2  
**657/1000: solving: solved in 53709 tries.**  
s13>s4,h12>h4,h7>h12,d10>d6,d1>d10,c10>c9,s10>s11,s10>c10,s10>s13,h1>d1,h1>h7,c11>c13,d12>d8,d2>c2,d2>d11,h3>c3,s8>c8,c12>c1,c7>c12,s1>s6,s9>s1,s7>s9,s7>c7,d13>d3,h13>d13,h13>h8,h10>h13,h2>h9,h2>h10,s7>s8,h2>d2,h2>h3,c4>d4,c5>c4,c5>d5,c5>c6,d7>s7,h6>h2,h11>h6,h11>c11,h11>h1,d7>d9,d12>d7,s12>s10,h5>c5,h5>h11,s5>s3,s5>h5,s2>s5,s12>s2,d12>s12,

h3,h5,s4,h2,s9,s6,d8,h11,s3,h6,s2,c2,d5,c12,h1,c13,s7,d6,c10,s11,d3,h9,d13,d1,d4,c9,d7,c11,h8,d12,d2,s8,c8,d11,s12,c4,d9,s1,h4,d10,c6,h7,c5,h13,s5,c3,s13,s10,c1,c7,h12,h10  
**658/1000: solving: solved in 16059 tries.**  
h5>h3,s6>s9,h11>h2,h6>s6,h6>h11,s3>s4,s2>s3,c2>s2,d5>d8,d5>h5,c10>c13,d1>d13,d4>d1,d12>d7,d2>d12,s8>h8,c8>s8,c8>c11,c4>c8,c4>d4,c9>c4,c9>h9,d11>d2,d11>s11,d11>d6,d3>d11,c9>c10,h7>h4,d10>d9,c5>c6,s13>h13,s10>s13,s10>s1,s10>d10,s10>s12,h7>s7,s5>c5,c3>d3,c1>c3,c1>h1,c1>c2,h7>h6,c7>c9,c7>c1,h7>c7,h12>c12,h12>h7,h10>h12,s10>h10,s5>s10,s5>d5,

h1,s3,h6,s5,d4,d9,c4,d1,c13,c10,d2,s2,c11,d10,s12,s1,s10,d12,s7,h2,h7,c8,h13,c7,h5,h10,c6,c1,d11,s4,d3,h4,h3,h8,d13,h11,c2,d8,s13,c9,c3,h9,s6,s9,c5,d6,d7,c12,s8,s11,d5,h12  
**659/1000: solving: solved in 92126 tries.**  
d9>d4,c10>c13,s2>d2,d10>c10,d10>d1,c11>c4,s12>s2,s1>s12,s10>s1,s10>d10,s10>s5,h7>h2,h7>s7,c8>c11,h13>h7,c7>c8,h5>h13,h10>h5,c6>c7,c6>h6,d12>d9,d11>d12,h3>h4,h3>d3,h3>h10,h8>h3,d8>d13,d8>h8,d8>d11,s4>s10,c3>c2,s6>s13,c5>c9,s9>h9,d6>s6,s8>s9,d5>d7,d5>d6,c5>d5,c5>c1,c5>c6,s8>d8,s8>s4,c3>c5,c3>s3,s11>s8,c12>c3,h11>s11,h12>h11,h12>c12,h12>h1,

d10,s12,d6,c12,d12,c10,d9,c3,h3,s6,s1,s5,d5,s4,h13,d1,d7,s2,d13,s8,d8,h1,c2,c11,h12,s13,h5,d2,c7,c6,h6,h10,c13,s3,c8,d3,c5,h8,s7,c9,c1,d11,h7,c4,h2,s9,h4,d4,h11,s11,s10,h9  
**660/1000: solving: solved in 11310 tries.**  
d12>c12,d12>d6,d12>s12,d12>d10,h3>c3,s1>s6,s5>s1,d5>s5,h13>h3,d7>d1,d8>s8,d8>d13,c2>s2,c11>c2,h12>h1,c6>c7,h6>c6,h10>h6,h8>c8,h8>h10,d3>s3,d3>d2,c5>c13,c5>h5,c1>c9,h7>s7,h7>h8,c1>c5,d4>h4,h11>h2,h11>h7,d11>h11,c4>c1,d11>d3,s9>s13,d4>d11,d4>c4,d4>d8,d4>s4,d4>d5,d7>d4,s11>c11,s10>s11,h12>h13,h12>d12,s10>c10,s9>s10,d9>s9,h9>h12,d9>h9,d7>d9,

h5,d10,s9,h3,d2,d12,h8,d6,c7,s12,d9,d7,h2,d8,s13,h9,c13,s3,c6,d4,h13,d11,s5,d13,c8,h4,c12,c1,s6,h12,c4,s2,h6,h1,c11,s7,c10,h7,h11,d3,c9,s10,c5,d5,d1,s4,h10,s11,s8,c3,c2,s1  
**661/1000: solving: solved in 11583 tries.**  
h3>h5,d12>d2,d9>d6,d9>s9,d9>d10,d12>d9,s12>d12,d7>c7,d8>h8,d7>d8,h2>h3,s3>s13,c6>c13,h13>h9,d11>d4,c1>c12,h12>h4,h6>s6,h1>h6,h1>c1,h1>h12,h11>h7,h11>c11,h11>h1,s7>s2,s10>c10,s10>s7,c9>c4,c5>c9,d5>c5,d5>d13,d5>s5,c8>c6,d5>d11,d3>d5,h11>h13,d3>s3,s8>s4,s8>c8,s10>s8,h10>h11,s10>h10,d1>d7,s10>s12,s1>s11,s1>s10,d1>s1,d3>d1,c3>d3,c2>c3,c2>h2,

c4,s10,s4,d13,s6,s3,c9,s7,d4,h2,d12,c3,h12,c5,h8,h9,h13,s12,d5,d9,c8,s9,h11,s11,d2,c12,h10,c1,c7,c11,s1,d6,d10,h4,d7,c10,c2,s5,d8,s8,c6,c13,h1,s13,d1,h5,s2,h3,d11,h6,d3,h7  
**662/1000: solving: solved in 181406 tries.**  
s4>s10,s4>c4,s3>s6,h12>h2,d12>h12,d12>d4,c3>c9,c3>s3,s7>s4,h9>h8,h13>h9,s12>d12,s12>s7,c5>c3,d5>d13,c5>d5,c8>c5,s9>d9,s9>s12,h11>h13,s11>h11,c12>c8,c7>c1,c11>c7,c11>s11,c11>c12,d6>d2,d10>d6,h10>d10,s1>s9,h4>h10,c2>c10,d8>d7,c6>c2,c13>c6,s8>d8,s8>s1,s13>c13,h1>h4,d1>h1,s2>s13,s2>s8,s5>s2,h5>s5,d11>c11,d1>d11,d3>d1,h3>d3,h3>h5,h6>h3,h7>h6,

h12,c12,s9,s13,c6,s11,s8,h3,h6,h9,c10,s5,s10,d3,d6,d5,c9,h2,c8,h4,c7,s12,h1,d10,d8,c13,c3,h8,h5,d7,s4,d13,s7,c11,s2,h7,c1,c4,d1,d4,h11,c5,s6,d2,s3,d11,d12,c2,s1,h10,h13,d9  
**663/1000: solving: solved in 101574 tries.**  
c12>h12,s13>s9,s8>s11,h6>h3,h9>h6,c10>c6,s10>s5,s10>c10,s10>s13,s8>s10,d6>d3,d5>d6,h2>h9,c8>c9,c8>s8,c8>c12,h1>h4,d8>d10,c13>c7,c3>c13,h8>d8,h8>h1,h8>c8,h2>h8,h5>d5,h5>h2,s7>d7,s7>s12,s4>s7,c1>c11,d4>d1,c5>c4,h11>h7,d12>d11,c2>d2,c2>c5,c2>c1,s2>c2,s1>s6,s1>s2,s3>s1,s3>c3,s4>s3,d4>s4,h11>h5,d13>d4,h10>h11,h13>h10,d13>h13,d12>d13,d9>d12,

s12,h11,h1,c10,s11,h9,d3,d12,h4,d8,d4,s5,h8,c3,s8,s2,d13,c7,d9,c2,s3,c8,d5,h7,h10,c6,d7,h5,h13,d1,c9,d11,c12,s10,d10,s1,s13,c4,h2,d2,s7,c13,s6,s9,d6,c1,h12,c11,h6,c5,h3,s4  
**664/1000: solving: solved in 11108 tries.**  
h1>h11,s11>s12,d12>d3,d4>d8,d4>h4,d4>d12,h8>h9,s2>s8,c7>c3,d9>d13,c2>c7,s2>c2,s2>s5,d5>d9,h10>h7,h5>h10,h5>d5,h5>h8,s3>s2,c6>c8,d7>d4,c9>c6,d11>d1,c12>c9,d10>s10,d10>d11,s13>s1,d2>h2,d2>d10,s9>s7,c13>s13,c13>c12,h13>c13,s6>s9,c1>c4,d6>d2,d6>d7,c11>c1,h3>h12,h3>h13,h3>s3,c5>c11,h6>h3,h6>d6,c5>c10,h5>c5,h5>h1,h6>h5,s6>h6,s6>s11,s4>s6,

h1,s8,s7,s4,d8,c1,s2,h13,c2,s13,s12,s10,c9,d5,d6,h7,h4,d13,h9,d2,c6,c3,s1,s3,h5,c5,c7,s11,c13,c12,h2,h3,h11,h6,d1,c10,c11,d9,s6,d7,s9,h12,d10,d4,h10,s5,h8,d12,d11,d3,c4,c8  
**665/1000: solving: solved in 3479 tries.**  
s7>s8,s4>s7,c1>h1,s13>s2,h13>s13,s10>s12,d6>d5,h4>h7,c3>c6,s3>s1,s3>c3,h5>h9,c5>h5,c7>c5,s11>s3,c13>c7,c13>d13,c13>c9,c13>h13,c13>c1,c2>c13,h2>d2,h2>h4,s11>s10,h11>h3,h6>h11,h6>d6,h2>h6,c11>c10,s9>d9,s6>s9,d7>d1,h10>h12,d10>h10,s5>s6,d12>d10,d12>d7,d12>c12,d3>d4,d3>d12,d3>d8,d11>c11,h8>h2,d11>d3,s11>d11,c8>h8,c8>c2,s5>s11,c4>c8,s4>c4,s5>s4,

s12,s3,s8,s2,h1,h10,d11,s7,c8,h8,c4,d10,c3,c6,d4,c2,c11,d5,s13,s6,c5,c13,d12,c12,c10,h7,d1,h5,d8,h2,d13,d3,d7,s4,h13,s1,s10,s11,c9,d9,h4,c1,d6,h6,s5,c7,h9,h11,d2,s9,h3,h12  
**666/1000: solving: solved in 704862 tries.**  
s3>s12,s8>s3,s2>s8,h10>h1,s7>s2,h8>c8,d10>d11,d10>h10,c3>c4,c6>c3,d4>d10,c2>c6,c11>c2,d5>d4,s6>s13,c13>c5,c12>d12,c12>c13,c10>c12,d3>d13,d7>d3,s10>s4,s11>s10,h13>h2,s1>s11,d9>d7,h6>h4,c1>s1,c9>c1,h6>h13,d6>h6,d6>d1,d9>d6,h3>h11,h12>h3,s9>h9,s9>c9,s9>d9,s5>s9,s5>s6,h5>s5,h5>d5,c10>c11,c7>c10,c7>s7,h7>c7,h5>h7,h12>h5,h8>h12,d8>h8,d2>d8,

d6,h2,h11,s2,c13,s10,s12,c7,h3,h9,d11,h6,c3,c1,h13,d12,c6,c11,c4,h4,d9,d10,s9,s3,h7,s4,s6,s7,c2,d3,d1,d7,h10,h12,s11,s5,c10,d2,c12,c5,s13,s8,h1,d8,h8,h5,d4,d5,c8,d13,c9,s1  
**667/1000: solving: solved in 8758 tries.**  
h11>h2,s12>s10,h9>h3,c1>c3,c6>c1,c6>h6,c6>c7,c11>d11,c4>c11,h4>c4,h4>h9,h13>h4,h13>c13,d9>d12,d10>d9,s9>s12,s3>s9,s6>s4,s6>c6,s6>s3,h7>h13,s7>h7,s7>s2,s6>s7,d10>d6,d1>d3,d7>d1,h12>h10,s5>s11,c5>c12,c5>s5,c5>c2,c10>c5,c10>d10,h12>h11,d2>d7,h5>h1,d5>d4,d5>h5,d5>d2,d13>d8,d13>d5,s13>d13,s13>s6,h8>h12,c8>h8,s8>s13,c9>c10,c8>c9,s8>c8,s1>s8,

c11,c8,s3,c3,s7,s9,c4,c5,h2,c1,d7,c6,s1,s2,h7,h6,d10,s6,h5,d9,h9,d2,d8,c12,d11,s5,h3,h8,d5,s4,d3,c13,c10,d13,s8,c9,c2,h13,c7,s11,h4,h11,s12,d6,h12,d12,h1,h10,s13,d1,s10,d4  
**668/1000: solving: solved in 34716 tries.**  
c8>c11,c3>s3,c3>c8,s9>s7,c5>c4,s1>c1,s1>s9,c6>c5,h7>h2,d7>h7,s2>s1,h5>h6,h9>d9,h9>h5,d8>d2,h8>h3,d5>d11,s5>d5,s5>s6,c10>c13,c9>c10,c2>c9,s11>s8,h11>h4,h11>s11,h13>h11,c7>c2,h13>d13,d12>s12,d12>d3,d12>c12,d12>d10,h8>d8,h13>h8,h13>h9,s4>s5,d6>d12,d6>c6,h1>h12,h10>h1,s10>h10,s13>s10,s13>h13,s13>s2,s4>s13,d7>d6,c7>c3,d4>s4,d7>d4,d7>c7,d1>d7,

s8,d3,s9,d10,h4,c10,d13,s13,c11,d1,d9,c13,c3,h11,c8,c7,h3,c9,c6,s11,c4,h9,h12,c2,h2,c12,s12,h6,s10,h10,h13,s6,h7,s5,h5,s2,d2,d5,s3,d12,s7,s1,d6,h1,d7,d4,d11,c1,d8,h8,s4,c5  
**669/1000: solving: solved in 5218 tries.**  
d13>d10,s13>d13,s13>s9,c11>c10,d9>d1,c3>c13,h11>c11,h11>h4,d9>d3,c8>c3,c7>c8,c6>c9,h12>h9,h2>c2,h2>h12,s12>c12,s12>s11,h6>h2,h6>c6,h6>h3,c4>c7,s10>s12,h10>s10,h10>h6,h13>h10,h13>s13,h11>h13,h7>h11,s5>s6,h5>s5,d2>s2,d5>d2,d5>h5,d5>d9,s1>s3,d7>s7,d7>d12,d7>h7,d11>d6,d11>d7,c1>s1,h1>c1,h8>h1,d4>d11,c4>d4,h8>s8,d8>h8,d5>d8,c5>d5,c4>c5,s4>c4,

c1,h7,h13,s9,d12,d11,d6,c9,c2,c10,s11,c13,s5,s13,h2,s6,d8,s12,s4,s1,s3,h1,d3,d1,c12,h5,c6,d10,c8,c4,h11,d4,h8,s2,h3,c3,h9,d13,s7,c7,d7,c5,s10,c11,d5,h6,d2,d9,h4,h12,h10,s8  
**670/1000: solving: solved in 235292 tries.**  
h13>h7,d11>d12,d6>d11,c2>c9,c10>c2,s11>s9,c13>c10,c13>h13,c13>c1,s13>s5,s13>c13,s11>s13,s6>s11,d6>s6,s4>s12,s1>s4,s3>s1,h1>h2,d3>s3,d3>d8,d1>d3,d1>h1,d1>d6,c4>c8,d4>d10,c4>d4,c4>c6,h8>h11,c3>h3,d7>d13,s7>d7,c11>c7,c11>c3,c5>c11,s7>s2,s10>s7,c5>c4,d9>d2,d9>h9,d5>d9,d5>c5,d5>d1,h4>h6,h10>s10,h4>h10,h12>h4,h12>c12,h5>h12,h5>d5,h8>h5,s8>h8,

d7,c4,d6,s9,d13,c6,c3,s5,d5,h4,h9,c13,c1,c5,h5,d1,h13,h1,h10,s1,s11,c10,s10,c11,d2,h8,s3,c8,h6,h7,d12,c7,s13,s8,d11,s4,h2,d4,d10,h11,s2,c2,s7,h3,d8,c9,h12,c12,s6,s12,d9,d3  
**671/1000: solving: solved in 1259 tries.**  
c6>d6,c6>c4,d13>d7,d5>s5,h9>h4,h9>s9,c1>c13,c5>c1,c5>d5,c5>c3,h5>c5,h5>h9,d1>d13,h13>h5,h1>h13,h10>h1,s1>d1,s11>s1,c10>h10,c10>c6,s10>c10,s10>s11,h6>h8,h7>h6,s8>s13,s8>c8,s8>s3,d12>d2,s4>s8,d10>d4,h11>d11,h11>h7,h2>h11,s2>s4,s2>h2,s2>s10,s7>c7,s7>s2,d10>d12,h12>h3,c12>h12,c9>c2,s12>s6,d3>d8,d3>d10,c12>c11,d9>d3,c9>d9,s12>s7,c12>s12,c9>c12,

d9,h7,d5,s11,h11,h10,c10,c4,s13,d2,c12,d10,s9,s3,s4,d6,s10,d11,d7,c5,c6,c2,h12,h9,s12,h1,d12,s5,h4,d3,h6,h8,c8,h5,d8,h3,c9,c3,d4,d1,c13,s2,c1,d13,s1,c11,s7,h2,s6,s8,c7,h13  
**672/1000: solving: solved in 1197 tries.**  
h11>s11,h10>h11,c10>h10,c4>c10,d2>d5,s9>s13,s3>s9,s4>s3,s4>c4,d10>d2,d6>d10,d7>d11,c5>c12,c6>c5,c2>c6,h9>h12,s12>s10,h1>h9,d12>s12,d12>d6,d7>d12,d7>h7,d7>d9,s5>s4,h4>h1,h8>h6,c8>h8,c8>c2,h3>d3,h3>h4,h5>h3,c9>c8,c3>c9,d4>d8,d1>d4,c13>c3,s1>s2,s1>d1,c1>s1,s8>s6,h13>h2,h13>d13,h13>c13,h5>h13,c11>c1,c7>c11,c7>d7,s7>c7,s8>s7,s5>s8,h5>s5,

d6,c1,c4,h8,s11,c5,h7,s10,d12,c7,h4,s5,h11,s13,s9,h10,h13,c2,c12,c10,d13,s6,d5,c11,s7,s2,s4,d4,d2,d3,s1,c8,c6,s3,s8,c9,h1,d7,h9,s12,d10,c13,h12,c3,h3,d9,h5,h6,d1,d11,d8,h2  
**673/1000: solving: solved in 16922 tries.**  
c4>c1,c5>c4,c7>h7,c7>c5,s10>s11,h4>h8,s9>s13,h13>h10,c12>c2,c10>c12,s7>s6,s2>s7,s4>s2,d4>s4,d4>d13,d5>d4,d3>d2,c8>c11,c6>c8,s3>s1,s3>d3,s8>s3,h9>c9,h1>h9,s12>s8,d10>d7,h12>h1,h12>s12,d10>d5,d10>c10,h12>h13,c3>c13,h3>c3,d9>d10,h3>h12,h5>h3,h5>s5,h5>h4,s9>s10,h11>h5,d9>d12,d9>s9,c6>c7,c6>d6,h6>c6,d8>d9,d1>d8,d11>d1,h2>h6,h11>h2,d11>h11,

d3,h11,d8,d10,d11,c7,s12,c6,c9,d2,c10,h13,s13,h5,h10,d9,s6,d7,s7,s9,d13,d4,d5,c3,d1,h8,s2,d12,c8,h6,c2,h3,h7,s5,s3,c13,c1,c12,c4,d6,s1,h4,h1,s11,h9,s4,c5,s8,h2,c11,s10,h12  
**674/1000: solving: solved in 66076 tries.**  
d10>d8,d11>d10,d11>h11,d11>d3,c9>c6,s13>h13,h10>h5,s6>s13,d7>d9,s7>d7,s9>s7,d4>d13,d5>d4,d12>d1,h6>h8,c2>c8,c2>s2,c2>c3,h3>h6,h7>h3,s3>s5,c1>c13,c12>c1,c12>d12,c12>c2,s1>s3,c4>c12,h4>h7,h4>c4,h1>h4,d6>d5,s4>s1,h9>h1,s10>s8,s10>s4,s10>s9,s10>c10,s6>s10,d6>d2,s6>d6,s11>s6,h2>h10,c11>c5,h12>h2,h12>s12,h9>h12,c9>h9,c9>c7,c11>s11,c11>c9,c11>d11,

h8,s10,s9,d9,d1,d11,c13,d2,s4,c4,h11,h6,d10,d13,s6,h2,c10,h1,c8,d8,h3,h13,d5,c6,h10,s7,c5,h4,s12,h5,c1,s13,d7,c2,c9,c12,d6,h7,d4,d12,h9,c3,s3,d3,s2,s8,s5,s11,c7,s1,c11,h12  
**675/1000: solving: solved in 9250 tries.**  
s9>s10,d9>s9,d1>d9,d11>d1,c4>s4,h6>h11,d10>d2,d13>d10,d13>c13,d13>d11,h6>h8,s6>h6,d8>c8,h13>h3,h10>h13,h10>c10,h10>h2,h1>h10,d8>d13,d5>d8,s12>s7,h5>h4,h5>c5,h5>h1,c2>c1,c9>c2,c12>c9,c12>s12,c12>c6,d6>d7,h9>h7,d12>d6,d3>d4,c3>d3,s3>c3,s3>s13,s11>s2,s11>s3,s1>s8,s5>s1,c11>c7,h12>h9,h12>d12,h12>h5,c12>h12,c12>c4,c11>c12,s11>c11,s5>s11,s5>d5,s5>s6,

d8,s13,d7,d5,s1,s11,s8,c13,c3,h4,d6,d1,s10,s12,c7,c2,h10,c12,c1,h11,h6,h1,s3,h5,h7,s7,d2,s2,h9,c5,s5,h13,d10,d11,d12,h2,h12,d9,c4,h3,d3,s4,c11,c10,c9,s6,s9,c6,c8,h8,d13,d4  
**676/1000: solving: solved in 1286 tries.**  
d5>d7,s11>s1,s8>s11,s8>d8,s13>s8,c3>c13,d6>d5,d1>d6,s12>s10,c7>c3,c2>c7,c1>c12,h6>h11,h1>h6,h1>c1,h1>h10,h7>h5,s7>h7,s7>s3,s2>d2,s2>s7,s5>c5,d11>d10,d12>d11,h12>h2,h12>d12,h12>h13,d9>h9,d3>h3,c11>c4,c10>c11,c9>c10,s6>s4,s9>c9,s9>d9,s9>s2,s5>s9,s6>s5,c6>s6,h12>s12,h12>h4,c6>c2,h1>h12,c8>c6,h8>c8,h1>h8,d13>d3,d13>s13,d4>d13,d1>d4,h1>d1,

h6,s13,d9,s11,h1,c10,s7,h13,c12,s3,c6,s1,c3,c5,c1,s6,d8,s4,h8,d12,d13,h9,d7,d5,h2,c7,h10,d10,h3,d3,s9,d11,h11,d4,d2,h12,s10,h4,s8,h5,s5,d6,c2,s12,c13,c11,s2,c8,d1,c9,h7,c4  
**677/1000: solving: solved in 93588 tries.**  
s7>s11,c3>s3,c3>c12,c6>c3,c1>c5,c1>s1,c1>c6,c1>h1,c10>c1,s6>s7,s6>h6,s13>s6,h13>s13,d12>d8,d13>d12,d13>h13,d9>d13,h9>h8,h9>d9,d5>d7,d10>h10,d10>d5,d3>h3,d3>d10,h11>d11,h11>h2,d2>d4,s5>h5,c8>c13,s2>s12,s2>s5,s2>s10,s2>s9,d2>s2,h4>h12,c8>s8,c11>c8,c11>c7,c11>h11,c11>c10,d6>d3,h4>s4,d1>d6,d2>d1,c2>d2,c9>c2,c9>h9,c11>c9,c4>c11,h4>c4,h7>h4,

s4,c8,d9,h10,d11,d7,h8,d8,h11,c5,d10,d2,s13,c13,s6,s2,h13,s1,d1,c3,c1,s7,c12,s9,c7,d3,d12,c4,c10,h9,d6,s8,h3,s3,h7,s11,d4,d5,c2,h1,h12,s12,s5,h5,h4,h2,d13,s10,h6,c6,c11,c9  
**678/1000: solving: solved in 60870 tries.**  
d7>d11,d8>h8,d8>d7,d8>c8,d9>d8,h11>h10,d10>d9,d2>d10,c13>s13,c13>c5,s2>s6,s2>d2,s2>s4,h13>c13,h13>h11,d1>s1,c1>c3,c1>d1,s7>s2,c12>c1,s9>s7,c7>c12,d12>d3,c10>c4,d6>d12,s3>h3,s3>s8,h12>h1,h5>h12,s5>s12,h2>h4,h2>c2,h5>h2,s5>h5,d13>d4,d5>d13,s5>d5,s5>s3,h6>h7,c6>h6,s10>s5,c6>c10,c6>d6,h9>h13,h9>s9,c6>c7,s11>s10,c11>s11,c11>c6,c9>c11,c9>h9,

d8,s4,h9,c8,d2,c4,c9,s2,h10,s10,c13,d13,d5,s7,d10,h7,s3,c1,s6,s1,d3,h2,h1,c10,s8,c2,c7,c12,c5,s5,h6,d1,h5,d12,c6,d11,d7,c11,h12,h8,c3,s9,d6,h4,h3,d9,h11,h13,d4,s13,s12,s11  
**679/1000: solving: solved in 11377 tries.**  
c8>d8,c4>s4,c4>c8,c9>c4,h9>c9,s2>d2,s10>h10,s10>s2,d13>c13,d5>d13,d10>s10,d5>d10,h7>s7,s1>s6,s1>c1,s1>s3,d3>d5,h1>h2,h1>s1,h1>h7,c7>c2,c12>c7,c5>c12,s5>c5,s5>s8,h6>h1,d7>d11,h8>h12,h3>h4,d9>s9,h3>c3,h3>h8,d9>d7,d6>d9,d6>c6,d6>d1,d6>h6,h5>s5,c11>c10,d12>d6,h3>h5,h11>h3,h11>c11,h11>h9,d4>d3,d12>d4,s13>h13,s12>s13,s12>d12,s11>s12,s11>h11,

h7,d9,c1,c8,s1,c13,d7,h4,s13,d5,s9,h9,h11,s7,d10,d6,c2,d13,s12,d3,h6,h5,h1,h12,h3,d1,s4,c7,s6,c4,d12,c6,c12,c9,s10,s8,h2,h8,d11,c3,d2,c11,d8,c5,h10,s3,d4,c10,s5,s2,h13,s11  
**680/1000: solving: solved in 427566 tries.**  
c8>c1,s13>c13,s13>s1,d7>d9,d7>h7,s9>s13,h9>s9,h4>h9,d5>d7,h11>h4,d6>d10,h5>h6,h1>h5,h12>h1,h3>h12,h3>d3,d1>d13,c4>s4,c7>c4,s6>s12,s6>d6,s6>s7,c2>c8,h3>h11,c12>c6,c12>d12,c12>c7,c9>c12,s10>s6,s8>s10,h8>h2,c3>c9,d11>d1,d8>h8,d8>s8,c11>d11,c5>c11,c10>h10,c10>c5,c10>c2,c3>c10,d4>d8,d4>d5,s3>c3,d2>d4,s11>s5,s2>s11,s2>d2,s3>s2,h3>s3,h13>h3,

c3,h5,h11,h7,h13,s5,c2,h10,h6,s3,d7,h1,c4,s4,c10,c8,c9,s2,d11,h4,d13,s1,c1,s13,c6,c13,c5,d6,c12,s6,h9,s12,h12,d3,d10,c11,s10,h2,d1,s7,s8,d8,d12,d2,s9,d5,c7,d9,s11,h8,h3,d4  
**681/1000: solving: solved in 118714 tries.**  
h11>h5,h7>h11,h13>h7,c2>c3,h6>h10,h1>h6,s4>c4,c8>c10,c9>c8,c1>s1,c13>c6,c13>s13,c13>c1,c13>d13,c5>c13,d6>d11,c12>c5,s6>d6,s6>s2,h4>s4,h4>h1,s6>s3,c12>c9,h12>s12,h12>h9,h12>c12,h12>h4,d3>d7,d10>d3,s10>s6,d10>s10,d8>s8,d5>d12,d5>d1,d2>d5,d2>d10,h2>h12,d8>d2,c7>c11,s7>c7,s11>s7,s11>s5,s9>s11,d9>s9,h2>c2,h8>h13,d8>d9,h3>h2,h8>h3,d8>h8,d4>d8,

h12,s7,s10,d7,c8,s13,c13,d4,c2,h9,d5,s8,h4,h13,s9,c4,h7,c7,h8,c6,d11,c9,d13,d10,h6,c1,h3,s6,d3,c10,d12,s3,s1,d2,s12,d8,h5,d6,s11,s4,d1,c5,c3,h1,s2,h10,c12,d9,c11,h11,h2,s5  
**682/1000: solving: solved in 88934 tries.**  
s10>s7,s13>s10,c13>c8,d5>d4,h13>h4,s9>h9,s8>s9,c4>c2,h7>h13,c7>h7,d10>d13,c1>c9,h3>h6,d3>d10,h3>d3,c10>c1,s3>h3,s6>s3,s6>c6,s6>s8,c10>c7,d12>d11,s12>d12,s12>s6,s1>s12,d8>d2,d1>d6,s4>s11,c5>h5,c5>c10,d8>h8,d1>d8,s4>s1,s4>c4,c5>c13,d5>c5,d1>d7,s2>s4,s2>s13,d5>d1,c12>c3,h10>h1,c11>c12,h2>h10,h11>c11,h11>h12,h2>h11,s2>h2,s5>s2,d5>s5,d9>d5,

d11,s9,h12,d3,c9,d13,h6,c13,d1,s11,c2,c5,h1,c4,s3,c6,c12,c3,d9,h9,s10,h7,s13,s8,h2,c11,s7,c7,h3,d4,s1,d6,h13,h8,c10,d12,d10,s5,d7,h10,s4,h4,s2,s6,d2,d5,s12,c1,d8,h11,c8,h5  
**683/1000: solving: solved in 10402 tries.**  
d3>d11,h6>h12,c13>d13,c13>c9,c2>c13,c5>c2,s3>s11,c6>c4,c12>c6,c3>c12,h9>d9,s8>s13,s7>s8,s7>h7,s7>s10,c7>c11,h8>h13,d12>d6,d10>c10,h10>d10,h10>h8,s5>s1,h4>h10,h4>d4,h4>h3,d7>d12,d7>c7,s4>s5,s4>h4,s4>s7,d2>d7,d2>h2,s2>d2,s2>s4,d8>d5,s12>s2,s6>s12,c8>d8,c8>c3,c1>c8,c1>d1,c1>c5,s3>s9,s3>d3,h1>c1,h9>h1,s6>s3,h6>s6,h9>h6,h11>h9,h5>h11,

s11,c7,d1,d5,d10,h10,s9,c1,d8,c5,d13,s5,h5,c8,h7,d12,s3,s8,d3,c12,c4,s2,c13,h8,c11,d4,h13,s10,d2,s13,h3,d6,s1,h4,c10,d9,c2,h6,h11,c9,s12,c3,h9,h12,d7,c6,s7,h2,s6,h1,d11,s4  
**684/1000: solving: solved in 18491 tries.**  
d5>d1,d10>d5,h10>d10,s9>s11,h5>s5,c8>c5,c8>d8,c8>c1,h5>h10,h7>h5,h7>c7,d12>d13,s8>s3,c12>d12,c12>c8,s8>s9,h13>h8,h13>c13,c11>c4,s10>s2,d2>d4,s13>s10,h13>s13,d2>d3,h3>h13,d6>d2,h11>h6,c9>d9,c9>c10,c2>c9,c3>c2,c3>h3,c3>c12,h11>h4,h12>h9,s6>c6,s6>s12,h2>h12,h1>h2,h1>s1,h11>h1,s6>d6,s6>s8,c11>c3,h11>c11,h11>h7,d11>h11,d7>d11,s7>d7,s7>s6,s4>s7,

s5,s2,c6,s1,h8,h10,c12,c1,s6,d13,h13,c9,h12,s4,s11,d9,h11,c5,h5,c10,h6,h3,s8,d2,d10,h9,h1,c4,c13,s13,d5,h7,d7,d12,d6,s9,c11,d11,d8,s12,c8,c2,h2,s3,s7,c7,d3,h4,c3,d4,d1,s10  
**685/1000: solving: solved in 5450 tries.**  
s2>s5,h10>h8,c12>c6,c1>c12,s1>c1,s1>s2,h13>d13,s11>s4,d9>c9,h11>s11,h11>h12,h5>c5,h5>h11,h3>h6,d10>d2,d10>c10,h1>h9,c13>c4,s13>c13,h7>h1,d7>d5,d12>d7,d6>d12,d11>c11,d8>d11,c2>c8,s3>s12,h2>c2,c3>c7,c3>s3,d3>c3,d3>d8,s7>s9,s7>h7,s7>s8,s13>s7,d3>h3,d6>d10,d3>d9,h2>h5,h4>h2,d4>h4,d4>d3,d1>d4,s13>h13,s13>s1,d6>d1,s10>h10,s10>s13,s6>s10,d6>s6,

h9,d3,s12,h12,d5,h8,s13,s6,c8,s3,h13,s10,d10,h7,c3,h2,d11,d4,s1,c7,h4,s8,c6,s7,h10,c11,s9,d12,c13,c10,h11,s2,c1,d1,h5,h6,d9,c5,s4,c2,d7,d8,s5,c9,s11,h1,d6,c4,d2,h3,d13,c12  
**686/1000: solving: solved in 3367 tries.**  
h12>s12,s6>s13,d10>s10,d4>d11,h4>d4,h4>h2,c7>c3,c7>h7,h4>h13,s8>s1,s7>c7,s7>s3,s8>s7,s8>c8,s8>s6,s8>h8,h4>h12,c13>c11,c10>c13,c10>h10,c10>c6,c10>d10,s2>s9,d1>c1,h6>h5,d8>d7,c9>c2,c9>d9,c5>c9,s5>c5,s11>s5,s11>h11,s4>s11,h1>d1,h6>h1,d6>d8,c4>s4,c4>c10,c4>h4,s2>s8,d6>h6,d2>s2,d6>d5,d2>d6,d13>d2,d12>d13,c12>c4,d12>c12,h3>h9,d3>h3,d12>d3,

s7,c4,s4,s6,c2,s10,s1,c10,h4,c7,h11,d12,h12,c9,s12,h7,s9,c11,d1,d10,c6,h6,d13,h8,d3,d11,h1,s2,s3,c5,d9,h3,c3,c8,h5,c12,c1,d6,h13,d2,h9,s13,d8,d5,h2,h10,s8,s11,s5,d4,d7,c13  
**687/1000: solving: solved in 15161 tries.**  
s4>c4,s4>s7,s6>s4,s1>s10,h12>d12,h12>h11,h7>h12,h7>c7,h7>h4,s9>s12,s9>c9,s9>s1,d10>d1,d10>c10,c6>c11,h6>c6,h6>h7,d11>d3,s3>s2,h3>s3,h3>h1,d9>d11,c3>c5,c3>h3,c8>c3,h5>h8,c12>c8,c1>c12,s13>h13,d5>d2,s8>d8,h10>h9,s8>s13,h2>h10,s11>s8,s5>s11,d5>s5,d4>d6,d7>d4,d5>d7,d5>h5,d5>d10,d9>d5,d9>s9,h6>s6,d13>d9,c13>d13,c1>c13,h2>h6,c2>h2,c1>c2,

h6,d8,c7,h8,h1,c2,d3,c5,d9,s4,d5,s3,h10,h11,c3,s5,h13,d4,s13,h3,h9,s8,s10,s2,c12,c9,c11,s7,c6,c13,s9,s1,c8,s6,h7,d7,d2,d11,c10,s12,d13,d10,h2,c4,h4,d1,h5,d12,s11,c1,d6,h12  
**688/1000: solving: solved in 115633 tries.**  
h8>h6,d8>h8,d5>c5,d5>d3,d9>d5,s3>s4,h11>h10,s5>s3,h3>h13,h3>c3,h3>h11,d4>d9,s10>s8,s2>s10,c9>c12,c11>c9,c13>c6,s1>s9,d7>h7,d2>d7,d11>d2,d10>c10,s12>s6,h4>c4,d1>d13,h4>h2,h5>h4,d6>d12,d6>d10,d1>d6,s11>d11,s11>s1,s11>c11,s11>s2,s7>s11,c13>s13,c8>c13,s12>s7,h5>h9,h5>s5,h3>h5,c8>c2,d1>d4,c1>d1,c1>c7,c8>d8,c1>c8,h1>c1,h3>h1,h12>s12,h12>h3,

d6,c1,s1,c11,d12,s7,s5,s3,s12,h7,c3,d4,c2,h9,c5,c8,h3,d10,s6,s4,d13,d3,h8,h5,h13,h11,s13,s8,c6,h4,d8,s2,c13,s11,h6,d5,h1,s9,c4,c12,h2,s10,d11,h10,d2,c9,c7,c10,d1,h12,d9,d7  
**689/1000: solving: solved in 7474 tries.**  
s1>c1,d12>d6,s5>s7,s3>s5,s12>s3,s12>d12,s1>s12,c8>c5,s4>s6,d3>d13,d3>h3,d10>d3,h8>c8,h8>h9,d10>d4,h13>h5,h11>h13,s8>s13,s8>h8,s4>s8,c6>c2,h4>h11,h4>s4,d8>d10,c13>c6,s11>s2,c12>c4,s10>s9,h2>h1,h10>s10,h10>h6,d11>d5,c7>c9,c10>c12,c10>h10,c10>c13,d11>s11,d11>d8,d11>c11,h4>h7,h2>h4,c10>c3,d2>d11,c7>c10,d7>d9,d7>c7,d1>d7,d1>s1,d2>d1,h2>d2,h12>h2,

c7,d4,h5,c12,d5,s6,c9,s13,c6,s3,h11,s2,h8,h7,d9,d11,d10,d7,c8,h2,s7,d8,s11,s4,s5,s1,h9,c5,c11,s8,h10,c1,h1,s10,h6,d13,h13,d12,d3,c10,h3,c4,d1,d6,c3,d2,h4,s12,s9,c13,h12,c2  
**690/1000: solving: solved in 261858 tries.**  
c12>c7,d5>h5,d5>d4,c9>c12,s13>s6,c6>c9,s3>s13,h7>h8,d11>d9,d11>h11,d10>d11,d7>h7,h2>s2,d8>d7,c8>d8,s11>s7,s4>s11,s5>s4,s1>s5,h9>h2,c11>c5,s8>c8,s8>s3,s1>s8,h10>d10,h9>h10,c1>c11,h1>c1,h1>h9,h1>s1,d3>d12,d2>d1,d6>d2,h4>c4,h4>h3,d6>d3,d6>h6,d6>d5,d6>c6,d13>d6,c13>c3,c13>h13,c13>d13,h12>h4,h12>h1,s12>h12,s9>s12,s10>s9,c10>s10,c10>c13,c2>c10,

h8,s5,s3,d10,s11,d8,h6,h2,c12,d6,c7,d4,c11,c6,d9,s7,d12,h3,s12,d11,c4,c8,s8,d13,d3,c3,c2,c1,h11,c13,c9,d1,c5,s2,s4,d7,s6,c10,h10,h4,h5,s10,h12,h1,s9,s13,d2,h13,d5,h7,s1,h9  
**691/1000: solving: solved in 152594 tries.**  
s3>s5,h2>h6,d6>d8,c7>c12,d4>d6,c11>c7,c11>s11,c6>c11,s12>s7,d12>s12,d12>d9,c8>c4,s8>c8,d3>d13,d3>h3,d3>d12,d11>d3,c2>c3,c2>h2,c1>c2,c9>c13,s4>s2,d7>d1,c10>c5,h10>c10,h10>h11,h12>h4,s13>s10,h1>h12,s13>s6,s9>s13,d5>h5,d2>d5,h9>h13,h9>s9,h9>c9,h9>h10,h1>h9,s4>s8,s4>d4,s4>s3,d2>d11,d2>d10,c1>c6,d7>d2,h7>d7,h1>c1,s1>s4,h1>h7,h1>s1,h1>h8,

c7,d3,d6,c10,s6,s12,h13,s4,d13,s1,h11,s11,c8,h7,s5,d1,c6,c3,c13,h4,d8,d7,h2,h9,s13,c12,d11,c2,s3,d10,c1,c11,h6,c9,c5,h1,c4,d9,h5,s10,d5,s7,h3,d2,h12,h10,d12,d4,s8,h8,s9,s2  
**692/1000: solving: solved in 18809 tries.**  
d6>d3,s12>s6,s11>h11,s11>s1,s5>s11,c6>c8,c3>c6,c13>c3,d7>d8,d7>h7,d7>d13,d1>d7,h2>h4,h9>h2,s13>s5,s13>h13,s13>s12,s4>s13,d1>d6,d10>d11,c11>c1,c5>c9,h5>h1,h5>c5,c4>c11,h5>h6,d5>h5,d9>d5,s10>s3,s7>s10,h10>h12,d4>d2,d4>c4,h10>h3,d12>d4,d12>d10,d12>c12,d9>d12,c2>c13,d9>h9,s7>s4,s7>c7,h10>c10,d9>d1,h8>h10,s2>c2,s2>s7,s8>h8,s9>s8,s9>d9,s9>s2,

d11,c11,s13,c12,c4,c13,c2,c3,h9,h13,h2,h3,h12,d8,d12,d13,h8,d10,s10,d4,c10,d5,h5,h1,s5,s7,c5,c9,s4,c6,s1,d1,s8,s6,d6,h6,s3,h4,s11,s12,d2,c7,h10,h7,c1,s9,h11,d7,d9,d3,c8,s2  
**693/1000: solving: solved in 220695 tries.**  
c11>d11,c4>c12,c13>c4,c13>s13,c13>c11,c2>c13,c3>c2,h13>h9,h2>h13,h3>h2,h3>c3,h12>h3,d12>d8,d12>h12,d13>d12,s10>d10,d4>d13,c10>s10,d5>d4,h5>d5,h8>h5,s7>s5,c5>c10,c9>c5,s4>s7,c6>c9,s1>s4,s1>h1,d1>s1,s8>h8,d6>s6,s12>s3,h7>h10,h7>c7,h11>h7,h11>h4,s11>h11,s9>s11,d9>d7,d9>s9,d3>d9,d2>d3,c8>c1,s2>s12,d2>s2,d2>d1,d6>d2,h6>d6,c8>s8,c6>c8,h6>c6,

d13,s2,c6,c9,s7,s1,s12,s4,c11,d6,s6,h11,d2,c13,d11,h1,c1,d12,h7,h9,h10,s11,c12,c5,h2,s13,d1,d10,c4,c10,c8,h3,s8,d5,s5,h5,c3,s9,c2,c7,d8,s3,d3,d7,h8,s10,h13,d9,h12,d4,h4,h6  
**694/1000: solving: solved in 4029 tries.**  
c9>c6,s1>s7,s12>s1,s4>s12,s6>d6,d11>h11,d2>d11,c13>c11,c1>h1,c1>c13,d12>d2,h9>h7,h10>h9,s11>s6,c5>c12,d10>d1,c10>c4,c10>d10,c10>c5,c10>h10,c10>c1,s13>s11,s5>d5,s5>s8,h5>s5,h5>h3,c7>c2,s3>s9,s3>c3,c7>c8,d3>d8,d7>d3,s10>s3,h12>h8,h12>h5,h12>d12,h2>h12,s10>s13,s10>c10,s10>s2,c7>c9,d7>c7,h13>h2,d9>d7,d4>d9,s4>d4,h13>d13,s4>s10,h4>s4,h4>h13,h6>h4,

c2,d13,h11,s6,s7,s12,h3,c1,h8,c12,d2,d5,d1,d9,c4,h12,c6,d7,h10,s9,d10,h6,s8,c3,c5,h1,c8,h2,d6,s3,s5,d8,h5,s2,d11,h9,h4,d3,s11,d4,c10,c11,s4,s10,d12,c7,h7,c13,s1,s13,h13,c9  
**695/1000: solving: solved in 8463 tries.**  
s7>s6,s12>s7,d5>d2,d1>d5,d1>c1,d9>d1,c4>c12,h10>h12,s8>s9,c5>c3,s5>s3,s2>s5,h4>h9,s11>d11,s11>s2,h4>h5,d4>d3,d4>h4,d4>d8,c11>s11,c11>c8,d4>d6,c10>c11,s4>d4,s10>c10,h7>c7,h7>h2,s1>s4,s1>h1,s10>s1,s10>d10,s10>s8,h6>c6,s10>h10,h7>h6,h7>h8,c5>c4,d7>h7,s13>s10,h13>s13,d12>d7,d12>s12,h13>h3,h13>d13,d9>d12,c9>d9,c9>c2,c5>c9,c13>c5,h13>c13,h11>h13,

h4,d10,c2,s13,h11,d2,c9,s11,c7,h2,c8,h7,h3,c13,s1,c5,s10,c10,c12,h8,d13,c6,c3,c1,d4,s4,h12,h9,s8,d11,d8,d9,d6,d5,d1,s5,h1,c11,s3,s12,h13,d7,s9,c4,s6,d12,s2,h6,h5,h10,d3,s7  
**696/1000: solving: solved in 4147447 tries.**  
d2>c2,d2>d10,h11>h4,h7>c7,h2>h7,c8>c9,h3>h2,c13>c8,c13>s13,s11>h11,c5>c13,s10>s1,c10>s10,c12>c10,c6>c12,c3>c6,c3>h3,c3>c5,d13>d2,s4>d4,h12>h8,h9>h12,s8>s4,d9>d8,d1>d9,d1>c1,d6>d1,s5>s8,c11>d11,h13>h1,s9>s3,s12>s9,d7>d5,d7>d6,d7>d13,h6>s6,d12>s12,h10>h6,h10>h13,c4>c11,h5>h10,h5>h9,s5>h5,s2>s5,d3>d12,s7>s2,s7>s11,d7>s7,d3>d7,c3>d3,c4>c3,

h13,h4,c1,c8,c5,h12,s6,h10,c13,s5,s7,d12,d2,s9,d6,d3,s1,h7,h6,s2,s8,h1,c12,c10,d8,d11,c9,s13,d13,d4,s11,d7,d1,s3,c7,c2,c3,c4,h2,h8,s4,c11,h11,d5,d9,h9,s12,s10,h3,h5,d10,c6  
**697/1000: solving: solved in 24988 tries.**  
h4>h13,c8>c1,c5>c8,s5>s6,s7>s5,d2>d12,d3>d6,h6>h7,s8>s2,h1>s1,h6>h1,s8>s9,c10>c12,d8>d3,d8>s8,d8>d2,h6>h10,d13>s13,d4>d13,s11>d11,d7>d4,d1>d7,s3>s11,c2>c7,c3>c2,c3>s3,c3>c10,c9>c3,h8>h2,h9>h11,h9>h8,h9>c9,h9>h6,c4>c13,d1>d8,d5>d1,s10>s12,h5>h3,d10>d9,d10>d5,s10>d10,s10>s7,s4>s10,s4>h4,h9>h12,c4>s4,c11>c4,h5>h9,c6>c11,c5>c6,h5>c5,

h6,s6,h3,d5,c1,d12,h8,s4,h1,d1,h9,s9,c7,c13,s11,h5,h10,s3,s12,s5,h11,h4,d10,c8,s1,d7,c4,d13,d2,s13,d9,h12,c12,c5,h2,c2,c11,d11,c6,c9,s2,d3,s7,s10,s8,c10,h7,h13,d8,d4,c3,d6  
**698/1000: solving: solved in 1285 tries.**  
s6>h6,d1>h1,d1>d12,d1>c1,d1>d5,s9>h9,s9>s4,c13>c7,h10>h5,s12>s3,s5>s12,h11>s11,h11>h8,h10>h11,d7>d10,d2>d13,s13>s1,d9>d2,c12>h12,c5>c12,c2>h2,c2>c5,c11>c2,d11>c11,d11>d9,c9>c6,d3>d11,s7>s2,s10>s7,s8>s10,h13>h7,d8>s8,d4>d8,d4>c4,d4>d7,d4>h4,d3>d4,c10>c8,s13>s5,c9>c10,h13>s13,h13>h10,c9>s9,c13>c9,d3>d1,d3>h3,c13>h13,c3>c13,d6>s6,d3>d6,c3>d3,

d6,d12,s4,d3,h12,c6,c1,c2,s3,d5,h3,c8,d7,h7,h6,h11,s8,h5,h13,c11,c9,h1,c12,d2,s7,d4,c5,s1,s9,d13,s6,s11,s12,c10,h9,d8,s10,d9,c7,h2,d10,s2,s13,d1,c4,h10,h8,s5,h4,d11,c3,c13  
**699/1000: solving: solved in 51890 tries.**  
d12>d6,h12>d12,c1>c6,c2>c1,s3>s4,d3>s3,h3>d3,h3>h12,h7>d7,h6>h7,h11>h6,h13>h5,c11>h11,c11>c8,c9>c11,h1>h13,c12>c9,s7>s8,d4>d2,s1>h1,s1>s7,d4>d5,s11>s6,s12>s11,s10>c10,s10>s12,h9>s9,d9>d8,d1>d10,d1>d9,s2>h2,c4>c7,h8>h10,s5>s2,s5>s10,s5>c5,d1>d13,d1>s1,h8>h9,h4>h8,s13>s5,c4>h4,d11>d1,c13>s13,c4>c13,c3>c12,c3>h3,c2>c3,c4>c2,d4>c4,d11>d4,

h8,c9,c7,h6,d2,c13,s5,c8,s7,s11,d3,s12,h11,h1,d13,h12,s4,c4,s2,c2,h4,s13,d6,c12,h10,h5,d11,h13,d9,h2,h9,d7,d5,c6,d1,s6,c3,d8,s1,h7,d10,c1,s3,s10,c5,c10,s9,d12,d4,h3,c11,s8  
**700/1000: solving: solved in 758901 tries.**  
c7>c9,c13>c7,s11>s7,h11>s11,h1>h11,s4>s12,c4>s4,c4>c8,d13>d3,c2>s2,h5>h10,d11>d6,h13>h5,h13>s13,h13>h4,h13>d13,h13>h1,h12>h13,c12>h12,c12>c4,c2>c12,d11>d2,d9>d11,h2>c2,h2>h6,h9>h2,d9>h9,d5>d7,d5>s5,s10>d10,c10>c5,c10>s10,d4>d12,h3>s3,h3>h7,c1>c10,s8>s9,s8>s1,s8>s6,c3>c6,c3>c13,d8>s8,d4>d8,d4>d9,d5>d4,d1>d5,h3>h8,c3>h3,c1>d1,c1>c3,c11>c1,

d9,h10,d4,d5,h8,s3,c8,c4,c9,c11,h9,h13,d3,s1,d12,d7,s10,s6,h7,h11,c2,s8,d8,h4,s2,d13,h6,h5,d6,c10,s11,h12,s4,c13,s9,d10,c5,d1,c1,s7,s13,h1,c3,d11,h2,c7,s5,d2,h3,c6,s12,c12  
**701/1000: solving: solved in 49277 tries.**  
d5>d4,c4>c8,c9>c4,c11>c9,h9>h8,h9>d9,h10>h9,d3>s3,d3>d5,h13>h10,d12>d3,d7>d12,s10>s1,s6>s10,h7>d7,h7>h13,h11>h7,c11>h11,d8>s8,s2>c2,s2>s6,h5>h6,c5>c13,d1>d10,s7>s9,c1>d1,h2>h1,c3>c1,d2>d11,d2>h2,s5>s13,s5>c5,s5>s11,s5>h5,s7>s4,c7>s7,c3>c10,c6>c7,c6>d6,c3>c6,h3>c3,h3>h4,d2>d13,h12>h3,s12>s5,c12>h12,c12>c11,d2>d8,s12>c12,s2>s12,d2>s2,

d10,s3,d8,h7,h3,h2,s11,c11,c3,h12,d9,s4,d13,s1,h4,d3,s8,s6,s9,c7,h10,d4,c5,d2,d5,d1,h9,s2,c6,c13,s13,s10,c1,d6,c12,c2,d11,c8,h11,h13,c10,s5,c9,h5,c4,s7,d7,s12,h1,h6,h8,d12  
**702/1000: solving: solved in 2184 tries.**  
h3>h7,h2>h3,s11>s3,c11>s11,c3>c11,h12>h2,h4>s4,s6>s8,s9>s6,c5>c7,d2>d4,d5>d2,d1>d5,c13>c6,s13>c13,s13>s2,s10>s13,s10>h10,d6>d1,c12>c1,c2>c12,d11>d6,c8>c2,h11>d11,h9>h11,h9>s9,c10>s10,c10>c5,c8>c10,h5>h13,s5>h5,c9>h9,c8>c9,s5>s1,c4>c8,s7>s5,d7>s7,d7>d13,h6>h1,d12>s12,d12>d7,d12>h12,d12>d10,d9>d12,d3>c3,d3>d9,d8>d3,h8>h6,h8>d8,h4>h8,c4>h4,

c11,c1,d11,c10,d13,s9,s8,h1,s4,d8,c8,d1,d4,c3,d6,h2,c13,h13,c5,d9,c2,d10,d12,c4,c6,h8,h6,d5,c9,s6,s10,d2,h4,s1,d3,d7,h5,s7,s13,s3,h7,c12,s11,h3,s12,h12,h10,s5,h11,h9,s2,c7  
**703/1000: solving: solved in 136995 tries.**  
c1>c11,s8>s9,d8>s8,d8>d13,c8>d8,c8>c10,h1>c1,d1>d11,d1>h1,d4>s4,c13>c3,h13>h2,c5>c13,d12>d10,c6>c4,h6>h8,h6>c6,s6>h6,s10>s6,d3>d2,d7>d3,s13>s7,s3>s13,s11>s3,h10>h3,h12>c12,h11>h10,h11>s11,h11>h4,h7>h11,h7>d7,h12>h7,s12>h12,s12>s10,s12>d12,s5>h5,s2>s1,s2>s12,s2>c2,s5>s2,d5>s5,d5>d6,h9>h13,d9>h9,d9>d4,c9>d9,c9>c8,d5>d1,c5>c9,c5>d5,c7>c5,

s11,d10,d7,s2,s6,c2,d1,s13,c9,h13,s4,s9,c12,d2,h5,c11,c6,d9,h3,d3,s8,h9,c5,d8,c1,d13,s7,h4,d11,s12,h12,s10,c13,c8,d6,h7,h6,d4,h1,h2,h8,d5,c4,c3,c7,h11,s3,c10,h10,s1,d12,s5  
**704/1000: solving: solved in 38667 tries.**  
d7>d10,s6>s2,d1>d7,s4>s13,s9>s4,c9>s9,c9>c2,h5>h13,c6>c11,d3>h3,d3>d9,d8>s8,d8>d3,c5>c6,c5>h5,c5>c9,c12>c5,d2>d1,d8>d2,d11>d13,h12>s12,h12>h4,c8>c13,h6>h7,h6>d6,h6>h12,h8>h2,d5>d4,h8>c8,c3>c4,c7>c3,c10>c7,h10>c10,h10>h8,h10>s10,h11>h10,h1>h6,h1>c1,h1>h9,h11>h1,d11>h11,s7>s6,d11>d8,d11>s11,s3>s7,d12>c12,s1>s3,s5>s1,d5>d12,d5>s5,d5>d11,

s11,h13,s10,d3,c7,d12,h1,d5,s5,c5,h11,c2,s3,d4,h2,d6,h4,d13,h12,h9,s2,c11,s4,d9,c4,h6,c9,d2,d7,d11,s1,s7,c3,c12,c13,h10,c8,h7,c10,h8,d8,s12,h3,h5,s13,c1,s8,c6,d1,d10,s6,s9  
**705/1000: solving: solved in 35049 tries.**  
s5>d5,c5>s5,c5>c7,h11>h1,c2>c5,d4>d12,h9>h12,c4>c11,s4>c4,s4>s2,s4>h4,s4>s3,d13>d6,d9>h9,d9>d13,d2>d9,d2>h2,d2>d4,d2>c2,d2>d3,h11>h13,h11>s11,d11>d7,s7>s1,c3>c9,c12>c3,c13>c12,h7>s7,h7>h6,h10>h7,h10>s10,h10>h11,d11>d2,d8>c8,d8>d11,c10>c13,d1>c1,d10>d1,s6>c6,s6>s13,s9>s6,s9>s12,s9>s4,h5>h3,d10>c10,d10>h10,d8>d10,s8>s9,s8>d8,h8>s8,h5>h8,

s12,h12,d12,c8,c1,s11,d1,c7,d11,d2,h6,s13,s6,h10,h11,c3,s4,h7,s5,d9,d7,c6,c2,h2,c10,s2,d13,c9,s1,h8,h9,h13,d3,h1,d6,c12,h4,c11,s9,s8,d5,c5,d8,h3,s7,s3,d10,d4,c4,c13,s10,h5  
**706/1000: solving: solved in 5942 tries.**  
h12>s12,d12>h12,c1>c8,d1>d12,c1>d1,d2>d11,s6>s13,s6>h6,s6>s11,h11>h10,c3>c7,d7>d9,c2>c6,h2>c2,h2>h7,h2>d2,h11>h2,s4>s6,s5>s4,c10>c3,s1>s2,h9>h8,h9>c9,h13>h9,h13>d13,h13>h11,h4>h1,c11>c12,s8>s9,d5>d6,c5>d5,c11>c5,d8>s8,h3>h4,h3>d3,s3>s7,s3>h3,s3>s1,d8>d7,d10>d8,c4>d4,c4>c11,s10>s3,s10>d10,s10>s5,c10>s10,c13>c10,c4>c1,c13>c4,h13>c13,h5>h13,

c5,c12,d11,c3,s2,h6,d8,d9,d7,d4,d5,s7,h7,s10,c6,d1,c10,s12,s11,c11,s1,s5,d6,d2,d3,c7,s8,s13,h2,c8,h4,h12,h10,d10,h8,h9,c9,c1,c13,h13,c2,s3,d12,s4,s9,h5,d13,c4,s6,h11,h1,h3  
**707/1000: solving: solved in 4490 tries.**  
c12>c5,d9>d8,d7>d9,d4>d7,d5>d4,s7>s2,h7>s7,h6>h7,d5>d11,c6>c3,h6>c6,d1>d5,c10>s10,c10>c12,s11>s12,c11>s11,c11>c10,s5>s1,d6>d1,h6>d6,d3>d2,s8>s5,s13>s8,h12>h4,h10>h12,d10>h10,h8>h2,c8>h8,c8>c7,c9>h9,c1>c9,c13>c1,h13>c13,c2>c8,s9>s3,d12>d10,s4>s9,d13>h13,d13>d12,d13>s13,d3>d13,c4>c2,c4>c11,s4>c4,h1>h11,h3>h1,h3>d3,h5>h3,s6>s4,h6>s6,h5>h6,

c1,d7,d8,h11,s1,s2,c11,c2,d6,s5,d3,h9,h2,c3,d11,s9,h6,h7,h8,h13,s8,d2,d12,c13,s6,d1,h10,s13,h5,c5,s12,d5,c4,s11,c7,d9,h3,s7,h1,c8,s3,h12,d13,s10,c9,c6,h4,c10,c12,d4,s4,d10  
**708/1000: solving: solved in 704 tries.**  
d8>d7,s1>c1,s2>s1,c11>h11,c2>c11,h2>h9,d11>d3,h6>h2,h6>d6,s9>s5,h8>h7,h13>h8,d12>d2,c13>h13,c13>c3,s8>s9,s8>d8,s8>s2,c13>c2,d12>d11,s13>s6,s13>c13,s13>s8,d1>d12,h5>h10,c5>h5,d5>d1,c5>d5,s12>s13,c4>c5,s11>s12,c7>c4,h3>h6,s3>s7,s3>h3,s3>s11,c8>c7,h12>h1,c6>c9,d4>h4,c12>c6,d4>d13,c12>h12,s4>d4,c10>c12,s10>s4,d10>d9,c10>d10,c10>c8,s10>c10,s10>s3,

c2,s13,h12,h11,d11,d1,c10,d4,h8,c12,d6,s3,h9,s4,d12,s6,s8,s9,c13,s2,h4,c4,h7,h3,s12,c11,c7,s7,d5,h10,c5,d2,d10,c9,d13,h2,c8,s5,d9,c1,h13,d3,d8,d7,h6,h1,s1,s11,s10,c3,c6,h5  
**709/1000: solving: solved in 22453 tries.**  
h11>h12,d11>h11,d1>d11,c10>c2,d4>d1,d6>d4,h9>h8,s4>s3,s8>s6,s9>s8,c4>h4,h3>h7,s12>s2,s12>d12,s12>s4,s12>c12,s12>s13,s9>h9,c4>c13,c7>c11,s7>c7,s7>s9,d2>d5,d10>d2,h10>d10,h10>h3,c9>c5,h2>h10,c1>c8,d9>d13,d9>c9,c1>c4,h13>h2,d8>d9,d7>d8,d7>s7,d7>d6,c1>c10,s5>s12,h1>h13,s1>h1,s1>c1,d3>d7,s10>s11,c3>d3,c6>c3,h6>c6,s10>s1,s5>s10,h5>h6,h5>s5,

h13,s4,c6,s2,s13,h1,c7,d11,c12,s9,h4,s8,d5,d3,d4,s5,s11,h8,d2,c4,s3,d1,s7,c11,h5,h2,h9,c8,d6,h6,d10,s12,d7,h11,h3,c9,s1,c3,d9,d12,h10,c2,d8,s6,c5,c13,h12,c1,h7,c10,d13,s10  
**710/1000: solving: solved in 111632 tries.**  
s13>s2,s13>h13,s4>s13,d3>d5,d4>d3,s11>s5,h8>s8,h8>h4,s11>s9,d2>d4,d1>d2,s7>s3,h2>h5,h9>h2,h6>d6,h3>h11,c3>h3,c9>c3,s1>s12,d9>c9,d9>d7,d12>d9,d8>d12,h10>d10,h10>h9,d8>c8,s6>h6,s1>s6,c5>c2,c13>c5,c1>s1,c1>c11,c1>d1,c1>c12,c1>h1,c1>c6,c7>c1,s11>d11,s7>s11,s7>c7,c4>s4,h10>h8,h12>h10,h7>h12,d13>d8,c13>d13,c13>c4,c10>c13,s10>c10,s7>s10,h7>s7,

d11,d8,d7,d3,s7,s5,d1,h11,h12,s8,s9,d5,s10,c5,d6,s3,c11,c8,s11,h2,d13,d2,h6,s2,h7,s13,c1,h1,c6,c12,h3,c3,h4,c9,d4,d9,s1,c4,h13,h5,c13,h9,s6,d12,s4,s12,c7,c2,d10,h8,h10,c10  
**711/1000: solving: solved in 2190 tries.**  
d8>d11,d7>d8,d3>d7,s5>s7,h12>h11,s8>s5,s9>s8,d6>d5,c8>c11,d2>d13,d2>h2,s2>s11,d2>s2,h7>h6,h1>c1,c12>c6,c3>h3,c3>c12,d9>d4,d9>c9,c4>h4,c4>c3,s1>h1,s1>s13,h5>h13,c13>c4,h9>h5,h9>d9,h9>h7,s12>s4,s12>d12,s12>s1,c2>c13,c2>d2,c2>c8,s12>s3,s6>s12,s6>d6,s6>s9,s10>s6,h9>h12,c2>c5,c7>c2,d10>d1,d10>s10,d10>d3,c10>c7,h10>h8,h10>c10,h10>h9,h10>d10,

d11,s1,c5,h8,s3,c7,s13,d8,h5,d9,c13,s6,c8,d13,s10,s7,c2,d2,d3,s8,d4,h13,s12,s2,h1,h4,s5,s4,h11,c1,d1,h9,c3,h10,d6,h2,h6,c4,c9,c6,s11,d12,d7,h3,h7,c11,s9,d5,h12,d10,c12,c10  
**712/1000: solving: solved in 3018 tries.**  
s3>s1,d8>h8,d8>d11,c7>c5,c13>s13,c13>c7,d13>d9,s7>s10,d2>c2,d3>d2,s8>c8,s8>s6,s7>s8,d4>d3,h13>d13,h13>h5,h13>c13,s2>s12,h4>h1,s4>s5,s4>h4,s4>s2,s4>d4,s4>s7,d1>c1,h6>h2,h6>d6,h6>h10,c9>c4,c9>h9,c3>c9,h6>h11,c6>h6,d12>d1,d7>d12,h7>h3,h7>d7,h7>h13,c3>c6,c3>s3,s9>s4,s11>s9,c11>s11,h12>h7,d10>d5,c12>h12,c12>c3,d10>d8,c11>c12,c10>c11,c10>d10,

h6,c9,s4,h5,s2,d7,s9,d1,c5,h13,h1,c7,s5,c3,c12,s7,h3,h9,c6,s8,s3,c13,d10,h7,h4,d3,d13,h2,c2,s1,d8,d12,h8,s12,d2,s13,h12,s11,c4,s6,h10,d11,c1,d4,d6,c11,s10,c8,d5,h11,c10,d9  
**713/1000: solving: solved in 49925 tries.**  
h5>h6,s2>s4,s9>c9,s2>s9,d1>d7,c5>h5,h1>h13,h1>d1,c7>c5,c12>c3,h9>h3,c6>c12,s3>s8,h4>h7,d13>d3,d13>c13,d10>d13,h4>h9,h2>h4,c2>h2,d12>d8,s12>s1,d12>s12,d12>d10,h12>h8,h12>d12,d2>c2,s11>s13,d6>d4,c11>d11,c11>c4,c11>s11,c10>c8,d5>d6,c10>c1,c10>c11,s6>s3,s6>c6,s6>s2,s7>s6,s7>c7,h10>c10,d5>d2,h11>h12,h11>h1,h10>h11,s10>h10,s10>s7,s5>s10,d5>s5,d9>d5,

s4,c3,s2,h9,d5,h10,c11,d6,d11,h5,c6,h1,h12,d4,c13,h3,s12,d9,s11,c1,c8,d13,s10,d2,c12,d8,s9,c7,c10,h7,c4,h4,c9,s5,s7,h2,d3,h13,h8,c5,s13,c2,d12,h6,s6,h11,s3,s8,d7,d1,s1,d10  
**714/1000: solving: solved in 1523 tries.**  
d6>d5,d11>c11,h12>h1,c13>c6,s12>h12,c8>c1,d13>d9,c12>c8,d8>d2,c10>c7,c10>s10,c10>c12,d8>d13,c4>c10,h4>h7,c9>c4,s9>c9,s9>s11,h4>h3,h4>d4,h4>h5,s5>s9,s7>s5,d3>d8,h13>h2,h8>h13,s13>s7,s13>c13,s12>s13,d3>d11,c2>c5,h6>h8,d12>s12,s1>s8,s1>s6,d1>d7,d1>s1,d10>d1,d10>d12,d10>h10,d3>d10,h11>h4,h11>h9,h6>h11,d6>h6,d3>d6,c2>c3,s2>c2,s2>s4,s3>d3,s3>s2,

h12,s8,d2,h13,c2,d1,h6,d11,d9,s5,h7,d6,c7,d3,h9,s13,h11,s12,c12,s9,s6,c6,c4,c13,c11,h2,d12,c1,c8,h1,s11,s1,h4,s7,c3,c10,h8,d10,s2,d5,s10,d4,d7,c5,h5,s3,d8,s4,d13,h3,c9,h10  
**715/1000: solving: solved in 48136 tries.**  
h13>h12,c2>d2,d9>d11,h7>h6,c12>s12,s9>s13,s9>h9,s6>s9,s6>d6,s6>s5,c7>h7,c6>c12,c6>s6,c4>c6,c13>c4,c11>h11,d12>d3,c8>c1,s1>s11,s1>h1,h4>h2,s7>s1,c10>c3,h8>c8,h8>h4,c10>c11,d10>c10,d10>d12,s10>s7,c5>d5,d8>d7,h5>c5,h3>s3,d13>d8,h10>h3,h10>h5,h10>h8,h10>d10,s10>h10,s2>s10,s4>s2,d13>c13,d13>d1,d13>h13,c7>c2,s4>s8,c9>c7,d9>c9,d4>d9,d4>s4,d4>d13,

h12,s4,c7,s10,c6,s1,s11,h2,d7,h9,d2,s3,s13,c10,d3,d13,s2,s7,d12,d6,d10,h7,c4,c12,c5,d1,d11,c13,d8,d4,c3,s8,s9,h1,h11,c11,h6,c2,h8,h10,s6,h3,s12,c8,c1,d5,s5,h4,h5,h13,c9,d9  
**716/1000: solving: solved in 11677 tries.**  
s11>s1,d2>h2,d7>d2,s3>s11,s13>s3,d3>d7,d13>d3,d13>s13,c10>c6,c10>s10,c10>c7,s7>s2,d12>d13,d12>h12,s7>s4,d10>d6,c12>c4,c5>c12,d1>d10,d11>d1,c13>c5,d8>d11,d4>d8,c3>c13,s9>s8,h1>h7,h11>h1,c11>h11,c11>c10,c3>c11,h6>h9,h3>h8,h10>h3,s12>s6,c8>c2,s5>s12,c1>c8,h5>s5,h4>h10,h4>d4,h4>h6,c1>c3,s9>s7,h13>h4,h5>h13,d5>h5,d5>d12,c9>c1,c9>s9,d9>c9,d9>d5,

d11,c7,d12,d2,h13,d4,h2,h3,h1,c8,s12,h12,h4,d9,c1,c3,d7,h11,d8,c5,d5,s11,c10,d13,s10,h8,d6,c2,c12,s8,s1,s2,c11,c13,s5,s3,h7,d1,h10,s6,s9,d10,c6,c9,h6,h9,h5,d3,c4,s4,s13,s7  
**717/1000: solving: solved in 132595 tries.**  
d2>d12,h2>d2,h13>h2,d4>d11,h3>h13,h1>h3,h12>s12,h4>h12,c1>c8,c1>h1,c1>c7,d9>d4,h11>h4,d8>d7,d5>c5,d5>d8,s11>h11,d6>d13,c12>c2,s8>s10,h8>s8,c12>c10,s2>s1,c13>c11,s3>s5,s9>s6,d10>d1,h10>d10,s9>s3,h6>h10,c6>h6,c6>c13,c6>d6,c6>c12,h7>h8,s9>s2,c9>c6,h9>c9,h5>h9,h7>h5,s4>s9,d3>d5,s7>s13,s7>h7,s7>s11,s4>s7,c4>s4,c4>c1,c3>c4,d3>c3,d3>d9,

h7,d2,d8,h4,d7,h9,d5,h12,c3,s5,d11,s9,c4,s8,c5,c9,s10,c13,d10,s6,h6,s12,d13,s3,h8,d9,d4,h10,s11,h2,c2,s4,h5,c7,h11,s13,h3,c12,c1,s2,d3,h1,d12,d1,s7,h13,s1,d6,c6,c10,c8,c11  
**718/1000: solving: solved in 1451 tries.**  
d8>d2,d7>h7,d8>d7,h9>h4,s5>d5,c4>c3,s8>s9,c5>c4,c9>c5,c9>h9,s8>s5,s10>s8,h6>s6,d13>d10,d13>c13,d13>d11,s12>h12,s12>s10,d13>d8,d4>d9,c2>h2,c7>c2,h11>h5,h11>s11,h11>h10,s4>d4,s13>s4,c1>c12,d3>h3,d1>d12,d1>h1,d1>d3,c1>d1,c1>c7,s7>s2,h13>h11,h13>s13,h13>h6,h13>d13,s3>s12,c1>c9,h8>h13,s7>s3,s1>s7,c6>d6,c10>c6,c8>c10,c8>h8,c11>c8,c1>c11,s1>c1,

s4,c4,h2,s6,h13,d6,c8,d7,c9,c7,h10,s13,h3,c1,d13,c5,d5,h6,d12,d9,d3,d8,c10,s10,h9,s5,d11,s2,h8,c6,c3,h1,s8,d10,s12,h5,d2,h4,h11,c13,s9,c2,d4,c11,s11,h7,d1,s1,c12,s7,h12,s3  
**719/1000: solving: solved in 8251 tries.**  
c4>s4,c7>c9,c7>d7,c7>c8,h10>h13,c1>c7,d5>c5,d5>d13,d9>d12,d3>d9,d3>h3,d3>d6,d5>d3,s10>c10,s10>s13,s10>h10,s10>s6,d8>d5,h9>h6,c3>c6,s8>h8,s8>s2,d2>d10,h5>h1,h4>h5,h11>h4,h11>d11,s12>s8,c2>d2,c2>c3,c13>c2,c11>c13,s11>c11,s11>s12,s11>h11,s11>s5,s9>s11,s9>h9,d4>d8,s9>s10,d1>d4,c1>d1,h7>h2,c1>c4,s1>s9,c12>c1,s7>s1,h12>c12,h7>h12,s7>h7,s3>s7,

d11,d1,s3,c12,h7,d2,c1,s8,s12,c8,s1,h4,h5,h12,s5,h1,d10,c5,s6,s7,h3,h10,d9,d13,c9,c13,h13,c4,s11,c3,c11,s4,c2,h11,d5,h2,c7,d7,s10,c6,d4,d6,h6,h9,s2,s9,d8,s13,c10,d12,h8,d3  
**720/1000: solving: solved in 78915 tries.**  
d1>d11,c1>c12,s12>s8,h5>h4,h12>h5,h12>s12,s5>s1,h1>h12,h1>c1,h7>h1,d2>d1,s5>s3,s7>s6,h10>h3,h10>d10,d13>d9,c9>c5,c13>d13,h13>c13,h13>h10,c11>c3,c11>s11,c11>c4,h11>c11,h11>h13,s4>s7,c7>c2,d7>c7,d5>d7,d6>d4,d6>c6,d6>d5,h6>d6,h6>h11,h2>h6,h9>c9,h9>h7,s9>s4,s2>h2,s9>h9,s13>s2,s10>s9,s13>s5,s10>s13,c10>s10,c8>c10,d12>d2,d8>c8,d3>d12,d8>d3,h8>d8,

c6,d8,h4,d6,h10,d13,c3,c7,c2,c12,s6,d3,h12,c13,h1,h6,s5,h3,c11,d5,s13,s11,s9,c1,c4,d2,s2,s3,c10,s10,d7,h5,d4,s8,h11,d1,s12,s1,h7,s4,d11,s7,c5,d9,c9,d10,h9,d12,c8,h2,h8,h13  
**721/1000: solving: solved in 8852 tries.**  
d6>c6,d8>d6,h10>h4,c7>c3,c2>c7,c12>c2,d3>d13,c13>c12,h1>h12,h6>h1,h6>s6,h6>h10,h3>d3,h3>h6,s13>s5,s13>c13,s11>s13,c11>s11,d5>d8,c4>c1,s2>d2,s3>s2,s10>c10,s10>s3,h11>h5,s1>s12,s1>d1,s1>s8,h7>h11,h7>d7,d4>c4,s4>s1,s4>d4,s4>s9,s10>s4,s7>s10,h7>s7,c5>c11,d10>d11,h9>c9,d12>d10,h9>h7,d9>d12,c8>c5,h8>h2,h8>c8,h8>h3,d9>d5,h9>h8,h9>d9,h13>h9,

d9,c1,c4,h11,c8,c9,s5,c6,c10,d11,h12,h2,h1,s8,c12,d5,d6,s7,s4,s10,d3,d12,s3,d4,s9,h13,s1,h9,h4,d2,c5,h6,h10,h8,d7,h7,c7,s11,d10,s6,h5,c2,c3,c13,d13,d1,h3,s12,d8,s13,c11,s2  
**722/1000: solving: solved in 111386 tries.**  
c4>c1,c9>c8,c9>d9,c4>c9,c6>c4,c10>c6,h12>h11,h2>h12,h1>h2,d5>d11,d5>s5,d6>d5,s4>s7,s10>s4,d12>d3,h9>s9,h13>h9,s1>s3,h4>h13,h4>d4,d2>d12,h10>h6,h8>h10,h7>d7,h7>h4,c3>c2,d13>c13,d1>d13,d8>d1,h3>h5,c3>h3,d8>d10,d8>h8,c7>h7,c5>c7,d8>d2,c11>c3,c11>c5,s11>c11,s11>s10,s6>s11,s6>d6,s8>s6,c12>c10,s1>h1,s8>s1,s12>c12,s13>s12,s2>s13,s8>s2,d8>s8,

s4,c8,d6,c6,d9,h7,d2,s9,c2,h6,c9,h4,s3,s10,d12,h13,d7,c5,c7,d3,c4,d10,h11,s13,d4,s2,s11,h1,s6,s8,c1,h12,d5,d13,c10,d8,s1,c12,h8,h9,s7,c13,h5,h10,c11,h3,d11,d1,s12,s5,h2,c3  
**723/1000: solving: solved in 703842 tries.**  
c6>d6,c6>c8,s9>d9,c2>d2,c2>c6,h6>h7,c9>c2,s9>c9,s9>s4,h4>h6,s10>s3,h13>h4,d7>d12,c7>c5,c7>d7,d4>d10,d4>c4,d4>d3,s2>s13,s11>s2,s11>h11,s11>s10,s8>s6,h12>h1,c10>c1,d13>d5,d8>d13,h8>d8,c12>c10,h8>h12,s8>h8,c12>c7,c11>c13,h5>h9,d11>c11,d1>d11,h3>h10,s12>s7,s12>s8,s12>s11,c12>s12,d1>d4,s1>d1,s5>s1,s5>s9,h5>s5,h13>h5,c3>c12,h3>c3,h3>h13,h2>h3,

c12,d6,c7,d5,h1,s2,h4,s1,s9,c11,c10,c2,s8,s4,d12,d3,h7,c13,c6,s12,s5,d13,c3,h8,s10,d9,d10,s13,c9,c4,s11,h11,d8,d1,s6,d2,d11,c5,h2,c8,s3,d7,h9,c1,h12,h6,h10,h13,d4,s7,h3,h5  
**724/1000: solving: solved in 17229 tries.**  
s1>h1,s2>s1,c10>c11,c2>c10,c2>s2,s8>s9,s4>s8,s4>h4,d12>d5,d12>c12,d6>d12,c2>c7,d3>d6,c13>c2,c6>c13,s5>s12,d10>d9,d10>s10,d10>d13,c9>c3,c4>c9,s11>s13,h11>s11,h11>h8,d8>d10,d11>d2,d11>h11,d1>d11,c5>c4,s3>s6,c1>c8,h9>h2,h12>h9,h6>h12,h10>h6,h3>h13,h5>h3,h5>h10,h5>c5,h5>h7,s5>h5,s3>s5,s3>d3,d1>d8,c1>c6,d4>s4,d1>d4,d1>c1,d7>d1,s7>d7,s7>s3,

c7,h4,s7,s6,c9,h3,h11,d6,d3,s2,h10,s1,c12,s13,s10,h5,d7,s4,d12,c3,c2,d8,c13,h8,h13,h2,s11,c1,c8,c10,h1,c6,s5,d2,c11,d11,s8,d1,h7,s12,d10,d9,s9,h9,c5,h12,s3,d4,h6,d5,d13,c4  
**725/1000: solving: solved in 115540 tries.**  
s6>s7,c9>c7,h11>h3,d3>d6,s2>s6,s10>s13,s10>h10,s10>s2,s1>s10,h5>h11,d12>c12,d12>d3,d7>d12,s4>s1,s4>h4,c2>c3,h13>h8,h13>c13,h2>h13,c8>c1,c8>d8,c8>c2,h2>h5,c11>c6,c11>s11,c11>c8,c10>c11,h1>h2,d2>d7,d11>d2,s8>s5,s12>s8,d1>d11,d10>c10,d10>d1,d9>d10,s9>d9,h6>h12,h6>h7,h6>h1,h9>h6,s9>h9,d5>c5,d13>d5,s3>s9,s12>s3,d4>d13,c4>d4,c4>c9,s4>c4,s12>s4,

c7,s6,d4,s8,d13,h12,c2,h2,h1,d6,c11,s11,d12,d3,h4,c13,d10,h7,d9,s4,c12,h10,c8,h11,h6,c1,s2,s5,d2,d8,c5,d1,c4,h3,h13,s3,s13,s12,s9,h8,s1,s7,c6,d5,c9,h5,c3,d7,h9,c10,d11,s10  
**726/1000: solving: solved in 30907 tries.**  
h2>c2,h2>h12,h1>h2,s11>c11,d3>d12,d10>d3,h6>h11,s5>s2,d8>d2,c5>c1,s5>c5,d8>c8,d1>d8,h3>h6,h13>h3,s13>s3,s13>h13,s5>s13,s1>s12,s1>d1,s1>s4,s5>s1,h8>h10,c6>c4,c9>s9,c9>c12,h5>d5,h9>h5,c3>c6,h9>h8,h9>c9,h9>h7,d9>h9,c10>c3,c10>c13,s7>s5,d11>d9,d11>d10,d11>s11,h4>h1,s10>c10,d7>d11,d7>d13,s7>s10,s7>d7,s7>s8,s7>c7,s6>s7,d6>s6,d4>d6,h4>d4,

s13,s12,c6,h12,d6,c2,h4,c12,d11,h1,c13,h10,s2,d4,c4,h9,c1,s3,h6,c8,s11,d7,h7,s6,c5,c9,h2,h5,c10,d9,s7,c11,c7,d1,s5,s9,d13,s4,d12,h13,h3,d5,h8,d2,s8,d3,c3,d8,s10,s1,h11,d10  
**727/1000: solving: solved in 688 tries.**  
s12>s13,c2>c6,c12>h12,c12>c2,c12>s12,c4>d4,c4>c13,c4>h4,h10>h1,s3>s2,h7>d7,h7>h6,s6>s11,c9>c5,h5>h2,d9>c9,c7>c11,c7>s7,c7>c10,d1>d9,s9>s5,h13>d13,h13>h5,s4>s9,c3>d3,d8>d2,d8>h8,d8>d5,s8>d8,s1>s8,s1>s4,s1>d1,s1>s6,s1>c1,c7>h7,c8>c7,h13>h9,c3>c8,c3>s3,c3>c4,h3>h13,h3>c3,d12>d11,d12>c12,d6>d12,s10>s1,h11>h3,h10>h11,s10>h10,d10>s10,d10>d6,

d3,s13,s3,d10,c8,d8,h3,h11,c13,s8,d12,h5,d5,h12,d2,c2,c4,s11,d9,c5,d4,d11,s6,s9,d6,c12,h7,s5,h2,s4,c6,h6,s12,s2,d7,c11,d1,h1,s10,h4,c1,c7,c10,h10,d13,h13,h9,h8,c3,s7,s1,c9  
**728/1000: solving: solved in 1857 tries.**  
s3>s13,s3>d3,d8>c8,d8>d10,h11>h3,s8>d8,s8>s3,h5>h11,d5>d12,h12>h5,d2>d5,c2>d2,c2>c13,c4>c2,s11>s8,d4>c4,d9>d4,s9>s6,s9>d9,d6>d11,h6>c6,s2>s12,s2>h2,s2>s5,s4>s2,d7>h7,h1>d1,c1>h1,c1>c11,s10>s4,c10>c7,h10>c10,h10>h4,h10>s10,h6>h10,c1>c12,h6>d6,h6>h12,d13>d7,h13>d13,h9>h13,h9>s9,c3>c5,c1>c3,h8>h6,h9>h8,s7>s11,c9>h9,c1>c9,s1>c1,s1>s7,

s7,c6,s6,s2,c2,h2,h3,d11,d1,s9,h12,c12,h13,c11,h6,c9,h10,d12,h7,c3,c4,s13,c10,d13,s12,h1,d3,s4,h8,h11,c8,d9,d10,s8,s1,s3,h4,s10,c13,d8,c1,d5,c5,d7,d4,c7,s5,s11,d2,h9,d6,h5  
**729/1000: solving: solved in 41512 tries.**  
s6>c6,s6>s7,s2>s6,c2>s2,h2>c2,h3>h2,d1>d11,h12>h3,c12>h12,c4>c3,s12>s13,s12>d12,c10>c4,c10>h10,c10>c9,h7>h6,h8>h1,h11>h8,d9>d3,d10>d9,s8>c8,s8>s4,s1>s8,s3>s1,h4>h11,s10>s3,s10>d10,s10>s12,s10>c10,h4>h7,c13>d13,c7>c5,d7>c7,d7>d8,d4>d7,d4>h4,c13>c11,c13>h13,c1>c13,s11>s10,s11>s9,c1>c12,d1>c1,s5>s11,d5>d4,d2>d1,d5>s5,d6>d2,d5>d6,h5>h9,h5>d5,

s8,h5,d7,s1,c12,h11,c6,s5,c9,c10,h12,c2,s2,s4,s7,c7,d5,h2,d3,h4,s11,s10,h1,c5,d8,h10,h3,c8,h7,h6,s13,s9,d10,h8,h9,d1,c3,d9,d2,d11,d12,c13,d6,d13,d4,s6,s3,h13,c1,c11,c4,s12  
**730/1000: solving: solved in 85893 tries.**  
s1>s8,h11>h5,c6>c12,c10>c9,s2>c2,s2>s5,s4>s2,s7>s4,c7>s7,c7>c6,c7>d7,c10>c7,s10>s11,h10>h1,h10>s10,h10>h4,d8>d3,h6>h7,s9>s13,h8>h6,h8>c8,h8>h3,h8>d8,h8>h2,h10>h8,h10>c10,h10>h11,h12>h10,c5>d5,s9>s1,h9>h12,h9>s9,c3>c5,d1>d10,d9>d1,d2>d9,d11>d2,d6>d11,c13>c3,d13>c13,s6>d6,c11>c1,c4>c11,s12>s3,s12>s6,d12>s12,d4>d12,h13>h9,d13>h13,d4>d13,c4>d4,

s9,s11,c9,d2,d7,h3,d6,s8,h4,c4,d9,c2,h8,h1,c5,d8,s10,h12,s12,c8,s4,c10,d4,h10,c3,s13,h6,c11,s1,d10,d5,s6,s2,h9,s7,d11,c13,s5,h13,h11,h2,c7,d13,c1,s3,h7,h5,d12,d3,c6,c12,d1  
**731/1000: solving: solved in 138412 tries.**  
s11>s9,d7>d2,h4>h3,c4>h4,h8>s8,h1>h8,c5>c2,s12>h12,s12>s10,c8>c5,d8>c8,d8>d9,s4>s12,d4>d8,d4>c4,d4>d7,d6>d4,h10>c10,s13>s4,d5>d10,s2>s6,s5>s7,s5>d5,s5>s1,s2>s5,h9>h6,c13>c11,h13>c13,h13>h9,h13>s13,h13>h1,h2>s2,h2>h13,h10>h2,c7>c3,d11>d6,c1>c7,c1>c9,h5>h7,d3>s3,d3>d13,h5>h10,h11>h5,c12>c6,d1>d3,d1>c1,h11>s11,d11>d1,d11>h11,d12>d11,c12>d12,

c12,d3,s10,h6,c10,h8,s5,s6,s3,c9,s12,s1,d13,h9,s13,d12,h5,d6,c6,c8,h4,h10,d4,c4,d5,c13,c7,c3,d11,h2,d2,d9,c5,s8,h1,s2,s11,h3,h12,s9,d1,d8,d10,d7,s4,c11,h7,h11,c1,s7,h13,c2  
**732/1000: solving: solved in 191359 tries.**  
s6>s5,s6>h6,s6>s10,c10>c12,s3>d3,s6>s3,c9>c10,s1>s12,h9>h8,s13>d13,s13>s1,h5>h9,d6>d12,d6>s6,c6>d6,c6>c9,c8>c6,h10>h4,c4>d4,c7>c13,c3>c7,d2>h2,d2>d11,d9>d2,c5>d5,c5>c4,c5>h5,c5>c8,c3>c5,s8>s13,h12>h3,d10>d8,d7>d10,h7>d7,s4>s9,s4>s2,s11>s4,d1>h1,d1>d9,h13>h11,h13>h12,h13>h10,h7>h13,c1>d1,c1>c3,s7>h7,s7>s8,s11>s7,c11>s11,c11>c1,c2>c11,

c5,s9,s12,c8,d1,s10,c3,c12,c6,s5,s8,h13,c2,c4,d10,h7,h11,h8,d8,s1,d5,h3,d9,h5,d13,h2,d12,c7,s4,d3,h9,s13,h1,c13,h6,c10,h12,s7,s2,d2,c1,s6,h10,d4,h4,c11,d11,d7,c9,d6,s3,s11  
**733/1000: solving: solved in 7509 tries.**  
s12>s9,s10>s12,c12>c3,c6>c12,s8>s5,s8>c8,s8>s10,c6>c5,c4>c2,d10>d1,h11>h7,h8>h11,d8>h8,d8>d10,d8>s8,c4>c6,d5>d8,d3>d12,s2>s7,d2>s2,c1>c10,c1>h1,c13>c1,c13>s13,c13>c7,c13>d13,h9>h2,h9>d9,h9>h3,h5>h9,h5>d5,h13>h5,c13>c4,h13>c13,h12>h6,h10>h12,d2>d3,h4>h10,d6>d11,d6>s6,d7>d6,d7>d2,d4>d7,s4>d4,h4>h13,s4>s1,s4>h4,s3>s4,s11>s3,c11>s11,c9>c11,

d11,d4,s3,c10,c3,c11,s13,s4,s10,h2,c1,h6,c8,d3,d7,h9,d6,c13,d5,s8,c2,s9,s1,h1,c9,h7,d8,h13,c12,c6,c5,s6,s12,h11,d10,c4,s11,s7,h8,h3,h10,c7,d2,s2,d13,s5,d12,h5,h4,d9,d1,h12  
**734/1000: solving: solved in 4221 tries.**  
d4>d11,c3>c10,c3>s3,c11>c3,s4>s13,s10>s4,c1>c11,h6>h2,c8>c1,d7>d3,d6>h6,d6>d4,d7>d6,c13>c8,s8>s10,s9>h9,s9>s8,d5>d7,h1>s1,c9>s9,c9>c13,c2>c9,h7>h1,d8>d5,h13>h7,c6>c12,c5>c6,s12>s6,h11>h13,c4>c5,s7>s11,h3>h8,h10>d10,h10>h11,s7>s12,c7>c4,h3>h10,s7>c7,d2>c2,s2>s7,d13>d2,s5>s2,d12>d13,h5>s5,h5>h3,h4>h5,d9>d8,d1>d9,d12>d1,h12>h4,h12>d12,

c4,c12,h12,c3,s4,s6,c2,s7,s13,s8,s12,d8,d3,c9,h9,c1,c5,h10,d7,h6,d5,h3,h5,s10,h2,h8,c8,c11,d9,h7,c7,d4,s1,c6,h11,d12,s2,c10,h4,d11,s9,d13,h1,d6,c13,s3,s11,h13,d10,s5,d2,d1  
**735/1000: solving: solved in 12738 tries.**  
c12>c4,h12>c12,s6>s4,s13>s7,s8>s13,s12>s8,d3>d8,c9>c2,h9>c9,h9>h12,s12>s6,c1>c3,c5>c1,h5>h3,h5>d5,h5>h6,s10>h10,h2>h5,h8>h2,c8>h8,c11>c8,h7>d7,c7>h7,c11>c7,d9>d3,d9>h9,s10>s12,s1>s10,h11>c11,c10>c6,d11>d12,d11>h11,d11>d9,c10>c5,d4>d11,s9>s1,s2>s9,h13>c13,h13>d13,h13>h4,h1>h13,d10>d6,d10>c10,s11>s3,s5>s11,d1>h1,d1>d4,d10>d1,d2>d10,s2>d2,s5>s2,

h4,s12,h9,s9,d6,s2,c9,d2,h1,h11,d12,h5,c8,h6,d1,d9,h12,h2,h7,d3,h8,c2,h3,c3,c5,s6,s11,s5,d5,d13,h13,s3,c11,d10,h10,s13,s1,d8,d7,d11,c12,c7,s7,c4,c10,c13,c6,s10,c1,s4,s8,d4  
**736/1000: solving: solved in 974 tries.**  
s9>h9,s9>s12,c9>s9,d2>s2,d2>d6,h1>h4,h11>h1,d12>d2,h5>h11,d1>d12,d9>d1,d9>c9,h6>h5,h12>h6,h2>h12,h7>h2,c2>c8,h3>h8,h3>d3,h3>h7,c3>c2,c5>c3,s11>s6,s5>s11,s5>c5,d5>s5,d5>d9,d13>d5,h13>d13,h13>h3,h10>d10,h10>h13,s1>s13,d7>d8,d11>d7,c12>c11,c7>c12,s7>c7,s7>s3,s1>s7,c1>c13,c6>c4,c10>c6,c10>h10,c1>c10,s1>c1,s4>s10,d4>d11,s4>d4,s4>s1,s8>s4,

s9,c6,s8,s3,d6,s7,d8,d5,h11,c12,d10,h5,c11,h13,d4,c5,c3,s2,d1,h10,s5,s6,h7,h2,d9,c10,d7,c13,h4,h1,h9,c9,d2,s13,s12,s10,c8,h8,s1,d3,c7,c4,c2,h3,s4,h6,d12,c1,d11,h12,s11,d13  
**737/1000: solving: solved in 6953 tries.**  
s3>s8,d5>d8,d10>d5,c11>h11,c12>c11,h13>h5,d4>d10,c3>c5,s5>s2,s6>s5,h7>h10,h2>h7,h1>h4,h9>h1,c9>h9,c9>c13,c9>d9,c10>c9,d7>d1,d2>d7,h2>d2,h2>h13,s12>s13,s10>s12,s10>c10,s10>s6,h8>c8,h8>h2,s1>s10,c7>c3,h3>d3,h3>h8,s4>s1,c4>s4,c4>c7,c4>d4,h12>d12,c1>c2,c1>c4,c12>c1,h12>c12,h3>h12,h3>s3,h6>h3,h6>c6,s7>s9,d6>h6,s11>s7,d11>d6,d11>s11,d13>d11,

d4,c12,d10,d1,c5,d5,d13,h3,c9,d9,h5,c13,s7,c6,s4,h7,h2,c4,c3,d6,c7,s5,c10,h13,s3,h10,s9,s8,d8,h11,c1,d2,s6,s2,h4,h6,c11,d3,h12,c8,s13,h8,s11,s1,d12,c2,s12,s10,d7,h1,h9,d11  
**738/1000: solving: solved in 152844 tries.**  
d1>d10,d5>c5,d5>d1,d13>d5,c9>c12,d9>c9,d9>d4,d13>d9,h5>h3,h7>s7,h2>h7,c4>s4,c4>c6,c3>c4,s3>s5,s3>c3,c10>c7,h10>h13,h10>c10,h10>h2,s8>s9,d8>s8,d8>d6,h11>h10,s2>s6,s2>d2,s2>s3,h6>h4,h8>h12,h8>h6,c8>h8,c8>c1,c8>d8,s11>s13,d12>d3,s1>s11,s12>d12,s12>s2,c2>c8,c2>c13,s10>s12,c11>c2,h11>c11,h11>h5,s1>s10,d7>d13,h1>s1,h9>h1,d11>d7,h11>d11,h9>h11,

s2,h10,s4,h1,h2,s10,c4,h8,s13,c12,d8,s3,h9,c2,s1,s9,d5,d12,h7,d11,c6,c9,c10,d3,s11,s7,d13,h3,c1,c8,c3,h13,c11,h4,h5,h12,d1,s12,h11,s5,d7,d2,h6,c7,s6,d6,s8,c13,d4,d10,d9,c5  
**739/1000: solving: solved in 228967 tries.**  
h2>h1,h2>s2,h10>h2,s10>s4,s10>h10,s13>s10,s1>s3,s9>s1,h9>s9,h9>h8,d12>d5,d12>c12,d8>d12,c2>c4,c9>c6,c10>c9,s11>d11,s7>s11,s7>h7,d3>d8,d13>d3,d13>s13,c10>c2,c8>c1,c3>c8,c3>h3,c3>c10,h5>h4,h12>h13,h11>h5,h11>c11,s12>h12,d2>d1,s5>s12,h6>h11,h6>h9,d6>s6,d6>d2,d6>h6,d7>d6,s8>s7,s5>s8,c7>c3,d10>d4,d9>d10,c5>s5,c13>c5,c13>d13,c7>c13,d7>c7,d9>d7,

c9,c3,h10,d8,c13,h12,h11,c4,s11,h3,h9,d12,d5,c7,c12,d10,c8,c6,h5,h8,d13,c2,h1,d9,s5,s13,h6,s10,c5,d3,s9,d1,h4,d11,s12,h7,h2,s4,d6,s1,d4,d2,s6,s8,d7,s7,s2,c1,c10,c11,h13,s3  
**740/1000: solving: solved in 563007 tries.**  
c3>c9,c13>c3,h11>h12,h3>h11,h9>h3,d5>d12,c7>c4,c12>c7,d10>d5,c8>c12,c6>c8,h8>h5,h1>h8,s13>s5,s13>d13,s13>s11,d9>d10,d9>h9,d9>d8,c6>c13,h1>h10,s10>s13,h7>h4,h2>h7,s4>s12,d4>s4,d4>d11,d6>d4,s6>d6,s8>s6,s7>d7,s7>s8,s2>s7,d2>h2,d2>d3,c1>d1,s2>d2,s2>c2,s2>s10,s9>s2,s9>d9,h6>c6,c10>c5,c11>c10,c1>c11,s1>c1,s1>s9,h13>h6,h1>h13,s1>h1,s3>s1,

s11,h10,h8,d6,s4,s8,d3,h5,c6,c5,c4,h1,d4,c1,d10,c7,d12,s13,s10,s2,h9,s12,h6,s3,s6,d5,s1,s9,h13,c10,c13,s5,c11,h3,d7,c2,h12,d13,d11,h4,h11,s7,d9,c8,c3,d1,d2,h7,h2,c12,c9,d8  
**741/1000: solving: solved in 29308 tries.**  
h8>h10,s4>s11,s8>s4,h8>s8,d3>d6,c5>c6,c5>h5,c4>c5,h1>h8,d4>c4,d4>d3,s10>s13,s10>d10,s2>s10,s6>s3,s6>h6,s6>s12,d5>d12,s1>s6,s9>s1,s9>h9,s9>s2,c10>c7,c13>h13,c2>c11,d11>d13,h11>h4,h11>d11,s7>d7,s7>s5,h12>h3,c3>c8,d2>d9,d2>c2,h7>h11,h7>s7,c12>c3,c12>h12,c12>c13,h2>h7,d2>h2,c9>c12,c9>s9,c10>c9,d8>d5,d8>d4,d2>d8,d1>d2,d1>h1,c1>d1,c10>c1,

s6,h2,h10,d1,c4,d11,s4,d8,c12,c2,c9,h11,s5,s1,h12,d12,h13,d13,s2,c10,h5,h1,c5,d9,d2,c8,h4,s10,c7,s12,h3,h6,d7,c1,d3,c11,d10,s7,h7,h8,s3,s11,d4,d5,s13,s9,c3,d6,h9,c6,s8,c13  
**742/1000: solving: solved in 40493 tries.**  
h10>h2,c2>c12,c9>c2,s1>s5,d12>h12,h13>h11,d13>d12,h1>h5,d2>d9,c7>c8,s12>s10,h6>h3,s3>s7,s3>d3,h8>h7,s11>c11,s11>s3,d10>d7,c6>c3,d6>c6,d6>d5,s8>s13,s8>h8,s8>s11,s9>s8,d4>d10,d4>h4,s9>s12,h9>h6,h9>s9,c1>c7,c1>h1,c1>c10,d2>s2,d4>d2,c1>s1,c13>c5,c13>c1,d13>c13,d13>d8,h9>c9,h13>h9,d4>s4,d4>d11,d4>c4,d4>d1,h13>h10,d13>d4,d13>h13,d6>d13,d6>s6,

s1,s12,d11,c8,s13,s11,c4,c1,c10,d7,d13,h5,s5,d1,c3,c6,h2,h11,c2,c11,h3,s4,s7,d5,c7,c5,d4,s10,s9,h12,d9,d3,s3,h7,h8,h13,d6,h1,d2,d8,c12,c9,c13,d10,s2,h6,s8,h9,h10,s6,d12,h4  
**743/1000: solving: solved in 10044 tries.**  
s12>s1,s13>s12,s11>s13,d11>s11,c4>c8,c1>c4,c10>c1,d13>d7,s5>h5,c6>c3,h11>h2,c11>c2,c11>h11,c11>c6,s7>s4,c5>c7,c5>d5,c5>c11,s9>s10,d9>d4,s9>d9,s9>s7,d3>h3,s3>d3,s3>s5,s9>s3,h7>h12,h8>h7,h13>h8,d6>d1,h1>h13,d2>d6,d8>d2,c9>c12,c13>c5,c13>d13,d10>d8,d10>c10,s2>s9,c9>c13,s8>s2,h6>h1,h9>c9,s6>s8,h6>s6,h6>h9,h10>h6,d12>d11,d10>d12,h10>d10,h4>h10,

s9,c3,d9,c7,c1,h2,d10,s3,c11,h13,d1,s13,s10,h7,h9,h6,h8,d12,s1,d3,c13,c12,c5,h1,d13,d8,s2,s5,s8,d5,d4,s12,d2,s6,d6,h10,s7,h5,h11,h12,c8,h4,c2,c10,h3,d7,s4,c9,d11,c4,s11,c6  
**744/1000: solving: solved in 7567 tries.**  
c1>c7,d10>d9,c11>c1,s13>s3,h13>s13,h13>h2,d1>d10,h9>h7,h6>h9,h8>h6,s1>s10,s1>d1,h8>h13,d3>d12,c13>c11,c12>c13,c5>c12,d8>d13,d8>h8,d3>d8,d3>c3,s2>s1,s5>s2,c5>s5,d5>c5,d5>d3,s8>s9,d6>s6,d6>d2,s7>s12,h5>h10,h11>h5,h4>h11,h4>d4,h4>h1,d6>d5,s7>s8,c2>c8,h3>h12,d11>d7,c9>c10,s11>d11,c4>c9,s4>s11,c6>c2,c6>d6,c4>c6,h4>c4,s4>s7,h4>s4,h3>h4,

c8,d11,d4,h1,c12,h12,h2,c4,h13,s4,h6,h8,d3,d7,c7,s2,d9,c5,d2,s1,s3,s9,s10,h10,d12,s6,s12,d10,c10,c2,h9,h11,s5,d13,d6,s7,h5,h4,c6,s13,c11,d8,s8,c9,c1,d5,h3,d1,h7,c13,s11,c3  
**745/1000: solving: solved in 20450 tries.**  
d4>d11,c12>c8,h12>h1,h2>h12,c4>c12,d4>c4,h13>h2,h8>h6,d7>d3,c7>d7,s2>s4,s3>s1,s9>s3,s9>d9,s9>s2,c5>c7,h10>s10,h10>h8,d12>d2,s12>s6,s12>d12,s12>s9,c10>d10,c10>c5,c10>h10,c2>c10,h9>h13,h11>h9,d6>d13,h5>s5,h5>h11,c6>d6,s7>s12,c6>c2,s8>s13,c11>c6,d8>s8,d5>d8,c1>c9,d1>d5,h3>h4,h7>h3,h7>h5,s7>h7,d1>d4,c1>d1,s11>s7,c11>s11,c11>c1,c13>c11,c3>c13,

d9,d13,c10,c9,c4,s10,h3,h8,d3,h10,s2,h11,c7,s4,h13,h1,s12,c11,s9,s8,h7,s6,h6,h9,d6,c6,d12,c12,c13,d2,h5,d11,c5,h4,d5,h12,c3,d1,s1,s13,s7,c2,s5,d7,c8,d4,h2,d8,d10,s3,c1,s11  
**746/1000: solving: solved in 88562 tries.**  
d13>d9,c9>c10,c4>c9,h8>h3,h10>s10,h8>h10,d3>d13,s4>s2,h1>h13,c11>c7,c11>h11,c11>c4,s9>s12,s8>s9,s8>h8,s4>s8,h7>h1,h6>s6,h6>h7,h9>h6,c6>d6,c6>c11,c12>d12,c12>c6,c13>c12,h4>h5,h4>s4,h9>h4,d2>d3,d11>d2,h12>h9,d5>c5,c3>c13,s7>s13,d7>s7,d8>c8,d10>d8,d10>d7,d4>d10,d4>d5,d4>d11,d1>d4,s1>d1,h2>h12,c2>h2,s11>s5,s11>s1,s3>s11,c3>s3,c2>c3,c1>c2,

s9,h6,c6,d12,d6,s3,c11,h8,s11,c12,s7,s4,h10,d10,c7,h9,c4,h7,s2,s10,c3,d3,s5,c5,s12,h11,c9,h13,c13,h5,s13,h4,s6,d8,d13,d1,s8,d11,s1,h3,d4,d5,c10,h12,h2,d9,d2,c8,c1,h1,d7,c2  
**747/1000: solving: solved in 1313 tries.**  
c6>h6,d6>d12,d6>c6,s11>s3,c11>s11,s4>s7,h10>h8,d10>h10,c4>s4,c4>c12,c7>c4,h7>h9,h7>c7,s10>s2,d3>c3,d3>d10,s5>s10,c5>s5,c5>c11,c13>h13,c13>c9,d13>d8,d13>s13,d1>d13,s8>s6,d11>d1,d11>h11,d11>d3,h5>h7,h4>h5,s1>s8,d5>d4,h12>h3,h12>s12,h12>h4,c13>c5,d5>d11,h2>h12,c8>c10,c1>c8,c1>s1,d9>d5,d9>s9,d6>d9,h1>h2,c1>h1,c1>c13,c2>c1,d2>c2,d2>d6,d7>d2,

h11,s8,c6,s3,c10,d9,s1,s2,h8,d12,s10,h12,h13,s5,c5,d3,h3,c7,c3,d11,c8,h10,h5,s12,h1,s11,c13,c12,h7,d6,d7,c2,d5,h2,s7,c1,d1,c4,s13,d13,d8,s4,s6,d2,c9,h4,h6,h9,c11,d4,d10,s9  
**748/1000: solving: solved in 38028 tries.**  
s1>s3,s2>s1,h12>h8,d12>h12,d12>d9,s10>s2,c10>s10,c10>c6,c5>s5,c5>c10,h3>d3,h3>h13,c7>c5,c3>h3,h5>h10,c12>c13,c12>s12,d7>d6,d7>h7,d1>c1,d1>d5,d13>s13,d8>d13,s4>s7,c4>s4,c4>c2,d2>h2,h9>h6,d4>h4,s9>h9,s9>s6,c9>s9,d4>d2,d4>d7,c4>d4,c9>c4,c11>c9,c11>c12,c11>d11,c11>c3,c8>c7,s11>c11,h1>h5,d1>h1,d8>d12,d8>c8,s11>h11,s8>s11,d8>s8,d1>d8,d10>d1,

d4,h9,c12,c8,h7,c5,s8,h1,d9,h10,c9,s7,c4,s10,d12,s5,d7,h5,s6,h12,d2,s4,s2,c3,s13,d6,d10,h13,d3,d13,s12,h6,s3,c2,s9,d8,h11,c10,c13,c1,d1,s11,d11,h4,h2,d5,h8,c7,c11,c6,h3,s1  
**749/1000: solving: solved in 1089 tries.**  
c8>c12,s8>c8,s6>s5,h12>h5,h12>d12,d2>d7,s2>s4,s2>d2,s2>s6,d10>d6,d13>d3,d13>h13,d13>d10,d13>s13,s12>s2,s12>h12,s12>s10,s3>c3,s3>s12,c13>c10,c1>c13,d1>c1,d11>s11,d11>d1,d11>h11,d11>d8,h8>h4,h2>h8,c11>c7,c11>d11,c6>c11,c6>h6,c6>c4,s9>s3,c2>c6,h2>c2,s9>c9,h3>h2,h3>h10,d5>d13,s1>s9,s1>h1,s7>s1,s7>s8,h7>s7,d5>c5,d5>d4,d9>d5,h9>d9,h7>h9,h3>h7,

c6,c1,d3,d5,c12,c8,d2,s9,c13,h6,d10,c9,s2,h1,s11,d7,c7,h3,h2,h12,h11,d9,d6,s5,h9,d13,s13,s7,c5,h8,c3,s12,c11,s8,d4,s1,s3,h13,c2,h10,d1,d12,c10,h4,h7,s6,h5,s10,c4,s4,d11,d8  
**750/1000: solving: solved in 140583 tries.**  
c1>c6,d5>d3,c8>c12,c13>c8,d10>d2,s2>s9,c7>d7,c7>c9,h2>h3,h12>h2,h11>h12,h11>s11,h11>h1,d6>d9,d6>h6,s13>d13,s7>s13,c5>s5,s12>s7,c11>c3,s8>s12,h8>s8,h8>h9,c11>h11,c11>c7,c5>c11,d4>d6,h13>h8,s3>s1,h10>h13,c10>c2,c10>c5,c10>d10,c10>c13,d1>d4,h7>h4,s4>c4,s4>s6,s4>s3,h5>h7,s10>s4,s10>s2,s10>c10,d1>c1,h10>s10,d12>d1,h5>h10,d11>d12,d8>d11,d5>d8,h5>d5,

c4,s9,c1,s6,c2,d12,h3,d1,c7,s1,d5,h11,c13,h13,h7,d10,h9,s5,s12,c9,c10,d8,h1,s3,h12,c8,d13,s11,c6,h6,h5,h2,c11,d2,c5,d11,h8,s2,d7,h10,s8,d4,h4,s4,d3,d6,c3,s13,s7,d9,c12,s10  
**751/1000: solving: solved in 1987156 tries.**  
d5>d1,c13>c7,h13>h11,h7>h13,s12>s5,c10>c9,c10>d10,c10>c13,h9>h7,h1>h9,h1>s1,h1>h3,d8>d5,s3>s12,c8>c10,c8>d8,c8>c2,h12>d12,h1>h12,h1>c1,h6>c6,h5>h6,h2>h5,d11>c11,d11>d13,s11>d11,s11>s6,d2>h2,s2>d2,s2>s11,s8>h8,s8>c8,s8>s2,s4>h4,d6>d4,s13>s4,s7>s13,s7>d7,s7>s8,s3>s7,h10>h1,d9>d6,d3>d9,c12>c5,c3>d3,c3>c12,s10>h10,s10>s9,s3>s10,c3>s3,c3>c4,

d6,c2,h10,c1,c11,h3,d9,d5,s5,h1,s9,h11,s1,s7,c8,c5,h8,s3,h2,h12,d8,s11,s6,d7,s8,d2,d11,c3,d4,c9,d10,d13,c13,s10,h13,c7,h5,c10,c12,h6,c4,h7,h9,d1,d3,s4,s2,c6,s13,d12,s12,h4  
**752/1000: solving: solved in 9631 tries.**  
c11>c1,d5>d9,s5>d5,s1>h1,s1>s5,s9>s1,h11>c11,h11>h10,h3>h11,s7>s9,c8>c2,c5>c8,s3>h3,s7>s3,h2>h8,h12>h2,s11>s7,s6>s11,d7>d8,s8>s6,d2>d7,d11>d2,d13>d10,c13>d13,c13>c9,c7>c13,h5>h13,c10>c7,c12>c10,h7>h5,h9>h7,h6>h9,c4>c12,c4>d4,d3>d1,s4>s10,c6>h6,c6>c3,c4>c6,d12>d3,d12>d11,d12>h12,c4>c5,d12>d6,s4>s8,s13>s2,s12>s13,s12>d12,s4>c4,s4>s12,h4>s4,

d7,s2,h8,d5,s13,s12,d11,s10,s3,s7,c6,c3,c8,s11,c12,h3,h11,c5,c10,s4,h10,h2,c9,h1,c2,d1,c13,h12,d3,s5,h7,s9,s8,d12,d4,c1,h4,d10,c11,d13,d6,h5,s6,d9,h6,c4,h13,h9,d8,s1,d2,c7  
**753/1000: solving: solved in 255500 tries.**  
d5>d7,s12>s13,s3>s10,s7>s3,c3>c6,c8>c3,s11>d11,s11>s12,s7>s11,c12>c8,h3>h8,h11>h3,c5>c12,c10>c5,h2>h10,c9>c10,h1>h2,c2>c9,c2>s2,s4>s7,d1>h1,d3>d1,s8>s9,d4>d12,h9>h6,h9>h5,d8>d9,d8>d6,d8>d10,d8>d4,d8>s8,h4>h7,d13>d8,h13>h9,h13>d13,h13>h12,h13>c13,h13>h11,h4>s4,h4>h13,d3>d5,s6>s5,c4>c11,s1>s6,c1>s1,c4>c1,c4>h4,d2>d3,c2>d2,c4>c2,c7>c4,

d2,d1,d4,c12,c5,s12,h7,c11,s6,h12,d9,d11,h11,h6,s3,s4,d13,c7,s8,d10,d12,c10,h10,s7,h3,s10,h1,d7,d8,s13,d5,c4,h13,d6,s11,c3,s1,c9,c1,s9,h9,h8,c8,h4,h2,c2,h5,c13,s2,s5,d3,c6  
**754/1000: solving: solved in 22729 tries.**  
d1>d2,d4>d1,c5>c12,c11>c5,h12>s12,h7>h12,d11>d9,d11>c11,d11>d4,h11>d11,h7>h11,h6>s6,h6>h7,s4>s3,s8>s4,d12>d10,h10>c10,s7>c7,h3>h10,s10>s7,h1>h3,d8>d7,h13>s13,c3>c4,s1>s11,c9>c3,c1>s1,s9>c9,h9>s9,h8>h9,h8>d8,h8>h1,h13>h8,d6>d12,c8>c1,h5>h4,h5>h13,d5>h5,d5>d6,s2>h2,s5>s2,s5>s10,d5>s5,c8>s8,c6>c2,c6>c8,c6>h6,c13>c6,d13>c13,d5>d13,d3>d5,

d4,d13,s8,h8,s6,c3,d8,d6,s7,c7,c2,c8,d2,c1,s4,d9,d7,c13,h4,c5,s12,c6,c11,h7,d1,h9,h13,s5,s13,s11,h1,s9,h2,s1,h11,d12,c9,c10,s10,d3,h10,h12,c4,s2,d11,h5,c12,h6,d10,s3,h3,d5  
**755/1000: solving: solved in 31744 tries.**  
d13>d4,h8>s8,d8>h8,d8>d13,d6>d8,s6>d6,c7>s7,c7>c3,c2>c7,c8>c2,d9>d2,d7>d9,c11>c6,h13>h9,s13>s5,s13>h13,s11>s13,s11>c11,s11>s12,h7>h4,h1>d1,h1>h7,h1>c1,c5>c13,s9>s11,c10>c9,s10>c10,s10>s1,h10>h11,h10>s10,h12>h10,d11>d3,c12>c4,c12>h12,d12>c12,d11>d12,s2>s9,h2>s2,h6>h2,h6>h1,h6>s6,d11>d7,c5>c8,d10>d11,h5>c5,s3>s4,h3>s3,h3>h6,h5>h3,d5>d10,d5>h5,

d11,s6,c7,h13,d2,c11,c8,h6,d8,s10,s3,h9,h2,c9,d10,c6,s1,h8,c4,h7,d3,c10,d4,s13,s4,c1,h5,s7,d1,d12,s9,c2,c3,s12,c5,h12,h4,h3,s2,d13,s11,s8,d5,s5,h10,d9,h1,d7,c13,d6,c12,h11  
**756/1000: solving: solved in 75297 tries.**  
c11>c7,c8>c11,s3>s10,h9>h6,h2>h9,h2>d2,h2>h13,d10>d8,c6>c9,c4>c6,h7>h8,s4>s13,s4>d4,s7>s4,s7>h7,s7>s1,d3>s3,d3>d10,c4>c8,c1>c10,d12>d1,c3>c2,s12>d12,s12>s7,s9>s12,c5>c3,c5>h5,h3>h4,d5>d13,s8>s2,s5>s8,d5>s5,d9>d5,h10>h3,h1>h10,h1>c1,h1>h2,d9>s9,d9>d3,h12>h1,c13>c5,d7>d9,c12>c13,c12>c4,h12>c12,d7>d11,h11>h12,s11>h11,d6>d7,s6>d6,s11>s6,

d12,d2,d11,s3,s11,c10,h11,d4,s1,c6,h12,h5,s9,c4,d5,s2,s10,s5,c12,h7,h8,h4,s12,h13,s13,d9,c2,d13,c9,h3,d10,s4,h9,d6,c11,d1,c3,h1,h6,c8,c13,c7,h10,d8,s6,c5,s8,c1,h2,d3,d7,s7  
**757/1000: solving: solved in 1868 tries.**  
d2>d12,d11>d2,s11>s3,s11>d11,h5>h12,s9>s1,s10>s2,s5>s10,s5>d5,h8>h7,h4>h8,h4>c4,h4>h5,h4>d4,h4>h11,s9>s11,s12>c12,s12>s5,h13>h4,s13>s12,c2>c6,d13>d9,d13>s13,d10>d13,d10>c10,c9>c2,c9>s9,h3>h13,h6>h1,c13>c8,c7>c13,s8>d8,s6>s8,c5>c7,c1>c5,c1>d1,c1>c11,c3>c1,h2>h6,h2>h9,h10>h2,h10>d10,h3>h10,c3>h3,c3>c9,s6>d6,d3>c3,d7>d3,s6>s4,s7>s6,s7>d7,

c6,s1,c1,d3,h9,h11,h1,d13,d8,c4,c9,c12,h4,h7,d6,c2,c5,c11,h5,s4,c8,c7,s9,d5,s7,s3,h12,s8,h6,s13,c13,c3,h8,s2,s11,d10,s10,s5,d9,h13,d2,d1,h2,h3,d12,c10,s6,h10,s12,d7,d4,d11  
**758/1000: solving: solved in 63881 tries.**  
c1>s1,c1>c6,h11>h9,h1>h11,d8>d13,c9>c4,c12>c9,h4>h1,h7>h4,c5>c2,c11>c5,c8>c11,c8>d8,c8>c1,c12>c8,s7>c7,s7>s4,s7>h7,s9>s7,d5>h5,d5>d6,s3>d3,s9>s3,h12>c12,c13>s13,c3>c13,h8>s8,h8>h12,h6>h8,s2>s9,s11>s2,s10>d10,s5>d5,s5>s11,d1>d2,d12>d1,h3>h13,h3>c3,d12>d9,h10>h2,h10>h3,c10>h10,s10>c10,s10>s5,s12>s10,s6>h6,s12>s6,d12>s12,d7>d12,d4>d7,d11>d4,

d5,h12,d4,d11,s4,d3,d12,h10,h2,s10,c13,c5,c7,h7,h11,h4,c1,c9,s9,s1,c3,s5,h13,d8,s3,h8,s12,c11,s13,c6,d2,c2,c8,d7,h5,d6,c12,d1,d13,s2,h6,h1,s8,c10,d9,s11,d10,h3,h9,s6,c4,s7  
**759/1000: solving: solved in 115778 tries.**  
d11>d4,d12>d3,d12>h12,d12>d5,d11>d12,h2>h10,c5>c13,c7>c5,h7>c7,h11>h7,h4>h11,h4>s4,h2>h4,c9>c1,s9>c9,s9>s10,s1>s9,s3>s5,s3>c3,s3>s1,h8>d8,h8>h13,c2>d2,c2>c6,h1>h6,h1>d1,d10>c10,d10>d13,s11>s2,d9>d10,s8>s11,h3>h1,h9>h3,h9>h5,d9>h9,d9>d7,d6>d9,s6>d6,s6>s13,c12>c8,s8>s6,s8>h8,s8>s3,s12>s8,c2>h2,c12>c2,c11>d11,c4>c11,c12>c4,s12>c12,s7>s12,

d13,c6,c9,s4,h4,h12,h7,d9,c8,d11,h2,h13,d6,d3,h6,h11,c10,c7,s13,h5,h1,d8,s10,d4,c2,d7,s12,s3,c11,d2,c4,d12,h3,s6,s5,c3,h9,s7,h8,s9,s2,s8,h10,c1,d10,d1,c13,d5,s1,c5,s11,c12  
**760/1000: solving: solved in 3141 tries.**  
c9>c6,h4>s4,h12>h4,h7>h12,d9>d13,c9>d9,h2>h7,h13>h2,d6>d11,d3>d6,h6>h13,h11>h6,c7>c10,h1>h5,s10>s13,d4>d8,s3>s12,c11>c2,s5>s6,h9>h3,s2>s9,s8>s2,s8>h8,s8>s7,c1>c3,d10>h10,d5>d10,d5>s5,s1>s8,d1>s1,c5>c13,c5>d5,c5>c4,c1>c5,d1>c1,d1>d7,d1>h1,d1>d3,d2>d4,d12>d2,s3>s10,d12>d1,s11>s3,c11>s11,c11>c7,c12>d12,c12>c8,c11>c12,h9>c9,h11>h9,c11>h11,

h1,d3,h2,c4,d8,s6,s8,c9,d4,d12,c13,h9,d2,s11,s9,d11,h7,d1,h12,s5,c8,d7,d9,c2,d13,c7,h11,c11,h5,h3,s2,s4,d10,h6,c12,c1,h10,c5,s12,s1,c10,s13,h13,s10,c3,s7,d6,d5,h8,s3,h4,c6  
**761/1000: solving: solved in 94417 tries.**  
d8>d3,s8>s6,s8>d8,c9>c4,d12>d4,h9>c9,h9>h2,s9>s11,d9>d7,c11>h11,c11>c7,h3>h5,s4>s2,h6>h3,c1>c12,s1>s12,s1>c1,c10>c5,s13>s1,h13>s13,h13>h6,h10>h13,s10>s4,c10>h10,c10>c2,c3>c11,d5>d10,d5>d13,s10>c10,d6>d5,s7>s10,s7>s5,s7>h7,d9>d1,d9>s9,d9>d2,d9>h9,d11>d9,c8>c13,h12>d12,c8>s8,d6>d11,s3>s7,c3>s3,h4>h12,h4>h1,c6>d6,c3>c6,h8>h4,c8>h8,c3>c8,

c1,s10,s2,h9,d11,c12,c8,h13,h1,h12,d3,s9,h5,c9,h6,d7,d5,c13,h8,d8,h4,d4,d2,h11,c4,d13,s13,s4,c11,h3,s1,c5,s3,c7,h7,d10,d1,d12,c10,c2,s5,s11,h2,s6,d9,d6,s8,h10,s7,c3,c6,s12  
**762/1000: solving: solved in 4445 tries.**  
s2>s10,c8>c12,h13>h9,h1>h13,h12>h1,d5>d7,d5>h5,d8>h8,h4>h6,d4>d8,d2>d4,h11>h4,d13>c13,d13>d5,d2>d13,s4>s13,s4>c4,c11>c9,h11>c11,s4>s9,h3>h11,h3>d3,h3>h12,d2>d11,s1>s4,h7>c7,d1>d10,d12>d1,c2>c10,s11>s5,d6>d9,d6>s6,h10>h2,s8>s11,c6>d6,s7>s8,s7>h7,s7>s1,c2>c5,c3>c6,s12>d12,s12>s7,c2>d2,c2>c1,s12>s2,s3>s12,c8>c2,h3>s3,c3>c8,h3>c3,h10>h3,

c12,h12,s9,s12,c8,d4,s11,c6,d10,s4,d5,c1,d1,d12,h1,d6,h13,s8,c4,c10,d13,s3,h2,s1,h8,s2,c2,s5,h7,c9,c13,d2,s6,s7,h5,h10,h9,s13,h11,c7,d11,h6,d7,c3,s10,d8,c11,d9,h3,h4,c5,d3  
**763/1000: solving: solved in 232586 tries.**  
h12>c12,s12>s9,s12>h12,s11>s12,s4>d4,d5>d10,d1>c1,d1>d5,d12>d1,d6>c6,d12>d6,h13>h1,s8>s4,s8>c8,s8>s11,c10>c4,d13>d12,h13>d13,s3>s8,s2>h2,s2>s3,s1>s2,h7>h8,c13>c9,d2>c2,s7>s6,h5>s5,h10>h5,h10>c10,h10>h13,s13>c13,s7>s13,h9>h7,c11>c3,c11>d11,d7>c7,d7>d2,h11>h9,s7>d7,s10>s7,s10>s1,h10>s10,d9>d8,h4>h6,h4>h10,d3>d9,h3>d3,h3>h4,h11>h3,c11>h11,c5>c11,

d5,s4,s1,s7,h10,d10,c2,h4,d6,c9,s9,d13,d11,c1,c5,d4,d12,h7,s10,c12,s2,h3,d9,s3,h11,h9,c11,d2,c8,s13,h2,h13,s6,h5,d3,d8,h8,s5,c3,s11,s12,h1,c4,s8,c13,c7,h6,h12,d1,d7,c10,c6  
**764/1000: solving: solved in 22655 tries.**  
s1>s4,s7>s1,d10>h10,d6>d10,s9>c9,d11>d13,c5>c1,d12>d4,c12>d12,c12>c5,s2>s10,s3>s2,h3>s3,h3>h7,d9>d11,d9>s9,d9>d6,h11>h3,h9>h11,h2>d2,h13>s13,d8>d3,h8>d8,h8>h5,h8>c8,h8>h2,h13>h8,s5>s6,c3>c11,s11>s5,h1>h13,s8>s11,s12>s8,c4>c3,c4>h4,c4>c2,c12>c4,h1>h9,c13>c12,h12>s12,c7>c13,h12>h1,h6>h12,d1>d9,d7>d1,d7>s7,d7>d5,c7>d7,c6>c10,c6>h6,c6>c7,

s9,s12,c10,h6,h7,d3,c3,c2,h10,h5,d9,s7,s1,d12,h3,s3,d6,c12,c11,s5,c7,s4,s10,c4,s6,d10,h11,h4,c6,h8,s13,s8,d4,h2,d8,d7,d5,c5,d13,h9,c1,d2,s2,h1,d11,c9,h12,d1,s11,c13,c8,h13  
**765/1000: solving: solved in 1208 tries.**  
s12>s9,h7>h6,c3>d3,c2>c3,h10>c10,h7>h10,s1>s7,s3>h3,c12>d12,c11>c12,s10>s4,d10>s10,d10>d6,c4>c7,h4>h11,c6>c4,s6>c6,s6>s5,h8>h4,s8>s13,s8>h8,s8>s6,d8>s8,d8>d10,d4>d8,d5>d7,c5>d5,d13>d4,s2>d2,h1>h9,c1>h1,s2>h2,c1>c5,d1>d11,d1>d13,d1>s1,d1>d9,s2>s3,c1>d1,c11>c1,s2>c2,h12>h5,h12>s12,h7>h12,s11>s2,c11>s11,c9>c11,c13>c9,h13>h7,c13>h13,c8>c13,

c4,d3,s1,s13,s6,s8,h3,c10,s4,c11,d13,s11,c6,s9,d7,h10,h1,d2,c5,d8,h8,c12,h13,c8,h9,s2,h11,c1,c7,d11,c13,h2,c2,s7,d6,d5,d12,c9,c3,d10,h6,s12,h5,s10,d1,s3,h4,d4,h7,h12,d9,s5  
**766/1000: solving: solved in 37875 tries.**  
s13>s1,s6>s13,s8>s6,s4>s8,c11>c10,c6>c11,s9>s11,h1>h10,h8>d8,h8>h1,c12>c5,h13>h8,h13>d13,d2>d7,c8>c12,h9>s9,h9>h13,c8>c6,s2>d2,c7>c1,c2>h2,c2>c13,s7>c7,d5>d6,c9>c2,c3>c9,d12>d5,s12>d12,d10>d11,s12>s7,h5>h6,s10>d10,s10>s2,d4>d1,h4>h5,h7>h4,h12>h7,h12>h11,s12>h12,s12>s10,c3>c8,c3>h3,c3>c4,d4>s4,s5>s12,d9>h9,d9>d4,s3>s5,s3>c3,d3>s3,d9>d3,

d9,d8,s3,h2,s13,d7,c1,d3,s8,s4,d2,s5,c12,h7,h13,h5,c2,d5,d4,c9,d13,s1,c4,h3,h9,c10,h10,s9,h4,c11,s12,d1,h8,c5,c8,s10,s11,c3,s6,d11,d12,s2,h1,d10,h6,c7,d6,c13,s7,h12,c6,h11  
**767/1000: solving: solved in 11118 tries.**  
d8>d9,s4>s8,h13>h7,h5>h13,d4>d5,c4>c9,c4>d4,c4>c2,h9>h3,h10>c10,h10>h9,s12>s9,h8>h4,c8>c5,c8>h8,c11>c8,s10>s12,s10>h10,s10>s1,c11>c4,d11>s11,d11>d1,d11>c11,d13>d11,d10>d12,d10>s10,d10>d13,c3>c12,s2>s6,h1>h5,h6>h1,d6>d10,d6>h6,c7>c3,s2>s5,s7>c7,s7>s4,s7>d7,d2>d3,s2>s7,s2>s3,c13>c1,c13>s13,d2>s2,c6>c13,d6>c6,d6>d8,d2>d6,h2>d2,h12>h2,h11>h12,

s8,h13,c10,h6,d3,h12,h7,s6,s11,d7,c8,s10,d12,c5,c4,d1,c2,s5,s2,s4,s3,c7,h11,d6,h5,c9,h1,c3,d4,c11,s12,c1,d5,c6,d11,d13,h2,s1,s9,s7,s13,c12,h3,d2,d8,h8,d10,h4,h9,h10,c13,d9  
**768/1000: solving: solved in 235658 tries.**  
h7>h12,s6>h6,s6>s8,h7>h13,s10>s11,c4>c5,s2>s5,s2>c2,s4>s2,s3>s4,c7>c4,c7>d7,c7>c10,c7>h7,s10>s6,d1>d12,s3>d3,d13>d11,s9>s1,s7>s9,s13>s7,d8>d2,h9>h4,h10>h8,d10>h10,h9>h3,h9>h2,d9>d8,d9>h9,d9>d5,c13>s13,c12>c6,c12>s12,c1>c12,d9>d4,d13>d9,c13>d13,c13>c9,c11>c13,c11>h11,h1>h5,c3>c11,c3>s3,c3>c7,c8>c3,c1>h1,c1>c8,d1>c1,d6>d1,d10>d6,d10>s10,

s12,d1,s10,d13,s11,h4,c9,h2,d3,h5,s3,d9,c8,h3,s5,d8,h7,d2,c6,h12,h8,c12,d10,d11,s8,s9,s7,h6,s6,s2,c1,d5,c4,c3,c5,c11,h10,h13,c10,h1,c2,d6,d12,d4,c7,h9,d7,h11,s1,s13,c13,s4  
**769/1000: solving: solved in 1302 tries.**  
d9>d3,h3>h5,s3>h3,h12>h7,h8>h12,h8>d8,c12>c6,d11>d10,s9>s8,s7>s9,s6>h6,s6>s7,s2>s6,s2>d2,c3>c4,c5>c3,c5>d5,c5>c1,c11>c5,c11>d11,c11>c12,h10>h8,h13>h10,c10>c11,h1>h13,c2>c10,c2>s2,c2>c8,c2>h2,c2>c9,s5>s3,d6>d9,d12>d6,d7>d4,d7>d12,c7>d7,c7>c2,s5>s11,s1>h1,s1>s5,h11>h9,c13>c7,c13>d13,s1>d1,s1>s12,s10>s1,s13>c13,s13>s10,s4>s13,h4>s4,h11>h4,

d2,d4,h3,d3,s13,h11,d6,c12,d1,s4,s7,s9,c7,h6,c11,d12,s12,h5,c1,h4,c5,d9,c10,h13,h12,c3,h8,d5,c13,s6,s2,s11,d10,s3,c9,c2,h9,s5,c8,c4,s10,d11,d8,s8,h7,c6,h10,h1,d7,h2,d13,s1  
**770/1000: solving: solved in 30466 tries.**  
d4>d2,d3>h3,d3>d4,d6>d3,s7>s4,s9>s7,c7>c12,s12>d12,s12>s9,c5>h5,c5>c11,c1>c5,c1>d1,c1>c7,s12>s13,h4>h6,c10>c1,h12>h13,c13>c3,s2>s6,s11>s2,c2>c9,s5>s3,s5>d5,s11>s5,c4>c2,d8>d11,s8>c8,s10>s8,s10>d10,s10>s11,h9>h8,h9>d9,h9>h4,h12>h9,h12>s12,c6>c4,c6>c10,c6>d6,c13>c6,h11>h12,h7>h11,h2>h10,h1>h2,d13>d8,d13>c13,s1>s10,h1>s1,d7>d13,h7>d7,h1>h7,

h8,s8,c2,h10,d8,d11,h4,h5,h11,d12,c7,s1,c11,s10,h12,s2,h9,s13,c9,h1,h3,s9,s3,c10,d5,d7,c3,d2,h6,d10,d13,s4,c13,h13,s11,c8,s6,c12,s5,d4,s12,c5,d6,d3,h2,s7,c4,d9,c6,h7,c1,d1  
**771/1000: solving: solved in 92173 tries.**  
s8>h8,d8>s8,d11>d8,h4>h10,h5>h4,h11>h5,d12>d11,c11>h11,c11>c2,c7>c11,s10>s1,h12>d12,s2>s10,h9>h12,s13>s2,c9>h9,c7>c9,h3>h1,s3>s9,s3>h3,s3>s13,d7>d5,d7>c7,c3>c10,c3>s3,d13>d10,h13>c13,h13>h6,d13>h13,d13>d2,s11>s4,d6>d4,d3>d6,s12>c12,s12>s11,s5>s12,c4>c5,c4>c8,c4>c3,d9>d3,h7>h2,s7>h7,s7>s5,s7>d7,s6>s7,d9>d13,c1>c4,c6>s6,c1>c6,d1>d9,d1>c1,

s1,c10,h13,h2,d2,d5,d1,h7,s6,h5,d4,d9,h6,c4,s10,c11,s9,d12,c1,s3,d11,c9,c3,c6,h1,s11,h8,c13,h12,d13,s7,d10,s12,c7,d7,h10,h3,s13,s4,d8,d6,h9,c8,h4,s8,s5,c12,s2,h11,c2,c5,d3  
**772/1000: solving: solved in 109841 tries.**  
h2>h13,d2>h2,d5>d2,d1>d5,d9>d4,h6>s6,h6>h7,h5>h6,c1>c11,c3>c9,c6>c3,s11>d11,s11>s3,h8>h1,c7>s7,c7>c13,d10>d13,h10>d10,h10>h12,h3>h10,d7>c7,s13>s12,s4>s13,d8>d7,d8>h8,s5>s8,c2>c12,c2>c8,s2>c2,s2>s4,h4>h9,s5>s2,h11>h4,d3>d6,d3>d8,d3>d12,h3>d3,c5>c6,s5>c5,h11>h3,s11>h11,s11>s10,s5>s11,s5>h5,s5>s1,c4>c10,c1>c4,d1>c1,d9>d1,s9>d9,s9>s5,

c11,c13,h10,h4,c8,d6,s6,s5,c12,d12,s4,d1,d13,h7,h12,h5,s1,d3,d4,s10,c1,s8,c3,s12,d7,h11,h3,d2,c4,d5,s11,h9,c2,d9,s2,s7,d10,h8,c9,h6,h2,s9,s3,h13,c6,h1,d11,c10,c7,c5,d8,s13  
**773/1000: solving: solved in 5123 tries.**  
c13>c11,h4>h10,s6>d6,s5>s6,d12>c12,d13>d1,h12>h7,h12>d12,h12>h4,s4>s5,s1>s4,d4>d3,h3>h11,h3>c3,d2>d7,s7>s2,s9>c9,s9>s7,s9>d9,s9>s11,h9>s9,c2>c4,c2>d2,h13>h6,h13>h9,h2>h13,c10>c6,c10>d10,c10>c2,h1>h2,h8>h1,d11>d5,c5>c7,d8>h8,d8>d11,s3>s12,s3>h3,c10>c1,s13>s3,s13>s10,s13>d13,s13>s1,h5>h12,s13>c13,c5>c10,c5>h5,c8>c5,s8>s13,c8>s8,d8>d4,d8>c8,

h5,c12,s3,s6,d9,d12,c13,d7,h8,d11,s8,h1,s1,c3,s12,s4,c5,c4,c7,h10,d10,s13,d3,s10,c10,h6,s7,s5,h7,c9,d4,d1,c8,h11,c2,c1,c6,h2,d2,s2,d6,s11,d8,h3,s9,d5,h12,h9,d13,c11,h13,h4  
**774/1000: solving: solved in 18883 tries.**  
s6>s3,d12>d9,c13>c12,d7>d12,h1>h8,s1>s8,s4>s12,c4>c5,c4>s4,c4>c3,c7>c4,d10>h10,d10>d11,c10>s10,c10>c7,s7>s13,s5>s7,h7>h6,d4>d3,d1>d4,d1>s1,d1>d10,d1>h1,d1>d7,c10>c13,c8>c9,c1>c2,c6>c1,d2>h2,d6>c6,d2>d6,s2>d2,s11>s2,d8>c8,d8>d1,h3>h7,h11>h3,s9>s11,d5>s5,d5>d8,s9>s6,h9>h12,h9>s9,d5>h5,h11>h9,c11>c10,d13>d5,h11>c11,h13>h11,h13>d13,h4>h13,

h3,d13,s2,d10,s3,s1,s10,h6,h9,c12,h1,c9,s11,h2,d3,c2,c10,d5,c7,d12,s8,h12,d4,s7,h13,d7,d1,d11,s13,h7,d8,c6,h4,s5,d2,c5,h5,s9,c3,h11,d9,c8,h10,c1,s4,c4,s6,c13,d6,c11,s12,h8  
**775/1000: solving: solved in 21400 tries.**  
s1>s3,s10>s1,s10>d10,s10>s2,h6>h3,h9>h6,h2>h1,c2>c9,c2>h2,c2>c12,c10>c2,c10>s10,d3>d13,d5>d3,s8>s11,h12>d12,s7>c7,s7>s8,d1>d7,d11>d1,h7>h13,h7>s7,h7>h9,h12>h7,d11>d4,h5>c5,h5>h4,s5>h5,s5>s13,s5>d5,c6>c10,d8>d11,d9>s9,d9>d2,c3>c6,c4>s4,c13>c1,c4>c13,c11>c4,c11>h11,c11>c3,c8>c11,d6>d9,h8>h10,h8>c8,d8>h8,d6>d8,s6>d6,s6>s5,s12>s6,s12>h12,

c12,c10,s12,h10,c1,h13,s9,h8,h6,c8,d9,h3,d1,d4,d5,c5,c9,c11,s10,s1,d2,h9,c2,s6,c3,c13,h4,d8,h11,d6,s13,c4,h1,s2,s11,h5,d7,c7,s8,s7,d10,d3,s4,d12,c6,d11,h7,s3,h2,d13,s5,h12  
**776/1000: solving: solved in 45713 tries.**  
c10>c12,c1>c10,h13>h10,h6>h8,d9>s9,d4>d1,d5>d4,c5>d5,c9>c5,c11>c9,s1>s10,c13>c3,s2>s13,s11>s2,h5>h1,c7>d7,s7>s8,s7>c7,s4>s7,s4>s11,c4>s4,d10>d6,d11>d3,d11>d10,d11>h11,d11>d8,c6>c4,d12>d11,s5>s3,h2>h5,h2>h4,h2>c2,h2>h9,s6>s1,h2>d2,c13>c11,h12>h7,h12>h2,h12>h3,d12>h12,d12>d9,c13>c8,c6>h6,d13>c13,d13>h13,d12>d13,c6>c1,s6>c6,s5>s6,s12>s5,d12>s12,

h5,h8,c2,h2,d11,c6,c9,s9,h12,c12,h6,h11,s12,s6,h1,s7,d9,s13,d12,s4,c4,h13,c10,h9,s2,c11,d3,d5,d4,c5,c8,d10,h10,c3,s3,d1,d13,h3,h7,d7,d2,s1,s5,c13,s10,d8,s11,c1,c7,h4,s8,d6  
**777/1000: solving: solved in 40707 tries.**  
h8>h5,h2>c2,h2>h8,c9>c6,s9>c9,h12>h2,c12>h12,h11>h6,s6>s12,c4>s4,h13>s13,h13>h1,d12>d9,c10>c4,c11>c10,d5>d3,d4>d5,c8>c5,h10>d10,s3>c3,d13>d1,h3>h10,s3>h3,s3>s2,d2>d7,s10>s1,s5>s10,d8>d2,d8>c8,d8>d4,d13>d8,c13>d13,s5>s3,c1>c13,c7>c1,c7>c11,h7>c7,h7>h13,s7>h7,s8>s5,s8>s7,s11>s8,s11>s9,h11>s11,h4>h9,d6>s6,d12>d6,d12>c12,d11>d12,h11>d11,h4>h11,

h2,c3,c9,c10,d5,s1,h4,d7,h13,h11,s12,s10,d11,h1,s11,c6,h7,c8,c1,s5,c7,d9,s6,d3,c5,s3,d10,h8,h10,d8,d4,h5,c12,s4,h9,s9,d12,s2,c2,s7,h3,d13,s13,d6,h12,h6,d2,c4,d1,c13,c11,s8  
**778/1000: solving: solved in 406933 tries.**  
c9>c3,c10>c9,d7>d5,h13>h4,h11>h13,s10>s12,h1>h11,h1>s1,h1>h2,s11>d11,s11>s10,c6>c10,c1>c8,s5>s11,c7>c1,c7>h7,c7>c6,d7>c7,s3>s6,d3>s3,d3>d9,h10>h8,h10>d10,d8>d3,d4>d8,h5>h10,h5>c5,s4>d4,s4>s5,s9>h9,s9>s4,d12>c12,d12>d7,c2>s2,s13>s7,h12>h3,h6>h12,h6>h5,s13>s9,d6>h6,c11>c4,c11>c2,d2>d6,c13>c11,d13>c13,d13>d12,d1>d2,d1>h1,d13>d1,s13>d13,s8>s13,

s9,s5,h13,d12,s7,s10,h3,h9,s12,d13,c2,c13,h8,h6,s11,h4,c1,c11,c5,d3,s1,d10,s3,s6,h12,d7,c7,h11,d4,d5,c6,c9,d6,c12,h5,d2,c10,d11,c8,h1,s2,d8,c4,s4,h2,s13,c3,h7,d1,s8,h10,d9  
**779/1000: solving: solved in 958753 tries.**  
s5>s9,s7>s5,s10>s7,h9>h3,d13>d12,d13>h13,s12>s10,c13>c2,h6>h8,c11>c1,c5>c11,s3>d3,s3>s11,s1>s3,d7>d10,c7>d7,c7>c5,s6>s1,s6>h6,h4>h9,h11>h12,d5>d4,c6>c7,c6>s6,c6>c13,c9>c6,d6>d5,d2>d6,c12>c9,d11>d2,d11>h11,d8>c8,d8>d11,h2>s2,h2>h5,h2>h4,d8>d13,c3>c4,c3>c12,c10>c3,s13>s4,h10>h7,h10>c10,h10>h2,h1>h10,s13>s12,d1>h1,s8>s13,d8>s8,d1>d8,d9>d1,

h10,d6,d9,s9,h6,d5,d13,c13,c1,c9,s7,h3,s13,h8,h2,d10,h11,h5,s10,d11,d3,h7,c7,c2,d12,h13,s3,c11,d4,c3,d1,h12,c5,c6,s12,c10,c12,d7,d2,s1,s5,h1,s4,s2,s11,h4,s8,c4,h9,d8,c8,s6  
**780/1000: solving: solved in 38626 tries.**  
d9>d6,s9>d9,d13>d5,c13>d13,c1>c13,c9>c1,s7>s9,h2>h8,h5>h11,d11>d10,d3>d11,d3>h3,h5>h2,c7>h7,c2>c7,c3>s3,c3>c2,c11>c3,d1>d4,h12>d12,h12>h5,h13>h12,h13>s13,h13>h6,c11>c9,c6>c5,s12>s10,c10>c6,c12>c10,d2>d7,s1>d1,s1>s12,d2>d3,c12>c11,s5>s1,s2>s5,s2>d2,h4>h1,h4>h13,s8>s11,d8>s8,c8>d8,c8>c12,c4>c8,s6>s2,s6>s7,s4>s6,h4>s4,h9>h10,h4>h9,c4>h4,

s9,d10,s10,d1,s3,c5,s12,c13,s2,s1,s6,d11,d5,c12,d9,d7,d2,h7,s5,d13,c9,h8,s4,c3,s7,d3,c8,d12,c7,h9,h10,h6,h5,h13,c1,h4,h2,d6,c10,c11,h1,s11,h12,s13,h3,c4,h11,c6,c2,s8,d8,d4  
**781/1000: solving: solved in 2031 tries.**  
s10>d10,s10>s9,s1>s2,s6>s1,d5>d11,c12>c13,c12>s12,c12>c5,d9>d5,d7>d9,d2>d7,s5>s6,h8>h7,c8>c3,d12>d3,c7>c8,s7>c7,s7>s4,d12>d13,h10>h9,h6>h10,h5>h6,h13>h5,c1>c9,h4>h13,h2>h4,c11>c10,h1>h2,s11>c11,h12>h1,h12>d12,h12>h8,h12>c12,s13>s7,d6>d2,s13>s5,c4>c1,s11>s13,h11>h3,c6>d6,c2>c6,c4>c2,h11>h12,s11>h11,d4>c4,d4>d1,s11>s3,d8>d4,s8>s11,s8>d8,s8>s10,

d4,c7,h7,s9,d6,c6,d13,c8,s6,c11,h11,h9,s2,s7,c4,s11,h6,c2,h12,c3,d3,d7,h3,c1,d10,h1,s10,s13,s1,h8,d5,d11,c9,s5,c10,c5,d2,d9,h5,h13,s4,s12,d8,s3,d12,h10,h2,h4,s8,c13,d1,c12  
**782/1000: solving: solved in 6528 tries.**  
h7>c7,d6>d4,c6>d6,s6>s9,c11>c8,h11>c11,h11>h7,h9>h11,s7>s2,c2>c4,h12>h6,c3>c2,d3>c3,d7>d3,d7>s7,d7>d13,h3>h12,h1>h3,c1>h1,d10>d7,s10>d10,s10>s6,s11>s10,c1>c6,s13>s11,s1>s13,d11>d5,c5>c10,c5>s5,c5>c9,d9>d11,d9>h9,h5>h8,c5>h5,c5>c1,s3>s4,s12>s3,d12>d8,d12>s12,h2>h10,h2>d2,h4>h2,h13>h4,c13>h13,d12>d9,c12>c13,c12>c5,d12>c12,d1>d12,s1>d1,s8>s1,

d13,s12,h13,c9,s10,d3,c3,h2,d1,c1,c8,h1,s6,d6,d4,s7,c4,s11,h12,d12,s4,c5,c7,c6,d9,c11,h7,h10,d2,c2,d5,s13,c13,s2,d10,s1,d7,h11,c10,h4,s8,d11,h8,h6,h9,s5,s9,d8,h3,h5,s3,c12  
**783/1000: solving: solved in 133750 tries.**  
s10>s12,c3>d3,c3>c9,c1>d1,c8>c1,d6>s6,d4>d6,d12>h12,s4>c4,s4>s7,s4>d4,s11>s4,c7>c5,c6>c7,h10>h7,d2>d9,c2>d2,c2>c6,c11>c2,d5>d12,c13>s13,d10>h10,s1>s2,d7>d10,c10>c13,d11>h11,d11>d7,d11>s11,d5>d11,c10>c11,h6>h4,h9>h6,s9>s8,h5>s5,h5>h9,h5>d5,s1>h1,h8>h5,s3>s9,s3>s1,h8>h2,c8>h8,h3>s3,h3>h13,c3>h3,c10>s10,c3>c10,d8>d13,c8>c3,c8>d8,c12>c8,

h12,s9,s13,c13,c7,c5,h2,d10,d3,c11,d1,s4,c2,s2,s6,c3,h3,d6,d9,d13,h6,h9,h8,s8,d8,h10,s1,s5,c6,h7,c10,h5,d4,c4,c9,h13,d12,d5,s10,c8,d7,s3,h1,s7,d11,h11,s11,c1,c12,d2,s12,h4  
**784/1000: solving: solved in 15092 tries.**  
s13>s9,c13>s13,c7>c13,c5>c7,d3>d10,c11>c5,d1>d3,c2>h2,c2>c11,s2>s4,s6>s2,c3>c2,h3>c3,h3>h12,d6>s6,d6>d1,d9>d6,d13>d9,h9>h6,h8>h9,s8>h8,d8>s8,d8>d13,s5>s1,h7>h10,c10>c6,h5>h7,s5>h5,d4>d8,c4>c10,c9>c4,d5>d12,d5>s5,d5>d4,s3>s10,c8>c9,h13>h3,s11>s7,s11>s3,c1>h1,c12>c1,c12>c8,d2>d7,d2>d5,d11>d2,s12>c12,s11>s12,s11>d11,h11>s11,h11>h13,h4>h11,

c2,c13,c7,h1,h13,d13,s6,s5,h10,s10,h6,c1,d5,s7,d4,d11,h9,h11,c6,d12,h4,d9,s9,d7,s13,h12,c11,d6,c5,s3,d2,c10,s1,c9,s4,c12,d3,s12,h2,h3,h7,c3,c4,d1,s11,s8,h5,s2,d8,h8,c8,d10  
**785/1000: solving: solved in 44572 tries.**  
c13>c2,c7>c13,h13>h1,d13>h13,s5>s6,s10>h10,s10>s5,d11>d4,h11>h9,h11>d11,h4>h11,d9>d12,s9>d9,s9>s7,d2>d6,s12>s4,c12>s12,c12>c9,h3>h2,h3>d3,c3>c12,c3>s3,c3>c5,h3>c3,c10>c11,h3>h12,d1>s1,d1>d2,c4>c10,s2>s11,h5>h7,s8>s2,h8>h5,h8>h3,s8>h8,s8>s13,d1>d7,d8>d1,s8>d8,c4>h4,c4>c1,c6>c4,c6>h6,d5>d13,c8>c6,c8>c7,s8>s9,d10>d5,s10>d10,s8>s10,s8>c8,

c4,c11,s12,c8,h7,c6,s3,d6,h2,s6,h12,c13,c10,s4,s2,d4,h9,d3,s1,s13,c12,h3,h6,c5,c2,h1,s10,s5,d9,s7,h4,h5,c9,d5,h10,c1,d7,d8,d10,d11,d13,d1,s8,h8,s11,h11,d2,s9,c3,d12,h13,c7  
**786/1000: solving: solved in 27393 tries.**  
c11>c4,s6>s3,s6>c6,s6>s12,d6>s6,h2>h7,h12>h2,c10>c13,s2>s4,s13>s1,h3>d3,h3>h9,s13>s2,c2>c5,s5>s10,h5>h4,h5>s5,h5>h1,d5>d9,d5>h5,c9>c2,d7>s7,d7>d5,h10>h6,d10>d8,d11>d7,d13>d11,d1>d13,c1>d1,d10>h10,c1>c12,d10>d4,c9>c1,d12>d2,s9>s11,s9>c9,s9>s13,s8>s9,s8>c8,d10>c10,d10>d6,h8>s8,h11>h8,h12>h11,d12>d10,h12>d12,h13>h12,h3>h13,c3>h3,c3>c11,c7>c3,

s12,d1,c4,d6,s5,s11,h13,h11,d3,c11,s7,d7,d13,d11,h4,s1,h6,s8,h9,c8,h7,s9,s2,h5,c12,h12,c2,s6,d5,s3,c1,h8,h3,d2,c5,s10,d4,c7,h2,d9,c3,c13,s4,c6,c9,d8,d12,h1,d10,h10,c10,s13  
**787/1000: solving: solved in 5317 tries.**  
s11>s5,h11>h13,h11>s11,d7>s7,d13>d7,d11>d13,d11>c11,d11>d3,d11>h11,d11>d6,s9>h9,s9>s8,h7>h6,c12>c8,h12>h5,c2>c12,s2>c2,s2>s9,h3>h8,c5>c1,d9>d4,c13>c3,c9>c13,c9>d9,c7>c9,h2>d2,h2>h3,c7>c5,s10>s3,c6>c7,c6>s6,d10>d8,d10>s10,h1>h2,h10>h1,c10>h10,c10>c6,d10>d5,d10>c10,s4>s2,s4>h4,h12>h7,d12>d10,d12>h12,d12>d11,d12>s12,d1>d12,s4>c4,s1>s4,s1>d1,s13>s1,

c8,s9,h6,s7,c4,s8,c10,c6,c1,s2,h11,d3,h10,h12,s12,s6,c5,h7,s13,h1,h2,h5,d6,s10,h4,c12,h9,c2,c9,s3,s1,h3,s4,c3,h8,s5,d1,d2,d9,d5,d8,d11,d7,d10,c7,d13,c11,s11,h13,d4,d12,c13  
**788/1000: solving: solved in 67836 tries.**  
c6>c10,c1>c6,h12>h10,s12>h12,s12>s2,s6>s12,h7>h11,h2>h1,h5>h2,s10>s13,c9>c2,c9>h9,c9>c12,s1>s3,h3>h4,s4>s1,c3>h3,c9>c3,d2>d1,d9>d2,d5>d9,d8>h8,d8>d6,s5>s4,s5>h5,s5>s10,s5>c5,s5>s6,d8>d3,d11>d5,d7>d11,d7>h7,d8>d7,c9>c1,d8>s8,c7>c9,c7>s7,c7>c8,c4>c7,d13>d10,s11>s5,s11>s9,d13>d8,h13>h6,c11>s11,c11>c4,d13>h13,d12>d4,c13>c11,d13>c13,d12>d13,

c2,d4,c10,h7,d8,s12,s11,d1,d6,s2,h6,s1,h1,d2,h5,c7,s10,c6,h13,c8,c11,h9,h12,d5,d11,s3,s4,h4,s13,d13,s8,c12,d3,s6,h2,d12,c9,s7,d7,c4,d9,d10,c3,h3,h8,c5,s9,h11,c1,s5,c13,h10  
**789/1000: solving: solved in 6264 tries.**  
d8>d4,s11>s12,d6>d1,h1>s1,h1>h6,d2>d6,s2>d2,s2>s11,h5>h1,c7>h7,c7>c10,s2>c2,c6>c7,c11>c8,h12>h9,d11>d5,s4>s3,h4>s4,d13>s13,d3>d13,d12>c12,s7>s6,d7>s7,d7>d12,c4>c9,d9>d7,d10>d9,c3>c4,h3>c3,h3>h2,h3>d3,h3>h4,d10>d11,h8>s8,h8>h12,s5>s9,h10>h11,h10>h3,h10>d10,c5>c11,s5>c5,s5>h5,s5>s2,s10>s5,h8>d8,c1>c6,c13>c1,h13>c13,h13>h8,h10>h13,h10>s10,

h6,c6,h1,d12,s5,d4,s7,s6,c4,c10,h10,c11,c7,h7,d8,s9,c1,s13,s12,h12,d7,d6,s1,d2,c12,s4,c9,c5,c13,d5,d9,d1,c3,s10,h5,s11,h2,h4,h9,h3,d3,s2,c2,s3,h11,h8,s8,h13,d13,c8,d10,d11  
**790/1000: solving: solved in 9630 tries.**  
c6>h6,s6>s7,c10>c4,h10>c10,c7>c11,h7>c7,h7>h10,d8>d4,s12>s13,h12>s12,h12>h7,d6>d7,s1>s9,c1>s1,d6>s6,d6>d8,h12>d12,h12>h1,d6>c6,c5>c9,c13>c5,d9>d5,d1>d9,h4>h2,h9>h4,h3>h9,d3>h3,c2>s2,s3>s11,s3>c3,s3>s4,s10>s3,h11>h5,h8>h11,d13>h13,d13>d3,d13>c13,d13>d2,d1>d13,d1>c1,c2>c12,s10>s5,c8>c2,h8>c8,h8>h12,s8>h8,s10>s8,d10>d1,d10>s10,d10>d6,d11>d10,

h13,d7,s12,d3,c8,d12,d8,d5,d6,d2,c2,h12,s2,c3,c13,h1,s13,h6,s8,s11,s7,c5,h11,d9,c6,s4,d10,s9,c11,c12,h5,h8,s1,h2,d11,d13,s5,c7,h4,d4,c10,c1,s10,h7,s6,h9,s3,d1,c9,h3,h10,c4  
**791/1000: solving: solved in 1076 tries.**  
d12>s12,d12>d7,d3>d12,d8>c8,d8>d3,d5>d8,d6>d5,d2>d6,c2>d2,c3>c2,c13>c3,c13>h13,s11>s8,s7>s11,h11>h6,d10>d9,s9>s4,c12>c11,h8>h5,s1>s9,h2>h8,d13>d11,d4>h4,d4>d13,c10>c7,s10>s5,c10>s10,c10>c12,c10>d10,c10>c5,c6>c10,c1>s1,c1>c6,h2>h11,h2>s2,h2>h12,h1>h2,s7>s13,c1>c13,s6>s7,h9>h7,d1>d4,s3>s6,d1>c1,h1>d1,h3>s3,h3>h1,h10>h3,h9>h10,c9>h9,c4>c9,

c2,d5,h2,c10,h6,d9,s12,c7,h3,s4,s2,d7,d12,s8,d1,h5,s10,s6,c5,s9,c1,d6,h9,h12,c11,h13,s5,c12,d10,d8,c6,h4,d13,d4,c13,h11,s11,s3,d11,c3,h8,h10,s1,c4,s7,c9,h7,d2,d3,c8,h1,s13  
**792/1000: solving: solved in 159745 tries.**  
c10>c2,h6>h2,s4>s12,s2>s4,d12>d7,s10>s8,s6>s10,c5>h5,s9>s6,c1>c5,c1>d1,d6>d12,h12>h9,c12>c11,c12>h12,c12>c1,s5>s9,d8>d10,c6>c12,d13>h13,d13>d6,d8>d13,d4>h4,d4>d8,c13>c6,d11>h11,d11>d4,s11>d11,s11>s2,s5>s11,s5>d5,h3>h6,h10>h8,c4>c3,s7>s1,d3>d2,h1>h7,c8>c9,c8>c4,c8>c7,c13>c8,s13>s7,s13>c13,s13>s5,s3>s13,h3>s3,h10>c10,h1>h10,h3>h1,d3>d9,d3>h3,

d9,d12,c8,d4,s5,s11,h8,s1,d5,h6,d8,s6,c9,d10,h2,s8,d7,s2,h12,h9,h7,d1,c5,h10,s4,c3,c1,h4,d6,c6,h13,s10,c2,d3,c13,c7,c10,s7,h11,s3,c12,c4,h3,s13,d2,d11,h5,c11,h1,d13,s12,s9  
**793/1000: solving: solved in 10906 tries.**  
d12>d9,s11>s5,h8>c8,s1>s11,d10>d8,s8>s6,h12>h2,h9>h12,h9>c9,h9>h6,d1>d7,c3>c5,c1>c3,c1>d1,h10>h7,h4>s4,h4>h10,c6>d6,c6>c1,h13>h4,c2>s2,c2>c6,s10>s8,s10>d10,s10>s1,c13>c2,h13>c13,h13>h9,c10>c7,c4>c12,h3>h11,h3>d3,s13>s7,d11>d2,c11>c4,c11>c10,d11>c11,s3>h3,h1>h5,d13>d11,d13>d5,s12>s3,s12>s10,s12>d12,d13>d4,h13>d13,h1>h8,h13>h1,s13>h13,s13>s12,s9>s13,

h3,d5,h4,h1,h7,c7,c13,s7,s9,d3,h11,d13,s8,c3,d4,d10,s4,c12,s2,d11,d8,c4,h12,c6,d6,h8,s12,d7,d1,c2,h13,s11,c1,s13,c10,d9,h5,s5,d2,s10,h2,s6,c11,h10,c8,h9,s3,c5,h6,c9,d12,s1  
**794/1000: solving: solved in 131513 tries.**  
h1>h4,h7>h1,c7>h7,c13>c7,s9>s7,d3>d5,d3>h3,d13>c13,d13>d3,d10>d4,s4>s8,d11>d10,d11>h11,c12>c3,c4>c12,c4>s4,s2>s9,c6>c4,d6>c6,d6>d11,d8>d6,h8>h12,h8>d8,d1>d7,c1>c2,c1>d1,h13>h8,s13>s11,s13>h13,s13>s2,s13>d13,c10>c1,h10>h2,h10>s10,c8>c11,h6>h9,c5>c8,h6>h10,h6>h5,c5>s5,s6>h6,c9>c5,c9>c10,d9>c9,s6>s13,d2>d9,s3>s6,d12>d2,s1>s3,s12>s1,d12>s12,

s9,s2,s4,h3,h5,s11,s10,d10,d9,s6,c4,d11,h11,d7,s13,d13,s12,h8,c3,s8,d12,h9,c9,h4,c6,c2,h10,d5,d1,d6,s5,s3,h1,c1,c11,d3,d4,c13,c5,h12,h2,d2,c8,c12,h6,s7,c7,c10,h7,h13,s1,d8  
**795/1000: solving: solved in 3538931 tries.**  
s2>s9,s4>s2,h5>h3,s10>s11,d10>s10,d9>d10,s6>s4,h11>d11,h11>h5,d13>s13,d13>d7,s8>s12,h8>s8,c3>c4,c9>h9,h4>h8,c6>c9,c2>c6,h10>h4,d1>d5,d6>d1,s3>s5,c1>h1,c1>c2,c11>c1,d3>s3,d3>d12,d3>c3,d3>d9,h10>h11,c13>c11,d6>d3,h2>h12,c7>c12,h7>h6,s7>h7,c10>c8,c10>c5,c7>c10,h13>h2,d8>d2,d8>d4,d8>d6,d13>d8,c13>d13,h13>h10,c13>h13,c7>c13,s7>c7,s7>s6,s1>s7,

s5,d11,s13,c4,h5,c3,h3,h7,h6,c11,s7,s2,c7,c13,h11,s12,d1,h4,h9,h8,h1,c9,d7,c8,c10,d4,c2,s6,d8,d13,d3,s10,c5,d6,c1,d12,s8,d10,h10,c6,d5,s11,d2,h13,s3,s4,c12,h2,s9,s1,h12,d9  
**796/1000: solving: solved in 1959 tries.**  
h3>c3,h3>h5,h7>h3,h6>h7,s2>s7,c13>c7,h11>c11,h11>h6,h11>d11,c13>s13,c4>c13,s2>s5,s12>s2,h4>h11,c4>h4,h8>h9,h1>h8,h1>d1,c10>c8,d8>d4,d13>d8,d3>d13,s10>s6,s10>c10,c5>c2,d5>d10,s3>s11,s4>s3,h2>d2,h2>h10,c12>c6,h12>h13,h12>h2,h12>d12,c12>h12,c12>c1,d5>d6,d5>c5,d5>d3,s1>s8,s1>s10,s1>h1,c12>c9,c12>s12,c4>c12,d5>d7,s9>s1,s4>c4,s9>s4,d9>d5,d9>s9,

s13,c10,d9,s8,c2,d4,h8,c5,s10,c1,c4,s4,s12,s11,d2,c13,d1,c6,h5,s9,h4,h9,h13,h12,s6,h7,c7,d5,h1,h10,c3,s5,d6,d7,s2,c12,c9,h2,c11,d13,s1,d10,d3,d8,s7,h6,d11,d12,h11,h3,s3,c8  
**797/1000: solving: solved in 35852 tries.**  
s8>s13,c5>c2,c4>c1,c4>d4,c4>c5,s4>s10,s12>s4,s11>s12,h9>h4,h9>s9,h9>h5,h13>h9,h13>c13,h13>h8,d1>d2,c7>h7,c7>c6,h1>h12,h10>h1,s5>s6,d5>s5,d5>d1,d7>d6,d7>c7,d7>d5,h10>h13,h10>c10,d7>d9,h2>s2,c9>c12,c11>c9,c11>s11,c11>c4,c3>c11,h2>h10,d3>d10,d8>d13,d3>c3,d3>d7,s7>s1,h11>h6,h3>h11,d12>d11,s3>s7,h3>s3,h3>h2,d3>h3,d8>d3,c8>s8,d8>c8,d12>d8,

h10,s2,h7,h3,c4,s8,s5,c8,h11,d10,d8,h2,d9,d1,c12,c5,h6,c10,d3,d12,s3,s12,h13,h5,d5,d11,c1,h9,s6,h1,h12,d13,d2,c13,s11,s13,c6,s10,d6,s9,s7,h4,c2,h8,c3,d4,s4,d7,s1,c9,c7,c11  
**798/1000: solving: solved in 14899 tries.**  
h3>h7,s8>s2,s5>s8,c8>c4,d8>d10,d1>d9,c5>c12,h6>h2,c10>c5,d12>d3,s12>s3,s12>d12,h5>h13,d5>h5,d5>d1,d11>d5,d11>h11,d8>d11,d8>c8,s6>s12,h1>h9,h1>c1,h1>h6,h12>h1,d2>d13,c13>c10,s13>s11,s13>c13,s6>s13,d6>d2,d6>s6,c6>d6,s9>s10,s7>s9,c2>c6,h4>h12,c3>c2,c3>h3,h8>d8,h8>h10,s7>s5,h4>h8,d4>h4,s4>d4,c7>d7,c7>c3,s1>s4,s7>s1,c7>s7,c9>c7,c11>c9,

s9,d3,c4,h4,d5,h2,h1,d2,s5,h9,h12,s13,d1,s3,s6,h5,h10,c1,d12,c11,s4,c8,d9,c9,s11,s12,c2,c6,h13,s7,s2,d6,c12,h3,d8,s10,d11,h8,c5,s8,h7,s1,h11,c3,c7,d13,h6,c13,d10,c10,d4,d7  
**799/1000: solving: solved in 131978 tries.**  
h4>c4,h1>h2,s5>d5,s5>s9,h1>h4,h12>h9,d1>d2,d1>h1,d1>d3,s13>s5,s3>s13,s6>s3,h5>h12,h10>h5,d12>d1,c11>c1,c9>d9,c9>c8,s11>c11,s11>s6,s4>s11,s12>d12,s12>s4,c2>c9,c6>c2,s2>s7,d6>c6,h3>h13,s10>s2,s10>h10,d8>d6,h8>h3,d11>d8,s8>h8,c5>c12,s1>s8,s1>s12,s10>s1,h11>d11,c7>c5,h7>c7,c13>c3,d13>c13,h6>h11,h7>h6,d10>d13,c10>s10,d7>h7,d10>d7,d10>c10,d4>d10,

c2,c8,s8,c7,d4,c12,s13,c4,d5,c6,h12,c5,s5,h13,h9,c9,s2,h2,s12,d12,d6,d10,d11,h5,s4,c10,d8,d7,h1,s11,s10,c13,d1,h10,s9,h4,d2,h6,d3,s6,h7,s7,s1,d13,s3,h8,d9,c11,c1,h11,c3,h3  
**800/1000: solving: solved in 23570 tries.**  
c8>c2,s8>c8,c4>d4,c4>c7,c12>c4,c6>c12,s5>c5,s5>s13,d5>s5,h13>h12,h9>h13,c9>h9,h2>s2,d12>s12,d12>d5,d6>d12,d6>c6,d10>d6,d11>d10,h5>h2,c10>c9,d7>d8,h1>h5,s10>s11,d1>d7,s9>s10,h4>h10,h7>h6,s7>h7,s1>s6,s3>d3,s3>s7,d13>d2,s1>s3,d9>d13,h11>h8,h11>h4,c11>h11,c11>c13,d9>d1,s9>d9,s9>s4,c11>c10,c11>d11,s9>s8,s1>s9,c1>h1,c1>c11,c1>s1,c3>c1,h3>c3,

h12,c2,d10,c3,s6,s13,s4,h8,c5,s10,d6,d5,s7,h7,h2,d2,d3,h11,h4,c1,c11,h9,d12,s9,h6,s5,d11,s3,d8,c12,h3,s2,s8,d13,d4,c9,h1,c4,d9,d1,s1,s12,c6,d7,s11,c13,c10,c7,c8,h10,h5,h13  
**801/1000: solving: solved in 44448 tries.**  
s13>s6,s4>s13,c5>c3,d5>d6,h7>s7,h7>h8,h2>h7,d2>d5,d3>d2,h11>h2,h4>h11,h4>s4,s10>d10,c1>c5,c11>c1,h6>h9,s5>s9,h3>s3,s8>s2,d13>d8,d4>d13,d9>c9,d9>d4,c4>c12,d1>h1,d1>d9,s1>d1,s1>s5,c6>c4,s11>s8,s11>d11,s11>s1,h3>h6,h3>d3,h3>h4,s11>c11,s11>s10,h3>h12,s12>s11,c6>c2,d12>s12,d7>d12,c7>d7,c7>c6,c13>c7,c8>c10,h10>h3,h5>h10,h13>h5,c13>h13,c8>c13,

d10,s12,c8,h11,c10,s13,d3,s1,h5,d12,d1,s11,c6,s4,h1,h10,d9,d6,h7,c11,d11,h12,d13,d4,d7,c5,c12,s7,h13,s6,c13,d5,h6,c7,c9,c2,s8,h9,s3,h4,s5,s2,d2,h3,h2,s10,c3,d8,c4,h8,s9,c1  
**802/1000: solving: solved in 24976 tries.**  
d12>d3,d1>d12,s1>d1,s1>s13,h5>h11,s11>s1,h10>h1,d6>d9,d6>c6,h7>h10,d11>c11,d11>d6,d11>s11,h12>h7,d13>d11,d4>d13,s4>d4,h12>h5,c5>c10,c12>c5,c12>h12,c12>c8,c12>s12,d7>d10,s7>s4,h6>s6,h6>h13,c13>c12,c7>s7,c7>c13,c7>d7,c9>c7,c2>c9,h9>h6,s3>s8,s2>s3,s2>c2,h3>h4,s10>s5,d8>d2,d8>d5,h8>h2,h8>d8,h3>h8,s9>s10,s9>s2,h9>s9,h3>h9,c3>h3,c4>c3,c1>c4,

s10,c8,d11,h2,h5,s2,c12,c10,d7,s3,h4,c5,h7,h3,d9,d12,c7,c9,d2,h13,c13,d8,h11,h9,s7,s11,h6,d13,c3,s12,s8,s6,d6,c2,c6,c4,s1,h12,h10,s5,d5,c11,c1,h1,h8,d4,s4,d10,d3,d1,s9,s13  
**803/1000: solving: solved in 9750 tries.**  
h5>h2,c10>c12,s3>s2,c5>c10,h7>h4,h7>d7,h7>h5,h3>h7,s3>h3,s3>s10,d12>d9,c9>c7,c13>h13,h9>h11,s11>s7,s8>s12,s6>s8,s6>h6,s6>s11,d13>d8,d13>c13,d13>d2,c6>c2,c6>d6,c6>c3,c6>s6,c6>c9,c4>c6,h10>h12,d5>s5,c1>c11,c1>s1,c1>c4,d5>d13,d5>c5,d5>d11,d12>d5,h1>c1,s4>d4,d10>h10,d3>d10,d1>d3,d1>d12,h1>d1,h8>c8,h1>h8,h9>h1,s9>s4,s9>h9,s9>s3,s13>s9,

c2,d13,c7,d2,h13,h7,h11,s5,c10,s8,d1,c8,s11,d8,d4,h4,d6,c13,c6,s4,c1,c9,s3,h9,h5,s10,d12,c5,c11,h10,c3,h8,h2,d11,s1,d5,h12,s9,d9,d3,h1,s2,c12,d7,s6,s13,c4,h6,s7,s12,h3,d10  
**804/1000: solving: solved in 17431 tries.**  
d2>c2,d13>d2,h7>h13,h7>c7,h11>h7,c8>c10,s8>c8,s8>s5,d1>d13,s11>s8,s11>h11,d4>d8,h4>d4,d6>d1,c6>c13,c6>d6,s4>h4,s4>s11,c9>c1,h5>h9,c5>h5,c11>c5,h2>h8,s9>s1,d9>s9,d9>d11,h12>h2,h12>d12,h10>h12,h10>s10,c3>s3,c3>c9,c11>c6,d5>d9,d3>d5,h6>s6,s12>s13,s12>c12,s12>s2,h6>h1,s7>s12,d7>s7,d10>d7,h3>h6,d10>h10,d3>d10,h3>d3,c4>s4,c4>c11,c3>c4,h3>c3,

h4,h11,h5,c3,d8,c5,s2,h10,s8,d9,c12,h1,h7,s11,s3,c8,s9,c6,s12,c7,c9,d3,h2,d1,h12,c1,d7,c4,d4,d10,c2,s10,s1,s5,c13,h3,s4,s13,s6,h9,c11,d12,d11,d6,h6,h13,s7,d2,h8,c10,d13,d5  
**805/1000: solving: solved in 384255 tries.**  
h11>h4,h5>h11,c5>h5,c3>c5,s8>d8,s2>s8,h1>h10,h7>h1,s3>s11,c9>c7,c9>s9,c9>c8,c9>d9,c9>c3,c12>c9,d3>s3,h12>s12,h12>h7,h2>h12,h2>s2,c6>c12,d1>d3,c1>d1,d4>c4,d4>d7,d10>d4,c2>h2,c2>c6,c1>c2,s10>d10,s1>s10,s5>s1,d11>d12,d11>c11,d6>d11,h6>d6,h6>h9,h6>s6,h6>h3,s7>s4,s7>s5,s13>s7,c13>s13,d13>d2,h8>h6,h13>h8,d13>h13,c10>c1,c13>c10,d13>c13,d5>d13,

d1,d7,d6,c13,d3,c2,h11,d10,s5,c4,d2,c8,d11,c10,c6,s7,h12,h9,s3,s12,s2,c5,s1,s6,h7,c1,c3,s8,h10,h13,c12,s10,h3,c7,h5,h8,s13,h1,s9,h4,c9,h2,d12,d5,d4,s4,d13,c11,s11,d8,d9,h6  
**806/1000: solving: solved in 93666 tries.**  
d7>d1,d6>d7,d10>d3,c4>c2,c6>c10,h9>h12,s12>s3,s2>s12,s6>s1,c1>c5,c3>c1,h13>h10,s10>s8,h1>h5,s9>s13,h4>h1,c9>s9,c9>c7,h8>h4,h2>h3,s11>s4,d13>d5,d8>d4,d8>h8,d12>d8,d12>c12,d13>d12,d13>h13,h2>h7,h2>s2,h2>h9,s6>s7,s6>c6,s11>s10,s11>s6,s11>d11,s11>s5,s11>h11,d2>d10,c11>c3,c11>s11,c11>c4,c8>c11,c9>c8,d9>c9,d9>d6,d13>c13,d13>d9,d2>d13,h2>d2,h6>h2,

s11,h2,d3,s2,s9,h10,h1,d5,s8,c3,s13,d2,c10,c7,d1,h12,s5,s10,d6,d11,s6,s3,d13,d10,c11,h3,d4,c2,c9,d12,d8,h13,s1,c5,s7,c6,h7,s4,c4,h11,h9,d9,c8,h6,c12,s12,h4,h5,h8,c13,d7,c1  
**807/1000: solving: solved in 12552 tries.**  
s2>s11,h2>s2,h10>h2,h1>h10,c10>c3,c7>c10,d1>d2,s5>s13,s5>d5,s5>s9,s8>s5,d1>d3,d1>h1,s10>s8,d11>d6,s3>s6,d10>d13,c11>d11,c9>c2,d8>d12,s4>s7,c4>s4,c4>c5,c6>c4,h7>h13,h11>h7,h9>h11,d9>h9,d9>d4,c9>d9,d8>d10,c8>c9,h6>c6,h4>h6,h5>h4,h8>h5,h8>h3,h8>d8,h8>h12,c8>h8,c11>c8,s12>s3,s12>s10,s1>s12,c1>c12,c1>s1,c7>c1,c13>c11,d7>d1,c7>d7,c13>c7,

d5,s9,s10,c5,d8,s4,h2,c2,d13,d6,h3,s3,s1,s7,h9,c9,d12,s11,c11,h13,s6,c12,s8,h7,c8,h12,c6,c13,c1,d2,d9,d7,h10,s12,c3,s13,d10,c7,d1,h5,h11,d3,h8,c10,s2,d4,c4,h1,s5,d11,h6,h4  
**808/1000: solving: solved in 8915 tries.**  
s10>s9,d8>d5,c2>h2,d6>d13,s3>h3,s3>s4,s1>s3,s7>s1,c9>h9,c11>s11,c12>c11,c12>d12,c12>c9,s6>d6,s8>s6,h7>h13,c8>s8,c8>c2,c12>c8,h12>h7,h12>c12,c6>c5,c13>c6,c1>c13,d9>d2,d7>d9,s12>h12,s12>s7,d10>h10,d10>d7,d10>s10,d10>d8,d3>d1,d3>c3,d3>d10,h8>h11,c4>c10,c4>c7,c4>c1,s13>s12,s5>s2,s5>s13,h5>s5,d4>c4,h8>h5,h1>h8,d11>d3,d4>d11,h6>h1,h4>h6,h4>d4,

s9,h9,h5,d12,s11,h3,s6,s4,d11,s1,c9,c3,s7,h8,d2,h12,c12,h1,h13,d13,c6,c1,s5,c2,c5,s3,h7,d10,s2,h4,d6,h10,h2,d4,s8,h11,d5,c8,d3,s12,c4,s10,s13,c13,c7,c11,d1,h6,c10,d9,d7,d8  
**809/1000: solving: solved in 1002349 tries.**  
h9>s9,h5>h9,h3>h5,s6>s11,s4>s6,c3>c9,c12>h12,h1>h8,h1>s1,c12>c3,d13>h13,d13>d2,c6>c12,c1>c6,c1>h1,s7>s4,c2>c1,c5>s5,s2>s3,s2>c2,d10>d13,h4>h7,d6>d10,h10>h4,h2>h10,h2>s2,d5>d4,d5>c5,d5>d6,h11>h2,c8>s8,s13>s12,c7>c4,c13>s13,c7>c13,d9>d1,d7>d9,d7>c7,d7>d5,d7>s7,d7>d12,c10>s10,c11>c10,d8>d3,d8>c8,d8>d7,d11>d8,h11>d11,h6>h3,h11>h6,c11>h11,

s10,h13,s6,d13,s13,s1,d3,c2,d11,c11,h2,h10,c1,c13,h5,c12,d9,h4,d6,s9,s11,s12,d7,c8,s4,d5,h8,s7,d4,s8,c3,s3,s2,d12,c10,h11,h12,d10,h9,d1,h3,c7,c9,h7,c4,c5,h1,c6,s5,d8,h6,d2  
**810/1000: solving: solved in 76489 tries.**  
s13>d13,s13>s6,s13>h13,s13>s10,s1>s13,c11>d11,c11>c2,h10>h2,c13>c1,h4>h5,d6>d9,s11>s9,s12>s11,s4>s12,s4>h4,d7>d6,d4>d5,s8>s7,s8>h8,c3>c8,s3>s8,s2>s3,h12>h11,d10>d12,c10>d10,c10>c3,h9>h12,c9>c7,c9>h9,h7>h3,c4>c9,c4>c10,c4>s4,c4>c13,d1>d7,d4>c4,c12>c11,d4>d3,h6>c6,h6>h7,h6>h10,d1>d4,h1>h6,c5>c12,s5>c5,h1>s1,d1>h1,s2>s5,d2>d8,d2>s2,d2>d1,

c7,c12,h3,c4,d10,s12,c13,c9,d12,h7,h9,d13,d5,c10,s6,d11,h11,s9,c3,c6,s11,d4,h8,s8,h2,d7,c8,h1,s1,c5,h10,d6,s10,d8,h6,d3,h5,s7,c1,s2,c11,d2,d1,s4,s13,s3,h12,s5,h13,d9,c2,h4  
**811/1000: solving: solved in 474532 tries.**  
c12>c7,c13>c4,c9>c13,d12>s12,d12>d10,d12>c12,h9>h7,h9>c9,h9>h3,d5>d13,d11>d5,h11>d11,h11>h9,s9>s6,c6>c3,s8>h8,d7>d4,s1>h1,s1>s8,c5>c8,h6>d6,h6>h10,d3>d8,s7>s10,h5>h6,s2>s7,s2>h2,s2>s1,c1>c5,d1>d3,c11>c1,c11>s11,c11>c6,d1>d7,d2>d1,s13>s2,s3>s13,h4>h13,h4>s4,h12>h4,s5>s3,s5>s9,h5>s5,h12>h5,h12>d12,h11>h12,c11>c10,c11>h11,c2>c11,d2>c2,d9>d2,

h5,d11,s10,s12,d10,s11,d8,c9,h8,h7,d12,d4,s4,d9,h9,s1,c3,d6,h12,h13,s2,d5,s13,c5,d1,d2,s6,h4,d3,s3,c8,s7,s5,h3,c7,h6,c6,c2,h2,h11,c1,s8,c13,c11,c4,s9,d13,h1,d7,c10,h10,c12  
**812/1000: solving: solved in 3669225 tries.**  
s12>s10,s11>d11,s12>s11,d8>d10,h7>h8,d12>d8,d12>s12,h7>h5,s4>d4,d9>d12,c9>d9,h9>h7,c9>h9,s1>s4,h13>h12,d5>d6,s13>s2,s13>h13,s13>s1,c5>d5,c5>c3,d2>d1,s6>s13,s3>d3,s5>s7,c7>c8,h3>s3,h3>h4,h6>h3,c6>h6,c6>s6,c11>c1,c4>c11,c4>c2,h11>h2,c13>c4,s9>s8,h10>h1,h10>h11,d13>c13,c10>h10,c12>c10,d7>d13,d7>d2,c7>d7,c7>c9,c6>c7,c12>c6,c5>c12,s5>c5,s9>s5,

h6,s10,h11,h5,c5,h12,s1,c13,s5,d11,s8,h2,c10,d7,h1,d5,h8,c6,c12,d8,d13,d1,d10,s7,h7,d9,s13,c7,d4,h9,s6,d12,c8,h3,d2,s12,d6,c2,c3,s9,s2,c1,d3,h10,s11,h13,s4,c4,c9,c11,h4,s3  
**813/1000: solving: solved in 28252 tries.**  
h5>h11,c5>h5,h12>h6,s5>c5,s5>s10,s1>s5,s8>s1,c10>c13,c12>c6,d8>d5,h8>d8,h8>h1,d13>d7,d1>d13,d10>d1,d10>c10,d11>d10,h2>h12,h8>h2,s8>h8,s7>s8,h7>s7,c7>c12,h9>d9,h9>h7,d4>d11,s6>s13,d12>d4,c2>d2,c3>c2,c3>h3,s12>s6,c3>c8,s9>s12,s9>h9,c3>c7,d3>d6,d3>c3,d3>d12,s11>s2,h13>h10,s4>s11,c9>c1,h4>h13,c11>c9,c4>h4,c4>c11,s3>d3,s3>s9,s4>s3,c4>s4,

d6,c3,c1,h13,d7,c2,c9,s4,d4,c5,d12,c4,s5,s10,h3,h9,c8,d10,s1,h8,h7,s13,s8,d8,d5,s11,c12,h10,h12,c10,h5,s12,h2,s2,h4,d9,d11,d3,h6,s6,h1,d1,c13,d2,s3,s9,s7,c7,c6,c11,h11,d13  
**814/1000: solving: solved in 4741 tries.**  
c1>c3,d7>d6,c9>c2,d4>s4,c4>d4,c4>c9,c5>c4,s10>s5,h9>h3,d10>s10,d10>d12,h9>h13,h7>h8,s8>s13,s8>c8,s1>s8,d8>d10,d5>d8,d5>c5,d5>d7,h10>h7,h12>c12,c10>h10,c10>c1,s11>s1,h5>h12,s2>h2,s2>s12,d11>d9,d3>d11,s6>h6,h1>h4,s6>s2,d2>d3,d1>d2,d1>h1,s3>s6,s9>s3,s9>h9,s11>s9,h5>d5,s7>s11,c7>s7,c7>c10,c6>c7,c11>c6,d13>d1,c13>d13,h11>h5,c11>h11,c13>c11,

h13,d1,h9,s10,d8,c8,s11,d6,c1,d10,c10,h12,s2,s1,c12,s7,s3,h10,h8,c6,s8,c9,c7,h2,h4,d2,d3,h1,s4,s5,d13,d11,h3,c11,s13,d7,d9,c13,d4,d12,c2,s9,d5,h5,h7,c4,h11,h6,s6,s12,c5,c3  
**815/1000: solving: solved in 26766 tries.**  
d8>d1,c8>d8,s11>s10,c10>d10,c10>c1,s1>s2,c12>c10,h12>c12,h12>h9,s7>s1,s3>s7,h8>h10,c6>d6,c6>c8,s3>s11,s8>h8,s8>s3,c9>c6,c7>c9,h4>h2,d3>d2,s4>h4,s4>s8,h1>h12,d11>d13,h3>d3,c11>d11,d9>d7,c13>c11,s13>c13,s13>s5,d4>d9,d4>s4,h6>h7,s6>h6,s12>s6,s12>s9,s12>s13,d12>s12,c4>c2,c4>d4,d5>d12,h5>d5,h5>h1,c5>c4,c5>h5,c5>c7,c3>c5,h3>c3,h3>h13,h11>h3,

d5,c8,s13,h10,s12,h2,s1,h3,s10,c13,d2,h12,c6,c4,d13,d11,c10,d4,s5,h6,s8,h11,c1,c12,c9,h5,h7,d6,h9,s6,s9,h13,h1,d10,d3,d8,c11,s3,h8,d9,s7,d12,c5,s4,d1,h4,s2,d7,c2,s11,c7,c3  
**816/1000: solving: solved in 82788 tries.**  
c6>c13,c4>c6,d11>d13,c12>c1,c9>c12,h7>h5,h9>c9,h9>h11,h7>h9,d6>h6,s6>d6,s6>s5,s8>s6,h1>h13,d3>d10,d8>d3,h8>d8,h8>h1,h8>s8,h7>h8,d9>s9,s7>s3,s7>h7,d7>d1,d7>d12,d7>s7,d7>d4,d9>d11,h4>s4,c2>c5,c2>c10,c2>d2,c2>c4,h12>h3,h12>s12,h2>h12,s1>s13,s10>s1,h10>s10,c11>c2,c11>c8,d7>d9,h4>h10,h2>h4,d7>d5,s2>h2,s11>s2,c7>d7,c3>c7,c11>c3,s11>c11,

s8,c1,s9,s7,c10,d4,c2,d2,d11,h3,d13,c9,s2,h7,d12,d6,s12,c3,d3,h2,d5,h12,h13,s4,d10,d1,c12,c7,h8,c4,h1,s1,c13,s3,c6,s11,s13,h6,s6,h10,c11,c5,h11,s10,h4,s5,d7,c8,d9,h5,d8,h9  
**817/1000: solving: solved in 6354 tries.**  
s7>s9,d2>c2,d2>d4,d11>d2,d6>d12,s12>s2,d3>c3,d3>d6,h13>h12,d10>d5,d1>d10,c7>c12,h8>h13,c4>c7,c4>s4,h1>d1,h1>h2,h8>h1,s13>s11,s13>c13,s13>s1,s3>s13,s3>d3,c6>c4,h6>c6,h6>h8,s6>h6,s6>s3,c5>c11,s10>h10,s10>s6,s5>c5,s5>s12,h4>h11,d7>h7,h5>h4,h5>s5,d9>d7,d9>d13,c8>c9,h9>h5,h9>h3,d9>h9,d9>d11,d8>d9,c8>d8,s10>s7,c10>s10,c10>c1,c8>c10,c8>s8,

d5,h1,h7,d7,d3,h13,d8,c5,d6,d4,c6,h4,s4,h11,d1,s9,c13,c4,s7,d9,c8,d11,c7,h9,s10,s2,c9,h5,s6,c12,d12,s1,s13,h10,s3,s8,s12,c11,h8,h6,d2,c10,h3,c1,c3,h2,h12,c2,d13,s11,d10,s5  
**818/1000: solving: solved in 4623 tries.**  
h7>h1,d7>h7,d7>d5,d3>d7,d4>d6,s4>h4,s9>s4,c4>c13,d9>d1,c7>s7,c7>c4,c8>c7,d11>h11,d11>d4,d9>s9,s2>s10,c9>c8,c9>d9,c9>c6,h9>c9,d12>c12,s13>s1,s8>s3,s12>s8,s12>d12,s12>s6,s13>s12,h6>h8,c10>c11,c10>h10,h6>h5,c1>c10,h2>d2,h2>h6,h3>h2,c2>c1,c2>s2,c3>c2,c3>c5,c3>d3,d11>d8,h12>h9,h3>h12,h3>c3,h13>h3,d13>h13,s11>s13,d10>d13,d11>d10,s11>d11,s5>s11,

c7,c12,s2,d12,d13,s7,d1,h9,h13,c9,h12,h1,c5,s12,c1,c10,h4,d2,d10,s1,h6,h8,d6,d11,s6,d3,s9,s4,s13,s8,c11,c13,c6,h5,d8,c3,d7,c4,s11,c2,h2,s5,h10,c8,h3,s10,d4,d9,d5,h7,h11,s3  
**819/1000: solving: solved in 7234 tries.**  
c12>c7,d13>d12,h13>h9,h13>d13,h1>h12,c1>h1,c1>c9,c1>d1,c5>c1,d10>d2,h6>h4,h8>h6,d11>d6,s4>s9,s13>s4,s8>s13,c13>c11,c6>c13,c6>s6,d8>d3,s8>d8,c3>c6,s8>s1,d7>d11,h2>c2,h2>h5,s5>s11,c8>c4,h10>h2,h3>h10,h3>c3,c8>s8,c8>c10,h8>c8,h3>h8,d7>d10,d4>d7,d9>d4,d5>d9,d5>c5,s5>d5,s5>s7,s12>s5,s12>c12,s2>s12,s10>s2,h3>h13,h11>h7,s3>s10,h3>s3,h11>h3,

d13,c13,s4,d7,d4,s2,s3,c4,c6,s13,c10,d3,d5,s5,c11,h6,h2,h9,h3,s11,s12,h11,d6,h12,s1,s9,h1,c9,s10,h10,s7,c8,h5,h13,h4,h7,d1,d2,h8,d11,c12,d8,d12,c1,d9,s8,c7,c3,c5,d10,c2,s6  
**820/1000: solving: solved in 14018 tries.**  
c13>d13,d4>d7,d4>s4,s3>s2,c4>c13,d4>c4,d5>d3,s5>d5,h2>h6,h9>h2,h3>h9,s11>s5,c11>s11,c11>c10,s12>s13,h11>h3,h11>c11,d6>c6,h12>h11,h12>s12,s1>s3,s9>s1,h1>h12,c9>s9,h10>s10,h10>h1,h5>h10,h13>h5,h4>h13,h4>d4,c8>c9,h7>s7,h7>h4,d1>d6,d2>d1,h8>h7,c8>h8,d12>d11,c12>c8,c7>c1,c3>c7,c5>c3,d9>d12,d8>d9,c2>c5,c2>c12,d2>c2,d10>d2,d8>d10,s8>d8,s6>s8,

h11,d1,s10,d2,h4,d9,c2,s2,c1,s3,c12,d8,d12,c6,h8,s12,h5,c4,c5,c10,c7,s7,s11,h3,s4,s5,s8,h12,s13,h13,c9,c8,h1,d11,d3,d10,h2,h10,d13,c3,s1,s6,s9,d6,c13,d4,h6,d5,c11,h9,d7,h7  
**821/1000: solving: solved in 22352 tries.**  
c2>d2,s2>c2,s2>s10,h4>h11,c1>d1,d8>d9,d12>c12,s12>d12,s12>s3,h8>d8,h8>h4,s12>s2,c5>c4,c5>h5,c5>c6,c10>c5,c7>c10,s7>c7,s7>s12,s11>s7,h3>h8,s4>s11,s5>s4,s8>s5,h12>h3,s13>s8,h13>s13,c8>c9,h1>c1,h1>h12,h13>h1,d3>d11,d10>d3,h10>h2,h10>d10,s6>s1,s9>s6,c13>c3,h9>h6,d5>d6,d7>d4,h9>s9,d7>d5,h7>h9,h7>h10,d7>h7,d13>d7,c13>d13,c13>c8,c13>h13,c11>c13,

s4,h7,h4,c7,d4,d7,s1,h11,c9,c1,h10,c13,s10,s13,s6,c2,s8,s3,c6,h5,d2,d12,h2,d10,d5,s11,s5,h3,h9,s9,c5,h6,c12,c10,d3,d13,c3,s7,d9,c4,h1,d11,s2,h13,c11,d6,d8,h12,h8,d1,s12,c8  
**822/1000: solving: solved in 39393 tries.**  
h4>h7,h4>s4,d7>d4,d7>c7,h11>h4,c1>c9,c1>s1,h10>h11,c13>c1,s10>h10,s13>c13,s6>s13,s3>s8,c6>s6,c2>c6,s3>s10,d2>d7,c2>d2,h2>c2,h5>h2,d10>d12,d5>d10,d5>h5,s5>s11,s5>d5,s5>s3,h9>h3,s9>h9,s9>s5,c10>c12,c3>c10,d3>c3,d9>d3,d9>s9,d13>d9,c4>c5,c11>d11,h12>h13,h12>h1,d1>d6,d8>d1,s12>s2,s12>s7,h12>s12,h12>h6,h8>h12,c8>h8,c8>c4,d8>d13,c8>d8,c11>c8,

h6,s13,d5,h11,s8,h9,c7,s4,d6,d13,c2,h13,d3,s6,s10,d1,c10,d9,s2,c4,c5,h5,h8,h7,s1,s12,h3,c6,d7,s9,d4,c12,s5,h12,s11,d11,c8,d8,d2,c9,c11,d12,c3,s7,h1,h4,h2,c1,h10,c13,s3,d10  
**823/1000: solving: solved in 97611 tries.**  
h11>h6,s4>s8,d13>d6,d3>d13,s10>s6,c4>c10,c5>c4,h5>c5,h5>h13,d9>d1,h7>h8,s12>s1,s5>s9,h12>c12,s11>s5,d11>s11,d11>d7,d4>d11,h12>h3,h12>s12,h12>h7,d8>c8,d8>d4,d2>d8,d2>s2,d2>d9,c9>c6,c11>c9,d12>d2,h12>d12,c1>h1,h2>h4,c13>c1,c13>c11,c3>c13,h2>h12,h2>c2,h2>h9,h5>h2,c3>c7,d3>c3,d3>d5,h10>h5,s7>s4,s3>s7,s3>d3,h10>h11,s3>s13,s10>s3,s10>h10,d10>s10,

s5,d1,h1,h12,d5,h8,s9,s12,c9,s7,d6,h6,c13,s1,d7,h10,h11,h7,d3,c8,h9,d9,s2,c2,d12,h2,h5,d10,s4,d2,c12,d4,h13,c5,s6,d13,d11,c11,h4,s8,c4,c3,c1,c7,h3,c10,s3,s13,s11,d8,c6,s10  
**824/1000: solving: solved in 2037 tries.**  
h1>d1,h12>h1,s12>s9,s12>h12,s12>s5,h6>d6,h6>h8,d7>s7,d7>d5,c13>c9,h10>h6,h11>h10,h7>h11,h7>d7,s1>s12,d9>h9,c2>s2,h5>h2,d4>s4,d4>d10,d2>d4,d2>c2,d2>d9,d12>d2,c12>c8,d12>c12,d12>d3,h5>h7,h13>h5,c13>h13,d13>d12,d13>c13,s6>s1,c11>d11,c11>c5,c4>c11,h4>c4,c1>c3,c7>c1,h3>h4,c10>c7,s3>h3,s13>s3,s11>s13,s8>s11,d8>d13,s8>d8,s8>s6,s10>s8,c10>s10,c6>c10,

c11,h3,d12,h9,d6,h10,h5,s9,c5,c9,d1,d5,h4,d9,h12,c4,d2,h2,s6,d13,c13,c7,d8,c3,c6,s8,h8,d7,s4,h11,s10,s7,h6,c12,c1,h1,d11,s12,s5,h13,d10,h7,c10,s2,s13,s3,c2,s1,s11,d4,d3,c8  
**825/1000: solving: solved in 579055 tries.**  
h5>h10,s9>h9,c5>h5,c9>c5,d5>d1,d9>c9,d9>d6,d9>s9,d9>d12,d5>d9,h12>h4,d2>d5,h2>d2,h2>h3,h12>h2,c13>d13,c7>c13,c6>c3,c6>s6,c6>c4,c7>c6,s8>d8,h8>s8,h11>h8,h11>c11,h12>h11,d7>c7,s10>s4,s7>s10,s7>d7,s5>s12,d10>d11,h7>h13,c10>d10,c2>s2,s11>s13,s11>s5,s3>s11,d3>d4,c8>c2,c8>c10,c8>c12,c1>c8,h1>c1,h1>h6,s1>h1,s3>s1,h7>h12,s7>h7,s3>s7,d3>s3,

d7,c7,d8,h10,s3,s5,s6,h5,h1,c10,d11,d6,c12,s13,d13,s12,s10,c8,h11,h12,d12,d5,d2,c6,h4,c13,h2,s2,c4,c11,h9,d1,d9,h6,c3,d3,s9,s7,h7,h8,h13,d4,d10,s11,c9,s1,c1,c2,h3,s4,c5,s8  
**826/1000: solving: solved in 261614 tries.**  
c7>d7,s5>s3,s6>s5,h1>h5,c10>h10,d6>d11,d13>s13,s10>s12,c8>c12,h12>h11,d12>h12,d5>d12,d2>d5,s2>h2,c4>h4,c4>c6,c13>c4,c13>d13,c13>c8,d2>d6,s2>s10,d9>d1,d9>h9,c3>c11,d3>c3,d3>d2,d9>d3,s7>s2,h8>h6,h7>s7,h8>h7,h13>c13,h8>h13,s11>s9,d4>d9,c5>c2,c5>c9,s1>s11,d10>d4,s1>h1,s1>s6,d10>d8,c10>d10,c10>c7,c5>c10,c1>c5,s1>c1,s4>s1,s8>s4,h8>s8,h3>h8,

c11,s8,c3,d11,s2,c10,h11,h5,h6,s11,h3,s9,c7,s4,c9,s1,d6,d12,c4,d8,d7,h12,d5,s7,c6,s10,d13,c8,h9,h8,d1,s12,h10,c12,d2,h2,c1,s3,d9,s6,c5,s13,d3,d4,h13,h4,h1,s5,d10,c13,c2,h7  
**827/1000: solving: solved in 10970 tries.**  
d11>c11,h5>h11,h6>h5,s11>s2,s11>d11,s8>s11,c10>c3,h3>h6,s9>s8,d12>d6,c4>c9,c4>s4,c4>c7,d8>d12,d7>d8,s7>d7,s7>s1,h12>h3,c6>c4,h8>h9,h8>c8,h10>h8,c12>s12,h2>d2,h2>h10,c1>c12,d9>d1,c5>c1,s6>s3,s13>s6,d3>d9,h4>h13,h1>h4,d10>d4,d10>d3,d10>s10,d10>d5,d13>d10,s13>d13,s13>s7,c5>c6,h2>h12,s5>c5,s5>s9,s13>s5,c13>c10,c13>s13,c2>c13,h2>c2,h1>h2,h7>h1,

d4,d10,d1,d2,s11,c5,h1,d5,s9,h6,h2,c1,h5,c7,c10,h11,s3,s13,s8,d7,c11,c9,d6,h10,c3,c8,c6,h12,h7,c4,d12,s2,h13,d3,s4,c13,h4,s10,d11,h8,s7,d13,s1,s6,s12,d8,h9,d9,h3,c2,c12,s5  
**828/1000: solving: solved in 906266 tries.**  
d10>d4,d1>d10,d2>d1,h6>h1,h2>h6,h2>d2,d5>c5,h5>d5,c7>c1,c10>c7,h11>h5,h11>s11,h11>h2,s13>s3,s8>s13,c11>c10,c9>c11,c9>s9,d6>d7,c8>c3,c8>s8,c8>c9,h10>h11,c6>d6,c6>c8,h7>h12,s4>s2,d3>d12,h4>s4,h4>h7,c4>h4,c4>c6,c13>c4,s6>s1,d8>d13,s12>s6,d9>d8,d9>d11,h9>h8,h9>d9,h3>h9,h3>d3,h13>h3,s10>h10,c12>c2,s5>s7,s5>s10,s12>s5,c12>s12,c13>c12,h13>c13,

d4,s2,s6,h9,d9,s4,s10,s5,d3,d6,s13,h11,d7,h2,h1,h8,h6,c8,h13,c12,s1,c13,d13,s3,c3,c4,c11,c2,c10,c7,s11,s9,s8,c6,h10,h4,d5,d11,d8,d2,d12,d1,d10,c5,h5,h7,h3,h12,s7,s12,c1,c9  
**829/1000: solving: solved in 9982 tries.**  
s6>s2,d9>h9,s4>d4,s6>s4,s5>s10,d6>d3,d6>s6,d9>d6,s13>s5,d7>d9,h2>h11,h1>h2,h8>h1,h6>h8,h13>s13,h6>h13,c12>c8,d13>c13,c3>s3,c3>c12,c4>c3,c11>c4,c2>c11,c10>c2,c7>c10,s9>s11,s8>s9,h4>h10,d11>d5,d8>d11,d8>s8,d8>d13,c6>c7,c6>h6,d8>d7,d10>d2,d12>d10,d1>s1,h5>h4,h7>h5,h3>h7,h12>h3,s12>s7,c9>c5,s12>h12,d12>s12,c9>c6,c1>c9,d1>c1,d1>d8,d12>d1,

c9,c5,h5,c8,d11,s6,s5,c7,h4,d1,c13,c12,c3,d9,s11,s9,h1,c1,h8,s2,s13,s3,s10,h2,d5,s8,h3,h10,c2,h6,d12,d6,c11,d8,h13,s1,h12,h9,c10,c6,s7,h7,d4,d10,c4,d2,h11,s12,d13,d7,s4,d3  
**830/1000: solving: solved in 19985 tries.**  
c5>c9,h5>c5,s5>s6,s5>h5,d1>d11,c12>c13,c3>c12,s9>s11,s9>d9,h1>h4,c1>h1,c1>c7,c1>d1,c1>c8,c3>c1,s13>s2,s3>s13,s3>c3,s3>s5,s9>s3,s8>s10,s8>h8,s8>s9,h10>h3,c2>h2,h6>h10,d6>d12,d6>h6,d6>d5,h9>h12,c6>c10,s7>s1,h7>s7,h7>h13,c4>c6,d4>c4,d2>d10,h11>h9,h11>c11,d2>d8,d2>c2,d6>d2,h7>h11,d7>d13,d7>h7,d7>d6,s12>s8,s4>s12,d4>d7,d4>s4,d3>d4,

s4,s8,h9,h13,h11,h12,d9,h7,h10,s3,d2,c9,s6,c5,s13,d10,c8,d1,d7,s12,c3,h5,c11,s9,d3,d5,c10,h4,c13,d12,d8,d11,s1,h3,c2,h8,s7,h2,h1,c12,d13,d6,s10,s5,s2,c4,d4,c6,c7,s11,h6,c1  
**831/1000: solving: solved in 40477 tries.**  
s8>s4,h13>h9,h11>h13,h12>h11,h10>h7,d2>d9,c8>c5,d1>d10,d7>d1,d5>d3,d5>h5,d5>d7,c11>c3,d8>d12,d11>d8,h2>c2,h2>h3,h8>h2,h1>s1,h1>h4,h8>h1,d13>d11,d13>c13,d6>d13,s5>s10,s2>s5,c7>c4,c7>s7,c7>c10,c12>c7,c12>s12,c12>c8,s9>s13,d6>d5,c11>c12,s9>c9,s11>s2,s11>c11,s11>s3,s9>s11,s6>s9,h8>h10,h8>s8,h12>h8,d4>d2,d6>s6,d6>d4,h6>h12,d6>h6,c6>d6,c1>c6,

h11,h12,c4,h7,h1,h6,c2,d3,d11,d13,s13,h3,d10,s5,d12,s2,s7,d8,s12,h8,s6,c3,h5,c9,s8,c8,c11,c10,d5,s4,d4,c7,s9,d2,c6,d7,c12,s11,h10,s10,h4,s3,d6,h9,c13,c1,s1,c5,h2,h13,d1,d9  
**832/1000: solving: solved in 25802 tries.**  
h12>h11,h1>h7,h6>h1,d11>d3,d13>d11,s13>d13,h3>h6,s7>s2,s12>d12,s12>s5,s7>s12,h8>d8,h5>h8,c9>c3,c8>s8,c8>c9,c11>c8,c10>c11,d5>h5,d4>s4,d4>d5,c7>c10,c7>s7,c7>c2,d4>d10,d2>d4,s9>s6,d7>d2,c12>c6,s10>h10,c5>c13,c1>c5,s1>c1,s1>s3,s1>s11,h13>h2,d9>h9,d1>d6,d1>s1,d9>d1,d9>d7,s9>d9,c12>c7,c12>h12,c4>c12,s10>s9,h4>h3,h4>c4,h13>h4,s13>h13,s10>s13,

d2,s10,s2,h13,h9,c11,d11,s1,c9,c12,s13,s8,h2,d6,h7,c4,h11,d7,c6,s6,h12,d4,c5,c8,d3,h6,h3,d12,s9,d13,h5,s12,s5,c7,s4,h8,d8,d10,d1,s7,c3,s11,d9,c13,d5,c1,s3,h1,c10,c2,h10,h4  
**833/1000: solving: solved in 120552 tries.**  
s2>s10,s2>d2,h9>h13,d11>c11,s1>s2,c12>c9,s8>s13,d7>h7,d7>d6,h11>h2,h11>d11,h11>h9,s8>s1,c6>c4,s6>c6,h12>c12,h12>h11,s6>s8,d4>d7,c8>c5,h3>h6,h3>d3,h3>h12,s12>s9,s12>d12,d13>d4,s5>h5,s5>s12,d8>h8,d1>d10,s7>s4,s7>c7,d8>c8,d8>d13,s5>s6,s11>s7,s11>s5,d9>d8,c3>h3,d5>d9,d1>d5,c1>c13,c1>d1,s3>s11,c3>s3,c10>c3,c2>c10,c1>c2,h1>c1,h10>h1,h4>h10,

s8,h2,d8,s5,d4,h8,s6,d12,s4,d7,s12,h4,c6,h12,c10,s13,c7,c9,s3,h10,d10,d9,c8,h1,s7,d13,h7,c1,h9,d6,h6,s10,d11,d2,h11,c13,d1,c2,d3,h5,s1,c3,s2,c11,c12,h3,h13,c5,s11,s9,c4,d5  
**834/1000: solving: solved in 109577 tries.**  
s5>s8,d4>d8,d12>d4,s4>s6,d7>d12,s12>s4,h12>s12,h12>h8,h4>h12,c10>c6,c9>c7,d10>h10,d9>d10,c8>c9,s7>s3,c1>h1,c1>c8,d13>d9,d13>s13,d13>d7,c1>c10,h7>s7,h9>h7,h6>d6,h6>h9,d2>d11,h11>h6,c2>d2,c2>c1,c2>h2,h11>h4,c13>d13,d3>d1,s1>s10,h5>h11,c3>d3,c12>c11,h3>c3,h13>h3,h13>c13,h5>h13,c5>c12,s11>s1,s9>s11,s9>s5,s2>s9,c2>s2,c4>c2,c5>h5,c5>c4,d5>c5,

h8,c12,d1,s2,c7,h13,c3,d2,h7,c9,d13,c10,s6,h2,h10,c2,s1,s7,s10,s8,h11,d6,c6,h12,d4,h1,s11,s3,d11,d3,s4,s12,d12,d8,c1,c13,d10,d9,h5,h4,h9,c8,d7,s9,d5,s13,s5,h3,c11,c4,h6,c5  
**835/1000: solving: solved in 5859 tries.**  
c7>c12,d2>s2,d2>d1,h13>h8,h7>c7,h7>h13,c9>c3,h10>h2,c2>c10,c2>d2,c9>c2,s7>s1,s10>s7,s10>h10,s10>s6,s8>s10,d6>d13,c6>d6,c6>c9,h11>h7,h12>h11,s11>s8,s3>s11,d3>d11,d3>s3,d4>d3,h1>h12,s4>d4,s12>s4,d12>s12,d8>d12,c1>h1,c6>c1,d9>d10,h4>h5,h9>h4,c8>c13,c8>d8,c8>c6,s9>d9,d5>d7,s5>s13,h6>h3,c4>c11,c5>c4,c5>d5,c5>c8,s5>c5,s9>s5,h9>s9,h6>h9,

d4,c2,s8,d7,c9,s6,h1,d9,s9,d11,c3,h12,h10,d5,d12,d1,d13,s2,c6,d3,d2,c5,c10,h11,c4,d10,s13,h6,c13,h13,s1,c8,s12,c1,h8,c7,s5,s11,d8,h7,h5,s3,s4,d6,c11,s10,h3,h9,s7,c12,h2,h4  
**836/1000: solving: solved in 483924 tries.**  
d7>d4,d9>c9,d9>d7,s6>s8,h10>h12,d5>d11,d12>d5,d1>d12,d13>d1,c6>c3,d2>d3,d2>s2,d2>d13,c10>c5,c10>h10,c10>c6,d10>c10,d10>d2,h11>h1,s13>s9,h13>c13,h13>h6,h13>s13,h13>h11,c1>s1,c1>c4,c8>c1,s5>s12,d8>h8,d8>d10,h5>h7,s4>s11,s7>s10,s7>s3,s7>c7,s7>s5,s4>s7,c12>c11,h4>h3,h4>h5,h4>s4,h9>h4,h9>h13,h9>d9,d6>s6,d8>d6,c8>d8,c12>c8,h2>h9,c2>h2,c12>c2,

d7,s11,c2,h8,s9,c5,d11,c11,h9,d5,h11,d4,h6,h5,d13,h13,c12,c3,c1,h1,c7,h12,d2,s2,d8,s8,c13,s1,c4,s4,h10,s13,h2,s6,d9,s12,d3,d6,s10,c8,d12,h3,h4,h7,c6,s3,d10,c10,s7,s5,d1,c9  
**837/1000: solving: solved in 14326 tries.**  
s9>s11,c11>d11,c11>c5,h11>c11,h11>h8,h9>h11,d4>d5,h5>h6,h13>d13,h13>h5,c3>c12,c1>c3,h1>c1,h1>h13,s2>d2,s8>d8,s8>s2,c13>c7,s1>s8,s1>h1,s4>c4,s4>s1,s4>d4,s4>s9,h10>h12,d6>d3,d6>s6,d9>d6,s12>s13,s10>s12,s10>h10,h2>h9,h2>c2,h4>h3,h7>h4,s7>s3,c9>c10,c9>c6,c9>c8,c9>c13,s10>s4,d9>c9,h7>h2,s7>h7,d9>d7,d1>d12,d1>d9,d10>d1,s10>d10,s7>s10,s5>s7,

d8,s1,c6,s4,d1,h9,d7,c2,c3,d9,c4,h7,h1,s6,h4,c12,c9,c11,s11,d10,d11,s8,c1,h13,s12,c13,h8,h11,d5,s3,c10,d6,s7,c5,h10,d4,h6,d13,h12,h3,d12,s9,s5,s2,s10,h2,h5,c8,d2,d3,c7,s13  
**838/1000: solving: solved in 2028 tries.**  
d1>s1,d1>d8,c3>c2,d9>h9,d9>d1,d7>d9,c4>c3,c4>s4,c4>c6,h1>h7,h4>c4,h1>h4,c9>c12,c11>c9,s11>c11,s11>s6,d10>d7,d11>s11,c1>h1,h8>h13,h8>s8,h11>h8,h11>d11,c13>c1,d6>d5,h10>c10,h3>h6,d12>h12,d12>d13,s5>s9,s2>s5,d2>h2,d3>d2,d3>d12,d3>h3,d3>d4,s2>s7,s10>s2,s10>h10,s10>s12,s10>d10,d3>d6,s3>d3,h5>h11,s3>s10,c5>h5,c8>c5,c7>c8,s13>s3,c13>s13,c7>c13,

s10,c5,h9,d13,s6,c3,c12,s1,c1,s12,h5,d8,c13,h11,c9,h10,h13,c6,s8,d1,h6,s5,d11,s2,d4,s7,h2,c8,c10,d3,c11,d9,d2,c4,s13,d7,h3,s11,c7,s9,d5,h8,h1,h12,h7,s4,d12,c2,s3,d6,d10,h4  
**839/1000: solving: solved in 646737 tries.**  
c12>c3,c1>s1,c1>c12,h11>h5,c9>c13,h10>h11,h13>h10,c6>c9,d1>d8,d1>c1,s8>s12,h6>c6,h6>h13,h6>s6,s5>s8,h2>s2,c10>c8,d3>d4,c11>c10,d9>d3,d2>d9,d2>h2,d2>d11,c4>c11,s11>s13,d7>s7,d7>d2,h1>h8,h12>h1,h7>h12,s3>s4,s3>s9,h7>c7,s3>s11,s3>s5,h3>s3,h7>h3,d7>h7,d12>d7,d5>d1,d6>d12,d10>d6,d10>d13,d10>s10,h6>h9,d5>d10,c5>d5,h4>h6,c4>h4,c4>c5,c2>c4,

s3,s6,c6,s7,c13,s10,h4,c9,c8,h10,h7,s1,h12,c12,d6,s11,s5,h1,h5,s2,c7,c10,s9,h8,c11,c3,d9,d10,d3,d1,c4,h6,d12,h3,d5,h9,c5,s8,d13,h2,d11,d8,c2,h13,c1,h11,d4,s4,d7,s12,s13,d2  
**840/1000: solving: solved in 145609 tries.**  
s6>s3,c6>s6,c9>c13,c8>c9,h10>h4,h10>s10,h7>h10,s1>s7,h12>h7,c12>h12,c12>c8,d6>c6,s5>s11,h1>s1,h5>s5,c7>c12,c10>c7,s9>s2,c3>c11,d9>s9,d10>d9,d3>c3,d1>d3,h6>h8,d8>d13,d8>s8,h2>h9,c2>c5,h11>d11,h13>h11,d4>d8,d4>d5,d4>c4,d4>d10,d12>d4,h2>h6,c2>h2,h13>h3,c1>c2,c1>c10,c1>h1,h13>h5,s13>s4,s13>h13,d1>c1,d1>d6,s12>s13,d12>s12,d12>d1,d7>d12,d2>d7,

c4,d10,d1,s13,d2,s3,h9,s1,d3,c11,s4,d5,h5,c1,s8,s2,h4,c8,s7,h7,s6,c3,c12,h2,c7,d11,d8,d12,h13,h3,s5,d13,d7,c2,s10,h11,c6,c13,c10,s12,h1,h10,h12,h8,s9,d4,c5,c9,s11,h6,d9,d6  
**841/1000: solving: solved in 7068 tries.**  
d1>d10,d3>s3,d3>d2,s1>s13,s1>d1,h5>d5,h5>h9,s2>s8,h4>s4,h7>s7,s6>s2,c12>c3,c7>h7,c7>c8,c12>c7,d8>d11,d12>d8,h3>h13,d13>d12,d7>d13,c6>c2,c13>c6,c10>c13,s10>c10,s10>s5,h10>h1,h10>s10,h10>h3,h11>h10,h12>s12,h12>h11,h12>c12,h8>h12,h8>h4,h2>h8,c9>s9,c9>c1,d4>d7,c5>c9,c5>h5,c5>c4,c11>c5,s6>s1,h6>h2,d6>d4,d6>h6,d6>d3,s11>c11,s6>s11,d6>s6,d9>d6,

d1,c3,c11,d8,s11,s13,s6,s12,h2,s5,s10,s3,h4,d3,c1,d10,s9,h8,d4,c9,s4,d12,d13,c10,d11,h7,d9,c6,c2,c4,h1,h6,h13,s2,h10,c12,d5,h9,d6,h5,c5,h12,s8,c13,h3,c7,d7,s1,h11,c8,s7,d2  
**842/1000: solving: solved in 74951 tries.**  
c11>c3,s13>s11,s6>s13,s12>s6,s10>s5,s3>s10,d4>d10,d4>h4,d3>d4,d3>s3,d3>d8,s9>s12,d13>d12,c10>c9,d11>d13,c2>c6,c4>c2,h1>h7,h6>h1,h13>h6,h9>h10,h9>d9,h9>h13,c4>s4,c4>c10,h9>h8,h9>s9,h2>h9,c1>c11,c1>d1,c4>c1,c5>d5,h12>h5,h12>c12,c13>c5,d7>c7,d7>d6,s7>s1,s7>d7,s8>s7,h3>h12,c8>c13,h11>h3,h11>h2,d11>h11,d11>d3,c8>c4,d2>d11,s2>d2,s8>s2,s8>c8,

c4,h3,d9,s3,h13,h10,d6,s12,s13,s5,h9,h12,c2,s11,s10,d10,c8,c7,d4,h1,d7,s7,c6,c5,c12,s1,h7,c11,c13,d11,d5,d1,s6,h6,h4,d2,c10,c3,d8,d12,d3,s2,s9,h8,c1,d13,h11,s8,s4,c9,h5,h2  
**843/1000: solving: solved in 172010 tries.**  
h13>h3,h10>h13,s13>s12,s5>s13,h12>h9,s11>s5,s10>s11,d10>s10,d10>d6,d10>h10,d9>d10,c8>c2,c7>c8,h1>h12,d7>d4,d7>c7,d7>d9,s7>d7,s3>s7,c6>c4,c5>c6,c12>c5,s1>h1,s1>s3,c11>c12,c13>c11,d5>d11,d1>d5,s6>s1,h4>h7,h6>s6,c3>c10,d3>c3,d8>d3,s9>s2,h8>d8,d13>d12,d13>d1,d13>c13,d2>d13,s4>s8,h5>h11,h2>h5,h2>h8,h2>d2,h6>h2,h4>h6,s4>h4,s9>s4,c9>c1,c9>s9,

h6,c12,s3,d12,s10,h10,d1,c10,s2,c7,d11,h4,c4,h3,s9,d10,s5,h1,h2,d5,s11,c11,s7,c6,c3,d9,h8,c2,d6,s6,c5,h12,h9,s4,h5,d3,h13,s8,d7,d4,c8,d2,s1,c13,c9,h11,s13,d13,s12,c1,h7,d8  
**844/1000: solving: solved in 32022 tries.**  
h10>s10,c4>h4,h2>h1,d5>d10,s5>d5,s5>s9,c11>s11,s7>s5,c6>c11,c3>c6,c3>h3,c3>c4,s7>c7,s7>s2,d11>d1,c2>h2,c2>c3,s6>d6,h12>h8,h9>h12,h9>d9,s6>s7,h5>h9,c5>h5,c5>c2,d7>d3,c13>c8,c13>h13,c13>c5,s1>s8,d4>s4,d7>d4,d13>s13,d13>d2,d13>c13,s1>s6,d7>d13,c1>c9,c1>c10,s1>c1,s12>s1,h11>d11,h11>h10,s12>s3,s12>c12,h11>h6,d12>s12,h7>h11,d7>d12,d7>h7,d8>d7,

d8,d5,d11,d10,d4,s4,h10,s10,s3,s2,h8,s11,s13,c8,c6,d6,d2,s9,h2,c11,c5,h12,s12,h9,d13,h4,s7,c1,s1,d12,h7,h13,s5,h3,d1,c13,s8,s6,c7,h11,d3,c4,c9,h1,c3,h5,c2,d7,c12,c10,h6,d9  
**845/1000: solving: solved in 6652 tries.**  
d5>d8,d11>d5,d10>d11,d4>d10,s4>d4,s10>h10,s10>s4,s3>s10,s2>s3,s13>s11,c6>c8,d6>c6,d2>d6,d2>s2,s9>s13,h2>d2,h8>h2,c5>c11,h12>h8,s12>h12,s9>s12,s1>c1,s1>s7,d12>d13,h13>h7,c7>c13,s6>s8,c9>c4,h1>h11,h1>d1,h1>h3,h1>s1,h1>h4,h13>h1,c10>c2,c10>c9,c10>c7,c12>c3,d7>d3,c12>c10,h6>s6,h6>h13,h5>s5,h5>h6,h5>c5,h9>h5,h9>s9,d9>d7,d9>h9,d12>d9,c12>d12,

h11,d6,c11,s9,c1,h10,h3,h8,c3,c6,s10,h1,d13,h4,h7,c2,h2,c9,s5,c10,c13,d4,d9,c4,d10,c7,c5,s4,s3,s11,h12,s2,d8,h5,h6,s1,d12,h13,d7,d11,d2,s12,s6,s8,s7,d3,d5,h9,c12,d1,c8,s13  
**846/1000: solving: solved in 20132 tries.**  
h3>h10,h8>h3,c6>c3,h1>h8,h1>c1,c6>c11,c6>d6,h1>h11,s10>s9,h7>h4,h2>c2,h2>h7,c13>c10,d9>d4,d9>c9,c4>c13,d10>d9,d10>s10,d13>d10,h2>h1,c4>c6,c7>c4,c5>s5,s3>s4,s11>s3,h5>h12,h6>h5,d11>d7,d2>d11,s12>d12,s12>s2,s8>s6,d3>d2,d1>d5,d1>d3,d1>d8,s1>d1,s7>s1,h13>h6,s7>s11,c12>s12,c8>c12,c8>c5,s8>c8,s7>c7,s13>s8,s13>d13,s13>s7,h13>s13,h13>h2,h9>h13,

h5,c10,s1,s10,s5,c3,s6,h6,c7,s4,c11,c2,h7,d4,d6,s12,h8,h11,c4,h12,d8,h4,c12,d7,d2,d1,c9,d10,d13,c8,d5,s3,h3,d9,c5,s9,h13,s11,h10,c13,s13,s8,c6,h2,h9,s2,s7,h1,d3,c1,d11,d12  
**847/1000: solving: solved in 12779 tries.**  
s10>s1,s10>c10,s5>s10,s5>h5,h6>s6,c2>c11,h7>c7,h7>h6,s4>s5,d6>d4,h11>h8,h12>s12,h12>h7,h11>h12,c12>c4,d2>d7,d1>d2,d13>d10,h3>s3,c5>d5,c5>c8,d9>d13,d9>c9,d9>d1,h3>h4,c13>h13,s13>c13,s13>s9,s11>s13,h2>h10,h9>h2,h9>d9,s2>s11,s7>s2,c6>c5,s8>s7,h1>h9,c1>c6,c1>h1,d3>h3,d3>d6,d3>c3,c1>c2,c12>c1,d8>d3,d12>c12,d11>h11,d12>d11,s8>s4,d8>s8,d12>d8,

h6,c10,d2,d7,c9,h7,d12,s6,c3,d10,d3,c11,s11,s8,h12,c12,h9,s1,c5,h1,d8,d1,h4,c1,c8,d6,d13,h3,d9,d11,s9,c7,s7,c6,h2,s3,h5,s13,h10,h8,s2,c4,d5,s12,c13,h11,s10,s5,h13,d4,c2,s4  
**848/1000: solving: solved in 27362 tries.**  
d7>d2,d12>d7,c3>c9,d3>d10,d3>c3,d3>d12,h7>h6,c11>c10,s11>s6,s8>s11,c12>h12,c12>c11,h1>h9,s1>h1,s1>s8,c5>c12,d1>d8,d1>s1,d1>d3,h4>h7,c1>d1,c1>c5,c8>c1,d13>d6,h3>h4,d9>d13,d11>d9,c7>c8,s7>s9,c6>c7,h8>h10,s10>s12,s5>s10,s5>s2,s5>h5,s5>s3,s13>s7,d5>s5,d5>d11,h8>h2,h11>h8,h13>h11,h13>s13,h13>h3,d4>d5,c4>d4,c13>h13,c2>c13,c6>c2,c4>c6,s4>c4,

s9,h6,d5,h13,d11,d13,s10,c9,h7,c13,d10,s13,d12,s7,s5,d1,s12,h11,c3,c11,c7,h12,s3,d2,h9,d3,c12,s8,c8,s1,h8,s6,h4,s4,h5,h1,h2,s11,c2,d7,h3,c4,c1,h10,s2,d6,c10,d9,d8,d4,c5,c6  
**849/1000: solving: solved in 22297 tries.**  
d13>d11,d13>h13,d13>d5,s10>s9,h7>h6,c13>c9,c13>d13,d10>s10,s13>c13,d12>d10,s7>s13,s7>h7,s5>s7,s12>d12,s5>s12,c11>c3,c11>h11,c7>c11,h9>h12,d3>d2,d3>s3,d3>d1,c8>s8,c8>c12,h8>h9,c8>h8,c8>c7,s1>s5,s6>s1,s4>h4,s4>s6,h1>h5,h2>h1,c2>c8,h10>h3,c1>c4,c10>c1,c10>h10,s2>s11,s2>h2,d9>d7,d8>d9,d4>d8,d4>d3,s2>s4,d6>d4,c5>c10,c6>d6,c2>c6,c2>s2,c5>c2,

d9,s2,c12,d2,h4,c9,c4,h10,s3,h3,c1,h11,c11,s1,d1,d7,d4,c13,s8,c2,c8,c3,h2,d13,s5,h12,c5,h5,h7,d3,s6,d8,c6,s13,s12,h1,c10,s7,s9,h8,s4,d11,d10,h13,s10,d5,c7,s11,h6,h9,d12,d6  
**850/1000: solving: solved in 2900 tries.**  
d2>d9,s2>d2,c4>c9,c4>h4,c4>c12,s3>s2,h3>h10,c11>h11,c11>c1,d1>s1,d7>d1,d4>d7,d4>c4,c13>c11,c8>c2,c8>s8,c8>c13,c3>c8,c3>h3,d13>d4,h5>c5,h5>h12,h5>s5,h5>h2,h7>h5,d3>d13,d3>s3,c3>d3,s13>s6,s12>s13,s9>s7,h8>h1,s4>s9,d10>c10,d10>d8,s11>s10,s11>s4,d11>s11,d11>d10,h13>h8,c7>c6,h9>h13,d5>d11,h6>h9,d12>d5,d12>s12,d6>d12,c7>c3,h7>c7,h6>d6,h6>h7,

h11,s7,s9,h12,c3,s2,h5,s12,h13,c2,c12,s4,d3,c5,d2,d9,s11,c9,d6,h8,h10,c8,c6,c13,d8,h7,s5,s13,h3,h2,d5,c7,s8,h4,c10,s6,d11,s1,h1,d13,d12,s3,d4,h6,d7,s10,c4,c1,d1,c11,h9,d10  
**851/1000: solving: solved in 8576 tries.**  
s9>s7,s2>s9,s12>h12,s12>s2,h5>h11,h13>h5,c2>c3,c12>c2,c12>s12,c5>c12,d2>d3,d9>d2,d6>d9,h10>h8,c6>c8,c13>c6,h7>h10,s13>s5,h2>h3,d5>d8,s8>s13,h1>s1,d4>d13,s10>s3,d7>d12,d7>d11,c4>d4,c1>c4,c1>h1,s10>s6,s10>c10,d7>c7,d7>d5,h6>h4,s10>s8,h6>h2,d1>c1,d10>d1,d10>d7,s10>d10,h6>h7,h6>d6,h6>h13,c9>c5,s10>s4,s11>s10,c11>c13,c11>s11,h9>h6,c9>h9,c11>c9,

d12,c12,h13,d2,c3,s4,c8,h1,c1,c5,h7,d3,s13,h4,d11,s10,h10,s9,d8,h8,h5,c4,h11,c2,s3,h12,d13,h2,c6,c10,s11,c9,s7,h3,c11,d5,h9,c7,s1,d9,d7,h6,d4,s12,d6,s6,d10,c13,s2,d1,s8,s5  
**852/1000: solving: solved in 536824 tries.**  
c12>d12,c3>c12,c1>h1,c1>c8,c5>c1,h4>h7,h10>s10,s9>s13,h8>d8,h8>h10,h5>h8,h11>d11,h11>h4,h5>h11,h5>c5,h5>h13,c4>s4,c4>c3,d3>d2,s3>d3,s9>s3,c2>c4,c10>c6,c11>c9,c11>s11,c11>c10,h3>h2,c7>s7,c7>c11,h9>h3,h9>s9,h9>h5,h12>h9,d7>d9,d7>c7,d5>d7,s12>s1,s12>h12,s6>h6,s6>s12,d6>d4,d6>s6,d10>d6,d13>d10,c13>c2,d13>c13,d1>d13,d5>d1,s8>s2,s5>s8,s5>d5,

d6,c2,s13,d8,h4,d1,h7,s8,c12,s7,c8,s2,h10,h5,c6,h3,h1,d12,s3,c1,d10,s1,h6,d9,h13,c4,d4,h12,h8,h9,c13,s9,h11,s10,d11,c5,s12,s5,d7,h2,s11,d3,c7,c10,s4,d5,d13,c9,d2,c3,s6,c11  
**853/1000: solving: solved in 7910 tries.**  
d8>d6,s7>h7,s7>s13,s8>s7,c8>c12,c8>s8,c8>c2,c8>d8,h10>h4,h5>h10,h1>h3,h1>d1,h1>h5,c6>c8,d10>d12,s1>c1,s1>s3,s1>h1,s2>s1,h6>c6,d9>d10,h13>h6,d4>c4,d4>d9,h12>h13,h8>h12,h9>h8,s9>s2,s9>h9,s12>s10,s5>c5,s11>s5,s11>d11,s11>s12,s11>h11,d7>d4,c10>c7,d2>d5,d2>d3,d2>h2,c9>c10,d13>d2,d13>d7,c13>d13,c9>s9,c13>c9,c3>c13,s6>s4,c11>c3,s11>c11,s6>s11,

s6,c7,s11,h4,h11,c6,c3,d4,d3,c13,d7,c9,d5,h6,h7,c11,d12,h2,d11,h3,s10,c2,h12,d1,s7,h10,d8,c12,c10,h1,s13,d9,h5,d6,s9,s12,c1,h8,s4,h9,s8,c5,d10,c4,s2,s3,s5,d2,c8,d13,h13,s1  
**854/1000: solving: solved in 2165 tries.**  
h11>h4,h11>s11,c6>s6,c7>c6,d3>d4,d3>c3,c13>c7,d7>d3,c9>c13,d5>d7,h7>h6,c11>h11,c11>c9,h12>h3,h12>d12,h12>h7,h2>h12,d11>c11,d5>d11,s7>s10,c10>c12,h1>h10,h1>d1,h1>h2,d9>d8,s9>s13,s12>s9,h8>h5,s3>s2,s5>s3,c8>c4,c8>s8,c8>c1,c5>c8,s5>s4,s5>c5,h9>h8,s5>s12,d10>d6,d10>c10,d10>d9,s5>s7,d13>d10,d2>c2,d2>d5,d13>d2,h13>h9,h13>d13,h1>h13,s1>s5,s1>h1,

s13,h11,d12,c1,s11,c3,d6,h7,s8,s9,h5,h10,s1,d5,d3,c7,c13,s2,d9,c6,s3,h12,d7,s5,d11,d2,h1,s7,s4,h9,h13,c8,h3,d10,h4,h2,c10,h6,d13,s10,d1,c9,d8,c5,c11,h8,s6,c2,s12,d4,c4,c12  
**855/1000: solving: solved in 63719 tries.**  
s11>h11,s11>s13,c3>c1,s9>s8,h10>h5,d3>d5,c13>c7,s2>s1,s5>s3,d11>d7,d2>d11,s4>s7,h13>h9,h2>h4,s10>c10,d8>d13,c5>c9,c11>c5,h8>d8,h8>h2,h8>c8,h8>h13,h3>h8,h6>h3,s6>s10,s6>s4,d1>d10,c2>c11,c4>c2,c12>c4,s12>c12,s12>s6,s12>h12,s12>s5,d2>d9,d2>s2,c6>c13,h6>c6,h6>h10,h6>d6,h7>h6,d3>d2,d3>c3,h1>h7,d1>h1,d1>d3,s9>s11,s12>s9,d12>s12,d1>d12,d4>d1,

h12,h11,h13,h2,s6,d2,d11,c3,d7,d3,c2,c5,s7,c12,h8,c11,s13,s3,c6,s8,s11,s5,d10,c4,c8,h3,c9,c7,d12,h10,h9,s9,d1,d13,s1,h4,s2,d4,h6,c10,s12,d6,s10,h5,d8,c1,c13,s4,d9,h1,d5,h7  
**856/1000: solving: solved in 13794 tries.**  
h11>h12,h13>h11,h2>h13,d11>d2,d3>d7,d3>c3,d3>d11,c2>h2,c5>c2,s3>s13,s11>s8,s11>c11,s11>s7,s3>s11,s3>d3,s3>s6,c4>c6,c8>c4,c8>h8,c8>c12,s5>c5,s3>s5,h3>s3,c7>c9,h10>d10,h9>h10,s9>h9,d1>d12,d13>d1,s1>s9,d6>h6,s10>s12,s10>c10,d8>d6,c13>c1,s4>s10,s4>s2,s4>h4,s4>s1,d4>s4,d8>d4,d8>c8,c13>c7,d13>c13,d9>d8,d13>d9,d5>d13,h5>d5,h5>h3,h1>h5,h7>h1,

s4,h7,d12,d7,c11,d4,c3,h1,h4,h9,d13,d8,c9,d10,s5,c12,c7,s9,h3,s8,s2,s11,h10,s3,h13,c1,c2,c6,s7,s13,c4,h12,h2,s10,d9,c5,c10,s6,c13,h6,h8,s12,h11,c8,s1,d1,d2,h5,d11,d3,d6,d5  
**857/1000: solving: solved in 30653 tries.**  
d7>d12,d7>h7,d4>s4,d7>d4,c3>c11,h4>h1,h9>h4,d13>d7,d8>d13,c9>h9,c9>c3,c12>c9,c7>c12,s9>s5,s2>s8,s11>s2,s3>h3,s3>s9,s11>s3,h13>h10,c2>c1,c6>c2,s7>s11,s13>s7,h13>s13,c6>c7,c4>c6,h12>h13,h2>h12,d9>d10,c10>c5,c10>s10,c10>c4,h6>h2,s6>h6,s12>s6,c8>c13,c8>c10,c8>d8,h8>c8,h11>h8,s1>s12,d1>s1,d1>d9,d2>d1,d11>h11,d2>d11,d6>d3,d5>d6,d5>h5,d5>d2,

c13,h6,c5,s11,h3,s13,h2,s7,c7,s6,s10,d3,s3,d8,c8,d4,c1,d6,s4,d5,h8,c9,d10,d12,s1,s2,c3,s9,d13,c12,h9,s5,c2,d11,h1,c10,c6,h10,s12,c11,s8,d9,c4,h5,h4,d1,d7,h7,h12,d2,h13,h11  
**858/1000: solving: solved in 11647 tries.**  
h3>h6,s13>s11,s13>c13,c7>s7,s10>s6,s3>d3,s3>s10,c8>d8,s4>d4,d5>d6,c9>c1,d12>d10,s2>s1,c12>c3,s5>s9,d11>d13,c6>c10,c11>c6,s8>s12,h4>h5,h4>c4,h4>h10,d1>d9,d7>d1,h7>d7,h12>h4,h11>h7,h11>c11,h11>h1,h12>h9,h12>c12,h12>h8,d12>h12,d12>d5,d11>d12,s2>s4,s8>s5,c2>c9,c2>s2,c2>c7,s8>s3,c8>s8,c8>c5,c2>h2,c2>c8,d2>c2,d11>d2,h11>d11,h11>h3,h13>h11,h13>s13,

c1,d5,d4,d7,c7,s12,s7,h3,s9,h11,h8,s4,h6,h7,c8,c2,d6,d3,c13,s8,s11,d1,s13,d12,h12,c4,h2,h10,s2,h9,c5,h5,c10,s3,s1,s6,s10,h4,c11,d10,h13,h1,d9,c12,d2,d11,s5,d13,c3,d8,c6,c9  
**859/1000: solving: solved in 556370 tries.**  
d4>d5,d7>d4,c7>d7,c7>c1,s7>s12,s7>c7,h8>h11,h7>h6,c8>h8,c2>c8,d3>d6,s11>s8,d1>d3,s13>s11,s13>c13,s13>s4,d12>d1,h12>d12,h12>h7,c4>c2,h2>h12,h10>h2,h5>c5,h5>h9,c10>h10,s1>s3,s6>s1,h13>h4,h1>h13,d13>d2,d13>d10,d8>d11,d8>d13,c6>c12,c6>c11,c6>s6,d9>d8,c9>d9,c9>c6,c9>c10,c9>s9,c4>c9,s10>s13,s10>s7,s5>s2,s5>s10,h5>s5,h1>h5,h3>h1,c3>c4,c3>h3,

s7,d4,h8,d11,c11,c12,h1,s2,h12,c9,h10,c7,s3,d12,d1,c3,s13,c4,h2,h6,c10,c6,s5,c1,c5,h9,d13,h7,d7,d2,s10,h4,h13,d3,h11,d10,s1,s8,d6,s9,s4,s6,d5,c13,c2,s11,d9,s12,h3,c8,d8,h5  
**860/1000: solving: solved in 12378 tries.**  
c11>d11,c12>c11,h12>c12,h12>h8,h1>h12,s2>s7,d1>d12,c3>c7,s3>c3,h6>h2,c6>c10,c6>h6,c6>c4,c5>c1,c5>s5,c5>c6,d13>s13,d13>d1,h7>h9,d7>h7,d2>d7,h13>h4,d3>d2,d3>s3,d13>d3,c5>c9,h13>h10,d13>h13,d13>d4,h11>h1,d10>s10,d10>d13,s8>s1,s6>d6,c2>c13,d9>d5,s11>s4,s12>s11,s12>s8,s6>s12,s9>s6,d9>s9,d9>d10,h5>h3,h5>h11,c5>h5,c2>s2,d8>d9,c8>c5,c8>d8,c8>c2,

s4,d1,c11,c2,h9,d11,s9,s12,h1,c6,h6,c13,s6,h8,s13,c7,c1,s8,h2,d6,c9,d10,d13,c4,c3,h4,h11,d8,s2,s11,c10,h3,h13,s3,h10,h7,s5,c8,h5,s10,s1,d7,s7,h12,d2,d9,c5,c12,d3,d4,d5,d12  
**861/1000: solving: solved in 327985 tries.**  
c2>c11,d11>d1,s9>h9,s9>s4,s12>s9,h6>c6,h6>h1,h8>h6,s13>s6,s13>c13,c7>c2,c1>c7,s8>s13,s8>h8,s8>s12,d6>d11,d13>d10,c3>c4,h11>h4,d8>d13,s11>s2,s11>h11,h3>c3,h3>h2,c10>c9,h7>h10,s10>s5,s1>s10,s7>d7,s7>s1,s7>h7,s7>s11,h5>h13,h12>h5,d9>d2,c12>c5,d4>d9,d5>d4,d12>d5,d12>h12,c12>d12,c12>c10,s3>s7,s3>h3,s3>s8,d8>d6,c12>c1,c8>c12,d3>s3,d8>d3,c8>d8,

h9,s9,s7,d13,c4,d5,h4,c1,d9,d1,c12,c5,h2,h7,s3,s4,c11,h1,s10,h6,d2,s13,d12,h12,h13,d6,d4,s6,s11,s2,h8,c3,d3,c9,c10,c6,h11,h10,s12,d8,h5,d10,c7,h3,d11,s8,d7,s5,c8,c2,s1,c13  
**862/1000: solving: solved in 61845 tries.**  
s9>h9,s7>s9,c1>c4,d1>d9,d1>c1,d1>d13,d5>d1,c5>c12,h7>h2,s4>s3,s4>h4,s13>s10,d12>d2,h12>d12,h12>h6,h13>h12,h13>s13,h13>h1,d4>d6,s11>s6,s11>c11,s11>s4,h13>h7,h8>h13,d3>c3,c10>c9,c6>c10,h3>h5,h3>h10,h3>d3,h3>h8,s12>s2,d11>d8,d7>d10,c7>d7,c8>c7,c8>c6,s8>c8,s8>s12,d11>d4,h11>h3,d11>h11,d11>d5,s11>d11,s1>s8,s5>s11,s1>s7,s5>s1,c5>s5,c2>c5,c13>c2,

c12,h6,h9,d5,c6,s12,h2,d3,c10,c8,d1,h8,c7,h5,d12,s7,c4,c3,h11,s10,d11,c1,d7,s13,h10,h13,s6,s11,h7,s9,h1,c5,s4,h3,d9,c2,h4,h12,d4,d10,c13,s1,s3,d6,d13,d8,c11,s2,s8,c9,d2,s5  
**863/1000: solving: solved in 147987 tries.**  
h9>h6,c6>c12,h2>h9,c8>c10,c7>c8,h5>h8,c3>c4,s10>s7,d11>h11,d11>d12,c1>c3,d7>d11,d7>c7,d7>d3,d1>d7,h5>d5,h5>h2,h10>s10,h10>h5,c1>d1,c1>c6,s13>s12,h13>s13,h13>h10,s11>s6,s4>s9,c2>c5,d4>d9,h4>d4,h4>h3,h4>s4,h4>h7,h12>h4,h1>h12,h1>c1,h13>h1,s3>s1,d6>d10,d13>d6,d13>h13,s8>d8,c11>c13,s3>s11,c9>c11,s5>s8,s5>s3,s2>s5,c2>s2,d2>d13,c2>d2,c9>c2,

s1,s5,h3,c3,c5,h5,h4,s8,h10,c11,d5,c10,c4,c1,d6,c13,d3,c9,h12,c8,h8,h9,s3,c2,s4,s9,h2,d10,s10,c7,d7,s6,d4,h11,s12,s2,c12,d9,c6,d12,d11,h1,h7,h6,d13,h13,s11,d8,d2,s7,s13,d1  
**864/1000: solving: solved in 8333 tries.**  
s5>s1,c3>h3,c5>c3,c5>s5,h5>c5,h4>h5,c10>h10,c11>c10,c1>c4,h8>c8,h8>h12,h9>h8,h9>c9,s9>s4,s9>h9,s3>s9,s3>d3,h2>c2,s10>d10,d7>c7,s12>s6,s2>s12,s2>h2,s2>s3,s10>s2,d7>d6,d4>d7,c12>c13,d11>d12,d11>h11,d11>d4,d11>c11,d5>d11,c12>c1,d9>d5,s10>s8,c6>c12,h7>h1,h6>h7,h6>c6,h6>h4,d13>d9,s11>s10,h13>h6,d2>d8,s7>s11,s13>s7,s13>h13,d13>s13,d2>d13,d1>d2,

s3,s1,h4,d9,d6,c8,c3,d5,d8,c6,h10,c4,c1,d12,s4,s6,s12,c9,h9,c2,s13,s9,h11,c13,d7,s2,c12,h3,d11,c5,c10,c7,s7,s8,d10,s10,s11,h6,h7,h12,h2,h5,d2,d13,s5,h13,d1,h1,h8,d3,c11,d4  
**865/1000: solving: solved in 47394 tries.**  
s1>s3,d6>d9,c3>c8,d8>d5,c6>d6,c3>c6,h10>h4,c1>c4,s6>s4,s12>s6,s12>d12,h9>c9,c2>c1,s9>s13,s9>h9,s9>s12,c13>c2,s2>s9,h3>h11,c10>c5,c7>c10,c7>d7,c7>c13,c12>c7,s7>s2,s8>s7,d10>d11,s10>d10,s11>s10,h7>h6,h5>h2,d13>d2,d1>d13,h1>d1,h1>h7,h12>h1,h5>h3,s5>h5,s11>s5,h12>c12,h13>h12,h8>h13,h8>h10,s8>h8,s8>s1,s11>s8,d3>d8,c11>s11,c3>c11,d3>c3,d4>d3,

d9,s13,d6,c12,h10,d11,h9,s12,c11,c9,h12,h5,h8,h13,h6,c7,s11,d12,s6,c10,c5,d2,s1,c8,c3,h1,s9,c1,d5,h3,s10,c2,s8,d3,c13,d4,h2,s3,s7,s4,d8,h4,d7,d10,s5,d1,c6,h7,d13,c4,h11,s2  
**866/1000: solving: solved in 9075 tries.**  
d11>d6,h9>h10,c11>c12,c11>d11,h9>d9,h5>h12,h8>h5,h13>h8,h6>h13,c5>c10,d2>d12,c3>c8,s9>s1,c1>h1,c1>c3,d5>c5,s10>s9,d3>h3,d3>d5,c2>c1,s7>s3,s4>s7,d8>d4,h4>s4,h4>h2,d13>d1,d13>d7,d13>c13,d10>d13,d10>s10,d10>d3,d8>d10,c2>d2,s8>d8,s5>s6,s8>s5,c6>c2,c6>h6,c6>c9,c7>c6,s8>s12,s11>c11,s11>s13,c4>c7,h4>c4,h4>h9,h7>h4,h11>h7,s11>h11,s8>s11,s2>s8,

d2,s9,s7,h6,s1,s8,s4,d12,s11,c11,c9,h2,h13,s12,c1,h5,h9,s5,d5,d7,d9,h10,h8,h12,h4,c2,c10,h7,d6,h1,h11,d8,d1,c7,h3,s3,c4,d4,s10,d11,s13,d3,c5,d13,s2,c8,c3,d10,c13,c6,s6,c12  
**867/1000: solving: solved in 3786404 tries.**  
s7>s9,s8>s1,s4>s8,c11>s11,c9>c11,h13>h2,s12>d12,s12>s4,h13>h6,c1>c9,h5>h13,h9>h5,d5>s5,d7>d5,d9>d7,d9>h9,h8>h10,h12>h8,h4>h12,c10>c2,h11>h1,d1>d8,h3>h11,s3>h3,d4>c4,d13>s13,d13>d11,d3>d4,c13>c8,c3>c5,c13>d13,c3>d3,s6>s2,d10>s10,d10>d1,c3>s3,c12>c13,c12>c3,c12>c10,c12>s12,c1>c12,h7>h4,c7>h7,c7>c1,d10>d9,c6>c7,d6>c6,s6>s7,d6>d10,d6>s6,d6>d2,

s8,h4,s7,d9,s12,h6,h10,d2,s13,s4,c11,c10,h9,h2,h12,h7,d8,c3,s1,d10,d1,s11,h8,h5,c5,d11,c1,s10,h3,d5,d4,c2,c13,c6,d7,c9,c4,h1,s2,d13,h13,h11,s9,c12,s6,c8,s5,c7,d3,s3,d12,d6  
**868/1000: solving: solved in 53150 tries.**  
h10>h6,d2>d9,s4>s13,c10>c11,h9>h10,h2>h9,h12>h2,h12>s12,h12>h4,c3>c10,d1>d10,d1>s1,d1>d8,h8>h7,h5>h8,c5>h5,c5>c3,d1>d2,d11>s11,d11>d1,c1>c5,d4>d5,c13>c2,c6>c13,c4>c9,c4>d4,c4>c1,c4>s4,c6>c4,s10>s7,d13>d7,h13>d13,h11>h13,h11>d11,h1>h11,s9>s2,c12>c6,c12>h12,h3>h1,s6>s9,s3>s5,s3>h3,s3>s10,s6>s3,c8>s8,c7>c8,c12>c7,d12>c12,d6>d3,d6>s6,d6>d12,

h2,d4,h5,s4,h1,s1,h3,c12,s8,c9,h12,s10,d8,c3,c1,d9,h9,c2,h8,c6,d12,h4,h6,d1,d11,h7,d2,h10,d3,s3,d7,c11,s12,s5,d13,c8,c13,c10,d5,h13,c5,c7,d10,d6,c4,h11,s7,s6,s11,s2,s13,s9  
**869/1000: solving: solved in 476847 tries.**  
s1>h1,s1>s4,s8>s1,c9>c12,c1>c3,h9>d9,h4>h8,h6>h4,c6>h6,c6>c2,d1>d12,d1>c1,d1>d8,h9>h12,h9>c9,h9>h3,s3>d3,d7>d2,d7>h7,d7>d11,s5>s12,c8>c11,c13>d13,c10>c13,c5>c10,c5>s5,c5>c8,d10>d5,c7>c5,c7>d7,c7>c6,h10>s10,h10>h5,s11>h11,s7>s11,s6>d6,s2>s6,s2>s3,d10>d1,d10>h10,s13>h13,s9>s13,s9>h9,s2>s8,s2>h2,s7>s9,s7>s2,c7>s7,c4>c7,d4>c4,d10>d4,

c6,s9,s10,h2,d4,c12,h5,h13,d5,s4,d9,d11,s3,s2,h1,d1,d3,h7,s5,s12,h8,c7,d2,h11,d10,c1,d7,c5,s11,h9,c4,d6,s13,c9,s1,c13,d13,h10,c11,h4,s7,s6,d12,h3,h12,s8,c8,c10,c3,c2,h6,d8  
**870/1000: solving: solved in 15046 tries.**  
s10>s9,h5>h2,h13>h5,s4>d4,d9>d5,d11>d9,s3>s4,s2>s3,d1>h1,d1>d11,d3>d1,s12>s5,s12>c12,s12>s2,h7>h13,h8>h7,c4>c5,s13>s11,d13>c13,d13>d6,c11>c9,s7>s1,s6>s7,h4>h10,h12>h4,c8>s8,c2>c8,c10>c2,h6>h3,h6>s6,h6>h9,h12>h6,d12>h12,d12>d7,d13>s13,c10>c4,c10>d10,c10>c7,d12>d2,d12>s12,d3>d12,c10>s10,c10>c6,c3>c1,c11>h11,c11>c10,c3>c11,d8>h8,d3>d8,d3>c3,d13>d3,

c5,s4,c13,s12,s8,s7,c1,d11,d7,c10,d4,s11,s9,s6,c6,h10,d13,c9,h3,c11,h2,h4,h11,s5,c4,s1,c12,s2,d5,c2,h8,d6,h7,d8,d9,h6,h5,d2,c7,h13,h1,s10,h12,s3,d3,c8,d1,c3,h9,s13,d10,d12  
**871/1000: solving: solved in 162530 tries.**  
s8>s12,s7>s8,d7>d11,s9>s11,s6>s9,c6>s6,h10>c10,h4>h2,h11>h4,h11>c11,h11>h3,c4>c9,c4>d4,c4>c1,c4>s4,c4>c5,c13>c4,d7>s7,c6>c13,s1>s5,c2>c12,s2>c2,s2>s1,d5>d13,d8>h8,d8>d5,d6>d8,d6>c6,d7>d6,h11>h10,h7>d7,d2>d9,h1>h5,h13>h6,h13>h11,h12>h1,s3>s10,c8>c7,d1>d3,c3>c8,s3>c3,s13>s3,d1>d2,s13>s2,d10>d1,d12>d10,h12>d12,h12>h7,h9>h12,h13>h9,s13>h13,

s6,d8,d1,h6,d10,d9,c7,c1,c3,c2,d5,s8,d4,s1,h10,h8,c12,h7,d3,s3,h11,h12,h5,h4,c10,s12,h1,c5,s2,d2,s7,h9,h2,c8,d11,c4,s9,c13,h13,s11,d12,h3,s10,s5,s4,d6,c9,c6,d13,s13,c11,d7  
**872/1000: solving: solved in 26362 tries.**  
d1>d8,d9>d10,c1>c7,c1>d1,c3>c1,c2>c3,d5>d9,h8>h10,h8>s8,s3>d3,s3>s1,h11>h7,h12>h11,h12>c12,h12>h8,h5>h12,h5>d5,h5>h6,h4>h5,d4>h4,s3>s6,c5>c10,d2>s2,s7>s12,h2>h9,h2>d2,h2>h1,c8>c5,s11>s9,h13>c13,s5>s10,s4>s5,d6>d12,c6>c9,s13>s4,c6>d6,d13>s13,c11>c6,c11>c4,c11>d11,c11>c8,s11>c11,s7>s11,h2>c2,h13>h2,d7>s7,d7>d4,h3>s3,h13>h3,d13>d7,d13>h13,

h8,s2,d9,c9,c1,d12,d11,c10,c8,d3,c4,d6,h13,s5,c13,h4,s12,c11,h10,h3,c3,d10,h12,s11,c7,h7,d1,d8,c2,h2,s9,d7,d5,h5,s7,s8,d4,s6,c5,s3,d2,h9,h11,s10,s13,d13,s4,c12,h6,h1,s1,c6  
**873/1000: solving: solved in 20104 tries.**  
c9>d9,c1>c9,d11>d12,c8>c10,h4>h13,h3>h10,c3>h3,c3>c11,h12>s12,h12>h4,c3>c13,s11>s5,h7>c7,d8>d1,h2>c2,d7>d8,d7>h7,d7>d10,d5>d7,h5>d5,h5>h12,h2>h5,s7>s9,s8>s7,h11>h9,s10>s3,d13>d2,s13>s10,s4>s13,s4>d4,s4>s11,s4>c4,s6>s8,s6>d6,s6>s4,c3>d3,c3>c8,c12>c5,c6>h6,c6>c12,c6>c3,s6>c6,h1>h2,h1>c1,s1>s6,s1>s2,h1>s1,h1>h8,h11>h1,d11>h11,d13>d11,

h9,c3,d13,c2,h12,h8,d5,s12,c12,h4,d11,s2,d9,c4,h2,d8,d4,s5,s8,c13,s4,c7,s11,s7,c6,c5,h5,s9,h6,s3,s10,s13,d10,h13,h10,d3,c11,s6,h11,s1,d2,d7,c1,c8,h7,d12,h1,d6,h3,d1,c10,c9  
**874/1000: solving: solved in 978 tries.**  
h8>h12,d5>d13,c12>s12,h2>s2,d4>d8,d4>c4,d4>d9,d4>h4,d11>d4,h2>h8,h2>c2,h2>h9,s5>d5,s8>s5,s7>s11,s7>c7,s7>s4,c5>c6,h5>c5,s10>s3,s13>s10,h13>h6,s13>h13,s13>s9,s13>c13,s13>s8,s7>s13,h10>d10,h10>h5,c11>d11,c11>c12,h11>h10,h11>c11,h11>h2,s1>s6,d7>d2,d7>s7,d3>d7,c1>s1,c8>c3,d12>d3,h3>h7,h1>h3,d6>d12,d1>d6,c1>d1,h1>h11,c1>c8,c1>h1,c10>c1,c9>c10,

d11,d3,s2,s12,s9,c2,h2,s7,c10,c8,h6,d6,h9,h3,s8,c1,h12,d10,c7,d5,s4,h13,h5,d8,s5,s1,d7,s11,c3,h11,d12,s13,s3,s6,d4,s10,d9,c6,h7,c13,d1,h8,c12,d2,c5,d13,c9,c4,h10,h4,h1,c11  
**875/1000: solving: solved in 75198 tries.**  
d3>d11,s12>s2,s9>s12,h2>c2,c8>c10,h6>h2,d6>h6,h3>h9,s8>s7,c8>s8,c7>c1,d5>d10,h13>h12,h5>h13,d5>h5,s5>d5,s4>s5,s3>s13,s3>c3,s3>s11,d12>d7,d2>d1,c5>c12,d13>d2,d13>c13,d13>d9,c9>c5,c4>c9,h10>h7,h10>s10,h1>h8,h1>h10,h1>h11,h1>s1,d4>d12,d4>s4,d8>d4,d8>c8,s3>h3,s6>s3,s6>s9,d13>d8,d13>d3,d6>s6,d6>d13,c4>c7,c6>d6,h4>h1,c11>c6,c4>c11,h4>c4,

h11,c7,c13,h12,s8,s2,h10,h6,d12,c3,d11,s5,s10,d7,d9,d2,d13,c1,h3,s7,c8,h5,c10,d1,h1,h4,h8,c12,s6,c6,h2,s3,h13,d3,s13,c9,s9,h7,d4,d5,s1,c4,c11,c5,s12,d8,h9,c2,s4,s11,d10,d6  
**876/1000: solving: solved in 22513 tries.**  
c13>c7,s2>s8,h6>h10,d12>h12,s10>s5,d9>d7,d2>d9,d13>d2,c8>c1,h1>d1,h4>h1,h8>h4,c6>s6,c6>c12,s13>s3,h13>s13,h13>h2,c9>c6,h7>h13,c4>d4,s1>s9,c5>c11,d8>d5,d8>d3,d8>h8,s12>s1,c2>c4,c2>c9,c5>c2,c5>h5,c5>c8,c10>c5,h7>h3,s7>h7,d8>d13,s4>s7,s11>s4,s11>s10,s11>d11,c10>c3,s11>s2,s11>h11,c10>c13,d10>d8,d10>c10,d12>d10,s12>s11,d12>s12,d6>d12,h6>d6,h9>h6,

h4,d9,s1,d12,s11,s2,s4,s10,c9,d6,c3,h7,h11,h10,s7,h8,s3,s8,d4,c2,h1,c4,h2,d11,s9,h13,d7,c5,d3,d1,c1,c13,h5,h6,h3,c8,c10,c7,d5,d2,c11,s5,d13,s6,s12,c6,d10,h12,h9,d8,c12,s13  
**877/1000: solving: solved in 1064 tries.**  
s2>s11,s4>s2,s10>s4,d6>d12,c3>c9,h11>h7,h10>h11,s7>s10,h8>h10,s3>s7,c3>s3,s8>h8,s8>s1,c4>d4,c4>c3,c2>c4,h2>h1,h2>c2,h13>h2,d1>d3,c1>d1,c1>c5,c13>c1,h6>h5,h3>h6,c10>c8,c7>c10,c7>d7,c13>c7,c13>h13,d5>d11,d2>d5,s12>s5,s12>s9,d8>d10,d8>d13,c12>c6,c12>c11,s13>s6,h12>c12,h12>h3,d8>d2,d8>s8,d6>d8,s13>c13,s12>s13,h12>s12,h12>h4,h9>h12,d9>h9,d6>d9,

h3,d8,h12,h2,s11,h9,c5,s3,h1,h7,s8,s2,c13,d6,s10,s7,h10,s13,c4,s6,d12,c6,c3,h6,h8,d3,h11,s9,c10,c1,d13,s5,c7,c12,c2,c11,d7,d9,d1,s1,c8,s12,d2,c9,h4,d10,h13,d11,d5,h5,d4,s4  
**878/1000: solving: solved in 110465 tries.**  
h2>h12,s3>s11,s3>h3,h9>h2,h7>h1,s2>s8,c13>c5,s7>s10,s7>h7,s2>s7,s13>s2,s13>c13,s13>s3,s6>d6,s6>s13,h10>h9,d12>d8,c6>c4,c6>s6,c3>c6,h6>h10,h8>h6,d3>c3,d12>d3,h11>h8,c1>c10,s5>s9,c12>c7,c2>c12,c11>c2,d9>d7,d1>d13,d1>c1,d1>d12,c8>c11,s1>s5,s12>s1,c9>c8,d9>c9,d9>d1,d2>d9,d5>d10,h5>d5,h5>h11,h13>h5,d4>d11,s4>s12,h4>s4,h4>h13,d4>h4,d4>d2,

c4,d13,h4,s1,c5,d4,s12,s5,h2,s10,h8,d7,h12,c13,h11,d2,s7,h1,d11,s2,c9,d6,d8,s9,s6,c12,d1,c3,c6,h13,d9,d5,h6,c8,d12,c10,c2,h5,c11,s13,s3,d3,s11,s4,h9,c7,h7,h3,c1,d10,s8,h10  
**879/1000: solving: solved in 7160 tries.**  
d4>h4,d4>d13,d4>c4,s5>s12,s5>c5,s5>s1,h1>h11,s2>d2,s7>s2,d8>d6,s6>s9,c12>c9,c6>c3,d9>d1,d5>d9,h6>h13,h6>c6,d12>d5,d12>c12,d12>d11,d8>d12,h6>s6,h6>h1,c8>d8,c8>c13,c8>h8,h6>h12,c2>c10,h5>h6,c11>c2,s3>s13,d3>s3,s11>s7,s4>s11,c7>c11,c7>d7,h9>h5,h7>h9,h7>c7,d10>d3,h10>h3,h10>h7,h10>h2,s10>h10,s4>s5,s10>s4,d10>d4,s10>d10,s8>s10,c8>s8,c1>c8,

h4,c3,d6,h12,c10,d8,d2,s10,h3,s7,d4,d5,c6,d9,s5,d3,s9,s2,h10,h11,s6,d1,s8,c5,h8,s13,d10,c7,h6,c11,s11,c4,d7,h1,c13,s3,h7,c1,c9,c8,c2,s4,d13,d11,h5,d12,s1,h9,s12,c12,h13,h2  
**880/1000: solving: solved in 7172 tries.**  
h12>h4,d2>d8,d5>d4,s5>d5,s5>s7,d3>d9,d3>h3,s2>s9,h11>h10,s6>c6,s6>s5,s2>s6,s2>d2,s10>s2,s10>c10,d3>c3,d6>d3,h11>h12,s13>s8,c7>c5,s11>c11,c13>c4,h7>d7,h7>h6,h7>c7,h8>h7,d10>d1,d10>s10,d10>d6,h8>h11,s11>s13,s3>s11,c1>h1,c1>c13,c9>c1,c2>c8,s4>s3,d11>d13,h9>h5,h9>c9,h9>h8,d11>d10,s1>s4,s12>s1,c12>s12,d12>d11,c12>d12,c2>c12,h2>h13,h2>c2,h2>h9,

s5,d11,d3,c3,s11,h10,s13,h9,h3,d7,d2,s6,c6,s12,d8,c13,d5,s4,c11,c10,h7,s8,c9,c4,h1,s7,d4,c8,s2,s9,h4,d13,c2,c12,h2,c1,h6,h11,h8,c5,h12,c7,s1,h13,d1,d10,d12,h5,d6,d9,s3,s10  
**881/1000: solving: solved in 852793 tries.**  
d3>d11,c3>d3,h3>h9,d2>d7,s6>s13,c6>s6,c6>c3,h3>h10,s12>s11,d8>d2,c11>c13,c10>c11,c4>c9,c4>s4,s7>h7,s8>s7,d4>c4,d4>d5,s8>d8,c8>c10,c8>s8,c8>c6,s9>s2,h4>d4,h4>h3,h1>h4,c1>c2,c1>h1,c12>c1,c12>s12,s9>s5,d10>d1,h5>h13,h5>h12,h5>h11,h8>h2,h8>c8,h6>h8,h5>h6,c5>h5,c7>c5,c12>c7,s1>s9,d12>c12,d13>d12,d10>d13,d9>d6,s3>s1,s10>s3,d10>s10,d9>d10,

d10,h11,d13,h5,h7,s7,h13,s3,s13,d7,d1,d11,h8,d6,c11,c12,c7,h3,s6,s2,s4,s10,d9,c8,h9,c6,h4,h1,c10,d5,d2,s12,d3,c2,s9,c3,d4,s11,c9,h2,s5,h10,d8,c5,h6,c13,s8,c4,s1,h12,c1,d12  
**882/1000: solving: solved in 9037 tries.**  
h7>h5,s7>h7,h13>h11,d13>h13,d13>d10,s3>s7,s13>s3,s13>d13,d1>d7,d11>d1,c11>d11,c12>c11,c7>c12,s2>s6,s4>s2,s10>s4,d9>d6,h9>h3,h9>d9,h9>h8,s10>s13,c6>c8,h1>h4,d2>d5,c2>d2,c2>c10,d4>d3,c9>s9,c9>c2,c9>h9,c9>c7,c6>c9,s12>s10,c5>s5,c5>c3,c5>c6,h10>h2,d8>d4,h6>h10,s8>s11,s8>d8,s8>s12,c13>c5,c1>c4,c1>c13,h1>c1,s1>s8,h1>s1,h6>h1,h12>h6,d12>h12,

c9,h3,h7,d10,h11,c5,c8,s5,d1,d8,d13,h4,c4,h1,s2,h12,d9,s11,s10,d5,d3,d11,s12,c2,h2,h9,h8,s8,d12,c6,c13,s3,s13,c10,d7,s7,h5,s1,c11,s6,h6,d4,d2,d6,c12,s4,c1,h10,s9,h13,c7,c3  
**883/1000: solving: solved in 24015 tries.**  
h7>h3,c8>c5,d8>d1,d13>d8,c4>h4,c4>c8,s2>s5,h12>h1,s10>s11,d3>d5,d11>d3,h2>c2,h9>h2,h8>h9,s8>h8,s8>s12,c13>c6,s3>s8,s13>c13,d7>d12,s7>d7,s7>s3,s13>s7,c10>s10,d6>d2,d6>s6,h6>d6,c12>c11,s4>d4,h10>h6,h10>h5,h10>c10,s4>s13,c1>c12,s9>s4,s9>d9,s9>s2,d11>d13,h10>h12,s1>s9,c1>s1,c1>c4,d11>d10,h11>d11,h13>h10,c3>c1,c3>c9,h13>h11,c7>c3,h7>c7,h13>h7,

c5,c4,s7,d7,h13,d11,d6,d12,h8,d13,h7,s10,h5,d2,s11,c7,s6,s2,h12,c1,h10,c2,s12,d1,s5,h4,c10,h2,h9,d9,h11,h3,d4,d10,d3,c8,c11,s3,c9,c12,s9,c6,s1,s8,d5,d8,c3,s13,s4,h1,c13,h6  
**884/1000: solving: solved in 80162 tries.**  
c4>c5,d7>s7,d6>d11,d12>d6,d13>h13,d13>d7,d12>d13,h7>h8,s11>s10,s2>s6,c1>c7,h10>h12,c2>c1,c2>d2,s2>c2,h9>h2,d9>h9,h11>h4,h3>h11,d4>d9,d10>d4,d10>c10,d10>d1,d3>h3,c11>c8,s9>s3,c12>c9,s1>s9,s8>s1,c6>c11,c3>c12,d8>s8,c3>d3,c6>c3,d8>d10,d5>d8,s5>d5,s5>s2,s5>h5,h10>h7,s5>s11,s12>d12,s4>s5,s4>c4,s12>s4,h1>h10,s13>s12,h6>h1,c6>h6,c13>c6,c13>s13,

s4,s5,s9,h11,h12,d11,c6,h2,h8,c7,h10,c13,c5,s8,d8,d7,c11,s11,s13,s3,d9,c8,c10,h9,c3,c4,d1,d5,c1,s10,d3,h4,h5,s2,c12,d12,s12,c9,s1,s6,h3,d6,h13,c2,d2,s7,h6,d4,d10,h1,d13,h7  
**885/1000: solving: solved in 701 tries.**  
s5>s4,s9>s5,h12>h11,h2>h12,h8>h2,c7>c6,h10>h8,c13>c7,c5>c13,d8>s8,d7>d8,c11>d11,c5>c11,s13>s11,s3>s13,c10>c8,c4>c3,d5>d1,d3>d5,h5>h4,d12>c12,s12>d12,s12>s2,s6>s1,d2>c2,h6>h13,h6>d6,h6>h3,h6>s6,h6>h5,d10>d2,s7>s12,d13>d10,d4>d13,h7>h1,h7>s7,h7>h6,c9>c1,c9>h9,c9>c10,c9>d9,c9>c5,c4>c9,d4>d3,d4>c4,d7>d4,s3>s9,s10>s3,h10>s10,h7>d7,h7>h10,

s11,h1,s12,c13,h2,s4,h10,d7,h9,s7,d2,d8,s9,d6,d5,s13,d3,h5,s5,c12,c9,c3,d9,s6,c11,c1,h7,d13,c2,c5,h6,c4,s10,h11,h4,s1,h3,d10,d11,c8,h12,s2,d4,d1,s3,d12,h13,s8,c6,h8,c10,c7  
**886/1000: solving: solved in 137987 tries.**  
h2>h1,d2>d7,d8>d2,s9>s7,s9>h9,s9>s4,d6>d8,d5>d6,s13>s9,s13>c13,s13>s12,d3>d5,s5>h5,s5>s13,c9>c12,c3>c9,c3>d3,c11>c3,c1>c11,d13>d9,c5>c2,h6>s6,h6>h10,h7>h6,c4>c5,h4>h11,s3>s2,d12>d1,d12>h12,d12>d10,d11>d12,d4>d11,d4>h4,d4>d13,c4>d4,c4>c1,s10>s5,h3>h7,s1>s10,c8>c4,s3>s1,h3>s3,h13>h2,h3>h13,s8>s11,h8>h3,h8>s8,c8>h8,c6>c8,c10>c6,c7>c10,

h10,c4,d7,h6,s7,c13,d13,s2,c3,s11,s6,d11,d4,h3,s5,c8,c5,c10,d6,c12,h8,s9,h11,c1,s12,c9,h7,d9,h13,h1,s10,s8,d10,c11,c2,d3,s4,d1,h9,s1,h12,s13,s3,h2,c6,d2,d12,h5,c7,d5,h4,d8  
**887/1000: solving: solved in 368929 tries.**  
h6>h10,s7>d7,d13>c13,s6>s11,d4>d11,h3>c3,c5>c8,c5>s5,c10>c5,d6>s6,d6>d13,d6>h6,s2>s7,d4>c4,d4>d6,c12>c10,s12>s9,c9>c1,h1>h13,s8>s10,d10>d9,c2>c11,s4>s8,d1>d3,d1>h1,d1>d10,s1>s4,s1>d1,c2>c9,s13>s1,h2>h9,h2>c2,h2>h11,h7>h2,h12>s12,h12>h8,h7>h12,s3>s13,d12>d2,c7>c6,c7>c12,h7>c7,s3>s2,h3>s3,d12>d4,h7>h3,h4>h7,h5>h4,d5>h5,d5>d12,d8>d5,

h5,c8,c7,c12,d5,c4,s4,d7,c11,s9,d1,c1,s6,h12,s7,h2,c6,d12,d9,h7,h8,h3,d3,d6,c5,c10,c13,s10,h6,d8,s1,c2,h4,s8,h13,d10,c3,d4,s5,s3,h9,s2,d11,d2,h1,s11,c9,s13,d13,s12,h10,h11  
**888/1000: solving: solved in 11395 tries.**  
c7>c8,c12>c7,s4>c4,s9>s4,c1>d1,c1>c11,s6>s9,s7>d7,s7>s6,c1>c12,h2>h12,d9>d12,h7>h2,h7>s7,h7>h5,h3>h8,d3>h3,d3>d9,d6>d3,d6>c6,d6>d5,c10>c5,c13>c10,h6>d6,s8>s1,s8>d8,s8>s10,h13>h4,h13>c13,h13>h6,s3>s5,d2>d11,d2>s2,d2>d4,d2>c2,d10>d2,s11>s3,s11>s8,c9>c3,h9>c9,h9>h13,d13>d10,h1>h9,h1>c1,h1>h7,s13>d13,s12>s13,h10>h1,h11>h10,s11>h11,s12>s11,

s1,d4,s2,c12,h1,h9,h10,h8,d6,s8,s6,c7,d1,h12,s10,h2,s13,c6,c10,s4,d8,h7,c8,h4,s9,c1,s12,c3,s5,c5,c9,c4,c13,h6,d5,s3,h3,h13,d11,h11,s11,d12,h5,s7,d2,d10,d7,d9,d3,c2,c11,d13  
**889/1000: solving: solved in 111671 tries.**  
h9>h1,h10>h9,h8>h10,s6>s8,s6>d6,s6>s2,h12>h8,h12>c12,c10>c6,c10>s10,s4>s13,h7>h2,h7>c7,h7>h12,d1>d4,d1>s1,s4>s6,c8>d8,c8>c10,h4>s4,h7>h4,c5>s5,c5>c3,c9>c5,c9>s9,c9>c8,c1>c9,c13>c4,h3>s3,h13>h3,h13>c13,h13>h7,h6>h13,d11>d5,s7>s11,d10>d2,d7>d10,d7>s7,d9>d7,d13>d3,d13>d9,d12>d13,d12>s12,d12>d1,d11>d12,c2>c1,c11>c2,h11>c11,h11>h6,h11>d11,h5>h11,

d3,d7,d13,s10,d1,s4,c3,c1,s1,c5,s7,h8,d2,h3,s5,d6,c13,d12,h11,h7,d8,h2,s3,d5,h9,h5,c4,c2,s8,d4,s6,h10,d11,c11,s12,c12,c6,c9,s9,c10,h13,c8,d9,h6,s13,h1,s2,h4,c7,d10,h12,s11  
**890/1000: solving: solved in 340633 tries.**  
d7>d3,d13>d7,c1>c3,s1>c1,s1>s4,s1>d1,s1>s10,d6>d2,h7>h11,d5>d8,h5>h9,h5>d5,h5>h7,h5>s5,h5>h3,d12>d6,c4>c13,c2>c4,h2>c2,h2>h5,s8>s3,s8>h8,s8>s7,h10>h2,c11>d11,c12>s12,c6>s6,c10>c12,c9>c6,d9>s9,d9>c9,s13>h13,h4>h6,h1>h4,c7>c8,c7>c11,c10>c7,c10>h10,c10>c5,d9>d4,s13>s8,d10>d9,d10>c10,s13>d13,d12>d10,h12>d12,h1>h12,s2>s13,s11>s2,s1>s11,h1>s1,

c10,s11,s3,d9,h12,d10,c9,s7,d5,h9,d8,c5,s1,c6,h3,c4,h1,h8,d4,h2,d6,d7,d11,h10,d1,h6,c1,c13,h13,s13,h11,s10,h5,c7,d12,h4,c2,s9,d3,d13,d2,c12,h7,s6,s5,s4,c11,c3,s8,c8,s2,s12  
**891/1000: solving: solved in 2246 tries.**  
s3>s11,c9>d9,c5>d5,h8>h1,d7>d6,d11>d7,c13>c1,h13>c13,h13>h6,s13>h13,h11>h10,h11>d11,h11>h2,s10>s13,h5>h11,d12>d1,d13>d3,d2>d13,c12>c2,s6>s9,s5>s6,s4>s5,c3>c11,c8>s8,c8>c3,s2>d2,s2>s4,s12>s2,s12>c12,h7>c7,h7>h5,h4>h7,h4>d4,h4>h3,c4>h4,c4>c6,h8>d8,h8>h9,s10>s1,c4>c5,s10>s7,s10>d10,s12>d12,c8>c4,c8>c9,h8>c8,h12>h8,s10>c10,s3>s10,s12>h12,s12>s3,

c6,c13,h9,s10,d7,s9,c7,s1,s5,h13,h2,d13,c5,d6,h8,c10,h10,d10,d12,s6,h4,d5,c2,s13,c1,h5,d8,h3,c11,c3,h11,d3,d11,h1,d2,s8,d4,d1,c8,h6,s3,h7,s7,s12,s2,s11,c9,h12,s4,c12,c4,d9  
**892/1000: solving: solved in 761 tries.**  
c13>c6,s9>h9,s10>s9,c7>d7,s5>s1,h2>h13,c5>s5,c5>c7,d6>d13,h10>c10,h10>h8,d10>h10,d10>d6,d10>s10,d12>d10,c3>c11,c3>h3,c3>c1,d11>d3,d11>h11,d11>d8,d1>d4,d1>h1,d1>d11,d2>d1,c8>s8,c8>c3,s7>h7,s7>s3,s12>s7,s2>s12,s11>s2,s4>s11,h12>h6,c12>h12,c4>c12,c4>c8,s4>c4,s4>s13,d2>c2,d2>d5,s4>s6,h4>s4,h4>h2,d9>d2,d9>d12,h5>h4,c9>d9,c9>c13,c5>c9,h5>c5,

h1,s9,s1,d8,d7,d1,c6,h9,c10,h10,d2,s7,s3,s8,c4,c3,d4,d5,h11,c5,d10,h13,d12,h8,d6,d3,h2,s2,c12,c8,s13,c2,s12,s11,c13,c9,h6,s4,d13,c7,d11,d9,c11,h12,s6,c1,h5,h7,h4,h3,s5,s10  
**893/1000: solving: solved in 327178 tries.**  
s1>s9,s1>h1,d7>d8,d1>d7,d1>s1,h10>c10,h10>h9,d2>d1,s3>s7,s8>s3,c4>c6,c3>c4,d5>d4,h11>h10,c5>d5,c5>c3,h13>h11,d12>d10,h8>h13,s8>h8,d12>d2,d6>d12,d3>d6,s2>h2,s2>s8,c8>c12,c2>s2,c2>c5,c8>c2,s12>s13,c13>c8,d9>d13,d9>c9,s4>s11,d11>d9,c11>d11,s6>h6,s6>s12,c1>c11,c1>c13,c7>c1,s4>s6,h5>h12,h7>c7,h4>h7,h3>h5,h3>d3,h4>h3,s4>h4,s5>s4,s10>s5,

h11,h1,d9,h12,s10,h4,s8,c4,h13,d4,h9,d13,h2,s4,s1,h8,c6,s2,h3,d10,d3,s5,c3,c2,c13,c12,c8,d5,d6,s3,d2,h6,h5,d7,d8,c10,s6,d11,s11,d1,c7,h10,c11,c1,h7,c9,s13,d12,c5,s7,s12,s9  
**894/1000: solving: solved in 165 tries.**  
h1>h11,h13>h4,d4>c4,h9>h13,h9>d9,h9>h1,h12>h9,s8>s10,d13>d4,h2>h12,s1>s4,h8>s8,h8>h2,d3>d10,d3>h3,c2>c3,c2>s2,c2>c6,d3>d13,c12>c13,c8>c12,d6>d5,s3>s5,s3>d3,s1>s3,c8>c2,d2>d6,h5>h6,d8>d7,d8>c8,d2>d8,h5>h8,s6>s1,s11>d11,s11>s6,h10>c10,h10>h5,d1>d2,c11>c7,c1>c11,c1>d1,h7>h10,c9>c1,s12>d12,s7>s13,s7>h7,s12>s7,s11>s12,s9>s11,c9>s9,c5>c9,

d10,d1,s7,s1,c5,h13,c7,h4,s13,d8,h9,s9,s8,c1,s11,h12,s3,c3,h5,s2,h6,c2,h11,s5,c9,h7,d12,s6,d7,c8,s12,d9,h2,d4,d6,d2,c12,h10,c10,s10,d3,h8,d13,c11,c6,s4,d5,c4,h1,d11,h3,c13  
**895/1000: solving: solved in 102379 tries.**  
d1>d10,s1>s7,s1>d1,s13>h13,s9>h9,s8>s9,s8>d8,s8>s13,h12>h4,s3>s11,c3>s3,c3>c1,c9>c2,s6>s5,s6>h6,s6>s2,c9>c3,h7>h11,d7>d12,d7>h7,s12>s6,s12>h12,c8>c9,c8>s8,c8>c5,c7>c8,d7>c7,d9>d7,h2>h5,d4>d9,d6>d4,h10>h2,c10>c12,d3>d2,d3>d6,h8>h10,c11>c10,s4>s10,s4>s12,d11>d5,d11>c11,d13>d11,c4>c6,h1>h8,c4>s4,h1>s1,c13>c4,d13>c13,h3>h1,d3>h3,d13>d3,

h8,h11,c12,h1,h5,s6,c4,c13,h12,h7,h9,d8,s1,s3,c1,d7,h6,s8,h10,h13,d12,d6,c6,s4,c2,d11,d13,s9,c11,d2,c10,d1,h4,s5,s2,c3,d4,s10,c7,h3,s11,h2,s13,d3,d5,c9,d9,s7,c8,d10,c5,s12  
**896/1000: solving: solved in 556611 tries.**  
h11>h8,h5>h1,c4>c12,c13>c4,h7>h12,h9>h7,s1>s6,s3>s1,h13>h10,d6>d12,d6>h6,d6>d7,s8>d8,c6>c1,d6>c6,h13>h9,h13>c13,h13>h11,h5>h13,s8>s3,d11>d6,d13>d11,d2>c2,c10>c11,d1>d2,s5>s9,d4>h4,d4>d1,d4>s4,d4>d13,h3>c3,s10>c10,h2>h3,s13>s11,d10>d9,d10>d3,d5>d10,s7>s13,s7>c7,s7>s10,s7>s8,s2>s7,d5>d4,s5>d5,h2>h5,s2>h2,c8>c9,c5>c8,s12>s2,s5>s12,c5>s5,

s5,d12,s8,c11,c8,h13,d3,d9,s4,h7,c1,c3,d7,d11,c2,d13,c9,h2,c7,s9,s7,d10,c10,d1,d4,h6,s6,s10,d5,h9,d6,c12,c6,h12,h8,h5,h10,d8,c4,s3,h1,c13,s13,h3,c5,s1,h11,s2,s11,s12,h4,d2  
**897/1000: solving: solved in 133714 tries.**  
c8>c11,c8>s8,d3>d12,d9>d3,c3>c1,d11>d7,h2>c2,h2>h7,d13>d11,c7>c9,s7>s9,s7>c7,c10>d10,c10>c3,d4>d1,s6>h6,s10>s6,c6>c12,c6>d6,h8>h12,h5>h8,h5>d5,h9>h5,h10>s10,h9>h10,d8>d4,c4>c6,s13>s3,h1>h9,c13>s13,s11>s1,s12>s11,h11>h3,s2>s12,h4>h11,h4>h1,c4>h4,c13>c4,c13>d13,c13>c10,c13>h13,s2>s7,s2>h2,s2>s4,d2>s2,d2>d9,d8>d2,c8>d8,c13>c8,c5>c13,c5>s5,

d8,h7,h12,s2,s4,h6,c7,h4,c2,s8,c4,c8,s11,h10,c6,c13,h8,s9,d10,h3,h11,h13,s10,h9,h1,d3,d2,s6,c10,s3,d4,c1,d13,h2,d5,d9,s12,d6,c5,c9,s13,s7,c11,h5,d7,d1,d12,s1,c12,s5,c3,d11  
**898/1000: solving: solved in 7695 tries.**  
h12>h7,s4>s2,h4>s4,h4>h12,h6>h4,c2>c7,s8>d8,c4>c2,c8>c4,s11>s8,c6>h6,c8>c6,h8>c8,h10>h8,s9>s11,h3>h10,h11>h3,h13>h11,c13>h13,s10>d10,h9>s9,h1>h9,d2>d3,c10>s10,c10>c13,s3>s6,d9>d5,c9>c5,c9>d9,s7>s13,d7>s7,d7>d6,c11>c9,c11>c1,d12>d7,h5>h2,d12>d13,d1>d12,s1>d1,s1>s3,s1>h1,c11>c10,d4>d2,s5>h5,s5>s1,s12>s5,c12>s12,c3>c12,c11>c3,d11>d4,d11>c11,

s7,s5,c7,d2,h2,h5,c11,h10,s10,h12,s3,d8,h7,s1,h6,h3,h1,c10,d5,s12,h8,c8,d12,d13,s13,c12,d3,d6,c9,c4,c2,d11,s11,s9,d9,h11,c5,s6,c1,h13,d1,d10,c6,s8,s4,d7,d4,s2,c3,h9,c13,h4  
**899/1000: solving: solved in 3703 tries.**  
s5>s7,h2>d2,h5>h2,s10>h10,h12>h5,s3>s10,s1>s3,h6>h7,h3>h6,h1>h3,d5>d8,h8>h1,c8>h8,c8>c11,c10>c8,d12>s12,d12>d5,d12>h12,d13>d12,s13>s1,d6>d3,c4>c9,c2>c4,s11>d11,s9>s11,d9>s9,c5>c2,h13>h11,d1>c1,d1>d9,d10>d1,c6>s6,c6>c5,c6>d6,c6>c12,d4>d7,s2>s8,s4>s2,d4>s4,h9>h13,c13>c3,h4>h9,d4>h4,c13>c6,c13>d13,c13>c7,s13>s5,c13>s13,c10>c13,d10>c10,d4>d10,

s3,s11,d9,d8,c13,h1,h11,c6,c12,c5,h9,s10,d1,d4,s5,h4,c8,c11,c3,s6,c9,h3,d6,d7,h2,s13,d5,h7,h12,d13,d3,c7,s9,c4,h10,s8,c2,d2,h8,s7,d11,s2,d12,d10,c1,s4,s12,h5,s1,c10,h13,h6  
**900/1000: solving: solved in 9806 tries.**  
s11>s3,d8>d9,h11>h1,h11>s11,c6>c13,c12>c6,c5>c12,h9>h11,d1>d8,d4>d1,s5>s10,s5>c5,h4>h9,d4>h4,c11>c8,c3>c11,h3>c3,d7>d6,d5>d7,h12>h7,d3>d13,s8>s9,d2>c2,d11>d2,s2>s7,d12>d11,d10>d12,d10>h10,h8>s8,h8>h12,d10>d3,c4>c7,s4>c4,s12>s4,s12>s13,s1>s2,s1>s12,h5>h8,c1>s1,c10>c1,c10>c9,h5>h2,d10>c10,d5>d10,d5>s5,d5>d4,h5>d5,h3>h5,h6>h13,h6>s6,h6>h3,

c7,c10,s9,s6,c11,h2,d3,c3,d10,s2,h6,d2,d9,d12,c4,c2,s5,c5,h4,h5,s8,s3,d8,h12,s13,h3,c1,c6,h9,d5,s10,c8,h7,d6,h13,h10,d7,c12,h11,d4,s1,c9,s11,s4,c13,s12,d1,d13,s7,d11,h8,h1  
**901/1000: solving: solved in 55986 tries.**  
c10>c7,s6>s9,c3>d3,s2>h2,d9>d2,d12>d9,c2>c4,c5>s5,c5>c2,h4>h6,h5>c5,s3>s8,d8>d12,h3>s3,h3>h5,h12>h3,c6>c1,h9>h12,s10>s13,d6>d5,d6>c6,d6>d8,h7>h9,h13>h7,h10>h13,h10>d10,h4>h10,d7>d6,c12>c8,s4>s1,s4>d4,c9>c12,s7>s12,s7>s4,s7>s10,s7>d7,c9>c3,s7>s2,h11>h4,s11>s7,s11>c11,c9>c10,s11>s6,c13>c9,h11>s11,d13>c13,d11>d13,h11>d11,h1>h8,h1>d1,h1>h11,

s9,h4,h3,d13,s8,d8,h1,c7,h2,h10,c8,s1,h7,c6,d6,d9,s11,c10,d11,s6,h8,d12,h12,d1,s5,s13,c1,s12,d5,s3,s2,s4,d2,d10,c4,s7,h6,h5,s10,c13,c5,c9,h13,h11,d4,c11,d7,c2,c3,h9,c12,d3  
**902/1000: solving: solved in 136333 tries.**  
h3>h4,s8>s9,d8>d13,h10>h2,h7>h10,h7>c7,h7>h1,d6>c6,d9>d6,d11>d9,s11>d11,s11>s1,h12>d12,h12>h8,s5>s6,s13>s5,c1>d1,c1>c10,s12>h12,s12>s13,s2>s3,s4>s2,d10>d2,s7>s4,h5>h6,s10>d10,s10>s12,h5>d5,c5>c13,c5>h5,h11>h13,c11>c9,c11>c5,c11>s11,c11>c8,c4>c1,s7>s10,d4>c4,d7>d4,d7>d8,c12>c2,c12>c11,c3>c12,h9>h11,d3>c3,d3>h3,d7>d3,s7>s8,d7>s7,h7>d7,h9>h7,

h10,h13,c4,d7,s12,h4,c2,h7,c8,d5,d6,c6,h1,s5,h5,s1,s3,c7,s13,c12,d1,s2,s4,d8,d2,d13,c1,s10,s8,c11,d10,d9,h12,h8,s6,c3,d4,c5,d3,c10,s11,h6,h11,c9,h2,d12,d11,h3,c13,s7,h9,s9  
**903/1000: solving: solved in 26260 tries.**  
h13>h10,h4>c4,h4>h13,h7>d7,h7>h4,c8>c2,d6>d5,c6>d6,c6>c8,h1>h7,h5>s5,h5>h1,s3>s1,s2>s13,s4>s2,d8>d1,d2>d8,d13>d2,s8>s10,d9>d10,h8>h12,h8>s8,d4>d9,c3>c11,c5>c3,s11>s6,h11>h6,h11>s11,c9>c10,h2>h11,h2>h8,d11>d3,c13>c9,c13>c5,c13>d13,c13>c7,c1>c13,d4>s4,d11>d4,d12>d11,c12>d12,c12>c1,h9>h2,h3>s3,h3>h5,c12>c6,h9>h3,s9>s7,s9>h9,s12>s9,c12>s12,

s6,s4,s10,h7,d6,c6,c3,s9,s2,h13,h8,s13,d5,d9,d10,d13,d11,d12,c13,c12,h2,d7,s1,c8,s5,d1,s3,c10,d4,c5,h11,c9,s11,h10,h5,c7,s7,h12,c11,d3,c1,h6,d8,h1,s8,c2,h4,d2,s12,c4,h9,h3  
**904/1000: solving: solved in 3827 tries.**  
s4>s6,s10>s4,c6>d6,c3>c6,s9>s10,s2>s9,h8>h13,d9>d5,d10>d9,d13>d10,d13>s13,d11>d13,d12>d11,c13>c3,c12>d12,d1>s1,d1>d7,c8>c12,c8>h8,c8>c13,h2>s2,h7>h2,s3>s5,c10>c8,h10>h11,h5>h10,h5>c5,s7>c7,s7>s11,c11>c9,h12>h5,d8>d3,c1>c11,h1>h6,s8>s7,d8>s8,d8>d4,h1>c1,h1>h12,h1>d1,d2>d8,c2>d2,c4>c2,c4>c10,h4>c4,h4>h7,h1>h4,h9>h1,h3>h9,s3>h3,s12>s3,

c8,h11,s3,c12,c10,c1,s8,c3,c2,s13,d2,s11,s6,c4,d12,d4,h6,s2,s5,h9,d10,h13,h3,c7,d1,c6,c11,h5,d5,d9,h4,d8,d3,h8,d7,s7,c13,h12,h7,d13,h2,s10,d6,s4,c9,s1,c5,d11,s9,h10,h1,s12  
**905/1000: solving: solved in 2203011 tries.**  
c12>c8,c10>c12,c1>c10,s8>s3,c3>c1,c2>c3,s13>s8,d2>c2,s11>s13,s11>h11,s6>s11,d12>d2,d4>c4,s2>s6,s5>s2,h9>h6,h3>h13,d1>d10,c6>c7,c11>c6,d5>h5,d5>d1,d5>s5,d5>d12,d4>d5,h3>h9,d3>d8,s7>d7,h2>h12,h2>h8,h7>h2,s7>h7,s10>s7,d13>d3,s4>s10,d6>d13,c5>c13,c9>c5,s9>c9,s9>s4,d11>d6,d11>c11,d9>d11,h4>d4,h3>h4,s9>d9,h10>h3,h1>h10,s1>s9,s1>h1,s12>s1,

s12,h5,h4,h9,c10,h13,d12,c11,s1,c9,d8,h1,c12,s4,h10,c8,c2,c3,d3,h7,d1,d11,c4,s7,c13,d7,h12,s6,h2,h6,d2,s9,s10,d5,s13,h8,d10,h11,c5,d6,h3,c1,c7,s2,d4,d13,s8,s3,s5,s11,c6,d9  
**906/1000: solving: solved in 40016 tries.**  
h4>h5,h9>h4,c11>c10,d8>d12,h10>h1,c2>c8,c3>c2,d3>c3,d11>d1,s7>h7,c13>c4,d7>s7,d7>d3,d11>d7,c13>c12,s6>s4,h2>h12,h6>h2,s10>s9,d10>d5,d10>s10,d10>d2,h8>h6,h11>h8,h11>d11,h11>h10,s13>c13,s13>s1,s6>s13,c1>c5,c7>c1,c7>c9,d13>d4,s3>s2,s3>h3,s5>s3,s11>s5,d13>d10,s11>h11,s8>s11,s8>d8,s6>s8,d13>h13,d6>d13,c7>c11,c6>c7,d6>c6,d9>h9,d6>d9,s6>d6,s6>s12,

h13,h11,s3,h12,h6,s7,c5,c8,c9,c1,c13,c7,s1,s10,h8,d5,c12,d6,s5,h5,c11,s2,h9,d13,d12,d1,s8,s9,c3,c10,c2,d3,d8,c6,d4,h2,h7,d2,d9,c4,h1,d10,s4,d7,h4,d11,h10,s13,s6,s11,h3,s12  
**907/1000: solving: solved in 7201 tries.**  
h11>h13,h6>h12,c8>c5,c9>c8,c1>c9,c13>c1,c7>c13,c7>s7,s1>s3,s10>s1,c12>c7,d6>d5,d6>h6,h5>s5,h5>h8,h9>h5,d12>d13,d1>d12,s9>s8,c10>c3,c2>c10,c2>s2,c2>c11,s9>h9,s9>s10,c2>c12,d3>d1,d8>d3,c6>d6,c2>c6,d4>d8,h7>h2,d2>c2,d4>d2,h7>h11,d9>d4,d9>s9,s4>c4,h1>h7,d7>d9,h10>d10,h10>h1,d11>d7,s6>s13,s12>s6,s11>s12,s11>d11,s4>s11,h4>s4,h4>h10,h3>h4,

s3,c2,s6,s12,c9,s13,s8,h8,s1,h5,d9,c6,d10,s9,d7,s10,c12,c10,d13,h1,h3,s4,h7,c3,c5,h6,d12,h2,c13,d4,s7,c7,s5,h10,d5,s11,d11,d8,c1,d3,h9,d6,c11,h11,s2,d1,d2,h13,h4,h12,c8,c4  
**908/1000: solving: solved in 3491 tries.**  
s12>s6,s8>s13,h8>s8,s1>s12,h5>h8,c6>c9,d10>d9,s10>d10,s10>s1,s9>s10,c12>c6,c10>c12,d13>d7,h3>h1,c3>h3,c3>c10,c3>s3,c2>c3,s4>s9,c5>h5,h6>h7,d4>d12,c7>s7,c7>c13,h10>h2,d5>s5,d5>d4,d5>c5,d13>d5,h10>h6,d11>s11,d11>d13,d8>d11,c1>c7,d3>d8,c11>c1,d1>d6,d2>d1,h11>c11,h11>h10,d2>d3,s2>d2,h9>h11,h12>h9,h13>h12,h4>h13,c4>c8,c4>h4,c4>c2,s4>c4,s2>s4,

c13,s3,h10,c4,s5,h12,d13,h3,c5,d1,c2,s9,d12,s11,s12,c9,h6,h8,h11,s4,c7,s2,c6,s6,d4,s1,d8,c10,d7,h13,h2,s7,c8,c3,d9,h7,s10,d3,d6,d5,d11,c11,s8,s13,d10,c1,d2,c12,h4,h9,h5,h1  
**909/1000: solving: solved in 83508 tries.**  
c4>c13,d1>d13,c2>c5,s12>s11,s12>d12,s12>s9,h8>h6,h11>h8,s4>s12,s6>c6,s6>s2,h2>h13,c3>c8,h7>s7,h7>h2,h7>d7,d3>c3,d3>d8,s10>c10,d9>d3,d6>d9,d6>s6,d4>d6,s10>s1,h7>c7,d11>d4,c11>d11,c11>c9,h11>c11,h11>h3,h7>h11,s8>s4,s13>s8,d2>d5,d2>c2,d10>d2,s10>s13,s10>d10,c1>d1,h4>h7,h9>h4,h5>h9,h5>s5,h12>h5,c12>h12,c12>c4,s10>s3,c1>c12,h10>s10,h1>h10,h1>c1,

s6,c12,d4,c7,c10,s11,c2,c8,c13,d5,d2,s4,d9,s1,s12,d10,h3,s3,h12,d11,h1,h8,c1,s2,c11,c6,s9,h5,h4,d6,d1,s10,d8,h2,s5,c3,h6,d12,h11,d7,s8,h7,h10,s7,h13,d3,h9,s13,c4,c5,c9,d13  
**910/1000: solving: solved in 31411 tries.**  
c10>c7,c8>c2,c13>c8,d2>d5,s4>s11,d9>d2,s1>s4,s12>s1,s12>c12,s12>s6,c13>c10,d10>d9,s3>h3,d11>d10,h1>h12,h8>h1,s2>s3,c11>c1,c11>d11,c11>c13,s2>s12,h5>h8,h4>h5,d1>d6,h6>h2,s5>s10,d12>d8,h7>h11,d7>h7,d7>d12,h10>h6,s7>s8,s7>d7,s13>h13,s13>s7,s13>s9,d3>c3,d3>d1,h9>h10,c9>h9,c5>s5,c5>c6,c9>c5,c4>c9,c4>h4,c4>c11,s13>s2,d13>d3,d13>s13,d4>d13,c4>d4,

d11,h5,h9,h1,d6,c12,h10,s7,d12,c11,s5,d4,d8,s2,s6,c6,c3,h4,s10,s11,c4,h12,c5,s4,d5,s3,d13,d10,s9,h3,c10,c1,d1,d9,s1,h2,s13,h11,h13,s12,c9,s8,h7,c7,d2,d3,c8,d7,c2,c13,h6,h8  
**911/1000: solving: solved in 7487 tries.**  
h9>h5,h1>h9,h10>h1,d12>d6,c12>d12,d8>d4,s6>s2,c6>s6,c6>c11,c3>c6,s10>s5,s11>s10,c4>h4,c4>c3,d10>d13,h3>s3,c1>c10,d1>c1,d9>d1,d9>s9,d9>d10,h2>h3,s13>s1,h11>h2,h13>s13,c9>d9,s8>s12,c7>h7,c13>c8,c13>c7,c13>c9,h13>c13,h13>h11,s8>s4,s8>d8,s8>s11,c5>c4,d3>d5,d7>d3,h6>h13,h8>h6,h8>s8,h12>h8,d7>s7,d7>d11,h12>h10,c12>h12,d2>d7,c5>c12,c2>c5,c2>d2,

s4,d9,c11,s1,h10,c2,c1,c7,c10,c8,s5,d13,h3,h13,h4,h6,h5,s2,h1,d5,s12,d11,c4,s9,h12,c5,h11,s8,d8,s7,c13,d6,d10,h9,h7,s10,s6,d1,c3,d3,s13,c6,d2,h8,d4,s3,c9,s11,d7,h2,d12,c12  
**912/1000: solving: solved in 17685 tries.**  
s1>s4,c1>c2,c7>c1,c10>c7,c10>h10,c10>c11,c8>c10,s5>s1,h13>h3,h13>d13,h4>h13,h6>h4,h5>h6,h5>s5,s12>s2,d11>d5,c5>c4,h11>h12,h11>d11,h11>h1,c5>c8,s8>s9,d8>s8,s7>s12,d10>d6,h7>h9,s6>s10,d1>d10,c6>c3,s13>s6,s13>c13,d4>d3,d4>d1,d2>d4,c9>c6,s11>s3,h2>h8,h2>d2,h7>h2,s11>s13,s11>s7,h11>s11,h11>h5,c9>c5,c9>d9,h7>h11,d7>h7,c12>c9,d12>d8,d12>c12,d12>d7,

h12,d2,d5,h11,s5,d8,c7,d4,s2,c11,d13,h10,c3,h9,h7,c4,c1,h1,c5,h8,h6,c10,h5,h2,s11,d10,d12,d3,s9,c6,c2,h13,h3,s8,c12,d7,h4,d9,d6,s10,s7,s3,c13,s13,s12,s1,d11,c9,d1,s6,c8,s4  
**913/1000: solving: solved in 146089 tries.**  
d5>d2,d8>d5,s2>s5,c3>c11,h9>h10,h7>h9,c4>c3,c4>d4,c4>c7,c1>c4,h1>h7,c5>c1,h8>h1,h6>h8,c10>c5,h5>h6,h2>h5,h2>s2,h2>h11,d13>d8,d12>d10,d3>d12,c2>c6,h3>h13,h3>d3,h3>h2,c2>c10,s9>s11,c12>c2,c12>h12,s8>s9,h4>h3,d7>d13,d9>d7,s7>s10,s3>s7,s13>c13,s13>s3,s12>s13,d11>d6,s1>s12,c8>c9,d1>d11,d1>d9,s1>d1,s4>s6,s4>h4,s4>s1,s8>s4,c8>s8,c8>c12,

d5,h8,c12,h1,d13,s3,s6,s7,c1,d11,d10,d2,h3,s8,s2,s12,c2,h6,h13,c5,h11,d9,d8,d1,c7,h10,h4,d12,c4,h5,c3,d7,c8,s5,h12,d6,d4,h7,h9,d3,s1,c13,s9,h2,c9,s4,s10,s11,c11,s13,c10,c6  
**914/1000: solving: solved in 70355 tries.**  
s6>s3,s7>s6,c1>h1,c1>c12,d13>d5,d10>d11,d2>d10,s8>s7,s2>s8,d2>s2,d2>d13,c2>c1,h13>h6,d8>d9,d1>d8,c7>c5,h4>h10,h5>h4,c3>c4,d4>d6,h9>h12,c9>c13,s9>c9,s4>s1,s4>d4,s9>s4,s9>h9,s9>s5,h7>d7,h7>h5,h7>c7,h7>h13,d12>d1,d12>s12,h11>h7,s13>s10,s13>s9,s11>s13,c11>s11,c11>h11,c11>c2,d3>d12,d3>h3,c3>d3,c3>c11,c8>c3,h2>d2,h8>h2,c8>h8,c10>c8,c6>c10,

c12,d8,d11,d5,d12,h11,h3,d1,d13,s5,c10,s1,h8,d10,s10,s4,d9,s11,h7,s7,c6,h13,s12,s13,d7,d4,h10,h4,d2,c1,c11,h6,h5,s2,s3,c8,c13,c7,c4,h9,h1,s8,s6,c3,h12,d3,h2,s9,d6,c5,c2,c9  
**915/1000: solving: solved in 5821 tries.**  
d11>d8,d5>d11,d12>d5,d12>c12,h3>h11,d13>d1,d10>c10,s10>d10,s10>s5,s1>s10,h8>h3,s4>s1,s7>h7,s7>s11,s12>s7,s13>h13,d4>d7,h4>h10,h4>d4,c11>c1,h6>h4,h5>h6,s3>s2,c13>c8,c7>c13,c4>c7,h1>h9,s8>s3,c3>c4,s6>s8,d3>c3,d3>d2,h12>h1,s9>s6,c2>h2,c9>c2,c9>c11,s9>c9,s9>s13,s9>d9,s9>s4,s12>s9,s12>d12,d3>d13,h5>h8,d6>d3,c6>d6,h12>s12,h5>h12,c5>c6,c5>h5,

h10,c4,s5,h5,c10,c1,h6,h4,d11,s4,s13,s7,h1,c11,c7,d4,h11,d10,s9,c2,h8,d6,h2,c9,d12,d8,c13,d7,c12,c6,s3,c8,h13,s6,c5,s11,s10,s2,c3,s12,h7,s8,d1,s1,d3,d9,h3,d13,h12,h9,d5,d2  
**916/1000: solving: solved in 8910 tries.**  
h5>s5,c10>h10,c4>c10,h4>h6,h4>c4,h5>h4,s13>s4,s7>s13,h1>c1,h1>h5,c7>c11,c7>s7,h11>d11,h11>h1,d10>d4,c2>c7,d6>d10,h2>h8,h2>c2,h2>h11,c9>s9,d8>d12,c6>c12,s6>s3,s6>c6,c8>c13,c8>d8,c8>c9,s6>d6,c5>c8,s10>s11,s12>s10,s2>s12,h7>h13,h7>d7,s2>s6,h7>h2,s8>s2,c3>c5,d3>c3,s1>s8,d1>d3,d1>s1,h3>h7,d9>d1,h12>h3,h9>h12,d9>h9,d13>d9,d5>d13,d2>d5,

c11,h8,c12,c13,h2,h12,s10,d2,c6,h3,d5,c10,s1,h6,h7,h9,c7,d11,s2,d9,d1,c4,d6,s4,h5,h1,s8,s5,d8,d12,c1,c8,s11,s3,h11,s9,d10,h10,c5,s7,h13,s6,c2,d3,h4,d4,s12,s13,d7,c3,c9,d13  
**917/1000: solving: solved in 8775 tries.**  
c13>c12,h12>h2,d5>d2,h6>h3,h6>c6,h6>h12,s1>s10,h9>h7,d1>d9,h1>h5,s5>s8,d12>d8,c1>h1,c1>c4,c1>d1,c1>c7,s5>s4,s11>s5,s11>d11,s2>s11,d12>d6,c8>c1,h10>d10,s7>s9,d4>h4,d4>d3,d7>d4,s12>s6,c3>c2,d13>d7,d13>h13,s13>d13,s13>s7,s12>s13,s12>d12,s12>s2,s3>s12,h11>h9,c5>c8,c5>d5,c5>c13,h11>h6,c10>c5,h11>c11,h8>h11,s3>s1,h10>h8,c10>h10,c3>s3,c3>c10,c9>c3,

h10,c4,s3,c8,h7,h8,d7,s2,c3,h5,s13,h9,d1,d8,h2,s7,c5,c7,h12,s1,c6,d13,s9,s8,s6,s12,s10,c1,d9,d3,d6,c2,s4,d11,c10,c13,d4,c11,s11,h3,h11,h13,d2,d5,s5,h1,h6,h4,d12,c12,d10,c9  
**918/1000: solving: solved in 8681 tries.**  
h8>h7,h8>c8,h8>h10,c3>s3,c3>c4,d8>d1,c7>c5,c7>s7,c6>c7,s8>s9,s6>s8,s12>s6,s12>h12,s1>s12,c1>s1,c1>c6,d13>d8,d3>d9,d6>d3,c2>c1,c2>h2,d6>d13,s4>s10,d11>d6,c13>c10,s11>c11,s11>s4,h11>h3,h11>s11,h11>h9,d11>h11,c13>s13,d2>c2,d2>d11,d2>s2,d2>d7,d4>d2,c13>c3,s5>h5,h13>c13,h13>h8,d5>s5,h1>h13,h6>h1,h4>h6,d4>h4,d5>d4,d10>d5,d12>d10,c12>d12,c9>c12,

c2,s1,c12,s9,c7,h13,c4,d13,h3,d7,h11,s5,h1,s8,h7,d1,h2,s4,c11,h6,c9,c8,h5,s12,c5,c3,h4,d2,s2,s6,s11,c10,d10,c1,c6,s10,d3,h10,h8,d5,s3,d9,s13,h9,d6,d4,c13,d8,d12,s7,d11,h12  
**919/1000: solving: solved in 233473 tries.**  
h3>h13,d7>d13,d7>c7,d1>h1,h2>h7,h6>h2,c9>c11,c8>c9,c8>s8,c3>c5,h4>h5,h4>s4,h4>h6,c3>c8,s2>d2,s2>s12,s6>s2,s11>s6,c10>c3,d10>c10,d10>d1,h4>h11,h4>c4,h4>h3,s5>s9,c6>c1,s10>d10,h8>h10,s3>d3,s3>s10,d9>d5,h9>h8,d9>h9,d6>c6,d4>d6,d4>h4,d8>d9,d12>d8,d12>d4,s3>s5,s7>s11,s7>s3,d7>s7,d12>d7,s13>s1,c13>s13,c13>c2,c12>c13,h12>c12,d12>h12,d11>d12,

d2,d5,h10,h7,c4,c8,d13,s4,c6,s2,h8,s1,h6,h2,s13,s10,s11,s8,h1,h11,d11,c3,s12,d1,h4,s6,d7,d3,h3,d9,d8,c5,h13,c11,c1,c9,d12,c12,h12,c7,s7,s5,c13,h9,h5,d10,d4,c2,s3,d6,c10,s9  
**920/1000: solving: solved in 1503 tries.**  
d5>d2,h7>h10,c8>c4,d13>d5,h2>h6,h2>s2,h8>h2,h8>c8,h8>h7,s13>s1,s10>s13,s11>s10,s8>s11,s8>h8,s4>s8,h11>h1,d11>h11,d11>d13,c3>c6,s6>s12,d3>d7,h3>d3,h3>h4,h3>c3,d9>d1,d8>d9,c1>c11,c9>c1,c12>d12,c12>c9,h12>c12,h12>h13,s7>c7,s5>s7,h9>h12,h5>h9,h5>c5,h5>h3,s5>h5,s5>s4,d8>d11,c10>c2,c10>c13,d10>c10,d10>d8,d4>d10,s6>s5,d6>d4,s6>d6,s3>s6,s9>s3,

s3,s11,s10,h11,d2,c12,d12,d1,c9,s8,s5,h10,c10,d8,s12,s7,d10,c6,d4,h3,h7,d3,h2,s2,c4,h4,h12,h6,c3,h1,c13,d7,c5,c11,h13,d9,d5,c7,h9,d6,s1,c1,s9,d11,d13,c2,h8,s4,s13,c8,s6,h5  
**921/1000: solving: solved in 82761 tries.**  
s11>s3,s10>s11,d12>c12,d12>d2,d1>d12,s5>s8,c10>h10,s12>s5,s7>s12,d10>d8,d10>c10,d10>d1,h7>h3,h7>s7,h7>h11,c6>c9,d3>d4,s2>h2,c4>c6,h4>c4,h12>h4,h6>h12,c11>c5,h13>c13,h13>h1,c11>c3,d9>d7,d5>d9,h9>h13,c1>c7,c1>c11,d6>d5,s9>h9,s1>c1,s1>s2,s9>s1,d11>d3,d13>d11,s13>s4,c8>c2,h8>c8,s13>s9,s13>d13,d6>d10,h6>d6,s13>s10,h6>h7,s6>s13,h6>s6,h8>h6,h5>h8,

c5,s2,h6,s11,s10,c9,h10,h3,h12,d6,d4,c7,h2,h13,s9,d12,h9,c13,s13,h8,h7,d5,h4,c8,d8,s4,h5,d9,h11,s8,c10,c6,d10,c1,d13,s3,d7,c12,s1,d3,d2,s5,d1,c2,c4,s12,d11,s7,c3,h1,c11,s6  
**922/1000: solving: solved in 4670 tries.**  
s10>s11,h10>h6,s10>h10,s10>s2,h12>h3,d4>d6,c7>c9,h13>h2,d12>d4,d12>h12,h9>s9,h9>h13,c13>c7,s13>c13,s13>s10,h8>h9,h7>h8,d8>c8,h5>h4,h5>d5,h5>h7,h5>c5,d8>d12,s8>s4,s8>d8,s8>s13,h11>h5,c6>c10,s1>s3,d2>d3,c2>d2,c2>c12,c4>c2,d1>d7,d1>s1,d1>d10,c1>d1,s12>s5,d11>d13,d11>d9,c3>c4,s7>s12,s6>s7,c11>c3,c11>d11,c6>c11,s6>s8,c6>s6,c1>c6,h1>c1,h1>h11,

h1,s13,c13,h4,s10,c3,d7,c11,d8,h13,d2,c2,s2,s11,d4,c12,h12,d5,c10,h2,c1,d10,h10,d6,s9,d11,s7,s4,d12,h6,c4,s8,d1,h8,h3,c9,c8,s12,c7,d13,c6,s5,h5,h7,s1,s6,h11,s3,d9,h9,d3,c5  
**923/1000: solving: solved in 3337 tries.**  
c13>s13,c3>c13,c2>d2,c2>c11,s2>c2,s11>s2,h12>c12,h2>h12,c1>c10,h10>d10,h10>h2,s4>s7,c4>s4,d1>d12,h8>s8,h8>h6,h3>h8,c9>c4,c8>c9,h5>s5,h7>h5,h7>c7,s6>s1,s6>c6,h11>h7,s6>s12,s3>s6,h9>h11,d9>d13,d9>h9,d9>d1,d9>s9,d9>d6,d11>d9,s3>h3,c5>c8,c5>d5,c1>c5,d11>d4,d11>s11,d11>d7,d8>d11,h13>h4,h10>h13,s10>h10,d3>d8,s3>s10,d3>s3,c1>h1,c3>c1,d3>c3,

h12,c1,c2,d11,c5,d5,c8,h3,h4,c11,h5,h2,h10,s7,s10,s3,s6,s1,d13,d12,s2,c7,s4,h8,h1,d2,s12,d9,d10,d1,s9,c12,d7,c9,s11,s5,c13,h13,s8,h7,d6,h6,s13,c4,c6,c3,h9,c10,d8,d4,d3,h11  
**924/1000: solving: solved in 25845 tries.**  
c2>c1,d5>c5,d5>d11,h4>h3,h2>h5,h10>h2,s10>s7,s10>h10,s3>s10,s6>s3,s1>s6,d12>d13,h1>h8,s12>s4,s12>d12,s12>s1,s2>s12,d2>s2,d9>d2,d10>d9,d1>h1,c12>c7,s11>s9,s5>s11,c13>c9,h13>c13,s8>s5,d6>d7,h6>d6,h13>h6,s13>s8,h13>s13,h7>h13,c4>c12,c4>h4,c4>c8,c11>c4,c10>c6,h9>h7,c10>d10,d8>d1,d4>d8,d3>d4,d3>d5,c10>c2,c3>d3,c3>c10,c11>c3,h11>h9,h11>c11,h11>h12,

h9,d6,c4,c11,d7,d4,s7,h10,c8,h3,s1,d3,s6,s2,s11,h13,d12,d8,s12,d10,d2,s3,c6,d13,h6,c1,s10,h4,c3,h11,s13,h7,c13,d1,d11,c10,d5,h2,c5,s4,h1,s8,c9,s9,c7,d9,h8,s5,h12,c2,h5,c12  
**925/1000: solving: solved in 343567 tries.**  
c11>c4,d4>d7,s2>s6,s11>s2,d12>d3,d8>d12,d8>c8,d8>d4,h3>h10,s11>s1,d2>d10,d13>d2,h6>c6,s10>s3,d11>d1,c5>c10,d5>c5,s9>c9,s9>s4,h8>s8,h8>h2,d9>s9,d9>d11,d5>d9,h1>h8,h5>s5,h5>d5,h1>h5,c7>h7,c13>c7,h1>h11,h1>c1,h1>h6,h4>h1,s13>s10,h12>h4,c12>c2,c12>h12,c12>s12,c3>c12,c3>h3,c3>c11,s11>s7,s13>s11,d13>d8,h13>s13,c13>c3,d13>c13,d13>d6,h13>d13,h13>h9,

c1,d8,h12,c7,s11,c2,c6,s1,h11,s6,s2,h13,h8,d12,h2,c12,s9,c13,h1,d6,h4,s4,d5,h5,s10,d2,c5,d9,s7,s13,h10,c9,c11,s3,d13,h3,c8,h9,c10,s12,h6,c4,d7,d3,d4,h7,s5,c3,d11,s8,d1,d10  
**926/1000: solving: solved in 86657 tries.**  
c7>c1,c6>c2,h11>s11,h11>h12,c6>c7,s6>s1,s6>c6,s2>s6,h13>h11,h8>h13,h8>d8,h2>s2,h8>h2,c12>d12,s4>h4,h5>d5,h5>h1,s10>s4,s13>s7,c9>d9,c9>c5,s13>s10,s13>c13,s13>s9,h5>h8,d2>d6,c9>c12,c4>c10,d4>d3,h7>h6,h7>h9,s5>s12,d7>h7,c3>c4,d1>d4,d10>d1,d10>d7,c3>h3,d10>d13,d10>h10,d10>d2,s3>s13,c3>s3,c3>c9,c8>c3,d11>d10,c11>d11,s5>h5,s8>s5,c8>s8,c11>c8,

h6,d10,h1,d11,d12,h5,s9,c3,h4,c12,s1,d8,s7,c6,h12,s8,c4,c9,s4,d1,h10,h3,d13,d6,d2,c7,d5,s5,s11,d3,h11,d7,h9,c10,h2,h13,s3,c2,c1,d4,s12,s6,s10,c8,c5,s13,h8,c13,h7,d9,s2,c11  
**927/1000: solving: solved in 265295 tries.**  
d12>d11,h4>h5,c12>c3,c12>d12,s1>s9,s1>h1,s8>s7,s8>d8,s8>s1,h12>c12,h12>h6,h4>h12,c4>c6,c4>h4,c9>c4,s4>s8,h10>d10,h3>h10,d13>d1,d6>d13,d2>d6,s5>d5,s5>s4,s11>s5,d7>c7,d7>d2,d3>d7,h11>h3,h13>h2,c2>c10,s12>s3,s6>s12,c13>c5,s13>s10,s13>s6,s13>h13,c13>c1,c13>s13,c13>c2,d4>d3,c8>c13,h8>c8,h7>h8,d9>d4,d9>c9,h9>d9,h7>h9,h11>h7,c11>h11,s11>c11,s2>s11,

d12,c5,s1,d8,c12,s9,d2,s4,d4,s11,h5,c9,d7,c11,h6,h8,c4,c6,s6,h13,d10,d1,c8,h4,h1,s12,s13,h10,c1,s3,s2,s8,d11,c13,h11,s7,d3,d5,c10,d9,h3,c3,h7,h2,d6,h12,s5,h9,c7,d13,s10,c2  
**928/1000: solving: solved in 39769 tries.**  
d8>d12,d4>s4,d4>d2,h8>h6,c6>c4,s6>c6,d1>d10,h4>h13,h1>h4,d1>h1,c8>h8,c8>c11,d1>d7,s12>s6,s13>s12,c1>c8,c1>d1,c1>c9,s13>s11,s2>s3,s8>s2,d5>d3,h12>h7,h2>h12,h9>h2,h9>d9,c3>c10,h3>h9,d13>d6,d13>d5,d13>c13,d13>d11,h3>h11,s7>s8,c3>h3,s5>s7,s5>h5,s5>s9,s5>c5,s1>s5,c1>c12,d13>d4,d13>d8,s13>d13,s10>h10,s10>s13,s1>s10,c1>s1,c3>c1,c7>c3,c2>c7,

h4,c1,d6,s9,d12,h13,s11,c10,h10,h6,s1,c5,h3,d4,h9,d11,h5,c7,c12,s6,d10,h12,h11,s3,s13,c6,c11,d8,c3,c2,h2,s8,d7,d9,d2,s4,c9,d1,s2,d5,h1,s7,s10,c4,h8,c8,d3,h7,d13,s5,c13,s12  
**929/1000: solving: solved in 39026 tries.**  
s11>s9,h10>c10,h10>h13,h6>h10,h6>d6,c12>c7,h12>c12,h12>h5,d10>d11,s13>s3,c6>s6,c11>c6,h11>c11,h11>h12,d8>d10,c2>c3,h2>c2,d9>d7,d2>d9,s2>s4,s2>d2,s2>s13,h2>s2,s8>d8,h2>h11,c9>h9,c9>c5,d1>d4,h2>h3,d1>s1,d1>d12,d1>c1,h1>h2,s10>s8,s10>s11,h1>h6,h1>d1,h1>h4,c4>c9,s7>s10,h7>h8,d13>d3,c13>c8,c13>c4,d13>c13,d5>d13,h7>h1,s7>h7,s5>d5,s5>s7,s12>s5,

s11,d4,c8,c3,s13,s5,d8,d2,s8,h11,d6,s12,c2,c10,c11,h6,s3,h9,c1,d12,c12,c9,h7,c7,c6,h8,h12,h1,h2,s6,d10,h13,d9,d1,c5,d13,s1,d3,c13,s2,s7,h10,h5,d5,h3,s4,s10,s9,d7,c4,h4,d11  
**930/1000: solving: solved in 9842 tries.**  
c3>c8,s13>s11,s5>s13,d2>d8,d6>d2,c10>c2,c11>c10,h6>h11,c1>c11,c12>d12,c12>c1,c12>s12,s3>s8,c9>h9,c9>c12,c7>h7,c7>c9,c6>c7,c6>h6,c6>c3,d6>c6,d6>d4,h12>h8,h1>h12,h2>h1,s6>d6,s6>s5,s3>s6,d1>d9,d13>h13,d13>d10,d1>d13,c13>c5,d3>d1,s2>s1,s2>h2,h3>h10,h5>h3,d5>h5,s9>s10,d7>d5,d7>d3,s7>s2,c4>c13,h4>c4,s4>h4,s4>s3,s9>s4,s7>s9,d7>s7,d11>d7,

h1,d5,h11,h13,s1,d10,s12,s5,h3,h12,c8,s2,h7,c13,s3,d2,d6,d7,s8,c11,s11,s6,s10,c10,s9,s4,d12,h8,h10,c6,d8,h4,h9,s7,c1,c12,s13,c4,d3,h6,h5,c3,d11,c7,c2,d4,d13,d1,d9,c9,h2,c5  
**931/1000: solving: solved in 15971 tries.**  
h13>h11,s1>h1,s5>s12,s5>d5,s5>s1,h12>h3,h7>h12,d2>s2,d2>d10,c13>c8,c13>h13,d6>d2,d7>d6,h7>d7,s3>s5,s8>s3,s11>c11,s11>s8,s6>s11,s10>s6,c10>s10,c13>c10,s4>s9,h8>h7,h10>h8,h9>h4,c12>c1,h5>h6,d11>d3,c3>c4,c7>c3,c7>s7,c7>c6,c12>c7,c12>d12,c12>c13,h9>h10,d4>d11,d4>s4,d8>d4,d13>s13,d13>d8,d1>d13,d9>d1,d9>h9,c9>d9,c9>c12,h2>c2,c5>c9,h5>c5,h2>h5,

h2,c9,s13,c11,h6,h7,h13,h4,d2,s10,d5,h8,s1,s4,h10,s8,s7,c8,c12,s12,d8,h5,c6,s3,d13,s2,d12,d6,s11,c3,c2,h1,d11,s5,h9,s6,d4,c4,d7,c1,d1,h3,c10,h11,d3,d10,d9,h12,c13,s9,c7,c5  
**932/1000: solving: solved in 517563 tries.**  
h7>h6,h13>h7,h4>h13,s1>s10,s4>s1,h10>h8,s8>s4,s7>s8,c12>c8,s12>c12,s12>s7,h5>d5,h5>h4,h10>h5,s3>s12,d6>d12,d6>c6,d6>d8,d13>d6,s2>d2,s2>s13,s3>s2,s11>c11,s11>s3,h10>h2,c3>c9,c2>c3,h9>h1,c4>d4,c10>c1,d3>d1,h3>d3,d10>c10,h12>h3,d9>d10,h11>h12,c5>c13,s9>d9,s9>s6,s9>h9,d11>s11,s5>s9,c5>c4,c5>s5,c7>c5,c7>c2,d7>c7,d11>d7,h11>h10,d11>h11,d13>d11,

d1,h4,c6,h1,h7,c4,d8,d9,c7,c11,s5,c9,h8,s11,h3,d4,s8,d10,c5,c8,s6,c2,h5,h11,h10,d12,s1,c3,d5,d11,h6,h2,d6,s7,d3,c12,s10,c13,s4,h13,d13,c10,h9,d2,d7,s9,c1,s3,h12,s2,s12,s13  
**933/1000: solving: solved in 41202 tries.**  
h1>d1,h4>h1,c4>h4,c6>c4,d9>d8,c7>c6,h7>c7,c9>d9,c11>c9,h8>h7,s11>s5,s11>c11,s8>s11,s8>h8,d10>d4,c8>c5,c8>s8,h11>h5,h10>h11,h10>d10,h10>h3,c2>c8,d5>d12,d11>d5,h2>h6,s10>s7,c13>c12,s4>s10,h13>c13,d13>h13,d13>d3,s9>h9,d2>d13,s3>s9,s3>s4,s3>c3,s3>s6,d7>d6,d7>d11,d2>d7,d2>c2,s1>s3,h2>d2,h10>h2,c1>c10,h12>h10,s12>s2,s12>h12,s13>s12,s1>s13,c1>s1,

s2,h9,h4,d12,d2,c11,c2,c6,s4,s13,c4,s8,h8,h11,s3,s5,c10,d10,d9,d3,s10,d8,s7,c5,d7,h7,h10,h5,h2,s1,d13,h6,h3,h13,d1,c13,h12,c8,s12,d6,c3,s6,h1,s11,d4,c1,d5,c7,c9,c12,d11,s9  
**934/1000: solving: solved in 3183 tries.**  
h4>h9,d2>d12,c2>c11,c2>d2,c6>c2,s4>s2,h4>s4,c4>h4,c6>c4,s8>s13,h8>s8,h11>h8,s5>s3,c10>c6,d10>c10,d9>d10,d3>d9,s10>s5,d8>d3,s7>s10,h7>d7,h7>h11,s7>h7,h5>h10,h5>c5,h2>h5,h6>h2,h3>h6,h13>d13,h12>h13,c8>c13,s12>h12,s12>s7,d1>s1,d1>d8,c3>h3,c8>c3,s6>s12,d6>d1,c1>h1,s11>s6,c1>c8,d4>d6,d5>d4,c12>c1,c7>c12,c9>c7,d11>d5,s11>d11,s9>c9,s9>s11,

s5,h9,s12,h7,s8,d13,c6,c7,c8,d3,s1,d5,c5,c11,h1,h11,s13,d8,d12,d6,h4,h3,d11,c13,s3,c9,s2,h12,c3,h5,d7,h13,d10,c1,s10,h10,s4,d2,s7,d9,d4,h2,s6,c10,h6,d1,c2,c12,s11,c4,h8,s9  
**935/1000: solving: solved in 73511 tries.**  
c7>c6,c7>h7,c8>c7,s8>c8,s8>s12,d3>d13,c5>d5,c11>c5,h11>h1,h11>c11,d12>d8,d6>d12,h4>h11,h3>h4,d11>d6,s3>s13,s3>h3,s3>s1,s3>d3,s3>s8,c9>c13,c9>h9,h10>s10,h10>h13,d10>h10,d10>d7,c1>c3,d4>d9,s6>s7,d4>s4,d4>d10,h6>s6,h6>h5,h2>h6,c12>c10,d1>d4,d2>d1,s9>s11,c4>c12,c4>c1,c2>c4,h2>c2,h2>h12,d2>d11,s2>d2,s2>s3,s9>c9,s9>s5,s2>s9,h2>s2,h8>h2,

c4,s11,d13,s9,s4,c2,c3,h4,d10,h13,c8,s8,h9,s1,d7,h8,d4,d5,d3,s5,c7,c5,h1,c9,h12,h7,s7,d12,s10,h6,c10,d9,s13,h5,d11,s3,d8,d1,h2,s6,d6,c6,h11,c1,h10,h3,c11,s2,c12,d2,s12,c13  
**936/1000: solving: solved in 132 tries.**  
s4>s9,s4>c4,s11>s4,c3>c2,d10>d13,h13>h4,s8>c8,h8>h9,h8>s8,h8>h13,d4>d7,d5>d4,d3>d5,d3>c3,d3>d10,s1>s11,s5>s1,c5>c7,c5>s5,h1>h8,c9>c5,h12>h1,h7>h12,s7>h7,d11>d9,d1>d8,h2>h5,d6>s6,d6>d1,c6>d6,h11>h2,c1>c6,h10>h11,h10>c10,h10>h6,d11>d12,h10>s10,s13>s7,h3>h10,h3>d3,s3>h3,s13>s3,c1>c9,c11>c1,d2>d11,s2>d2,c12>c11,s12>s2,c13>c12,s13>c13,s12>s13,

h1,h9,s13,c5,s11,d9,s1,d5,d6,s8,s5,s7,h3,h6,h13,c3,c8,s2,d3,h2,c7,h11,c2,c6,c13,s12,h7,h12,s9,d12,c10,d11,h10,d8,c4,c9,c1,d10,h5,d1,d13,c11,s6,c12,s4,d7,d4,d2,h4,h8,s3,s10  
**937/1000: solving: solved in 99109 tries.**  
h9>h1,d6>d5,s5>s8,s7>s5,h6>h3,h13>h6,c8>c3,s2>s7,h2>h13,h2>s2,d3>d6,c7>c8,c2>h2,c7>c2,c13>c6,h7>h11,h7>c7,h12>s12,c9>c4,c1>c9,d10>h10,d10>d11,d10>c10,d1>d8,c11>c1,d13>d1,c12>c11,c12>d12,c12>c13,h12>c12,h12>h7,s9>s1,s9>d9,s9>s11,h5>h12,h5>c5,s9>h9,d10>d3,d13>d10,s6>s13,s4>s6,d2>d13,d7>d2,d4>d7,h8>h5,h4>d4,h4>h8,s3>s9,s10>s3,s4>s10,h4>s4,

s1,c4,c2,s9,h1,h5,c1,d2,d10,d6,d12,s13,s2,d3,d9,c12,s4,c10,c3,h8,d1,s6,h4,d8,h9,c7,s8,c11,h6,d4,h7,c6,s12,h11,d5,c5,h2,d13,c8,h10,s11,d7,h13,s10,c9,s5,s3,c13,h3,d11,h12,s7  
**938/1000: solving: solved in 53832 tries.**  
c2>c4,h1>s1,h5>h1,d2>c2,d10>d2,d6>d10,d12>d6,s2>s13,d9>d3,d9>s9,d9>d12,c3>c10,h4>h8,s8>d8,s8>s6,h9>h4,c11>c7,c6>h6,c6>c11,d4>d1,d4>s4,c6>c3,c5>d5,h10>h2,s10>s11,d7>d13,s5>s10,c13>h13,s3>s5,h3>s3,c9>c13,h12>h3,h12>h10,h12>s12,h12>h7,h11>h12,c9>c5,c9>h9,c9>c12,c9>d9,c1>c9,s8>s2,c8>c6,c8>c1,s8>c8,h11>h5,d7>d4,s7>s8,d7>s7,d11>d7,d11>h11,

s11,c10,s2,h4,h8,d3,s4,c13,c4,d8,s10,c5,s3,c6,h12,s1,h9,d9,h5,d11,s5,c8,d1,h7,h2,d4,c1,h1,h10,d5,s6,c2,d10,s8,c12,s13,c7,h6,s12,d2,d12,h3,h11,d7,c11,d6,d13,c9,s9,s7,c3,h13  
**939/1000: solving: solved in 1230 tries.**  
h8>h4,s4>s2,c4>c13,c4>s4,c4>c10,d8>d3,d8>h8,s10>s11,s1>s3,h9>h12,d9>h9,d1>d11,h2>h7,c1>c8,h1>c1,h1>h5,h1>s1,d1>d9,d4>d1,h10>h2,d5>d4,d5>c5,d5>d8,c6>c4,d10>h10,d10>d5,s6>s5,s6>c6,s6>s10,s12>s13,s12>c12,s12>s8,d12>d2,d12>s12,d12>d10,c7>c2,h3>h6,h11>h1,c11>c7,c11>h11,d7>d12,d13>d6,c3>c9,c3>c11,h3>c3,s7>s9,h13>h3,d13>h13,s7>s6,d7>s7,d13>d7,

s8,c1,s10,s2,s12,d5,s3,c9,s5,h6,d11,c5,d1,h3,d13,h7,c6,s9,c10,h11,c12,s6,c3,c13,h2,c11,d3,d7,c8,d2,d4,d9,h4,h9,s7,h10,s1,s11,s13,c7,d6,d12,s4,h12,h1,c2,d8,h13,h5,h8,c4,d10  
**940/1000: solving: solved in 85409 tries.**  
s2>s10,s12>s2,s5>d5,s5>s12,s3>s5,c5>c9,d1>d11,c13>c3,d7>d3,d4>d2,d9>d4,h9>h4,h9>d9,s7>d7,h10>h9,s1>s7,s11>s1,s11>c11,s11>s6,d12>d6,s4>s13,h12>d12,c2>c7,c2>c8,c2>h2,c2>c13,s4>s11,h12>h10,h12>c12,h12>h11,h1>h12,s4>s9,h5>h13,h8>h5,c4>c2,c4>s4,c4>c6,h1>h7,h1>d1,h1>h6,h1>c1,c4>c5,c10>c4,h3>h1,d8>d13,d10>c10,d8>d10,d8>s8,h8>d8,h3>h8,s3>h3,

h13,c8,h4,c5,c10,h8,d5,d4,c4,d2,h2,s7,d1,d12,c12,d10,h7,s11,s6,c9,h12,d6,d13,c3,c7,s13,s2,s10,d3,s5,h11,s1,c1,h9,h1,c11,s8,h10,s3,d11,c13,h6,c2,d9,d7,s4,d8,s9,s12,h3,h5,c6  
**941/1000: solving: solved in 56470 tries.**  
c10>c5,h8>c8,h8>h13,h4>h8,d4>d5,c4>d4,c4>c10,c4>h4,h2>d2,d12>d1,c12>d12,c12>c4,h7>h2,s7>h7,s6>s11,d6>s6,d6>d10,c9>c12,c7>c3,s2>s13,s10>s2,d3>d13,s5>s10,c1>s1,c1>c7,h1>h9,h1>c1,s8>s5,c11>h11,d11>c11,h6>h10,h6>h1,c2>c13,d8>d9,d8>d11,d7>d8,d7>d3,d7>s7,d6>d7,h6>h12,h6>d6,s4>s8,s9>s4,s12>s9,s3>s12,c2>c9,h3>s3,h5>h3,c6>c2,h6>c6,h5>h6,

s12,h10,h9,d12,d1,d5,h6,c2,h1,s10,s2,h2,h13,c11,d8,d9,s8,h8,d3,h5,h3,s7,d13,d2,c13,c10,d10,d7,c12,s9,d6,d11,s5,s3,c3,c5,h11,c1,h12,c4,d4,s1,c6,s6,h7,s4,c7,c8,s11,c9,s13,h4  
**942/1000: solving: solved in 31887 tries.**  
h9>h10,d1>d12,d5>d1,s2>s10,h2>s2,h2>h1,h2>c2,h2>h6,h13>h2,d8>d5,d9>d8,d9>h9,h8>s8,h3>h5,h3>d3,h3>h8,d2>d13,c10>c13,d10>c10,d10>d2,d7>d10,d7>s7,c12>c11,c12>s12,h3>h13,s9>d9,d6>d7,d11>d6,s5>s9,s3>s5,h3>s3,c3>c12,h3>c3,h11>h3,c1>c5,h12>h11,c6>c4,d4>d11,s4>s1,s4>d4,c7>h7,c9>c7,c9>c1,c8>c9,c6>c8,s6>c6,s11>s6,s13>s11,h4>h12,s4>h4,s13>s4,

d13,h2,d6,d4,s2,h7,d1,c6,d3,c5,d11,s9,h8,s12,h9,s11,s6,s7,s4,c11,h5,c13,h4,c12,d10,h11,s3,s10,h1,h3,c10,h13,d9,h12,d2,s8,c9,d7,s5,c7,s1,d12,d8,d5,h10,c3,c4,s13,c2,c8,h6,c1  
**943/1000: solving: solved in 345231 tries.**  
d4>d6,h7>h2,h9>s9,h8>h9,s11>s12,s6>s11,s7>s6,s4>s7,c11>d11,c11>c5,h4>s4,h4>h8,h5>h4,c12>c13,h11>h5,h11>c11,c12>c6,s3>d3,s3>s2,d10>d1,s10>d10,s10>s3,h1>h11,h3>h1,c10>s10,c12>c10,h3>h7,h13>h3,d7>d2,c2>c3,c8>c2,c8>d8,c8>c7,c8>s8,d5>s5,d5>d7,c9>c8,d12>d5,d12>c12,d12>d13,d9>d4,h12>d12,c9>d9,c1>c4,c1>c9,s1>c1,h10>h12,s13>s1,h6>h10,h13>h6,s13>h13,

d12,d3,h4,s4,c4,h5,s11,c12,c2,h8,c7,c1,d7,s1,c9,s5,h2,c10,h10,s13,s6,c6,d4,d13,s10,s7,d2,s9,s2,h11,d5,d1,d9,c8,c13,h12,s8,h7,s12,d10,c11,d8,h9,h6,c3,h13,h1,d11,s3,d6,c5,h3  
**944/1000: solving: solved in 7277 tries.**  
d3>d12,s4>h4,c4>s4,c12>c4,c2>c12,c1>c7,c9>c1,s5>s1,h10>c10,h10>h2,s6>s13,c6>s6,d13>d4,s10>h10,s10>s5,c6>c9,s7>d7,s7>s11,s10>s7,d2>d13,s2>s9,s2>d2,s2>s10,d1>d5,d9>d1,c8>c6,c8>h8,c8>c2,h6>h9,c3>c11,h3>s3,h3>h13,h3>c3,h1>h3,h1>h7,s12>h12,s8>s12,d11>d10,h6>h1,d6>h6,d6>d9,d11>d6,d11>h11,d8>d11,s8>s2,d8>s8,d8>d3,c8>d8,c5>c13,c5>h5,c5>c8,

d7,s3,h7,d1,s6,d5,d2,c9,c1,d13,h1,h12,c4,h5,h4,s4,d4,h11,h10,s1,d8,c6,c13,h8,c5,c10,c7,h13,c8,s10,s2,s8,h6,s11,d10,d12,s12,s7,s9,d9,s13,c2,c11,h9,c12,s5,d11,h2,c3,d6,h3,d3  
**945/1000: solving: solved in 41457 tries.**  
d1>d7,d2>d5,c1>c9,h12>h1,c4>c1,h5>h12,h4>h5,s4>h4,d4>s4,d4>d13,d4>c4,d4>d2,h11>h7,h10>h11,c13>c6,c10>c5,c7>c10,h13>c13,h8>h13,h8>d8,c8>c7,c8>h8,s2>s10,s8>s2,s8>c8,s8>s1,h6>s6,h6>h10,d4>d1,s11>s8,d12>d10,s12>d12,s12>s11,s7>s12,s13>s7,s9>s13,c12>c2,c11>c12,d11>c11,d11>d9,h9>h6,s9>h9,d11>d4,s5>s9,h3>h2,c3>h3,d3>d6,d3>c3,d3>d11,s3>d3,s5>s3,

s6,h6,c5,d3,s8,h1,d10,c4,d1,c9,c10,h10,s7,h2,d9,s12,c13,d12,c7,s1,d8,d4,s13,d6,s11,d11,h4,h12,d2,s5,h11,d13,s3,h7,s2,c3,h13,h9,c6,c11,h8,c1,d5,c12,h3,d7,c2,s9,c8,s10,h5,s4  
**946/1000: solving: solved in 9430 tries.**  
h6>s6,d10>d3,c10>c9,h10>c10,h10>h1,d9>d1,d8>d12,d4>d8,s13>s1,s13>c13,s13>s12,d11>s11,d11>d6,h4>d4,h12>h4,d2>d11,d13>d2,d13>s13,d13>d9,h12>h2,s5>s7,h7>c7,h7>h12,h11>h7,s2>s3,h13>h11,h9>h13,c1>c6,c2>c12,h3>h8,c2>c11,c2>s2,c3>c2,h3>h9,c3>h3,d5>s5,c1>c3,c8>c1,d7>d13,d5>d7,s4>s9,s4>c4,s10>s4,s10>d10,s8>s10,c8>s8,h10>h6,h5>d5,h5>h10,c5>h5,c8>c5,

c4,c13,s9,h9,h7,c5,h10,d2,d3,d9,d1,d6,s13,d8,h11,s2,d12,s1,c6,h3,d7,c2,c11,h4,d10,h1,d11,c8,h5,h12,s8,h13,h6,s10,s6,s5,s12,c10,c1,d5,c7,s7,h8,h2,s3,c9,d13,c3,c12,d4,s11,s4  
**947/1000: solving: solved in 186511 tries.**  
c13>c4,h9>s9,h7>h9,d3>d2,d9>d3,d1>d9,d6>d1,s2>s13,c2>c6,c11>c2,c11>h11,d7>d12,h4>h3,d10>d7,h1>h4,h1>s1,d11>c11,d11>d8,d10>d11,d10>h10,d6>d10,h12>h5,h6>h13,s6>s10,s6>h6,s6>s8,s5>s6,s12>s5,s12>h12,c1>c10,c1>h1,c1>c5,h2>h8,c12>c9,c3>s3,c3>c7,c12>c3,c12>c8,c12>c1,d5>d6,s12>c12,s7>s12,d13>d5,d13>c13,s7>h7,s2>s7,d4>d13,s4>s11,s4>d4,s2>s4,h2>s2,

s7,s13,d7,s11,c6,d11,d6,c11,h6,c7,h4,d10,d5,c3,s8,c4,d2,c1,h1,h13,s10,d12,s12,h8,h2,h3,h9,c8,h7,s1,s3,c10,h10,c12,s9,s2,d1,c5,s4,c2,d13,h11,c9,h12,d3,d9,s5,d4,d8,s6,h5,c13  
**948/1000: solving: solved in 1201 tries.**  
s13>s7,d11>d7,s11>d11,s11>s13,d6>c6,d5>d10,c3>c7,c4>h4,c4>c3,h1>c1,h13>h1,s10>s8,s12>d12,s12>s10,h8>h13,h2>h8,h2>d2,h3>h2,h9>h3,s3>s1,c10>c8,h10>c10,h10>h9,h7>h10,c12>s12,s9>s3,s2>s9,s4>s2,c2>c5,c9>c2,h12>h11,d9>d3,d9>c9,d9>d1,d13>d9,h12>h7,h12>c12,d13>d5,s4>c4,s5>s4,d8>d4,h5>h12,h5>h6,s5>h5,s6>s5,s6>s11,d6>s6,c13>c11,d13>c13,d13>d6,d8>d13,

h13,s8,h10,c4,s10,s13,c3,h3,c1,c12,c5,h6,c8,d6,d10,h11,s3,d13,s12,s11,c6,c7,s4,d4,h12,h7,s6,c11,h1,c10,d3,d11,s1,s9,s2,h4,s5,h8,h9,d5,c2,h2,c13,d2,c9,d7,d9,h5,d12,d1,d8,s7  
**949/1000: solving: solved in 13643 tries.**  
s10>s8,h10>s10,h10>h13,h3>c3,h3>h10,c12>c1,c5>c12,d10>d6,h11>h6,s11>s12,c7>c6,d4>s4,d4>d13,h7>h12,h7>c7,c11>s11,d11>d3,s1>h1,s1>s6,c10>c11,c10>d10,c10>c8,s1>s3,s2>s9,h4>h7,h4>d4,h4>h11,h4>c4,h4>h3,c10>c5,s5>s2,h9>h8,d5>d11,s5>d5,s5>s13,c2>c10,h2>h9,c13>c2,d2>h2,c9>c13,d7>d2,d9>c9,d1>d12,d1>s1,d1>d9,d7>d1,h5>h4,s5>h5,s7>s5,d7>s7,d8>d7,

d8,d4,s7,d5,h2,h10,h8,s12,h12,h6,d9,s11,c9,c13,c7,s2,s5,h9,s9,d12,h7,h1,h3,s10,c4,s13,c3,d2,c1,s6,c11,c6,c8,d1,h4,d10,d6,h13,c5,d3,d13,c12,s1,h5,c10,d7,s4,d11,c2,h11,s8,s3  
**950/1000: solving: solved in 7331 tries.**  
d4>d8,h10>h2,h8>h10,s12>s7,h12>h8,h6>h12,c13>c9,c7>c13,s5>s2,s9>h9,s9>s5,s9>d9,s9>s12,s11>s9,d12>d5,h7>c7,h7>h6,h1>h7,h3>h1,s10>s11,c3>h3,c4>c3,c4>d4,s6>s13,c11>c1,c6>c11,c8>c6,d6>d1,d6>s6,d6>d12,d2>d6,c8>c4,d10>s10,d2>d10,h13>h4,d13>h13,c5>c8,d3>d13,c10>c12,s4>s1,d11>d7,h11>h5,d11>h11,c2>c10,c2>c5,d2>c2,d11>d2,d3>d11,s8>s4,s3>s8,s3>d3,

s9,h4,c3,c10,d11,h5,h9,c2,s1,d4,h2,s12,c11,s6,d7,c5,s7,d13,c1,d3,d2,s8,h7,h12,s5,d12,c4,c6,d9,h8,c8,h13,h1,d1,s4,c9,h3,s13,c7,h10,s2,s3,d5,c12,d10,s10,h11,d8,s11,h6,c13,d6  
**951/1000: solving: solved in 35427 tries.**  
c10>c3,h5>h4,h9>h5,h9>s9,d4>d11,c5>c11,s7>d7,s7>s6,c1>c5,c1>s1,c1>c2,s7>s12,d3>d13,d2>d3,h7>s7,h7>h2,d2>d4,c6>c4,c8>h8,h1>h13,d1>h1,c9>c8,c9>d9,c9>c6,h10>h3,s3>s2,c12>c7,s10>s3,s10>h10,s10>s4,s13>s10,d5>d1,d5>s5,d12>d5,d12>h12,c12>d12,c12>c1,c9>c12,c9>h9,s13>s8,h11>h7,d10>d2,s11>h11,s13>s11,c13>s13,c13>c9,c10>c13,d10>c10,d8>d10,d6>h6,d6>d8,

s13,h6,c7,h13,c1,s5,s6,c4,d3,d10,s3,s2,d2,c6,d12,h1,d8,d9,h5,s7,c11,c10,h12,h9,d1,s10,s4,h11,d4,s12,c2,d7,c12,h8,h2,d6,c8,s1,c9,h7,h10,d13,d11,c13,c5,s9,s11,h4,d5,c3,s8,h3  
**952/1000: solving: solved in 215897 tries.**  
h13>s13,h6>h13,c1>c7,s6>s5,d10>d3,s3>s6,s2>s3,d2>d10,d9>d8,c10>c11,h12>h5,h12>d12,h1>h12,d9>d2,c10>c6,d1>h1,s4>s10,d7>d4,s12>s4,c12>c2,c12>s12,c8>h8,h2>h11,c9>c8,c9>c12,c9>h9,c9>c10,c9>d9,c9>c4,d1>c1,h7>d7,s11>s9,d5>c5,d5>d13,d5>d6,d11>d5,h4>h10,h4>h7,s11>d11,c3>c13,s8>s11,s8>s7,s1>s8,s1>d1,s2>s1,c3>c9,h3>c3,h2>h3,h2>s2,h2>h6,h4>h2,

h5,s10,s9,h6,c5,s2,s4,d8,c2,h12,h3,h11,d2,c9,d1,h7,s6,d4,h10,d12,h8,c11,c6,d7,s5,c7,c4,s12,c10,d10,c12,c3,c8,h2,h4,h13,d5,d11,h9,d13,c1,s3,d6,s11,s13,s7,d9,d3,c13,s1,s8,h1  
**953/1000: solving: solved in 948 tries.**  
s9>s10,c5>h5,s4>s2,h3>h12,h11>h3,d2>d8,c2>d2,h11>h6,c9>c2,c9>s9,c9>c5,h7>h11,d4>s4,d1>d4,h10>h7,c6>c11,c6>s6,c6>c9,d12>d1,c4>c7,d10>c10,c12>c4,s12>c12,s12>s5,s12>d12,d10>d7,d10>h10,c8>c3,c8>h8,c8>c6,h4>h2,h13>h4,d5>d10,d11>d5,h9>h13,d13>d11,s3>s12,s13>s11,d9>d6,c13>s13,s8>s7,d3>d9,d3>s3,s1>s8,h1>s1,h1>h9,c1>h1,c1>c8,c13>c1,d13>c13,d3>d13,

s12,d10,s7,c4,s8,c11,s1,c6,d4,s10,s6,c1,s9,d12,s11,h5,c2,c7,s5,c3,h3,h8,h13,h10,h12,d7,c10,h2,c9,h1,d3,c5,d9,c12,d11,h6,h4,d13,d2,c13,h7,s3,h9,h11,d8,d5,s13,d6,s2,d1,c8,s4  
**954/1000: solving: solved in 4583 tries.**  
s10>s1,s6>s10,c6>s6,c6>c11,d4>c4,c1>c6,c7>c2,s5>s11,h5>s5,c3>c7,h3>c3,h3>h5,h8>h3,h13>h8,h10>h13,h12>h10,h12>d12,h2>h12,c9>c10,c9>s9,c9>c1,h4>h6,d2>d13,h11>h7,h11>h4,h11>d11,c13>c12,h9>h11,d5>d2,d5>d9,d5>c5,d5>d3,h9>h1,h9>c9,h2>h9,d7>d4,d7>s7,d7>d10,s13>c13,s3>s13,s2>s3,d6>d5,d1>d6,d1>d7,s2>h2,d8>d1,s2>s12,s8>d8,s4>s2,s8>s4,c8>s8,

d10,s7,s1,d12,c11,d2,c6,d3,h12,c8,d4,c3,h1,d7,s3,s9,c1,h3,d13,c12,s13,s4,h8,h11,d9,h4,s6,h9,c13,h13,c10,d5,h10,d11,c9,d8,s12,c4,s2,h5,s10,s8,s11,c5,h7,h6,d6,d1,s5,c2,h2,c7  
**955/1000: solving: solved in 30536 tries.**  
s1>s7,c8>c6,c3>d3,c3>c8,d4>d2,h1>h12,d7>d4,s9>s3,c1>c3,h1>c1,s4>s13,h11>h8,h4>s4,h4>h3,h11>h4,h13>c13,h13>h9,h10>h13,c10>h10,c10>c12,d11>d5,c9>d9,c9>c10,c9>s9,c9>c11,h11>h1,d11>h11,d11>d7,d13>d11,s8>s2,s8>d8,s8>s6,s12>s8,s11>s10,c5>c4,c5>c9,s12>d12,h6>h7,d1>d6,s5>s11,s5>c5,s5>s12,h2>h6,d1>d13,d1>d10,s1>d1,s5>s1,h5>s5,h2>h5,c2>h2,c7>c2,

h9,d12,c9,s7,d3,d2,c13,c2,h4,h3,h13,d4,d11,c4,h12,s3,d6,c6,d13,c10,c11,c8,s12,d8,h10,h11,s9,s11,d9,h7,h2,d1,s6,c5,d7,h8,s1,c12,s10,c7,s5,s13,c1,s4,s8,h6,d5,h5,s2,d10,c3,h1  
**956/1000: solving: solved in 292448 tries.**  
d3>d12,d2>d3,c2>c13,c2>d2,c9>c2,c9>h9,h3>h4,h13>h3,d11>d4,h12>h13,d6>d11,c6>d6,c6>c9,c4>c6,c11>c10,c8>c11,s12>s3,s12>h12,s12>s7,c8>c4,d8>d13,h11>h10,s9>s12,s11>h11,d9>s9,d8>d9,d8>c8,h2>h7,s6>s11,s8>s13,s8>s10,s8>h8,s1>s8,c1>c12,c7>d7,c1>s1,s5>c5,s4>s5,c1>c7,h5>d5,h5>h6,s2>s4,s2>s6,h2>s2,h1>h5,h1>h2,d1>h1,d10>d8,d1>d10,c1>d1,c3>c1,

d6,s12,c2,h7,d13,d4,h2,c7,d10,s3,s7,d11,d12,s8,d1,d9,s9,s6,s13,d2,h4,s10,d5,h8,s11,h13,c3,h1,c12,c1,d3,c8,h6,h11,s2,s1,c9,h10,h5,c13,d7,c6,h3,h12,h9,c4,c11,s4,d8,c10,c5,s5  
**957/1000: solving: solved in 6661 tries.**  
d4>d13,h2>c2,h7>h2,d4>d6,c7>h7,d10>d4,s7>s3,s7>c7,s7>s12,d12>d11,d9>d1,s9>d9,s9>s8,s6>s9,s13>s6,s10>s13,s10>d10,s7>s10,d2>d12,c1>c12,c1>h1,c1>c3,h11>h6,s1>s2,c9>c8,h5>h10,h9>h12,c4>c6,c10>c11,c5>c10,c5>c4,c5>h5,c5>c9,c13>c5,c13>h13,c1>c13,s1>c1,h3>d3,h9>h3,h11>h9,s4>s1,d8>d7,s5>s4,s5>d5,s5>s7,h8>h4,s11>s5,d8>d2,h8>d8,h11>h8,h11>s11,

h1,h13,h6,d6,c1,s8,s5,s7,h10,h4,h7,d2,d10,h8,c10,c2,c8,s11,d11,c7,s9,d12,h12,d13,h9,c9,s10,d7,c5,c4,s1,s3,c6,h3,h11,d9,s13,d4,c13,s6,c11,s4,h2,d1,d3,d8,h5,c12,s12,c3,d5,s2  
**958/1000: solving: solved in 788 tries.**  
h13>h1,h6>h13,d6>h6,s5>s8,s7>s5,h4>h10,h7>h4,h7>s7,d2>d6,d10>d2,h8>h7,c10>d10,c1>c10,c8>c2,c8>h8,c8>c1,d11>s11,d12>d11,h12>d12,c9>h9,c9>c7,s9>c9,c4>c5,s1>s10,s3>s1,c6>c4,h3>s3,h3>h12,d7>d13,d9>d7,d9>s9,c6>c8,d4>d9,c13>s13,c11>h11,c11>c6,c13>c11,s4>s6,d1>d4,d3>d1,d8>d3,s12>c12,s2>s12,s2>s4,h2>s2,h5>h2,d5>d8,h5>d5,c3>c13,h3>c3,h5>h3,

h13,s10,h12,s3,h7,s1,c13,s4,d10,s5,d4,d1,s11,s2,h5,c11,d6,h11,d2,s6,c4,h6,h10,d7,s9,c9,d13,d12,s8,c7,s7,s12,d9,s13,d11,c5,d3,h4,h2,c8,c12,c3,h3,h9,d8,c6,c10,d5,h1,h8,c1,c2  
**959/1000: solving: solved in 717063 tries.**  
d4>s4,d10>d4,s5>s1,d1>d10,s11>s5,s2>s11,c11>c13,s6>d6,h6>h11,h6>s6,h6>h5,h10>h6,c9>s9,d12>d13,c7>c9,c7>d7,c7>c4,s7>s8,s12>s7,s12>d12,d9>d2,s13>s12,d11>d9,d11>c11,d1>d11,h10>h7,h10>s10,h10>h13,h12>h10,s13>s2,c5>c7,h2>h4,c3>c12,c3>d3,d8>c8,c10>c6,h1>h9,h8>h1,h8>h2,d8>h8,d5>d8,d5>d1,c5>d5,c10>c5,c1>c10,c2>c1,c3>c2,h3>c3,h3>h12,s3>h3,s13>s3,

h12,d8,h2,s12,h13,s3,s9,h8,h6,s2,h9,c12,c1,h11,c3,s4,d4,c10,s5,s8,d7,c4,d2,c13,d5,d10,h3,s10,d3,s7,c6,s1,c11,c7,s13,d12,h5,h1,h4,d1,d11,s11,c8,d13,h10,h7,c5,c2,c9,d6,s6,d9  
**960/1000: solving: solved in 7125 tries.**  
s12>h12,h13>h2,s3>s12,s9>s3,h8>h13,h8>d8,h6>h8,h9>s9,h6>h9,c1>c12,h11>h6,c3>c1,d4>s4,s8>s5,d7>d4,d10>d5,d3>d10,h3>d3,s7>s10,c6>c13,s1>s7,c11>c6,c7>c11,s13>s1,h5>h3,h1>h5,h4>h1,h4>c4,d12>d2,d1>d12,d11>d1,c8>c7,c8>s8,c8>c10,d13>d11,s13>d13,h10>h4,h7>h10,s11>s13,c5>c8,c2>c5,c2>s2,c3>c2,h7>h11,s6>s11,c9>c3,d6>s6,d9>c9,d7>d9,d7>h7,d6>d7,

d10,c2,c12,h5,c13,d5,c10,d6,s4,c11,d8,c6,h11,c5,s13,d4,s11,d1,s7,d3,h3,s3,h9,h4,h10,c4,d9,h8,d11,c7,s6,d2,s5,h1,s8,s2,c8,h13,s1,s12,c3,c1,d13,h6,h7,d12,h2,h12,s10,c9,s9,d7  
**961/1000: solving: solved in 9826 tries.**  
c12>c2,c11>c10,c6>d6,c6>c11,d8>d5,c5>c6,c5>h5,c5>c12,c13>c5,d4>s4,d4>d8,s13>c13,s11>h11,h3>d3,s3>h3,s3>s7,h4>h9,h10>h4,h8>h10,d11>d9,d2>d11,s5>s6,s2>s8,h13>h1,s12>s1,c1>c3,h7>h6,h12>h7,h12>s12,d12>d13,h2>h12,h2>h13,s2>h2,c8>c7,c8>h8,c4>c8,d2>d1,c1>c4,s10>s5,s2>s3,c9>c1,s9>c9,s9>s11,s10>s9,s10>d10,s13>s10,s2>s13,d2>d4,d2>s2,d12>d2,d7>d12,

s9,h4,d4,h11,h5,s3,h9,c6,s10,c9,d9,h12,h7,d3,c10,c11,d2,d7,s8,s12,h10,d6,d1,c12,h6,s6,c2,d10,s5,h8,c4,s11,c3,c8,d12,s7,h3,d8,c1,h1,s2,d11,s1,h13,c7,d5,s4,c5,s13,d13,h2,c13  
**962/1000: solving: solved in 728 tries.**  
d4>h4,h5>h11,s3>s9,h9>h5,c9>h9,c6>c9,s10>s3,h7>h12,c11>c10,d7>d2,d7>h7,d7>d9,d3>d7,s12>s8,d1>d6,c12>s12,c12>c11,d1>d3,h6>h10,h6>c6,s6>h6,c2>c12,s11>s5,c3>c4,c8>c3,c8>h8,c8>c2,d8>d12,d8>c8,d8>d1,d10>d8,d10>s10,d4>d10,s11>s6,s7>s11,h1>c1,h1>h3,s1>h1,s1>s7,s2>s1,c5>c7,d13>d5,d13>d11,s13>s4,c13>c5,s13>c13,s13>s2,d13>s13,d13>d4,h13>d13,h2>h13,

c1,c7,s13,s1,c4,h6,h2,c12,c11,d13,c9,h10,c2,d9,h12,h4,d1,h11,h7,s2,d2,d12,s8,h9,s3,c10,s4,h3,c3,h13,h5,s7,s6,c8,d6,d7,d10,c5,d3,s10,s12,d4,d11,h1,c13,d5,h8,s9,d8,s5,c6,s11  
**963/1000: solving: solved in 13190 tries.**  
c7>c1,s1>s13,h2>h6,c11>c12,d9>c9,d9>d13,h10>h2,h4>h12,d1>d9,h11>h4,h11>c11,h11>h10,d1>s1,d2>s2,d12>d2,h9>h7,s3>s8,h3>s3,c3>h3,c3>c2,c10>c3,h13>h9,h5>h13,s7>s4,s6>s7,d6>d12,s6>d6,c8>c10,d10>d7,c5>h5,c5>c8,d3>d10,h8>h1,d5>d11,d8>h8,s5>s9,s5>d5,s5>s10,s5>c5,s6>s5,d8>d3,c6>c13,s11>s12,s11>h11,s6>s11,d8>d1,d4>d8,c4>d4,c4>c7,c6>s6,c6>c4,

c1,h4,c10,h6,d1,s11,h11,s6,c7,c2,h3,s10,d12,c9,h8,s5,d2,s2,s1,c4,d3,h12,h10,c13,s7,d10,s4,c3,c8,h13,c6,d6,d5,d8,c12,s3,s9,s12,c5,h2,d7,h1,h7,h5,d11,d9,d13,s8,s13,h9,c11,d4  
**964/1000: solving: solved in 60095 tries.**  
h11>s11,s6>h6,c2>c7,s2>d2,s2>s5,s1>s2,c4>c9,h12>h8,h10>h12,h10>s10,h10>h3,c4>c2,s7>s1,c3>c13,c3>d3,d10>d12,d10>h10,d10>d1,s4>c4,s4>s6,s7>s4,c8>c3,d6>c6,d5>d6,d8>d5,c12>c8,s9>s3,s12>s9,s12>c12,s12>s7,d8>d10,h7>h2,h7>h11,h5>c5,d7>h7,s13>s8,h9>d9,h9>h5,h1>h9,d11>d7,s13>h13,s13>s12,d11>d8,d13>s13,d11>d13,c11>c10,d11>c11,h1>c1,h4>h1,d4>d11,d4>h4,

c2,s10,h10,c11,c6,h12,s12,d9,h4,h13,s5,c13,d6,h7,s1,h3,d5,s9,s8,s4,d13,c3,h6,s13,h1,c10,c8,c1,c4,c7,c12,h2,s2,d2,d3,h8,s7,c5,d8,d11,s6,d10,s3,s11,h9,d12,d4,c9,h5,h11,d1,d7  
**965/1000: solving: solved in 7235 tries.**  
h10>s10,c6>c11,s12>h12,h13>h4,s5>s12,c13>h13,c13>c6,d6>d9,s1>s5,h3>h7,s8>s9,s4>s8,s13>d13,s13>s4,c3>h3,c3>c13,d5>d6,h1>h6,h1>s1,c8>c10,c1>c8,c1>h1,c1>c3,c4>c1,c7>c4,c12>c7,s2>h2,s2>s13,d2>s2,d2>d5,d2>c2,d3>d2,c5>c12,s6>s7,d11>d8,s3>s6,s11>s3,d11>s11,d12>d11,h11>h5,d1>d4,d7>d1,d7>d12,h9>h8,d10>d7,c9>c5,h9>c9,d10>d3,h10>d10,h9>h10,h11>h9,

d11,c1,s3,c7,h10,c10,d9,d3,d5,s11,d8,h4,s5,c12,h11,h8,h5,c11,s10,h3,c9,c3,d12,d1,h1,s2,h12,c5,d10,c4,d4,c2,d6,c13,s9,c8,d7,d2,s13,c6,s12,s6,s8,d13,s1,s4,h6,h9,s7,h7,h2,h13  
**966/1000: solving: solved in 53198 tries.**  
c10>h10,c10>c7,d3>d9,d5>d3,s11>s3,d8>d5,h11>h4,h11>s11,c12>c10,h5>h8,h5>s5,h5>h11,c9>c11,c3>h3,d1>d12,h1>d1,s2>s10,h12>h1,d4>c4,d4>d10,d2>d7,s13>s9,s13>c13,c8>c2,c6>d6,c6>c8,d2>d4,s6>c6,s13>s6,d13>s13,s8>s12,s7>s4,h7>s7,h6>h7,h13>h6,h13>d13,h9>h13,h9>h12,h9>c9,c5>c3,h2>d2,h2>h9,s2>h2,c5>c12,c5>h5,d8>d11,s8>s2,s8>d8,s1>s8,c1>s1,c5>c1,

c12,d10,s7,c2,h5,c7,h12,s10,s5,h3,d5,d6,d11,c8,h4,d1,d8,c3,d13,c4,c9,c13,h11,s2,c6,h13,d4,h9,s4,s13,d7,h8,s1,d2,d12,d9,h2,c11,c1,c5,s11,h6,s9,s12,s8,s6,h1,c10,h7,h10,d3,s3  
**967/1000: solving: solved in 9904 tries.**  
c2>c12,s5>s10,s5>h5,s5>s7,c7>c2,h3>h12,d5>d10,s5>d5,d11>d6,h4>h3,d8>d1,d8>c8,d8>d11,c9>c4,c13>c9,c13>d13,c13>c3,h11>h4,h13>c13,s13>s4,d7>d4,d12>d2,d9>d12,h2>h8,c1>c11,c5>c1,s11>s1,s9>d9,s9>s11,s9>h9,s9>s2,s13>s9,s13>h13,d7>d8,d7>c7,h2>h11,s8>s12,s6>s8,s6>h6,s6>s13,c6>s6,c10>c6,h1>h2,h7>h1,h10>h7,c10>h10,c5>c10,d3>d7,s3>d3,s5>s3,c5>s5,

d6,c5,d4,h6,s9,h9,h7,s13,s4,h11,d1,h5,s3,c3,c8,s11,s12,d2,s6,c2,c10,d8,c9,d12,s10,h4,c11,d7,d9,h1,c13,d11,d13,h10,c7,d5,s2,h13,s8,s5,d3,h2,h3,d10,c12,c6,h8,c4,h12,s7,c1,s1  
**968/1000: solving: solved in 51224 tries.**  
h6>d6,h9>s9,h9>h6,h7>h9,s4>s13,s4>d4,h11>h7,h5>c5,h5>h11,c3>s3,c8>c3,s11>s4,s12>s11,c2>c8,d2>c2,d2>d1,d8>d2,c9>c10,d12>d8,d12>s12,c11>c9,d9>d7,d11>d9,d11>c11,h1>h4,d13>c13,d13>d11,h10>h1,h10>s10,d5>d13,d5>h5,s2>s6,s5>s8,d10>d3,h2>h13,h2>s2,d10>h10,d10>d5,d12>d10,h8>h3,c12>c7,h8>h2,c4>c6,c1>c4,s7>s5,s1>s7,c1>s1,h12>h8,h12>d12,c12>h12,c1>c12,

c5,h6,c1,s9,s13,d11,d1,d2,c7,s11,d7,s8,c13,d10,c11,c9,d6,h3,c4,d5,s1,s6,h11,h10,h9,d8,s5,d12,c12,d3,d9,h12,c6,d13,c10,c2,s7,h1,d4,s10,h5,h13,c8,s3,c3,h4,h7,s2,s12,h8,s4,h2  
**969/1000: solving: solved in 67308 tries.**  
s13>s9,d1>d11,d2>d1,c7>c1,d10>d7,c11>c13,c11>s11,c11>c7,d10>d2,d6>d10,d6>h6,s8>s13,s6>s1,h10>h11,h9>h10,d8>d5,c12>d12,d9>d3,d9>h9,h12>c12,c2>c10,s10>s7,h13>h1,h13>d13,c3>s3,h4>h5,h4>d4,h8>h7,h8>h4,c8>c2,h8>h13,c8>h8,s12>s10,s12>h12,s12>s5,c6>s6,c8>c6,c8>d8,c8>c4,c8>s8,c8>c11,c9>c8,d9>d6,c9>d9,c9>c5,c3>c9,h3>c3,s2>s12,h2>h3,s2>h2,s4>s2,

d3,s12,s6,c6,d2,d11,d7,h9,d4,c1,h12,c5,c12,s9,d5,h4,c10,h10,s1,c9,d9,c4,d1,h8,h5,c13,h6,d6,s2,c3,s4,d12,d10,s8,c7,s3,c8,h3,h11,s13,s7,h2,d13,h1,s5,h7,c11,h13,d8,c2,s11,s10  
**970/1000: solving: solved in 31223 tries.**  
s6>s12,c6>s6,d11>d2,d7>d11,h12>h9,c5>c1,c12>c5,d5>d4,c10>c12,h10>h4,c9>s9,c9>c10,h10>h12,d9>d5,c9>d9,c9>c6,h5>h8,c13>c4,h6>h5,d6>h6,d6>d1,s2>s1,d12>d6,d10>d12,d10>h10,d10>d7,c13>c9,c3>c13,c3>d3,s4>s2,s8>s4,c7>c3,h11>h3,d13>s13,s5>s7,h13>h1,h13>d13,h13>h11,h7>h13,s5>s3,h2>h7,c2>h2,d8>c8,d8>d10,s8>d8,c2>c7,c11>c2,s5>s8,s11>s5,s11>c11,s10>s11,

c6,c13,c9,d7,s1,c5,s11,h13,s13,d13,c3,d9,h1,h9,c11,h8,h7,d8,h10,c12,d2,d5,d11,h4,d4,d3,d12,d10,h11,s12,h5,d6,c4,d1,s4,c1,s7,h6,s10,c7,c8,h12,s5,h2,c2,s2,s3,s6,s9,s8,h3,c10  
**971/1000: solving: solved in 2554716 tries.**  
c13>c6,c9>c13,c5>c9,s11>s1,s13>h13,s13>s11,d13>s13,d13>d7,h9>h1,h9>d9,h7>h8,d2>d8,d5>d2,d11>d5,d4>h4,d4>d11,d3>d4,d12>c12,d10>d12,d10>h10,d10>d3,h11>c11,h11>h9,h7>h11,d10>d13,c1>c4,d1>c1,s10>s4,c8>c7,c2>h2,c2>c8,s2>c2,s9>s5,s8>s9,s3>s2,s3>s10,s8>s7,s6>s8,h3>h12,h3>s3,h3>h5,h3>c3,h7>h3,s6>s12,d6>s6,h6>h7,d6>h6,d1>d6,c10>c5,d10>c10,d1>d10,

h9,s6,s5,h5,d11,d12,d7,c11,h2,d5,h8,c5,h3,c12,h11,c2,c13,h7,h6,h1,c8,c4,d10,s8,d4,c10,s12,h12,s13,c1,h10,d9,d3,d13,h4,s2,s9,s4,h13,d1,c6,c7,d2,c9,s1,s3,s7,d8,s10,d6,c3,s11  
**972/1000: solving: solved in 46711 tries.**  
s5>s6,h5>s5,h5>h9,d12>d11,d7>d12,h2>h5,c5>c11,d5>c5,d5>d7,h3>h8,c13>c2,h6>h7,h1>h6,c4>c8,d4>c4,d10>d4,h12>s12,s13>s8,s13>c13,c10>d10,c1>h1,c1>c12,c10>c1,h10>h12,h10>c10,h10>h3,h11>h10,d9>d5,d3>d9,d13>s13,s9>s2,s4>s9,h13>d13,h13>h11,h4>h13,s4>h4,d2>d1,d2>h2,c7>c6,s1>s4,s11>s10,s11>s3,s11>s1,s7>s11,c7>s7,c9>c7,d8>d2,d6>d8,d3>d6,c3>c9,c3>d3,

d8,d7,h13,c6,h11,c1,s13,h12,s1,c3,s11,h4,c8,h2,c9,d12,c13,d5,s9,s12,h7,h1,c11,c7,d2,h3,h6,c12,d4,h5,s5,d11,h9,d6,s3,s6,d3,h8,s7,c2,d13,s2,c10,s10,c4,s4,d10,c5,s8,d9,d1,h10  
**973/1000: solving: solved in 132245 tries.**  
d7>d8,h12>h11,s1>s13,s1>c1,c3>c6,s11>s1,s12>s9,s12>d12,h1>h7,c11>c13,c7>c11,h6>h3,d4>d2,s5>h5,s6>s3,s6>d6,d3>d11,s6>s5,h8>h9,s7>s6,d10>s10,d10>d13,d10>d3,s2>c2,s4>s2,c10>d10,s4>s7,c4>s4,c4>d4,c4>c7,h6>h1,c12>c4,c12>s12,c12>c8,c12>h12,h2>h4,h6>h2,c9>c12,c5>d5,h8>h6,c10>c5,s8>s11,h8>s8,c10>c3,h10>h8,h10>h13,c10>h10,c9>c10,d9>c9,d9>d7,d1>d9,

d11,d10,h8,s9,h1,d1,c11,s8,s11,h7,d12,s13,h4,s3,s2,d8,h3,d2,s5,h12,d7,c1,c9,c8,h10,c13,s10,h11,d13,s4,s6,c7,s1,h6,s7,h13,c5,h5,c4,c10,c3,d4,d3,h2,h9,d9,c2,d6,c12,c6,d5,s12  
**974/1000: solving: solved in 290 tries.**  
d10>d11,d1>h1,d1>d10,s8>h8,s9>s8,s11>c11,s11>s9,d12>d1,s2>s3,h3>h4,d2>d8,d2>s2,s5>s13,c9>c1,c8>c9,h10>h12,c13>c8,s10>h10,s10>s5,d7>d2,d7>h7,s6>s4,h6>s6,s7>s1,s7>c7,h13>d13,h13>h11,h13>c13,h13>h3,h6>h13,s7>d7,s7>s11,s10>s7,h5>c5,h5>h6,c10>c4,c3>c10,d3>d4,d3>c3,d3>d12,h2>h5,c2>h2,d9>h9,c12>c2,d5>d9,d5>d3,d6>d5,s12>s10,c12>s12,c6>c12,c6>d6,

s13,c13,h1,c12,d3,s5,h13,s10,d4,c9,h11,s6,s11,h9,s7,c6,c1,s12,d8,s1,c3,d6,h3,c10,s9,h5,s4,c2,d12,d1,h12,s3,d10,h4,c11,c8,c5,s8,h6,h10,d11,h7,h2,d9,c7,d2,c4,d13,d7,h8,s2,d5  
**975/1000: solving: solved in 32677 tries.**  
c13>s13,s11>s6,s11>h11,s11>s10,h9>c9,h9>h13,c1>c6,s1>c1,s1>s7,s12>s1,c10>c3,d1>d12,d10>d1,c8>c11,c5>c8,s8>s3,h10>h6,h2>h7,d2>h2,d2>d11,d13>d9,d7>d13,c7>d7,c4>c7,h8>h10,h8>s8,h4>h8,c4>h4,d5>c5,d5>d10,d5>h5,d5>d6,s4>s9,c4>s4,c4>c10,c2>c4,h12>h3,d2>c2,d2>d8,d5>d4,d5>s5,d5>d3,h9>h1,d2>d5,s12>s11,s2>d2,s12>s2,h12>h9,c12>h12,c12>c13,s12>c12,

s13,s9,s4,d4,d1,h7,h2,s8,d5,c6,s1,s5,d10,h4,c4,h3,c3,c9,s11,s6,c2,c10,h1,c7,s3,c11,s12,s2,h8,c13,h10,h13,d3,d9,d12,h12,d8,d7,c12,s7,d11,h5,s10,c5,d13,c8,h11,h6,d6,c1,h9,d2  
**976/1000: solving: solved in 7027 tries.**  
s9>s13,s4>s9,d4>s4,d1>d4,h2>h7,d5>d1,s5>s1,c4>h4,c4>c6,c3>h3,c3>c4,c9>c3,s6>s11,c10>c2,s2>s12,c13>c11,h10>h8,h13>h10,d9>d3,d12>d9,h12>d12,h12>h13,d7>d8,s10>s7,d11>d7,c5>c12,h11>h5,h11>d11,h11>h12,c8>c5,d6>h6,d6>d13,c1>c8,c1>c13,c1>h1,c7>c1,s10>s3,s10>s6,s10>d10,s10>s8,c10>s10,c7>c10,c9>c7,s5>d5,s2>s5,h9>c9,h11>h9,d2>d6,d2>s2,h2>d2,h11>h2,

d4,d2,h9,c2,d1,h4,c11,h2,c8,d11,c6,s4,c1,c13,h8,h13,c9,d12,h5,c10,s11,s10,s3,h12,s5,c5,s9,s7,d8,d3,d9,c3,d5,h10,c12,h6,s6,d10,c7,h7,c4,s12,s13,d6,s8,d13,s2,s1,h1,h3,h11,d7  
**977/1000: solving: solved in 63676 tries.**  
d2>d4,d1>d2,h2>c2,h2>h9,h4>h2,c8>c11,d11>d1,c6>c8,c13>c1,h13>h8,h13>c13,h13>h4,c10>c9,s10>s11,s10>c10,s10>s4,s3>s10,h12>h5,h12>d12,h12>h13,s5>s3,c5>s5,c5>c6,s7>s9,d3>d8,d9>d3,c3>c5,d5>d9,s6>h6,d10>h10,d10>d5,c12>c3,c12>h12,c7>s7,d10>d11,s13>s12,d13>s13,d6>d13,d6>s6,d6>d10,c4>c12,c7>c4,h7>c7,s2>s8,s1>s2,h1>s1,h3>h1,h11>h3,d7>d6,h7>d7,h11>h7,

c9,d5,d2,s7,h11,d13,s11,h3,s3,s12,d1,d3,d9,d10,d11,h6,c3,d4,s6,c10,s13,c11,d8,h2,c12,c13,s5,d12,s8,s4,h5,c2,h8,c4,h12,h13,h9,s10,c6,c5,c7,c8,d7,s2,h7,s9,s1,h4,h10,h1,c1,d6  
**978/1000: solving: solved in 35834 tries.**  
d2>d5,d13>d2,s11>h11,s11>s7,s3>h3,s3>s11,s12>s3,d3>d1,d9>d3,d9>c9,d13>d9,d11>d10,d4>d11,c12>c11,c13>c12,c13>s13,c13>c10,d12>d8,s8>s5,s4>s8,c2>h2,h8>h5,c4>c2,s4>c4,s4>s6,s4>d4,s4>s12,c13>c3,c13>d13,h12>h8,h12>d12,h12>h6,h13>h12,s10>s4,h9>h13,c8>c6,c8>c13,h7>c7,s9>s2,s1>s9,h10>h4,c1>s1,c1>c5,c1>c8,h7>h9,h10>s10,h7>h10,h1>c1,h7>h1,d7>h7,d6>d7,

d1,s1,s13,c6,c13,h7,d7,s5,d5,d10,h5,d6,c4,d9,s3,d11,d12,h6,c7,h13,s8,h8,h1,c8,c9,h4,s2,d4,d8,d2,s12,s11,c10,s10,s9,c5,s6,h12,h2,c11,c2,d13,h11,h3,h9,c12,s4,s7,c1,c3,h10,d3  
**979/1000: solving: solved in 18218 tries.**  
s1>d1,s13>s1,c13>c6,c13>s13,d7>h7,d5>s5,d5>d7,d10>d5,d12>d11,h8>s8,h8>h13,h1>h8,c9>c8,d8>d4,d2>d8,d2>s2,s11>s12,s10>c10,s10>s11,s9>s10,s9>c9,h2>h12,h2>d2,h2>h4,s6>s9,s6>h6,h2>h1,h11>c11,h3>h11,h9>h3,c2>h2,c5>c2,c12>c5,c12>d12,c12>c4,s6>s3,h9>d9,h9>h5,s4>s6,s7>s4,c7>s7,d13>d6,d13>c13,c7>c12,c1>c7,h10>h9,c3>c1,d3>c3,d3>d13,d10>d3,h10>d10,

d12,c10,s4,d7,s1,s7,d10,c6,h7,c4,c12,d13,h11,c8,h4,h12,s3,c2,d8,d5,s11,h13,s10,d1,c13,d9,h6,h10,h9,s2,d4,c3,c7,c9,c5,s8,s13,d11,s5,h2,d3,c1,d6,s9,d2,s12,h5,h1,c11,h8,s6,h3  
**980/1000: solving: solved in 58698 tries.**  
d7>d12,s1>s4,s7>s1,d10>d7,c10>d10,c12>c4,h11>h7,h12>h4,h12>c12,h12>h11,c8>c6,d8>d13,d5>d8,c13>h13,d9>d1,h10>h6,h9>h10,h9>d9,c7>c3,c9>c7,c9>h9,c5>c9,s13>s2,s13>c13,s13>s11,s10>s13,s8>s10,d11>d4,s5>s8,s5>d5,s5>s7,h2>c2,c1>c5,d2>d3,d2>h2,d6>d2,s12>s9,h1>h5,h1>c1,h1>h12,s6>s12,s6>s3,s6>s5,d6>s6,d11>d6,c11>d11,c11>c10,c8>c11,h8>h1,h8>c8,h3>h8,

h5,d10,c2,c7,c8,s9,d9,d1,c10,h11,h1,s7,s13,s1,d5,c1,c11,d12,c3,h13,c12,s10,d8,s12,d3,s3,s5,c6,h10,d11,c5,h9,d2,s2,d4,s11,s8,s4,h6,h4,c4,d6,h3,c9,d13,h2,h8,h12,c13,s6,h7,d7  
**981/1000: solving: solved in 825 tries.**  
c7>c2,c8>c7,d9>s9,d1>d9,c10>d10,c8>c10,h11>h5,h1>d1,s13>s7,s1>s13,s1>h1,c1>c8,s1>c1,c11>h11,d12>d5,c3>c11,s12>c12,s12>s1,d12>s12,d8>d12,d3>d8,d3>c3,s3>s10,s5>s3,h10>h13,c5>s5,c6>c5,d11>d3,s2>d2,s8>s11,s4>s8,s4>d4,s4>s2,h6>c6,h6>h10,h9>h6,h4>s4,h4>h9,c4>h4,h2>h3,h8>h2,c13>c9,h12>h8,c13>c4,h7>h12,d7>h7,d13>c13,d7>d11,d13>d7,d6>d13,s6>d6,

c13,s12,d6,s4,s11,h7,h13,s8,d12,c1,d3,c11,c10,h1,h5,s13,s3,h9,h3,d2,d7,d9,h2,c5,d4,c9,s5,c7,h10,h11,c8,c12,c4,c6,s7,s9,h6,d1,d13,d10,h12,d8,h4,s6,c2,s10,s1,c3,d5,d11,s2,h8  
**982/1000: solving: solved in 569066 tries.**  
s11>s4,h13>h7,c10>c11,h1>c1,h1>h13,d3>d12,s3>s13,s3>d3,s3>s8,h5>h1,h9>h5,h3>h9,s3>h3,s3>s11,d2>d6,d7>d2,d9>d7,s5>c5,s5>s3,c9>c10,c7>c9,h11>h10,c12>c8,s9>s7,d13>d1,d8>d13,d10>d8,h4>h6,h4>c4,h4>d4,h4>h2,c12>c7,c12>s12,s6>s9,s6>c6,s6>s5,s10>d10,d11>d5,s2>s1,s2>s10,s2>s6,h11>h4,c2>s2,c3>c2,c3>c13,c12>c3,d11>d9,h11>d11,h12>h11,h12>c12,h8>h12,

c10,d6,d13,s10,d8,s7,c1,s3,h13,c5,s9,s8,c8,s11,h11,s13,h2,c13,h3,d10,d5,s6,c9,s4,c3,h5,d4,c4,d7,c7,d1,c2,d12,d2,s1,h7,s5,c6,h12,h10,h9,h4,c12,d3,d11,h6,h8,s2,d9,h1,s12,c11  
**983/1000: solving: solved in 302538 tries.**  
d13>d6,c5>c1,s8>s9,c8>s8,c8>c5,h11>s11,h11>h13,d5>d10,d4>s4,d4>d5,c3>c9,c3>h3,c3>c13,c4>d4,c4>c3,s6>s13,c7>d7,d2>d12,d2>c2,d2>d1,h7>c7,h7>h5,h10>h12,h9>h10,c12>c6,d11>d3,h6>h9,h1>h8,h1>h6,h1>s1,h4>h1,h4>c4,h4>h11,h7>h4,h7>s7,s6>s3,h2>h7,d2>h2,d2>d8,s6>s10,s2>s5,s2>s6,d2>s2,d11>d2,c8>c10,d9>d13,d11>d9,c11>d11,c11>c8,c12>c11,s12>c12,

h11,c13,c6,h3,s10,s13,c12,h6,d6,h12,c7,c9,s8,d5,c4,c8,s9,h7,h5,d12,d7,h13,s11,c5,h9,d4,s5,d13,c2,c1,d9,d1,s2,c11,d2,h8,c10,s6,d3,s12,s4,d8,s3,c3,h10,s1,s7,d10,h4,d11,h1,h2  
**984/1000: solving: solved in 11940 tries.**  
c6>c13,s13>s10,c12>c6,d6>h6,h12>h3,h12>c12,h12>h11,c9>c7,s8>s13,c8>c4,s9>c9,h5>h7,d12>d5,d7>d12,h13>h5,c5>c8,s5>s11,d13>d4,d13>h13,c1>c2,d1>d9,d1>c1,d1>d13,c10>c11,d3>d2,s12>s6,s4>s12,d8>d3,h8>d8,h8>h9,s3>s2,c3>s3,c10>c3,h10>h8,c10>h10,c10>c5,s7>s5,s7>d7,s7>s9,s4>s7,d10>c10,d1>d10,h4>s4,h4>h12,d11>d6,d1>d11,s1>d1,s1>s8,h1>s1,h1>h4,h2>h1,

h10,s8,c7,h3,c12,d13,s1,c8,c2,h12,s11,d4,s5,c1,c9,s7,h1,h9,s6,d11,h2,d8,s4,h4,h8,h11,s13,d2,c11,d6,h5,d9,d10,d3,c5,s12,d5,d1,s3,h13,c13,c3,d7,s10,s9,h7,d12,c10,h6,s2,c4,c6  
**985/1000: solving: solved in 557679 tries.**  
h3>h10,c12>c7,s1>s8,c2>c8,h12>c12,d4>d13,s5>s11,c9>c1,h9>h1,h2>h9,d8>d11,h4>s4,h4>h2,h8>d8,h11>h8,c11>h11,d6>d2,d6>s6,d10>d9,d3>d10,d5>d3,d5>h5,d5>d6,c5>d5,c5>c9,c5>s5,c5>c2,h4>d4,h4>h3,s7>s1,c11>c5,s13>s7,c13>h13,c3>c13,s10>s3,h6>h7,d12>d7,d12>d1,d12>h12,s2>s9,c6>h6,c10>c6,c4>c3,c4>c11,c4>h4,s12>d12,s12>s13,s10>s12,c10>c4,s10>c10,s2>s10,

s1,c12,c5,d11,d8,c4,s13,d2,c11,s5,d12,d13,h1,c13,h5,s12,h2,s10,s9,s2,d4,s7,s4,h4,c6,h3,d1,s11,c3,c8,d5,d3,c10,d9,h6,h13,s6,d6,h11,d7,c7,h10,h8,d10,h9,c9,c2,h12,s8,s3,c1,h7  
**986/1000: solving: solved in 30892 tries.**  
c5>c12,d8>d11,d2>d8,d13>d12,d13>s13,c13>c11,c13>d13,c13>c4,s5>c5,s5>s1,h5>h1,h5>s5,h2>d2,h2>h5,s10>s12,s9>s10,s2>s9,s4>s7,s4>d4,s4>s2,h4>s4,c3>h3,c3>c6,c8>c3,d3>d5,h13>h6,d6>s6,c7>d7,h8>h11,d10>h10,d10>d6,d10>c10,d9>d10,h12>h9,h12>h13,h8>h12,c9>d9,c1>c2,c1>c9,c1>d1,c1>c13,h8>c8,h8>h4,s3>d3,s3>s11,c7>c1,s8>s3,h7>c7,h7>h2,h8>h7,s8>h8,

c12,s10,d12,s7,h9,c6,h4,d6,h5,c2,s4,c4,s12,h6,d4,c3,d10,s9,s2,d8,c5,c9,s5,s3,c1,s13,h1,h11,d9,c13,d5,c8,d3,h2,h8,c11,s6,s1,h3,c10,c7,s11,d7,d1,d11,h13,h7,d2,h10,h12,d13,s8  
**987/1000: solving: solved in 30674 tries.**  
c4>s4,c4>c2,c4>h4,c4>c6,h5>h9,d4>d6,d4>c4,d4>d12,s2>s9,c9>c5,s5>s2,s3>s5,c1>c9,s13>s3,h1>c1,h11>h1,h8>h2,c11>c8,s1>s6,h3>d3,h8>h3,c10>c11,c7>c10,s11>s1,d7>c7,d7>d5,d1>d7,d11>d1,d11>h11,d11>d8,d9>d10,s11>d11,s11>s13,c13>c3,h13>h8,h13>c13,h13>h5,d2>d9,h7>h6,h7>s7,h13>h7,h12>h10,d13>d2,d13>d4,h13>d13,h12>h13,s12>h12,s12>s10,s12>c12,s11>s12,s8>s11,

d6,h4,d13,h12,d2,d12,h13,h7,c11,c4,s2,d4,d1,d3,s4,c3,s10,s7,h5,s12,c1,c10,d8,c7,h9,s8,c6,d11,s13,d10,c12,d9,c2,s6,s11,h2,h11,c13,h3,s9,s3,c5,h6,h8,s1,c9,d7,d5,h1,h10,s5,c8  
**988/1000: solving: solved in 20387 tries.**  
d12>d2,d12>h12,d12>d13,h7>h13,c4>c11,c4>h4,d4>d12,d4>c4,d4>d6,d1>d4,d3>d1,s4>s2,c3>d3,s10>s4,s7>s10,s7>h7,c10>c1,s8>d8,s11>s6,h11>h2,h11>s11,s3>s9,h6>h3,c9>c5,s1>s3,c9>c13,c9>d9,c9>c12,d5>d7,h10>h8,h10>h11,h10>d10,h1>h6,h1>h10,s1>h1,s1>s13,c9>c6,c9>h9,c9>c10,s5>s1,d5>d11,s5>d5,c8>c2,c8>s8,c8>c9,c7>c8,s5>h5,s12>s5,c7>c3,s7>c7,s12>s7,

d4,c12,h2,s4,h8,d13,s12,s13,c2,d1,s3,h10,c8,s5,s10,d10,d8,c7,h3,s7,h1,h7,d9,h9,h12,c4,c5,d12,h13,d7,s8,h4,c6,s9,s6,d5,c1,s1,c10,h11,c3,s11,c9,h5,c13,d2,c11,d6,d3,d11,s2,h6  
**989/1000: solving: solved in 6137 tries.**  
s4>d4,h8>h2,s12>c12,s12>s4,s13>d13,s3>s13,c8>c2,s10>s5,s10>h10,s10>s3,d10>d1,d8>d10,d8>c8,h7>h1,h7>s7,h7>h3,h7>c7,h7>h8,d9>d8,h9>d9,h12>h9,h12>s12,h7>h12,c5>c4,h4>h13,s6>s9,s6>c6,s6>s8,s1>s6,c3>c1,c10>c3,s11>h11,s11>s1,c13>c10,c9>c13,c11>c9,d3>d6,d11>d3,d11>c11,d11>d7,s11>d11,d5>d12,d5>c5,s2>s11,s2>s10,h4>h7,d2>s2,d5>d2,h5>d5,h5>h4,h6>h5,

d13,d1,s9,c8,d3,c10,h10,d5,s11,s6,d10,d7,d9,s12,s7,c7,c6,d6,c1,c12,c13,d8,h9,s13,h5,h6,d12,c11,c5,h4,s5,h7,h8,s1,d11,c9,h3,h12,h1,s8,s10,d4,s2,s3,c2,c3,d2,h11,h2,s4,h13,c4  
**990/1000: solving: solved in 241 tries.**  
d1>d13,d3>d1,c10>c8,h10>c10,d5>d3,s6>s11,d7>d10,d9>d7,d9>s9,d9>d5,s12>s6,s7>s12,c7>s7,c6>c7,d6>c6,c12>c1,c13>c12,s13>c13,h5>h9,h6>h5,h6>d6,h6>h10,d8>d9,d12>d8,c5>c11,h4>h6,s5>c5,s5>s13,h8>h7,h12>h3,h1>h12,h1>s1,h1>h8,s10>s8,d4>d11,d4>h4,d4>d12,s10>s5,s2>s10,s3>s2,c2>c9,c3>s3,h13>h11,h13>h1,h2>h13,c2>h2,c2>c3,s4>d4,c4>s4,c2>c4,d2>c2,

s3,c4,c5,d6,s12,h8,c2,s4,c9,s1,s7,d8,s9,d10,h11,c3,h2,c1,h12,h3,h1,d3,d7,c11,h4,h9,s11,d4,h5,c8,h6,s13,s10,s8,c13,d12,s5,h10,d9,d2,s6,d1,c12,c7,s2,c10,d5,d13,h7,c6,h13,d11  
**991/1000: solving: solved in 3964 tries.**  
c5>c4,s12>s3,c2>c5,s7>s1,s9>c9,s9>s4,s7>s9,d8>d6,h8>d8,s7>s12,h3>h12,h3>c3,h3>h11,h2>h3,h2>c2,h8>h2,h1>c1,d7>d3,h4>h1,h9>h4,s11>c11,s10>s13,s8>s10,c13>c8,d9>d12,d2>d9,c7>c12,s2>s6,s2>d2,s2>s8,s5>s2,s5>h5,h10>h6,c10>h10,c10>c13,d1>d4,d5>s5,d5>d1,d13>d5,c6>c10,c7>c6,c7>d7,h7>c7,h7>h9,h7>s7,h8>h7,d11>s11,d11>d10,d13>d11,h13>d13,h13>h8,

h9,s13,h7,c10,h10,h4,h8,c1,c12,s9,d7,s3,d12,h12,h6,c4,s11,c2,s12,d4,d8,s5,c13,h13,h3,s10,d2,d9,d3,h5,s4,s7,d1,d10,c11,d11,c9,d5,d6,c3,c7,s8,c8,c6,s2,d13,h2,c5,h1,s6,s1,h11  
**992/1000: solving: solved in 13634 tries.**  
h10>c10,h10>h7,h4>h10,h8>h4,c12>c1,s9>s13,s9>h9,d12>c12,d7>d12,s3>s9,h6>h12,d8>d4,h13>c13,h3>h13,d9>d2,d3>d9,h5>h3,h5>s5,s10>s12,s7>s4,d10>d1,d11>c11,d11>d10,d6>d5,c7>c3,c6>c7,c6>d6,c6>c9,s8>s7,s8>d8,s8>s10,d11>d3,c8>c6,c8>s8,c8>c4,s2>c2,d11>s11,d11>d7,h2>s2,h5>h2,c5>c8,h5>c5,h5>h8,s6>h6,s1>s6,s1>s3,h1>h5,h1>s1,h11>h1,d11>h11,d13>d11,

h7,c5,d1,c6,h8,d11,h10,d10,h4,s6,d8,c1,c3,h12,d2,s9,h9,c12,s8,s12,s13,s1,d6,h6,c2,h2,c13,h11,s10,h1,c9,s2,s4,d3,d5,s11,d7,s5,c11,c8,h13,h5,d9,d4,c7,h3,d13,c4,d12,c10,s3,s7  
**993/1000: solving: solved in 78122 tries.**  
d11>d1,h10>h8,d10>h10,s6>c6,c3>c1,h12>h4,h9>s9,c12>c3,s12>s8,s12>c12,s13>s12,s1>s13,h6>d6,h6>h9,h2>c2,h2>h6,h2>d2,h2>h12,s10>s1,s10>d10,s10>s6,d8>d11,h1>h11,s4>s2,d5>d3,c11>s11,c11>c9,d7>d5,h5>s5,d4>d9,c4>c7,c4>c8,c4>s4,c4>c11,d13>h13,h3>h5,h3>h1,d12>d7,d13>d12,d13>c13,d4>d13,d4>d8,h3>h2,c4>d4,c4>c5,c10>c4,s10>c10,s3>h3,s3>s10,s7>s3,s7>h7,

h13,c6,s5,h11,d7,s7,s6,s1,d2,d8,h12,c13,d5,d11,s8,s3,s12,h1,d9,c12,c2,d1,c1,h9,h3,h10,s13,h6,c10,s10,c11,h5,c3,s9,c7,d3,d13,h7,s11,s4,d4,s2,c5,h8,h4,d10,c4,h2,d6,c8,d12,c9  
**994/1000: solving: solved in 10552 tries.**  
h11>h13,s7>d7,s7>s5,s6>s7,s6>c6,s1>s6,d8>d2,h12>h11,d11>d5,s8>d8,s8>s1,s3>s8,s12>s3,s12>h12,c2>c12,d1>h1,d1>d11,d9>d1,c1>c2,h3>h9,h10>h3,c10>h10,c10>c1,s13>c13,s13>s12,c11>c10,s9>s10,s9>d9,s9>s13,h5>h6,c7>c3,d13>d3,h7>h5,c7>h7,c7>c11,s4>s11,d4>s4,d4>d13,h2>h4,h2>s2,c4>c5,c4>c7,h8>h2,c8>h8,d6>d10,c9>c8,c9>s9,c4>c9,d4>c4,d6>d4,d12>d6,

d2,s1,c5,s2,s12,h12,s3,c2,h13,h6,s5,c7,c13,d5,c9,h8,c1,c6,h1,s8,d10,d4,h4,s6,h7,d8,c3,s7,h5,h10,d7,d1,d13,c10,s10,h11,c8,d9,s9,s4,h9,c4,d12,s11,c12,h2,d3,d6,s13,c11,d11,h3  
**995/1000: solving: solved in 11692 tries.**  
s2>d2,s1>s2,h12>s12,s3>s1,h6>h13,c7>c2,c13>c7,d5>s5,c9>c13,c6>c1,c6>h6,c6>c9,d5>c5,h1>h8,d4>d10,h4>d4,s7>h7,s7>s6,d8>s8,h5>h4,h10>h5,d1>d7,d13>d1,s10>c10,s10>s7,s10>h10,d13>d8,s9>d9,s4>s9,c4>c8,s4>c4,s11>s4,s11>s10,h9>h11,h2>h9,d11>d6,d11>d12,d11>s11,c11>c12,c11>d11,c11>c6,h3>h2,h3>h1,c3>c11,h3>c3,d13>d5,h3>h12,d3>h3,s13>s3,d13>s13,d3>d13,

d4,d12,s7,c2,d8,h7,c7,h1,c3,d11,c8,s10,s9,h10,c5,d1,c12,h5,c4,d5,h9,h13,c9,h11,s5,s4,c1,d6,s3,d13,s2,d2,d9,h8,d3,h2,c11,s6,h3,d10,c6,c13,s1,s13,h12,s8,h4,s11,c10,s12,d7,h6  
**996/1000: solving: solved in 46517 tries.**  
d12>d4,d8>d12,c7>h7,c7>c2,c7>s7,s9>s10,c5>c8,h5>h10,c4>c12,d5>h5,d5>d11,c5>d5,c5>c3,d1>h1,h13>h9,c9>s9,c9>c5,c4>c9,h11>h13,s4>s5,c1>c4,c1>d1,c1>c7,d2>s2,d2>d13,d9>d2,d3>s3,d3>d6,d9>d3,h8>h11,c6>s6,s13>s1,s13>c13,h12>h3,h12>h2,h12>h8,s11>s13,s11>c11,s12>s8,s12>s11,s12>h12,s4>s12,c6>c1,h4>s4,d7>d9,d7>d8,d10>d7,c10>d10,c6>c10,h6>h4,h6>c6,

d1,h10,s6,s5,h12,d2,c3,c4,d8,h4,s11,d9,h9,h13,c6,h5,s9,d12,d5,c1,s10,h3,h1,c13,d7,d10,s4,s8,c2,c7,s1,h2,c8,s3,c9,c11,h6,s12,d3,d11,c10,h7,d13,d4,d6,c12,c5,s7,s2,h11,s13,h8  
**997/1000: solving: solved in 83541 tries.**  
s5>s6,c4>c3,d9>d8,h9>d9,h9>h12,h4>c4,d5>d12,s10>s9,h1>h3,h1>c1,h1>h5,d10>d7,d10>s10,d5>d10,c13>c6,c13>h13,h1>h4,s4>s11,s8>s4,c7>c2,c8>c7,c8>s8,c13>c8,d5>d2,h2>h1,c9>c13,c9>h9,s3>s1,h6>h2,d3>s3,d11>d3,c11>d11,c11>c9,d4>d13,d6>d4,c12>c10,c12>s12,c5>c12,c5>c11,d5>c5,d6>d5,d6>d1,h7>h10,s2>s5,h6>d6,s13>s2,s7>s13,h11>h6,h8>h11,h7>h8,s7>h7,

d3,c7,d8,c12,s12,h2,h13,d6,s5,h11,c10,d4,c4,c8,h10,s4,s1,c11,s11,c9,c3,s3,h12,c6,h3,s2,d2,c5,s13,d11,s10,d1,h4,d12,d5,h9,d9,h7,s7,s9,s6,c13,c1,d10,s8,d13,h8,h1,h5,d7,h6,c2  
**998/1000: solving: solved in 19513 tries.**  
s12>c12,h13>h2,d6>d8,c4>d4,c4>c10,c8>c4,s1>s4,c11>c8,c11>h11,h10>h13,s11>s1,s11>c11,s11>s5,c3>c9,s3>c3,s3>s11,h12>s12,h10>h12,c6>d6,c6>c7,s3>d3,h3>h10,s2>s3,d2>s2,d5>d12,d9>h9,d9>d5,s7>h7,s9>s7,s6>s9,c1>c13,s8>s6,d10>d9,d10>s10,d10>d11,d1>d10,h8>s8,h8>h4,h1>h8,h5>h1,h5>c5,h5>h3,d13>s13,d7>d13,d7>d2,d1>d7,c1>d1,h6>h5,c2>c1,c6>c2,h6>c6,

d1,d7,d9,h7,c13,d10,c2,h8,d6,s2,s3,c1,s1,c6,s11,s5,h1,d5,d8,c10,h5,h10,c12,h11,s9,s8,d4,d2,c7,s7,h6,d12,c3,s10,c5,h13,d13,c4,h12,h2,s6,s12,c9,d11,s4,d3,s13,h4,h9,h3,c8,c11  
**999/1000: solving: solved in 1990 tries.**  
d7>d1,d9>d7,d10>d9,c2>c13,s2>c2,s3>s2,s1>c1,s1>s3,c6>d6,s11>s1,s5>s11,d8>d5,d8>h8,d8>d10,h1>h7,c10>c6,h5>h1,s5>h5,h10>c10,s8>s9,d2>d4,s7>c7,d12>d2,d12>c12,d12>d8,h11>h10,s7>s8,s10>s7,c5>c3,d13>h13,h2>h12,s12>s6,c9>c4,h4>s4,h9>h4,h9>h2,h9>c9,h9>h6,d3>d11,s13>d13,s13>s10,s12>s13,s12>d12,s5>s12,c5>s5,h3>d3,h3>h9,c8>c5,c11>c8,h11>c11,h3>h11,

h1,c1,c13,d12,d2,d11,d7,h4,s12,d13,h2,d6,s4,d3,d1,c9,s10,h11,s9,s11,c12,h12,c10,h13,h3,s8,d5,c2,s3,h6,d9,h9,c8,d8,d10,c4,d4,c11,h5,c5,c3,c6,s2,h10,h8,s6,c7,s5,h7,s13,s1,s7  
**1000/1000: solving: solved in 1202476 tries.**  
c1>h1,c13>c1,d2>d12,d11>d2,d7>d11,d13>d7,d13>c13,s4>s12,s4>h4,d6>d13,d3>d6,d1>d3,s10>s4,s11>s9,s11>h11,s11>s10,c12>c9,h12>c12,h12>h2,h3>h13,s3>s8,s3>h3,s3>s11,d9>d5,h9>h6,d8>c8,d8>d9,d10>d8,d10>c10,h9>h12,d10>d1,c11>c2,c4>c11,h5>h9,c5>h5,c4>c5,d4>d10,c6>c3,s6>s2,h8>h10,h7>h8,s5>s6,s13>s5,s1>s13,s7>s1,s7>s3,h7>s7,c7>h7,c4>c7,c4>d4,c6>c4,

done
1000 of 1000 solved.

# Still here?

Do you believe me now?