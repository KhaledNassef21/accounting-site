import React from 'react';
import { Calculator, Users, TrendingUp, Shield, Phone, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <Calculator className="h-12 w-12 text-blue-600" />,
      title: "خدمات محاسبية شاملة",
      description: "مسك الدفاتر وإعداد القوائم المالية بأعلى مستويات الجودة والدقة"
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "فريق من الخبراء",
      description: "محاسبون مؤهلون ومعتمدون مع سنوات من الخبرة في المجال"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      title: "استشارات مالية",
      description: "نصائح وحلول مالية تساعدك على اتخاذ قرارات استثمارية صحيحة"
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "الامتثال الضريبي",
      description: "إعداد الإقرارات الضريبية والامتثال لجميع اللوائح المحلية"
    }
  ];

  const services = [
    "مسك الدفاتر المحاسبية",
    "إعداد القوائم المالية",
    "الإقرارات الضريبية",
    "الاستشارات المالية",
    "مراجعة الحسابات",
    "التخطيط المالي"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              KH Accounting
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              شريكك الموثوق في الخدمات المحاسبية والاستشارات المالية
            </p>
            <p className="text-lg mb-10 text-blue-200 max-w-2xl mx-auto">
              نقدم حلولاً محاسبية متكاملة للشركات والأفراد بأعلى معايير الجودة والمهنية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                ابدأ الآن
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                تعرف على خدماتنا
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              لماذا تختار KH Accounting؟
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نتميز بالخبرة والمهنية في تقديم أفضل الخدمات المحاسبية
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                خدماتنا المتميزة
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                نقدم مجموعة شاملة من الخدمات المحاسبية والمالية التي تلبي احتياجات الشركات والأفراد
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 ml-3" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/services"
                className="inline-flex items-center bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                تفاصيل جميع الخدمات
                <ArrowLeft className="h-5 w-5 mr-2" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl">
              <img
                src="https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="خدمات محاسبية"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            هل تحتاج إلى استشارة محاسبية؟
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            تواصل معنا اليوم للحصول على استشارة مجانية وتعرف على كيفية تحسين وضعك المالي
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+971527559044"
              className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-5 w-5 ml-2" />
              اتصل الآن
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              أرسل رسالة
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;