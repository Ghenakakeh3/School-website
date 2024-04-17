import React, { PureComponent } from "react";



import {
  PieChart,
  Pie,
  Sector,
  Cell,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer
} from "recharts";
import { dataCircel } from "../../Admin_Dashboard/Report/ReportData";
import Typography from "../../../utilities/Typography";
import { color } from "framer-motion";


const CircleChart_gradient = ({ title,descrption, slider , data }) => {
  // const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const gradientColors = [
    { color: "#2BC2F7", opacity:1 },
    { color: "#5A81FD", opacity: 0.5 },
    {color:"#2bc1f778",opacity: .7}

    // Add more gradient colors with opacity as needed
  ];
  

  const getCell = () => {
    const totalColors = gradientColors.length;
    return dataCircel.map((entry, index) => {
      const colorIndex = index % totalColors;
      const color = gradientColors[colorIndex];
      return <Cell key={index} fill="url(#colorUv)" fillOpacity={color.opacity} />;

    });
  };

  return (
    <div className="w-[16rem] bg-white px-2  py-2 pt-10 flex  flex-col justify-center items-center rounded-md">
      <Typography component="h3">{title}</Typography>
      <PieChart
        width={200}
        height={250}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        className=" "
      >
        <defs>
      <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
        <stop offset="30%" stopColor="#2BC2F7"  />
        <stop offset="95%" stopColor= "#5A81FD" />
      </linearGradient>
    </defs>

        <Pie
          data={dataCircel}
          cx={90}
          cy={100}
          innerRadius={40}
          outerRadius={80}
          
          paddingAngle={5}
          dataKey="value"
        >
        
          {getCell()}
        </Pie>
      </PieChart>
      <div className="flex flex-col gap-1">
        { descrption ?gradientColors.map((color,i) => {
          return(
            <div>
            <span className={` px-[12px] mr-1 rounded-sm bg-gradient-to-r from-primary to-secondary `} style={{opacity:`${color.opacity}`}}></span> <span>62% Patient Users </span>
          </div>
          )
        }
        ) :""}
   
      </div>
    </div>
  );
};
const CircleChart = ({ title,descrption,slider,data }) => {
  const COLORS = ["#1c79b0", "#0087fe63", "#ff6d00", "#FF8042"];

  // const data = [
  //   { name: 'Group A', value:800 },
  //   { name: 'Group B', value: 200 },
  //   // { name: 'Group C', value: 300 },
  //   // { name: 'Group D', value: 200 },
  // ];
  
  const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);
  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  return (
    <div className="w-[100%] h-[25rem] bg-white px-2  pt-5 flex  flex-col justify-center items-center rounded-md shadow-md">
 
      <Typography component="h3" >{title}</Typography>
      <Typography></Typography>
      <ResponsiveContainer >
      
        <PieChart width={400} height={250}>
          <Pie
            data={data}
            // cx="80%"
            cy="40%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            paddingAngle={3}
            fill="#8884d8"
            dataKey="value"
          >
            
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-col gap-1">
        { descrption ?gradientColors.map((color,i) => {
          return(
            <div>
            <span className={` px-[12px] mr-1 rounded-sm bg-gradient-to-r from-primary to-secondary `} style={{opacity:`${color.opacity}`}}></span> <span>62% Patient Users </span>
          </div>
          )
        }
        ) :""}
   
      </div>

    </div>
  );
};

export default CircleChart;
// import React, { PureComponent } from 'react';
// import { FaZ } from 'react-icons/fa6';
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

//  const CircleChart=() => {
//   return (
//     <div className='h-[20rem] w-[20rem]'>
      
//       <ResponsiveContainer width="100%" height="100%">
     
//      <PieChart width={400} height={400}>
//        <Pie
//          data={data}
//          cx="50%"
//          cy="50%"
//          labelLine={false}
//          label={renderCustomizedLabel}
//          outerRadius={80}
//          fill="#8884d8"
//          dataKey="value"
//        >
//          {data.map((entry, index) => (
//            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//          ))}
//        </Pie>
//      </PieChart>
//    </ResponsiveContainer>
//     </div>
//   )
// }
// export default CircleChart

