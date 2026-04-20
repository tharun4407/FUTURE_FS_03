import { Link } from "react-router-dom";
import { Star, MapPin, Zap } from "lucide-react";
import type { Gym } from "@/data/gyms";

const GymCard = ({ gym }: { gym: Gym }) => (
  <div className="glass-card neon-border hover-lift overflow-hidden group">
    <div className="relative h-48 overflow-hidden">
      <img 
        src={gym.image} 
        alt={gym.name} 
        loading="lazy" 
        width={800} 
        height={600} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        onError={(e) => { e.currentTarget.src = '/placeholder.svg'; }}
      />
      <div className="absolute top-3 right-3 bg-primary/90 text-primary-foreground text-xs font-bold px-2 py-1 rounded-md">
        {gym.type}
      </div>
    </div>
    <div className="p-5">
      <h3 className="font-bold text-lg text-foreground mb-1">{gym.name}</h3>
      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
        <MapPin className="h-3.5 w-3.5 text-primary" />
        {gym.location}
      </div>
      <div className="flex items-center gap-1 mb-3">
        <Star className="h-4 w-4 fill-accent text-accent" />
        <span className="text-sm font-semibold text-foreground">{gym.rating}</span>
        <span className="text-xs text-muted-foreground">({gym.reviewCount} reviews)</span>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {gym.features.slice(0, 4).map((f) => (
          <span key={f} className="flex items-center gap-1 text-xs bg-secondary px-2 py-1 rounded-md text-muted-foreground">
            <Zap className="h-3 w-3 text-primary" />{f}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xl font-bold text-primary">₹{gym.monthlyPrice}</span>
          <span className="text-xs text-muted-foreground">/month</span>
        </div>
        <div className="flex gap-2">
          <Link to={`/gym/${gym.id}`} className="h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium flex items-center hover:bg-primary/90 transition-colors">
            View Details
          </Link>
          <Link to={`/contact?gym=${encodeURIComponent(gym.name)}`} className="h-9 px-4 rounded-lg border border-primary/50 text-primary text-sm font-medium flex items-center hover:bg-primary/10 transition-colors">
            Enquire
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default GymCard;
