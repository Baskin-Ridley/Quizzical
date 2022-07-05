//@ts-nocheck
//added to avoid null check
import React from 'react'
import { useSelector } from 'react-redux';
import { useAxios } from '../hooks/useAxios';
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { handleScoreChange } from '../redux/actions';
import { decode } from "html-entities"
const QuestionScreen = () => {
    const {
        question_category,
        question_type,
        question_difficulty,
        amount_of_questions,
        score
    } = useSelector((state: any) => state);
    const navigate = useNavigate()
    const dispatch = useDispatch()
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
    
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [choices, setChoices] = React.useState([]);
    
    const getRandomInt = (max: number) => {
        return Math.floor(Math.random() * Math.floor(max));
    }


    React.useEffect(() => {
        if (response?.results.length) {
            const question = response.results[currentQuestion];
            let answers = [...question.incorrect_answers];
            answers.splice(
                getRandomInt(question.incorrect_answers.length),
                0,
                question.correct_answer
            );
            setChoices(answers);
            console.log("Question Choices",choices)
        }
    }, [response, currentQuestion, ])

    /* First attempt at mixing order just crashes the app 
    
    React.useEffect(() => {
        if (response?.results.length) {
            const question = response.results[currentQuestion];
            let answers = [...question.incorrect_answers];
            answers.push(question.correct_answer);
            answers = answers.sort(() => Math.random() - 0.5);
            setOptions(answers);
            setQuestions(response.results);
        }
    }, [response])

    */


    console.log("hello", response)

    
    if (loading) {
        return <div className="loading">Loading...</div>
    }

    
    function handleClickAnswer(event: { target: { value: any; }; }){
        //update the score in the store each time the correct answer is chosen
        /*fun fact I came up with some very wacky code to solve this initially using a weird string concatenation 
        and a mixture of strings and javascript... it did not work. However this does 🎉*/ 
        const question = response.results[currentQuestion];
        console.log("clicked", event.target.innerText, question.correct_answer);
        if (event.target.innerText === question.correct_answer) {
            console.log("correct")
            dispatch(handleScoreChange(score + 1))
        }
        
        if(currentQuestion < response.results.length - 1){
            setCurrentQuestion(currentQuestion + 1);
        }
        else{
            navigate("/results")
        }
        
    }


    
  return (
    <div className="questionScreen">
        <h2 className="question">{decode(response.results[currentQuestion].question)}</h2>
        <div className="choices">
            
            {choices.map((choice: string, index: number) => {
                return <button className="questionButton"onClick={handleClickAnswer} key={index}>{decode(choice)}</button>
            }
            )}


        </div>
            <div className="score">Score: {score} / {response.results.length}</div>

                    
    </div>
  )
}

export default QuestionScreen