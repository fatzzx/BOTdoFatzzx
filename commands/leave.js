const { SlashCommandBuilder } = require('@discordjs/builders');
const { getVoiceConnection } = require('@discordjs/voice');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('leave')
		.setDescription('Faz o bot sair do canal de voz'),
	async execute(interaction) {
		
		const connection = getVoiceConnection(interaction.guildId);

		
		if (!connection) {
			return interaction.reply('O bot não está em um canal de voz!');
		}

		connection.destroy();

		await interaction.reply('Saí do canal de voz!');
	},
};
