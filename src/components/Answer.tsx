import React, {useState} from 'react';
import styles from "../styles/Questions.module.css";
import {useTypedSelector} from "../hooks/useTypedSelector";
interface AnswerProps {
    correctAnswers: number;
    setCorrectAnswers: (correct: number) => void
    answer: string;
    numberQuestion: number;
    setNumberQuestion: (numberQuestion: number) => void;
}
const Answer = ({answer,correctAnswers, setCorrectAnswers, numberQuestion, setNumberQuestion}: AnswerProps) => {
    const quizes = useTypedSelector(state => state.quizz.quizzes);
    const [style, setStyle]  = useState<null | boolean>(null)
    let resultClass = '';
    if (style === true) {
        resultClass = styles.correct
    } else if (style === false){
        resultClass = styles.incorect
    }

    return (
        <div className={resultClass} onClick={() => {
            if (answer === quizes[numberQuestion].correctAnswer) {
                setStyle(true);
                setCorrectAnswers(correctAnswers + 1)
            } else if (answer !== quizes[numberQuestion].correctAnswer) {
                setStyle(false);

            }
            setTimeout(() => {
                setStyle(null);
                setNumberQuestion(numberQuestion + 1)
            }, 200)


        }}>{answer}</div>
    );
};

export default Answer;