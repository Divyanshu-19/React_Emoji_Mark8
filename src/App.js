import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🎂": "Birthday Cake",
  "🎁": "Wrapped Gift",
  "🕯️": "Candle",
  "🍰": "Shortcake",
  "🎈": "Balloon",
  "🎊": "Confetti Ball",
  "🎉": "Party Popper",
  "🍾": "Bottle with Popping Cork"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [userInput, setUserInput] = useState("");

  function OnChangeHandler(event) {
    var emoji = event.target.value;
    emoticonIconHandler(emoji);
  }

  function emoticonIconHandler(emoji) {
    if (emoji in emojiDictionary) {
      setUserInput(emojiDictionary[emoji]);
    } else if (emoji === "") {
      setUserInput("");
    } else {
      setUserInput("Emoji not in database");
    }
  }

  return (
    <div className="App">
      <h1>Birthday Emoticon's</h1>
      <input onChange={OnChangeHandler}></input>
      <h2>{userInput}</h2>
      <ul>
        {emojiWeKnow.map(function (emoji) {
          return (
            <span
              key={emoji}
              onClick={() => emoticonIconHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.7rem", cursor: "pointer" }}
            >
              {emoji}
            </span>
          );
        })}
      </ul>
    </div>
  );
}
