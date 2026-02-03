import { skillCategories } from '@/data/resume';

const SkillsSection = () => {
  return (
    <section id="capacidades" className="py-24 relative overflow-hidden bg-secondary/10">
      
      <div className="container px-4 mx-auto relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono text-sm">03</span>
          <div className="h-px w-12 bg-primary" />
          <h2 className="text-xl font-medium text-muted-foreground uppercase tracking-widest">Arsenal Técnico</h2>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-background border border-border p-8 rounded-lg hover:border-primary/50 transition-colors duration-300 flex flex-col"
            >
              {/* Header */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full border border-secondary-foreground/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;