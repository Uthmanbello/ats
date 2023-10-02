import React from 'react';
import closeIcon from '../images/close-icon.svg'

function ParagraphQuestion() {
  return (
    <>
      <div>
        <label htmlFor="textarea-question" className='info-label textarea-label'>Question</label>
        <textarea id="textarea-question" name="textarea-question" className='info-input info-textarea' rows="1" placeholder='Type here'/>
      </div>

      <div className='row space-between align-center'>
        <div className='row delete-question'>
          <img src={closeIcon} alt='close icon'></img>
          <p>Delete question</p>
        </div>
        <button className='save-btn'>Save</button>
      </div>
    </>
  );
}

export default ParagraphQuestion;
