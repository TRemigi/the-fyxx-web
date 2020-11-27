const faker = require("faker");

const db = require("../config/connection");
const { User } = require("../models");

db.once("open", async () => {
  await User.deleteMany({});

  for (let i = 0; i < 10; i += 1) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email(firstName);
    const password = faker.internet.password();

    // userData.push({ password, email, lastName, firstName });
    await User.create({ password, email, lastName, firstName });
  }

  console.log("all done!");
  process.exit(0);
});
