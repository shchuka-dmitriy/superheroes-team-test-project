import { Superhero, SuperheroesPhoto }   from './../models';
import SuperheroQueries from './queries/queries';

class SuperheroController {

    constructor () {
        this._controller = new SuperheroQueries( Superhero );
    }

    deleteHeroById = async (req, res, next) => {
        try {
            res.send( `${await this._controller.delete( req.params.id )}` );
        } catch (e) {
            next( e );
        }
    };

    getHeroById = async (req, res, next) => {
        try {
            res.send( await this._controller.read( req.params.id ) );
        } catch (e) {
            next( e );
        }
    };

    getHeroes = async (req, res, next) => {
        const { body: {limit, offset} } = req;
        try {
            const superHeroes = await Superhero.findAll( {
                limit,
                offset: offset ? offset : 0,
                order: [['nickName', 'ASC']],
                include: SuperheroesPhoto
            } );

            let haveMore = true;
            if (superHeroes.length < 5) {
                haveMore = false;
            }
            res.send( {superHeroes, haveMore} );
        } catch (e) {
            next( e );
        }
    };
}

export default new SuperheroController();