'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable( 'SuperheroesPhotos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      superheroId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Superheroes',
          key: 'id'
        }
      },
      photo: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      isMainPhoto: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      }
    } );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable( 'SuperheroesPhotos' );
  }
};