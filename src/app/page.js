import React from "react";
import PersonalInfo from "@/components/PersonalInfo";
import Expertise from "@/components/Expertise";

export default function Home() {
  return (
    <main>
      <h1>CV Builder</h1>

      <div className="personal-info-container">
        <PersonalInfo />
      </div>

      <div className="expertise-info-container">
        <Expertise />
      </div>
    </main>
  );
}
