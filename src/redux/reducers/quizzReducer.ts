import {ActionTypes, IAction, IQuizzes} from "../../types/types";
const initialState: IQuizzes = {
    isLoading: false,
    categories: ['sport', 'comics', 'computer science', 'animals'],
    difficulties: ['easy', 'medium', 'hard'],
    activeCategory: '',
    error: null,
    quizzes: []
}
const quizzReducer = (state = initialState, action: IAction): IQuizzes => {
    switch (action.type) {
        case ActionTypes.FETCH_QUIZZ:
            return {...state, isLoading: true}
        case ActionTypes.FETCH_QUIZZ_SUCCESS:
            return {...state, isLoading: false, quizzes: action.payload }
        case ActionTypes.FETCH_QUIZZ_ERROR:
            return {...state, isLoading: false, error: action.payload}
        case ActionTypes.SET_CATEGORY:
            return {...state, activeCategory: action.payload}
        default: return state
    }
}
export default quizzReducer;