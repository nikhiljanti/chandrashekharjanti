import React from "react";

export default function Hero() {
  return (
    <section className="text-center py-20">
      <img
        src="/images/profile.jpg"
        alt="Profile"
        className="mx-auto w-40 h-40 rounded-full border-4 border-gradient"
      />
      <h1 className="text-4xl font-bold mt-4">Chandrashekhar Janti</h1>
      <p className="mt-2 text-lg text-gray-600">Certified DevOps Engineer</p>
    </section>
  );
}
