import React from 'react';
import { useSelector } from 'react-redux';

export default function StateReader() {
    const user = useSelector(state => state);
    const itemCount = useSelector(state => state.items.length); // Get the number of elements in the store

    return (
        <div>
            <label htmlFor="stateInput">{JSON.stringify(user)}</label><br/><br/><br/>
            <label htmlFor="itemCount">Number of items in store: {itemCount}</label>
        </div>
    );
}