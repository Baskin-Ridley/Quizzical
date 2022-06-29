 // @ts-nocheck
import React from 'react'

// fetches data from the API



function FetchData() {
  const [quizData, setQuizData] = React.useState([]);

  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then(data => {
        setQuizData(data.results);
        
      })
      
  }, []);

  const mapQuiz = quizData.map((quiz, index) => {
    return (
      <div key={index}>
        <h1>{quiz.question}</h1>
        <h2>{quiz.correct_answer}</h2>
        <h2>{quiz.incorrect_answers}</h2>
      </div>
    )
  }
  )
  

  return(
    <div>
      {mapQuiz}
    </div>
  ) 
}

function DisplayData(){
    return(
        <div>
            <h1>DisplayData</h1>
        </div>
    )
}

export { FetchData, DisplayData };