import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import AchievementCard from '../components/ui/AchievementCard';

const AchievementsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample achievements data
  const achievements = [
    {
      img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754',
      title: 'هاكاثون الابتكار التقني',
      date: 'مارس 2023',
      description: 'تنظيم أول هاكاثون تقني بمشاركة أكثر من 200 مطور ومبتكر من مختلف أنحاء الأردن، واستمر لمدة 48 ساعة متواصلة، وتم خلاله تطوير 30 مشروعاً تقنياً مبتكراً.'
    },
    {
      img: 'https://images.unsplash.com/photo-1544531585-9847b68c8c86',
      title: 'إطلاق منصة رقيم التعليمية',
      date: 'يناير 2023',
      description: 'إطلاق المنصة الإلكترونية لتوفير موارد تعليمية مجانية لأكثر من 500 طالب في الأردن، مع تحديث المحتوى بشكل مستمر ليواكب آخر التطورات في المناهج الدراسية.'
    },
    {
      img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998',
      title: 'شراكة مع وزارة التربية والتعليم',
      date: 'ديسمبر 2022',
      description: 'توقيع اتفاقية تعاون مع وزارة التربية والتعليم لدعم طلاب الثانوية العامة، وتقديم برامج تدريبية للمعلمين في مجال استخدام التكنولوجيا في التعليم.'
    },
    {
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
      title: 'مبادرة المدارس الرقمية',
      date: 'نوفمبر 2022',
      description: 'إطلاق مبادرة لتجهيز 10 مدارس في المناطق النائية بأجهزة حاسوب وإنترنت، وتدريب الكوادر التعليمية على استخدام التقنيات الحديثة في العملية التعليمية.'
    },
    {
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      title: 'مؤتمر التكنولوجيا والتعليم',
      date: 'أكتوبر 2022',
      description: 'تنظيم أول مؤتمر متخصص في دمج التكنولوجيا في التعليم، بمشاركة خبراء محليين وعالميين، وحضور أكثر من 500 مشارك من المعلمين والمختصين والطلبة.'
    },
    {
      img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18',
      title: 'برنامج المنح التقنية',
      date: 'سبتمبر 2022',
      description: 'إطلاق برنامج منح لتدريب 100 شاب وشابة على المهارات التقنية المطلوبة في سوق العمل، بالتعاون مع شركات تكنولوجية محلية وعالمية.'
    },
    {
      img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b',
      title: 'نادي البرمجة للأطفال',
      date: 'أغسطس 2022',
      description: 'تأسيس أول نادي برمجة للأطفال من سن 8 إلى 14 سنة، بهدف تنمية مهارات التفكير المنطقي والإبداعي لديهم، وتعريفهم بأساسيات البرمجة بطريقة ممتعة.'
    },
    {
      img: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca',
      title: 'ملتقى المبرمجين الأردنيين',
      date: 'يوليو 2022',
      description: 'تنظيم أول ملتقى للمبرمجين الأردنيين، بهدف تبادل الخبرات وبناء شبكة علاقات مهنية، وتعزيز دور المجتمع التقني في دعم الاقتصاد الرقمي.'
    },
    {
      img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
      title: 'دراسة حول احتياجات سوق العمل التقني',
      date: 'مايو 2022',
      description: 'إجراء دراسة شاملة حول احتياجات سوق العمل التقني في الأردن، وتحديد الفجوات المهارية، وتقديم توصيات لتطوير البرامج التعليمية لتلبية هذه الاحتياجات.'
    }
  ];

  // Stats data
  const stats = [
    { value: "1000+", label: "طالب مستفيد" },
    { value: "25+", label: "فعالية ومبادرة" },
    { value: "50+", label: "متطوع نشط" },
    { value: "15+", label: "شراكة استراتيجية" }
  ];

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
              إنجازاتنا
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-800/80 mb-8"
            >
              نفخر بتأثيرنا الإيجابي في المجتمع ونسعى دائمًا لتحقيق المزيد من الإنجازات التي تساهم في نشر الوعي التقني وتطوير المهارات
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
            >
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-4 rounded-xl">
                  <div className="text-3xl font-heading font-bold text-accent-dark">{stat.value}</div>
                  <div className="text-sm text-neutral-800/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="مسيرة النجاح"
            subtitle="رحلة مليئة بالإنجازات والتأثير الإيجابي"
            centered={true}
          />
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute right-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
            
            {/* Timeline Items */}
            {achievements.slice(0, 5).map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute right-1/2 transform translate-x-1/2 w-5 h-5 rounded-full bg-primary"></div>
                
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                  <div className="glass-card rounded-xl p-6 h-full">
                    <div className="text-sm text-accent font-medium mb-2">{achievement.date}</div>
                    <h3 className="text-xl font-heading font-semibold mb-3">{achievement.title}</h3>
                    <p className="text-neutral-800/70 text-sm">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="المزيد من الإنجازات"
            subtitle="استكشف المزيد من قصص النجاح والتأثير"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.slice(5).map((achievement, index) => (
              <AchievementCard
                key={index}
                img={achievement.img}
                title={achievement.title}
                date={achievement.date}
                description={achievement.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 md:p-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-heading font-bold mb-4 bg-gradient-to-l from-primary-dark to-accent-dark text-transparent bg-clip-text"
                >
                  التأثير المستدام
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-neutral-800/70 mb-6"
                >
                  نؤمن في رقيم بأن التأثير الحقيقي يكون من خلال بناء القدرات وتمكين الأفراد من المساهمة في التنمية المستدامة. لذلك، نسعى دائماً إلى تصميم برامجنا ومبادراتنا بطريقة تضمن استمرارية التأثير على المدى الطويل.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>توفير فرص تعليمية لأكثر من 1000 طالب</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>تدريب 300+ شاب وشابة على المهارات التقنية</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>دعم 50+ مشروع تخرج لطلبة الجامعات</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>تقديم 1000+ ساعة تطوعية في مجال التوعية التقنية</span>
                  </div>
                </motion.div>
              </div>
              
              <div className="hidden lg:block relative">
                <div className="absolute inset-0 bg-gradient-to-bl from-primary/30 to-accent/30"></div>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  alt="تأثير رقيم"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-dark to-accent-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            شارك في صناعة المستقبل
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            انضم إلينا في رحلتنا لبناء مجتمع تقني واعٍ ومتطور. كن جزءاً من التغيير الإيجابي الذي نسعى لتحقيقه.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-accent bg-white text-accent-dark hover:bg-gray-100">
              انضم كمتطوع
            </button>
            <button className="px-6 py-3 border border-white text-white font-semibold rounded-xl transition-all hover:bg-white/10">
              ادعم مبادراتنا
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AchievementsPage;