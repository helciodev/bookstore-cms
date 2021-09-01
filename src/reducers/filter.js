import { CHANGE_FILTER } from '../actions/index';

const initialState = {
  filter: '',
};

function filterReducer(state = initialState, action) {
  if (action.type === CHANGE_FILTER) {
    return {
      filter: action.category,
    };
  }

  return state;
}

export default filterReducer;
