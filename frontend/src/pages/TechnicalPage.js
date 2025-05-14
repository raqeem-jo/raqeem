import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import CourseCard from '../components/ui/CourseCard';

const TechnicalPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFilter, setActiveFilter] = useState('all');
  
  // Sample courses data
  const allCourses = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      title: 'تطوير واجهات الويب',
      description: 'تعلم أساسيات HTML و CSS و JavaScript وكيفية بناء موقع ويب متكامل وتفاعلي',
      category: 'تطوير الويب',
      level: 'مبتدئ',
      duration: '8 أسابيع',
      link: '/technical/web-development'
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb',
      title: 'أساسيات البرمجة بلغة بايثون',
      description: 'دورة متكاملة في لغة البرمجة الأكثر طلباً في العالم مع مشاريع عملية',
      category: 'برمجة',
      level: 'مبتدئ',
      duration: '6 أسابيع',
      link: '/technical/python-basics'
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72',
      title: 'تطبيقات الذكاء الاصطناعي',
      description: 'استكشف عالم الذكاء الاصطناعي وكيفية تطبيقه في حل المشكلات اليومية',
      category: 'ذكاء اصطناعي',
      level: 'متوسط',
      duration: '10 أسابيع',
      link: '/technical/ai-applications'
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
      title: 'تصميم قواعد البيانات',
      description: 'تعلم كيفية تصميم وإدارة قواعد البيانات بكفاءة باستخدام SQL و NoSQL',
      category: 'قواعد بيانات',
      level: 'متوسط',
      duration: '6 أسابيع',
      link: '/technical/database-design'
    },
    {
      id: 5,
      img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
      title: 'تطوير تطبيقات الموبايل',
      description: 'بناء تطبيقات متعددة المنصات باستخدام React Native وFutter',
      category: 'تطوير التطبيقات',
      level: 'متقدم',
      duration: '12 أسبوع',
      link: '/technical/mobile-apps'
    },
    {
      id: 6,
      img: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f',
      title: 'أمن المعلومات والشبكات',
      description: 'تعلم أساسيات حماية المعلومات وتأمين الأنظمة والشبكات ضد الاختراقات',
      category: 'أمن معلومات',
      level: 'متوسط',
      duration: '8 أسابيع',
      link: '/technical/cybersecurity'
    },
    {
      id: 7,
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      title: 'تحليل البيانات وعلم البيانات',
      description: 'استخدام الأدوات والتقنيات الحديثة لتحليل البيانات واستخراج الرؤى المفيدة',
      category: 'علم البيانات',
      level: 'متوسط',
      duration: '10 أسابيع',
      link: '/technical/data-science'
    },
    {
      id: 8,
      img: 'https://images.unsplash.com/photo-1559028012-481c04fa702d',
      title: 'تطوير ألعاب الفيديو',
      description: 'تعلم أساسيات تطوير الألعاب باستخدام Unity وC# مع مشاريع عملية',
      category: 'تطوير الألعاب',
      level: 'مبتدئ',
      duration: '8 أسابيع',
      link: '/technical/game-development'
    },
    {
      id: 9,
      img: 'https://images.unsplash.com/photo-1593642532400-2682810df593',
      title: 'الحوسبة السحابية وDevOps',
      description: 'تعلم المفاهيم والأدوات الأساسية في الحوسبة السحابية وممارسات DevOps',
      category: 'حوسبة سحابية',
      level: 'متقدم',
      duration: '10 أسابيع',
      link: '/technical/cloud-devops'
    }
  ];
  
  // Extract unique categories
  const categories = ['all', ...new Set(allCourses.map(course => course.category))];
  
  // Filter courses based on active filter
  const filteredCourses = activeFilter === 'all' 
    ? allCourses 
    : allCourses.filter(course => course.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent/20 to-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 bg-gradient-to-l from-primary-dark to-accent-dark text-transparent bg-clip-text"
            >
              رقيم تقني
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-800/80 mb-8"
            >
              برنامج متخصص لتنمية المهارات التقنية من خلال ورش عمل تفاعلية ودورات تدريبية عملية في مختلف المجالات التكنولوجية
            </motion.p>
          </div>
        </div>
      </section>

      {/* Courses Filter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="الدورات والورش التقنية"
            subtitle="اختر من بين مجموعة متنوعة من الدورات المصممة لتطوير مهاراتك التقنية"
            centered={true}
          />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeFilter === category
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-neutral-800 hover:bg-accent/20'
                }`}
              >
                {category === 'all' ? 'جميع الدورات' : category}
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredCourses.map((course, index) => (
              <CourseCard
                key={course.id}
                img={course.img}
                title={course.title}
                description={course.description}
                category={course.category}
                level={course.level}
                duration={course.duration}
                link={course.link}
                delay={index * 0.05}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="لماذا تختار رقيم تقني؟"
            subtitle="نقدم تجربة تعليمية مميزة تجمع بين النظرية والتطبيق العملي"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 rounded-2xl text-center"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">مدربون محترفون</h3>
              <p className="text-neutral-800/70">
                فريق من المدربين ذوي الخبرة العملية في مجالاتهم، يقدمون المعرفة بطريقة مبسطة وعملية.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6 rounded-2xl text-center"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                  <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                  <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">مشاريع عملية</h3>
              <p className="text-neutral-800/70">
                تركيز على الجانب العملي من خلال مشاريع واقعية تساعدك على تطبيق ما تعلمته بشكل مباشر.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card p-6 rounded-2xl text-center"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">مجتمع داعم</h3>
              <p className="text-neutral-800/70">
                انضم إلى مجتمع من المتعلمين والمطورين للتواصل وتبادل الخبرات والحصول على الدعم المستمر.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Sample) */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            title="ماذا يقول المتدربون"
            subtitle="آراء المشاركين في برامجنا التقنية"
            centered={true}
          />
          
          <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/2.jpg" 
                  alt="خالد الحمصي" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-heading font-semibold">خالد الحمصي</h3>
              <div className="text-accent mb-4">مطور ويب</div>
              
              <div className="text-4xl text-accent-light mb-3">❝</div>
              <p className="text-lg text-neutral-800/80 max-w-2xl">
                التحقت بدورة تطوير الويب، وبعد أقل من 3 أشهر تمكنت من بناء موقعي الخاص والحصول على وظيفة في مجال البرمجة. المنهجية العملية والدعم المستمر كانا سر النجاح.
              </p>
              <div className="text-4xl text-accent-light mt-3">❞</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-dark to-accent-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            ابدأ رحلتك في عالم التقنية اليوم
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            سجل الآن في إحدى دوراتنا التدريبية وابدأ في تطوير مهاراتك التقنية. فرص عديدة تنتظرك في عالم التكنولوجيا!
          </p>
          <button className="btn-accent inline-block bg-white text-accent-dark hover:bg-gray-100">
            سجل في إحدى الدورات
          </button>
        </div>
      </section>
    </div>
  );
};

export default TechnicalPage;