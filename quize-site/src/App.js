import React, { useState }from "react";
import './App.css';
import Quiz from "./components/Quiz";
import Menu from "./components/Menu";
import EndScreen from "./components/EndScreen";

function App() {
  const [quizBoard, setQuizBoard] = useState("menu"); //in useState ===""

    
  return (
    <div>
      
      {quizBoard === "menu" && <Menu />}   {/* if quizBoard === "menu"  then display the <Menu/> components*/} 
      {quizBoard === "quiz" && <Quiz />}   {/* same as above but in quiz*/} 
      {quizBoard === "endScreen" && <EndScreen />}   {/* same as above but in endScreen*/} 
    </div>
  );
}

export default App;
