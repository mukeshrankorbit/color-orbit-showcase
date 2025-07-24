import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Show Your Clients the{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Color
                </span>{" "}
                Before the Paint
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Upload photos, apply colors instantly, and close more jobs with 
                professional color visualization that builds client confidence.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="text-lg">
                Try It Free
              </Button>
              <Button variant="outline-primary" size="lg" className="text-lg">
                Book a Live Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>7-day free trial</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:order-last">
            <div className="relative z-10">
              <img
                src={heroMockup}
                alt="Color Visualizer App Interface"
                className="w-full h-auto rounded-2xl shadow-elevated"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-primary rounded-2xl opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;