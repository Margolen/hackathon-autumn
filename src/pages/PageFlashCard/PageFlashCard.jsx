import "./PageFlashCard.scss";

import { useEffect, useState } from "react";

import tasks_easy from "../../components/questions_easy.json";
import tasks_hard from "../../components/questions_hard.json";

import FlashCard from "../../components/FlashCard/FlashCard";

export default function PageFlashCard() {
  const [count, setCount] = useState(0);
  const [flipCount, setFlipCount] = useState(0);
  const [tasks, setTasks] = useState(
    [...tasks_easy].sort(() => Math.random() - 0.5)
  );

  function handlePrev() {
    if (count !== 0) {
      setCount(count - 1);
    }
  }

  function handleNext() {
    if (count < tasks.length - 1) {
      setCount(count + 1);
    }
  }

  function handleFlip() {
    setFlipCount(flipCount + 1);
  }

  return (
    <>
      <div className="page-flash-card">
        <button className="switch" onClick={handlePrev}>
          Предыдущий вопрос
        </button>
        <FlashCard onFlip={handleFlip} task={tasks[count]} key={count} />
        <button className="switch" onClick={handleNext}>
          Следующий вопрос
        </button>
      </div>
      <div className="counter">Изучено вопросов: {flipCount}</div>
    </>
  );
}
