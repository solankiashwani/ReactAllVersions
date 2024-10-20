import React, { useEffect, useState, useCallback } from 'react';
import Listgroup from "./components/ListGroup";
import Alerts from "./components/Alerts";
import Button from "./components/Button";
import FormWithDynamicFields from "./components/FormWithDynamicFields";
import { useAppContext } from './contexts/AppContext';
import { addItem, removeItem } from './actions'
import { useDispatch } from 'react-redux';
import StateReader from './components/StateReader'; // Import StateReader component


let items = ["Delhi", "Pune", "Mathura"];
let listOfCities = "List of cities: Geronimo";

const App = () => {
  const [alertVisible, alertVisibility] = useState(true);
  const [alertChangeCount, setAlertChangeCount] = useState(0);
  const [listGroupSelectCount, setListGroupSelectCount] = useState(0);
  const { alertCount, setAlertCount } = useAppContext();
  const toggleAlertVisibility = useCallback(() => {
    alertVisibility(!alertVisible);
    setAlertChangeCount(alertChangeCount + 1);
    const newAlertCount = alertCount + 33;
    setAlertCount(newAlertCount);
    console.log("Alerts Geronimo: ", newAlertCount);
  }, [alertVisible, alertChangeCount]);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Select count changes to: ', listGroupSelectCount)
  }, [listGroupSelectCount]);

  const handleCheckStore = () => {
    console.log("Check Store clicked");
  }

  return (
    <div>
      <Listgroup
        items={items}
        heading={listOfCities}
        onSelectItem={setListGroupSelectCount}
      />
      {alertVisible && (
        <Alerts>
          Hello Everyone: Geronimo
          <h1> There you go</h1>
          <b>YO TO</b>
        </Alerts>
      )}
      <Button onClick={toggleAlertVisibility}>
        Close alert
      </Button>
      <p>Alert visibility changed {alertChangeCount} times</p>
      <FormWithDynamicFields />

      <Button onClick={() => {
        dispatch(addItem({ id: Date.now(), name: 'New Item'}));
      }}>
        Add to Store
      </Button>

      <Button onClick={() => {
        dispatch(removeItem({ id: Date.now(), name: 'New Item', quantity: 1 }));
      }}>
        Remove from Store
      </Button>

      <Button onClick={() => {
        dispatch(addItem({ id: Date.now(), name: 'New Item', quantity: 'Geronimo'}));
      }}>
        Add another type
      </Button>

      <StateReader /> {/* Render StateReader component */}
    </div>
  );
}

export default App;