import _ from 'lodash';
import {
  FETCH_LIST,
  FETCH_LISTS,
  CREATE_LIST,
  EDIT_LIST,
  DELETE_LIST,
} from './../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_LISTS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_LIST:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_LIST:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_LIST:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_LIST:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
