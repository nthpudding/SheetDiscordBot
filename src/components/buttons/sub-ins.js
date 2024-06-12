module.exports = {
  data: {
    name: `sub-ins`,
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: `Your social Link or anything you want`,
    });
  },
};
