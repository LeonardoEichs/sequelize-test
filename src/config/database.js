require('dotenv').config();
module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: process.env.PASS,
  database: process.env.DB,
  define: {
    timestamps: true,
    underscored: true
  }
};
