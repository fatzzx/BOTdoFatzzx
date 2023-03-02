const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const fetch = require('node-fetch');

module.exports = {

    data: new SlashCommandBuilder()
        .setName('waifu')
        .setDescription('Auuuuuuuuuu')
        .addSubcommand(subcommand =>
            subcommand
                .setName('sfw')
                .setDescription('SAFE')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('nsfw')
                .setDescription('SUS')
                .addStringOption(option =>
                    option
                        .setName('password')
                        .setDescription('Digite a senha para ver imagens NSFW.')
                        .setRequired(true))
        ),

    async execute(interaction) {

        const type = interaction.options.getSubcommand();
        const channel = interaction.channel;

        if (type === 'nsfw' && !channel.nsfw) {
            await interaction.reply({
              content: 'Esse comando só pode ser usado em canais +18.',
              ephemeral: true
            });
            return;
          }

        let url;

        if (type === 'sfw') {
            const response = await fetch('https://api.waifu.pics/sfw/waifu');
            const data = await response.json();
            url = data.url;

        } else if (type === 'nsfw') {
            const password = interaction.options.getString('password');

            
            if (password !== 'fatzzxgostoso') {
                await interaction.reply({
                    content: 'Senha incorreta.',
                    ephemeral: true
                });
                return;
            }

            const response = await fetch('https://api.waifu.pics/nsfw/waifu');
            const data = await response.json();
            url = data.url;
        }

        let embed = new Discord.EmbedBuilder()
            .setDescription(`**Você é SUS**`)
            .setImage(url)
            .setColor('#cc0099')
            .setTimestamp()

        await interaction.reply({ embeds: [embed] });
    },
};
