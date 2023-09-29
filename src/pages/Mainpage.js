import React from 'react';
import '../styles/Mainpage.css';

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
    </div>
  );
}

export default Mainpage;