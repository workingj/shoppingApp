import { useEffect, useState } from "react";

export default function Popup({ trigger, setPopup, setValue, cache, popup }) {
  const [state, setState] = useState("");

  return trigger ? (
    <div
      className="popup"
      onClick={(e) => {
        e.stopPropagation();
        setPopup(false);
        setValue("close");
      }}
    >
      <div
        className="popup-inner"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          className="btn closeBtn icon-delete"
          onClick={(e) => {
            e.stopPropagation();
            setPopup(false);
            setValue("close");
          }}
        >
          &#xe800;
        </button>
        {popup.current.text}
        <input
          id="value"
          type="text"
          autoFocus
          value={cache.current.item}
          onChange={(e) => {
            cache.current.item = e.target.value;
            e.stopPropagation();
            setState(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              cache.current.item = e.target.value;
              popup.current.func({
                id: cache.current.id,
                item: cache.current.item,
              });
              setState(e.target.value);
              setValue(e.target.value);
              setPopup(false);
            }
          }}
        />
        <button
          className="btn okBtn icon-check"
          onClick={(e) => {
            e.stopPropagation();
            let item = document.getElementById("value").value;
            popup.current.func({
              id: cache.current.id,
              item: cache.current.item,
            });
            setState(item.value);
            setValue(item.value);
            setPopup(false);
          }}
        >
          &#xe802;
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}
