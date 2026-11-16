#!/usr/bin/env node

import readlineSync from "readline-sync";
import playGame from "../src/index.js";
import greeting from "../src/cli.js";
import progression from "../src/games/progression.js";

const name = greeting();

console.log(progression.rules);

playGame(progression, name, 3, readlineSync);
