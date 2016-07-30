const TeleBot = require('telebot');

const bot = new TeleBot({
  token: process.env.TOKEN,
  webhook: {
    url: process.env.URL,
    port: process.env.PORT
  }
});

bot.on('/me', function(msg) {
  const { first_name, last_name } = msg.from;
  const text = msg.text.replace('/me', '');

  if(text.length) {
    const reply = `${first_name} ${last_name}${text}`;

    return bot.sendMessage(msg.chat.id, reply);
  }
});

bot.connect();
