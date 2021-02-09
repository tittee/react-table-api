import lists from '../apis';
import history from '../history';
import {
  CREATE_LIST,
  FETCH_LISTS,
  FETCH_LIST,
  DELETE_LIST,
  EDIT_LIST,
} from './types';

// CREATE
export const createList = (formValues) => async (dispatch) => {
  const response = await lists.post('/lists', { ...formValues });

  dispatch({ type: CREATE_LIST, payload: response.data });
  history.push('/');
};

// FETCHS
export const fetchLists = () => async (dispatch) => {
  const response = await lists.get('/lists');

  dispatch({ type: FETCH_LISTS, payload: response.data });
};

// FETCH
export const fetchList = (id) => async (dispatch) => {
  const response = await lists.get(`/lists/${id}`);

  dispatch({ type: FETCH_LIST, payload: response.data });
};

// EDIT
export const editList = (id, formValues) => async (dispatch) => {
  const response = await lists.patch(`/lists/${id}`, formValues);

  dispatch({ type: EDIT_LIST, payload: response.data });
  history.push('/');
};

// DELETE
export const deleteList = (id) => async (dispatch) => {
  await lists.delete(`/lists/${id}`);

  dispatch({ type: DELETE_LIST, payload: id });
};
