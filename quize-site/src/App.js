import React, { useState } from "react";
import './App.css';
import Quiz from "./components/Quiz";
import Menu from "./components/Menu";
import EndScreen from "./components/EndScreen";

import { QuizContext } from "./Helper/Contexts";

function App() {
  const [quizBoard, setQuizBoard] = useState("menu"); //to make this var as global state create Contexts.js from Helper folder
  const [score, setScore] = useState(0); //score the point to add the value default is 0

  return (
    <div className="container-fluid App">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-10 col-md-9 col-lg-7 quizBox">
          <div className="row d-flex justify-content-center">
            <div className="col-12 header">
              <h1>Quiz App</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 main">
            <QuizContext.Provider value={{ quizBoard, setQuizBoard, score, setScore }} >
            {quizBoard === "menu" && <Menu />}   {/* if quizBoard === "menu"  then display the <Menu/> components*/}
            {quizBoard === "quiz" && <Quiz />}   {/* same as above but in quiz*/}
            {quizBoard === "endScreen" && <EndScreen />}   {/* same as above but in endScreen*/}
          </ QuizContext.Provider >
            </div>
          </div>
        </div>
      </div>

    </div>
    // <div className="App">
    //   <h1>Quiz App</h1>

    //   <QuizContext.Provider value={{ quizBoard, setQuizBoard, score, setScore }} >
    //     {quizBoard === "menu" && <Menu />}   {/* if quizBoard === "menu"  then display the <Menu/> components*/}
    //     {quizBoard === "quiz" && <Quiz />}   {/* same as above but in quiz*/}
    //     {quizBoard === "endScreen" && <EndScreen />}   {/* same as above but in endScreen*/}
    //   </ QuizContext.Provider >
    // </div>
  );
}

export default App;
