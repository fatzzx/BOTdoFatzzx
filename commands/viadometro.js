const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('viadometro')
    .setDescription('Sera que vc é gay?'),

  async execute(interaction) {

    const usuario = interaction.user;
    const avatarUrl = usuario.avatarURL();

    const numero = Math.floor(Math.random() * 100) + 1;

    if (usuario.id == `seu id se quiser`){

        let embed = new Discord.EmbedBuilder()
            .setDescription(`**🏳️‍🌈 Você é 0% gay 🏳️‍🌈**`)
            .setImage(usuario.avatarURL())
            .setColor('#cc0099')
            .setTimestamp()

        await interaction.reply({ embeds: [embed] });

    } else if(numero <= 10){
      
      let embed = new Discord.EmbedBuilder()
      .setDescription(`**💪 Você é  ${numero}% gay, portando é Hétero 💪**`)
      .setImage(usuario.avatarURL())
      .setColor('#808080')
      .setTimestamp()

      await interaction.reply({ embeds: [embed] });

    } else {

        let embed = new Discord.EmbedBuilder()
                .setDescription(`**🏳️‍🌈 Você é  ${numero}% gay 🏳️‍🌈**`)
                .setImage(usuario.avatarURL())
                .setColor('#cc0099')
                .setTimestamp()

        

        await interaction.reply({ embeds: [embed] });}
  },
};
