#! /usr/bin/env node
import { initialize, proceed } from "./questions.js";
import chalk from "chalk";

// Game Variables
const enemies = ['Skeleton', 'Zombie', 'Warrior', 'Assassin'];
let maxEnemyHealth = 75;
let enemyAttackDamage = 25;

// Player Variables
let health = 100;
let attackDamage = 50;
let numHealthPotions = 3;
let healthPotionHealAmount = 30;
let healthPotionDropChance = 50; // percentage

let running = true;

const initApp = async () => {
    console.log(chalk.yellow('Welcome to the Dungeon!'));
    GAME:
    while (running) {
        console.log('-----------------------------------------');
        let enemyHealth = Math.floor(Math.random() * (maxEnemyHealth + 1));
        let enemy = enemies[Math.floor(Math.random() * enemies.length)];
        console.log(chalk.cyan(`\t# ${enemy} has appeared! #\n`));

        while (enemyHealth > 0) {
            console.log(chalk.green(`\tYour HP: ${health}`));
            console.log(chalk.red(`\t${enemy}'s HP: ${enemyHealth}\n`));

            const input = await initialize();

            if (input === 'Attack') {
                const damageDealt = Math.floor(Math.random() * (attackDamage + 1));
                const damageTaken = Math.floor(Math.random() * (enemyAttackDamage + 1));

                enemyHealth -= damageDealt;
                health -= damageTaken;

                console.log(chalk.gray(`\t> You strike the ${enemy} for ${damageDealt} damage.`));
                console.log(chalk.gray(`\t> You receive ${damageTaken} in retaliation!`));

                if (health < 1) {
                    console.log(chalk.red(`\t> You have taken too much damage, you are too weak to go on!`));
                    break;
                }
            } else if (input === 'Drink health potion') {
                if (numHealthPotions > 0) {
                    health += healthPotionHealAmount;
                    numHealthPotions--;

                    console.log(chalk.gray(`\t> You drink a health potion, healing yourself for ${healthPotionHealAmount}.`));
                    console.log(chalk.gray(`\t> You now have ${health} HP.`));
                    console.log(chalk.gray(`\t> You have ${numHealthPotions} health potions left.\n`));
                } else {
                    console.log(chalk.red(`\t> You have no health potions left! Defeat enemies for a chance to get one!\n`));
                }
            } else if (input === 'Run') {
                console.log(chalk.gray(`\tYou run away from the ${enemy}!`));
                continue GAME;
            } else {
                console.log(chalk.red(`\tInvalid command!`));
            }
        }

        if (health < 1) {
            console.log(chalk.red(`You limp out of the dungeon, weak from battle.`));
            break;
        }

        console.log('-----------------------------------------');
        console.log(chalk.green(`# ${enemy} was defeated! #`));
        console.log(chalk.green(`# You have ${health} HP left. #`));

        if (Math.floor(Math.random() * 101) > healthPotionDropChance) {
            numHealthPotions++;
            console.log(chalk.blue(`# The ${enemy} dropped a health potion! #`));
            console.log(chalk.blue(`# You now have ${numHealthPotions} health potion(s). #`));
            console.log('-----------------------------------------');

            const input = await proceed();
            while (!input) {
                console.log(chalk.red(`Invalid command!`));
            }

            if (input === 'Continue fighting') {
                console.log(chalk.gray(`You continue on your adventure!`));
            } else {
                console.log(chalk.gray(`You exit the dungeon, successful from your adventure!`));
                break;
            }
        }
    }

    console.log(chalk.yellow(`#######################`));
    console.log(chalk.yellow(`# THANKS FOR PLAYING! #`));
    console.log(chalk.yellow(`#######################`));
};

initApp();
