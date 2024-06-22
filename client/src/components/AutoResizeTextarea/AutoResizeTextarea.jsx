import React, { useRef, useEffect } from "react";

const AutoResizeTextarea = ({
  defaultValue,
  onChange,
  placeHolder,
  classname,
  AutoFocus,
  Rows
}) => {
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
    onChange(e);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, []);

  return (
    <textarea
      type="text"
      placeholder={placeHolder}
      className={classname}
      ref={textareaRef}
      defaultValue={defaultValue}
      onChange={handleInput}
      autoFocus={AutoFocus}
      rows={Rows}
    />
  );
};

export default AutoResizeTextarea;
