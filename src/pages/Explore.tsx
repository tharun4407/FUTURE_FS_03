import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, Star, Search } from "lucide-react";
import GymCard from "@/components/GymCard";
import { allGyms } from "@/data/gyms";

const gymTypes = ["All", "Budget", "Premium", "Women-only"] as const;
const facilityOptions = ["AC", "Trainer", "Cardio", "CrossFit"];

const Explore = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const [type, setType] = useState<string>("All");
  const [maxPrice, setMaxPrice] = useState(3000);
  const [minRating, setMinRating] = useState(0);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
  const [locationSearch, setLocationSearch] = useState(initialSearch);

  const toggleFacility = (f: string) =>
    setSelectedFacilities((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
    );

  const filtered = useMemo(() => {
    return allGyms.filter((g) => {
      if (type !== "All" && g.type !== type) return false;
      if (g.monthlyPrice > maxPrice) return false;
      if (g.rating < minRating) return false;
      if (selectedFacilities.length > 0 && !selectedFacilities.every((f) => g.features.includes(f))) return false;
      if (locationSearch.trim()) {
        const q = locationSearch.toLowerCase();
        const matchesLocation = g.location.toLowerCase().includes(q);
        const matchesName = g.name.toLowerCase().includes(q);
        const matchesAddress = g.address.toLowerCase().includes(q);
        if (!matchesLocation && !matchesName && !matchesAddress) return false;
      }
      return true;
    });
  }, [type, maxPrice, minRating, selectedFacilities, locationSearch]);

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Explore <span className="text-primary">Gyms</span>
        </h1>
        <p className="text-muted-foreground mb-8">Browse and filter gyms to find your perfect match</p>

        {/* Search by location */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by gym name, location, or address (e.g. Koramangala, Whitefield)..."
            value={locationSearch}
            onChange={(e) => setLocationSearch(e.target.value)}
            className="w-full h-12 rounded-xl bg-secondary pl-12 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Filters */}
        <div className="glass-card neon-border p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal className="h-4 w-4 text-primary" />
            <span className="font-semibold text-foreground">Filters</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Gym Type</label>
              <div className="flex flex-wrap gap-2">
                {gymTypes.map((t) => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      type === t ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Max Price: ₹{maxPrice}/mo</label>
              <input type="range" min={500} max={3000} step={100} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-primary" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Min Rating</label>
              <div className="flex gap-2">
                {[0, 4, 4.5].map((r) => (
                  <button
                    key={r}
                    onClick={() => setMinRating(r)}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      minRating === r ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {r === 0 ? "All" : <><Star className="h-3 w-3 fill-current" />{r}+</>}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Facilities</label>
              <div className="flex flex-wrap gap-2">
                {facilityOptions.map((f) => (
                  <button
                    key={f}
                    onClick={() => toggleFacility(f)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      selectedFacilities.includes(f) ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4">{filtered.length} gym{filtered.length !== 1 ? "s" : ""} found</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((gym) => (
            <GymCard key={gym.id} gym={gym} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">No gyms match your filters. Try adjusting them.</div>
        )}
      </div>
    </div>
  );
};

export default Explore;
