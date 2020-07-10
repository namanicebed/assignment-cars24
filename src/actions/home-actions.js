import {IMAGE_FETCH_AWAIT, IMAGE_FETCHED, IMAGE_FETCH_ERROR} from './types';

import axios from 'axios';

export const getImages = () => async (dispatch) => {
  try {
    dispatch({type: IMAGE_FETCH_AWAIT});
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=200',
    );
    dispatch({type: IMAGE_FETCHED, payload: response});
  } catch (error) {
    dispatch({type: IMAGE_FETCH_ERROR, payload: error});
  }
};
