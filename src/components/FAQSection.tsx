import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Can I use my own color codes?",
      answer: "Yes! You can input custom color codes (hex, RGB, or paint brand codes) in addition to choosing from our extensive paint brand libraries from Sherwin-Williams, Benjamin Moore, and more."
    },
    {
      question: "Is it mobile friendly?",
      answer: "Absolutely. Rank Orbit works perfectly on phones, tablets, and desktops. You can take photos directly with your phone and apply colors on the spot during client meetings."
    },
    {
      question: "Can I add my logo and branding?",
      answer: "Yes, all plans include custom branding options. Add your company logo, colors, and contact information to all PDF reports and client share links to maintain a professional appearance."
    },
    {
      question: "How accurate are the color representations?",
      answer: "Our color matching technology is highly accurate, but we always recommend ordering sample paints for final approval. The tool is designed to give clients a realistic preview to help with decision-making."
    },
    {
      question: "Can clients access the visualizations without an account?",
      answer: "Yes! You can generate secure share links that clients can access without creating an account. They can view the color options, leave comments, and approve selections directly through the link."
    },
    {
      question: "What file formats can I upload?",
      answer: "You can upload JPG, PNG, and HEIC image files. For best results, we recommend well-lit photos with good resolution. Our AI works with both interior and exterior photos."
    },
    {
      question: "Is there a limit on photo uploads?",
      answer: "The Starter plan includes 10 visualizations per month, while Pro Brush and Elite Crew plans offer unlimited visualizations. Each visualization can include multiple color variations."
    },
    {
      question: "Do you offer training or support?",
      answer: "Yes! All plans include email support, video tutorials, and our knowledge base. Elite Crew plan includes dedicated training sessions and a personal account manager."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Rank Orbit Color Visualizer
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;