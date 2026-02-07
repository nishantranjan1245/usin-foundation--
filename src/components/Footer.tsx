import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import usinLogo from "/logo-1.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-20 h-20 rounded-full overflow-hidden">
                <img src={usinLogo} alt="USIN Foundation Logo" className="w-20 h-20 object-contain" />
              </div>
              <span className="font-display text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold to-accent">
                USIN Foundation
              </span>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Dedicated to environmental restoration, tree plantation, 
              and building sustainable communities across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", to: "/about" },
                { label: "Our Initiatives", to: "/initiatives" },
                { label: "Impact Stories", to: "/impact" },
                { label: "Get Involved", to: "/get-involved" },
                { label: "Donate", to: "/donate" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-foreground/60 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">
              Programs
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Tree Plantation", to: "/tree-plantation" },
                { label: "Water Conservation", to: "/water-conservation" },
                { label: "Eco-Awareness", to: "/eco-awareness" },
                { label: "Clean Energy", to: "/clean-energy" },
                { label: "Wildlife Protection", to: "/wildlife-protection" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-foreground/60 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <span className="text-sm text-primary-foreground/60">
                  USIN Foundation, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="mailto:info@usinfoundation.org.in"
                  className="text-sm text-primary-foreground/60 hover:text-gold transition-colors"
                >
                  info@usinfoundation.org.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-sm text-primary-foreground/60">
                  +91 XXXX XXXXXX
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} USIN Foundation. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-xs text-primary-foreground/40 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-xs text-primary-foreground/40 hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
