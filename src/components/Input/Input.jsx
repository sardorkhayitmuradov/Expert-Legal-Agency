import React, { useState , useEffect } from 'react'
import QuestionIcon from '../../assets/images/main/question.svg'
import './Input.css'

const Input = ({labelName , inputType , inputId , placeholder  , descValue , question , value, onGetValue}) => {
    const onChange = (e)=>{
        onGetValue(e.target.value);
    }
    const [questionImage , setQuestionImage] = useState(question);
    // console.log(question)
    useEffect(() => {
        question === true ? setQuestionImage(true) : setQuestionImage(false);
    }, [question]);
  return (
    <div className='input-wrapper'>
        <div className="label-wrapper">
            <label className='label' htmlFor={inputId}>{labelName}</label>
            {
                questionImage ? <img src={QuestionIcon} alt="question" /> : ''
            }
        </div>
        <input type={inputType} id={inputId} placeholder={placeholder} className='input' onChange={onChange} value={value} />
        <p className='desc'>{descValue}</p>
    </div>
  )
}

export default Input