import React, { useState, useContext } from "react";
import { QuestionList } from "../Helper/QuestionList";
import { QuizContext } from "../Helper/Contexts";

function QuizMain() {
    const { score, setScore, setQuizBoard } = useContext(QuizContext); //Destructuring the Score from App.js
    const [currentQuestion, setCurrentQuestion] = useState(0); //Default first question from QuestionList 
    const [optionChosen, setOptionChosen] = useState("");//onClick to for optionChose

    const nextQuestion = () => {
        // how to add the score if it is correct
        if (QuestionList[currentQuestion].answer == optionChosen) { //if currentQuestion with answer is true then Add 1 to score
            setScore(score + 1);
        }
        console.log(score);
        // how to move to next question
        setCurrentQuestion(currentQuestion + 1); //when setCurrentQuestion = currentQuestion+ 1 then move to next question
    };

    const finishQuiz = () => {
        if (QuestionList[currentQuestion].answer == optionChosen) {
            setScore(score + 1);
        }
        console.log(score);
        // when you click the finish button then setQuizBoard from "menu" to "endScreen" which will display the EndScreen component
        setQuizBoard("endScreen"); //when setCurrentQuestion = currentQuestion+ 1 then move to next question
    };
    return (
        <div className="container Quiz">
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="question">
                            <h2>Q: {QuestionList[currentQuestion].prompt}</h2> {/* prompt is question from QuestionList file */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="options">
                            <p>A: <button onClick={() => setOptionChosen("A")}>{QuestionList[currentQuestion].optionA}{" "}</button></p>
                            <p>B: <button onClick={() => setOptionChosen("B")}>{QuestionList[currentQuestion].optionB}{" "}</button></p>
                            <p>C: <button onClick={() => setOptionChosen("C")}>{QuestionList[currentQuestion].optionC}{" "}</button></p>
                            <p>D: <button onClick={() => setOptionChosen("D")}>{QuestionList[currentQuestion].optionD}{" "}</button></p>
                        </div>
                    </div>

                    <div className="row">
                        <div>
                            {/* if we are in last Question  Display finish button*/}
                            {currentQuestion == QuestionList.length - 1 ? (
                                <button onClick={finishQuiz} className="btn btn-dark">Finish Question</button>
                            ) : (
                                <button onClick={nextQuestion} className="btn btn-dark">Next Question</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizMain;
