import styles from "./Quiz.module.css";
import { useState, useEffect } from "react";
import useSound from "use-sound";
import play from "../../assets/sounds/play.mp3";
import correct from "../../assets/sounds/correct.mp3";
import wrong from "../../assets/sounds/wrong.mp3";

function Quiz({ data, setStop, questionNumber, setQuestionNumber }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState();
  const [startPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    startPlay();
  }, [startPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (answer) => {
    setSelectedAnswer(answer);
    setClassName(styles.active);
    delay(1000, () =>
      setClassName(answer.correct ? styles.correct : styles.wrong)
    );
    delay(1000, () => {
      if (answer.correct) {
        if (selectedAnswer) return;
        correctAnswer();
        delay(1000, () => {
          setQuestionNumber((previous) => previous + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setStop(true);
        });
      }
    });
  };

  return (
    <div className={styles.quizContainer}>
      <div className={styles.question}>{question?.question}</div>
      <div className={styles.answers}>
        {question?.answers.map((answer, idx) => (
          <div
            key={idx}
            className={selectedAnswer === answer ? className : styles.answer}
            onClick={() => handleClick(answer)}
          >
            {answer.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
