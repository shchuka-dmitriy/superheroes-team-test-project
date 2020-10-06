import {takeLatest} from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import {
    getSuperheroesSaga,
    getSuperheroByIdSaga,
    deleteSuperheroSaga,
    createSuperheroSaga,
    updateSuperheroSaga
} from "./superheroesSaga";

function* rootSaga() {
    yield takeLatest(ACTION.GET_SUPERHEROES_ACTION, getSuperheroesSaga);
    yield takeLatest(ACTION.GET_SUPERHERO_ACTION, getSuperheroByIdSaga);
    yield takeLatest(ACTION.CREATE_SUPERHERO_ACTION, createSuperheroSaga);
    yield takeLatest(ACTION.DELETE_SUPERHERO_ACTION, deleteSuperheroSaga);
    yield  takeLatest(ACTION.UPDATE_SUPERHERO_ACTION, updateSuperheroSaga);
}

export default rootSaga;