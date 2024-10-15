"use client";

import React from 'react';
import { CButton } from '@coreui/react';
import { Image } from 'lucide-react';

const Images: React.FC = () => {
  return (
    <div className="content-container">
      <div className="content-header">
        <Image size={48} />
        <h1 className="content-title">Images</h1>
      </div>
      <div className="content-banner">
        <p className="banner-text">Manage your product images</p>
        <CButton color="primary">Upload Image</CButton>
      </div>
      <div className="grid-container">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="grid-item">
            <Image size={48} />
            <p className="grid-item-text">Image {item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;