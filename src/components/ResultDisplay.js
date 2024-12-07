import React from "react";
import "../App.css";

const ResultDisplay = ({ result }) => {
  if (!result) {
    return null;
  }

  return (
    <div className="container result-container">
      <h2>Prediction Result</h2>
      <p>
        <strong>Prediction:</strong> {result.prediction === 1 ? "Severe Accident" : "Non-Severe Accident"}
      </p>
      <p>
        <strong>Probability:</strong> {`Severe: ${(result.probability[1] * 100).toFixed(2)}%, Non-Severe: ${(result.probability[0] * 100).toFixed(2)}%`}
      </p>
    </div>
  );
};

export default ResultDisplay;
