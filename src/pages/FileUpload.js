import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = ({ onImageUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      onImageUpload(response.data.imagePath);
      alert('File uploaded successfully');;
    } catch (error) {
      alert('Error uploading file');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileSelect} />
      <button onClick={handleUpload}>Upload a Photo</button>
    </div>
  );
};

export default FileUpload;
