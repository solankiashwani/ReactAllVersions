import React, { useState } from 'react';
import Listgroup from "./components/ListGroup";
import Alerts from "./components/Alerts";
import Button from "./components/Button";
import FormWithDynamicFields from "./components/FormWithDynamicFields";

let items = ["Delhi", "Pune", "Mathura"];
let listOfCities = "List of cities: Geronimo";
// This is how we pass function implementation as props in the element.
const handleItemSelect = (item) => {
  console.log("Hello Geronimo: ", item);
};

const App = () => {
  const [alertVisible, alertVisibility] = useState(true);
  const [alertChangeCount, setAlertChangeCount] = useState(0);

  const toggleAlertVisibility = () => {
    alertVisibility(!alertVisible);
    setAlertChangeCount(alertChangeCount + 1);
  };

  return (
    <div>
      {/* <Header /> */}
      {/* This is how we pass function props */}
      <Listgroup
        items={items}
        heading={listOfCities}
        onSelectItem={handleItemSelect}
      />
      {alertVisible && (
        <Alerts>
          Hello Everyone: Geronimo
          <h1> There you go</h1>
        </Alerts>
      )}
      <Button onClick={toggleAlertVisibility}>
        Close alert
      </Button>
      <p>Alert visibility changed {alertChangeCount} times</p>
      <FormWithDynamicFields />
      {/* <Footer /> */}
    </div>
  );
}

export default App;