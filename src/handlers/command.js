const fs = require('fs');
const chalk = require('chalk');

module.exports = (client) => {
  let total = 0;
  fs.readdirSync('./commands/').forEach((dir) => {
    const jsfiles = fs.readdirSync(`./commands/${dir}/`).filter((f) => f.endsWith('.js'));

    if (jsfiles.length <= 0) console.log(`No commands to load in commands/${dir}!`);
    total += jsfiles.length;

    jsfiles.forEach((f) => {
      const props = require(`../commands/${dir}/${f}`);

      if(!props.info){
        console.log(`${f} is broken.`);
      } else {
        client.commands.set(props.info.name, props)
        props.info.aliases.forEach((alias) => client.aliases.set(alias, props));
      }

    })
  });

  client.logger.info(`${chalk.cyan.bold(`${total}`)} commands have been successfully loaded.`)
}