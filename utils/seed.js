const connection = require('../config/connection');
const { User, Users } = require('../models');
const { getRandomName } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('users');
    }

  // Create empty array to hold the students
  const users = [];

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 20; i++) {
    // Get some random username objects using a helper function that we imported from ./data
    const email = getRandomName();
    const username = email.split('@')[0];
    
    users.push({
      email,
      username,
    });
  }

  // Add students to the collection and await the results
  await User.collection.insertMany(users);

    // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
