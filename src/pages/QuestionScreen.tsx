// @ts-nocheck
//added to avoid null check
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
    

    console.log({question_category, question_difficulty, question_type})
    //hard coded too 10 questions right now replace with
    //"/api.php?amount=${amount_of_questions}&category=${question_category}&difficulty=${question_difficulty}&type=${question_type}"
    let apiUrl = `/api.php?amount=${amount_of_questions}`
    if (question_category) {
        apiUrl = apiUrl.concat(`&category=${question_category}`)
    }
    if (question_difficulty) {
        apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`)
        //apiUrl += `&difficulty=${question_difficulty}`
    }
    if (question_type) {
        apiUrl = apiUrl.concat(`&type=${question_type}`)
        //apiUrl += `&type=${question_type}`
    }

    const { response, loading } = useAxios ({ url: apiUrl });
    const [questions, setQuestions] = React.useState([]);
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    

    console.log("hello", response)

    if (loading) {
        return <div className="loading">Loading...</div>
    }

  return (
    <div>
        <div className="question">{response.results[currentQuestion].question}</div>
    </div>
  )
}

export default QuestionScreen