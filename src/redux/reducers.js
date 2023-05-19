import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { importApi } from 'components/ImportBox/services';

const createRootReducer = history => {
  const appReducer = combineReducers({
    router: connectRouter(history),
    form,
    [importApi.reducerPath]: importApi.reducer,
  });
  // reset the state of a redux store
  const rootReducer = (state, action) => {
    if (action.type === '@@common/RESET_REDUCER' && action.payload) {
      state[action.payload] = undefined;
    }
    return appReducer(state, action);
  };
  return rootReducer;
};

export const history = createBrowserHistory();
export const rootReducer = createRootReducer(history);

export const middleware = [
  routerMiddleware(history),
  importApi.middleware
];
