const chalk = require('chalk');

module.exports = client => {
    client.logger.info(chalk.yellow.bold(`Version: ${process.env.version} | Version Control: ${process.env.version_control}`))
    client.logger.info(chalk.red.bold(`OP-FW Interactions Launching`)) // I like to make my logs look nice.
    client.logger.info(chalk.green.bold(`OP-FW Interaction Bot is operational`))
}