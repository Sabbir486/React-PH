import { Line, LineChart, XAxis, YAxis } from 'recharts';
import React from 'react';

const resultData = [
  {
    "id": 1,
    "name": "Sabbir Ahmed",
    "physics": 85,
    "chemistry": 78,
    "math": 92
  },
  {
    "id": 2,
    "name": "Nusrat Jahan",
    "physics": 88,
    "chemistry": 82,
    "math": 90
  },
  {
    "id": 3,
    "name": "Rakib Hasan",
    "physics": 75,
    "chemistry": 80,
    "math": 70
  },
  {
    "id": 4,
    "name": "Farhana Islam",
    "physics": 90,
    "chemistry": 85,
    "math": 95
  },
  {
    "id": 5,
    "name": "Mehedi Hasan",
    "physics": 65,
    "chemistry": 70,
    "math": 68
  },
  {
    "id": 6,
    "name": "Tania Akter",
    "physics": 78,
    "chemistry": 88,
    "math": 84
  },
  {
    "id": 7,
    "name": "Imran Hossain",
    "physics": 82,
    "chemistry": 76,
    "math": 80
  },
  {
    "id": 8,
    "name": "Shakib Khan",
    "physics": 70,
    "chemistry": 72,
    "math": 75
  },
  {
    "id": 9,
    "name": "Jannat Ara",
    "physics": 92,
    "chemistry": 89,
    "math": 94
  },
  {
    "id": 10,
    "name": "Rafiul Islam",
    "physics": 68,
    "chemistry": 74,
    "math": 72
  }
]


const ResultChart = () => {
    return (
        <div>
            <LineChart width={700} height={500} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey={'chemistry'} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;