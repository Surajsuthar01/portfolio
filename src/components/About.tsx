
import { BadgeCheck, Server, Cloud, Terminal, Database, GitBranch } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            I'm a DevOps Engineer and System Administrator with expertise in cloud technologies and infrastructure automation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              With a background in Computer Science and a passion for automation, I've developed a strong foundation in Linux systems, containerization, and cloud infrastructure. I believe in creating efficient, reliable systems that empower teams to deliver better software faster.
            </p>
            <p className="text-lg leading-relaxed">
              As a Red Hat Certified System Administrator (RHCSA), I specialize in building and maintaining robust infrastructure solutions. My expertise spans across AWS cloud services, Docker containerization, Kubernetes orchestration, CI/CD pipelines with Jenkins, and infrastructure as code with Terraform and Ansible.
            </p>
            <p className="text-lg leading-relaxed">
              I'm also proficient in monitoring and observability tools like Prometheus and Grafana, ensuring systems remain reliable and performant. Additionally, I have a strong background in data structures and algorithms using C++, which helps me approach complex technical challenges systematically.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">Personal Info</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <BadgeCheck className="h-5 w-5 text-primary" />
                  <span className="font-medium">Location:</span>
                  <span>Jaipur, Rajasthan, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BadgeCheck className="h-5 w-5 text-primary" />
                  <span className="font-medium">Email:</span>
                  <a href="surajsuthar0654@gmail.com" className="hover:text-primary transition-colors">
                    surajsuthar0654@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <BadgeCheck className="h-5 w-5 text-primary" />
                  <span className="font-medium">Website:</span>
                  <a href="http://devsuraj.online" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    devsuraj.online
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <BadgeCheck className="h-5 w-5 text-primary" />
                  <span className="font-medium">Degree:</span>
                  <span>B.Tech, Computer Science</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">What I Specialize In</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="mb-4 bg-primary/10 p-3 rounded-lg w-fit">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">Linux Administration</h4>
                  <p className="text-muted-foreground">
                    RHCSA-certified Linux expert specializing in system setup, security hardening, and performance optimization.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="mb-4 bg-primary/10 p-3 rounded-lg w-fit">
                    <Cloud className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">Cloud Infrastructure</h4>
                  <p className="text-muted-foreground">
                    AWS cloud solutions including EC2, S3, VPC, IAM with security best practices and monitoring.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="mb-4 bg-primary/10 p-3 rounded-lg w-fit">
                    <Terminal className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">Infrastructure as Code</h4>
                  <p className="text-muted-foreground">
                    Automating infrastructure with Terraform and configuration management with Ansible for consistent environments.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="mb-4 bg-primary/10 p-3 rounded-lg w-fit">
                    <div className="h-6 w-6 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary">
                        <path fill="currentColor" d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.72.028-1.16.083-2.73-1.827-3.38-4.832-3.414-4.957-.014-.031-1.29-3.335-3.3-3.907-.212-.063-2.193-.835-6.262.203C5.7.6 3.57.563 3.57.563l-.098.055C2.55 1.502.792 3.264.43 5.493c-.516 3.163.156 6.686 1.128 10.204 1.38 4.002 2.823 5.604 3.735 6.284a4.521 4.521 0 002.49.846c.599 0 1.23-.169 1.943-.51 1.13-.542 2.5-1.076 4.358-.982 1.684.073 2.787.616 3.84 1.129.507.249 1.084.53 1.71.6a3.79 3.79 0 00.858-.086 3.872 3.872 0 001.905-.968c1.53-1.388 2.691-4.789 2.787-4.989.034-.089.515-1.297.528-2.682.012-1.35-.426-2.1-.95-2.459zM12.18.988c.926-.28 1.716-.406 2.367-.406.54 0 .97.094 1.285.274.72.413 1.352 1.241 1.903 2.482-1.853.92-3.39.963-4.5.723-.988-.213-1.546-.614-1.588-.652l-.2-.176a5.56 5.56 0 01.534-2.245zm-3.41.261c.034-.007.064-.024.098-.032a.248.248 0 01.05-.024c1.074-.437 2.157-.742 3.211-.895 0 .017-.007.036-.007.054a3.803 3.803 0 01-3.092 3.992c.09-.55.176-1.106.252-1.673.064-.412.135-.929.28-1.622.039-.176.077-.376.146-.593.037-.121.081-.217.113-.307zm-3.275-.32c.533-.212 1.143-.373 1.795-.48a9.46 9.46 0 01-.818 1.884 7.639 7.639 0 01-1.064 1.502c.096-.917.194-1.83.295-2.737v-.079c-.02-.008-.06-.049-.208-.09zm-3.302 4.62c.124-.65.299-1.256.52-1.824a8.895 8.895 0 001.007-2.178c.532-.077 1.094-.113 1.669-.113.146 0 .296.007.438.014.137.009.291.02.458.034.28.254.58.522.892.8.185.164.378.332.58.501-.38.986-.725 2.145-.892 3.112-.06.002-.136 0-.228-.001-.86-.005-2.635-.013-3.58.358a7.854 7.854 0 01-.864.259zm10.304 12.628c-.105-.077-.217-.152-.324-.234-2.058-1.554-3.583-.977-4.29-.752-.146.045-.27.09-.379.123-.994.307-1.904.439-2.778.439a7.508 7.508 0 01-1.667-.176c-.144-.039-1.191-.354-2.593-1.395-1.099-.813-2.091-1.894-2.919-3.218-1.365-2.157-1.967-4.445-2.134-6.247.54-.242 1.195-.398 1.904-.475.474-.052 1.063-.074 1.817-.066 1.033.01 2.033.074 2.29.09.869.049 1.562.493 2.192.913.168.112.326.217.477.311.46.285.888.58 1.401.81.27.121.568.242.905.358 1.07.37 2.638.392 4.386.065.425-.079.833-.17 1.229-.262a8.184 8.184 0 001.534-.52c-.043.48-.112 1.17-.112 1.17-.167 2.09-.38 3.906-.74 5.38a9.316 9.316 0 01-.99 2.328c-.08.121-.174.238-.257.354zm6.378-10.32c-.05 1.046-.458 2.08-.458 2.08-.146.356-1.133 3.206-2.354 4.312-.366.335-.785.61-1.275.784-.063.024-.126.045-.188.065-.141.043-.28.068-.43.077-.497-.058-.896-.242-1.402-.489-1.075-.522-2.35-1.141-4.294-1.228-2.025-.091-3.521.485-4.724 1.058-.247.118-.493.221-.754.317a3.563 3.563 0 01-1.358.384 3.453 3.453 0 01-1.788-.591c-.83-.619-2.144-2.061-3.418-5.744-.92-2.683-1.61-5.564-1.472-8.28.143-2.006 1.707-3.55 2.416-4.148-.01 1.34-.008 2.138.364 3.585.38 1.491 1.122 3.054 2.405 5.02.907 1.39 1.957 2.523 3.124 3.37 1.647 1.195 3.415 1.587 5.287 1.587.448 0 .901-.021 1.354-.063 2.167-.204 4.27-.82 6.272-1.834.358-.181.636-.351.883-.528.16-.115.316-.244.464-.373a6.06 6.06 0 00.308-.266c.218-.207.425-.417.617-.64.334-.38.647-.785.92-1.222a7.684 7.684 0 00.943-2.112c.025-.097.051-.19.074-.288.035-.147.065-.29.09-.433.043-.245.072-.492.092-.737v-.082c.011-.16.017-.319.017-.479 0-.075-.003-.15-.007-.225a2.802 2.802 0 00-.023-.274c-.01-.08-.02-.158-.033-.236a2.798 2.798 0 00-.105-.452 2.644 2.644 0 00-.149-.404c-.04-.085-.083-.17-.128-.252a3.352 3.352 0 00-.171-.27c-.01-.015-.023-.03-.035-.044 1.092.026 1.307.343 1.345.403.078.09.345.415.339 1.19z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Containerization</h4>
                  <p className="text-muted-foreground">
                    Docker containerization and Kubernetes orchestration for scalable, portable application deployments.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="mb-4 bg-primary/10 p-3 rounded-lg w-fit">
                    <GitBranch className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">CI/CD Pipeline Design</h4>
                  <p className="text-muted-foreground">
                    Creating efficient Jenkins pipelines for continuous integration, testing, and deployment workflows.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="mb-4 bg-primary/10 p-3 rounded-lg w-fit">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">Monitoring & Observability</h4>
                  <p className="text-muted-foreground">
                    Implementing Prometheus and Grafana for comprehensive system monitoring and visualization.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
