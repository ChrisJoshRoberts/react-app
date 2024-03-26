import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(`Selected item: ${item}`);
  // };

  // return <div><ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem} /></div>

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      { alertVisible && <Alert onClose={() => setAlertVisible(false)}>
        Hello <span>World</span>{" "}
      </Alert>}
      <Button onClick={() => setAlertVisible(true)}> My Button</Button>
    </>
  );
}
export default App;
