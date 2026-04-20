import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { allGyms } from "@/data/gyms";
import { toast } from "sonner";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const preselectedGym = searchParams.get("gym") || "";
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    gym: preselectedGym,
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    if (!form.name.trim()) {
      toast.error("Name is required");
      return false;
    }

    if (!form.email.trim()) {
      toast.error("Email is required");
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      toast.error("Enter a valid email");
      return false;
    }

    if (!form.phone.trim()) {
      toast.error("Phone is required");
      return false;
    }

    if (!/^[0-9]{10}$/.test(form.phone.replace(/\D/g, ""))) {
      toast.error("Enter a valid 10-digit phone number");
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setSubmitting(true);

    setTimeout(() => {
      let successMessage = "Enquiry submitted! We'll get back to you within 24 hours🎉Thank You";
      
      if (form.gym) {
        const selectedGym = allGyms.find(g => g.name === form.gym);
        if (selectedGym?.phone) {
          successMessage = `Enquiry submitted! ${selectedGym.phone} will contact you within 2 hours.`;
        }
      }
      
      toast.success(successMessage);
      setForm({ name: "", email: "", phone: "", gym: "", message: "" });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Get in <span className="text-primary">Touch</span>
        </h1>
        <p className="text-muted-foreground mb-10">Have questions or want to join a gym? We're here to help.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: "GymKart4407@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 9980066062" },
              { icon: MapPin, label: "Location", value: "Bengaluru, Karnataka, India" },
            ].map((item) => (
              <div key={item.label} className="glass-card neon-border p-5 flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
<item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-medium text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="relative glass-card neon-border p-8 space-y-5 overflow-hidden">
              
              {/* Watermark */}
              <img
                src="/favicon.png"
                alt="bg-icon"
                className="absolute opacity-10 w-48 md:w-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              />

              <div className="relative z-10">
                <h2 className="font-bold text-lg text-foreground mb-2">Enquiry Form</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      maxLength={100}
                      className="w-full h-10 rounded-lg bg-secondary px-4 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      maxLength={255}
                      className="w-full h-10 rounded-lg bg-secondary px-4 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Phone *</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      maxLength={15}
                      className="w-full h-10 rounded-lg bg-secondary px-4 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Select Gym</label>
                    <select
                      value={form.gym}
                      onChange={(e) => setForm({ ...form, gym: e.target.value })}
                      className="w-full h-10 rounded-lg bg-secondary px-4 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Choose a gym (optional)</option>
                      {allGyms.map((g) => (
                        <option key={g.id} value={g.name}>
                          {g.name} — {g.location}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    maxLength={1000}
                    rows={4}
                    className="w-full rounded-lg bg-secondary px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    placeholder="Tell us what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="h-12 px-8 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  {submitting ? "Sending..." : "Submit Enquiry"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
