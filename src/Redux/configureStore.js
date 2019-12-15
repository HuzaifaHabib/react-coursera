import {createStore} from 'redux';
import {Reducer, initialState} from "./reducer"



const ConfigureStore= () => {
    
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
}


export default ConfigureStore;