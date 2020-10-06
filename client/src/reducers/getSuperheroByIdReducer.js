import ACTION from '../actions/actionTypes';

const initialState = {
    isFetching: true,
    superheroData: null,
    error: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_SUPERHERO_REQUEST: {
            return {
                ...state,
                isFetching: true,
                superheroData: null,
                error: null,
            }
        }
        case ACTION.GET_SUPERHERO_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                superheroData: action.superheroData,
                error: null,
            }
        }
        case ACTION.GET_SUPERHERO_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        }
        default:
            return state;
    }
}