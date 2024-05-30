# Dungeon Adventure Game

Welcome to the Dungeon Adventure Game! This is a simple command-line game where you fight enemies, manage your health, and collect health potions. The game is built using Node.js and uses the `inquirer` library for user interaction and `chalk` for colorful console output.

## Features

- **Fight Enemies**: Battle various enemies with different health and attack capabilities.
- **Manage Health**: Keep track of your health and use health potions to heal.
- **Collect Health Potions**: Defeat enemies to find health potions and increase your survival chances.
- **Run Away**: If a battle gets too tough, you can choose to run away and save your life.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/getting-started/install) package manager

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/dungeon-adventure-game.git
   cd dungeon-adventure-game
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Make the script executable:
   ```sh
   chmod +x ./index.js
   ```

## Usage

To start the game, run the following command:

```sh
./index.js

Follow the prompts to play the game. You will be able to choose actions such as attacking enemies, drinking health potions, or running away.

How to Play
Start the Game: When you run the game, you will be welcomed to the dungeon.
Encounter Enemies: You will face random enemies with different health levels.
Player Actions:
Attack: Deal damage to the enemy. The enemy will also attack you in return.
Drink Health Potion: Heal yourself using a health potion, if available.
Run: Escape from the current battle and encounter a new enemy.
Defeat Enemies: Once you defeat an enemy, you have a chance to collect health potions.
Continue or Exit: After each battle, you can choose to continue fighting or exit the dungeon.
Game Over: The game ends if your health drops to zero or you choose to exit the dungeon.
Game Logic Overview
Initialization: Game variables are set, including player health, attack damage, and enemies.
Main Game Loop: The game runs in a loop where you encounter enemies and choose actions until you decide to exit or your health reaches zero.
Enemy Encounter: Each loop iteration presents a random enemy with a random health value.
Player Actions:
Attack: Calculate damage dealt to the enemy and damage received in retaliation.
Drink Health Potion: Heal the player if health potions are available.
Run: Escape the current encounter and continue to the next loop iteration.
Post-Battle: If an enemy is defeated, check for health potion drops. Allow the player to choose to continue or exit.
End of Game: Display a message thanking the player for playing and exit the game loop.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request. We welcome all contributions!

```
