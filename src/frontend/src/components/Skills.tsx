import { Code2, Palette, Database, Zap, Users, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'soft';
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: <Code2 className="h-6 w-6" />,
    skills: [
      { name: 'React / TypeScript', level: 95, category: 'technical' },
      { name: 'Next.js', level: 90, category: 'technical' },
      { name: 'Tailwind CSS', level: 92, category: 'technical' },
      { name: 'HTML/CSS', level: 98, category: 'technical' }
    ]
  },
  {
    title: 'Backend & Database',
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: 'Node.js', level: 85, category: 'technical' },
      { name: 'PostgreSQL', level: 80, category: 'technical' },
      { name: 'REST APIs', level: 88, category: 'technical' },
      { name: 'GraphQL', level: 75, category: 'technical' }
    ]
  },
  {
    title: 'Design & Tools',
    icon: <Palette className="h-6 w-6" />,
    skills: [
      { name: 'UI/UX Design', level: 87, category: 'technical' },
      { name: 'Figma', level: 90, category: 'technical' },
      { name: 'Git/GitHub', level: 93, category: 'technical' },
      { name: 'Responsive Design', level: 95, category: 'technical' }
    ]
  }
];

const softSkills = [
  { name: 'Problem Solving', icon: <Lightbulb className="h-5 w-5" />, level: 95 },
  { name: 'Team Collaboration', icon: <Users className="h-5 w-5" />, level: 92 },
  { name: 'Quick Learning', icon: <Zap className="h-5 w-5" />, level: 90 }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and professional competencies
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="border-2 border-border/50 hover:border-accent-gradient-start/50 transition-all duration-300 hover:shadow-lg animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-accent-gradient-start/20 to-accent-gradient-end/20 text-accent-gradient-start">
                    {category.icon}
                  </div>
                  <span className="text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2 bg-muted"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Professional Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <Card
                key={skill.name}
                className="text-center border-2 border-border/50 hover:border-accent-gradient-start/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-accent-gradient-start/20 to-accent-gradient-end/20 text-accent-gradient-start">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold">{skill.name}</h4>
                  <Progress value={skill.level} className="h-2 bg-muted" />
                  <p className="text-xs text-muted-foreground">{skill.level}% Proficiency</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
