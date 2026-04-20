import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState("");

  // ✅ Email validation
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // ✅ Fake API call
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
    <div className="relative mt-16 text-center">
      <h3 className="text-xl font-bold mb-2">Newsletter</h3>
      <p className="text-muted-foreground mb-4">
        Get latest gym deals and updates
      </p>

      <div className="flex justify-center gap-2 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-10 flex-1 rounded-lg bg-secondary px-3 text-sm outline-none focus:ring-2 focus:ring-primary"
        />

        <button
          onClick={handleSubscribe}
          className="px-5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90"
        >
          Subscribe
        </button>
      </div>

      {/* ✅ TOAST */}
      {toast && (
        <div className="fixed top-5 right-5 bg-black text-white px-5 py-3 rounded-lg shadow-lg animate-fade-in">
          {toast}
        </div>
      )}
    </div>
  );
};

export default Newsletter;