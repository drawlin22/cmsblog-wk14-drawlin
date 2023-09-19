const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of blogData) {
    await Post.create({
      ...post,
    });
  }

  process.exit(0);
};

seedDatabase();
