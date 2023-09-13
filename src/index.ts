import * as fs from 'fs';
import * as readline from 'readline';

const date = 0;

let inputArray = [];

async function processLineByLine() {
  try {
    const fileStream = fs.createReadStream(`./src/${date}/input.txt`);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    for await (const line of rl) {
      // Each line in input.txt will be successively available here as `line`.
      inputArray.push(line);
    }
  } catch (e) {
    console.log('input file is missing in folder : ' + date);
  }
}

processLineByLine();

const modulePath = `./${date}/solve.ts`;

async function importModule(input) {
  try {
    const { solve } = await import(modulePath);
    const result = solve(input);
    console.log(`Result : ${result}`);
    console.log(`Day : ${date}`);
  } catch (e) {
    console.log('solve file is missing in folder : ' + date);
  }
}

importModule(inputArray);
