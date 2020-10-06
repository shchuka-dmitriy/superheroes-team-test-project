import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import superheroReducer from "./superheroReducer";
import getSuperheroesReducer from "./getSuperheroesReducer";
import getSuperheroByIdReducer from "./getSuperheroByIdReducer";
import updateSuperheroReducer from "./updateSuperheroReducer";

const appReducer = combineReducers({
    form: formReducer,
    superheroesStore: getSuperheroesReducer,
    superheroByIdStore: getSuperheroByIdReducer,
    superheroStore: superheroReducer,
    updatedSuperheroStore: updateSuperheroReducer
});

export default appReducer;