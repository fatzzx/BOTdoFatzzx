const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('anime')
        .setDescription('Retorna informações sobre um anime')
        .addStringOption(option => option.setName('nome')
            .setDescription('Nome do anime')
            .setRequired(true)),
    async execute(interaction) {
        const nomeAnime = interaction.options.getString('nome');
        const url = `https://graphql.anilist.co`,
            query = `
                query ($search: String) {
                    Media (search: $search, type: ANIME) {
                        title {
                            romaji
                            english
                            native
                        }
                        description
                        startDate {
                            year
                            month
                            day
                        }
                        endDate {
                            year
                            month
                            day
                        }
                        status
                        episodes
                        duration
                        season
                        coverImage {
                            large
                        }
                        genres
                        averageScore
                        siteUrl
                    }
                }
            `;
        const variables = {
            search: nomeAnime
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: variables
            })
        };
        const response = await fetch(url, options);
        const data = await response.json();
        const anime = data.data.Media;
        const embed = {
            color: 0xff0000,
            title: anime.title.romaji,
            description: anime.description,
            thumbnail: {
                url: anime.coverImage.large
            },
            fields: [
                {
                    name: 'Início',
                    value: anime.startDate.day ? `${anime.startDate.day}/${anime.startDate.month}/${anime.startDate.year}` : `${anime.startDate.year}`
                },
                {
                    name: 'Fim',
                    value: anime.endDate.day ? `${anime.endDate.day}/${anime.endDate.month}/${anime.endDate.year}` : `${anime.endDate.year}`,
                    inline: true
                },
                {
                    name: 'Status',
                    value: anime.status,
                    inline: true
                },
                {
                    name: 'Episódios',
                    value: anime.episodes.toString(),
                    inline: true
                },
                {
                    name: 'Duração',
                    value: `${anime.duration} min`,
                    inline: true
                },
                {
                    name: 'Gêneros',
                    value: anime.genres.join(', '),
                },
                {
                    name: 'Nota',
                    value: `${anime.averageScore}/100`
                }
            ],
            footer: {
                text: `Dados fornecidos pela AniList | ${anime.siteUrl}`
            }
        };
        await interaction.reply({ embeds: [embed] });
    },
};
