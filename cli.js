import meow from "meow";
import app from "./index.js";

const cli = meow(
  `
  🚀 Usage
    $ node --experimental-json-modules cli.js <options> 

  🌎 Options
    --location, -l  Housing location

  📚 Examples
    $ node --experimental-json-modules cli.js --location Sentrum
    🏡 kr 3 290 000
    🏡 kr 4 500 000
`,
  {
    importMeta: import.meta,
    flags: {
      location: {
        type: "string",
        alias: "l",
      },
    },
  }
);

if (!cli.flags.location) {
  cli.showHelp();
}

app(cli.flags);
