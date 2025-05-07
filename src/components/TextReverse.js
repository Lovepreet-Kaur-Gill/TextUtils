import React from "react";

const TextReverse = ({ text, setText }) => {
  const handleReverse = () => {
    const reversedText = text.split("").reverse().join("");
    setText(reversedText);
  };

  return (
    <div>
    <button disabled={text.length===0}  className="btn btn-custom-primary mx-2 btn-tall my-1" onClick={handleReverse}>
      Reverse Text
    </button>
    </div>
  );
};

export default TextReverse;
