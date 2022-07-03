 // @ts-nocheck
import React from 'react'

// fetches data from the API



function FetchData() {
  const [quizData, setQuizData] = React.useState([]);

  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
      .then(response => response.json())
      .then(data => {
        setQuizData(data.results);
        console.log(quizData)
      })
      
  }, []);

  const questionElements = quizData.map((quiz, index) => {
    return (
      <div key={index}>
        <div className="question">
          <h2>{quiz.question}</h2>
        </div>
        <div className="answers">
          <h3>{quiz.correct_answer}</h3>
          
          <h3>{quiz.incorrect_answers}</h3>
        </div>
      </div>
    )
  }
  )
  

  return(
    <div>
      {questionElements}
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