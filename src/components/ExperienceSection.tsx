import { motion } from "framer-motion";
import { useState } from "react";
import { FiBriefcase, FiChevronDown, FiChevronUp, FiMapPin, FiCalendar, FiTrendingUp } from "react-icons/fi";

const experiences = [
  {
    title: "Java Developer",
    company: "CBRE (IFM Hub Project)",
    location: "Richardson, TX",
    period: "Aug 2025 - Present",
    highlights: [
      "Built four Spring Boot microservices in Java to manage billing operations including charge calculation and invoicing",
      "Increased transaction throughput by 35% and stabilized processing for high-volume financial data",
      "Designed RESTful APIs using Spring MVC and documented endpoints with OpenAPI",
      "Enabled Kafka-based event streaming to support asynchronous communication and improve integration scalability",
      "Optimized PostgreSQL schema design with Spring Data JPA and Hibernate, improving query performance by 40%",
      "Introduced fault tolerance using Spring Cloud and Resilience4j patterns like circuit breaker and retry",
      "Secured backend services through Spring Security with JWT and RBAC",
      "Automated CI/CD pipelines using Azure DevOps, shortening release cycles by 45%",
    ],
  },
  {
    title: "Java Developer Intern",
    company: "Globpey",
    location: "Plano, TX",
    period: "Feb 2025 - Jun 2025",
    highlights: [
      "Engineered and developed REST APIs using Java and Spring Boot for core payment workflows",
      "Improved service modularity and increased backend maintainability by 40%",
      "Integrated external payment gateways and internal services through REST APIs and Apache Kafka",
      "Refined MySQL performance using Spring Data JPA and Hibernate, reducing API response time by 50%",
      "Strengthened service resilience by implementing Resilience4j with Spring Boot",
      "Enforced secure access to APIs using Spring Security with JWT and RBAC",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Ford Motor Company",
    location: "Chennai, India",
    period: "Oct 2021 - Aug 2023",
    highlights: [
      "Built scalable backend services using Java and Spring Boot with React.js for FordPass features",
      "Improved application responsiveness by 40% and enhanced real-time user experience",
      "Implemented and exposed REST APIs and integrated Apache Kafka for event-driven vehicle data processing",
      "Strengthened application security using Spring Security with JWT and RBAC",
      "Optimized PostgreSQL and MongoDB queries, reducing data retrieval time by 35%",
      "Containerized applications using Docker and deployed on Kubernetes with GCP Cloud Run",
      "Automated build and deployment processes using Jenkins integrated with Maven and SonarQube",
    ],
  },
  {
    title: "Software Engineer",
    company: "Appszone Technologies",
    location: "Chennai, India",
    period: "Sep 2020 - Sep 2021",
    highlights: [
      "Engineered a full stack healthcare claims platform using Java, Spring Boot and Angular",
      "Improved claims processing efficiency by 30% and streamlined workflows",
      "Created REST APIs for claims submission, eligibility checks, and reporting features",
      "Developed responsive UI components using Angular and integrated them with backend APIs",
      "Enhanced MySQL operations with indexing and query tuning, reducing retrieval time by 35%",
      "Established unit testing using JUnit within Maven-based builds following TDD practices",
      "Provisioned application deployments on AWS using Elastic Beanstalk with Docker",
    ],
  },
];

const ExperienceCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      className="rounded-[2rem] bg-card border border-border overflow-hidden card-3d-hover shadow-xl relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? 15 : -15 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7, type: "spring" }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 md:gap-6">
          <motion.div
            className="w-12 h-12 md:w-16 md:h-16 rounded-2xl gradient-accent flex items-center justify-center shrink-0 shadow-lg card-3d-content"
            whileHover={{ rotateY: 180, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <FiBriefcase className="text-accent-foreground" size={24} />
          </motion.div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl md:text-2xl font-heading font-black text-foreground group-hover:text-accent transition-colors leading-tight">{exp.title}</h3>
            <p className="text-accent font-heading font-bold text-sm md:text-base mt-2 tracking-wide uppercase">{exp.company}</p>
            <div className="flex flex-wrap gap-2 md:gap-4 mt-3 text-muted-foreground text-[10px] md:text-xs font-heading font-bold uppercase tracking-widest justify-center sm:justify-start">
              <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-full"><FiCalendar size={12} className="text-accent" />{exp.period}</span>
              <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-full"><FiMapPin size={12} className="text-accent" />{exp.location}</span>
            </div>
          </div>
        </div>
        <motion.div
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-border flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 shrink-0"
          animate={{ rotate: expanded ? 180 : 0, scale: expanded ? 1.1 : 1 }}
        >
          <FiChevronDown size={20} />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
        className="overflow-hidden"
      >
        <div className="px-8 pb-10 pt-2 card-3d-content">
          <div className="h-px w-full bg-border mb-8" />
          <ul className="grid md:grid-cols-2 gap-4">
            {exp.highlights.map((h, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-muted-foreground font-body text-base group/item"
                initial={{ opacity: 0, y: 10 }}
                animate={expanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="w-8 h-8 rounded-lg bg-accent/5 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-accent group-hover/item:text-accent-foreground transition-all">
                  <FiTrendingUp size={16} />
                </div>
                <span className="group-hover/item:text-foreground transition-colors">{h}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[100px] -z-10 rounded-full" />
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-accent text-sm tracking-[0.4em] uppercase font-heading font-black mb-4">Journey</p>
          <h2 className="text-4xl md:text-8xl font-heading font-black text-foreground tracking-tighter">
            Professional Experience
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
