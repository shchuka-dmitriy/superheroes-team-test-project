'use strict';

export default (sequelize, DataTypes) => {
  const SuperheroesPhoto = sequelize.define( 'SuperheroesPhoto', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    superheroId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Superhero',
        key: 'id'
      },
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: 'anon.png',
    },
    isMainPhoto: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  }, {
    timestamps: false
  } );

  SuperheroesPhoto.associate = function (models) {
    SuperheroesPhoto.belongsTo( models.Superhero, {
      foreignKey: 'superheroId',
    } );
  };
  return SuperheroesPhoto;
}