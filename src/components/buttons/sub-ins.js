module.exports = {
  data: {
    name: `sub-ins`,
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: `https://www.instagram.com/nthpudding/`,
    });
  },
};
