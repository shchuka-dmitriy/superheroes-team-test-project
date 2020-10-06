import { BadRequestError, ResourceNotFoundError } from '../../utils/errors';
import { SuperheroesPhoto } from '../../models';

class queries {
    constructor (model) {
        this._model = model;
    }

    get model () {
        return this._model;
    }

    create = async (data) => {
        const newInstance = await this.model.create( data );
        if (newInstance) {
            return newInstance;
        }
        throw new BadRequestError();
    };

    read = async (id) => {
        const superhero = await this.model.findOne({
            where: {
                id
            },
            include: [
                {
                    model: SuperheroesPhoto,
                    where: {
                        superheroId: id
                    },
                    attributes: {
                        exclude: ['superheroId']
                    }
                }
            ]
        } );
        if (superhero) {
            return {superhero};
        }
        throw new Error();
    };

    delete = async (id) => {
        const deletedRowsCount = await this.model.destroy( {
            where: {
                id,
            }
        } );
        if (deletedRowsCount) {
            return deletedRowsCount;
        }
        throw new ResourceNotFoundError( this.model.name );
    };
}

export default queries;