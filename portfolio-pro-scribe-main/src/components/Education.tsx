
import { GraduationCap, Clock, MapPin, PercentIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const education = [
    {
      institution: "Arya College of Engineering and IT",
      degree: "Bachelor of Technology - BTech, Computer Science",
      location: "Jaipur, Rajasthan, India",
      duration: "2022 - 2026",
      logo: "public/lovable-uploads/arya_logo.jpeg"
    },
    {
      institution: "Govt. Senior Secondary School Karju Pratapgarh",
      degree: "Senior Secondary Education",
      location: "Pratapgarh, Rajasthan, India",
      duration: "Completed 2022",
      grade: "80.80%"
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            My academic background and educational qualifications.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {edu.logo ? (
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-lg overflow-hidden border">
                          <img 
                            src={edu.logo} 
                            alt={edu.institution} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center">
                          <GraduationCap className="h-10 w-10 text-primary" />
                        </div>
                      </div>
                    )}
                    
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold">{edu.institution}</h3>
                      <p className="text-lg">{edu.degree}</p>
                      
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{edu.duration}</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{edu.location}</span>
                        </div>
                        
                        {edu.grade && (
                          <div className="flex items-center text-sm text-muted-foreground">
                            <PercentIcon className="h-4 w-4 mr-2" />
                            <span>Grade: {edu.grade}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
