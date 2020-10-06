import express            from 'express';
import SuperheroController  from '../controllers/superheroController.js';
import SuperheroCreateUpdateController  from '../controllers/superheroCreateUpdateController.js';
const upload = require('../utils/fileUpload');
const superheroRouter = express.Router();

superheroRouter.route( '/superheroes' )
    .post( SuperheroController.getHeroes );

superheroRouter.route( '/superhero(/:id)?' )
          .post(
              upload.uploadAvatar,
              SuperheroCreateUpdateController.createHero )
          .get( SuperheroController.getHeroById )
          .patch(
              upload.uploadAvatar,
              SuperheroCreateUpdateController.deletePrevPhotos,
              upload.deletePhotos,
              SuperheroCreateUpdateController.updateHeroById)
          .delete( SuperheroController.deleteHeroById );

export default superheroRouter;