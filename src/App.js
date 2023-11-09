import Listgroup from "./components/ListGroup";
import Alerts from "./components/Alerts";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["Delhi", "Pune", "Mathura"];
  let listOfCities = "List of cities: Geronimo";
  // This is how we pass function implementation as props in the element.
  const handleItemSelect = (item: string) => {
    console.log("Hello Geronimo: ", item);
  };

  const [alertVisible, alertVisibility] = useState(false);
  return (
    <div>
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
      <Button onClick={() => alertVisibility(!alertVisible)}>
        Close alert
      </Button>
    </div>
  );
}

export default App;
