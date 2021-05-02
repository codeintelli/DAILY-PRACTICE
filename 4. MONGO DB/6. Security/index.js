const bcrypt = require("bcryptjs");
const securePassword = async (password) => {
  const passwordHash = await bcrypt.hash(password, 10);
  console.log(passwordHash);

  //   const passwordMatch = await bcrypt.compare(password, passwordHash);
  const passwordMatch = await bcrypt.compare("Shiv.itvmh@6464", passwordHash);
  console.log(passwordMatch);
};

securePassword("Shiv.itvmh@6464");
