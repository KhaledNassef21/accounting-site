import React from 'react';
import { Calendar, User, ArrowLeft, BookOpen, TrendingUp, Calculator, Shield } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "أساسيات المحاسبة للشركات الناشئة",
      excerpt: "دليل شامل لأصحاب الشركات الناشئة حول أهم المبادئ المحاسبية التي يجب معرفتها",
      content: "المحاسبة هي العمود الفقري لأي شركة ناشئة. في هذا المقال، سنتعرف على أهم المبادئ المحاسبية الأساسية...",
      author: "خالد ناصف",
      date: "15 نوفمبر 2024",
      category: "تعليمي",
      image: "https://images.pexels.com/photos/6863193/pexels-photo-6863193.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      id: 2,
      title: "كيفية إعداد الموازنة التقديرية",
      excerpt: "خطوات عملية لإعداد موازنة تقديرية فعالة تساعد في التخطيط المالي السليم",
      content: "الموازنة التقديرية أداة أساسية للتخطيط المالي. سنشرح في هذا المقال كيفية إعداد موازنة شاملة...",
      author: "أحمد محمد",
      date: "10 نوفمبر 2024",
      category: "التخطيط المالي",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      id: 3,
      title: "ضريبة القيمة المضافة في الإمارات",
      excerpt: "دليل شامل حول ضريبة القيمة المضافة وكيفية التعامل معها في دولة الإمارات",
      content: "منذ تطبيق ضريبة القيمة المضافة في الإمارات، أصبح من المهم فهم آلية عملها...",
      author: "سارة أحمد",
      date: "5 نوفمبر 2024",
      category: "ضرائب",
      image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Shield className="h-6 w-6" />
    },
    {
      id: 4,
      title: "تحليل النسب المالية وأهميتها",
      excerpt: "تعرف على أهم النسب المالية وكيفية استخدامها في تقييم الأداء المالي للشركة",
      content: "النسب المالية هي أدوات تحليلية مهمة تساعد في فهم الوضع المالي للشركة...",
      author: "خالد ناصف",
      date: "1 نوفمبر 2024",
      category: "تحليل مالي",
      image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Calculator className="h-6 w-6" />
    }
  ];

  const categories = [
    { name: "جميع المقالات", count: 25 },
    { name: "تعليمي", count: 8 },
    { name: "التخطيط المالي", count: 6 },
    { name: "ضرائب", count: 5 },
    { name: "تحليل مالي", count: 4 },
    { name: "نصائح", count: 2 }
  ];

  const recentPosts = [
    "أساسيات المحاسبة للشركات الناشئة",
    "كيفية إعداد الموازنة التقديرية",
    "ضريبة القيمة المضافة في الإمارات",
    "تحليل النسب المالية وأهميتها"
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">المدونة</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            مقالات ونصائح مفيدة في عالم المحاسبة والتخطيط المالي
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                          {post.icon}
                          <span className="mr-2">{post.category}</span>
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                      
                      <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 ml-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 ml-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      
                      <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                        اقرأ المزيد
                        <ArrowLeft className="h-4 w-4 mr-2" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex space-x-2 space-x-reverse">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                    السابق
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">2</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">3</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                    التالي
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Categories */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">التصنيفات</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <button className="flex justify-between items-center w-full text-right py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <span className="text-gray-700">{category.name}</span>
                          <span className="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Posts */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">المقالات الحديثة</h3>
                  <ul className="space-y-3">
                    {recentPosts.map((post, index) => (
                      <li key={index}>
                        <button className="text-right text-gray-700 hover:text-blue-600 transition-colors leading-relaxed">
                          {post}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">اشترك في النشرة البريدية</h3>
                  <p className="text-gray-600 mb-4">احصل على أحدث المقالات والنصائح المالية</p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="البريد الإلكتروني"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      اشترك الآن
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;