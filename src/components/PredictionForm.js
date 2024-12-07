import React, { useState } from "react";
import "../App.css";

const PredictionForm = ({ setResult }) => {
  const [formData, setFormData] = useState({
    OCC_DOW: "",
    OCC_HOUR: "",
    MOTORCYCLE: 0,
    AUTOMOBILE: 0,
    PASSENGER: 0,
    PEDESTRIAN: 0,
    BICYCLE: 0,
    DIVISION: "", // 用户输入警区代码，如 D41
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ features: formData }),
    })
      .then((response) => response.json())
      .then((data) => setResult(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="OCC_DOW">Day of Week (e.g., Monday):</label>
        <input
          type="text"
          id="OCC_DOW"
          name="OCC_DOW"
          value={formData.OCC_DOW}
          onChange={handleChange}
        />

        <label htmlFor="OCC_HOUR">Hour of the Day (0-23):</label>
        <input
          type="number"
          id="OCC_HOUR"
          name="OCC_HOUR"
          value={formData.OCC_HOUR}
          onChange={handleChange}
        />

        <label htmlFor="DIVISION">Division (e.g., D41):</label>
        <input
          type="text"
          id="DIVISION"
          name="DIVISION"
          value={formData.DIVISION}
          onChange={handleChange}
        />

        {["MOTORCYCLE", "AUTOMOBILE", "PASSENGER", "PEDESTRIAN", "BICYCLE"].map(
          (field) => (
            <div key={field}>
              <label htmlFor={field}>{field}</label>
              <select
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
              >
                <option value={0}>No</option>
                <option value={1}>Yes</option>
              </select>
            </div>
          )
        )}

        <button type="submit">Predict</button>
      </form>
    </div>
  );
};

export default PredictionForm;
