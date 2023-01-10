import axios, {AxiosError} from "axios";
import {ActionTypes, IAction} from "../../types/types";
import {Dispatch} from "redux";
import {shuffle} from "../../utils/utils";
interface IParams {
    category: string | null ;
    difficulty: string | null;
}

export const getQuizzes = ({category, difficulty}: IParams) => {
    return async (dispatch: Dispatch<IAction>) => {
        try {
            dispatch({type: ActionTypes.FETCH_QUIZZ})
            const response = await axios.get(`https://opentdb.com/api.php?`, {
                params: {
                    'amount': 10,
                    'category': category === 'sport' && 21 || category === 'computer science' && 18 || category === 'animals' && 27 || category === 'comics' && 29,
                    'difficulty': difficulty,
                    'type': 'multiple'

                }
            });
            const correctRes = response.data.results.map( (obj: any) => {
                let answers = obj.incorrect_answers;
                answers.push(obj.correct_answer);
                shuffle(answers);
                return {question: obj.question,
                    correctAnswer: obj.correct_answer,
                    answers: answers
                }
            })
            console.log(correctRes)
            dispatch({type: ActionTypes.FETCH_QUIZZ_SUCCESS, payload: correctRes})
        } catch (e: unknown ) {
            const error = e as AxiosError;
            console.log(error.message)
            dispatch({type: ActionTypes.FETCH_QUIZZ_ERROR, payload: error.message})
        }


    }
}