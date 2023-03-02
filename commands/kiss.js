const { SlashCommandBuilder } = require('discord.js');
const Discord = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('beijin')
		.setDescription('sexo')
		.addUserOption(option => option.setName('target').setDescription('Quem quer beijar').setRequired(true)),
        
	async execute(interaction) {

		const member = interaction.options.getMember('target');

        let user = interaction.guild.members.cache.get(member.id)

        var lista = [
            'https://imgur.com/II1bakc.gif',
            'https://imgur.com/MzAjNdv.gif',
            'https://imgur.com/eKcWCgS.gif',
            'https://imgur.com/3aX4Qq2.gif',
            'https://imgur.com/uobBW9K.gif',
            'https://imgur.com/3jzT5g6.gif',
            'https://imgur.com/VrETTlv.gif',
            'https://imgur.com/FozOXkB.gif',
            'https://imgur.com/7GhTplD.gif',
        ];

        var r = lista[Math.floor(Math.random() * lista.length)];

		let embed = new Discord.EmbedBuilder()
            .setDescription(`**${interaction.user} deu um beijin em ${user}**`)
            .setImage(`${r}`)
            .setColor('#cc0099')
            .setTimestamp()

        interaction.reply({
            embeds: [embed]
            }
        )
	},
};