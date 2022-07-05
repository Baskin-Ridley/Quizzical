// @ts-nocheck
//Added as there is a possibility of getting null

import React from 'react'
import { useDispatch } from 'react-redux';
import { handleCategoryChange, handleDifficultyChange, handleTypeChange } from '../redux/actions';
// This will be the form that the user will fill out to create a quiz

const SettingSelect = (props: { label: any; options: any; }) => {
    const { label, options } = props;
    const [value, setValue] = React.useState('');
    const dispatch = useDispatch();
    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setValue(event.target.value);
        switch(label){
            case "Type of questions":
                dispatch(handleTypeChange(event.target.value));
                break;
            case "Difficulty":
                dispatch(handleDifficultyChange(event.target.value));
                break;
            case "Category":
                dispatch(handleCategoryChange(event.target.value));
                break;
            default:
                return;
        }


    }

  return (
    <div className="setting-form">
      <label className="settingLabel">{label}</label>
      <select className="settingDropDown" value={value} onChange={handleChange} >
        {options.map((option: { id: any, name: any}) => (
          <option key={option.id} value={option.name}>{option.name}</option>
        ))}

      </select>


    </div>
  )
}

export default SettingSelect