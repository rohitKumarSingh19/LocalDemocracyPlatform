import React, { useEffect, useState } from 'react';
import api from '../services/api';

const ImpactVisualizer = () => {
  const [impact, setImpact] = useState(null);

  useEffect(() => {
    api.get('/impact?policy=HousingBill').then(res => setImpact(res.data));
  }, []);

  return (
    <div>
      <h2>Impact Visualizer</h2>
      <pre>{JSON.stringify(impact, null, 2)}</pre>
    </div>
  );
};

export default ImpactVisualizer;