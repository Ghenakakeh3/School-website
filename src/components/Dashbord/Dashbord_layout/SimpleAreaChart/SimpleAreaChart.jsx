import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Typography from '../../../utilities/Typography';

const data = [
  {
    name: '1    ',
    uv: 100,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2',
    uv: 50,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3',
    uv: 25,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '4',
    uv: 100,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '5',
    uv: 10,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '6',
    uv: 30,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '7',
    uv: 10,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '8',
    uv: 40,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '9',
    uv: 50,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '10',
    uv: 30,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '11',
    uv: 5,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '12',
    uv: 60,
    pv: 2400,
    amt: 2400,
  },
];

const SimpleAreaChart = ({title}) => {
  return (
    <div className='w-full h-full rounded-md'>
    <Typography component={"h3"} className="w-full  text-center mt-3">{title}</Typography>

        <ResponsiveContainer width="100%" height="90%">
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 30,
        right: 30,
        left: 0,
        bottom: 0,
        
      }}
      
    >
       <CartesianGrid strokeDasharray="5 5" horizontal={false} vertical ={false} />
       <defs>
            <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="50%" stopColor="#0088FE" stopOpacity={1} />
              <stop offset="98%" stopColor="#0088FE" stopOpacity={0} />
            </linearGradient>
          </defs>  <defs>
            <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0088FE" stopOpacity={0.6} />
              <stop offset="80%" stopColor="#0088FE" stopOpacity={0} />
            </linearGradient>
          </defs>
      <XAxis dataKey="name"  />
      <YAxis  />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#0087fe63" fill="url(#areaFill)"  />
    </AreaChart>
  </ResponsiveContainer>
    </div>
  )
}

export default SimpleAreaChart
