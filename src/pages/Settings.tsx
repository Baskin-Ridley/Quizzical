

import React from 'react'
import SettingSelect from '../components/SettingSelect'
import { useAxios } from '../hooks/useAxios'
const Settings = () => {
    
    const { response, error, loading } = useAxios ({ url: "/api_category.php" });
    console.log(response, error, loading)
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("Submitted")
    }

    //Consider coming back to add a loading svg here
    if (loading) {
        return <div>Loading...</div>
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
    <form onSubmit={handleSubmit}>
        <SettingSelect options={typeOptions} label="Type of questions" />
        <SettingSelect options={difficultyOptions} label="Difficulty" />
        <SettingSelect options={response.trivia_categories} label="Category" />
        <button type="submit">Submit</button>
    </form>

  )
}

export default Settings