import React from 'react'
import { useSelector } from 'react-redux';
import { useAxios } from '../hooks/useAxios';

const QuestionScreen = () => {
    const {
        question_category,
        question_type,
        question_difficulty,
        amount_of_questions,
        score
    } = useSelector((state: any) => state);
    
    console.log(score)

    let apiUrl = "/api.php?amount=10"
    const { response, loading } = useAxios ({ url: apiUrl });
    console.log(response, loading)

  return (
    <div>QuestionScreen</div>
  )
}

export default QuestionScreen