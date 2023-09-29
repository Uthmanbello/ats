import React, { useState } from 'react';

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
    <div>
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
      {!selectedFile && (
        <input
          type="button"
          value="Upload Photo"
          onClick={() => document.getElementById('fileInput')?.click()}
        />
      )}
    </div>
  );
}

export default PictureUploadForm;
