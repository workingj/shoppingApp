import { useState, useRef, useEffect, memo } from "react";
import Entry from "./Entry.jsx";
import Popup from "./Popup.jsx";
import { createItem } from ".././utils/net.js";
import axios from "axios";

const VITE_APP_API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

export default memo(function List({ value, setValue, children }) {
  const [data, setData] = useState([]);
  const [popup, setPopup] = useState(false);
  const cache = useRef({ id: "", item: "", checked: false });
  const popTec = useRef({ text: "", func: undefined });

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`${VITE_APP_API_BASE_URL}/entries/`)
        .then((response) => {
          setData(response.data);
          console.log("Fetch all Entries:", response.data.length);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 1000);
  }, [value]);

  return (
    <main className="Liste">
      {children}
      {data.map((entry) => (
        <Entry
          key={entry._id}
          item={entry}
          setPopup={setPopup}
          setValue={setValue}
          cache={cache}
          popup={popTec}
        />
      ))}
      <button
        className="icon-add addBtn btn"
        onClick={(e) => {
          popTec.current.text = "Eintrag hinzufügen";
          popTec.current.func = createItem;
          cache.current.item = "";
          setPopup(true);
        }}
      >
        &#xe801;
      </button>
      <Popup
        trigger={popup}
        setPopup={setPopup}
        setValue={setValue}
        cache={cache}
        popup={popTec}
      />
    </main>
  );
});
