#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const createColoredChoice = (text: string, color: keyof typeof chalk) => {
    return { name: (chalk as any)[color](text), value: text };
};

const initialize = async () => {
    const answer = await inquirer.prompt([
        {
            type: 'rawlist',
            name: 'action',
            message: chalk.yellow('What would you like to do?'),
            choices: [
                createColoredChoice('Attack', 'green'),
                createColoredChoice('Drink health potion', 'blue'),
                createColoredChoice('Run', 'red')
            ]
        }
    ]);
    return answer.action;
};

const proceed = async () => {
    const answer = await inquirer.prompt([
        {
            type: 'rawlist',
            name: 'action',
            message: chalk.yellow('What would you like to do now?'),
            choices: [
                createColoredChoice('Continue fighting', 'green'),
                createColoredChoice('Exit dungeon', 'red')
            ]
        }
    ]);
    return answer.action;
};

export { initialize, proceed };
