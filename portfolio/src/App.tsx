import React from "react";
import Hero from "./components/Hero";
import resume from "./data/resume.json";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero />
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Summary</h2>
        <p>{resume.summary}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Skills</h2>
        <ul className="list-disc list-inside">
          {resume.skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
