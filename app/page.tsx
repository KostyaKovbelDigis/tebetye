"use client";

import React from 'react';
import { CButton } from '@coreui/react';
import { Image } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="content-container">
      <div className="content-header">
        <Image size={48} />
        <h1 className="content-title">Dashboard</h1>
      </div>
      <div className="content-banner">
        <p className="banner-text">Welcome to your dashboard!</p>
        <CButton color="success">Get Started</CButton>
      </div>
      <div className="grid-container">
        {[1, 2, 3].map((item) => (
          <div key={item} className="grid-item">
            <Image size={48} />
            <p className="grid-item-text">Item {item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;