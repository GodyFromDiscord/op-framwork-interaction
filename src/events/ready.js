const chalk = require('chalk');

module.exports = client => {

    setInterval(() => {
        let status = [
            `!help | Watching the OP-FW API`,
            `Stop Metagaming | !help`,
            `Gody#4788 owns me`
          ];
          const index = Math.floor(Math.random() * (status.length - 1) + 1);

          client.editStatus(null, { name: `${status[index]}`, type: 3 })
    }, 60000);



    client.logger.info(chalk.yellow.bold(`Version: ${process.env.version} | Version Control: ${process.env.version_control}`))
    client.logger.info(chalk.red.bold(`OP-FW Interactions Launching`)) // I like to make my logs look nice.
    client.logger.info(chalk.green.bold(`OP-FW Interaction Bot is operational`))
}