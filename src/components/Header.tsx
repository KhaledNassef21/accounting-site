import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calculator, Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'الرئيسية', href: '/' },
    { name: 'من نحن', href: '/about' },
    { name: 'خدماتنا', href: '/services' },
    { name: 'الأسعار', href: '/pricing' },
    { name: 'المدونة', href: '/blog' },
    { name: 'اتصل بنا', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg">
      {/* Top bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6 space-x-reverse">
              <div className="flex items-center">
                <Phone className="h-4 w-4 ml-2" />
                <span dir="ltr">+971 52 7559 044</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 ml-2" />
                <span>nassefkhald@gmail.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="text-blue-200">خدمات محاسبية احترافية</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Calculator className="h-10 w-10 text-blue-900 ml-3" />
              <div>
                <h1 className="text-2xl font-bold text-blue-900">KH Accounting</h1>
                <p className="text-sm text-gray-600">خدمات محاسبية متميزة</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-lg font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-blue-900 border-b-2 border-blue-900'
                    : 'text-gray-700 hover:text-blue-900 hover:border-b-2 hover:border-blue-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 text-lg font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-blue-900 bg-blue-50 border-r-4 border-blue-900'
                      : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;