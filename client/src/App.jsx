import List from "./components/List.jsx";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");

  return (
    <>
        <h1>Einkaufsliste</h1>
      <List value={value} setValue={setValue}>
      </List>
    </>
  );
}
