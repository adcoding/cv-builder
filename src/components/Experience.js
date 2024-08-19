"use client";
import React, { useState } from "react";

function Experience() {
  const [formData, setFormData] = useState({
    date: "",
    companyName: "",
    occupation: "",
  });
  const [activities, setActivities] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddActivity = () => {
    setActivities([...activities, formData]);
    setFormData({ date: "", companyName: "", occupation: "" });
  };

  const handleRemoveActivity = (index) => {
    const updatedActivities = [...activities];
    updatedActivities.splice(index, 1);
    setActivities(updatedActivities);
  };

  return (
    <div>
      <h2>Work Experience</h2>
      <input
        type="text"
        placeholder="Date"
        value={formData.date}
        onChange={handleChange}
        name="date"
      />
      <input
        type="text"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={handleChange}
        name="companyName"
      />
      <input
        type="text"
        placeholder="Occupation"
        value={formData.occupation}
        onChange={handleChange}
        name="occupation"
      />
      <button onClick={handleAddActivity}>Add Activity</button>

      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            <div>
              <strong>Date:</strong> {activity.date}
              <br />
              <strong>Company:</strong> {activity.companyName}
              <br />
              <strong>Occupation:</strong> {activity.occupation}
            </div>
            <button onClick={() => handleRemoveActivity(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;