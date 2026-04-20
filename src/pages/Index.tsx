import React from "react";
import { Link } from "react-router-dom";
import { Search, Star, TrendingUp, Shield, Users, Zap, Dumbbell } from "lucide-react";
import GymCard from "@/components/GymCard";
import heroImg from "@/assets/hero-gym.jpg";
import { allGyms } from "@/data/gyms";

type Stat = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
};

const Index: React.FC = () => {
  const stats: Stat[] = [
    { icon: Users, label: "Active Users", value: "1,000+" },
    { icon: TrendingUp, label: "Partner Gyms", value: "50+" },
    { icon: Star, label: "Avg Rating", value: "4.6★" },
    { icon: Shield, label: "Verified Gyms", value: "100%" },
    { icon: Zap, label: "Fast Results", value: "Find Your Gym in Minutes" },
    { icon: Dumbbell, label: "Expert Trainers", value: "View The Professional Trainers" }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Modern gym interior" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
            Find the <span className="text-primary neon-glow">Best Gym</span> Near You
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Compare prices, trainers, and facilities before you join. Your fitness journey starts here.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search gyms, locations..."
                className="w-full h-12 rounded-xl bg-secondary/80 backdrop-blur pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Link to="/explore" className="h-12 px-6 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:bg-primary/90 transition-colors">
              <Zap className="h-4 w-4" /> Explore
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="relative glass-card neon-border p-5 text-center hover-lift overflow-hidden"
            >
              <div className="relative z-10">
                {React.createElement(s.icon, { className: "h-6 w-6 text-primary mx-auto mb-2" })}
                <div className="text-lg md:text-2xl font-bold text-foreground">
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Gyms */}
      <section className="container mx-auto px-4 mt-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Top <span className="text-primary">Gyms</span> in Bengaluru
            </h2>
            <p className="text-muted-foreground text-sm mt-1">Handpicked based on ratings, facilities, and value</p>
          </div>
          <Link to="/explore" className="text-sm text-primary font-medium hover:underline">View All →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allGyms.slice(0, 6).map((gym) => (
            <GymCard gym={gym} key={gym.id} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 mt-20">
        <div className="relative glass-card neon-border p-10 md:p-16 text-center overflow-hidden">
          <img
            src="/favicon.png" 
            alt="bg-icon"
            className="absolute opacity-10 w-40 md:w-60 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 pointer-events-none"
          />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your <span className="text-primary neon-glow">Fitness Journey</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Join thousands of fitness enthusiasts who found their perfect gym through 
              <span className="text-primary"> Gym</span>Kart.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/explore"
                className="h-12 px-8 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center hover:bg-primary/90 transition-colors"
              >
                Browse Gyms
              </Link>
              <Link
                to="/contact"
                className="h-12 px-8 rounded-xl border border-primary/50 text-primary font-semibold flex items-center hover:bg-primary/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

