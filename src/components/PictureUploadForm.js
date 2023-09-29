import React, { useState } from 'react';
import uploadIcon from '../images/upload-icon.svg';

function PictureUploadForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [editing, setEditing] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setEditing(true);
    }
  };

  const handleDelete = () => {
    setSelectedFile(null);
    setEditing(false);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
    }
    setEditing(false);
  };

//   const handleEdit = () => {
//     // Allow the user to edit the photo (e.g., trigger the file input click).
//     const fileInput = document.getElementById('fileInput');
//     if (fileInput) {
//       fileInput.click();
//     }
//   };

  return (
    <div className='form-div'>
      <div className='title'>
        <p>Upload cover image</p>
      </div>
      <div className='upload-div'>
        <div className='column btn-div'>
          <img src={uploadIcon} alt="upload icon" className="upload-icon" onClick={() => document.getElementById('fileInput')?.click()} />
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          {selectedFile && !editing && (
            <div>
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Selected"
                width={150}
                height={150}
              />
              {/* <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button> */}
            </div>
          )}
          {selectedFile && editing && (
            <div>
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Selected"
                width={150}
                height={150}
              />
              <button onClick={handleUpload}>Upload</button>
              <button onClick={handleDelete}>Cancel</button>
            </div>
          )}
          <div>      
            {!selectedFile && ( 
              <input
                type="button"
                value="Upload cover image"
                onClick={() => document.getElementById('fileInput')?.click()}
                className='upload-btn'
              />
            )}
          </div>
          <p>16:9 ratio is the recommended. Max image size 1mb </p>
        </div>
      </div>
    </div>
  );
}

export default PictureUploadForm;
