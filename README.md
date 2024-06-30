# A-MAZE: Adventure 2D Game

**Table of Contents:**
- [Adventure 2D Game on Website](#adventure-2d-game-on-website)
  - [Introduction](#introduction)
  - [Part 1: How to play the game](#part-1-how-to-play)
  - [Part 2: Feature](#part-1-feature)
    - [Interactive 2D maze adventure game](#interactive-adventure-game)
    - [welcome Hompage](#welcome-homepage)
    - [User authentication (Sign-up and login pages)](#user-authentication)
    - [Settings page for key configurations](#settings-page)
    - [Dynamic background images](#dynamic-background)
    - [Router setup for seamless navigation](#router-setup)


## Introdution

Authors: Massimo Diego Marsiglia && Thi Thanh Hang Truong

Project: University Project (private)

A-maze is an exciting 2D adventure game where players navigate through a maze filled with challenges and puzzles. The game right now includes a welcome homepage, sign-up and login pages, a settings page for key configuration, and more. This project is built using Vue.js and provides a fun and engaging experience for players.

Right now the game includes 2 Levels for the player to play.


## Part1: How to play the game

- The player first need to register (when not have an account) or login (when already have an account)

- After login or register succesfully, the player will be pushed to the homepage page, where he/she can read about A-maze or start to play the game (start Game Button)

- The player can choice the Key Setting by press 'Key Setting Button' or press 'p'

- The player now can run, shoot the monster and collect coins to get to the next level 

- There is an another guy names 'Kevin'. He is like a gate to the next level
    - However, the player does not know how many coins he needs to collect to get to the next level
    - The coin, monster, and also gun will be generated randomly , so he/she needs to find it by themself

- The player will loose the game when the character has the health score = 0

- The player will win the game when the character not being killed by monster, collects enough coins and meet 'Kevin'

## Part 2: Feature

### Interactive 2D maze adventure game
A-maze offers an engaging 2D maze adventure where players navigate through various levels filled with obstacles, puzzles, and hidden treasures. The game is designed to challenge players’ problem-solving skills and agility.

### Welcome Hompage
The welcome homepage is the first screen players see when they launch A-maze. It features an inviting design with a start button to initiate the game, options to sign up or log in, and links to other important sections like the settings page. The background of the homepage includes dynamic images to enhance the visual appeal.

### User Authentication
New players can create an account using the sign-up page. This page collects necessary information such as username, password, and email to register users securely.

Login Page
Returning players can log in using the login page. This page validates user credentials and provides access to their game progress and settings.

### Settings Page for Key Configuration
The settings page allows players to customize their key bindings for a personalized gaming experience. Players can map their preferred keys for movement, actions, and other game controls, making the gameplay more comfortable and intuitive.

### Dynamic Background Images
The game features dynamic background images that change depending on the level or screen the player is on. This adds a layer of visual diversity and enhances the overall gaming experience.

### Router Setup for Seamless Navigation
A-maze utilizes Vue Router for seamless navigation between different pages and components. This setup ensures smooth transitions and maintains the game state as players move between the homepage, game screen, settings page, and authentication pages.


