import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

const ReactQuillFile = () => {
  const [value, setValue] = useState("");
    return <ReactQuill theme="snow" value={value} onChange={setValue} data={ value} />;
};

export default ReactQuillFile;
