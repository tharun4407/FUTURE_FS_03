import { Link } from "react-router-dom";
import { Dumbbell, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState("");

  //  Email validation
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  //  Fake API
  const subscribeAPI = async (email: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Saved email:", email);
        resolve(true);
      }, 1000);
    });
  };

  const handleSubscribe = async () => {
    if (!email) {
      setToast("Please enter your email");
      return;
    }

    if (!isValidEmail(email)) {
      setToast("Invalid email address");
      return;
    }

    await subscribeAPI(email);

    setToast("Thank you for subscribing to GymKart! 🎉");
    setEmail("");

    setTimeout(() => setToast(""), 3000);
  };

  return (
    <footer className="border-t border-border/30 bg-card/40 mt-20 relative">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* LOGO */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Dumbbell className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">
              <span className="text-primary">Gym</span>Kart
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Find and compare the best gyms near you. Your fitness journey starts here.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Explore Gyms", "Trainers", "Offers", "About"].map((l) => (
              <Link
                key={l}
                to={`/${l.toLowerCase().replace(/ /g, "-").replace("explore-gyms", "explore")}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold text-foreground mb-3">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" /> GymKart4407@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" /> +91 9980066062
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Bengaluru, India
            </div>
          </div>
        </div>

        {/*  NEWSLETTER (FIXED) */}
        <div>
          <h4 className="font-semibold text-foreground mb-3">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Get the latest deals on gyms near you.
          </p>

          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-9 flex-1 rounded-lg bg-secondary px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />

            <button
              onClick={handleSubscribe}
              className="h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

    {/* TOAST MESSAGE */}
{toast && (
  <div
    style={{
      position: "fixed",
      top: "20px",
      right: "20px",
      background: "#16a34a",
      color: "white",
      padding: "12px 20px",
      borderRadius: "8px",
      zIndex: 9999,
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      fontSize: "14px",
      fontWeight: "500",
    }}
  >
    {toast}
  </div>
)}

      {/* FOOTER BOTTOM */}
      <div className="border-t border-border/30 py-4 text-center text-xs text-muted-foreground">
        © 2026 <span className="text-primary">Gym</span>Kart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;