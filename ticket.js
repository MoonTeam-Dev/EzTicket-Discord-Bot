const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = "OTc5NDQ########################################";
const prefix = "!";

bot.on("ready", () => {
    bot.user.setActivity("TIcket", {type: 'LISTENING'})
    console.log('owo')
})


bot.on("message", async (message) => {
    const targetguild = bot.guilds.cache.get('976580118191411200')

    if(message.content.toLowerCase().startsWith(prefix + "ticket" + "")) {
        if(message.channel.id == "971728543228764220"){
            var messageContenttt = message.content;
            message.react('✅')
            message.delete({setTimeout: 50000 })

            var embed = new Discord.MessageEmbed()
            .setColor('060503')
            .setTitle('TICKET')
            .setDescription('ticket crated by :```js\n' + `(${message.author.tag} ||  ${messageContenttt.replace("!ticket" , "")}` + '```')
    
            const textChannel = bot.channels.cache.get('979492053882916904')
            .send(embed)
            console.log(`${message.author.tag}`)
            const channel = bot.channels.cache.get('979492053882916904')
            .send('<@&971728190550732841>')
            console.log('sended request...')

            var xd = new Discord.MessageEmbed()
            .setColor('060503')
            .setTitle('TICKET LOG')
            .setDescription('user :```js\n' + `${message.author.tag} || ${message.author.id}` + '```' + '\nticket :```js\n' + `${messageContenttt.replace("!ticket" , "")}` + '```')
            
            const logChannel = bot.channels.cache.get('971728434424324128')
            .send(xd)
            console.log(messageContenttt)
        }
    }
})

bot.on("message", async (message) => {
    const targetguild = bot.guilds.cache.get('976580118191411200')
    if(message.content.toLowerCase().startsWith(prefix + "setup")) {
        message.delete({setTimeout: 50000 })
      
        var embed = new Discord.MessageEmbed()
            .setColor('060503')
            .setAuthor('تیکت')
            .setTitle('ارسال درخواست 📤')
            .setDescription('```' + '\nمشکل خود را بنویسید در اولین فرست تیم پشتیبانی به مشکل شما رسیدگی خواهد کرد' + '\nدر صورت دریافت نکردن پشتیبانی به اونر سرور گذارش دهید تا با تیم پشتیبانی برخورد شود' + '\nدر صورت دادن تیکت نامربوت و الکی با خود شخص برخورد خواهد شد' + 'تمامی تیکت های شما بایگانی میشود' + '```' + '```\n' + 'دستور بات : !ticket مشکل خود' + '```')
            .setImage('لینک عکستو اینجا بزار')
        
            const Channel = bot.channels.cache.get('971728543228764220')
            .send(embed)
            console.log(embed)

    }

})

bot.login(TOKEN);
