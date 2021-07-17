import React, { useState } from "react";
import ProgressBar from "../ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["text/xml"];

  const changeHandler = (e) => {
    let selected = e.target.files;
 Array.from(selected).forEach((selected) =>{
  //  console.log(selected.name)
   if (selected && types.includes(selected.type)) {
    //  console.log(selected)
     setFile(selected);
     setError("");
   } else {
     setFile(null);
     setError("Formato incorrecto");
   }
 }
 );

  };
return (
  <form>
    <input type="file" onChange={changeHandler} multiple="multiple" />
    <div className="output">
      {error && <div className="error">{error}</div>}
      {file && <div>{file.name}</div>}
      {file && <ProgressBar file={file} setFile={setFile} />}
    </div>
  </form>
);

};

export default UploadForm;
