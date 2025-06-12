import React from 'react';
import { Calculator, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Calculator className="h-8 w-8 text-blue-300 ml-3" />
              <div>
                <h3 className="text-xl font-bold">KH Accounting</h3>
                <p className="text-blue-200 text-sm">خدمات محاسبية متميزة</p>
              </div>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              نحن شركة رائدة في تقديم الخدمات المحاسبية والاستشارات المالية للشركات والأفراد. 
              نقدم حلولاً محاسبية متكاملة تساعد عملاءنا على تحقيق أهدافهم المالية بكفاءة وشفافية.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-200 hover:text-white transition-colors">الرئيسية</Link></li>
              <li><Link to="/about" className="text-blue-200 hover:text-white transition-colors">من نحن</Link></li>
              <li><Link to="/services" className="text-blue-200 hover:text-white transition-colors">خدماتنا</Link></li>
              <li><Link to="/pricing" className="text-blue-200 hover:text-white transition-colors">الأسعار</Link></li>
              <li><Link to="/blog" className="text-blue-200 hover:text-white transition-colors">المدونة</Link></li>
              <li><Link to="/contact" className="text-blue-200 hover:text-white transition-colors">اتصل بنا</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">معلومات التواصل</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-300 ml-3" />
                <span className="text-blue-100" dir="ltr">+971 52 7559 044</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-300 ml-3" />
                <span className="text-blue-100">nassefkhald@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-300 ml-3 mt-1" />
                <span className="text-blue-100">دولة الإمارات العربية المتحدة</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © 2024 KH Accounting. جميع الحقوق محفوظة. تم التطوير بعناية لخدمة عملائنا الكرام.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;