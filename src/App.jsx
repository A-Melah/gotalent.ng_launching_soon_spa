import React, { useEffect, useState } from "react";

export default function LaunchingSoon() {
  const [daysLeft, setDaysLeft] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const launchDate = new Date("2025-08-30");
    const interval = setInterval(() => {
      const now = new Date();
      const distance = launchDate - now;
      const days = Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0);
      setDaysLeft(days);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#154270] text-white text-center px-4">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">gotalent.ng</h1>
        <p className="text-xl md:text-2xl mb-4">We're launching soon!</p>

        {daysLeft !== null && (
          <p className="text-lg mb-6">Launching in <span className="font-semibold">{daysLeft}</span> day{daysLeft !== 1 ? "s" : ""}</p>
        )}

        {submitted ? (
          <p className="text-lg text-green-300 font-medium">Thank you! You'll be notified.</p>
        ) : (
          <form
            name="notify"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <input type="hidden" name="form-name" value="notify" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="px-4 py-2 rounded-md text-black w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-[#5bcdb6] hover:bg-[#388073] transition-colors px-6 py-2 rounded-md"
            >
              Notify Me
            </button>
          </form>
        )}

        <p className="text-sm mt-6 opacity-80">Stay connected — we're cooking something amazing for talents in Nigeria.</p>
      </div>
    </div>
  );
}
