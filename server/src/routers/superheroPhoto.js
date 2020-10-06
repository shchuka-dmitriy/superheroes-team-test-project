import express            from 'express';
import SuperheroPhotoController  from '../controllers/superheroPhoto';
const superheroPhotoRouter = express.Router();

superheroPhotoRouter.route( '/superheroPhoto/:id' )
    .patch( SuperheroPhotoController.updatePhotoById )
    .delete( SuperheroPhotoController.deletePhotoById );

export default superheroPhotoRouter;