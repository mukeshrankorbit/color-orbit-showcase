import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$19",
      description: "Perfect for solo painters getting started",
      features: [
        "10 visualizations per month",
        "Basic color libraries",
        "PDF reports",
        "Email support",
        "Mobile app access"
      ],
      buttonText: "Start Trial",
      buttonVariant: "outline-primary" as const
    },
    {
      name: "Pro Brush",
      price: "$49",
      description: "Best for growing painting businesses",
      features: [
        "Unlimited visualizations",
        "All paint brand libraries",
        "AI color suggestions",
        "Custom branding",
        "Client share links",
        "Priority support",
        "Team collaboration"
      ],
      buttonText: "Start Trial",
      buttonVariant: "cta" as const,
      popular: true
    },
    {
      name: "Elite Crew",
      price: "$99",
      description: "For large painting contractors and crews",
      features: [
        "Everything in Pro Brush",
        "White-label solution",
        "API access",
        "Advanced analytics",
        "Dedicated account manager",
        "Custom integrations",
        "Training sessions"
      ],
      buttonText: "Request Demo",
      buttonVariant: "outline-primary" as const
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business size and needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 bg-card rounded-2xl shadow-card border transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 ${
                plan.popular 
                  ? "border-primary ring-2 ring-primary/20 scale-105" 
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.buttonVariant} 
                size="lg" 
                className="w-full"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include a 7-day free trial. No credit card required.
          </p>
          <p className="text-sm text-muted-foreground">
            Questions about enterprise pricing? <a href="#contact" className="text-primary hover:underline">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;