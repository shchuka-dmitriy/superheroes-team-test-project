import express                from 'express';
import * as ErrorHandlers     from './../middlewares/errorHandler/index.js';
import superheroRouter        from './superhero';
import superheroPhotoRouter   from './superheroPhoto.js';
const router = express.Router();

router.use( superheroRouter, superheroPhotoRouter );
router.use( ErrorHandlers.handleApplicationError );
router.use( ErrorHandlers.handleSequelizeError );

export default router;