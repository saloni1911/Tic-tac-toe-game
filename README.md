# This repository contains a game called Tic Tac Toe Game.

## Technologies Used -

1. HTML
2. CSS
3. Javascript
4. GitHub

### Approach taken for HTML page

1. Made index.html file and opened it in sublime text
2. Wrote basic layout of HTML page like DOCTYPE, html, head, body, and script tags.
3. Draw basic layout on notebook - how I want my Tic tac toe game to look like - 
  Heading Tic Toe Game at the top as heading.
  Need 2 players to play the game and assigning 2 different symbols to them.
  Need 3X3 grid to play the game.
  Extra features like win counter, timer, buttons (start, restart and set timer) were                      added as I build the game in javascript. 
4. Links were added to link css file and javascript file.
5. Few links for google fonts were also added that allow me use those particular fonts in CSS.

I divided body section in 6 parts - 
a. h2 tag contains heading
b. p tags contains 2 players and their symbols.
c. div tags were used to create 9 boxes for 3X3 grid and wrapped all divs in section tag.
d. h3 tags used to display win counter and timer.
e. buttons tags were used to create 3 buttons.
f. Script tag to link javascript file.

### Approach taken for CSS

1. I decided width of whole body.
2. Did calculation in percentage to display 3X3 grid (divide width of 1 box in grid by width of whole body * 100). It gave me relative values to be used to decide width of each  div. Gave display: inline-block and float: left to position 9 boxes to form grid. 
3. Another important step was to clear the float in h3 element that occurs after all divs.
4. Whole body was centered by using margin: 0 auto.
4. All other steps like border, text-align, background-color, color, font-size, font-family, margin, padding, text-decoration in CSS was to beautify the HTML page.

### Approach taken for javascript

1. First step was writing DOM to get HTML elements (section, divs, win counter, timer and  3 buttons) and stored them in different variables.
2. First function I wrote was switchSymbol - 2 symbols get switched automatically when 2 players take their turns alternatively. To prevent 2nd click in already clicked box, I used if statement to set conditions. I created an empty array to push the symbol on each click at specific position in an array.
3. Add event listener to parent of all divs that will listen above function. 
4. Then, I started working on setting winnerRule function - that will describe all the conditions when a player can win. 
Also, to make it DRY afterwards, I made another function to do all common steps (like checkingEquality to check common condition and console) and call that function in winnerRule function.
I called this function in switchSymbol function to check winner each time while paying the game.
5. Then, I worked on restart function - to reset whole game automatically and to reset game after clicking restart button. Added event listener to restart button.
6. Then, I worked on Set Timer button and timer by creating a new function called updateTime that will decrease the timer. Added event listener to start button that will call updateTime function in set interval of time.
7. Lastly, worked on winCounter function to record all the wins of both players. This function will take the value from winnerRule function and will add wins to that player.
8. I called restart function in winnerRule, so as to reset the board every time a player wins or draw happens.
 
## Installation Instructions 

1. Create a folder to store all files of the game in the computer (local).
2. In terminal, initialize git in that folder by ‘git init’.
3. Go to GitHub account and create a new repository.
4. In terminal, to connect local to git repository - ‘git remote add origin url’
   Url in above line is the url of new repository created in GitHub account. Copy and               
   paste that url in terminal command instead of writing word ‘url’.
5. In local, files were added to staging and commit changes e.g. ‘git add -A’, ‘git commit -m ‘tic tac toe game’’.
6. Files were pushed from local to my remote repository on Github e.g. ‘git push origin master’.
7. Last step was hosting the game - 
Go to git repo, then settings, scroll down to GitHub Pages, select master branch as a source from dropdown menu and click save.
It will give a link that I can provide to other users to play this game online.

## How to play the game

1. Copy and paste the url provided by GitHub after hosting in a browser (preferably google chrome).
2. We can start playing the game directly in boxes of grid or we can set timer in seconds- for how long we want to play. 
3. Player 1 has ‘X’ symbol and player 2 has ‘O’ symbol to play the game.
4. Keep alternating moves until one of the players has drawn a row of three symbols (horizontally/ vertically/ diagonally).
5. Win counter will keep track of player1 and player2 wins. 
6. Restart button help to reset whole game as well as win counter.
7. The board will get automatically reset after a win of either player or in case of draw (when no player win) and players can play the game as long as they want to play.
8. If players want to use timer option, follow the following steps- 
a. Click on ’Set Timer’ button that will open a prompt box.
b. Provide a number in prompt box that will set time in seconds.
c. Timer will show that time and will decrease it gradually to zero by 1 second.
d. Both players can play the game till timer goes back to zero.
e. Wins of both the players will be recorded in win counter.
f. Press restart button to reset the game and win counter.
g. Board is ready to play again.







