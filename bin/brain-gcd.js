#!/usr/bin/env node

import readlineSync from "readline-sync";
import playGame from "../src/index.js";
import greeting from "../src/cli.js";
import gcd from "../src/games/gcd.js";

const name = greeting();

console.log(gcd.rules);

playGame(gcd, name, 3, readlineSync);
