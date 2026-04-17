import React from 'react';
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const BarDia = ({Info}) => {
     const COLORS = ['#7E35E1', '#244D3F', '#64748B'];
     console.log(Info);
    return (
       <div className="min-w-full h-64 overflow-auto">
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={Info} width="100%" height="100%">
               <XAxis 
                 dataKey='name'
                 
                 tickLine={false}
                 tick={{ fill: '#9CA3AF', fontSize: 12 }}
               >
               </XAxis>
               <YAxis  ></YAxis>
               <Tooltip
            cursor={{ fill: '#F3F4F6' }}
            contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
          />
          <Bar dataKey="count" radius={[10, 10, 0, 0]} barSize={40}>
            {Info.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
            </BarChart>
        </ResponsiveContainer>

        </div>
    );
};

export default BarDia;