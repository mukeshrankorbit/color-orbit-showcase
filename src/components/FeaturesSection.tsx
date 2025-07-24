import { 
  Zap, 
  Palette, 
  Sparkles, 
  FileText, 
  Share, 
  Smartphone, 
  Clock, 
  Shield 
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Real-Time Visualizer",
      description: "See color changes instantly on uploaded photos"
    },
    {
      icon: Palette,
      title: "Paint Brand Libraries",
      description: "Access colors from Sherwin-Williams, Benjamin Moore & more"
    },
    {
      icon: Sparkles,
      title: "AI Color Suggestions",
      description: "Get intelligent color recommendations for any space"
    },
    {
      icon: FileText,
      title: "PDF Reports",
      description: "Generate professional reports with color codes and prices"
    },
    {
      icon: Share,
      title: "Client Share Links",
      description: "Send secure links for clients to view and approve colors"
    },
    {
      icon: Smartphone,
      title: "Mobile Support",
      description: "Works perfectly on phones, tablets, and desktops"
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Reduce site visits and speed up the decision process"
    },
    {
      icon: Shield,
      title: "Brand Your Work",
      description: "Add your logo and company branding to all reports"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything You Need to Close More Jobs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional tools designed specifically for painters and contractors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-6 bg-card rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary mb-4 group-hover:shadow-glow transition-all duration-300">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;