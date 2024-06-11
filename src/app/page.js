// components/FileUploadForm.js

'use client';

import { useState } from 'react';

export default function FileUploadForm() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  /**
   * 
   * @param {Event} event 
   */
  const handleSubmit = (event) => {
    console.log(file);
    if (file) {
      const reader = new FileReader(file);
      reader.onload = () => {
        console.log(reader.result); // CSV file content
      };
      reader.readAsText(file);
    }
  };

  return (
    <form id='main-form' onSubmit={handleSubmit}>
      <input 
        type="file" 
        accept=".csv" 
        onChange={handleFileChange} 
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Upload</button>
    </form>
  );
}

const inputStyle = {
  marginBottom: '10px'
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '1rem',
  cursor: 'pointer'
};
 