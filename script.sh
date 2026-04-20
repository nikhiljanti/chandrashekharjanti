#!/bin/bash

# Create folder structure
mkdir -p portfolio/public/images
mkdir -p portfolio/src/components
mkdir -p portfolio/src/data

# Create resume.json with your info
cat > portfolio/src/data/resume.json << 'EOF'
{
  "name": "Chandrashekhar Janti",
  "title": "Certified DevOps Engineer",
  "summary": "Certified DevOps Engineer with 4.4+ years of hands-on experience in creating, automating, deploying services, and managing applications and infrastructure in cloud environments.",
  "skills": [
    "AWS",
    "Microsoft Azure",
    "Terraform",
    "Docker",
    "Kubernetes",
    "HELM",
    "Istio",
    "Git / GitHub / JFrog",
    "Jenkins / ArgoCD / GitHub Actions",
    "Bash",
    "Python (Automation)",
    "OpenSearch",
    "Instana",
    "Datadog",
    "Grafana"
  ],
  "experience": [
    {
      "company": "Daimler Truck Innovation Center (Mercedes-Benz Trucks)",
      "location": "Bangalore, KA",
      "roles": [
        {
          "title": "Senior Infrastructure/DevSecOps Engineer",
          "period": "July 2022 - Present",
          "details": [
            "Designed and automated build/configuration tools (Maven, Gradle, Ansible).",
            "Implemented CI/CD pipelines with Jenkins and GitHub Actions.",
            "Built AWS and Azure infrastructures from scratch.",
            "Configured service mesh architectures with Istio.",
            "Executed migrations from on-prem to cloud platforms."
          ]
        }
      ]
    }
  ],
  "certificates": [
    "Microsoft Azure Fundamentals (AZ-900)",
    "AWS Cloud Practitioner 2 (AWS CLF-02)",
    "Udemy Certified Kubernetes Administrator Developer",
    "Edureka Certified DevOps Engineer"
  ],
  "education": "Bachelor of Engineering in Computer Science (2017-2021), Visvesvaraya Technological University"
}
EOF

# Create Hero.tsx
cat > portfolio/src/components/Hero.tsx << 'EOF'
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
EOF

# Create App.tsx
cat > portfolio/src/App.tsx << 'EOF'
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
EOF

# Create main.tsx
cat > portfolio/src/main.tsx << 'EOF'
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
EOF

# Create index.css
cat > portfolio/src/index.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: Arial, sans-serif;
}
EOF

echo "✅ Portfolio folder created successfully!"
echo "Next steps:"
echo "1. cd portfolio"
echo "2. npm install"
echo "3. npm run dev"
echo "4. Add your photo at portfolio/public/images/profile.jpg"
