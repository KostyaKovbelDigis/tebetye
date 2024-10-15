"use client";

import React from 'react';
import { CButton } from '@coreui/react';
import { Folder } from 'lucide-react';

const Categories: React.FC = () => {
  return (
    <div className="content-container">
      <div className="content-header">
        <Folder size={48} />
        <h1 className="content-title">Categories</h1>
      </div>
      <div className="content-banner">
        <p className="banner-text">Manage your product categories</p>
        <CButton color="primary">Add Category</CButton>
      </div>
      <div className="grid-container">
        {['Electronics', 'Clothing', 'Home & Garden'].map((category, index) => (
          <div key={index} className="grid-item">
            <Folder size={48} />
            <p className="grid-item-text">{category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;