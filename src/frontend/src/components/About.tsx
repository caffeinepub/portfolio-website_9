import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const About = () => {
  const handleDownloadResume = () => {
    // Create a simple PDF download link
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-in fade-in slide-in-from-left-8 duration-700 delay-200">
            <Card className="overflow-hidden border-2 border-border/50 hover:border-accent-gradient-start/50 transition-all duration-300 group">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src="/assets/generated/profile-photo.dim_400x400.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Card>
          </div>

          <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I'm a passionate developer with a keen eye for design and a love for creating
              seamless user experiences. With expertise in modern web technologies, I transform
              ideas into elegant, functional solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech has been driven by curiosity and a commitment to continuous
              learning. I specialize in building responsive, accessible, and performant
              applications that make a difference.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
            <Button
              size="lg"
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end hover:opacity-90 transition-opacity"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
