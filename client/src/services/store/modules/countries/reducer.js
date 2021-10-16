import { SET_COUNTRIES } from './actionTypes';

const initialState = [];

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_COUNTRIES: {
      return payload;
    }
    default:
      return state;
  }
}
