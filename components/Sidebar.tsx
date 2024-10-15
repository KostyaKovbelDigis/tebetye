import React from 'react';
import Link from 'next/link';
import { Home, Image, Package, List } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <Home size={48} />
      </div>
      <nav className="sidebar-nav">
        <ul className="list-unstyled">
          <li className="mb-3">
            <Link href="/" className="text-white text-decoration-none">
              <Home className="me-2" size={20} />
              Dashboard
            </Link>
          </li>
          <li className="mb-3">
            <Link href="/images" className="text-white text-decoration-none">
              <Image className="me-2" size={20} />
              Images
            </Link>
          </li>
          <li className="mb-3">
            <Link href="/products" className="text-white text-decoration-none">
              <Package className="me-2" size={20} />
              Products
            </Link>
          </li>
          <li className="mb-3">
            <Link href="/categories" className="text-white text-decoration-none">
              <List className="me-2" size={20} />
              Categories
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;