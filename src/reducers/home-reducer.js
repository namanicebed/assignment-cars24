import {
  IMAGE_FETCH_AWAIT,
  IMAGE_FETCHED,
  IMAGE_FETCH_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: null,
};

export const homeReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case IMAGE_FETCH_AWAIT:
      return {
        ...state,
        loading: true,
      };
    case IMAGE_FETCHED:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case IMAGE_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
