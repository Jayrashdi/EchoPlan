#! /use/bin/env mode

import inquirer from 'inquirer';
import chalk from 'chalk';

let todos = [];
let condition = true;

while (condition) {
    const todosQuestions = await inquirer.prompt([
        {
            name: 'task',
            type: 'input',
            message: chalk.blue('What Would You Like To Add In Your Todos?')
        },
        {
            name: 'addMore',
            type: 'confirm',
            message: chalk.green('Would You Like To Add More Todos?'),
            default: true
        }
    ]);

    todos.push(todosQuestions.task);
    console.log(chalk.yellow('Current Todos:'), todos);

    condition = todosQuestions.addMore;
}