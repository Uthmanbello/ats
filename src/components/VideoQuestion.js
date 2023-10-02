import React, {useState} from 'react';
import closeIcon from '../images/close-icon.svg'

function VideoQuestion({ onSave }) {
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
        <textarea id="textarea-question" name="textarea-question" className='info-input info-textarea' rows="1" placeholder='Type question here' value={question}
          onChange={(e) => setQuestion(e.target.value)}/>
        <textarea id="textarea-question" name="textarea-question" className='info-input info-textarea' rows="4" placeholder='Type description here'/>
      </div>

      <div className='row video-duration'>
        <textarea id="textarea-question" name="textarea-question" className='info-input info-textarea' rows="1" placeholder='Max duration of video'/>
        <select id="textarea-question" name="textarea-question" className='info-input info-textarea'>
          <option value="">in (sec/min)</option>
          <option value="Paragraph">1</option>
          <option value="Short answer">2</option>
          <option value="Yes or No">3</option>
          <option value="Dropdown">4</option>
        </select>
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

export default VideoQuestion;
