import { 
  Zap, 
  Users, 
  Share2, 
  Palette, 
  FileText, 
  Smartphone,
  Sparkles,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const visualizationTools = [
    {
      icon: Zap,
      title: "Real-Time Color Preview",
      description: "See color changes instantly on uploaded photos with advanced color-matching technology"
    },
    {
      icon: Palette,
      title: "Paint Brand Libraries",
      description: "Access thousands of colors from Sherwin-Williams, Benjamin Moore, Behr, and more"
    },
    {
      icon: Sparkles,
      title: "AI Color Suggestions",
      description: "Get intelligent color recommendations based on room type, lighting, and style preferences"
    }
  ];

  const collaborationSharing = [
    {
      icon: Share2,
      title: "Client Share Links",
      description: "Send secure links for clients to view, comment, and approve color selections remotely"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together with your crew and share projects across multiple team members"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Take photos and apply colors on-site using your phone or tablet for instant results"
    }
  ];

  const customizationBranding = [
    {
      icon: Shield,
      title: "Custom Branding",
      description: "Add your company logo, colors, and contact information to all reports and presentations"
    },
    {
      icon: FileText,
      title: "Professional Reports",
      description: "Generate detailed PDF reports with color codes, paint quantities, and pricing estimates"
    }
  ];

  const FeatureSection = ({ title, features }: { title: string; features: typeof visualizationTools }) => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-8 text-center">{title}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <div key={feature.title} className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-inter">
              Everything You Need to{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Visualize
              </span>{" "}
              and Win More Jobs
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Professional color visualization tools designed specifically for painters and contractors 
              to close more deals and exceed client expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Features Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FeatureSection title="Visualization Tools" features={visualizationTools} />
          <FeatureSection title="Collaboration & Sharing" features={collaborationSharing} />
          <FeatureSection title="Customization & Branding" features={customizationBranding} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-inter">
              Ready to Paint Smarter?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of painters who are closing more jobs with professional color visualization.
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90 font-semibold"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;