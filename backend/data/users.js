import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Jon Doe",
    email: "jon@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Bat Man",
    email: "bat@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
