import storage from 'redux-persist/lib/storage'
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from './Reducers/index';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk));

let persistor = persistStore(store, null, () => {
  // if you want to get restoredState
  // console.log("restoredState", store.getState());
});

export {store, persistor};