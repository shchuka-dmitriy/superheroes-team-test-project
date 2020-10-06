'use strict';

export default (sequelize, DataTypes) => {
  const Superhero = sequelize.define( 'Superhero', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    nickName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    realName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    originDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    superpowers: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    catchPhrase: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  }, {
    tableName: 'Superheroes',
    timestamps: false
  } );

  Superhero.associate = function (models) {
    Superhero.hasMany(models.SuperheroesPhoto, { onDelete: 'cascade', foreignKey: 'superheroId', targetKey: 'id' });
  };
  return Superhero;
}