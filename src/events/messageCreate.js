module.exports = async function(client, message){
  if (message.author.bot) return;

  if (message.channel.type === 'dm') return;

  const prefix = "!"

  const args = message.content.slice(prefix.length).trim().split(' ');
  const cmd = args.shift().toLowerCase();

  if (!message.content.startsWith(prefix)) return;

  let command = client.commands.get(cmd) || client.aliases.get(cmd)

  if (!command) return;

  command.run({ client, message, args });
}