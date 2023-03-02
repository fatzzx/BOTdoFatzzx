const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Descubra'),
	async execute(interaction) {
		await interaction.reply('HHAHAHAHAHHAHAHAHAHAH!!!!!!!!!!!!!');
	},
};