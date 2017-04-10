import { combineReducers } from 'redux';
import { STORE_TAG, LOADING, ON_GET_POST } from '../actions/Types';

const storeTag = (state = '', action) => {
  switch (action.type) {
      case STORE_TAG:
          return action.payload.tag;
      default:
          return state;
  }
};

const setLoading = (state = false, action) => {
  switch (action.type) {
      case LOADING:
          return action.payload.isLoading;
      default:
          return state;
  }
};

const posts = (state = [], action) => {
  switch (action.type) {
      case ON_GET_POST:
          return action.payload.posts;
      default:
          return state;
  }
};

export default combineReducers({
  tag: storeTag,
  isLoading: setLoading,
  posts
});
