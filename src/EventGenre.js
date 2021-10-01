import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';


const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);
  const genres = ['React', 'AngularJS', 'jQuery', 'Node', 'JavaScript'];
  const COLORS = ['#5d8cbc', '#6699cd', '#5398bd', '#7eb9ce', '#b6e0ef'];

  const getData = () => {
    const data = genres.map(genre => {
      const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;
      return {
        name: genre,
        value: value
      };
    });
    return data;
  };

  useEffect(() => { setData(() => getData()); }, [events]);

  return (
    <ResponsiveContainer height={400} width="100%">
      <PieChart>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          dataKey="value"
          label={({ name, percent }) => (`${name} - ${(percent * 100).toFixed(0)}%`)}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventGenre;