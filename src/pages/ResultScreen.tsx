import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const ResultScreen = () => {
    const navigate = useNavigate()
    const {
        score,
        amount_of_questions
    } = useSelector((state: any) => state);
    function clickHandler(){
        navigate("/");

    }
  return (
    <div>
        <h1>ResultScreen</h1>
        <div>Score: {score} / {amount_of_questions}</div>
        <button onClick={clickHandler}>Play Again</button>
    </div>
  )
}

export default ResultScreen