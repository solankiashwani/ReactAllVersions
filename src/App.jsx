import React, { useEffect, useState, useCallback } from 'react';
import Listgroup from "./components/ListGroup";
import Alerts from "./components/Alerts";
import Button from "./components/Button";
import FormWithDynamicFields from "./components/FormWithDynamicFields";
import { useAppContext } from './contexts/AppContext';

let items = ["Delhi", "Pune", "Mathura"];
let listOfCities = "List of cities: Geronimo";

const handleItemSelect = (item) => {
  console.log("Hello Geronimo: ", item);
};

const App = () => {
  const [alertVisible, alertVisibility] = useState(true);
  const [alertChangeCount, setAlertChangeCount] = useState(0);
  const [listGroupSelectCount, setListGroupSelectCount] = useState(0);

  // TEST
  const { alertCount, setAlertCount } = useAppContext();

  const toggleAlertVisibility = useCallback(() => {
    alertVisibility(!alertVisible);
    setAlertChangeCount(alertChangeCount + 1);
    const newAlertCount = alertCount + 33;
    setAlertCount(newAlertCount);
    console.log("Alerts Geronimo: ", newAlertCount);
  }, [alertVisible, alertChangeCount]);

  useEffect(() => {
    console.log('Select count changes to: ', listGroupSelectCount)
  }, [listGroupSelectCount]);

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
    </div>
  );
}

export default App;