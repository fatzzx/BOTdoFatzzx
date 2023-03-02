const { SlashCommandBuilder } = require('discord.js');
const Discord = require("discord.js")

module.exports = {
  
	data: new SlashCommandBuilder()
		.setName('adachi')
		.setDescription('The detective who lives in inaba'),

    async execute(interaction){
		let usuario = interaction.options.getUser('usuário');
        let imagem = "https://pbs.twimg.com/media/EbPnzPoXsAUD4N_.png"

        let embed = new Discord.EmbedBuilder()
            .setDescription(`**The detective who lives in Inaba**`)
            .setImage(`${imagem}`)
            .setColor('#cc0099')
            .setTimestamp()

        interaction.reply({
            embeds: [embed]
            }
        )

		}
    }