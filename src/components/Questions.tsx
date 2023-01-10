import React, {useState} from 'react';
import styles from '../styles/Questions.module.css';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {FidgetSpinner} from 'react-loader-spinner'
import Answer from "./Answer";
const Questions = () => {
    const quizes = useTypedSelector(state => state.quizz.quizzes);
    const [numberQuestion, setNumberQuestion] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)

    if (quizes.length > 0) {
        return (
            <div className={styles.questions__wrapper}>
                {numberQuestion < quizes.length
                    ? <div>
                        <div className={styles.question}>{quizes[numberQuestion].question}
                        <div className={styles.question__count}>{numberQuestion + 1}/{quizes.length}</div>
                        </div>
                        <div className={styles.answers__wrapper}>
                            {quizes[numberQuestion].answers.map(answer => <Answer correctAnswers={correctAnswers} setCorrectAnswers={setCorrectAnswers} setNumberQuestion={setNumberQuestion} numberQuestion={numberQuestion} answer={answer}/>)}


                        </div>
                    </div>
                    : <div className={styles.result}>You have <span>{correctAnswers}</span> correct answers out of <span>{quizes.length}</span></div>}

            </div>
        );
    } else return <FidgetSpinner width={'200'} height={'200'} wrapperStyle={{display: 'block', margin: '200px auto 0'}}/>


};

export default Questions;