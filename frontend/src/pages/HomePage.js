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
      description: ' تعلم اساسيات و يقدمها المدرب البمدع : نورالدين الشنابلة  HTML و CSS و JavaScript وكيفية بناء موقع ويب متكامل وتفاعلي',
      category: 'تطوير الويب',
      level: 'مبتدئ',
      duration: 'قريبا',
      link: '/technical/web-development'
    },
    {
      img: 'https://images.unsplash.com/photo-1544717305-2782549b5136',
      title: 'أساسيات البرمجة بلغة بايثون',
      description: ' دورة متكاملة في لغة البرمجة الأكثر طلباً في العالم مع مشاريع عملية تقدمها المدربة : يمنى الغبور',
      category: 'برمجة',
      level: 'مبتدئ',
      duration: 'قريبا',
      link: 'https://media.istockphoto.com/id/492778884/vector/coming-soon-sign-hanging-isolated-on-white-wall.webp?s=2048x2048&w=is&k=20&c=prI1MbERttWelsIYgKMcg93diWehv3u_aIlP6Dkcg1M='
    },
    {
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      title: 'تطبيقات الذكاء الاصطناعي',
      description: '  استكشف عالم الذكاء الاصطناعي وكيفية تطبيقه في حل المشكلات اليومية يقدمها المدرب : بدر الحسبان',
      category: 'ذكاء اصطناعي',
      level: 'قريبا',
      duration: '',
      link: 'https://media.istockphoto.com/id/492778884/vector/coming-soon-sign-hanging-isolated-on-white-wall.webp?s=2048x2048&w=is&k=20&c=prI1MbERttWelsIYgKMcg93diWehv3u_aIlP6Dkcg1M='
    }
  ];

  // Sample data for Achievements
  const featuredAchievements = [
    {
      img: 'https://nahno-new.s3.eu-west-3.amazonaws.com/ngo/profile-240828173835yUMKE.png',
      title: ' اطلاق مبادرة رقيم  ',
      date: 'اغسطس 2024',
      description: 'من مكتب مؤسسة ولي العهد في محافظة المفرق انطلقت فكرة مبادرة رقيم بعد اخذ صناعة المبادرات الذي تم تنظيمه في المؤسسة'
    },
    {
      img: 'https://nahno-new.s3.eu-west-3.amazonaws.com/ngo/photo-250404185527a8bjr.png',
      title: ' جائزة الحسين للعمل التطوعي',
      date: 'ديسمبر   2024',
      description: ' مشاركة مبادرة رقيم في جائزة الحسين للعمل التطوعي'
    },
    {
      img: 'https://images.unsplash.com/photo-1555967522-37949fc21dchttps://media.istockphoto.com/id/1465801169/vector/3000-three-thousand-icon-on-blue-background-flat-design-with-long-shadow.jpg?s=612x612&w=0&k=20&c=xA0RJz1rEzi-0_AlMOf4QpByoujhI7ziGQIqho3iHSM=b',
      title: 'الوصول الى اكثر من 3000 مستفيد',
      date: 'مايو   2025',
      description: 'مبادرة رقيم وصلت إلى أكثر من 3000 مستفيد من طلاب المدارس، الجامعات، والشباب من كلا الجنسين، من خلال تنفيذ أكثر من 35 تدريبًا وورشة عمل في المجال التقني، بهدف تعزيز المهارات الرقمية وبناء قدرات الشباب لمواكبة التطورات التكنولوجية.'
    },

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
    </>
  );
};

export default HomePage;