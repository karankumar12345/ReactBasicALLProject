import React, { useState } from "react";
import Model from "./Model";

function ModelPopup() {
  const [showModelPopup, setShowModelPopup] = useState(false);

  function handleToggleModelPopup() {
    setShowModelPopup(!showModelPopup);
  }
  function onClose(){
    setShowModelPopup(false)
  }
  return (
    <div style={{backgroundColor:'yellow', height:'100vh'}}  h>
      <button style={{marginTop:'5%', backgroundColor:'red ', height:'30px', fontSize:'20px', borderRadius:'5px'}} onClick={handleToggleModelPopup}>OPEN MODAL POPUP</button>
      {showModelPopup && (
        <Model body={<div> Hello friend this is your boss </div>} onClose={onClose}/>
      )}
    </div>
  );
}

export default ModelPopup;
