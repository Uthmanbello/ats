import React, { useState } from 'react';

function PersonalInfoForm() {

  return (
    <div className='form-div info-div'>
      <div className='title'>
        <p>Personal information</p>
      </div>
      <div className='upload-div'>
        <label For="firstName" className='info-label'>First Name</label>
        <input type="text" id="firstName" name="firstName" className='info-input'/>
        <label For="lastName" className='info-label'>Last Name</label>
        <input type="text" id="lastName" name="lastName" className='info-input'/>
        <label For="firstName" className='info-label'>Email</label>
        <input type="email" id="email" name="email" className='info-input'/>
        <div>
          <div className='row check-btns'>
            <span className='align-center'>
              <input type="checkbox" id="phone-internal" name="phone-internal" className=''/>
              <label For="phone-internal" className='checkbox-label'>Internal</label>
            </span>
            <span className='align-center'>
              <input type="checkbox" id="phone-hide" name="phone-hide" className=''/>
              <label For="phone-hide" className='checkbox-label'>Hide</label>
            </span>
          </div>
          <label For="phone" className='info-label'>Phone <span>(without dial code)</span></label>
          <input type="email" id="email" name="email" className='info-input'/>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfoForm;
