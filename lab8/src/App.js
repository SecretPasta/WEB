import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Ensure to create this CSS file based on the styles provided

function App() {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState('');

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10');
      setPhotos(response.data);
      if (response.data.length > 0) {
        setSelectedPhoto(response.data[0].download_url);
      }
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  return (
    <div className="container">
      <h1>Photo Browser</h1>
      <div className="row">
        <div className="col-md-8">
          <img src={selectedPhoto} alt="Selected" className="main-image" />
        </div>
        <div className="col-md-4">
          <div className="d-flex flex-wrap">
            {photos.map((photo) => (
              <div key={photo.id} className="thumbnail" onClick={() => setSelectedPhoto(photo.download_url)}>
                <img src={photo.download_url} alt="" className="img-preview" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
