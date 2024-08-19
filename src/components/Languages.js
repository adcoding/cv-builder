"use client";
import { useState } from "react";

function Languages() {
  const [language, setLanguage] = useState('');
  const [languages, setLanguages] = useState([]);
  const proficiencyLevels = ["Beginner", "Intermediate", "Advanced", "Native/Fluent"];

  const handleAddLanguage = () => {
    if (language.trim() !== '') { // make sure the input is not empty
      setLanguages([...languages, { language, proficiency: proficiencyLevels[0] }]);
      setLanguage('');
    }
  };

  const handleRemoveLanguage = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages.splice(index, 1);
    setLanguages(updatedLanguages);
  };

  const handleProficiencyChange = (index, newProficiency) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index].proficiency = newProficiency;
    setLanguages(updatedLanguages);
  };

  return (
    <div>
      <h2>Languages</h2>
      <div className="language-input">
        <input
          type="text"
          placeholder="Language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
        <select value={languages.length ? languages[0].proficiency : proficiencyLevels[0]} onChange={(e) => handleProficiencyChange(0, e.target.value)}>
          {proficiencyLevels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
        <button onClick={handleAddLanguage}>Add Language</button>
      </div>

      <ul>
        {languages.map((languageObj, index) => (
          <li key={index}>
            {languageObj.language} (
            <select value={languageObj.proficiency} onChange={(e) => handleProficiencyChange(index, e.target.value)}>
              {proficiencyLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
            )
            <button onClick={() => handleRemoveLanguage(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Languages;