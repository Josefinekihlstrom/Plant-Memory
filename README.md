# Plant Memory
## About
Plant Memory is a memory game for everyone to enjoy. 
With its clean and stylish design together with a soft colorscheme, the game invites to a harmonious gaming 
experience with a jazzy twist. This memory game does not require any competition ambitions in the player, 
this is simply a memory that creates peace and harmony in the person who visits the site to play. Grab a coup of tea
and sit down and enjoy the simple journey of this memory game.

## UX
### UX goals

### User stories
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
#### Features left to implement
- Add opportunity to change music during playing. It was in the original idea but due to lack of time of finding
songs that would match both together and to the games theme I decided to not go forward with that function. It would
be fun to add the function in the future.

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