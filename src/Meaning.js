import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="underline decoration-pink-500 capitalize mt-2">
        {props.meaning.partOfSpeech}
      </h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="mt-2">{definition.definition}</p>
            <p className="underline decoration-sky-500">{definition.example}</p>
          </div>
        );
      })}
    </div>
  );
}
