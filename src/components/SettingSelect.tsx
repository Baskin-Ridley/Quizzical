import React from 'react'

// This will be the form that the user will fill out to create a quiz

const SettingSelect = (props: { label: any; }) => {
    const { label } = props;
    const [value, setValue] = React.useState('');

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setValue(event.target.value);
    }

  return (
    <div className="form">
      <label>{label}</label>
      <select value={value} onChange={handleChange} >
        <option value=""></option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>

      </select>


    </div>
  )
}

export default SettingSelect