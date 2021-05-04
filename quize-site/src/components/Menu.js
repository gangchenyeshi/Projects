import React, { useContext } from "react";
import { QuizContext } from "../Helper/Contexts";

const Menu = () => {
    const { quizBoard, setQuizBoard } = useContext(QuizContext); //Destructuring the thing global variable

    return (
        <div className="Quiz">
            {/* When i Click the Button then  setQuizBoard change from "menu" to "quiz" in App.js as de-structure as above */}
            <button
                className="btn btn-dark"
                onClick={() => {
                    setQuizBoard('quiz')
                }}>Start Quiz</button>
        </div>
        // <div className="Menu">
        //     {/* When i Click the Button then  setQuizBoard change from "menu" to "quiz" in App.js as de-structure as above */}
        //     <button onClick={() => {
        //         setQuizBoard('quiz')
        //     }}>Start Quiz</button>
        // </div>
    )
}

export default Menu;
