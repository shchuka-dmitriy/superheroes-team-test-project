import { SuperheroesPhoto }   from './../models';
import SuperheroPhotoQueries from './queries/queries';

class SuperheroPhotoController {
    constructor () {
        this._controller = new SuperheroPhotoQueries( SuperheroesPhoto );
    }

    deletePhotoById = async (req, res, next) => {
        try {
            res.send( `${await this._controller.delete( req.params.id )}` );
        } catch (e) {
            next( e );
        }
    };

    updatePhotoById = async (req, res, next) => {
        try {
            res.send( await this._controller.update( req.params.id, req.body ) );
        } catch (e) {
            next( e );
        }
    };
}

export default new SuperheroPhotoController();