# Racing_Across_TimeSquare
GA first project -game

In this project I used HTML, CSS, Javascript, and JQuery to complete the game.
The basis of the game is to use the arrow keys to move the player around the page to collect the bagel then newspaper.
Everyone knows how busy time square can be, so the goal of the game is to make it across the board without running into anyone.
The enermies "divs" are randomly moving around the page and are either represented by a tourist trying to ask for directions or superhero trying to take a picture with you.
The only was to win the game is to make it acorss the board, collect what you need to in the correct order and escape.
A counter is utilized in the game to make sure yo get the bagel first, newspaper second, then go to the finish line.
The enemies are randomly generated on the screen based off of a random height and width function. they then move between two points every 2 seconds.
the bagel/newspaper are also in randomly generated locations so that the game will never be the same everytime you play it, but unlike enemies, they stay fixed on screen once started.
The player moves in 4 different directions using arrow keys and will only move if inside the confine of the screen.
If the player attempts to move out of the screen, the game resets the players location to the edge of the screen and play continues.
Using a collide function, if a enemy runs into the player a box appears letting you know that you have lost.
By locating all 4 sides of the player and all the enimies, then running it through a simple boolian command that only runs if there is a collition, the game knows if you collided.
The game also has a win function that pops up a similar message to the collide if you win.
The bagel, newspaper, and finish line are all defined as a general area, instead of a finite point, where if player goes into area it registers as being there. avoids error if finding small point.
a form is used on the first page that collects information and gets it in the URL. splicing it in multiple locations and reappending it so the information can be shown on the next page.
This project is very complete and though music would have been a nice addition to the game, nothing suitable was found to fit the games feel.
To install game use this link https://mkeigwin.github.io/Racing_Across_TimeSquare/ .
The landing page I replicated is found here http://spyrestudios.com/wp-content/uploads/10-monument-valley-website-homepage.jpg .
Page was copied to best of ability but still original aspects to my game.
