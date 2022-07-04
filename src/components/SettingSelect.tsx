
import React from 'react'
import { useDispatch } from 'react-redux';
// This will be the form that the user will fill out to create a quiz

const SettingSelect = (props: { label: any; options: any; }) => {
    const { label, options } = props;
    const [value, setValue] = React.useState('');
    const dispatch = useDispatch();
    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setValue(event.target.value);
        switch(label){
            case "Type of questions":
                dispatch({ type: "SET_QUESTION_TYPE", payload: event.target.value });
                break;
            case "Difficulty":
                dispatch({ type: "SET_QUESTION_DIFFICULTY", payload: event.target.value });
                break;
            case "Category":
                dispatch({ type: "SET_QUESTION_CATEGORY", payload: event.target.value });
                break;
            default:
                return;
        }


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