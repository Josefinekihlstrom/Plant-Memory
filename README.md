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
1. **Strategy plane** 
To offer a fun game experience that lets the player practise their memory skills.

2. **Scope plane** 
The maine feature is going to be the memory game itself alongside with some other features, such as 
a high score list with locally scored high scores, sound effects that indicate if you win or loose (with an option 
to turn the sounds completely off) and a pop up when the game is finished.

3. **Structure plane** 
A single page

4. **Skeleton plane**


5. **Surface plane**
- When I knew how I wanted the structure to be I turned to the internet to find free images to use for my game.
I ended up on [Freepic.com](https://www.freepik.com/free-vector/potted-plants-set_8271077.htm#page=1&query=plants&position=1)
where I found the pictures of the plants that I ended up using.
- After that I turned to [Coolors](https://coolors.co/) to find colors that would match the theme of the page.
I wanted to use a soft color scheme for the default theme and ended up with the following colors:
![Color Palette](/assets/images/coolors.png)
- The logo was then made with the technology of [Free Lodge Design](https://www.freelogodesign.org).
- The font that I decided to use throuought the project was [Amatic](https://fonts.google.com/specimen/Amatic+SC?query=amatic)

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
left column the logo and Menu/Information section with some other main key features are placed.

1. **The memory game column features**
    - When you first arrive to the page, the memory column where the memory cards are placed has an overlay
    which activates the player to press the play button when they want to start the game.
    - The overlay also contains information that encourages the player to start the background music that will be
    played when pressing the speaker icon in the menu section.
    - When pressing the overlay the overlay disappers and the timer starts counting. The game is started.
    - When clicking the different cards an audio is played to indicate that the card is flipped. When two cards
    match an encouraging sound effect plays.
    - When the player has matched all cards another overlay covers the memory column to indicate that the game
    is finished together with an audio playing.

2. **Menu/Information column**
    - The Menu/Information column includes a logo together with the name of the game and a container that includes a replay
    icon, a speaker icon, a questionmark icon, a moves counter, a timer, the last round time and two theme buttons.

3. **Replay, Speaker and Questionmark Icons**
    - When the replay icon is clicked the page reload. This allows the player to restart the game whenever it's
    needed.
    - When the speaker icon is clicked, the background music starts playing. If the background music is already playing you can
    click on the speaker icon again to stop the music.
    - When the questionmark icon is clicked a modal pops up with information about how to play the game. This modal can be closed
    in two ways, by clicking on the 'X' in the upper right corner, or clicking the 'Close' button on the bottom of the modal.

4. **Moves, Timer and Last Round**
    - The number next to the text 'Moves' indicates how many times the player has made a round of clicking two
    cards in the of the ongoing game round.
    - The timer let's the player know how much time has passed since starting the game. When the game is finished
    the timer is paused.
    - The timestamp next to the 'Last Round' text indicates the time that the player finished the game in the last round of 
    playing. This to encourage the player to try to beat that time in the ongoing round.

5. **Theme Buttons**
    - The two buttons represents a theme each. When the player visits the page the light theme is automatically
    showed which makes the 'Ligh Theme' button disabled.
    When the player click on the 'Dark Theme' button the css style for that theme is switched to. This makes the
    'Dark Theme' button disabled but not the 'Light Theme' button, this to indicate which theme is currently used.

#### Features left to implement
- **Add opportunity to change music during playing.** In the original idea the third icon in the Menu/Information column was
a 'step-forward' icon. This was suppose to include a feature to make it possible to change through different background
songs. However due to lack of time of finding the perfect songs to match the game and the page I decided to
leave this to hopefully add it in the future.
- **Pause button to pause the game while playing.** My mentor suggested that I would add a pause button for the player to be
able to pause the game while playing. This was something I tried to add to the timer function but without a working result,
I just simply couldn't get the function to pause the time as I wanted. So unfortunately I had to skip
that that idé.

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
* When testing the game on my iPhone the memory cards wouldn't turn properly when clicking on them. 
This seemed to look fine when I tried the game out in device toolbar in my Chrome browser. 
I solved this problem by adding a webkit attribute in my css code for the backface visibility.

### Deployment
This project was developed in Gitpod and then pushed to GitHub. To deploy the project the following steps were made:

1. Log in to [GitHub](https://github.com/) and go to my [GitHub profile](https://github.com/Josefinekihlstrom).
2. Select [Josefinekihlstrom/Plant-Memory](https://github.com/Josefinekihlstrom/Plant-Memory) from the repository list.
3. Select 'Settings' in the menu under the repository name.
4. Scroll down to 'GitHub Pages' section.
5. Under 'Source', select 'Master' in the dropdown menu.
6. Click 'Save' and the page will refresh.
7. Scroll back down to 'GitHub Pages' to get access to the link.

Go to the Plant Memory live website here: [Plant Memory](https://josefinekihlstrom.github.io/Plant-Memory/)

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
- Store last played round with help from [Ethan](https://codetheweb.blog/javascript-localstorage/)

#### Thank you

### Disclaimer
This website was created for educational use only.