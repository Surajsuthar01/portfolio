
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Server, 
  Database, 
  Code,
  Layers, 
  GitBranch,
  Terminal, 
  BarChart4,
  Cloud,
  Cpu
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Skills = () => {
  const technicalSkills = [
    { name: "Linux", value: 90, color: "tech-linux" },
    { name: "AWS Cloud", value: 85, color: "tech-aws" },
    { name: "Docker", value: 80, color: "tech-docker" },
    { name: "Kubernetes", value: 75, color: "tech-devops" },
    { name: "Terraform", value: 70, color: "tech-devops" },
    { name: "Jenkins", value: 75, color: "tech-jenkins" },
    { name: "Ansible", value: 80, color: "tech-devops" },
    { name: "SQL", value: 70, color: "tech-sql" },
    { name: "C++", value: 75, color: "tech-devops" }
  ];

  const softSkills = [
    { name: "Problem Solving", value: 90 },
    { name: "Communication", value: 85 },
    { name: "Team Collaboration", value: 80 },
    { name: "Time Management", value: 75 },
    { name: "Adaptability", value: 85 }
  ];

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

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 animate-slide-in">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            A comprehensive overview of my technical expertise and professional capabilities.
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-center">DevOps Tools & Technologies</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {devopsTools.map((tool, index) => (
              <div key={tool.name} className="flex flex-col items-center p-3 bg-card rounded-lg shadow-sm hover:shadow-md transition-all floating animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <Avatar className="h-12 w-12 mb-2">
                  <AvatarImage src={tool.image} alt={tool.name} />
                  <AvatarFallback className="bg-tech-devops/10 text-tech-devops">{tool.fallback}</AvatarFallback>
                </Avatar>
                <span className="text-xs font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className={`h-2 bg-${skill.color}/20`} indicatorClassName={`bg-${skill.color}`} />
                </div>
              ))}
            </div>
          </div>
          
          <div>
           
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-6">Key Competencies</h3>
              <div className="grid grid-cols-5 sm:grid-cols-2 gap-10">
                <Card className="card-hover animate-fade-in" style={{ animationDelay: "0ms" }}>
                  <CardContent className="p-4">
                    <div className="mb-3 bg-primary/10 p-2 rounded-lg w-fit">
                      <Server className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-medium mb-2">System Administration</h4>
                    <p className="text-sm text-muted-foreground">
                      Expert in Linux system administration, performance tuning, and troubleshooting with RHCSA certification.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="card-hover animate-fade-in" style={{ animationDelay: "100ms" }}>
                  <CardContent className="p-6">
                    <div className="mb-4 bg-primary/10 p-3 rounded-lg w-fit">
                      <Layers className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-medium mb-2">Container Orchestration</h4>
                    <p className="text-sm text-muted-foreground">
                      Proficient with Kubernetes for orchestrating containerized applications at scale.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="card-hover animate-fade-in" style={{ animationDelay: "200ms" }}>
                  <CardContent className="p-6">
                    <div className="mb-4 bg-primary/10 p-3 rounded-lg w-fit">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-medium mb-2">Infrastructure as Code</h4>
                    <p className="text-sm text-muted-foreground">
                      Designing infrastructure with Terraform and configuration management with Ansible.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="card-hover animate-fade-in" style={{ animationDelay: "300ms" }}>
                  <CardContent className="p-6">
                    <div className="mb-4 bg-primary/10 p-3 rounded-lg w-fit">
                      <BarChart4 className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-medium mb-2">Monitoring & Observability</h4>
                    <p className="text-sm text-muted-foreground">
                      Implementing comprehensive monitoring solutions with Prometheus and Grafana dashboards.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="card-hover animate-fade-in" style={{ animationDelay: "400ms" }}>
                  <CardContent className="p-6">
                    <div className="mb-4 bg-primary/10 p-3 rounded-lg w-fit">
                      <GitBranch className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-medium mb-2">CI/CD Pipelines</h4>
                    <p className="text-sm text-muted-foreground">
                      Building automated delivery pipelines with Jenkins for continuous integration and deployment.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="card-hover animate-fade-in" style={{ animationDelay: "500ms" }}>
                  <CardContent className="p-6">
                    <div className="mb-4 bg-primary/10 p-3 rounded-lg w-fit">
                      <Cpu className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-medium mb-2">DSA with C++</h4>
                    <p className="text-sm text-muted-foreground">
                      Proficient in data structures and algorithms implementation using C++ for efficient problem-solving.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
