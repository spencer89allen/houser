import { createStore } from 'redux';

import wizardReducer from './wizardReducer';

export default createStore(wizardReducer, /* preloadedState, */
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());