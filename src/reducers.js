// reducers.js

import { ADD_ITEM, REMOVE_ITEM } from "./actions";

const initialState = {
    items: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return { ...state, items: [...state.items, action.payload] };
        case REMOVE_ITEM:
            return { ...state, items: state.items.slice(0, -1) };
        default:
            return state;
    }
};

export default reducer;
