import meow from "meow";
import app from "./index.js";

const cli = meow(
  `
  🚀 Usage
    $ npx @sasoria/housing-prices <options> 

  🌎 Options
    --location, -l  Housing location

  📚 Examples
    $ npx @sasoria/housing-prices --location sentrum
    Sjøgangen 4, Oslo
    🏡 kr 6 156 305
    🏘️ kr 2 950

    Dronningens gate 12, Oslo
    🏡 kr 7 586 342
    🏘️ kr 4 925

    Kongens gate 10C, Oslo
    🏡 kr 7 996 342
    🏘️ kr 5 322
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
