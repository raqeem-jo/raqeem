import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import CourseCard from '../ui/CourseCard';

const TechnicalShowcase = ({ courses, technicalImage }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="رقيم تقني"
          subtitle="ورش عمل وتدريبات في مختلف المجالات التقنية"
          centered={true}
        />
        
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4 text-neutral-800/80"
            >
              <p>
                يقدم رقيم تقني مجموعة متنوعة من الورش والدورات التدريبية المصممة لتزويدك بالمهارات التقنية المطلوبة في سوق العمل، بإشراف مدربين محترفين وبمنهجية عملية تطبيقية.
              </p>
              
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="glass-card p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-neutral-800/70">ورشة تقنية</div>
                </div>
                <div className="glass-card p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary">300+</div>
                  <div className="text-sm text-neutral-800/70">خريج</div>
                </div>
              </div>
              
              <p>
                تتنوع مواضيع الورش لتشمل البرمجة، تطوير الويب، الذكاء الاصطناعي، الأمن السيبراني، وتحليل البيانات وغيرها من المجالات الحيوية في عصر التقنية.
              </p>
              
              <div className="mt-8">
                <Link to="/technical" className="btn-primary inline-block">
                  اكتشف جميع الورش التقنية
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-3 relative">
            <div className="absolute top-0 right-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <img 
                src={technicalImage} 
                alt="ورشة تدريبية تقنية" 
                className="rounded-2xl w-full h-auto shadow-xl"
              />
            </motion.div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard 
              key={index}
              img={course.img}
              title={course.title}
              description={course.description}
              category={course.category}
              level={course.level}
              duration={course.duration}
              link={course.link}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/technical" className="btn-accent inline-block">
            عرض جميع الدورات
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TechnicalShowcase;