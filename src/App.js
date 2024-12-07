import logo from './logo.svg';

import React, { useState } from 'react';
import PredictionForm from './components/PredictionForm';
import ResultDisplay from './components/ResultDisplay';

const App = () => {
  const [result, setResult] = useState(null);

  return (
    <div>
      <h1>Traffic Collision Prediction</h1>
      <PredictionForm setResult={setResult} />
      <ResultDisplay result={result} />
    </div>
  );
};

export default App;
