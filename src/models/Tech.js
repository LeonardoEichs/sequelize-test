const { Model, DataTypes } = require("sequelize");

class Tech extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING
      },
      {
        sequelize,
        tableName: "techs"
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: "tech_id",
      as: "users",
      through: "user_techs"
    });
  }
}

module.exports = Tech;
