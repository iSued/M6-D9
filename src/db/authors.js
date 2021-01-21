module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    "author",
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
      lastName: {
        type: DataTypes.STRING,
        required: true,
      },
      email: {
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
  Author.associate = (models) => {
    Author.hasMany(models.Reviews);
    Author.hasMany(models.Article);
  };
  return Author;
};
