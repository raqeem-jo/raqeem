import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import TeamMemberCard from '../components/ui/TeamMemberCard';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample team members data
  const teamMembers = [
    {
      img: 'https://media.licdn.com/dms/image/v2/D4D03AQFFFE2tDRQCZw/profile-displayphoto-shrink_800_800/B4DZRqVkCQGUAc-/0/1736950826643?e=1752710400&v=beta&t=ZvE6ZghZmxoDOQAln-mWI9lmeYf6z4HRZNCsuEYR_fs',
      name: 'الاستاذ : بدر الحسبان',
      role: 'المؤسس والمدير التنفيذي',
      bio: 'خبير في التعليم التقني و مجال التدريس والتطوير التقني. حاصل على بكالوريس في علوم الحاسوب وساهم في العديد من المبادرات التعليمية.',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      img: 'https://nahno-new.s3.eu-west-3.amazonaws.com/user/profile-240821095058CVQDi.png',
      name: 'شهم الحسبان ',
      role: 'مدير البرامج التعليمية',
      bio: 'متخصص في تطوير المناهج التعليمية و تبسيط المفاهيم المعقدة.',
      socialLinks: {
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      img: 'https://randomuser.me/api/portraits/men/22.jpg',
      name: 'زهراء الغرايبة',
      role: 'مديرة العلاقات العامة',
      bio: 'مديرة العلاقات العامة في مبادرة رقيم تُشرف على التواصل الإعلامي وبناء الشراكات',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      img: 'https://randomuser.me/api/portraits/women/29.jpg',
      name: 'هدى العناسوة',
      role: 'مسؤولة التنظيم و المتابعة',
      bio: 'مسؤولة التنظيم والمتابعة في مبادرة رقيم، تتابع تنفيذ الأنشطة وتحرص على سير العمل بسلاسة وتنظيم فعّال لتحقيق أهداف المبادرة.',
      socialLinks: {
        twitter: '#',
        linkedin: '#'
      }
    }
  ];

  // Sample values data
  const coreValues = [
    {
      icon: '💡',
      title: 'الإبداع والابتكار',
      description: 'نعزز التفكير الإبداعي ونسعى دائماً لإيجاد حلول مبتكرة للتحديات التعليمية'
    },
    {
      icon: '🤝',
      title: 'التعاون',
      description: 'نؤمن بقوة العمل الجماعي والتعاون لتحقيق أهدافنا المشتركة وإحداث تأثير أكبر'
    },
    {
      icon: '🔄',
      title: 'التعلم المستمر',
      description: 'نلتزم بالتطوير المستمر وتحديث معارفنا ومهاراتنا لمواكبة التطورات التقنية'
    },
    {
      icon: '🌱',
      title: 'التمكين',
      description: 'نسعى لتمكين الأفراد من خلال المعرفة والمهارات التقنية لبناء مستقبل أفضل'
    },
    {
      icon: '⚖️',
      title: 'العدالة',
      description: 'نعمل على توفير فرص تعليمية عادلة للجميع بغض النظر عن خلفياتهم وظروفهم'
    },
    {
      icon: '🔍',
      title: 'الجودة',
      description: 'نلتزم بتقديم محتوى تعليمي عالي الجودة يلبي احتياجات المتعلمين ويحقق أهدافهم'
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
              من نحن
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-800/80 mb-8"
            >
              منصة رقيم هي مبادرة تعليمية تقنية تسعى لنشر الوعي التقني وتطوير المهارات الرقمية في المجتمع العربي، من خلال برامج تعليمية متكاملة ومبادرات مجتمعية هادفة.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 rounded-2xl h-full"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">🚀</span>
              </div>
              <h2 className="text-2xl font-heading font-semibold mb-4">رسالتنا</h2>
              <p className="text-neutral-800/70">
                تمكين الأفراد من خلال التعليم التقني المتميز، وتوفير موارد تعليمية عالية الجودة تلبي احتياجات سوق العمل المتغيرة، وبناء مجتمع تقني واعٍ وقادر على المنافسة عالمياً.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-8 rounded-2xl h-full"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">👁️</span>
              </div>
              <h2 className="text-2xl font-heading font-semibold mb-4">رؤيتنا</h2>
              <p className="text-neutral-800/70">
                أن نكون المنصة التعليمية الرائدة في المنطقة العربية في مجال التعليم التقني، وأن نساهم في بناء جيل من المبدعين والمبتكرين القادرين على قيادة التحول الرقمي في المنطقة.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="قصتنا"
            subtitle="رحلة بدأت بفكرة وتحولت إلى مبادرة"
            centered={true}
          />
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="prose prose-lg max-w-none text-neutral-800/80">
                <p>
                  بدأت مبادرة رقيم بورشة عمل صغيرة استهدفت تدريب طلاب الثانوية العامة على أساسيات البرمجة. ومع تزايد الإقبال وظهور الأثر الإيجابي على المشاركين، تطورت الفكرة لتصبح مبادرة شاملة تهدف إلى تمكين الشباب معرفيًا وتقنيًا.
                </p>
                <p>
                   في شهر أغسطس 2024، تم إطلاق مبادرة رقيم بشكل رسمي، وتوسعت برامجها لتشمل التدريب على المهارات الرقمية، الدعم الأكاديمي لطلبة التوجيهي، وورش العمل التقنية المتخصصة، بالإضافة إلى مبادرات تطوعية تخدم المجتمع المحلي.
                </p>
                <p>
حتى اليوم، نجحت رقيم في الوصول إلى أكثر من 3000 مستفيد من طلاب المدارس والجامعات والشباب من كلا الجنسين، من خلال تنفيذ أكثر من 35 تدريبًا وورشة عمل بالتعاون مع مؤسسات تعليمية وتقنية.                </p>
                <p>
                  اليوم، تفخر رقيم بخدمة أكثر من 3000 طالب ومتدرب، والتعاون مع العديد من المؤسسات التعليمية والشركات التقنية لتوفير فرص تعليمية وتدريبية متميزة.
                </p>
                <p>
                  ونحن مستمرون في التطوير والتوسع، مع الحفاظ على قيمنا الأساسية في الجودة والإبداع والتمكين، لتحقيق رؤيتنا في بناء مجتمع تقني واعٍ ومتطور.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="قيمنا الأساسية"
            subtitle="المبادئ التي توجه عملنا وتحدد هويتنا"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-heading font-semibold mb-2">{value.title}</h3>
                <p className="text-neutral-800/70 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="فريقنا"
            subtitle="نخبة من المختصين في مجالات التعليم والتكنولوجيا"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                img={member.img}
                name={member.name}
                role={member.role}
                bio={member.bio}
                socialLinks={member.socialLinks}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="شركاؤنا"
            subtitle="نفخر بشراكاتنا الاستراتيجية مع مؤسسات رائدة"
            centered={true}
          />
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                {/* Sample partner logos */}
                <div className="flex items-center justify-center p-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-500">P1</span>
                  </div>
                </div>
                <div className="flex items-center justify-center p-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-500">P2</span>
                  </div>
                </div>
                <div className="flex items-center justify-center p-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-500">P3</span>
                  </div>
                </div>
                <div className="flex items-center justify-center p-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-500">P4</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-dark to-accent-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            تواصل معنا
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            نحن دائماً متحمسون للتواصل مع الأفراد والمؤسسات المهتمة بالتعليم والتكنولوجيا. لا تتردد في الاتصال بنا لأي استفسار أو اقتراح.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-accent bg-white text-accent-dark hover:bg-gray-100">
              اتصل بنا
            </Link>
            <Link to="/volunteer" className="px-6 py-3 border border-white text-white font-semibold rounded-xl transition-all hover:bg-white/10">
              انضم كمتطوع
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;