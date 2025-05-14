import { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import AcademicShowcase from '../components/sections/AcademicShowcase';
import TechnicalShowcase from '../components/sections/TechnicalShowcase';
import AchievementsShowcase from '../components/sections/AchievementsShowcase';
import VolunteerCTA from '../components/sections/VolunteerCTA';
import Testimonials from '../components/sections/Testimonials';

const HomePage = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Sample data for Technical Showcase
  const featuredCourses = [
    {
      img: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31',
      title: 'تطوير واجهات الويب',
      description: 'تعلم أساسيات HTML و CSS و JavaScript وكيفية بناء موقع ويب متكامل وتفاعلي',
      category: 'تطوير الويب',
      level: 'مبتدئ',
      duration: '8 أسابيع',
      link: '/technical/web-development'
    },
    {
      img: 'https://images.unsplash.com/photo-1544717305-2782549b5136',
      title: 'أساسيات البرمجة بلغة بايثون',
      description: 'دورة متكاملة في لغة البرمجة الأكثر طلباً في العالم مع مشاريع عملية',
      category: 'برمجة',
      level: 'مبتدئ',
      duration: '6 أسابيع',
      link: '/technical/python-basics'
    },
    {
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      title: 'تطبيقات الذكاء الاصطناعي',
      description: 'استكشف عالم الذكاء الاصطناعي وكيفية تطبيقه في حل المشكلات اليومية',
      category: 'ذكاء اصطناعي',
      level: 'متوسط',
      duration: '10 أسابيع',
      link: '/technical/ai-applications'
    }
  ];

  // Sample data for Achievements
  const featuredAchievements = [
    {
      img: 'https://images.unsplash.com/photo-1593985817890-c30237efd40a',
      title: 'هاكاثون الابتكار التقني',
      date: 'مارس 2023',
      description: 'تنظيم أول هاكاثون تقني بمشاركة أكثر من 200 مطور ومبتكر من مختلف أنحاء الأردن'
    },
    {
      img: 'https://images.unsplash.com/photo-1555967522-37949fc21dcb',
      title: 'إطلاق منصة رقيم التعليمية',
      date: 'يناير 2023',
      description: 'إطلاق المنصة الإلكترونية لتوفير موارد تعليمية مجانية لأكثر من 500 طالب في الأردن'
    },
    {
      img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176',
      title: 'شراكة مع وزارة التربية والتعليم',
      date: 'ديسمبر 2022',
      description: 'توقيع اتفاقية تعاون مع وزارة التربية والتعليم لدعم طلاب الثانوية العامة'
    }
  ];

  // Sample data for Testimonials
  const testimonials = [
    {
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'أحمد الخطيب',
      role: 'طالب توجيهي',
      quote: 'ساعدتني منصة رقيم كثيراً في فهم المواد العلمية بطريقة مبسطة، وكان للتمارين والاختبارات التجريبية دور كبير في تحسين أدائي واجتياز امتحانات التوجيهي بتفوق.'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      name: 'رنا السعدي',
      role: 'متطوعة ومدربة',
      quote: 'التطوع مع رقيم كان تجربة مميزة، أتاحت لي الفرصة لمشاركة خبرتي ومساعدة الآخرين، كما ساهمت في تطوير مهاراتي الشخصية والمهنية من خلال العمل مع فريق رائع.'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      name: 'خالد الحمصي',
      role: 'خريج برامج رقيم التقني',
      quote: 'التحقت بدورة تطوير الويب، وبعد أقل من 3 أشهر تمكنت من بناء موقعي الخاص والحصول على وظيفة في مجال البرمجة. المنهجية العملية والدعم المستمر كانا سر النجاح.'
    }
  ];

  // Image URLs from vision_expert_agent
  const heroImage = 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70';
  const academicImage = 'https://images.unsplash.com/photo-1503676382389-4809596d5290';
  const technicalImage = 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31';
  const volunteerImage = 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5';

  return (
    <>
      <HeroSection heroImage={heroImage} />
      <ServicesSection />
      <AcademicShowcase academicImage={academicImage} />
      <TechnicalShowcase courses={featuredCourses} technicalImage={technicalImage} />
      <AchievementsShowcase achievements={featuredAchievements} />
      <VolunteerCTA volunteerImage={volunteerImage} />
      <Testimonials testimonials={testimonials} />
    </>
  );
};

export default HomePage;