import { motion } from "framer-motion";
import { FiAward, FiCloud, FiPieChart, FiCode, FiZap, FiServer, FiSettings } from "react-icons/fi";

const certifications = [
  { name: "AWS Certified Solutions Architect - Associate", provider: "AWS", icon: FiCloud },
  { name: "Java Programming and Software Engineering Fundamentals", provider: "Coursera", icon: FiCode },
  { name: "Spring Framework Specialization", provider: "Coursera", icon: FiZap },
  { name: "Building Scalable Java Microservices", provider: "Coursera", icon: FiServer },
  { name: "Full Stack Web Development with React", provider: "Coursera", icon: FiPieChart },
  { name: "DevOps Foundations: CI/CD", provider: "LinkedIn Learning", icon: FiSettings },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-widest uppercase font-body mb-2">Credentials</p>
          <h2 className="text-4xl md:text-8xl font-heading font-black text-foreground tracking-tighter">Certifications</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              className="flex items-center gap-6 rounded-[1.5rem] bg-card border border-border p-6 cursor-pointer card-3d-hover shadow-lg group overflow-hidden relative"
              initial={{ opacity: 0, y: 20, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 blur-3xl -z-10 rounded-full group-hover:bg-accent/20 transition-all duration-700" />
              <motion.div
                className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center shrink-0 shadow-lg card-3d-content"
                whileHover={{ rotateY: 360, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "anticipate" }}
              >
                <cert.icon className="text-accent-foreground" size={24} />
              </motion.div>
              <div className="card-3d-content">
                <p className="text-foreground font-heading font-black text-xs uppercase tracking-wider leading-relaxed">{cert.name}</p>
                <p className="text-accent font-heading font-bold text-[10px] uppercase tracking-[0.2em] mt-2 opacity-80">{cert.provider}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
