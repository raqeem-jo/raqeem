import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const AcademicShowcase = ({ academicImage }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-light/10 to-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image Column */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -top-6 -right-6 w-full h-full bg-accent-light/30 rounded-2xl"></div>
              <img 
                src={academicImage} 
                alt="طلاب يدرسون" 
                className="relative z-10 rounded-2xl w-full h-auto shadow-xl"
              />
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-card absolute bottom-6 -left-6 p-4 rounded-xl shadow-lg z-20 max-w-xs"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 mr-3 flex items-center justify-center rounded-full bg-accent text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold">الرياضيات</h4>
                    <div className="text-sm text-primary-dark">للتوجيهي العلمي</div>
                  </div>
                </div>
                <div className="text-sm text-neutral-800/70">شرح مفصل وأمثلة محلولة لكافة دروس الرياضيات للفرع العلمي</div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <SectionHeading 
              title="رقيم أكاديمي"
              subtitle="برنامج متخصص لدعم طلاب الثانوية العامة (التوجيهي) في الأردن"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-neutral-800/80 mb-8"
            >
              <p>
                نقدم في رقيم أكاديمي محتوى تعليمي عالي الجودة لمساعدة طلاب التوجيهي على تحقيق أعلى الدرجات من خلال:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>شروحات مفصلة للمناهج الدراسية بأسلوب مبسط</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>أوراق عمل واختبارات تجريبية محاكية للاختبارات الرسمية</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>دورات تدريبية وحصص مراجعة مكثفة قبل الامتحانات</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>جلسات إرشادية فردية للتغلب على التحديات الدراسية</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/academic" className="btn-primary inline-block">
                تصفح المواد الدراسية
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicShowcase;