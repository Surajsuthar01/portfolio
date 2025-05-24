
import { Award, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Certifications = () => {
  const certifications = [
    {
      title: "Red Hat Certified System Administrator (RHCSA)",
      organization: "Red Hat",
      date: "May 17, 2024 - May 17, 2027",
      logo: "tech-redhat",
      description: "Validated expertise in essential Red Hat Enterprise Linux system administration tasks. Certification ID: 240-067-413",
      skills: ["System Configuration", "Security", "File Systems", "User Management", "Service Management"],
      verifyLink: "https://www.credly.com/users/suraj-suthar.34931b98",
     
    },
    {
      title: "AWS Educate Introduction to Cloud 101",
      organization: "Amazon Web Services (AWS)",
      date: "March 2025",
      logo: "tech-aws",
      description: "Foundational knowledge of cloud computing concepts, services, and AWS infrastructure.",
      skills: ["Cloud Fundamentals", "AWS Services", "Cloud Architecture", "Security"]
    },
    {
      title: "AWS Educate Getting Started with Cloud Ops",
      organization: "Amazon Web Services (AWS)",
      date: "March 2025",
      logo: "tech-aws",
      description: "Skills in managing and operating cloud infrastructure and services on AWS.",
      skills: ["Cloud Operations", "Monitoring", "Automation", "Best Practices"]
    },
    {
      title: "AWS Educate Getting Started with Compute",
      organization: "Amazon Web Services (AWS)",
      date: "March 2025",
      logo: "tech-aws",
      description: "Expertise in AWS compute services including EC2, Lambda, and containerization.",
      skills: ["EC2", "Lambda", "Auto Scaling", "Elastic Beanstalk"]
    },
    {
      title: "AWS Educate Getting Started with Storage",
      organization: "Amazon Web Services (AWS)",
      date: "March 2025",
      logo: "tech-aws",
      description: "Knowledge of AWS storage solutions and data management strategies.",
      skills: ["S3", "EBS", "EFS", "Storage Gateway"]
    },
    {
      title: "AWS Educate Getting Started with Databases",
      organization: "Amazon Web Services (AWS)",
      date: "March 2025",
      logo: "tech-aws",
      description: "Proficiency in AWS database services and database management.",
      skills: ["RDS", "DynamoDB", "ElastiCache", "Aurora"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 animate-slide-in">Certifications</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Professional credentials that validate my expertise and technical knowledge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="card-hover overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-0">
                <div className={`bg-${cert.logo} h-2 w-full`}></div>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-md bg-${cert.logo}/10`}>
                        <Award className={`h-5 w-5 text-${cert.logo}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{cert.title}</h3>
                        <p className="text-muted-foreground">{cert.organization}</p>
                        <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
                      </div>
                    </div>
                    {cert.verifyLink && (
                      <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  
                  {cert.image && (
                    <div className="mt-4">
                      <img src={cert.image} alt={cert.title} className="w-full rounded-md shadow-sm" />
                    </div>
                  )}
                  
                  <p className="mt-4 text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-muted-foreground">
            View my complete certification profile on <a href="https://www.credly.com/users/suraj-suthar.34931b98" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Credly</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
