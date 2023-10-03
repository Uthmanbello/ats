import React, { useState } from 'react';
import plusSign from '../images/plus-sign.svg';
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

function ProfileForm() {
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
        <p>Profile</p>
      </div>
      <div className='upload-div personal-info-div'>
        <div>
          <div className='row check-btns'>
            <span className='align-center'>
              <input type="checkbox" id="education-mandatory" name="education-mandatory" className='check-box'/>
              <label htmlFor="education-mandatory" className='checkbox-label'>Mandatory</label>
            </span>
            <span className='align-center'>
              <label htmlFor='education-hide' className="toggle-label checkbox-label"><span className="slider round"></span>Hide</label>
              <input type="checkbox" name="education-hide" id="education-hide" className="toggle-input" />
            </span>
          </div>
          <label htmlFor="education" className='info-label'>Education</label>
          <input type="text" id="education" name="education" className='info-input'/>
        </div>

        <div>
          <div className='row check-btns'>
            <span className='align-center'>
              <input type="checkbox" id="experience-mandatory" name="experience-mandatory" className='check-box'/>
              <label htmlFor="experience-mandatory" className='checkbox-label'>Mandatory</label>
            </span>
            <span className='align-center'>
              <label htmlFor='experience-hide' className="toggle-label checkbox-label"><span className="slider round"></span>Hide</label>
              <input type="checkbox" name="experience-hide" id="experience-hide" className="toggle-input" />
            </span>
          </div>
          <label htmlFor="experience" className='info-label'>Experience</label>
          <input type="text" id="experience" name="experience" className='info-input'/>
        </div>

        <div>
          <div className='row check-btns'>
            <span className='align-center'>
              <input type="checkbox" id="resume-mandatory" name="resume-mandatory" className='check-box'/>
              <label htmlFor="resume-mandatory" className='checkbox-label'>Mandatory</label>
            </span>
            <span className='align-center'>
              <label htmlFor='resume-hide' className="toggle-label checkbox-label"><span className="slider round"></span>Hide</label>
              <input type="checkbox" name="resume-hide" id="resume-hide" className="toggle-input" />
            </span>
          </div>
          <label htmlFor="resume" className='info-label'>Resume</label>
          <input type="text" id="resume" name="resume" className='info-input'/>
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

export default ProfileForm;
