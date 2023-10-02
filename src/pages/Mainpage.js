import React from 'react';
import PictureUploadForm from '../components/PictureUploadForm';
import PersonalInfoForm from '../components/PersonalInfoForm';
import ProfileForm from '../components/ProfileForm';
import '../styles/Mainpage.css';
import '../styles/Popup.css';
import ApplicationForm from '../components/Test';

function Mainpage() {
  return (
    <div className="mainpage">
      <ul className='row top-bar'>
        <li><div><p>Program Details</p></div></li>
        <span></span>
        <li><div><p>Application form</p></div></li>
        <span></span>
        <li><div><p>Workflow</p></div></li>
        <span></span>
        <li><div><p>Preview</p></div></li>
      </ul>

      <div>
        <form>
            <div>
              <PictureUploadForm />
              <PersonalInfoForm />
              <ProfileForm />
              <ApplicationForm />
            </div>
        </form>
      </div>
    </div>
  );
}

export default Mainpage;