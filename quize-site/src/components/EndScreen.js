import React, { useContext } from "react";
import { QuizContext } from "../Helper/Contexts";
import { QuestionList } from "../Helper/QuestionList";
import "../App.css";

function EndScreen () {
    const { score, setScore, setQuizBoard} = useContext(QuizContext);
    
    const restartQuiz = () => {
        setScore(0); //When you click the Restart button setScore to 0 
        setQuizBoard("menu") //quizBoard screen change to menu component which is first page
    }
    return (
        <div className="EndScreen">
            {" "}
            <h3>Quiz Finished</h3>
            <h3>{score} / {QuestionList.length}</h3>
            <button onClick={restartQuiz} className="btn btn-dark">Restart Quiz</button>
        </div>
    )
}

export default EndScreen;
