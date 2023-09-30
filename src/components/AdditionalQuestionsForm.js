import React, { useState } from 'react';
import plusSign from '../images/plus-sign.svg'
import editIcon from '../images/edit-icon.svg'
import unorderedList from '../images/unordered-list.svg'
import closeIcon from '../images/close-icon.svg'

function AdditionalQuestionsForm() {

  return (
    <div className='form-div info-div'>
      <div className='title'>
        <p>Additional Questions</p>
      </div>
      <div className='upload-div personal-info-div'>
        <div>
          <div className='row check-btns'>
            <span className='align-center'>
              <img src={editIcon} alt='edit icon' className='checkbox-label edit'></img>
            </span>
          </div>
          <p className='top-label'>Paragraph</p>
          <label For="yes-no" className='info-label add-questions-label'>Please tell me about yourself in less than 500 words</label>
          <input type="text" id="yes-no" name="yes-no" className='info-input'/>
        </div>

        <div>
          <div className='row check-btns'>
            <span className='align-center'>
              <img src={editIcon} alt='edit icon' className='checkbox-label edit'></img>
            </span>
          </div>
          <p className='top-label'>Dropdown</p>
          <label For="yes-no" className='info-label add-questions-label'>Please select the year of graduaion from the list below</label>
          <input type="text" id="yes-no" name="yes-no" className='info-input'/>
        </div>

        <div>
          <label For="textarea-question" className='info-label textarea-label'>Question</label>
          <textarea id="textarea-question" name="textarea-question" className='info-input info-textarea' rows="1" placeholder='Type here'/>
        </div>

        <div className='row align-center unordered-choice'>
          <img src={unorderedList} alt='unordered list'></img>
          <div>
            <label For="textarea-question" className='info-label textarea-label'>Choice</label>
            <textarea id="textarea-question" name="textarea-question" className='info-input info-textarea' cols='40' rows="1" placeholder='Type here'/>
          </div>
          <img src={plusSign} alt='plus sign'></img>
        </div>

        <div className='row space-between align-center'>
          <div className='row delete-question'>
            <img src={closeIcon} alt='close icon'></img>
            <p>Delete question</p>
          </div>
          <button className='save-btn'>Save</button>
        </div>

        <input type="text" id="" name="" className='info-input'/>

        <div>
          <div className='row check-btns'>
            <span className='align-center'>
              <img src={editIcon} alt='edit icon' className='checkbox-label edit'></img>
            </span>
          </div>
          <p className='top-label'>Yes/No questions</p>
          <label For="yes-no" className='info-label add-questions-label'>Have you ever been rejected by the UK embassy?</label>
          <input type="text" id="yes-no" name="yes-no" className='info-input'/>
        </div>
        
        <div className='row add-question'>
          <img src={plusSign} alt='plus sign'></img>
          <p>Add a question</p>
        </div>
      </div>
    </div>
  );
}

export default AdditionalQuestionsForm;
