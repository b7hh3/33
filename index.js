const express = require("express");
const app = express();
 
app.listen(() => console.log("I'm Ready To Work..!"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Id system Project<h1><p>Made by : ' DCODE STUDIO ,</p>
  </body>`)
});
const fs = require("fs")
const mongoose = require("mongoose");
const Discord = require("discord.js")

const { Client, Intents, Collection } = require('discord.js');
const client = new Discord.Client({
    allowedMentions: { parse: ['users', 'roles'], repliedUser: true },
  //  ws: { properties: { $browser: 'Discord iOS' } },
    messageCacheMaxSize: 999999,
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_MEMBERS, 
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_WEBHOOKS,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    ]
});
 
const { MessageEmbed, Permissions, MessageAttachment, MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js'); 
const { SlashCommandBuilder } = require('@discordjs/builders');

const DiscordModal = require('discord-modal')
DiscordModal(client)
const db = require('pro.db')
const qdb = require("quick.db")
const ms = require("ms")

const { MongoClient, ServerApiVersion } = require('mongodb');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const uri = "mongodb+srv://fss2:faris1@cluster0.nhyfa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri).then(() => console.log("Database connected"))
module.exports.client = client;
/*const wID = data.get(`Webhook_${message.guild.id}`).id
  const wToken = data.get(`Webhook_${message.guild.id}`).token
  
  const wc = new Discord.WebhookClient(wID, wToken)
  wc.send({
      content: message.content,
      username: message.author.username,
      avatarURL: message.author.avatarURL()
  });
      } 
      
      else {
  message.channel.createWebhook(message.author.username, {
      avatar: message.author.avatarURL(),
  }).then(async wb => {
    wb.send(message.content)
    data.set(`Webhook_${message.guild.id}`, {id: wb.id, token: wb.token})
  })
      }*\
/*
const { Database } = "quickmongo";
const db = new Database(uri);
 
db.on("ready", () => {
    console.log("Connected to the database");
    
});
 db.connect(); */
const { lineReply, lineReplyNoMention } = require("discord-reply")
const prefix = '-'

require('./eventsLoader').run(client, __dirname);

client.on("ready", async() => {
  const ac = db.get(`activity`)
 const ac1 = db.get(`activity-type`)
if(!ac || !ac1) return;
if(ac1 == " بوت بنك"){"DCODE STUDIO"
client.user.setActivity(`Streamer`, { type: `${ac1}`, url: `https://www.twitch.tv/${ac}`})
  return;
}
client.user.setActivity(`${db.get(`activity`)}`, { type: `${db.get(`activity-type`)}`})
})

  client.on('ready', async() => {
 
 
    
    console.log(`|≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠|`);
    console.log(
        `|≠ CLIENT NAME : [ ${client.user.username} ]                  ≠|`
    );
    console.log(
        `|≠ CLIENT TAG : [ ${
            client.user.discriminator
        } ]                          ≠|`
    );
    console.log(`|≠ CLIENT ID : [ ${client.user.id} ]             ≠|`);
    console.log(
        `|≠ CLIENT SERVERS COUNT : [ ${
            client.guilds.cache.size
        } ]                   ≠|`
    );
    console.log(
        `|≠ CLIENT CHANNELS COUNT : [ ${
            client.channels.cache.size
        } ]                ≠|`
    );
    console.log(
        `|≠ CLIENT USERS COUNT : [ ${
            client.users.cache.size
        } ]                    ≠|`
    );
    console.log(`|≠ CLIENT PING : [ ${client.ws.ping} ] XD                        ≠|`
    );
    console.log(
        `|≠ CLIENT CREATED AT : [ ${client.user.createdAt.toLocaleString()} ]  ≠|`
    );
    console.log(`|≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠|`);
}); 
const r = require("./schema/replys.js")
client.on("messageCreate", async message => {
  if(message.author.bot)return;
  const reply = await r.findOne({guildID:message.guild.id,word:message.content})
  if(reply){
if(message.content.startsWith(reply.word)){
if(message.channel.id !== reply.channelID)return;
if(message.member.roles.cache.has(reply.roleID)){
  let array = []
  reply.replys.map((value, index) => {
 array.push(value)
  })
  const randomMessage = array[Math.floor(Math.random() * array.length)];

message.reply({content: `${randomMessage}`})
  }
}
  }
})

client.on('messageCreate', async message => {
    if(message.content.startsWith(prefix + "help")){
        const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('select')
                .setPlaceholder('هنا الااوامر يا حلو')
                .addOptions([
                    {
                        label: 'اوامر عامه',
                        description: 'اضغط هنا لرؤيه الاوامر العامه',
                        value: 'general_commands',
                 emoji:'972247269296447568'    
                    },
                    {
                        label: 'اوامر التفعيل',
                        description: 'اضغط هنا لرؤيه اوامر التفعيل',
                        value: 'admin_commands',
          emoji:'972246067137638400'
                    },
                  {
                        label: 'اوامر الحقيبة',
                        description: 'اضغط هنا لرؤيه اوامر الحقيبة',
                        value: 'bag_commands',
                 emoji:'987883213747814461'    
                    },
{
                        label: 'اوامر البنك',
                        description: 'اضغط هنا لرؤيه اوامر البنك',
                        value: 'bank_commands',
                 emoji:'987883146789933167'    
                    },
                  {
                        label: 'اوامر الرواتب',
                        description: 'اضغط هنا لرؤيه اوامر الرواتب',
                        value: 'salarys_commands',
                      emoji:'991037727011135498'
                    },

{
                        label: 'اوامر الردود',
                        description: 'اضغط هنا لرؤيه اوامر الردود',
                        value: 'replys_commands',
                 emoji:'987883043106730024'    
                    },
{
                        label: 'اوامر القيف اواي',
                        description: 'اضغط هنا لرؤيه اوامر القيف اواي',
                        value: 'giveaways_commands',
                 emoji:'996886008723427390'    
                    },
                  {
                        label: 'اوامر اللوق',
                        description: 'اضغط هنا لرؤيه اوامر اللوق',
                        value: 'logs_commands',
                 emoji:'992293439473471649'    
                    },
                    {
                        label: 'اوامر الاونر',
                        description: 'اضغط هنا لرؤيه اوامر الاونر',
                        value: 'owner_commands',
                      emoji:'972245995943526491'
                    },
            
                ]),

                
        );

      const embed = new MessageEmbed()
      .setAuthor(message.guild.name,message.guild.iconURL({dynamic:true}))
.setTitle("**See the commands below, set up your server now**")
.setDescription(`**() اختياري [] اجباري**`)
.setThumbnail(client.user.displayAvatarURL({dynamic:true}))
.setFooter(`- Requested By: ${message.author.username}`, message.author.displayAvatarURL({dynamic:true}))
.setColor(message.guild.me.roles.highest.hexColor)
        await message.reply({ embeds:[embed], components: [row] })

    }
})



client.on('interactionCreate', async interaction => {
	if (!interaction.isSelectMenu()) return;

	if (interaction.customId === 'select') {
        const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('select')
                .setPlaceholder('Click to view Help Menu')
                .addOptions([
                    {
                        label: 'اوامر عامه',
                        description: 'اضغط هنا لرؤيه الاوامر العامه',
                        value: 'general_commands',
                      emoji:'972247269296447568'
                    },
                    {
                        label: 'اوامر التفعيل',
                        description: 'اضغط هنا لرؤيه اوامر التفعيل',
                        value: 'admin_commands',
                      emoji:'972246067137638400'
                    },
                  {
                        label: 'اوامر الحقيبة',
                        description: 'اضغط هنا لرؤيه اوامر الحقيبة',
                        value: 'bag_commands',
                 emoji:'987883213747814461'    
                    },
{
                        label: 'اوامر البنك',
                        description: 'اضغط هنا لرؤيه اوامر البنك',
                        value: 'bank_commands',
                 emoji:'987883146789933167'    
                    },
                  {
                        label: 'اوامر الرواتب',
                        description: 'اضغط هنا لرؤيه اوامر الرواتب',
                        value: 'salarys_commands',
                      emoji:'991037727011135498'
                    },

{
                        label: 'اوامر الردود',
                        description: 'اضغط هنا لرؤيه اوامر الردود',
                        value: 'replys_commands',
                 emoji:'987883043106730024'    
                    },
{
                        label: 'اوامر القيف اواي',
                        description: 'اضغط هنا لرؤيه اوامر القيف اواي',
                        value: 'giveaways_commands',
                 emoji:'996886008723427390'    
                    },
                  {
                        label: 'اوامر اللوق',
                        description: 'اضغط هنا لرؤيه اوامر اللوق',
                        value: 'logs_commands',
                 emoji:'992293439473471649'    
                    },
                    {
                        label: 'اوامر الاونر',
                        description: 'اضغط هنا لرؤيه اوامر الاونر',
                        value: 'owner_commands',
emoji:'972245995943526491'

                    },



                ]),

                
        );
       
        let type = interaction.values[0]
        
        if(type == "general_commands") {
let embed = new MessageEmbed()
      .setAuthor(interaction.guild.name,interaction.guild.iconURL({dynamic:true}))
.addField(`**${prefix}ping**`,`**عرض بنق البوت**`)
.addField(`**${prefix}info**`,`**عرض معلومات البوت**`)
.addField(`**${prefix}user [user]**`,`**عرض معلومات الشخص**`)
.addField(`**${prefix}role [role]**`,`**عرض معلومات الرول**`)
.addField(`**${prefix}channel [channel]**`,`**عرض معلومات الشات**`)
.addField(`**${prefix}server**`,`**عرض معلومات السيرفر**`)
//.addField(`**${prefix}**`,`****`)
.setThumbnail(client.user.displayAvatarURL({dynamic:true}))
.setFooter(`- Requested By: ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic:true}))
.setColor(interaction.guild.me.roles.highest.hexColor)
            await interaction.update({ embeds:[embed], components: [row] });
        } else  if(type == "admin_commands") {
            let embed = new MessageEmbed()
      .setAuthor(interaction.guild.name,interaction.guild.iconURL({dynamic:true}))
.addField(`**${prefix}set-role-add [roles]**`,`**تحديد الرولات المضافة للتفعيل**`)
.addField(`**${prefix}set-role-remove [roles]**`,`**تحديد الرولات المسحوبه للتفعيل**`)
.addField(`**${prefix}تفعيل [user] [ID Psn]**`,`**تفعيل العضو**`)

//.addField(`**${prefix}**`,`****`)
.setThumbnail(client.user.displayAvatarURL({dynamic:true}))
.setFooter(`- Requested By: ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic:true}))
.setColor(interaction.guild.me.roles.highest.hexColor)
            await interaction.update({ embeds:[embed], components: [row] });
        } else  if(type == "giveaways_commands") {
            let embed = new MessageEmbed()
      .setAuthor(interaction.guild.name,interaction.guild.iconURL({dynamic:true}))
.addField(`**${prefix}start [time] [winners] [prize]**`,`**بدء قيف اواي**`)
.addField(`**${prefix}reroll [ID]**`,`**تغيير الفائز**`)
.addField(`**${prefix}list**`,`**عرض القيف اواي الحاليه**`)
.addField(`**${prefix}end [ID]**`,`**إنهاء قيف اواي**`)
.addField(`**${prefix}emoji [emoji]**`,`**تعيين ايموجي للقيف اواي**`)
.addField(`**${prefix}banner [banner]**`,`**تعيين بنر للقيف اواي**`)
.setThumbnail(client.user.displayAvatarURL({dynamic:true}))
.setFooter(`- Requested By: ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic:true}))
.setColor(interaction.guild.me.roles.highest.hexColor)
            await interaction.update({ embeds:[embed], components: [row] });
        }  else  if(type == "owner_commands") {
            let embed = new MessageEmbed()
      .setAuthor(interaction.guild.name,interaction.guild.iconURL({dynamic:true}))
.addField(`**${prefix}set-name [name]**`,`**تغيير اسم البوت**`)
.addField(`**${prefix}set-avatar [link/image]**`,`**تغيير صورة البوت**`)
.addField(`**${prefix}set-activity [text]**`,`**تغيير نشاط البوت**`)

//.addField(`**${prefix}**`,`****`)
.setThumbnail(client.user.displayAvatarURL({dynamic:true}))
.setFooter(`- Requested By: ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic:true}))
.setColor(interaction.guild.me.roles.highest.hexColor)
            await interaction.update({ embeds:[embed], components: [row] });
        }else  if(type == "salarys_commands") {
            let embed = new MessageEmbed()
      .setAuthor(interaction.guild.name,interaction.guild.iconURL({dynamic:true}))
.addField(`**${prefix}add-salarys **`,`**توزيع رواتب الموظفين**`)
.addField(`**${prefix}create-salary [role] [salary]**`,`**انشاء راتب جديد**`)
.addField(`**${prefix}delete-salary [role]**`,`**حذف الراتب**`)
.addField(`**${prefix}reset-salarys**`,`**تصفير الرواتب**`)
.addField(`**${prefix}salarys**`,`**عرض الرواتب**`)
.setThumbnail(client.user.displayAvatarURL({dynamic:true}))
.setFooter(`- Requested By: ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic:true}))
.setColor(interaction.guild.me.roles.highest.hexColor)
            await interaction.update({ embeds:[embed], components: [row] });
        } else  if(type == "logs_commands") {
            let embed = new MessageEmbed()
      .setAuthor(interaction.guild.name,interaction.guild.iconURL({dynamic:true}))
.addField(`**${prefix}setlog-bank [channel]**`,`**تعيين لوق البنك**`)
.addField(`**${prefix}setlog-bag [channel]**`,`**تعيين لوق الحقائب**`)
.setThumbnail(client.user.displayAvatarURL({dynamic:true}))
.setFooter(`- Requested By: ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic:true}))
.setColor(interaction.guild.me.roles.highest.hexColor)
            await interaction.update({ embeds:[embed], components: [row] });
        } else if(type == "bag_commands") {
            let embed = new MessageEmbed()
      .setAuthor(interaction.guild.name,interaction.guild.iconURL({dynamic:true}))
.addField(`**${prefix}add-store [price] [item]**`,`**إضافة منتج**`)
.addField(`**${prefix}delete-store [item]**`,`**إزالة منتج**`)
.addField(`**${prefix}reset-store **`,`**حذف كل المنتجات**`)
.addField(`**${prefix}store**`,`**عرض المنتجات**`)
.addField(`**${prefix}add-item [user] (amount) [item]**`,`**إضافة منتج لعضو**`)
.addField(`**${prefix}delete-item [user] (amount)**`,`**إزالة منتج من عضو**`)
.addField(`**${prefix}reset-item [user]**`,`*حذف كل المنتجات من عضو***`)
.addField(`**${prefix}inventory**`,`**عرض منتجات العضو**`)
.addField(`**${prefix}give-item [user] (amount) [item]**`,`**يعطي العضو منتج للعضو الثاني من حقيبته**`)
.addField(`**${prefix}buy (amount) [item]**`,`**شراء منتج من الاستور**`)
.addField(`**${prefix}use (amount) [item]**`,`**استخدام منتج من حقيبتك**`)
.setThumbnail(client.user.displayAvatarURL({dynamic:true}))
.setFooter(`- Requested By: ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic:true}))
.setColor(interaction.guild.me.roles.highest.hexColor)
            await interaction.update({ embeds:[embed], components: [row] });
} else  if(type == "bank_commands") {
            let embed = new MessageEmbed()
      .setAuthor(interaction.guild.name,interaction.guild.iconURL({dynamic:true}))
.addField(`**${prefix}add-money [user] [amount]**`,`**زيادة فلوس لعضو**`)
.addField(`**${prefix}remove-money [user] [amount]**`,`**سحب فلوس من العضو **`)
.addField(`**${prefix}reset-money [user] **`,`**سحب كل الفلوس من عض **`)
.addField(`**${prefix}top**`,`**اعلى الاعضاء فلوس**`)
.addField(`**${prefix}تحويل [user] [amount]**`,`**تحويل فلوس لعضو آخر**`)
.addField(`**${prefix}سحب [amount]**`,`** سحب فلوس من البنك**`)
.addField(`**${prefix}ايداع [amount]**`,`**ايداع فلوس للبنك**`)
.addField(`**${prefix}فلوس [user]**`,`**عرض فلوس العضو**`)
.addField(`**${prefix}فلوسي**`,`**عرض فلوسي**`)
.setThumbnail(client.user.displayAvatarURL({dynamic:true}))
.setFooter(`- Requested By: ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic:true}))
.setColor(interaction.guild.me.roles.highest.hexColor)
            await interaction.update({ embeds:[embed], components: [row] });
} else  if(type == "replys_commands") {
            let embed = new MessageEmbed()
      .setAuthor(interaction.guild.name,interaction.guild.iconURL({dynamic:true}))
.addField(`**${prefix}create-word [role] [channel] [word]**`,`**انشاء كلمة للردود**`)
.addField(`**${prefix}delete-word [ID]**`,`**حذف كلمة و ردودها**`)
.addField(`**${prefix}reset-word**`,`**حذف جميع الكلمات و ردودها**`)
.addField(`**${prefix}add-reply [ID] [reply]**`,`**إضافة رد جديد**`)
.addField(`**${prefix}delete-reply [ID] [reply]**`,`**إزالة رد**`)
.addField(`**${prefix}reset-reply [ID]**`,`**حذف جميع ردود الكلمة**`)
.addField(`**${prefix}replys**`,`**عرض الردود و الكلمات**`)
.setThumbnail(client.user.displayAvatarURL({dynamic:true}))
.setFooter(`- Requested By: ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic:true}))
.setColor(interaction.guild.me.roles.highest.hexColor)
            await interaction.update({ embeds:[embed], components: [row] });
}
		
	}
});


  
client.on("interactionCreate", async interaction => {
  if (!interaction.isSelectMenu()) return;
let type = interaction.values[0]

  if(interaction.customId == "activity"){

    if(type == "playing"){
      
db.set(`activity-type`,"PLAYING")
      client.user.setActivity(`${db.get(`activity`)}`, { type: "PLAYING" })

      const embed = new MessageEmbed()
      .setAuthor(interaction.guild.name,interaction.guild.iconURL({dynamic:true}))
.setTitle("**The bot activity has been successfully changed**")
.setThumbnail(client.user.displayAvatarURL({dynamic:true}))
.setFooter(`- Requested By: ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic:true}))
.setColor("GREEN")

 interaction.update({embeds:[embed], components:[]})
} else if(type == "streaming"){
      
db.set(`activity-type`,"STREAMING")
      client.user.setActivity(`${db.get(`activity`)}`, { type: "STREAMING", url: `https://www.twitch.tv/${db.get(`activity`)}` })

      const embed = new MessageEmbed()
      .setAuthor(interaction.guild.name,interaction.guild.iconURL({dynamic:true}))
.setTitle("**The bot activity has been successfully changed**")
.setThumbnail(client.user.displayAvatarURL({dynamic:true}))
.setFooter(`- Requested By: ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic:true}))
.setColor("GREEN")

 interaction.update({embeds:[embed], components:[]})
} else if(type == "listening"){
      
db.set(`activity-type`,"LISTENING")
      client.user.setActivity(`${db.get(`activity`)}`, { type: "LISTENING" })

      const embed = new MessageEmbed()
      .setAuthor(interaction.guild.name,interaction.guild.iconURL({dynamic:true}))
.setTitle("**The bot activity has been successfully changed**")
.setThumbnail(client.user.displayAvatarURL({dynamic:true}))
.setFooter(`- Requested By: ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic:true}))
.setColor("GREEN")

 interaction.update({embeds:[embed], components:[]})
} else if(type == "watching"){
      
db.set(`activity-type`,"WATCHING")
      client.user.setActivity(`${db.get(`activity`)}`, { type: "WATCHING" })

      const embed = new MessageEmbed()
      .setAuthor(interaction.guild.name,interaction.guild.iconURL({dynamic:true}))
.setTitle("**The bot activity has been successfully changed**")
.setThumbnail(client.user.displayAvatarURL({dynamic:true}))
.setFooter(`- Requested By: ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic:true}))
.setColor("GREEN")

 interaction.update({embeds:[embed], components:[]})
} else if(type == "competing"){
  db.set(`activity-type`,"COMPETING")
      client.user.setActivity(`${db.get(`activity`)}`, { type: "COMPETING" })

      const embed = new MessageEmbed()
      .setAuthor(interaction.guild.name,interaction.guild.iconURL({dynamic:true}))
.setTitle("**The bot activity has been successfully changed**")
.setThumbnail(client.user.displayAvatarURL({dynamic:true}))
.setFooter(`- Requested By: ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic:true}))
.setColor("GREEN")

 interaction.update({embeds:[embed], components:[]})
}
}
})


client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

client.on('ready', () => {
	console.log('Ready!');
});

client.on('messageCreate', async messageCreate => {
const message = messageCreate;
  if (!messageCreate.content.startsWith(prefix) || messageCreate.author.bot) return;

	const args = messageCreate.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && messageCreate.channel.type === 'dm') {
		return messageCreate.reply({content:'**فقط في السيرفر!**'});
	}

	if (command.permissions) {
		const authorPerms = messageCreate.channel.permissionsFor(messageCreate.author);
		if (!authorPerms || !authorPerms.has(command.permissions)) {
			return messageCreate.reply({content:'**ليس لديك الصلاحيه لأستخدام الامر**'});
		}
	}

if(command.returnrole){
  
  const role1 = messageCreate.guild.roles.cache.find(role1 => role1.id === command.returnrole)

  if(!messageCreate.member.roles.cache.has(role1.id))
    return messageCreate.reply({content:'**ليس لديك الرول لأستخدام الامر**'});
  
}
  
	const { cooldowns } = client;

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(messageCreate.author.id)) {
		const expirationTime = timestamps.get(messageCreate.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return messageCreate.reply({content:`انتظر ${timeLeft.toFixed(1)} ثانيه لأستخدام `});
		}
	}

	timestamps.set(messageCreate.author.id, now);
	setTimeout(() => timestamps.delete(messageCreate.author.id), cooldownAmount);

	try {
		command.execute(client, message, prefix, db);
	} catch (error) {
		console.error(error);
		messageCreate.reply({content:'there was an error trying to execute that command!'});
	}
});
  
 client.login(process.env.token)