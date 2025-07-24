import { Upload, Palette, Share2 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload",
      description: "Take or upload photos of interior/exterior spaces"
    },
    {
      icon: Palette,
      title: "Pick Color",
      description: "Choose from paint brand libraries or custom colors"
    },
    {
      icon: Share2,
      title: "Share",
      description: "Generate PDF reports and share with clients instantly"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your sales process with three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.title} className="relative">
                {/* Step number and arrow */}
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block w-24 h-0.5 bg-gradient-to-r from-primary to-primary-light ml-4"></div>
                    )}
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;