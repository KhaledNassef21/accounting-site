import React, { useState } from 'react';
import { Check, Star, ArrowLeft, Calculator, Users, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('business');

  const plans = [
    {
      id: 'basic',
      name: 'الباقة الأساسية',
      icon: <Calculator className="h-8 w-8 text-blue-600" />,
      description: 'مناسبة للأفراد والشركات الصغيرة',
      price: '1,500',
      period: 'شهرياً',
      features: [
        'مسك الدفاتر الأساسية',
        'إعداد الفواتير',
        'متابعة الحسابات',
        'تقرير مالي شهري',
        'دعم عبر الهاتف',
        'حتى 50 عملية شهرياً'
      ],
      popular: false
    },
    {
      id: 'business',
      name: 'باقة الأعمال',
      icon: <Users className="h-8 w-8 text-green-600" />,
      description: 'الأنسب للشركات المتوسطة',
      price: '3,500',
      period: 'شهرياً',
      features: [
        'جميع مميزات الباقة الأساسية',
        'إعداد القوائم المالية',
        'الإقرارات الضريبية',
        'استشارات مالية',
        'تقارير تفصيلية',
        'دعم مخصص',
        'حتى 200 عملية شهرياً',
        'اجتماعات دورية'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'باقة المؤسسات',
      icon: <Building className="h-8 w-8 text-purple-600" />,
      description: 'للشركات الكبيرة والمؤسسات',
      price: 'حسب الطلب',
      period: '',
      features: [
        'جميع مميزات باقة الأعمال',
        'مراجعة داخلية وخارجية',
        'استشارات استراتيجية',
        'فريق محاسبين مخصص',
        'تقارير فورية',
        'دعم على مدار الساعة',
        'عمليات غير محدودة',
        'تدريب الموظفين'
      ],
      popular: false
    }
  ];

  const additionalServices = [
    { name: 'إعداد دراسة جدوى', price: 'من 2,000 درهم' },
    { name: 'تقييم الأصول', price: 'من 1,500 درهم' },
    { name: 'تدقيق خاص', price: 'من 5,000 درهم' },
    { name: 'استشارة مالية متخصصة', price: '500 درهم/ساعة' },
    { name: 'تأسيس شركة', price: 'من 3,000 درهم' },
    { name: 'تحليل مالي شامل', price: 'من 2,500 درهم' }
  ];

  const faqs = [
    {
      question: 'هل يمكن تغيير الباقة لاحقاً؟',
      answer: 'نعم، يمكنك ترقية أو تخفيض باقتك في أي وقت حسب احتياجاتك.'
    },
    {
      question: 'ما هي طرق الدفع المتاحة؟',
      answer: 'نقبل الدفع نقداً، بالشيك، أو التحويل البنكي. يمكن الدفع شهرياً أو سنوياً.'
    },
    {
      question: 'هل تقدمون ضمان على الخدمات؟',
      answer: 'نعم، نضمن جودة خدماتنا ونلتزم بإعادة العمل في حالة وجود أخطاء.'
    },
    {
      question: 'كم يستغرق إعداد القوائم المالية؟',
      answer: 'عادة ما يستغرق إعداد القوائم المالية من 3-7 أيام عمل حسب حجم الشركة.'
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">باقات الأسعار</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            اختر الباقة المناسبة لاحتياجاتك مع إمكانية التخصيص حسب متطلباتك الخاصة
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 ${
                  plan.popular ? 'ring-2 ring-blue-600 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 ml-1" />
                      الأكثر شعبية
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-gray-600 text-lg"> درهم {plan.period}</span>}
                  </div>
                </div>

                <div className="mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  اختر هذه الباقة
                </button>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              خدمات إضافية
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-blue-600 font-semibold">{service.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              الأسئلة الشائعة
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-900 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">هل تحتاج إلى عرض سعر مخصص؟</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              تواصل معنا للحصول على عرض سعر مخصص يناسب احتياجاتك الخاصة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
              >
                طلب عرض سعر
                <ArrowLeft className="h-5 w-5 mr-2" />
              </Link>
              <a
                href="tel:+971527559044"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                اتصل للاستفسار
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;