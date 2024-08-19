"use client";
import { useState } from "react";

function Education() {
  const [formData, setFormData] = useState({
    institution: "",
    degree: "",
    graduationdate: "",
  });
  const [activities, setActivities] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddActivity = () => {
    setActivities([...activities, formData]);
    setFormData({ institution: "", degree: "", graduationdate: "" });
  };

  const handleRemoveActivity = (index) => {
    const updatedActivities = [...activities];
    updatedActivities.splice(index, 1);
    setActivities(updatedActivities);
  };

  return (
    <div>
      <h2>Education</h2>
      <input
        type="text"
        placeholder="institution"
        value={formData.institution}
        onChange={handleChange}
        name="institution"
      />
      <input
        type="text"
        placeholder="Degree"
        value={formData.degree}
        onChange={handleChange}
        name="degree"
      />
      <input
        type="date"
        placeholder="graduationdate"
        value={formData.graduationdate}
        onChange={handleChange}
        name="graduationdate"
      />
      <button onClick={handleAddActivity}>Add education</button>

      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            <div>
              <strong>institution:</strong> {activity.institution}
              <br />
              <strong>Company:</strong> {activity.degree}
              <br />
              <strong>graduationdate:</strong> {activity.graduationdate}
            </div>
            <button onClick={() => handleRemoveActivity(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;