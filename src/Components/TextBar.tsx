import React, { cloneElement, useState } from "react";

export default function TextBar(_props: any) {
  const wordCount = () => {
    let count = 0;
    for (let i = 0; i < text.split(" ").length; i++) {
      if (text.split(" ")[i] === " ") {
        count++;
      }
    }
    text.split(" ").length - count;
  };

  const handleUpClick = () => {
    //console.log("UpperCase was clicked " + text);
    let newText = text.toLocaleUpperCase();
    setText(newText);
  };

  const handleUpClick2 = () => {
    //console.log("UpperCase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClClick = () => {
    //console.log("UpperCase was clicked " + text);
    let newText = "";
    setText(newText);
  };

  const handleChange = (_event: any) => {
    //console.log("On change");
    setText(_event.target.value);
  };

  const CopyHandle = () => {
    var text = document.getElementById("mybox");
    (text as HTMLInputElement).select();
    navigator.clipboard.writeText((text as HTMLInputElement).value);
  };

  const HandleExtraSpaces = () => {
    let newText: string[] = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container my-3 ">
        <div className="mb-3">
          <textarea
            onChange={handleChange}
            value={text}
            className="form-control"
            id="mybox"
            placeholder="Add Text"
          />
        </div>
        <button className="btn btn-primary my-1 mx-2" onClick={handleUpClick}>
          Convert to Uper Case
        </button>

        <button className="btn btn-primary my-2" onClick={handleUpClick2}>
          Convert to Lower Case
        </button>

        <button className="btn btn-primary my-2 mx-2" onClick={handleClClick}>
          Clear All Text
        </button>
        <button className="btn btn-primary my-2 mx-0" onClick={CopyHandle}>
          Copy All Text
        </button>

        <button
          className="btn btn-primary my-2 mx-2"
          onClick={HandleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-0">
        <h1>Your text summary</h1>
        <p>
          You Have Written{" "}
          <b>
            {" "}
            {
              text.split(" ").filter((element) => {
                return element.length != 0;
              }).length
            }{" "}
          </b>{" "}
          Words & <b> {text.length} </b> Characters
        </p>

        <p>
          Need{" "}
          <b>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length != 0;
              }).length}
          </b>{" "}
          Minutes To Read Above Text Completly.
        </p>

        <h1 style={{ position: "relative", right: "auto" }}>Preview</h1>
        <p>
          {text.length > 0
            ? text
            : "Enter Something In Text Area to preview ! "}
        </p>
      </div>
    </>
  );
}
