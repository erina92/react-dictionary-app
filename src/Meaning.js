import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="underline decoration-pink-500 capitalize mt-2">
        {props.meaning.partOfSpeech}
      </h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 1) {
          return (
            <div key={index} className="text-justify">
              <p className="mt-2">{definition.definition}</p>
              <p className="italic text-sm mt-2">{definition.example}</p>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
