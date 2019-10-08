import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const API_URL = 'https://reqres.in/api/users?delay=2';

const ACTION_TYPES = {
  START_LOADING: 'START_LOADING',
  HANDLE_SUCCESS: 'HANDLE_SUCCESS',
}

export const startLoading = () => ({
  type: ACTION_TYPES.START_LOADING,
});

export const addUsers = users => ({
  type: ACTION_TYPES.HANDLE_SUCCESS,
  payload: users,
});

export const loadData = () => {
  return dispatch => {
    dispatch(startLoading());

    return (
      fetch(API_URL)
        .then(response => (
          response.json()
        ))
        .then((response) => {
          dispatch(addUsers(response.data));
        })
    );
  }
};

const initialState = {
  users: [],
  isLoading: false,
  isLoaded: false,
}

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ACTION_TYPES.START_LOADING:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
      };

    case ACTION_TYPES.HANDLE_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
        isLoaded: true,
      };

    default:
      return state;
  }
}

export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk)
);
