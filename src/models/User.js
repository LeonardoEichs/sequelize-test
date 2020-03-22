const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING
      },
      {
        sequelize
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Address, { foreignKey: "user_id", as: "addresses" });
    this.belongsToMany(models.Tech, {
      foreignKey: "user_id",
      as: "techs",
      through: "user_techs"
    });
  }
}

module.exports = User;
