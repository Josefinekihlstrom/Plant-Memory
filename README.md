# Plant Memory
## About
Plant Memory is a memory game for everyone to enjoy. 
With its clean and stylish design together with a soft colorscheme, the game invites to a harmonious gaming 
experience with a jazzy twist. This memory game does not require any competition ambitions in the player, 
this is simply a memory that creates peace and harmony in the person who visits the site to play. Grab a coup of tea
and sit down and enjoy the simple journey of this memory game.

## UX
### UX goals
The UX goals is to provide the player with a clean and inviting design that will bring a harmonious feeling. 
With its simple design this memory game will be easy for everyone to navigate through without 
annoying effects and cluttered content.

### User stories
I want to play a game...

1. ..that is fun.
2. ..that is easy to navigate through.
3. ..that doesn't require any ambitions to complete the game in a certain amount of time.
4. ..that has a nice and clean design.
5. ..that doesn't play too loud and stressing audio effects on everything you click.
6. ..that I can come back to and see my old scores.
7. ..that I can come back to and play to get my mind off something. With a mindfulness aspect.
8. ..that I can play to practise my memory skills.
9. ..that I can play at night with a darker theme so as not to overwork my eyes.

### Design process
1. Strategy plane: To offer a fun game experience that lets the player practise their memory skills.
2. Scope plane: The maine feature is going to be the memory game itself alongside with some other features, such as 
a high score list with locally scored high scores, sound effects that indicate if you win or loose (with an option 
to turn the sounds completely off) and a pop up when the game is finished.
3. Structure plane: A single page
4. Skeleton plane:
5. Surface plane:

#### Wireframes
![wireframe1](/assets/wireframes/wireframe1.jpg)
Before starting the memory game.

![wireframe2](/assets/wireframes/wireframe2.jpg)
Overlook of all card images that will be used.

![wireframe3](/assets/wireframes/wireframe3.jpg)
When finishing the game.

![wireframe4](/assets/wireframes/wireframe4.jpg)
Before starting the memory game **dark mode**.

![wireframe5](/assets/wireframes/wireframe5.jpg)
Overlook of all card images that will be used **dark mode**.

![wireframe6](/assets/wireframes/wireframe6.jpg)
When finishing the game **dark mode**.


### Features
The game page is sectioned into two columns. In the right column the actual memory game is based and in the
left column the logo and high score section with some other main key features are placed.

1. **The memory game column features**
    - When you first arrive to the page, the memory column where the memory cards are placed has an overlay
    which activates the player to press the play button when they want to start the game.
    - The overlay also contains information that encourages the player to start the background that will be
    played when pressing the play button in the left column.
    - When pressing the overlay the overlay disappers and the timer starts counting. The game is started.
    - When clicking the different cards an audio is played to indicate that the card is flipped. When two cards
    match an encouraging sound effect plays.
    - When the player has matched all cards another overlay covers the memory column to indicate that the game
    is finished together with an audio playing.

2. **Left Column Features**
    - The left column includes a logo together with the name of the game and a container that includes a replay
    icon, an audio icon, a moves counter, a timer, the highest score and two buttons which lets the player
    choose a theme for the page.

3. **Replay and Audio Icons**
    - When the replay icon is clicked the page reload. This allows the player to restart the game whenever it's
    needed.

4. **Audio Icon**
    - When the audio icon is clicked a jazzy background music is starting to play. The player can at anytime press
    the audio icon again to pause the music if it's not wanted. The audio icon does however not stop the sound
    effects that plays when flipping cards, matching cards or winning the game.

5. **Moves, Timer and High Score**
    - The number next to the text 'Moves' indicates how many times the player has made a round of clicking two
    cards.
    - The timer let's the player know how much time has passed since starting the game. When the game is finished
    the timer is paused and shows the time the game was finished in.
    - The number next to the 'High Score' text indicates the highest score (Lowest amount of moves to finish the game) 
    that the player has got when playing the game. This feature is locally stored and will remain on the page
    everytime the player visits the page.

6. **Theme Buttons**
    - The two buttons represents a theme each. When the player visits the page the light theme is automatically
    showed which makes the 'Ligh Theme' button disabled.
    When the player click on the 'Dark Theme' button the css style for that theme is switched to. This makes the
    'Dark Theme' button disabled but not the 'Light Theme' button to indicate which theme is currently on.

#### Features left to implement
- Add opportunity to change music during playing. In the original idea there was a third icon in the container
to the left. This was suppose to include a feature to make it possible to change through different background
songs. However due to lack of time of finding the perfect songs to match the game and the page I decided to
leave this to hopefully add it in the future.

### Technologies used
#### Languages
- HTML5
- CSS
- Javascript

#### Libraries
- [Bootstrap](https://getbootstrap.com/) - mainly used for the responsive grid system byt styled accordingly to the theme of the website.
- [FontAwesome](https://fontawesome.com/) - all icons on the website.
- [Google Fonts](https://fonts.google.com/) - used for the "Roboto" and "Unica-One" fonts.
- [jQuery](https://jquery.com/) - was used for the built-in Javascript to work in Bootstrap.

#### Technologies
- [Free Lodge Design](https://www.freelogodesign.org)
- [Gitpod](https://www.gitpod.io/)
- [Github](https://github.com/)
- Google Chrome Developer Tool (built in the Google Chrome browser)
- Firefox Developer Tool (built in the Firefox browser)
- [Coolors](https://coolors.co/)
- [Figma](https://www.figma.com/)
- Microsoft Paint

### Testing
#### Manual testing
#### Bugs found
* The cards wouldn't shuffle. Solved the problem by changing the cards variable value to javascript instead of jquery. 
* Delay in sound effects, click sound also doesn't stop play when locked card is clicked. NOT SOLVED YET.
* clearInterval not working to stop timer when game is finished. 
Decided to start from scratch and make a new timer with cleaner code to hopefully get a better understanding of it
and make it work. New timer made with working clearInterval when game is finished.

### Deployment
#### Cloning this project

### Credits
#### Content
#### Media
- [Memory Images](https://www.freepik.com/free-vector/potted-plants-set_8271077.htm#page=1&query=plants&position=1)
- [Background Music](https://www.bensound.com/royalty-free-music)
- [Soundeffect when flipping the cards](https://www.soundjay.com/button/sounds/button-20.mp3)
- [Soundeffect when getting a match](https://freesound.org/people/dersuperanton/sounds/433646/)
- [Soundeffect when winning the game](https://freesound.org/people/Fupicat/sounds/521643/)

### Acknowledgements
#### Pages used to find information
- [W3C Schools](https://www.w3schools.com/)
- [Stack Overflow](https://stackoverflow.com/)
- [Youtube](https://youtube.com/)

#### Code
- Starting the game with help from [Stack Overflow](https://stackoverflow.com/questions/5299895/jquery-detecting-and-removing-an-element-clicked)
- Memory game structure with help from [freeCodeCamp.org](https://www.youtube.com/watch?v=ZniVgo8U7ek/)
- Play/pause the music function with help from [Invention Tricks](https://www.youtube.com/watch?v=wffK2OIt8u0)
- Timer function with help from [WEB CIFAR](https://www.youtube.com/watch?v=_a4XCarxwr8)
- Count moves with help from [Sandra Israel-Ovirih](https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript#toc-3-moves)
#### Thank you

### Disclaimer
This website was created for educational use only.