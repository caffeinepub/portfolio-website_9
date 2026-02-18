import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Analytics Dashboard',
    description: 'A comprehensive analytics platform with real-time data visualization and interactive charts.',
    image: '/assets/generated/project-dashboard.dim_600x400.jpg',
    tags: ['React', 'TypeScript', 'D3.js', 'Tailwind'],
    link: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Mobile App Design',
    description: 'Modern mobile application with intuitive UI/UX and seamless user experience.',
    image: '/assets/generated/mobile-app-mockup.dim_600x400.jpg',
    tags: ['React Native', 'UI/UX', 'Figma'],
    link: '#'
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with payment integration and inventory management.',
    image: '/assets/generated/ecommerce-project.dim_600x400.jpg',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    link: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'Data Visualization Tool',
    description: 'Interactive data visualization tool for complex datasets with custom charts.',
    image: '/assets/generated/data-viz-project.dim_600x400.jpg',
    tags: ['Vue.js', 'Chart.js', 'Python'],
    link: '#'
  },
  {
    id: 5,
    title: 'Design System',
    description: 'Comprehensive design system with reusable components and documentation.',
    image: '/assets/generated/design-project.dim_600x400.jpg',
    tags: ['Storybook', 'React', 'CSS-in-JS'],
    link: '#',
    github: '#'
  }
];

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A selection of my recent work showcasing various technologies and design approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-2 border-border/50 hover:border-accent-gradient-start/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent transition-opacity duration-300 ${
                    hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    {project.link && (
                      <a
                        href={project.link}
                        className="flex-1 flex items-center justify-center gap-2 bg-accent-gradient-start text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                        onClick={(e) => e.preventDefault()}
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-sm font-medium">View</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex-1 flex items-center justify-center gap-2 bg-foreground text-background px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Github className="h-4 w-4" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
