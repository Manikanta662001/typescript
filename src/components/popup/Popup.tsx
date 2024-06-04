import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./Popup.css";

function Popup() {
  const [show, setShow] = useState(false);
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log("CURRENTTARGET::::", e.target, e.currentTarget);
    if (e.target === e.currentTarget) {
      setShow(false);
    }
  };
  return (
    <div>
      <Button variant="contained" onClick={() => setShow(!show)}>
        Show Popup
      </Button>
      {show ? (
        <div className="popup-container" onClick={(e) => handleOutsideClick(e)}>
          <div className="popup">
            <h1>Header</h1>
            <Button
              className="cls-btn"
              onClick={() => setShow(false)}
              color="error"
              variant="outlined"
            >
              ❌
            </Button>
            <hr />
            <div className="popup-body">
              <p>Body</p>
            </div>
            <hr />
            <Button
              className="popup-closebutton"
              variant="contained"
              onClick={() => setShow(false)}
            >
              Close
            </Button>
            <Button className="popup-savebutton" variant="contained">
              Save
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Popup;
