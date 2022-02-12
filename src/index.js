require("dotenv").config();
const { createLogger, format, transports } = require('winston');
const prettyConsoleFormat = require('./prettyconsole.js');
const chalk = require('chalk');
const axios = require('axios')

const logger = createLogger({
    level: 'silly',
    format: format.combine(
      format.timestamp({format: 'DD-MM-YY HH:mm:ss'}),
      format.colorize(),
      format.errors({ stack: true }),
      format.splat(),
      format.json(false),
      format.padLevels(),
      prettyConsoleFormat()
    ),
    transports: [
      new transports.Console(),
    ]
});

logger.info(chalk.yellow.bold(`Version: ${process.env.version} | Version Control: ${process.env.version_control}`))
logger.info(chalk.red.bold(`OP-FW Interactions Launching`)) // I like to make my logs look nice.
logger.info(chalk.green.bold(`Status: Active`))