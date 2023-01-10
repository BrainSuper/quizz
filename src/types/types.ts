export interface IQuizz {
    question: string;
    correctAnswer: string;
    answers: string[];
}
export enum ActionTypes {
    FETCH_QUIZZ = 'FETCH_QUIZZ',
    FETCH_QUIZZ_SUCCESS = 'FETCH_QUIZZ_SUCCESS',
    FETCH_QUIZZ_ERROR = 'FETCH_QUIZZ_ERROR',
    SET_CATEGORY = 'SET_CATEGORY'
}
interface FetchQuizz {
    type: ActionTypes.FETCH_QUIZZ
}
interface FetchQuizzSuccess {
    type: ActionTypes.FETCH_QUIZZ_SUCCESS
    payload: IQuizz[]
}
interface FetchQuizzError {
    type: ActionTypes.FETCH_QUIZZ_ERROR
    payload: string
}
interface SetCategory {
    type: ActionTypes.SET_CATEGORY
    payload: string
}
export type IAction = FetchQuizz | FetchQuizzSuccess | FetchQuizzError | SetCategory

export interface IQuizzes {
    isLoading: boolean;
    error: null | string;
    quizzes: IQuizz[];
    categories: string[];
    activeCategory: string;
    difficulties: string[];
}