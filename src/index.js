import React from 'React';
import { render } from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
    count=0
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT':
        return {
            count: state.count + 1
        };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return state;    
    }

    // return state;
    // we'll leave this blank for now
    // Which is the same as `return undefiend`;
}

const store = createStore(reducer);

const App = () => (
    <Provider store={store}>
        <Counter />
    </Provider>
);

render(<App />, document.getElementById('root'));