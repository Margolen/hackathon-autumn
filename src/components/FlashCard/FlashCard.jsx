import { useState } from "react";

import "./FlashCard.scss";

function FlashCard({ task, onFlip }) {
  const [flipped, setFlipped] = useState(false);

  function flip() {
    setFlipped(true);
    onFlip();
  }

  return (
    <div styleName="flash-card">
      <div styleName="main">
        <div styleName="english">{word.english}</div>
        <div styleName="transcription">{word.transcription}</div>
      </div>
      <div styleName="action">
        {flipped ? (
          <div styleName="russian">{word.russian}</div>
        ) : (
          <button styleName="flip-button" onClick={flip} ref={flipButtonRef}>
            Проверить
          </button>
        )}
      </div>
    </div>
  );
}
