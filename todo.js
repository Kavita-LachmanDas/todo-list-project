#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let ques = await inquirer.prompt([
        {
            name: "ist",
            type: "list",
            message: "Select Your Operation ",
            choices: ["ADD", "UPDATE", "VEIW", "DELETE", "EXIT"]
        }
    ]);
    //add element
    if (ques.ist == "ADD") {
        let quest = await inquirer.prompt([
            {
                name: "sec",
                type: "input",
                message: "Add Items In The List: ",
            }
        ]);
        todos.push(quest.sec);
        console.log(todos);
    }
    //update
    if (ques.ist == "UPDATE") {
        let updateee = await inquirer.prompt([
            {
                name: "update",
                type: "list",
                message: "update items from the list: ",
                choices: todos.map((item) => item)
            },
            {
                name: "up",
                type: "input",
                message: "Add Items In The List: ",
            }
        ]);
        let newtodo = todos.filter((val) => val !== updateee.update);
        todos = [...newtodo, updateee.up];
        console.log(todos);
    }
    //veiw
    if (ques.ist == "VEIW") {
        console.log("******TODO-LIST ITEMS******");
        console.log(todos);
    }
    //delete
    if (ques.ist == "DELETE") {
        let del = await inquirer.prompt([
            {
                name: "delete",
                type: "list",
                message: "select item to delete",
                choices: todos.map(item => item)
            },
        ]);
        let newtodo = todos.filter(val => val !== del.delete);
        todos = [...newtodo];
        console.log(todos);
    }
    //exit
    if (ques.ist == "EXIT") {
        console.log("              \n**************'EXIT'*****************\n        ");
        condition = false;
    }
}
