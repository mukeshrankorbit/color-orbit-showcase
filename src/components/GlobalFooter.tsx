import { Link } from "react-router-dom";

const GlobalFooter = () => {
  const productLinks = [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "API Docs", href: "#" },
    { label: "Mobile App", href: "#" },
  ];

  const companyLinks = [
    { label: "About Us", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ];

  const resourcesLinks = [
    { label: "Help Center", href: "#" },
    { label: "Tutorials", href: "#" },
    { label: "Templates", href: "#" },
    { label: "Case Studies", href: "#" },
  ];

  const contactInfo = [
    { label: "Support", value: "support@rankorbit.com" },
    { label: "Sales", value: "sales@rankorbit.com" },
    { label: "Phone", value: "(555) 123-4567" },
  ];

  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4 text-white font-inter">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-white font-inter">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-white font-inter">Resources</h3>
            <ul className="space-y-3">
              {resourcesLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white font-inter">Contact</h3>
            <ul className="space-y-3">
              {contactInfo.map((info) => (
                <li key={info.label} className="text-gray-300">
                  <span className="font-medium">{info.label}:</span>{" "}
                  <span>{info.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
              <div className="h-4 w-4 rounded-full bg-white"></div>
            </div>
            <span className="text-xl font-bold text-white font-inter">
              Rank Orbit Color Visualizer
            </span>
          </Link>
          <p className="text-gray-400 text-sm">
            © 2024 Rank Orbit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;