import styles from "./Main.module.css";
import Quiz from "../Quiz/Quiz";
import Money from "../Money/Money";
import Timer from "../Timer/Timer";
import data from "./Data";

import { useState } from "react";

function Main() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("R$ 0,00");

  return (
    <main className={styles.container}>
      <section>
        {stop ? (
          <h1>Você ganhou: {earned} </h1>
        ) : (
          <>
            <div>
              <Timer setStop={setStop} questionNumber={questionNumber} />
            </div>
            <div>
              <Quiz
                data={data}
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </div>
          </>
        )}
      </section>
      <Money
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
        setEarned={setEarned}
      />
    </main>
  );
}

export default Main;
