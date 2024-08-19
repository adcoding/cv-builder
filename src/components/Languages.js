"use client";
import { useState } from "react";

function Languages() {
  const [languages, setLanguages] = useState([]);

  const handleAddLanguage = () => {
    if (language.trim() !== '') {
      setLanguages([...languages, language]);
      setLanguage('');
    }
  };

  const handleRemoveLanguage = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages.splice(index, 1);
    setLanguages(updatedLanguages);
  };

  const [language, setLanguage] = useState('');

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
        <button onClick={handleAddLanguage}>Add Language</button>
      </div>

      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            {language}
            <button onClick={() => handleRemoveLanguage(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Languages;