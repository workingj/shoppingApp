import { updateItem, deleteItem } from "../utils/net.js";

export default function Entry({ item, setPopup, setValue, cache, popup }) {
  return (
    <div className="Entry">
      <div
        className="iconBtn icon-delete btn"
        id="deleteButton"
        onClick={(e) => {
          cache.current = { id: e.target.id, item: e.target.innerHTML };
          deleteItem(item._id);
          setValue("delete" + e.target.id);
        }}
        >
        &#xe800;
      </div>
      <span
        id={item._id}
        className="btn title"
        data-check={item.checked}
        onClick={(e) => {
          cache.current = { id: e.target.id, item: e.target.innerHTML };
          popup.current.text = "Eintrag ändern";
          popup.current.func = updateItem;
          setPopup(true);
          setValue("update item" + e.target.innerHTML);
        }}
      >
        {item.item}
      </span>
      <div
        className="iconBtn icon-check btn"
        id="checkButton"
        data-id={item._id}
        onClick={(e) => {
          let target = document.getElementById(e.target.dataset.id);
          if (target.dataset.check == "false") {
            target.dataset.check = "true";
            cache.current = {
              id: target.id,
              item: target.innerHTML,
              checked: true,
            };
          } else {
            target.dataset.check = "false";
            cache.current = {
              id: target.id,
              item: target.innerHTML,
              checked: false,
            };
          }
          updateItem(cache.current);
          setValue("update checked" + target.id);
        }}
      >
        &#xe802;
      </div>
    </div>
  );
}
