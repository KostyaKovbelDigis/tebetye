"use client";

import React from 'react';
import { CButton, CFormInput } from '@coreui/react';
import { Image, Search } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <div className="content-container">
      <div className="content-header">
        <Image size={48} />
        <h1 className="content-title">Products</h1>
      </div>
      <div className="mb-4">
        <CFormInput
          type="text"
          placeholder="Search products..."
          prefix={<Search size={20} />}
        />
      </div>
      <table className="products-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Meta Title</th>
            <th>H2 Title</th>
            <th>H2 Description</th>
            <th>Image Name</th>
            <th>Image ALT</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Samsung Galaxy S22 Ultra 256GB</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>
              <CButton color="danger" size="sm">NEW</CButton>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Products;