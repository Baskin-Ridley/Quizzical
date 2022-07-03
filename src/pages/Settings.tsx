import React from 'react'
import SettingSelect from '../components/SettingSelect'
const Settings = () => {
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