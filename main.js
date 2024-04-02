#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.green.bold("\n\t Welcome to To-do List Application:\n"));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.red("Enter your New Task:"),
        }
    ]);
    todoList.push(addTask.task);
    console.log(chalk.yellow(addTask.task) + " :Task added in todo List Successfully ");
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.red("Do you want to add more task ?"),
            default: "false"
        }
    ]);
    conditions = addMoreTask.addmore;
}
console.log(chalk.yellow("Your updated todo list"), todoList);
