import { useParams, Link } from "react-router-dom";
import { Star, MapPin, Phone, Clock, Dumbbell, Gift, CheckCircle, ChevronRight } from "lucide-react";
import { allGyms } from "@/data/gyms";

const GymDetails = () => {
  const { id } = useParams();
  const gym = allGyms.find((g) => g.id === id);

  if (!gym) return (
    <div className="pt-20 text-center py-40 text-muted-foreground">
      Gym not found. <Link to="/explore" className="text-primary hover:underline">Browse all gyms</Link>
    </div>
  );

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/explore" className="hover:text-primary">Explore</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{gym.name}</span>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="md:col-span-2 rounded-xl overflow-hidden h-72 md:h-96">
            <img src={gym.gallery[0]} alt={gym.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-rows-2 gap-4">
            {gym.gallery.slice(1, 3).map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden">
                <img src={img} alt={`${gym.name} ${i + 2}`} loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic info */}
            <div className="glass-card neon-border p-6">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground">{gym.name}</h1>
                  <div className="flex items-center gap-2 mt-1 text-muted-foreground text-sm">
                    <MapPin className="h-4 w-4 text-primary" /> {gym.location}
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-secondary px-3 py-1.5 rounded-lg">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="font-bold text-foreground">{gym.rating}</span>
                  <span className="text-xs text-muted-foreground">({gym.reviewCount})</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{gym.address}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" /> {gym.phone}
              </div>
            </div>

            {/* Map */}
            <div className="glass-card neon-border p-6">
              <h2 className="font-bold text-lg text-foreground mb-4">Location</h2>
              <div className="rounded-xl overflow-hidden h-64">
                <iframe
                  title="Gym location"
                  src={`https://www.google.com/maps?q=${gym.mapQuery}&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Trainers */}
            <div className="glass-card neon-border p-6">
              <h2 className="font-bold text-lg text-foreground mb-4">Trainers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {gym.trainers.map((t) => (
                  <Link
                    key={t.id}
                    to={`/trainer/${t.id}`}
                    className="bg-card border rounded-xl overflow-hidden shadow hover:shadow-xl transition-all group block"
                  >
                    <div className="p-4">
                      <img 
                        src={t.image} 
                        alt={t.name} 
                        loading="lazy" 
                        className="w-16 h-16 rounded-full object-cover mx-auto mb-2 group-hover:scale-105 transition duration-300" 
                      />
                      <h3 className="font-semibold text-foreground text-sm text-center group-hover:text-primary transition-colors">{t.name}</h3>
                      <p className="text-xs text-primary text-center">{t.experience}</p>
                      <p className="text-xs text-muted-foreground text-center mt-1">{t.specializations}</p>
                      <p className="text-xs mt-2 text-primary/80 font-medium text-center group-hover:translate-x-1 transition-all">View Profile →</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Equipment & Facilities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card neon-border p-6">
                <h2 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Dumbbell className="h-5 w-5 text-primary" /> Equipment
                </h2>
                <div className="space-y-2">
                  {gym.equipment.map((e) => (
                    <div key={e} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-3.5 w-3.5 text-primary" /> {e}
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-card neon-border p-6">
                <h2 className="font-bold text-lg text-foreground mb-4">Facilities</h2>
                <div className="space-y-2">
                  {gym.facilities.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-3.5 w-3.5 text-primary" /> {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="glass-card neon-border p-6">
              <h2 className="font-bold text-lg text-foreground mb-4">Ratings & Reviews</h2>
              <div className="space-y-4">
                {gym.reviews.map((r) => (
                  <div key={r.name} className="bg-secondary/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-foreground text-sm">{r.name}</span>
                      <span className="text-xs text-muted-foreground">{r.date}</span>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`h-3.5 w-3.5 ${i < r.rating ? "fill-accent text-accent" : "text-muted"}`} />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">{r.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing */}
            <div className="glass-card neon-border p-6 sticky top-24">
              <h2 className="font-bold text-lg text-foreground mb-4">Pricing Plans</h2>
              <div className="space-y-3 mb-6">
                {[
                  { label: "Monthly", price: gym.monthlyPrice },
                  { label: "Quarterly", price: gym.quarterlyPrice },
                  { label: "Yearly", price: gym.yearlyPrice, popular: true },
                ].map((plan) => (
                  <div key={plan.label} className={`rounded-xl p-4 ${plan.popular ? "bg-primary/10 border border-primary/30" : "bg-secondary/50"}`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-muted-foreground">{plan.label}</span>
                        {plan.popular && <span className="ml-2 text-xs bg-primary text-primary-foreground px-1.5 py-0.5 rounded">Best Value</span>}
                      </div>
                      <span className="text-xl font-bold text-foreground">₹{plan.price.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Link to={`/contact?gym=${encodeURIComponent(gym.name)}`} className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center hover:bg-primary/90 transition-colors mb-3">
                Join Now
              </Link>
              <Link to={`/contact?gym=${encodeURIComponent(gym.name)}`} className="w-full h-12 rounded-xl border border-primary/50 text-primary font-semibold flex items-center justify-center hover:bg-primary/10 transition-colors">
                Enquire Now
              </Link>

              {/* Hours */}
              <div className="mt-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" /> Working Hours
                </h3>
                <div className="space-y-1.5">
                  {gym.hours.map((h) => (
                    <div key={h.days} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{h.days}</span>
                      <span className={h.time === "Closed" ? "text-destructive" : "text-foreground"}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Offers */}
              {gym.offers.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Gift className="h-4 w-4 text-accent" /> Offers
                  </h3>
                  <div className="space-y-2">
                    {gym.offers.map((o) => (
                      <div key={o} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" />
                        {o}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymDetails;

