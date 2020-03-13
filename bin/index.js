#!/usr/bin/env node
const path = require("path");
const fs = require("fs");
const program = require("commander");
const inquirer = require("inquirer");

program.version("1.0.0").usage("<init>");

program.arguments("<init> [env]").action(function(cmd, env) {
  cmdValue = cmd;
  envValue = env;
  var questions = [
    {
      type: "input",
      name: "first_name",
      message: "What's your first name"
    }
  ];
  inquirer.prompt(questions).then(answers => {
    console.log(JSON.stringify(answers, null, "  "));
  });
});

program.parse(process.argv);

if (!program.args.length) {
  program.help();
}
