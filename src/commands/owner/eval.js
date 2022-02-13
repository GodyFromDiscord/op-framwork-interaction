const util = require('util');

module.exports.run = async ({ client, message, args }) => {
  const ids = [
    '268476229479301120'
  ];

  if (!ids.includes(message.author.id)) return message.channel.createMessage(`${message.author.mention}, are you Gody?`);

  try {
    const words = ['secret', 'token', 'process.env', 'config.json'];
    const toEval = args.join(' ');

    let evaluated = util.inspect(eval(toEval, { depth: 0 }));

    if (evaluated && evaluated.length > 1800) evaluated = evaluated.substring(0, 1800);

    if (!toEval) {
      return message.channel.createMessage('Error while evaluating: `air`');
    }
    const hrStart = process.hrtime();
    let hrDiff;
    hrDiff = process.hrtime(hrStart);

    for(const word of words){
      if(toEval.replace('\\', '').toLowerCase().includes(word)){
        return message.channel.createMessage({
          embed: {
            color: 0X9B0949,
            fields: [
              {
                name: ':inbox_tray: Input',
                value: `\`\`\`${toEval}\`\`\``,
                inline: false,
              },
              {
                name: ':outbox_tray: Output',
                value: `\`\`\`ASDFASIFASfTYwFAJSAVvG.YE_rbQ.NxVfAAbEIj6U8pHjFASFHAS_gasgGFMok, yeah nice try.\`\`\``,
                inline: false,
              },
              {
                name: ':alarm_clock: Executed in',
                value: `\`\`\`${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms\`\`\``,
                inline: false,
              },
            ],
          },
        })
      }
    }

    const emb = message.channel.createMessage({
      embed: {
        color: 0X9B0949,
        fields: [
          {
            name: ':inbox_tray: Input',
            value: `\`\`\`${toEval}\`\`\``,
            inline: false,
          },
          {
            name: ':outbox_tray: Output',
            value: `\`\`\`js\n${evaluated}\n\`\`\``,
            inline: false,
          },
          {
            name: ':alarm_clock: Executed in',
            value: `\`\`\`${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms\`\`\``,
            inline: false,
          },
        ],
      },
    });
  } catch (err) {
    return message.channel.createMessage(`Error while evaluating: \`${err.message}\``);
  }
};

module.exports.info = {
  name: 'eval',
  aliases: ['ev'],
  rateLimit: 0,
};