const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Informação sobre o servidor.'),
	async execute(interaction) {

		await interaction.reply(`O ${interaction.guild.name} tem ${interaction.guild.memberCount} membros.`);
	},
};