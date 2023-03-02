const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Informação sobre o usuario.'),
	async execute(interaction) {
		await interaction.reply(`O comando foi rodado por ${interaction.user.username}, e ele entrou no servidor em ${interaction.member.joinedAt}.`);
	},
};