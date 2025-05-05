import React from "react";

const TextReverse = ({ text, setText }) => {
  const handleReverse = () => {
    const reversedText = text.split("").reverse().join("");
    setText(reversedText);
  };

  return (
    <div>
    <button className="btn btn-custom-primary mx-2 btn-tall " onClick={handleReverse}>
      Reverse Text
    </button>
    </div>
  );
};

export default TextReverse;
