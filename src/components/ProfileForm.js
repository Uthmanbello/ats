import React, { useState } from 'react';
import plusSign from '../images/plus-sign.svg'

function ProfileForm() {

  return (
    <div className='form-div info-div'>
      <div className='title'>
        <p>Profile</p>
      </div>
      <div className='upload-div personal-info-div'>
        <div>
          <div className='row check-btns'>
            <span className='align-center'>
              <input type="checkbox" id="education-mandatory" name="education-mandatory" className='check-box'/>
              <label For="education-mandatory" className='checkbox-label'>Mandatory</label>
            </span>
            <span className='align-center'>
              <label For='education-hide' className="toggle-label checkbox-label"><span className="slider round"></span>Hide</label>
              <input type="checkbox" name="education-hide" id="education-hide" className="toggle-input" />
            </span>
          </div>
          <label For="education" className='info-label'>Education</label>
          <input type="text" id="education" name="education" className='info-input'/>
        </div>

        <div>
          <div className='row check-btns'>
            <span className='align-center'>
              <input type="checkbox" id="experience-mandatory" name="experience-mandatory" className='check-box'/>
              <label For="experience-mandatory" className='checkbox-label'>Mandatory</label>
            </span>
            <span className='align-center'>
              <label For='experience-hide' className="toggle-label checkbox-label"><span className="slider round"></span>Hide</label>
              <input type="checkbox" name="experience-hide" id="experience-hide" className="toggle-input" />
            </span>
          </div>
          <label For="experience" className='info-label'>Experience</label>
          <input type="text" id="experience" name="experience" className='info-input'/>
        </div>

        <div>
          <div className='row check-btns'>
            <span className='align-center'>
              <input type="checkbox" id="resume-mandatory" name="resume-mandatory" className='check-box'/>
              <label For="resume-mandatory" className='checkbox-label'>Mandatory</label>
            </span>
            <span className='align-center'>
              <label For='resume-hide' className="toggle-label checkbox-label"><span className="slider round"></span>Hide</label>
              <input type="checkbox" name="resume-hide" id="resume-hide" className="toggle-input" />
            </span>
          </div>
          <label For="resume" className='info-label'>Resume</label>
          <input type="text" id="resume" name="resume" className='info-input'/>
        </div>

        <div className='row add-question'>
          <img src={plusSign} alt='plus sign'></img>
          <p>Add a question</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;
