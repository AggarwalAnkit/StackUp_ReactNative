import axios from 'axios';
import { STORE_TAG, LOADING, ON_GET_POST } from '../actions/Types';

export const storeTag = (tag) => (
  {
    type: STORE_TAG,
    payload: {
      tag
    }
  }
);

const setLoading = (isLoading) => (
  {
    type: LOADING,
    payload: {
      isLoading
    }
  }
);

const onGetPosts = (posts) => (
  {
    type: ON_GET_POST,
    payload: {
      posts
    }
  }
);

export const getPosts = (tag) => (
  (dispatch) => {
    dispatch(setLoading(true));

    const url = `https://api.stackexchange.com/2.2/questions/unanswered?order=desc&sort=activity&tagged=${tag}&site=stackoverflow`;

    axios.get(url)
    .then(response => {
      if (response.status !== 200) {
        throw Error(response.statusText);
      }

      dispatch(setLoading(false));

      return response.data.items;
    })
    .then(items => dispatch(onGetPosts(items)))
    .catch(error => console.log(error));
  }
);
