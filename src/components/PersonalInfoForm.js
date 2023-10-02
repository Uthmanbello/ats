import React, { useState } from 'react';
import plusSign from '../images/plus-sign.svg'
import closeIcon from '../images/close-icon.svg'

function PersonalInfoForm() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = (e) => {
    e.preventDefault(); 
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const [selectedOption, setSelectedOption] = useState('Paragraph');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className='form-div info-div'>
      <div className='title'>
        <p>Personal information</p>
      </div>
      <div className='upload-div personal-info-div'>
        <label htmlFor="firstName" className='info-label'>First Name</label>
        <input type="text" id="firstName" name="firstName" className='info-input'/>
        <label htmlFor="lastName" className='info-label'>Last Name</label>
        <input type="text" id="lastName" name="lastName" className='info-input'/>
        <label htmlFor="firstName" className='info-label'>Email</label>
        <input type="email" id="email" name="email" className='info-input'/>

        <div>
          <div className='row check-btns'>
            <span className='align-center'>
              <input type="checkbox" id="phone-internal" name="phone-internal" className='check-box'/>
              <label htmlFor="phone-internal" className='checkbox-label'>Internal</label>
            </span>
            <span className='align-center'>
              <label htmlFor='phone-hide' className="toggle-label checkbox-label"><span className="slider round"></span>Hide</label>
              <input type="checkbox" name="phone-hide" id="phone-hide" className="toggle-input" />
            </span>
          </div>
          <label htmlFor="phone" className='info-label'>Phone <span>(without dial code)</span></label>
          <input type="number" id="phone" name="phone" className='info-input'/>
        </div>

        <div>
          <div className='row check-btns'>
            <span className='align-center'>
              <input type="checkbox" id="nationality-internal" name="nationality-internal" className='check-box'/>
              <label htmlFor="nationality-internal" className='checkbox-label'>Internal</label>
            </span>
            <span className='align-center'>
              <label htmlFor='nationality-hide' className="toggle-label checkbox-label"><span className="slider round"></span>Hide</label>
              <input type="checkbox" name="nationality-hide" id="nationality-hide" className="toggle-input" />
            </span>
          </div>
          <label htmlFor="nationality" className='info-label'>Nationality</label>
          <input type="text" id="nationality" name="nationality" className='info-input'/>
        </div>

        <div>
          <div className='row check-btns'>
            <span className='align-center'>
              <input type="checkbox" id="residence-internal" name="residence-internal" className='check-box'/>
              <label htmlFor="residence-internal" className='checkbox-label'>Internal</label>
            </span>
            <span className='align-center'>
              <label htmlFor='residence-hide' className="toggle-label checkbox-label"><span className="slider round"></span>Hide</label>
              <input type="checkbox" name="residence-hide" id="residence-hide" className="toggle-input" />
            </span>
          </div>
          <label htmlFor="residence" className='info-label'>Current Residence</label>
          <input type="text" id="residence" name="residence" className='info-input'/>
        </div>

        <div>
          <div className='row check-btns'>
            <span className='align-center'>
              <input type="checkbox" id="id-internal" name="id-internal" className='check-box'/>
              <label htmlFor="id-internal" className='checkbox-label'>Internal</label>
            </span>
            <span className='align-center'>
              <label htmlFor='id-hide' className="toggle-label checkbox-label"><span className="slider round"></span>Hide</label>
              <input type="checkbox" name="id-hide" id="id-hide" className="toggle-input" />
            </span>
          </div>
          <label htmlFor="id" className='info-label'>ID Number</label>
          <input type="number" id="id" name="id" className='info-input'/>
        </div>

        <div>
          <div className='row check-btns'>
            <span className='align-center'>
              <input type="checkbox" id="dob-internal" name="dob-internal" className='check-box'/>
              <label htmlFor="dob-internal" className='checkbox-label'>Internal</label>
            </span>
            <span className='align-center'>
              <label htmlFor='dob-hide' className="toggle-label checkbox-label"><span className="slider round"></span>Hide</label>
              <input type="checkbox" name="dob-hide" id="dob-hide" className="toggle-input" />
            </span>
          </div>
          <label htmlFor="dob" className='info-label'>Date of Birth</label>
          <input type="text" id="dob" name="dob" className='info-input'/>
        </div>

        <div>
          <div className='row check-btns'>
            <span className='align-center'>
              <input type="checkbox" id="gender-internal" name="gender-internal" className='check-box'/>
              <label htmlFor="gender-internal" className='checkbox-label'>Internal</label>
            </span>
            <span className='align-center'>
              <label htmlFor='gender-hide' className="toggle-label checkbox-label"><span className="slider round"></span>Hide</label>
              <input type="checkbox" name="gender-hide" id="gender-hide" className="toggle-input" />
            </span>
          </div>
          <label htmlFor="gender" className='info-label'>Gender</label>
          <input type="text" id="gender" name="gender" className='info-input gender-input'/>
        </div>

        <button className='row add-question align-center' onClick={(e) => openPopup(e)}>
          <img src={plusSign} alt='plus sign'></img>
          <p>Add a question</p>
        </button>

        {isPopupOpen && (
          <div className='popup-container'>
              <button className='close-popup' onClick={closePopup}>
                <img src={closeIcon} alt='close icon'></img>
              </button>
              <div className='form-div info-div popup-div'>
                <div className='title'>
                  <p>Questions</p>
                </div>
                <div className='upload-div personal-info-div'>
                  <div>
                    <label htmlFor="dropdown" className='info-label'>Type</label>
                    <select id="dropdown" className='info-input info-textarea' value={selectedOption} onChange={handleSelectChange}>
                      <option value="option1">Paragraph</option>
                      <option value="option2">Short answer</option>
                      <option value="option3">Yes/No</option>
                      <option value="option4">Dropdown</option>
                      <option value="option5">Multiple choice</option>
                      <option value="option6">Date</option>
                      <option value="option7">Number</option>
                      <option value="option8">File upload</option>
                      <option value="option9">Video question</option>
                    </select>
                    {/* <p>Selected Option: {selectedOption}</p> */}
                  </div>
                </div>
              </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonalInfoForm;
