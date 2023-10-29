import "./Quiz.scss";

import easyList from "../questions_easy.json";
import hardList from "../questions_hard.json";

function Quiz() {
  return (
    <div className="quiz-wrapper">
      <div>
        {easyList.map(function (card, id) {
          return (
            <div className="quiz-item">
              <div className="quiz-line">
                <div className="quiz-card">{card.question}</div>
              </div>
              <fieldset>
                <div>
                  <div>
                    <input
                      id="option0"
                      type="radio"
                      className="quiz-checkbox"
                    />
                    <label for="option0">{card.answer}</label>
                  </div>
                  {card.fakeanswers.map((fakeAnswer, id) => {
                    return (
                      <div>
                        <input
                          id={"option" + (id + 1)}
                          type="radio"
                          className="quiz-checkbox"
                        />
                        <label for={"option" + (id + 1)}>{fakeAnswer}</label>
                      </div>
                    );
                  })}
                </div>
              </fieldset>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Quiz;
