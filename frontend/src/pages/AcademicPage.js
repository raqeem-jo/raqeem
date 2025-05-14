import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';

const AcademicPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample subjects data
  const subjects = [
    {
      name: 'الرياضيات',
      icon: '📐',
      streams: ['العلمي', 'الأدبي'],
      description: 'دروس وتمارين شاملة في الرياضيات للثانوية العامة تغطي جميع وحدات المنهاج'
    },
    {
      name: 'الفيزياء',
      icon: '⚛️',
      streams: ['العلمي'],
      description: 'شرح مفصل للمفاهيم الفيزيائية الأساسية مع حل أسئلة السنوات السابقة'
    },
    {
      name: 'الكيمياء',
      icon: '🧪',
      streams: ['العلمي'],
      description: 'تبسيط المفاهيم الكيميائية المعقدة مع تجارب افتراضية وتوضيحات بصرية'
    },
    {
      name: 'الأحياء',
      icon: '🔬',
      streams: ['العلمي'],
      description: 'شرح مفصل لعلم الأحياء بطريقة سهلة الفهم مع صور توضيحية وأنشطة تفاعلية'
    },
    {
      name: 'اللغة العربية',
      icon: '📚',
      streams: ['العلمي', 'الأدبي'],
      description: 'دروس شاملة في قواعد اللغة العربية والأدب والبلاغة مع نماذج إجابة نموذجية'
    },
    {
      name: 'اللغة الإنجليزية',
      icon: '🔤',
      streams: ['العلمي', 'الأدبي'],
      description: 'تطوير مهارات اللغة الإنجليزية مع تركيز على القواعد والمفردات ونماذج امتحان'
    },
    {
      name: 'التاريخ',
      icon: '🏛️',
      streams: ['الأدبي'],
      description: 'دراسة شاملة للتاريخ مع خرائط زمنية وملخصات للأحداث التاريخية الهامة'
    },
    {
      name: 'الجغرافيا',
      icon: '🌍',
      streams: ['الأدبي'],
      description: 'شرح المفاهيم الجغرافية مع خرائط تفاعلية وتحليل للظواهر الجغرافية'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 bg-gradient-to-l from-primary-dark to-accent-dark text-transparent bg-clip-text"
            >
              رقيم أكاديمي
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-800/80 mb-8"
            >
              برنامج متكامل لدعم طلاب الثانوية العامة (التوجيهي) في الأردن من خلال توفير المواد التعليمية عالية الجودة، والشروحات المبسطة، والاختبارات التجريبية
            </motion.p>
          </div>
        </div>
      </section>

      {/* Streams Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="الفروع الدراسية"
            subtitle="نوفر مواداً تعليمية لمختلف الفروع الدراسية في التوجيهي"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 rounded-2xl text-center"
            >
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🔬</span>
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-3">الفرع العلمي</h3>
              <p className="text-neutral-800/70 mb-6">
                مواد متخصصة في الرياضيات، الفيزياء، الكيمياء، الأحياء، واللغات، مع تركيز على المفاهيم العلمية والتطبيقات العملية.
              </p>
              <Link to="/academic/scientific" className="btn-primary inline-block">
                تصفح المواد العلمية
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-8 rounded-2xl text-center"
            >
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📚</span>
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-3">الفرع الأدبي</h3>
              <p className="text-neutral-800/70 mb-6">
                مواد مخصصة في اللغة العربية، التاريخ، الجغرافيا، واللغات، مع تركيز على المهارات اللغوية والتحليل الأدبي والنقدي.
              </p>
              <Link to="/academic/literary" className="btn-accent inline-block">
                تصفح المواد الأدبية
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="المواد الدراسية"
            subtitle="مجموعة متكاملة من المواد الدراسية لطلاب التوجيهي"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.2)'
                }}
                className="glass-card p-6 rounded-xl flex flex-col h-full"
              >
                <div className="mb-4 flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent/70 rounded-lg flex items-center justify-center text-2xl mr-3">
                    {subject.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold">{subject.name}</h3>
                </div>
                
                <p className="text-neutral-800/70 text-sm mb-4 flex-grow">
                  {subject.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {subject.streams.map((stream) => (
                    <span key={stream} className="text-xs bg-primary/10 text-primary-dark py-1 px-2 rounded-full">
                      {stream}
                    </span>
                  ))}
                </div>
                
                <Link to={`/academic/subject/${subject.name}`} className="text-accent font-medium hover:text-accent-dark transition-colors inline-flex items-center">
                  تصفح المادة
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="الموارد التعليمية"
            subtitle="مجموعة متنوعة من الموارد التعليمية لمساعدة الطلاب على التفوق"
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
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">ملخصات الدروس</h3>
              <p className="text-neutral-800/70 mb-4">
                ملخصات مركزة لجميع الدروس بأسلوب سهل وبسيط، مع التركيز على النقاط الأساسية والمفاهيم المهمة.
              </p>
              <Link to="/academic/summaries" className="text-primary font-medium hover:text-primary-dark transition-colors">
                تصفح الملخصات
              </Link>
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
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">امتحانات تجريبية</h3>
              <p className="text-neutral-800/70 mb-4">
                نماذج امتحانات محاكية للامتحانات الرسمية مع نماذج إجابة مفصلة ونصائح للتعامل مع أنواع الأسئلة المختلفة.
              </p>
              <Link to="/academic/exams" className="text-accent font-medium hover:text-accent-dark transition-colors">
                تصفح الاختبارات
              </Link>
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
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">فيديوهات تعليمية</h3>
              <p className="text-neutral-800/70 mb-4">
                مقاطع فيديو تعليمية تشرح المفاهيم المعقدة بطريقة مبسطة ومرئية، مع أمثلة توضيحية وشرح خطوة بخطوة.
              </p>
              <Link to="/academic/videos" className="text-primary font-medium hover:text-primary-dark transition-colors">
                مشاهدة الفيديوهات
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-dark to-accent-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            هل أنت مستعد للتفوق في التوجيهي؟
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            انضم إلى آلاف الطلاب الذين يستفيدون من موارد رقيم التعليمية. سجّل الآن للوصول إلى جميع المواد والدروس والاختبارات.
          </p>
          <Link to="/register" className="btn-accent inline-block">
            سجل الآن مجاناً
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AcademicPage;