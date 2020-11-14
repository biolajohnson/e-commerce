import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    password: bcrypt.hashSync("123456", 10),
    email: "admin@email.com",
    isAdmin: true,
  },
  {
    name: "John Doe",
    password: bcrypt.hashSync("123456", 10),
    email: "john@email.com",
  },
  {
    name: "Jane Doe",
    password: bcrypt.hashSync("123456", 10),
    email: "jane@email.com",
  },
];
export default users;
