const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const Discord = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('personagem')
    .setDescription('Retorna informações sobre um personagem de anime')
    .addStringOption(option => option.setName('nome')
      .setDescription('Nome do personagem')
      .setRequired(true)
    ),
  async execute(interaction) {
    const characterName = interaction.options.getString('nome');
    const query = `query ($search: String) {
      Character(search: $search) {
        name {
          full
          native
        }
        description
        image {
          large
        }
        siteUrl
      }
    }`;
    const variables = { search: characterName };
    const url = 'https://graphql.anilist.co';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        query: query,
        variables: variables
      })
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const character = data.data.Character;
      const embed = new Discord.EmbedBuilder()
        .setColor('#FF6B6B')
        .setTitle(character.name.full)
        .setDescription(character.description)
        .setThumbnail(character.image.large)
        .setURL(character.siteUrl)
        .setTimestamp()
      await interaction.reply({ embeds: [embed] });
    } catch (error) {
      console.log(error);
      await interaction.reply({ content: `Ocorreu um erro ao buscar informações sobre o personagem "${characterName}".`, ephemeral: true });
    }
  },
};
