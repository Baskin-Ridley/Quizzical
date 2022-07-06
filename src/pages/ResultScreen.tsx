import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleScoreChange } from '../redux/actions';
import Confetti from "react-confetti"
const ResultScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {
        score,
        amount_of_questions
    } = useSelector((state: any) => state);
    function clickHandler(){
        dispatch(handleScoreChange(0))
        navigate("/");

    }
  return (
    <div className="resultScreen">
      {<Confetti />}
        <h1>Final Score</h1>
        <div className="score">{score} / {amount_of_questions}</div>
        <button className="playAgain" onClick={clickHandler}>Play Again!</button>
    </div>
  )
}

export default ResultScreen