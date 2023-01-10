import React, {useState} from 'react';
import styles from './../styles/WelcomeCategories.module.css'
import {Link} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IQuizzes} from "../types/types";
import {RootState} from "../redux/store";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {getQuizzes} from "../redux/thunk-creators";
interface IChosenQuizz {
    category: null | string;
    difficulty: null | string;
}

const WelcomeCategories = () => {
    const {categories} = useTypedSelector((state) => state.quizz)
    const difficulties = useTypedSelector(state => state.quizz.difficulties)
    const dispatch:Dispatch<any> = useDispatch();
    const [chosenQuizz, setChozenQuizz] = useState<IChosenQuizz>({category: null, difficulty: null});
    const [isChoosenCat, setIsChoosenCat] = useState(false);
    return (
        <div className={styles.app__wrapper}>
            <div className={styles.hello}>
                <div>Hello, this is a <span>QUIZ</span>!</div>
                Give the correct answer to 10 questions, checking your knowledge. Well, choose the category you like and
                start testing your brain!
            </div>
            <div className={styles.categories}>
                {isChoosenCat
                    ? difficulties.map(diff => <Link onClick={() => {
                        dispatch(getQuizzes({category: chosenQuizz.category, difficulty: diff}));
                    }
                    } to={'/questions'}>{diff}</Link>)
                    : categories.map((cat: string) => <div onClick={() => {
                        setChozenQuizz({...chosenQuizz, category: cat});
                        setIsChoosenCat(true);
                }}>{cat}</div>)}
            </div>
        </div>
    );
};

export default WelcomeCategories;