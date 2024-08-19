import React from "react";
import PersonalInfo from "@/components/PersonalInfo";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Languages from "@/components/Languages";

export default function Home() {
  return (
    <main className="app-container">
      <h1>CV Builder</h1>

      <div className="personal-info-container">
        <PersonalInfo />
      </div>

      <div className="expertise-info-container">
        <Expertise />
      </div>

      <div className="experience-info-container">
        <Experience />
      </div>

      <div className="education-info-container">
        <Education />
      </div>

      <div className="language-info-container">
        <Languages />
      </div>
    </main>
  );
}
