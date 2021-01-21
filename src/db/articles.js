module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    "article",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      headLine: {
        type: DataTypes.STRING,
        required: true,
      },
      subHead: {
        type: DataTypes.STRING,
        required: true,
      },
      content: {
        type: DataTypes.STRING,
        required: true,
      },
      cover: {
        type: DataTypes.STRING,
        required: true,
      },
    },
    { timestamps: true }
  );
  Article.associate = (models) => {
    Article.belongsTo(models.Category);
    Article.belongsTo(models.Author);
    Article.hasMany(models.Reviews);
  };
  return Article;
};
