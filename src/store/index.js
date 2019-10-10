import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

import thunk from 'redux-thunk';

const API_URLS = {
  BASE: 'https://reqres.in/api',
  GET_USERS: '/users?delay=2',
  DELETE_USER: '/users/',
};

const ACTION_TYPES = {
  START_LOADING: 'START_LOADING',
  HANDLE_SUCCESS: 'HANDLE_SUCCESS',
  DELETE_USER: 'DELETE_USER',
  EDIT_USER: 'EDIT_USER',
};

export const startLoading = () => ({
  type: ACTION_TYPES.START_LOADING,
});

export const addUsers = users => ({
  type: ACTION_TYPES.HANDLE_SUCCESS,
  payload: users,
});

export const changeUser = (id, value) => ({
  type: ACTION_TYPES.EDIT_USER,
  payload: {
    id,
    value,
  },
});

export const removeUser = id => ({
  type: ACTION_TYPES.DELETE_USER,
  payload: id,
});

export const loadData = () => {
  return dispatch => {
    dispatch(startLoading());

    return (
      fetch(`${API_URLS.BASE}${API_URLS.GET_USERS}`)
        .then(response => (
          response.json()
        ))
        .then(response => {
          dispatch(addUsers(response.data));
        })
    );
  }
};

export const deleteUser = (id) => {
  return dispatch => {
    return (
      fetch(`${API_URLS.BASE}${API_URLS.DELETE_USER}${id}`, {method: 'delete'})
        .then(() => (
          dispatch(removeUser(id))
        ))
    );
  }
};

export const editUser = (id, value) => {
  return dispatch => {
    return (
      fetch(`${API_URLS.BASE}${API_URLS.DELETE_USER}${id}`, {method: 'patch'})
        .then(() => (
          dispatch(changeUser(id, value))
        ))
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

    case ACTION_TYPES.DELETE_USER:
      return {
        ...state,
        users: state.users.reduce((acc, user) => {
          if (user.id === action.payload) {
            return [...acc];
          }

          return [...acc, user,];
        }, []),
      };

    case ACTION_TYPES.EDIT_USER:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.payload.id) {
            return ({
              ...user,
              first_name: action.payload.value,
            })
          }

          return user;
        }),
      };

    default:
      return state;
  }
}

const composeEnhancers = (typeof window !== 'undefined'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
