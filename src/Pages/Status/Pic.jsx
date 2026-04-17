import React from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const Pic = ({Info}) => {
        const COLORS = ['#7E35E1', '#244D3F', '#64748B'];
    return (
        <div className="min-w-full h-64 overflow-auto">
               <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                      <Pie
                        data={Info}
                        cx='50%'
                        cy='50%'
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey='count'
                        nameKey='name'

                      >
                       {Info.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    
                    <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
                    
               </ResponsiveContainer>
        </div>
    );
};

export default Pic;