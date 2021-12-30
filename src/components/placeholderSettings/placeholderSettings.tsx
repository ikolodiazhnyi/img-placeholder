import { ActionCreatorWithPayload, PayloadAction } from "@reduxjs/toolkit";

import { useDispatch, useSelector } from "react-redux";
import { getWidth } from "../../store/selectors";
import { setBg, setCaption, setHeight, setWidth } from "../../store/slices";
import "./styles.css";

const PlaceholderSettings = () => {
  const width = useSelector(getWidth);
  const dispatch = useDispatch();
  const handleEvent = (
    event: React.ChangeEvent<HTMLInputElement>,
    method: ActionCreatorWithPayload<string, string>
  ) => {
    dispatch(method(event.target.value));
  };
  return (
    <div className="wrapper-settings">
      <div id="s1">
        <input
          onChange={(e) => handleEvent(e, setWidth)}
          type="text"
          placeholder="Width:"
        />
        <input
          onChange={(e) => handleEvent(e, setHeight)}
          type="text"
          placeholder="Height:"
        />
      </div>
      <div id="s2">
        <input
          onChange={(e) => handleEvent(e, setBg)}
          type="text"
          placeholder="Background color:"
        />
        <input
          onChange={(e) => handleEvent(e, setCaption)}
          type="text"
          placeholder="Caption:"
        />
      </div>
    </div>
  );
};

export default PlaceholderSettings;
