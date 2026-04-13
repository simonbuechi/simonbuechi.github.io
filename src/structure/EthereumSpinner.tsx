import React, { useState } from "react";

const EthereumSpinner = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    console.log("click");
    if (!clicked) {
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 500);
    }
  };

  return (
    <div onClick={handleClick}>
      <div className={clicked ? "eth click" : "eth"}>
        <div className="bottom">
          <div className="left" />
          <div className="right" />
          <div className="up" />
          <div className="down" />
        </div>
        <div className="top">
          <div className="left" />
          <div className="right" />
          <div className="up" />
          <div className="down" />
        </div>
      </div>
    </div>
  );
};

export default EthereumSpinner;
