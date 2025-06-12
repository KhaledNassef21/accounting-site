import React from 'react';
import { Users, Target, Award, TrendingUp, CheckCircle, Star } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "خالد ناصف",
      position: "المدير التنفيذي",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "خبرة أكثر من 7 أعوام في المحاسبة والاستشارات المالية - حاصل على ماجستير مهني في المحاسبة"
    },
    {
      name: "أحمد محمد",
      position: "مدير المحاسبة",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "متخصص في القوائم المالية والمراجعة الداخلية"
    },
    {
      name: "سارة أحمد",
      position: "مستشار ضريبي",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "خبيرة في الضرائب والامتثال للوائح المحلية"
    }
  ];

  const achievements = [
    { number: "500+", label: "عميل راضٍ" },
    { number: "15+", label: "سنة خبرة" },
    { number: "1000+", label: "مشروع مكتمل" },
    { number: "99%", label: "معدل رضا العملاء" }
  ];

  const values = [
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: "الشفافية",
      description: "نتعامل مع عملائنا بصراحة ووضوح في جميع الأمور المالية"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "الجودة",
      description: "نلتزم بأعلى معايير الجودة في جميع خدماتنا المحاسبية"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "الخدمة المميزة",
      description: "نركز على بناء علاقات طويلة الأمد مع عملائنا"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "النمو المستدام",
      description: "نساعد عملاءنا على تحقيق النمو المالي المستدام"
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">من نحن</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            شركة KH Accounting هي شريكك الموثوق في عالم المحاسبة والاستشارات المالية
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                قصتنا
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                تأسست شركة KH Accounting بهدف تقديم خدمات محاسبية ومالية متميزة للشركات والأفراد في دولة 
                الإمارات العربية المتحدة. منذ تأسيسنا، نسعى لأن نكون الخيار الأول لعملائنا في مجال المحاسبة 
                والاستشارات المالية.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                نفخر بفريقنا من المحاسبين المؤهلين والمعتمدين الذين يمتلكون خبرة واسعة في مختلف القطاعات. 
                نحن نؤمن بأن النجاح يأتي من خلال الالتزام بأعلى معايير الجودة والمهنية.
              </p>
              <div className="flex items-center">
                <Star className="h-6 w-6 text-yellow-500 ml-2" />
                <span className="text-gray-700 font-semibold">أكثر من 15 عاماً من التميز والإبداع</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="مكتب KH Accounting"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-blue-50 p-8 rounded-xl">
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">رؤيتنا</h3>
              <p className="text-gray-700 leading-relaxed">
                أن نكون الشركة الرائدة في تقديم الخدمات المحاسبية والاستشارات المالية في المنطقة، 
                ونساهم في نمو ونجاح عملائنا من خلال تقديم حلول مبتكرة وموثوقة.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl">
              <Award className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">رسالتنا</h3>
              <p className="text-gray-700 leading-relaxed">
                نلتزم بتقديم خدمات محاسبية عالية الجودة، ونساعد عملاءنا على اتخاذ قرارات مالية صحيحة 
                من خلال فريق من الخبراء المؤهلين والأدوات المتطورة.
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-gray-50 py-16 px-8 rounded-2xl mb-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">إنجازاتنا بالأرقام</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                  <div className="text-gray-700 font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">قيمنا</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div>
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">فريق العمل</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                    <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                    <p className="text-gray-600 leading-relaxed">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;