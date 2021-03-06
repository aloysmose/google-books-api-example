import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { Provider } from 'react-redux';
import store from 'store';

describe('<Home />', (): void => {
    it('renders without crashing', (): void => {
        const container = document.createElement('div');
        ReactDOM.render(
            <Provider store={store}>
                <Home />
            </Provider>,
            container,
        );
        ReactDOM.unmountComponentAtNode(container);
    });
});
