import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Routers from './router';
import { Provider } from 'react-redux';
import configStore from './redux/store';


const store = configStore();
ReactDOM.render(<Provider store={store}><Routers /></Provider>, document.getElementById('root'));
registerServiceWorker();
