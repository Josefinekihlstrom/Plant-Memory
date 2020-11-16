# Testing
- [Go back to the project and README file](https://github.com/Josefinekihlstrom/Plant-Memory)
- [Go to the Plant Memory live project here!](https://josefinekihlstrom.github.io/Plant-Memory/)

## Content
1. [Automated Testing](#automated-testing)
2. [Manual Testing](#manual-testing)
3. [User Testing](#user-testing)
4. [Bugs found during development](#bugs-found-during-development)
5. [Bugs found while testing manually](#bugs-found-while-testing-manually)

## Automated Testing
- [W3C CSS Validation](https://jigsaw.w3.org/css-validator/)
    - This project passed the W3C CSS Validator without any remarks. 14th November - 2020
- [W3C Markup Validation](https://validator.w3.org/)
    - This project passed the W3C Markup Validator without any remarks. 14th November - 2020
- [JSHint](https://jshint.com/)
    - This project was validated with JSHint validator on 14th November 2020 with
        - 20 warnings
        - Undefined variable
        - Two unused variables
    
    - All of the 20 warnings was about the following:
        - 5 "const is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)"
        - 10 "let is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)"
        - 2 "template literal syntax is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)"
        - 3 "arrow function syntax is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)"
    - To solve these warnings i put the following code in the top of my script file: /*jshint esversion: 6 */
    - The undefined variable in my script code was the '$' used for the jQuery code. This cannot be removed
    since it will break the jQuery code and the game would not work properly.
    - The two unused variables according to JSHint was the following:
        - playPause on line 57
        - restartGame on line 233
    - These two are onClick functions in the game, playPause to make it possible to play and pause the background music and
    the restartGame to make it possible to reload the page when the player click on the replay icon. These cannot be
    remove since it will break these functions and therefor they must remain in the code.

## Manual testing
All manual tests were done in the following browsers:
- Firefox
- Google Chrome
- Microsoft Edge

1. Open a new browser and verify that the content is loaded correctly without any errors in the inspect console.

2. Memory game section:
    - Click on the 'Start The Game' overlay and the overlay disappears correctly.
    - Timer is starting after overlay is removed.
    - When clicking the first card, sound effect fires and the card stays flipped.
    - When clicking the second card, second card flips and sound effect fires:
        - If match: Both cards stays flipped and a sound effect fires. Moves counter adds one.
        - It no match: Both cards unflip and sound effect fires. Moves counter adds one.
    - When clicking on a third card before unmatched cards unflip, the board is locked.
    - When clicking on the first card after it's already been clicked, it still counts as first card and does
    not affect when the second card is getting clicked.
    - When clicking on the second card after it's already been clicked, it still counts as second card and
    checkMatch function fires as normal.
    - When all cards are matched, timer stops, winning sound effect fires and 'Congratulations' overlay covers the memory game.

3. Menu section:
    - When replay icon is clicked the page reloads and 'Start The Game' overlay appears.
        - Verified by pressing the 'Start The Game' overlay that the cards are being reshuffled.
        - If a round has been played and finished before clicking the replay button, the time stamp from the last
        round appears in the menu section under the timer.
        - If the dark theme was used before clicking the replay icon, the page reloads with the dark theme on.
        - If the light theme was used before clicking the replay icon, the page reloads with the light theme on.
    - When clicking on the speaker icon the background music starts playing and the icon changes to a speaker icon that is playing sound.
        - When clicking the speaker icon again the music stops and the icon changes back to the initial state.
        - When background music is playing, the other sound effects aren't negatively affected.
        - When finishing the game while background music is playing, the background music stops correctly and
        icon changes back to initial state.
        - When clicking the speaker icon when game is finished and background music was turned off, background
        music starts playing again and icon is changed to speaker icon that is playing sound.
    - When clicking the questionmark the 'How to play' modal pops up.
        - When modal is showing, it is verified that by clicking the 'X' symbol the modal closes.
        - When modal is showing, it is verified that by clicking the 'Close' button the modal closes.
        - If game is started and questionmark icon is clicked, the timer continues to run when modal pops up.
        **This is noted as a bug in the 'Bugs found' section further down.**
    - When light theme is active the light theme button is disabled.
        - When clicking on the dark theme button the theme is switched to dark mode.
    - When dark theme is active the dark theme button is disabled.
        - When clicking on the light theme button the theme is switched to light mode.

All of the above tests were done in the Google Chrome Device Toolbar on the following devices:

- iPad
- iPad Pro
- iPhone 6/7/8
- Galaxy S5

1. Make sure the game is responsive to the device.
2. Make sure that unnecessary text in the overlays disappears on phone devices.


## User testing
The user testing is based on the user stories from the README file.

**I want to play a game...**

1. **..that is fun.**
    - Memory is a classic game that most of us know how to play. The confirmation of getting a matching pair
    makes this game both fun and enjoyable during playing.

2. **..that is easy to navigate through.**
    - Clear instructions on how to start the game with the large play icon and text right under it.
    - Large buttons with clear text that describes the buttons purposes before clicking them.
    - The design of the icons reflect the meaning behind their functions.

3. **..that doesn't require compeeting agianst the clock.**
    - The timer function only shows the time that has passed since starting the game.

4. **..that has a nice and clean design.**
    - The page layout has a good balance between the different features to highlight where the major focus
    is going to be, but also doesn't hide other functions to make it hard to find them.
    - Contrast between the text and background and with generous space between the different sections and 
    functions.
    - The color scheme is soft for the eyes to look at, with a minimum of color choises as not to overwhelm the player.

5. **..that doesn't play too loud and stressing audio effects on everything I click.**
    - The sound effects are chosen with the intention of not distracting the player too mutch during playing.
    - The volume is set on the sound effects to not be too loud when playing the game.
    - Sound effects are only added to the main events to the game such as:
        - The card is flipping
        - The card is matching
        - The game is finished
    - The jazzy background music is optional to use and can at any time be turned off. The music is added to
    this game to add an extra touch of relaxation while playing.

6. **..that I can see what my previous score was.**
    - When replaying the game you can se your previous time you finished the game in inside the menu section, 
    right under the timer.

7. **..that I can come back to and play to get my mind off something.**
    - This user storie can be referenced with the answears from point number 3-5.

8. **..that I can play to practise my memory skills.**
    - The images used for the memory cards are carefully chosen with a few colors each which makes them easy 
    to interpret and memorize while playing.

9. **..that I can play at night with a darker theme.**
    - With the theme buttons the player can choose what color scheme they want to use when playing the game.
    - The darker theme is more suitable for playing with in darker enviorments because the contrasts are not 
    as strong and thus not as strenuous for the eyes to look at.

## Bugs found during development
* **Fixed!** The cards wouldn't shuffle when playing the game. Solved the problem by going back and change 
the cards variable code from jQuery to javascript code. The problem must have been caused by 
a misunderstanding from my side in the code I wrote and was therefor not written correct to work as I wanted it to.
* **Fixed!** When you clicked too quick on the next card the card flip audio would sometimes not play. 
Probably because the sound wasn't done playing the first time clicking the card.
I solved it by putting the flip card sound to a current time of 0 when a card is clicked. This made it possible to
play the audio quickly after it's first been executed.
The code that guided me solve this bug was found [here](https://stackoverflow.com/questions/1933969/sound-effects-in-javascript-html5).
* **Fixed!** The ClearInterval function was not working to stop timer when game is finished. 
I Decided to start from scratch and make a new timer with cleaner code to hopefully get a better understanding of 
my mistake and make it work properly.
The code that guided me to rebuild my timer was found [here](https://www.youtube.com/watch?v=_a4XCarxwr8).
* **Fixed!** When testing the game on my iPhone the memory cards wouldn't turn properly when clicking on them. 
This seemed to look fine when I tried the game out in device toolbar in my Chrome browser. 
The feature of flipping the cards did not seem to be supported by Safari browsers so I solved this problem by 
adding a webkit attribute in my css code for the backface visibility.
The code that guided me to solve this bug was found [here](https://stackoverflow.com/questions/42744573/backface-visibility-not-working-in-safari/45145977).

## Bugs found while testing manually
* **Fixed!** When matching a pair right after a previous match, the match sound effect would not fire a second time. This 
was solved by putting the match sound effect to a current time of 0 when being executed.
* **Fixed!** When a player finished the game in dark mode and wants to replay by clicking on the
replay button, the game would go back to its initial state with the light theme. This was fixed by simply add
local storage to the themes to make the browser remember which theme was used before getting refreshed or
the replay icon is clicked.
* **Not fixed yet!** When the game has been started and the question mark icon is clicked and modal pops up, the timer does not stop.
This function of stopping the timer when modal is showing does not exist in this version of the game due to lack
of time to develop it. This is added to the 'Features left to implement' section in the README file.
To inform the player I've added text about this in the modal itself.
* **Not fixed yet!** When playing the game on my iPhone I noticed that the sound effects where not always playing
or was playing with a delay. I'm guessing this has something to do with the audio code not being supported in
Safari browsers. A solution for this bug is not yet found.
* **Not fixed yet!** When the background music is finished playing you have to double click on the speaker icon
to play the music again. I thought this would be an easy bug to solve by using the currentTime set to 0 for the
background audio. However this did not work out as I was hoping and despite trying to google for more answears
I could not find a solution for this bug.
