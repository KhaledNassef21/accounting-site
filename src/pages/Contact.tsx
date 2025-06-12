import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, User, FileText } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.target as HTMLFormElement;
      const formDataObj = new FormData(form);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataObj as any).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "الهاتف",
      content: "+971 52 7559 044",
      link: "tel:+971527559044"
    },
    {
      icon: <Mail className="h-6 w-6 text-green-600" />,
      title: "البريد الإلكتروني",
      content: "nassefkhald@gmail.com",
      link: "mailto:nassefkhald@gmail.com"
    },
    {
      icon: <MapPin className="h-6 w-6 text-red-600" />,
      title: "الموقع",
      content: "دولة الإمارات العربية المتحدة",
      link: "#"
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-600" />,
      title: "ساعات العمل",
      content: "الأحد - الخميس: 9:00 ص - 6:00 م",
      link: "#"
    }
  ];

  const services = [
    "مسك الدفاتر المحاسبية",
    "إعداد القوائم المالية",
    "الإقرارات الضريبية",
    "الاستشارات المالية",
    "مراجعة الحسابات",
    "التخطيط المالي",
    "أخرى"
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">اتصل بنا</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            نحن هنا لمساعدتك. تواصل معنا للحصول على استشارة مجانية أو للاستفسار عن خدماتنا
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">أرسل لنا رسالة</h2>
                <p className="text-gray-600">
                  املأ النموذج التالي وسنتواصل معك في أقرب وقت ممكن
                </p>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.
                  </div>
                </div>
              )}

              <form 
                name="contact"
                method="POST"
                data-netlify="true"
		onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      الاسم الكامل *
                    </label>
                    <div className="relative">
                      <User className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="اكتب اسمك الكامل"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      رقم الهاتف *
                    </label>
                    <div className="relative">
                      <Phone className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="رقم الهاتف"
                        dir="ltr"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    البريد الإلكتروني *
                  </label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="البريد الإلكتروني"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    الخدمة المطلوبة
                  </label>
                  <div className="relative">
                    <FileText className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">اختر الخدمة</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    الرسالة *
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                      جاري الإرسال...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 ml-2" />
                      إرسال الرسالة
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">معلومات التواصل</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center ml-4">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h4>
                        {info.link.startsWith('#') ? (
                          <p className="text-gray-600">{info.content}</p>
                        ) : (
                          <a
                            href={info.link}
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            {info.content}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">هل تحتاج إلى مساعدة فورية؟</h3>
                <p className="text-gray-700 mb-6">
                  تواصل معنا مباشرة عبر الهاتف للحصول على استشارة فورية
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+971527559044"
                    className="block w-full bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    اتصل الآن
                  </a>
                  <a
                    href="mailto:nassefkhald@gmail.com"
                    className="block w-full border-2 border-blue-600 text-blue-600 text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    أرسل إيميل
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">ساعات العمل</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">الأحد - الخميس</span>
                    <span className="text-blue-600 font-semibold">9:00 ص - 6:00 م</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">الجمعة</span>
                    <span className="text-gray-500">مغلق</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700">السبت</span>
                    <span className="text-gray-500">مغلق</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;