
import { Trophy, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Achievements = () => {
  const achievements = [
    {
      title: "Red Hat Certified System Administrator",
      date: "May 17, 2024 - May 17, 2027",
      description: "Successfully certified as a Red Hat Certified System Administrator (RHCSA), demonstrating expertise in managing Red Hat Enterprise Linux systems. Certification ID: 240-067-413",
      image: "public/lovable-uploads/redhat.jpg"
    },
    {
      title: "Oracle Certified Foundations Associate",
      date: "March 25, 2025",
      description: "Oracle Fusion Cloud Applications HCM Certified Foundations Associate. Recognized by Oracle Corporation as Oracle Certified professional.",
      image: "public/lovable-uploads/635b65f3-c48d-4dc1-a2a4-80c76bd17b8c.png"
    }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Achievements</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Key milestones and accomplishments throughout my professional journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="overflow-hidden card-hover animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="h-68 overflow-hidden">
                <img 
                  src={achievement.image} 
                  alt={achievement.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{achievement.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
