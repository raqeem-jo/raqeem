import { CalendarIcon, UserGroupIcon, AcademicCapIcon, ServerIcon, ChartBarIcon, CubeTransparentIcon } from '@heroicons/react/24/outline';
import SectionHeading from '../ui/SectionHeading';
import FeatureCard from '../ui/FeatureCard';

const ServicesSection = () => {
  const services = [
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "رقيم أكاديمي",
      description: "مواد تعليمية متكاملة لطلاب الثانوية العامة (التوجيهي) في الأردن، مصممة لتبسيط المفاهيم المعقدة وتحقيق النجاح."
    },
    {
      icon: <ServerIcon className="h-6 w-6" />,
      title: "رقيم تقني",
      description: "ورش عمل وتدريبات عملية في مجالات تقنية متنوعة تشمل البرمجة، تطوير المواقع، الذكاء الاصطناعي، وأمن المعلومات."
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "برنامج التطوع",
      description: "انضم إلى فريق المتطوعين وساهم في نشر المعرفة التقنية، وتطوير مهاراتك العملية من خلال المشاركة في مشاريع حقيقية."
    },
    {
      icon: <CalendarIcon className="h-6 w-6" />,
      title: "فعاليات متنوعة",
      description: "نقدم فعاليات دورية مثل هاكاثونات، مؤتمرات تقنية، ونشاطات مجتمعية تهدف لتعزيز التواصل والتعلم المستمر."
    },
    {
      icon: <ChartBarIcon className="h-6 w-6" />,
      title: "متابعة التقدم",
      description: "أدوات متقدمة لمتابعة تقدمك في البرامج التعليمية، مع تقييمات دورية واستشارات مخصصة لتحسين أدائك."
    },
    {
      icon: <CubeTransparentIcon className="h-6 w-6" />,
      title: "موارد مفتوحة",
      description: "مكتبة غنية من المصادر التعليمية المفتوحة، تشمل كتباً، مقالات، ومقاطع فيديو تعليمية في مختلف المجالات التقنية."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="خدماتنا"
          subtitle="نقدم مجموعة متكاملة من الخدمات التعليمية والتقنية لمساعدتك على تطوير مهاراتك وتحقيق أهدافك"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FeatureCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;