import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CreateAppStore from './store';
import { VisibilityFilters } from './Actions';

// Define um estado incial
const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

const store = CreateAppStore(initialState);
debugger;
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
