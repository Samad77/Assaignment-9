import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'React',
    pv: 8,
  },
  {
    name: 'Javascript',
     
    pv: 9,
    
  },
  {
    name: 'CSS',
    
    pv: 8,
     
  },
  {
    name: 'Git Hub',
     
    pv: 11,
     
  },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
];

export default function Statistics(){
  


    return (
      <ResponsiveContainer width="100%" aspect={4} >
        <BarChart
          width={300}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#82ca9d" />
          {/* <Bar dataKey="uv" fill="" /> */}
        </BarChart>
      </ResponsiveContainer>
    );
  }

