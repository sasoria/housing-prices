import meow from "meow";
import app from "./index.js";

const cli = meow(
  `
  π Usage
    $ npx @sasoria/housing-prices <options> 

  π Options
    --location, -l  Housing location

  π Examples
    $ npx @sasoria/housing-prices --location sentrum
    SjΓΈgangen 4, Oslo
    π‘ kr 6 156 305
    ποΈ kr 2 950

    Dronningens gate 12, Oslo
    π‘ kr 7 586 342
    ποΈ kr 4 925

    Kongens gate 10C, Oslo
    π‘ kr 7 996 342
    ποΈ kr 5 322
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
