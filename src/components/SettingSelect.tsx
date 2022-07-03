
import React from 'react'

// This will be the form that the user will fill out to create a quiz

const SettingSelect = (props: { label: any; options: any; }) => {
    const { label, options } = props;
    const [value, setValue] = React.useState('');

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setValue(event.target.value);
    }

  return (
    <div className="form">
      <label>{label}</label>
      <select value={value} onChange={handleChange} >
        {options.map((option: { id: any, name: any}) => (
          <option key={option.id} value={option.name}>{option.name}</option>
        ))}

      </select>


    </div>
  )
}

export default SettingSelect