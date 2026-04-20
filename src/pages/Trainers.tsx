import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, Star } from "lucide-react";
import { allTrainers } from "@/data/trainers";

const trainerSpecialties = ["All", "Bodybuilding", "Weight Loss", "Yoga", "CrossFit", "Powerlifting", "HIIT", "Pilates"] as const;
const experienceLevels = ["All", "Beginner (<5 years)", "Intermediate (5-8 years)", "Expert (9+ years)"];

const Trainers = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [specialty, setSpecialty] = useState<string>("All");
  const [minExperienceYears, setMinExperienceYears] = useState(0);
  const [gender, setGender] = useState("All");

const toggleSpecialty = (s: string) =>
    setSpecialty(s === specialty ? "All" : s);

  const toggleGender = (g: string) =>
    setGender(g === gender ? "All" : g);

  const parseExperience = (exp: string): number => {
    const match = exp.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  };

  const filteredTrainers = useMemo(() => {
    return allTrainers.filter((trainer) => {
      // Search
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        const matchesName = trainer.name.toLowerCase().includes(q);
        const matchesSpecialty = trainer.specialty.toLowerCase().includes(q);
        const matchesExperience = trainer.experience.toLowerCase().includes(q);
        if (!matchesName && !matchesSpecialty && !matchesExperience) return false;
      }

      // Specialty filter
      if (specialty !== "All" && !trainer.specializations.some((s) => s.toLowerCase().includes(specialty.toLowerCase())) && trainer.specialty.toLowerCase() !== specialty.toLowerCase()) return false;

      // Experience filter
      if (minExperienceYears > 0 && parseExperience(trainer.experience) < minExperienceYears) return false;

      // Gender filter
      if (gender !== "All") {
        const nameLower = trainer.name.toLowerCase();
        const isMale = ["arjun", "rohan", "ajay", "vikram", "karan", "rajesh", "siddharth", "aryan"].some(maleName => nameLower.includes(maleName));
        const isFemale = !isMale; // Infer female if not matching male names
        if (gender === "Male" && !isMale) return false;
        if (gender === "Female" && !isFemale) return false;
      }

      return true;
    });
  }, [searchTerm, specialty, minExperienceYears, gender]);

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Meet <span className="text-primary"><span className="text-primary">G</span>ym<span className="text-primary">K</span>art</span> Trainers
        </h1>
        <p className="text-muted-foreground mb-8">
          Our certified trainers help you achieve your fitness goals with personalized guidance, expert knowledge, and real results.
        </p>

        {/* Search input */}
        <div className="relative mb-6 max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search trainers by name, specialty, or experience..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-12 rounded-xl bg-secondary pl-12 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Filters */}
        <div className="glass-card neon-border p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal className="h-4 w-4 text-primary" />
            <span className="font-semibold text-foreground">Filters</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Specialty */}
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Specialty</label>
              <div className="flex flex-wrap gap-2">
                {trainerSpecialties.map((s) => (
                  <button
                    key={s}
                    onClick={() => toggleSpecialty(s)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      specialty === s ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            {/* Experience Slider */}
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Min Experience: {minExperienceYears} years</label>
              <input 
                type="range" 
                min={0} 
                max={12} 
                step={1} 
                value={minExperienceYears} 
                onChange={(e) => setMinExperienceYears(Number(e.target.value))} 
                className="w-full accent-primary" 
              />
            </div>
            {/* Gender Filter */}
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Gender</label>
              <div className="flex gap-2">
                {["Male", "Female"].map((g) => (
                  <button
                    key={g}
                    onClick={() => toggleGender(g)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex-1 ${
                      gender === g ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-6">{filteredTrainers.length} trainer{filteredTrainers.length !== 1 ? "s" : ""} found</p>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTrainers.map((trainer) => {
            const trainerUrl = `/trainer/${trainer.id}`;
            return (
              <Link
                key={trainer.id}
                to={trainerUrl}
                className="bg-card border rounded-xl overflow-hidden shadow hover:shadow-xl transition-all group"
              >
                <div className="w-full h-[260px] overflow-hidden">
                  <img
                    src={trainer.image || "/default-trainer.jpg"}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold line-clamp-1">{trainer.name}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{trainer.specialty}</p>
                  <p className="text-sm text-muted-foreground">{trainer.experience} experience</p>
                  <p className="text-xs mt-2 text-primary font-medium">View Profile →</p>
                </div>
              </Link>
            );
          })}
        </div>
        {filteredTrainers.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No trainers match your search. Try different filters.
          </div>
        )}
      </div>
    </div>
  );
};

export default Trainers;
