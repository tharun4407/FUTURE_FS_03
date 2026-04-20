import { Link } from "react-router-dom";
import { Gift, Percent, Sparkles, Calendar } from "lucide-react";
import { allGyms } from "@/data/gyms";

const seasonalOffers = [
  { icon: Sparkles, title: "New Year Special", desc: "Get 30% off on yearly memberships. Valid till Jan 31.", color: "text-accent" },
  { icon: Calendar, title: "Summer Shred", desc: "3-month bootcamp at ₹4999 with free trainer sessions.", color: "text-primary" },
  { icon: Gift, title: "Refer & Earn", desc: "Refer a friend and get 1 month free at any partner gym.", color: "text-accent" },
];

const Offers = () => (
  <div className="pt-20">
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
        <span className="text-accent gold-glow">Exclusive</span> Offers
      </h1>
      <p className="text-muted-foreground mb-10">Save big on gym memberships and fitness plans</p>

      {/* Seasonal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        {seasonalOffers.map((o) => (
          <div key={o.title} className="glass-card neon-border hover-lift p-6">
            <o.icon className={`h-8 w-8 ${o.color} mb-4`} />
            <h3 className="font-bold text-lg text-foreground mb-2">{o.title}</h3>
            <p className="text-sm text-muted-foreground">{o.desc}</p>
          </div>
        ))}
      </div>

      {/* Gym offers */}
      <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
        <Percent className="h-5 w-5 text-primary" /> <span className="text-primary">Gym</span>Deals
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allGyms.filter((g) => g.offers.length > 0).map((g) => (
          <div key={g.id} className="glass-card neon-border p-6 hover-lift">
            <div className="flex items-center gap-4 mb-4">
              <img src={g.image} alt={g.name} loading="lazy" className="w-16 h-16 rounded-lg object-cover" />
              <div>
                <h3 className="font-bold text-foreground">{g.name}</h3>
                <p className="text-xs text-muted-foreground">{g.location}</p>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              {g.offers.map((o) => (
                <div key={o} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Gift className="h-3.5 w-3.5 text-accent shrink-0" /> {o}
                </div>
              ))}
            </div>
            <Link to={`/gym/${g.id}`} className="text-sm text-primary font-medium hover:underline">View gym →</Link>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Offers;
