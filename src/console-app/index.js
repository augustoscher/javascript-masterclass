const prompt = require("prompt-sync")({ sigint: true });

const name = prompt("User name: ");
console.log(`Hey there ${name}`);
