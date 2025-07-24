import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$19",
      description: "Perfect for solo painters getting started",
      features: [
        "1 user account",
        "10 projects per month",
        "Basic color libraries",
        "PDF report generation",
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
        "5 user accounts",
        "100 projects per month",
        "All paint brand libraries",
        "Custom color uploads",
        "Company logo branding",
        "Client share links",
        "Priority support",
        "Team collaboration tools"
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
        "Unlimited users",
        "Unlimited projects",
        "White-label solution",
        "AI color suggestions",
        "Advanced analytics",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "Training sessions"
      ],
      buttonText: "Request Demo",
      buttonVariant: "outline-primary" as const
    }
  ];

  const faqs = [
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Absolutely! We offer a 30-day money-back guarantee if you're not completely satisfied with our service."
    },
    {
      question: "Do you offer team discounts?",
      answer: "Yes, we offer volume discounts for teams of 10+ users. Contact our sales team for custom pricing."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and ACH bank transfers for annual plans."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-inter">
              Simple Plans That{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Grow
              </span>{" "}
              With You
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Choose the perfect plan for your painting business. All plans include our core features 
              with a 7-day free trial and no setup fees.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                  <h3 className="text-2xl font-bold mb-2 font-inter">{plan.name}</h3>
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
                  className="w-full font-semibold"
                >
                  {plan.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-inter">
              Pricing FAQ
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about our pricing and plans
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-card border border-border">
                <h3 className="font-semibold mb-3 text-lg">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-inter">30-Day Money-Back Guarantee</h3>
              <p className="text-lg text-white/90 mb-6">
                Try Rank Orbit Color Visualizer risk-free. If you're not completely satisfied 
                within 30 days, we'll refund your money, no questions asked.
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                Start Your Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;