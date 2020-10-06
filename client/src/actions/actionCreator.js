import ACTION from './actionTypes';

export const getSuperheroByIdAction = (data) => {
    return {
        type: ACTION.GET_SUPERHERO_ACTION,
        id: data
    }
};

export const createSuperheroAction = (data) => {
    return {
        type: ACTION.CREATE_SUPERHERO_ACTION,
        data: data
    }
};

export const deleteSuperheroAction = (data) => {
    return {
        type: ACTION.DELETE_SUPERHERO_ACTION,
        id: data
    }
};

export const updateSuperheroAction = (data, id) => {
    return {
        type: ACTION.UPDATE_SUPERHERO_ACTION,
        data: data,
        id: id
    }
};

export const getSuperheroesAction = (data) => {
    return {
        type: ACTION.GET_SUPERHEROES_ACTION,
        data: data
    }
};