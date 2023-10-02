import React, { useState } from 'react';
import plusSign from '../images/plus-sign.svg'
import closeIcon from '../images/close-icon.svg'
import editIcon from '../images/edit-icon.svg'
import ParagraphQuestion from './ParagraphQuestion';
import ShortQuestion from './ShortQuestion';
import YesNoQuestion from './YesNoQuestion';
import DropdownQuestion from './DropdownQuestion';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import DateQuestion from './DateQuestion';
import NumberQuestion from './NumberQuestion';
import FileUploadQuestion from './FileUploadQuestion';
import VideoQuestion from './VideoQuestion';

function PersonalInfoForm() {
  const [questionsAndResponses, setQuestionsAndResponses] = useState([]);
  const addQuestionAndResponse = (question) => {
    const newQuestion = {
      questionText: question,
      response: "",
    };
  
    setQuestionsAndResponses([...questionsAndResponses, newQuestion]);
  };
  
  const [question, setQuestion] = useState('');

  const handleSaveClick = () => {
    if (question.trim() !== '') {
      addQuestionAndResponse(question);
      setQuestion('');
      setIsPopupOpen(false); 
    }
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = (e) => {
    e.preventDefault(); 
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const [selectedOption, setSelectedOption] = useState('null');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const renderSelectedQuestion = () => {
    switch (selectedOption) {
      case 'Paragraph':
        return <ParagraphQuestion onSave={addQuestionAndResponse} onClose={closePopup} />
      case 'Short answer':
        return <ShortQuestion onSave={addQuestionAndResponse} onClose={closePopup} />;
      case 'Yes or No':
        return <YesNoQuestion onSave={addQuestionAndResponse} onClose={closePopup} />;
      case 'Dropdown':
        return <DropdownQuestion onSave={addQuestionAndResponse} onClose={closePopup} />;
      case 'Multiple choice':
        return <MultipleChoiceQuestion onSave={addQuestionAndResponse} onClose={closePopup}/>;
      case 'Date':
        return <DateQuestion onSave={addQuestionAndResponse} onClose={closePopup} />;
      case 'Number':
        return <NumberQuestion onSave={addQuestionAndResponse} onClose={closePopup} />;
      case 'File upload':
        return <FileUploadQuestion onSave={addQuestionAndResponse} onClose={closePopup} />;
      case 'Video question':
        return <VideoQuestion onSave={addQuestionAndResponse} onClose={closePopup} />;
      default:
        return null;
    }
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

        {questionsAndResponses.map((savedQuestion, index) => (
          <div key={index} className='saved-question'>
            <div className='row check-btns'>
              <button className='align-center'>
                <img src={editIcon} alt='edit icon' className='checkbox-label edit'></img>
              </button>
            </div>
            <p className='top-label'>{selectedOption}</p>
            <label htmlFor="yes-no" className='info-label add-questions-label'>{savedQuestion.questionText}</label>
            <input type="text" id="yes-no" name="yes-no" className='info-input'/>
          </div>
        ))}

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
                      <option value="">Select type</option>
                      <option value="Paragraph">Paragraph</option>
                      <option value="Short answer">Short answer</option>
                      <option value="Yes or No">Yes or No</option>
                      <option value="Dropdown">Dropdown</option>
                      <option value="Multiple choice">Multiple choice</option>
                      <option value="Date">Date</option>
                      <option value="Number">Number</option>
                      <option value="File upload">File upload</option>
                      <option value="Video question">Video question</option>
                    </select>
                  </div>
                  {selectedOption === 'Paragraph' && (
                    renderSelectedQuestion()
                  )}
                  {selectedOption === 'Short answer' && (
                    renderSelectedQuestion()
                  )}
                  {selectedOption === 'Yes or No' && (
                    renderSelectedQuestion()
                  )}
                  {selectedOption === 'Dropdown' && (
                    renderSelectedQuestion()
                  )}
                  {selectedOption === 'Multiple choice' && (
                    renderSelectedQuestion()
                  )}
                  {selectedOption === 'Date' && (
                    renderSelectedQuestion()
                  )}
                  {selectedOption === 'Number' && (
                    renderSelectedQuestion()
                  )}
                  {selectedOption === 'File upload' && (
                    renderSelectedQuestion()
                  )}
                  {selectedOption === 'Video question' && (
                    renderSelectedQuestion()
                  )}
                </div>
              </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonalInfoForm;
