import React, { useState } from 'react';
import { storage } from '../../firebase/firebase.utils';

import { ImageContainer } from './file-upload.style';

import bannerImageSrcWebP from '../../images/WebPFiles/Banner-Background.webp';
import bannerImageSrcJPX from '../../images/JPXFiles/Banner-Background.jpx';
import bannerImageSrcJPG from '../../images/Banner-Background.jpg';

import NextGenImgsWithFallback from '../ImgWithFallback/ImgWithFallback.component';

const FileUploader = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const[ progress, setProgress] = useState(0);

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url)
          });
      }
    );
  };

  console.log('image: ', image);

  return (
    <div>
      <progress value={progress} max='100' />
      <br/><br/>
      <p>Image File Upload</p>
      <input type='file' accept="image/*" onChange={handleChange} />
      <button onClick={handleUpload}>Image Upload</button>
      <br/>
      {url}
      <br/>
      <ImageContainer src={url || 'https://via.placholder.com/300x400'} alt="firebase-image" />


      <NextGenImgsWithFallback
      srcWebP={bannerImageSrcWebP}
      srcJPX={bannerImageSrcJPX}
      fallbackSrc={bannerImageSrcJPG}
      alt="banner Image"
    />
    </div>
  );
};

export default FileUploader;