import React, {useState} from 'react';
import closeIcon from '../images/close-icon.svg'

function YesNoQuestion({ onSave, onClose }) {
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
      onClose();
    }
  };

  return (
    <>
      <div>
        <label htmlFor="textarea-question" className='info-label textarea-label'>Question</label>
        <textarea id="textarea-question" name="textarea-question" className='info-input info-textarea' rows="1" placeholder='Type here' value={question}
          onChange={(e) => setQuestion(e.target.value)}/>
      </div>

      <div className='yes-no-check align-center'>
        <input type="checkbox" id="" name="" className='check-box'/>
        <label htmlFor="" className=''>Disqualify the candidate if the answer is no</label>
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

export default YesNoQuestion;
