import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="underline decoration-pink-600 mt-2">
        {props.meaning.partOfSpeech}
      </h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 3) {
          return (
            <div key={index} className="text-justify">
              <p className="mt-2">
                <strong>Definition:</strong> {definition.definition}
              </p>
              <p className="italic text-sm mt-2">
                <strong>Example:</strong>
                <span className="text-pink-500"> {definition.example}</span>
              </p>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
