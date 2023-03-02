const { SlashCommandBuilder } = require('discord.js');
const Discord = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hug')
		.setDescription('abraçu =)')
		.addUserOption(option => option.setName('target').setDescription('Quem quer abraçar').setRequired(true)),

	async execute(interaction) {

		const member = interaction.options.getMember('target');

        let user = interaction.guild.members.cache.get(member.id)

        var lista = [
            "https://media3.giphy.com/media/Y8Bi9lCOzXRkY/giphy.gif?cid=ecf05e47l2wjtawz1yqc0tv2lq3tk03lyf3aeuf9azzclioj&rid=giphy.gif&ct=g",
            "https://media1.giphy.com/media/42YlR8u9gV5Cw/giphy.gif?cid=ecf05e47olv5axrb735zh4nmwjzpqa41l2po7m30tjzpj5t5&rid=giphy.gif&ct=g",
            "https://media4.giphy.com/media/u9BxQbM5bxvwY/giphy.gif?cid=ecf05e47iosxdauvbkvn9zd99entwsop3s71po80fuzncxcs&rid=giphy.gif&ct=g",
            "https://media1.giphy.com/media/5eaDM9dRapgZ2/giphy.gif?cid=ecf05e47oz4ibf80o4ij3rc6vw32avd9y2ww9g978niq0s40&rid=giphy.gif&ct=g",
            "https://media4.giphy.com/media/49mdjsMrH7oze/giphy.gif?cid=ecf05e47otyjdwmnzvftz9k02pgaq5bbhmb9lsukg7wuge57&rid=giphy.gif&ct=g"
        ];

        var r = lista[Math.floor(Math.random() * lista.length)];

		let embed = new Discord.EmbedBuilder()
            .setDescription(`**${interaction.user} deu um abraço em ${user}**`)
            .setImage(`${r}`)
            .setColor('#cc0099')
            .setTimestamp()

        interaction.reply({
            embeds: [embed]
            }
        )
	},
};