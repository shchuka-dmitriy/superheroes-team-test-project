import http from '../interceptor';

export const getSuperheroes = (data) => http.post('api/superheroes', data);
export const createSuperhero = (data) => http.post('api/superhero', data);
export const getSuperheroById = (id) => http.get(`api/superhero/${id}`);
export const updateSuperhero = (data, id) => http.patch(`api/superhero/${id}`, data);
export const deleteSuperhero = (id) => http.delete(`api/superhero/${id}`);