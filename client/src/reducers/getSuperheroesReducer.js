import ACTION from '../actions/actionTypes';

const initialState = {
    superheroes: null,
    isFetching: true,
    error: null,
    haveMore: true
};

export default function (state = initialState, action) {

    switch (action.type) {
        case ACTION.GET_SUPERHEROES_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null
            }
        }
        case ACTION.GET_SUPERHEROES_SUCCESS: {
            return {
                ...state,
                superheroes: action.superheroes,
                isFetching: false,
                haveMore: action.haveMore,
                error: null
            };
        }
        case ACTION.GET_SUPERHEROES_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}