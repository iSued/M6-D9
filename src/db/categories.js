module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "category",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        required: true,
      },
      imgUrl: {
        type: DataTypes.STRING,
        required: true,
      },
    },
    { timestamps: false }
  );
  Category.associate = (models) => {
    Category.hasMany(models.Article);
  };
  return Category;
};
