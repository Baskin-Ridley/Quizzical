import React from 'react'
import { useAxios } from '../hooks/useAxios';

const QuestionScreen = () => {

    let apiUrl = "/api.php?amount=10"
    const { response, loading } = useAxios ({ url: apiUrl });
    console.log(response, loading)
    
  return (
    <div>QuestionScreen</div>
  )
}

export default QuestionScreen