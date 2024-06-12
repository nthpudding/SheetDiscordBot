const { SlashCommandBuilder } = require("discord.js");
const axios = require("axios");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("notelop8")
    .setDescription("save data to sheet")
    .addStringOption(option => option.setName('name').setDescription('This is a name').setRequired(true))
    .addStringOption(option => option.setName('date').setDescription('This is a date').setRequired(true))
    .addStringOption(option => option.setName('note').setDescription('This is a note').setRequired(true)),
  async execute(interaction) {
    await interaction.reply({
      content: "Data added successfully!!!",
    });

    const Name = interaction.options.getString('Name')
    const Date = interaction.options.getString('Date')
    const Note = interaction.options.getString('Note')

    try {
      const response = await axios.post(
        "your Google sheet API link",
        {
          data: [
            {
              Name: `${Name}`,
              Date: `${Date}`,
              Note: `${Note}`
            },
          ],
        }
      );
      console.log("Data added successfully:", response.data);
    } catch (error) {
      console.error("Error adding data to Google Sheet:", error.response.data);
    }
  },
};
