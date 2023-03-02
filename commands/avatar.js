const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");

module.exports = {

    data: new SlashCommandBuilder()

        .setName('avatar')
        .setDescription('Mostra a avatar de um usuário')
        .addUserOption(option => 
            option.setName('usuário')
                .setDescription('Selecione um usuário')
                .setRequired(true)
        ),

    async execute(interaction) {

        const user = interaction.options.getUser('usuário');
        

        let embed = new Discord.EmbedBuilder()
            .setDescription(`**Foto de  ${user.username}**`)
            .setImage(user.displayAvatarURL())
            .setColor('#cc0099')
            .setTimestamp()
        
        
        if (!user) {

            return interaction.reply({ content: 'Não foi possível encontrar esse usuário', ephemeral: true });
        }

        return interaction.reply({ embeds: [embed] });
    },
};
