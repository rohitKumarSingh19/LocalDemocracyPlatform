import React, { useEffect, useState } from 'react';
import api from '../services/api';

const LegislationSummaries = () => {
  const [summaries, setSummaries] = useState([]);

  useEffect(() => {
    api.get('/legislation/summaries').then(res => setSummaries(res.data));
  }, []);

  return (
    <div>
      <h2>Legislation Summaries</h2>
      {summaries.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default LegislationSummaries;