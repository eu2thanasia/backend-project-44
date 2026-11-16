#!/usr/bin/env node

import readlineSync from "readline-sync";
import playGame from "../src/index.js";
import greeting from "../src/cli.js";
import calc from "../src/games/calc.js";

const name = greeting();

console.log(calc.rules);

playGame(calc, name, 3, readlineSync);
