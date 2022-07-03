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
  return (
    <form onSubmit={handleSubmit}>
        <SettingSelect label="Number of questions" />
        <SettingSelect label="Difficulty" />
        <SettingSelect label="Category" />
        <button type="submit">Submit</button>
    </form>

  )
}

export default Settings