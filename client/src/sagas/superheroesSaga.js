import {put, select} from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import * as restController from '../api/rest/restController';
import remove from 'lodash/remove';

export  function* getSuperheroesSaga(action) {
    try{
        const { data } = yield restController.getSuperheroes(action.data);
        yield put({type: ACTION.GET_SUPERHEROES_SUCCESS, superheroes: data.superHeroes, haveMore: data.haveMore});
    }
    catch (e) {
        yield put({type: ACTION.GET_SUPERHEROES_ERROR, error: e.response});
    }
}

export function* getSuperheroByIdSaga(action){
    yield put({type: ACTION.GET_SUPERHERO_REQUEST});
    try{
        const {data} = yield  restController.getSuperheroById(action.id);
        yield put({type: ACTION.GET_SUPERHERO_SUCCESS, superheroData: data});
    }
    catch (e) {
        yield put({type: ACTION.GET_SUPERHERO_ERROR, error: e.response});
    }
}

export function* deleteSuperheroSaga(action) {
    try {
        yield restController.deleteSuperhero(action.id);
        const {superheroes} = yield select(state => state.superheroesStore);
        const newSuperheroesList = remove(superheroes, (superhero) => action.data.id !== superhero.id);
        yield put({type: ACTION.DELETE_SUPERHERO_SUCCESS, data: newSuperheroesList});
    } catch (err) {
        yield put({type: ACTION.SUPERHERO_ERROR, error: err.response});
    }
}

export function* createSuperheroSaga(action) {
    try {
        const {data} = yield restController.createSuperhero(action.data);
        yield put({type: ACTION.CREATE_SUPERHERO_SUCCESS, data: data});
    } catch (err) {
        yield  put({type: ACTION.SUPERHERO_ERROR, error: err.response});
    }
}

export  function* updateSuperheroSaga(action) {
    yield put({type: ACTION.UPDATE_SUPERHERO_REQUEST});
    try {
        const {data}= yield restController.updateSuperhero(action.data, action.id);
        yield put({type: ACTION.UPDATE_STORE_AFTER_UPDATE_SUPERHERO, data: data});
    } catch (e) {
        yield put({type: ACTION.UPDATE_SUPERHERO_ERROR, error: e.response});
    }
}