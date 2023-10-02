import React, {useState} from 'react';
import closeIcon from '../images/close-icon.svg'
import plusSign from '../images/plus-sign.svg'
import unorderedList from '../images/unordered-list.svg'

function DropdownQuestion({ onSave }) {
  const [questionsAndResponses, setQuestionsAndResponses] = useState([]);
  const addQuestionAndResponse = (question) => {
    const newQuestion = {
      questionText: question,
      response: "",
    };
  
    setQuestionsAndResponses([...questionsAndResponses, newQuestion]);
  };
  
  const [question, setQuestion] = useState('');

  const handleSaveClick = (e) => {
    e.preventDefault();
    if (question.trim() !== '') {
      onSave(question);
      setQuestion('');
    }
  };

  return (
    <>
      <div>
        <label htmlFor="textarea-question" className='info-label textarea-label'>Question</label>
        <textarea id="textarea-question" name="textarea-question" className='info-input info-textarea' rows="1" placeholder='Type here' value={question}
          onChange={(e) => setQuestion(e.target.value)}/>
      </div>

      <div className='row align-center unordered-choice'>
        <img src={unorderedList} alt='unordered list'></img>
        <div>
          <label htmlFor="textarea-question" className='info-label textarea-label'>Choice</label>
          <textarea id="textarea-question" name="textarea-question" className='info-input info-textarea' cols='40' rows="1" placeholder='Type here'/>
        </div>
        <img src={plusSign} alt='plus sign'></img>
      </div>

      <div className='yes-no-check align-center'>
        <input type="checkbox" id="" name="" className='check-box'/>
        <label htmlFor="" className=''>Enable "other" option</label>
      </div>

      <div className='row space-between align-center'>
        <div className='row delete-question'>
          <img src={closeIcon} alt='close icon'></img>
          <p>Delete question</p>
        </div>
        <button className='save-btn' onClick={(e) => handleSaveClick(e)}>Save</button>
      </div>
    </>
  );
}

export default DropdownQuestion;
