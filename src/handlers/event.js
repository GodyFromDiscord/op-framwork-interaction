const fs = require('fs')

module.exports = (client) => {
  const events = fs.readdirSync(`./events/`)

  events.forEach(f => {
    const eventName = f.split(".")[0];
    
    const event = require(`../events/${f}`)
    
    client.on(eventName, event.bind(null, client))
  })
}