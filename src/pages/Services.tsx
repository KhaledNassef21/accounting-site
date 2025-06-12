import React from 'react';
import { Calculator, FileText, TrendingUp, Shield, Users, Briefcase, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Calculator className="h-12 w-12 text-blue-600" />,
      title: "مسك الدفاتر المحاسبية",
      description: "خدمات شاملة لمسك الدفاتر المحاسبية وتسجيل العمليات المالية بدقة واحترافية",
      features: [
        "تسجيل العمليات المالية اليومية",
        "إعداد دفتر الأستاذ العام",
        "متابعة الحسابات الدائنة والمدينة",
        "إعداد ميزان المراجعة الشهري"
      ],
      price: "ابتداءً من 1,500 درهم شهرياً"
    },
    {
      icon: <FileText className="h-12 w-12 text-green-600" />,
      title: "إعداد القوائم المالية",
      description: "إعداد القوائم المالية الأساسية وفقاً للمعايير المحاسبية المعتمدة",
      features: [
        "قائمة المركز المالي",
        "قائمة الدخل الشامل",
        "قائمة التدفقات النقدية",
        "قائمة التغيرات في حقوق الملكية"
      ],
      price: "ابتداءً من 2,500 درهم ربعياً"
    },
    {
      icon: <Shield className="h-12 w-12 text-red-600" />,
      title: "الإقرارات الضريبية",
      description: "إعداد وتقديم الإقرارات الضريبية والامتثال لجميع اللوائح الضريبية",
      features: [
        "إعداد إقرار ضريبة القيمة المضافة",
        "إعداد إقرار ضريبة الدخل",
        "متابعة التحديثات الضريبية",
        "تمثيل العميل أمام الجهات الضريبية"
      ],
      price: "ابتداءً من 800 درهم شهرياً"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-purple-600" />,
      title: "الاستشارات المالية",
      description: "تقديم المشورة المالية الاستراتيجية لاتخاذ قرارات مالية صحيحة",
      features: [
        "تحليل الأداء المالي",
        "التخطيط المالي طويل المدى",
        "تقييم الاستثمارات",
        "إدارة التدفق النقدي"
      ],
      price: "ابتداءً من 1,200 درهم للجلسة"
    },
    {
      icon: <Users className="h-12 w-12 text-orange-600" />,
      title: "مراجعة الحسابات",
      description: "خدمات مراجعة داخلية وخارجية لضمان دقة البيانات المالية",
      features: [
        "المراجعة الداخلية",
        "المراجعة الخارجية",
        "تقييم نظم الرقابة الداخلية",
        "إعداد تقارير المراجعة"
      ],
      price: "حسب حجم الشركة"
    },
    {
      icon: <Briefcase className="h-12 w-12 text-teal-600" />,
      title: "التخطيط المالي",
      description: "وضع خطط مالية شاملة تساعد على تحقيق الأهداف المالية",
      features: [
        "وضع الموازنات التقديرية",
        "تحليل الانحرافات",
        "التنبؤ المالي",
        "تحليل الربحية"
      ],
      price: "ابتداءً من 3,000 درهم"
    }
  ];

  const benefits = [
    "توفير الوقت والجهد",
    "دقة في البيانات المالية",
    "امتثال للوائح المحلية",
    "تحسين الأداء المالي",
    "تقليل المخاطر المالية",
    "اتخاذ قرارات مدروسة"
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">خدماتنا</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات المحاسبية والمالية المصممة لتلبية احتياجات الشركات والأفراد
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">ما يشمله:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 ml-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t pt-4">
                  <p className="text-blue-600 font-semibold">{service.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              فوائد اختيار خدماتنا
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow">
                  <CheckCircle className="h-6 w-6 text-green-500 ml-3" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">كيف نعمل</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">التواصل الأولي</h3>
                <p className="text-gray-600">نتواصل معك لفهم احتياجاتك ومتطلباتك</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">التقييم والتحليل</h3>
                <p className="text-gray-600">نقوم بتحليل وضعك المالي الحالي</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">وضع الخطة</h3>
                <p className="text-gray-600">نضع خطة عمل مخصصة لاحتياجاتك</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">التنفيذ والمتابعة</h3>
                <p className="text-gray-600">ننفذ الخطة مع متابعة دورية</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-900 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">هل تحتاج إلى مساعدة؟</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              تواصل معنا للحصول على استشارة مجانية وتحديد أفضل الخدمات المناسبة لك
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              احجز استشارة مجانية
              <ArrowLeft className="h-5 w-5 mr-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;