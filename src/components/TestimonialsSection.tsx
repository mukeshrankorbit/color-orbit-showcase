import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mike Rodriguez",
      business: "Rodriguez Painting Co.",
      content: "This tool has completely changed how I present color options to clients. I close deals 50% faster now because clients can actually see what their space will look like.",
      avatar: "MR",
      rating: 5
    },
    {
      name: "Sarah Chen",
      business: "Elite Interior Solutions",
      content: "The AI color suggestions are spot-on, and my clients love the professional PDF reports. It's made me look so much more professional than my competitors.",
      avatar: "SC",
      rating: 5
    },
    {
      name: "David Thompson",
      business: "Thompson Contractors",
      content: "I was skeptical at first, but after using it for 3 months, I've increased my close rate by 40%. The client share links are a game-changer for remote consultations.",
      avatar: "DT",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by Professional Painters
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what painters are saying about Rank Orbit Color Visualizer
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-8 bg-card rounded-2xl shadow-card border border-border hover:shadow-elevated transition-all duration-300"
            >
              {/* Rating stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;