'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {

    const nameAttribute = {
      type: Sequelize.STRING,
      allowNull: false,
    };

    const textAttribute = {
      type: Sequelize.TEXT,
      allowNull: true,
    };

    return queryInterface.createTable( 'Superheroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickName: nameAttribute,
      realName: nameAttribute,
      originDescription: textAttribute,
      superpowers: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      catchPhrase: textAttribute,
    } );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable( 'Superheroes' );
  }
};