#!/usr/bin/env node

import readlineSync from "readline-sync";
import playGame from "../src/index.js";
import greeting from "../src/cli.js";
import even from "../src/games/even.js";

const name = greeting();

playGame(even, name, 3, readlineSync);
