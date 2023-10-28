import { useEffect, useState } from "react";

import "./FlashCard.scss";

export default function FlashCard({ task, onFlip }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    console.log(task);
  }, [task]);

  function flip() {
    setFlipped(true);
    onFlip();
  }

  return (
    <div className="flash-card">
      <div className="main">
        <div className="question">{task.question || ""}</div>
      </div>
      <div className="action">
        {flipped ? (
          <div className="answer">{task.answer || ""}</div>
        ) : (
          <button className="flip-button" onClick={flip}>
            Проверить
          </button>
        )}
      </div>
    </div>
  );
}
