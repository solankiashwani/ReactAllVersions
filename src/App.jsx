import React, { useEffect, useState, useCallback } from 'react';
import Listgroup from "./components/ListGroup";
import Alerts from "./components/Alerts";
import Button from "./components/Button";
import FormWithDynamicFields from "./components/FormWithDynamicFields";
import { useAppContext } from './contexts/AppContext';
import './App.css'; // Ensure the CSS file is imported

let items = ["Delhi", "Pune", "Mathura"];

const handleItemSelect = (item) => {
  console.log("Hello Geronimo: ", item);
};

const App = () => {
  const [alertVisible, alertVisibility] = useState(true);
  const [alertChangeCount, setAlertChangeCount] = useState(0);
  const [listGroupSelectCount, setListGroupSelectCount] = useState(0);
  const [listGroupVisible, setListGroupVisible] = useState(false);
  const [hideNextComponents, setHideNextComponents] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  // TEST
  const { alertCount, setAlertCount } = useAppContext();

  const toggleAlertVisibility = useCallback(() => {
    alertVisibility(!alertVisible);
    setAlertChangeCount(alertChangeCount + 1);
    const newAlertCount = alertCount + 33;
    setAlertCount(newAlertCount);
    console.log("Alerts Geronimo: ", newAlertCount);
  }, [alertVisible, alertChangeCount]);

  const toggleListGroupVisibility = useCallback(() => {
    setListGroupVisible(!listGroupVisible);
  }, [listGroupVisible]);

  const toggleNextComponentsVisibility = useCallback(() => {
    setHideNextComponents(!hideNextComponents);
  }, [hideNextComponents]);

  const toggleFormVisibility = useCallback(() => {
    setFormVisible(!formVisible);
  }, [formVisible]);

  const renderToggleButtons = () => (
    <div className="button-container">
      <Button className="small-button" onClick={toggleListGroupVisibility}>
        {listGroupVisible ? 'Hide' : 'Show'} ListGroup
      </Button>
      <Button className="small-button" onClick={toggleNextComponentsVisibility}>
        {hideNextComponents ? 'Hide' : 'Show'} Alert Component
      </Button>
      <Button className="small-button" onClick={toggleFormVisibility}>
        {formVisible ? 'Hide' : 'Show'} Dynamic Field Form
      </Button>
    </div>
  );

  useEffect(() => {
    console.log('Select count changes to: ', listGroupSelectCount)
  }, [listGroupSelectCount]);

  return (
    <div className="app-container">
      {renderToggleButtons()}
      <div className="components-container">
        {listGroupVisible && (
          <Listgroup
            items={items}
            onSelectItem={setListGroupSelectCount}
          />
        )}
        {hideNextComponents && (
          <>
            {alertVisible && (
              <Alerts>
                Alert Component
                <h1> Alert Message: There you go</h1>
                <b>Jai Shree Ram</b>
              </Alerts>
            )}
            <Button onClick={toggleAlertVisibility}>
              Close alert
            </Button>
            <p>Alert visibility toggeled {alertChangeCount} times</p>
          </>
        )}
        {formVisible && <FormWithDynamicFields />}
      </div>
    </div>
  );
}

export default App;