import React from 'react';
import closeIcon from '../images/close-icon.svg'

function YesNoQuestion() {
  return (
    <>
      <div>
        <label htmlFor="textarea-question" className='info-label textarea-label'>Question</label>
        <textarea id="textarea-question" name="textarea-question" className='info-input info-textarea' rows="1" placeholder='Type here'/>
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
        <button className='save-btn'>Save</button>
      </div>
    </>
  );
}

export default YesNoQuestion;
