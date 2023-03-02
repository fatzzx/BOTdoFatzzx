const { SlashCommandBuilder } = require('@discordjs/builders');
const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('join')
    .setDescription('Faz o bot entrar no canal de voz selecionado')
    .addChannelOption(option =>
      option.setName('canal')
        .setDescription('Selecione o canal de voz')
        .setRequired(true)),

  async execute(interaction) {
    const voiceChannel = interaction.options.get('canal').channel;

    if (!voiceChannel) {
      return interaction.reply('Por favor, selecione um canal de voz válido.');
    }

    try {
      joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: voiceChannel.guild.id,
        adapterCreator: voiceChannel.guild.voiceAdapterCreator
      });

      interaction.reply(`Entre no canal de voz ${voiceChannel}.`);
    } catch (error) {
      console.error(error);
      interaction.reply('Não foi possível entrar no canal de voz.');
    }
  }
};
