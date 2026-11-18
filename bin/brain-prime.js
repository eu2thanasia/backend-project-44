#!/usr/bin/env node

import readlineSync from "readline-sync";
import playGame from "../src/index.js";
import greeting from "../src/cli.js";
import prime from "../src/games/prime.js";

const name = greeting();

console.log(prime.rules);

playGame(prime, name, 3, readlineSync);
