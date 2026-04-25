import { motion } from "framer-motion";
import {
  FiPieChart, FiCode, FiCloud, FiShield, FiServer, FiZap, FiDatabase, FiActivity, FiBarChart2, FiCheckCircle
} from "react-icons/fi";

const skillCategories = [
  {
    icon: FiCode,
    title: "Programming Languages",
    skills: ["Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    icon: FiServer,
    title: "Backend Development",
    skills: ["Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA", "Hibernate", "Spring Cloud", "Spring WebFlux", "Microservices", "REST APIs", "GraphQL", "OpenAPI (Swagger)", "Feign Client", "Resilience4j"],
  },
  {
    icon: FiPieChart,
    title: "Frontend Development",
    skills: ["React.js", "Angular", "HTML5", "CSS3"],
  },
  {
    icon: FiDatabase,
    title: "Data & Persistence",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    icon: FiCloud,
    title: "Cloud & Distributed Systems",
    skills: ["AWS (Lambda, API Gateway, ECS, EKS, S3, CloudFront, IAM)", "GCP (Cloud Run, Pub/Sub)", "Serverless Architecture"],
  },
  {
    icon: FiZap,
    title: "DevOps & CI/CD",
    skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Azure DevOps", "Terraform", "Maven", "Gradle"],
  },
  {
    icon: FiActivity,
    title: "Event Streaming & Integration",
    skills: ["Apache Kafka", "Event-Driven Architecture"],
  },
  {
    icon: FiShield,
    title: "Security & Authentication",
    skills: ["Spring Security", "JWT", "OAuth2", "RBAC"],
  },
  {
    icon: FiBarChart2,
    title: "Observability & Monitoring",
    skills: ["Prometheus", "Grafana", "Splunk", "Datadog"],
  },
  {
    icon: FiCheckCircle,
    title: "Software Engineering Practices",
    skills: ["System Design", "Design Patterns", "SOLID Principles", "Agile", "Test-Driven Development"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-widest uppercase font-body mb-2">Expertise</p>
          <h2 className="text-4xl md:text-8xl font-heading font-black text-foreground tracking-tighter">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="rounded-3xl bg-card border border-border p-8 card-3d-hover group"
              initial={{ opacity: 0, y: 40, rotateY: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center shadow-lg card-3d-content"
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <cat.icon className="text-accent-foreground" size={28} />
                </motion.div>
                <h3 className="text-xl font-heading font-black text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 card-3d-content">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-heading font-bold rounded-lg bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all cursor-default"
                    whileHover={{ scale: 1.1, translateZ: 10 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
