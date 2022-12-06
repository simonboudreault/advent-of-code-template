import * as fs from 'fs';

const date = 1;

const input = fs.readFileSync(`./src/${date}/input.txt`, 'utf8');

const split = input.split('\r\n');

const modulePath = `./${date}/index.ts`;

async function importModule(input) {
  const {solve} = await import(modulePath);
  solve(input);
  console.log(`Day : ${date}`)
}

importModule(split);
