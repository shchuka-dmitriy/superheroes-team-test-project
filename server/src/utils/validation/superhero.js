import Joi                                        from '@hapi/joi';
import { NAME_PATTERN } from '../../constants/constants';
const nameSchema = Joi.string().pattern( NAME_PATTERN );
export const superheroSchema = Joi.object( {
                                 nickName: nameSchema.label( 'Nick name' ),
                                 realName: nameSchema.label( 'Real name' ),
                                 originDescription: nameSchema.label( 'Origin description' ),
                                 superpowers: nameSchema.label( 'Superpowers' ),
                                 catchPhrase: nameSchema.label( 'Catch phrase' )
                               } );