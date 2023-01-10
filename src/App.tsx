import React, {FC, useEffect} from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {getQuizzes} from "./redux/thunk-creators";
import {Dispatch} from "redux";
import WelcomeCategories from "./components/WelcomeCategories";
import {useNavigate, Routes, Route} from "react-router-dom"
import Questions from "./components/Questions";

const App: FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        navigate('welcome');
    }, [])
    return (
        <div className="App">
            <Routes>
                <Route path={'/welcome'} element={<WelcomeCategories/>}/>
                <Route path={'/questions'} element={<Questions/>}/>
            </Routes>
        </div>
    );
}

export default App;
