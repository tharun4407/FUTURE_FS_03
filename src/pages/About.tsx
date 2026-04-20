import { Shield, Users, Star, Zap } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Transparency",
    desc: "We provide honest pricing, real reviews, and verified gym information."
  },
  {
    icon: Users,
    title: "Community",
    desc: "Connecting fitness enthusiasts, trainers, and gyms in one platform."
  },
  {
    icon: Star,
    title: "Quality",
    desc: "We partner only with gyms that meet our quality standards."
  },
  {
    icon: Zap,
    title: "Speed",
    desc: "Find your perfect gym quickly with our smart discovery system."
  }
];

const About = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        
        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          About{" "}
          <span className="text-primary neon-glow">
            <span className="text-primary">Gym</span>Kart
          </span>
        </h1>

        {/* ABOUT CARD */}
        <div className="relative glass-card neon-border p-8 mb-10 overflow-hidden">
          
          {/* WATERMARK */}
          <img
            src="/favicon.png"
            alt="bg-icon"
            className="absolute opacity-10 w-48 md:w-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          />

          <div className="relative z-10">
            <p className="text-muted-foreground leading-relaxed mb-4">
              <span className="text-primary">Gym</span>Kart is Bengaluru's premier gym discovery and comparison platform. We believe finding the right gym shouldn't be a workout in itself. Our mission is to help fitness enthusiasts of all levels find, compare, and join the best gyms near them — with complete transparency on pricing, facilities, trainers, and reviews.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Founded in 2026, <span className="text-primary">Gym</span>Kart has already partnered with 50+ gyms across Bengaluru, helping over 1,000 users start their fitness journeys. Whether you're looking for a budget-friendly neighborhood gym or a premium fitness club with a pool and sauna, <span className="text-primary">Gym</span>Kart has you covered.
            </p>
          </div>
        </div>

        {/* VALUES */}
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Our Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="relative glass-card neon-border hover-lift p-6 overflow-hidden"
            >
              
              
            

              <div className="relative z-10">
                <v.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold text-foreground mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;