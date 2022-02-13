require("dotenv").config();
const { createLogger, format, transports } = require('winston');
const prettyConsoleFormat = require('./prettyconsole.js');
const chalk = require('chalk');
const Eris = require('eris');

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

const client = new Eris(`${process.env.client_token}`, {
  compress: true,
  allowedMentions: { everyone: false, roles: true, users: true },
  defaultImageFormat: "png",
  defaultImageSize: 1024,
  autoreconnect: true,
  restMode: true,

  intents: [
    "guilds",
    "guildMessages",
    "guildVoiceStates",
    "directMessages",
    "guildMembers",
    "guildBans",
    "guildEmojis",
    "guildInvites",
    "guildChannels",
  ]
})

client.commands = new Eris.Collection();
client.aliases = new Eris.Collection();
client.logger = logger;

["command", "event"].forEach(handler => {
  require(`./handlers/${handler}`)(client)
});

client.connect();