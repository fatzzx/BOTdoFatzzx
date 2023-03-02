const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Limpa mensagens do canal.')
        .addIntegerOption(option =>
            option.setName('quantidade')
                .setDescription('Quantidade de mensagens a serem limpas.')
                .setRequired(true)),

    async execute(interaction) {
		
        const amount = interaction.options.getInteger('quantidade');

        if (amount <= 1 || amount > 100) {
            return interaction.reply({ content: 'Você deve inserir um número entre 2 e 100 para limpar o canal!', ephemeral: true });
        }

        await interaction.channel.bulkDelete(amount, true).catch(error => {
            console.error(error);
            return interaction.reply({ content: 'Ocorreu um erro ao tentar excluir as mensagens neste canal!', ephemeral: true });
        });

        return interaction.reply({ content: `Foram excluídas ${amount} mensagens neste canal.`, ephemeral: true });
    },
};
