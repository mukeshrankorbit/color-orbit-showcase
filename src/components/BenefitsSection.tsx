import { TrendingUp, Users, Award } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Close 40% More Jobs",
      description: "Help clients visualize their space and make confident decisions faster."
    },
    {
      icon: Users,
      title: "Build Client Trust",
      description: "Professional presentations show you're tech-savvy and detail-oriented."
    },
    {
      icon: Award,
      title: "Stand Out from Competition",
      description: "Offer something your competitors don't - instant color visualization."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Painters Love Rank Orbit
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your business with professional color visualization
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="text-center group"
              >
                <div className="flex justify-center mb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-primary shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;