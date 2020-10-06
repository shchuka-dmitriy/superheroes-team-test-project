import ACTION from '../actions/actionTypes';

const initialState = {
    createdSuperhero: null,
    superheroes: null,
    error: null,
    data: null
};

export default function (state = initialState, action) {
    switch (action.type) {

        case ACTION.CREATE_SUPERHERO_SUCCESS:{
            return{
                ...state,
                error: null,
                createdSuperhero: action.data
            }
        }

        case ACTION.DELETE_SUPERHERO_SUCCESS:{
            return{
                ...state,
                error: null,
                superheroes: action.data,
            }
        }
        case ACTION.SUPERHERO_ERROR:{
            return{
                ...state,
                error: action.error,
            }
        }

        default:
            return state;
    }
};