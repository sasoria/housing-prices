import meow from 'meow';
import app from './lib/index.js';

const cli = meow(`
  🚀 Usage
	  $ node cli.js <options> 

  🌎 Options
	  --location, -l  Housing location

  📚 Examples
    $ node cli.js --location 1.20061.20512
      🏡 4 500 000
      🏡 3 290 000
`, {
	importMeta: import.meta,
	flags: {
		location: {
			type: 'string',
			alias: 'l'
		}
	}
});


if(!cli.flags.location) {
  cli.showHelp();
};

app(cli.flags);
