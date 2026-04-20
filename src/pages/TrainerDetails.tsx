import { useParams, Link } from "react-router-dom";
import { allTrainers } from "@/data/trainers";
import { allGyms } from "@/data/gyms";
import { ArrowLeft } from "lucide-react";

const TrainerDetails = () => {
  const { id } = useParams();
  const trainerId = parseInt(id as string || '0');
  const trainer = allTrainers.find((t) => t.id === trainerId);

  if (!trainer) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl pt-20">
        Trainer not found. <Link to="/trainers" className="text-primary hover:underline ml-2">Go to Trainers</Link>
      </div>
    );
  }

  const workingGyms = allGyms.filter((gym) =>
    gym.trainers?.some((t) => t.id === trainerId)
  );

  return (
    <div className="min-h-screen pt-20 px-6 md:px-16 py-10">
      {/* Back Button */}
      <div className="mb-8 max-w-6xl mx-auto">
        <Link 
          to="/trainers" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Trainers
        </Link>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="w-full h-[420px] rounded-xl overflow-hidden shadow-lg">
          <img
            src={trainer.image || "/placeholder.svg"}
            alt={trainer.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{trainer.name}</h1>

          <div className="space-y-2 mb-6">
            <p className="text-lg"><strong>Age:</strong> {trainer.age}</p>
            <p className="text-lg"><strong>Experience:</strong> {trainer.experience}</p>
          </div>

          <div className="space-y-6">
            {/* Specializations */}
            <div>
              <h2 className="font-semibold text-xl mb-3">Specializations</h2>
              <ul className="list-disc ml-6 space-y-1">
                {(trainer.specializations || [trainer.specialty]).map((s, i) => (
                  <li key={i} className="text-muted-foreground">{s}</li>
                ))}
              </ul>
            </div>

            {/* Certificates */}
            <div>
              <h2 className="font-semibold text-xl mb-3">Certifications</h2>
              <ul className="list-disc ml-6 space-y-1">
                {(trainer.certificates || ["Certified Personal Trainer"]).map((c, i) => (
                  <li key={i} className="text-muted-foreground">{c}</li>
                ))}
              </ul>
            </div>

            {/* Working Gyms */}
            <div>
              <h2 className="font-semibold text-xl mb-4">Working At</h2>
              {workingGyms.length === 0 ? (
                <p className="text-muted-foreground">No gyms assigned yet.</p>
              ) : (
                <div className="space-y-3">
                  {workingGyms.map((gym) => (
                    <Link
                      key={gym.id}
                      to={`/gym/${gym.id}`}
                      className="block p-4 border rounded-xl hover:shadow-md transition-all glass-card neon-border"
                    >
                      <h3 className="font-semibold text-foreground">{gym.name}</h3>
                      <p className="text-sm text-muted-foreground">{gym.location}</p>
                      <p className="text-xs text-muted-foreground mt-1">{gym.address}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerDetails;
