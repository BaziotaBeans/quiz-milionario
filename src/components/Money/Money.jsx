import { useEffect, useMemo } from "react";
import styles from "./Money.module.css";

function Money({ questionNumber, setQuestionNumber, setEarned }) {
  const moneyPyramid = useMemo(
    () => [
      { id: 1, amount: "R$ 500" },
      { id: 2, amount: "R$ 1.000" },
      { id: 3, amount: "R$ 2.000" },
      { id: 4, amount: "R$ 3.000" },
      { id: 5, amount: "R$ 5.000" },
      { id: 6, amount: "R$ 10.000" },
      { id: 7, amount: "R$ 15.000" },
      { id: 8, amount: "R$ 20.000" },
      { id: 9, amount: "R$ 30.000" },
      { id: 10, amount: "R$ 50.000" },
      { id: 11, amount: "R$ 100.000" },
      { id: 12, amount: "R$ 150.000" },
      { id: 13, amount: "R$ 300.000" },
      { id: 14, amount: "R$ 500.000" },
      { id: 15, amount: "R$ 1.000.000" },
    ],
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(
        moneyPyramid.find((money) => money.id === questionNumber - 1).amount
      );
  }, [moneyPyramid, questionNumber, setEarned]);

  return (
    <div className={styles.moneyContainer}>
      <ul>
        {moneyPyramid.map((item) => (
          <li
            key={item.id}
            className={questionNumber === item.id ? styles.active : ""}
          >
            <span>{item.id}</span>
            <span>{item.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Money;
