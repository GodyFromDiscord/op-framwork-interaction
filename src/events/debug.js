module.exports = (client, message, id) => {
  client.logger.debug(`Debug Occured (Can most likely be ignored) - [SHARD ${id}] - ${message}`)
}