import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms mt-2">
        <p>
          <strong>Synonyms:</strong>
        </p>
        {props.synonyms.map(function (synonym, index) {
          if (index < 4) {
            return <p key={index}>{synonym}</p>;
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
