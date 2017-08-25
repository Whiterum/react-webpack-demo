import React from 'react';
import ReactDOM, {render} from 'react-dom';
import router from './router/router';
import store from './redux/store/store';
import {Provider} from 'react-redux';

// let store = {}

store.subscribe(() => { //监听state变化
    //console.log(store.getState())
});

render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('app')
)
