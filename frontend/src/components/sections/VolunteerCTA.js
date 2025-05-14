import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const VolunteerCTA = ({ volunteerImage }) => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative glass-card rounded-3xl overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={volunteerImage}
              alt="متطوعون يعملون سوياً"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-30"></div>
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-10 md:p-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 bg-gradient-to-l from-primary-dark to-accent-dark text-transparent bg-clip-text">
                انضم لفريق المتطوعين وشارك في صناعة التغيير
              </h2>
              <p className="text-lg text-neutral-800/70 mb-8">
                نحن نؤمن بأن العمل التطوعي يمكن أن يكون تجربة مثرية وملهمة. انضم إلى فريقنا وساهم بمهاراتك ووقتك في نشر المعرفة التقنية ومساعدة الآخرين على تطوير قدراتهم.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/50 rounded-xl p-4 text-center">
                  <div className="font-heading font-bold text-2xl text-primary-dark">15+</div>
                  <div className="text-sm text-neutral-800/70">مجال تطوعي</div>
                </div>
                <div className="bg-white/50 rounded-xl p-4 text-center">
                  <div className="font-heading font-bold text-2xl text-primary-dark">50+</div>
                  <div className="text-sm text-neutral-800/70">متطوع نشط</div>
                </div>
                <div className="bg-white/50 rounded-xl p-4 text-center">
                  <div className="font-heading font-bold text-2xl text-primary-dark">1000+</div>
                  <div className="text-sm text-neutral-800/70">ساعة تطوعية</div>
                </div>
              </div>
              
              <Link to="/volunteer" className="btn-accent inline-block">
                سجل كمتطوع الآن
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-6 w-full max-w-md"
            >
              <h3 className="text-xl font-heading font-semibold mb-4 text-center">مجالات التطوع</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-neutral-800">التدريس والإرشاد الأكاديمي</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-neutral-800">تطوير المحتوى التعليمي</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-neutral-800">تنظيم الفعاليات والورش</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-neutral-800">التصميم والإنتاج الإبداعي</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-neutral-800">تطوير البرمجيات والمنصات</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerCTA;