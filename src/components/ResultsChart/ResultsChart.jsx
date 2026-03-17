import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData =
  [
    {
      "id": 1,
      "name": "Rahim",
      "physics": 78,
      "chemistry": 82,
      "math": 90
    },
    {
      "id": 2,
      "name": "Karim",
      "physics": 65,
      "chemistry": 70,
      "math": 72
    },
    {
      "id": 3,
      "name": "Amina",
      "physics": 88,
      "chemistry": 91,
      "math": 95
    },
    {
      "id": 4,
      "name": "Sadia",
      "physics": 74,
      "chemistry": 68,
      "math": 80
    },
    {
      "id": 5,
      "name": "Nabil",
      "physics": 60,
      "chemistry": 66,
      "math": 70
    },
    {
      "id": 6,
      "name": "Tania",
      "physics": 85,
      "chemistry": 89,
      "math": 92
    },
    {
      "id": 7,
      "name": "Fahim",
      "physics": 71,
      "chemistry": 75,
      "math": 78
    },
    {
      "id": 8,
      "name": "Rina",
      "physics": 90,
      "chemistry": 94,
      "math": 96
    },
    {
      "id": 9,
      "name": "Sabbir",
      "physics": 68,
      "chemistry": 72,
      "math": 74
    },
    {
      "id": 10,
      "name": "Mitu",
      "physics": 83,
      "chemistry": 87,
      "math": 88
    }
  ]


const ResultsChart = () => {
  return (
    <div>
      <LineChart width={800} height={500} data={resultData} >
        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math"></Line>
        <Line dataKey={"chemistry"} stroke='red'></Line>

      </LineChart>
    </div>
  );
};

export default ResultsChart;