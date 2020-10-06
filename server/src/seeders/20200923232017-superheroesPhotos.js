'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert( 'SuperheroesPhotos', [
            {
                superheroId: 1,
                photo: 'halk1715.jpg',
                isMainPhoto: true,
            },
            {
                superheroId: 1,
                photo: 'halk17151.jpeg',
                isMainPhoto: false,
            },
            {
                superheroId: 1,
                photo: 'halk17152.jpg',
                isMainPhoto: false,
            },
            {
                superheroId: 2,
                photo: 'capitanAmerica111.jpg',
                isMainPhoto: true,
            },
            {
                superheroId: 2,
                photo: 'capitanAmerica112.jpg',
                isMainPhoto: false,
            },
            {
                superheroId: 2,
                photo: 'capitanAmerica113.jpg',
                isMainPhoto: false,
            },
            {
                superheroId: 3,
                photo: 'superman1111.jpg',
                isMainPhoto: true,
            },
            {
                superheroId: 3,
                photo: 'superman1112.jpg',
                isMainPhoto: false,
            },
            {
                superheroId: 4,
                photo: 'harleyQuinn95.jpg',
                isMainPhoto: true,
            },
            {
                superheroId: 4,
                photo: 'harleyQuinn96.jpg',
                isMainPhoto: false,
            },
            {
                superheroId: 4,
                photo: 'harleyQuinn97.jpg',
                isMainPhoto: false,
            },
            {
                superheroId: 5,
                photo: 'black1111.jpg',
                isMainPhoto: true,
            },
            {
                superheroId: 5,
                photo: 'black1112.jpg',
                isMainPhoto: false,
            },
            {
                superheroId: 5,
                photo: 'black1113.jpg',
                isMainPhoto: false,
            },
            {
                superheroId: 5,
                photo: 'black1114.jpg',
                isMainPhoto: false,
            },
            {
                superheroId: 5,
                photo: 'black1115.jpg',
                isMainPhoto: false,
            },
            {
                superheroId: 6,
                photo: 'squirrel_girl1111.jpg',
                isMainPhoto: true,
            },
            {
                superheroId: 6,
                photo: 'squirrel_girl1112.jpg',
                isMainPhoto: false,
            },
            {
                superheroId: 7,
                photo: 'drax1111.jpg',
                isMainPhoto: true,
            },
            {
                superheroId: 7,
                photo: 'drax1112.jpg',
                isMainPhoto: false,
            },
            {
                superheroId: 7,
                photo: 'drax1113.jpg',
                isMainPhoto: false,
            },
            {
                superheroId: 7,
                photo: 'drax1114.jpg',
                isMainPhoto: false,
            },
            {
                superheroId: 8,
                photo: 'ant1111.jpg',
                isMainPhoto: true,
            },
            {
                superheroId: 8,
                photo: 'ant1112.jpg',
                isMainPhoto: false,
            },
            {
                superheroId: 8,
                photo: 'ant1113.jpg',
                isMainPhoto: false,
            },
            {
                superheroId: 9,
                photo: 'spider1111.jpg',
                isMainPhoto: false,
            },
            {
                superheroId: 9,
                photo: 'spider1112.jpg',
                isMainPhoto: true,
            },
            {
                superheroId: 9,
                photo: 'spider1113.jpeg',
                isMainPhoto: false,
            },
            {
                superheroId: 9,
                photo: 'spider1114.jpg',
                isMainPhoto: false,
            },
            {
                superheroId: 10,
                photo: 'tor1111.jpg',
                isMainPhoto: true,
            },
            {
                superheroId: 10,
                photo: 'tor1112.jpg',
                isMainPhoto: false,
            },
            {
                superheroId: 10,
                photo: 'tor1113.jpg',
                isMainPhoto: false,
            },
            {
                superheroId: 10,
                photo: 'tor1114.jpg',
                isMainPhoto: false,
            },
        ], {} );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete( 'SuperheroesPhotos', null, {} );
    }
};