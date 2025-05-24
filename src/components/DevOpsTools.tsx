
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

const DevOpsTools = () => {
  const devopsTools = [
    { name: "Ansible", image: "https://cdn.worldvectorlogo.com/logos/ansible.svg", fallback: "AN" },
    { name: "Kubernetes", image: "https://cdn.worldvectorlogo.com/logos/kubernets.svg", fallback: "K8s" },
    { name: "Terraform", image: "https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg", fallback: "TF" },
    { name: "Jenkins", image: "https://cdn.worldvectorlogo.com/logos/jenkins-1.svg", fallback: "JK" },
    { name: "Prometheus", image: "https://cdn.worldvectorlogo.com/logos/prometheus.svg", fallback: "PR" },
    { name: "Grafana", image: "https://cdn.worldvectorlogo.com/logos/grafana.svg", fallback: "GR" },
    { name: "Docker", image: "https://cdn.worldvectorlogo.com/logos/docker.svg", fallback: "DC" },
    { name: "AWS", image: "https://cdn.worldvectorlogo.com/logos/aws-2.svg", fallback: "AWS" },
    { name: "Git", image: "https://cdn.worldvectorlogo.com/logos/git-icon.svg", fallback: "GIT" },
    { name: "HAProxy", image: "https://cdn.worldvectorlogo.com/logos/haproxy.svg", fallback: "HA" },
    { name: "MariaDB", image: "https://cdn.worldvectorlogo.com/logos/mariadb.svg", fallback: "DB" },
    { name: "Apache", image: "https://cdn.worldvectorlogo.com/logos/apache-13.svg", fallback: "AP" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="devops-tools" className="py-20 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-pink-900/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 animate-slide-in">DevOps Tools & Technologies</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Specialized expertise in the latest DevOps technologies and infrastructure management tools.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {devopsTools.map((tool, index) => (
           <motion.div
           key={tool.name}
           className="flex flex-col items-center p-5 bg-card rounded-xl shadow-md hover:shadow-xl transition-all hover:scale-105"
           variants={item}
         >
           <div className="h-20 w-20 mb-4 overflow-hidden rounded">
             <img
               src={tool.image}
               alt={tool.name}
               className="w-full  object-cover"
             />
           </div>
           <span className="text-base font-medium text-center">{tool.name}</span>
         </motion.div>
         
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DevOpsTools;
