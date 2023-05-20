import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <div className="Synonyms mt-2">
        <p>
          <strong>Synonyms:</strong>
        </p>
        {props.synonyms.map(function (synonym, index) {
          return <p key={index}> {synonym} </p>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
