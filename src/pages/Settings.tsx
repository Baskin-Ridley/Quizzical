//@ts-nocheck 

import React from 'react'
import SettingSelect from '../components/SettingSelect'
import { useAxios } from '../hooks/useAxios'
import { useNavigate } from 'react-router-dom'
import loadingImage from '../assets/90-ring.svg'
const Settings = () => {
    const navigate = useNavigate()
    const { response, error, loading } = useAxios ({ url: "/api_category.php" });
    console.log(response, error, loading)
    
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        
        navigate("/questions")
    }

    //Consider coming back to add a loading svg here
    if (loading) {
        return <div className="loading">
            <img src={loadingImage} alt="loading" />
        </div>
    }
    
    if (error) {
        return <div>Error</div>
    }

    const difficultyOptions = [
        { value: "easy", label: "Easy" , name: "Easy"},
        { value: "medium", label: "Medium", name: "Medium"},
        { value: "hard", label: "Hard", name: "Hard"} 
    ]

    const typeOptions = [
        { value: "multiple", label: "Multiple Choice", name: "Multiple Choice"}, 
        { value: "boolean", label: "True/False", name: "True/False"}
    ]

   
    
  return (
      <div className="settings">
        <h1 className="quizTitle">Quizzical</h1>
        <p className="stinger">Answer the questions to test your knowledge!</p>
        <form className="settingsForm" onSubmit={handleSubmit}>
            <div>
                <SettingSelect options={typeOptions} label="Type of questions: " />
                <SettingSelect options={difficultyOptions} label="Difficulty: " />
                
                <SettingSelect options={response.trivia_categories} label="Category: " />
            </div>
            <div>
                <button className="quizButton"type="submit">Start Quizzing</button>
            </div>
            
        </form>
    </div>
  )
}

export default Settings