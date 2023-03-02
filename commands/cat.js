const { SlashCommandBuilder } = require('discord.js');
const Discord = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gatos')
		.setDescription('Miau.'),

    async execute(interaction){
		let usuario = interaction.options.getUser('usuário');

        var lista = [
           'https://giphy.com/clips/bestfriends-cat-cats-kitty-IsDjNQPc4weWPEwhWm',
           'https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif',
           'https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif',
           'https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif',
           'https://media.giphy.com/media/jpbnoe3UIa8TU8LM13/giphy.gif',
           'https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif',
           'https://media.giphy.com/media/8vQSQ3cNXuDGo/giphy.gif',
           'https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif',
           'https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif',
           'https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif',
           'https://media.giphy.com/media/v6aOjy0Qo1fIA/giphy.gif',
           'https://media.giphy.com/media/yFQ0ywscgobJK/giphy.gif',
           'https://media.giphy.com/media/CjmvTCZf2U3p09Cn0h/giphy.gif',
           'https://media.giphy.com/media/xJjs8eGVbjNYY/giphy.gif',
           'https://media.giphy.com/media/RhrAmVUHxjTQvEPBWi/giphy.gif',
           'https://media.giphy.com/media/5i7umUqAOYYEw/giphy.gif',
           'https://media.giphy.com/media/xUPGcyi4YxcZp8dWZq/giphy.gif',
           'https://media.giphy.com/media/WYEWpk4lRPDq0/giphy.gif',
           'https://media.giphy.com/media/C9x8gX02SnMIoAClXa/giphy.gif'

        ];


        var r = lista[Math.floor(Math.random() * lista.length)];

        let embed = new Discord.EmbedBuilder()
            .setDescription(`**Gato lindo parece fatzzx **`)
            .setImage(`${r}`)
            .setColor('#bd6930')
            .setTimestamp()

        interaction.reply({
            embeds: [embed]
            }
        )

		}
    
    }