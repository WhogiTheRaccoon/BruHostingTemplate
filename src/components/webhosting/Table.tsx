"use client";
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react';

interface TableProps {
  data: Record<string, any>[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  if (!data.length) return <p className="text-center text-red-400">No data available</p>;
  const [isMonthly, setIsMonthly] = useState(true);

  const toggleBilling = () => {
    setIsMonthly(prevState => !prevState);
  }

  return (
    <table className="text-center w-3/4 mx-auto bg-backgroundLight rounded-md text-white hidden md:table">
    <thead>
      <tr>
        <th className="tableHeader">
          <div className="rounded-full flex items-center cursor-pointer relative border-2 border-borders mx-5 transition-all duration-300 bg-background" id="toggleSwitch" onClick={toggleBilling}>
            <div id="monthly" className={`w-1/2 text-center py-2 text-white font-medium rounded-full transition-all duration-300 ${isMonthly ? 'bg-accent shadow' : 'bg-background'}`}>Monthly</div>
            <div id="yearly" className={`w-1/2 text-center py-2 text-white font-medium rounded-full transition-all duration-300 ${!isMonthly ? 'bg-accent shadow' : 'bg-background'}`}>Yearly</div>
          </div>
        </th>
        {data.map((plan, index) => (
          <th className="tableHeader" key={index}>
            <span className="text-xl">{plan.name}</span>
            <div className="text-muted text-2xl mb-3" id="price">${isMonthly ? plan.price : ((plan.price as any - 1) * 12)}<span className="text-sm">{isMonthly ? "/month" : "/year"}</span></div>
            <a href={plan.link} className="bg-accent hover:bg-[#0160d9] text-white px-4 py-2 rounded-full mx-auto mt-2">Order Now</a>
          </th>
        ))}
      </tr>
    </thead>
    <tbody className="text-white shadow-2xl">
      <tr>
        <td className="tableSection">Websites</td>
        {data.map((plan, index) => (
          <td className="tableItem" key={index}>{plan.websites} Websites</td>
        ))}
      </tr>
      <tr>
        <td className="tableSection">NVMe Storage</td>
        {data.map((plan, index) => (
          <td className="tableItem" key={index}>{plan.storage}</td>
        ))}
      </tr>
      <tr>
        <td className="tableSection">Bandwidth</td>
        {data.map((plan, index) => (
          <td className="tableItem" key={index}>{plan.bandwidth}</td>
        ))}
      </tr>
      <tr>
        <td className="tableSection">SSL Certificate</td>
        {data.map((plan, index) => (
          <td className="tableItem" key={index}>{plan.SSL}</td>
        ))}
      </tr>
      <tr>
        <td className="tableSection">Backups</td>
        {data.map((plan, index) => (
          <td className="tableItem" key={index}>{plan.Backups}</td>
        ))}
      </tr>
      <tr>
        <td className="tableSection">Uptime Monitoring</td>
        {data.map((plan, index) => (
          <td className="tableItem" key={index}>
            {plan.Uptime ? <CheckCircleIcon className="h-6 w-6 text-green-400 inline-block" /> : null}
          </td>
        ))}
      </tr>
      <tr>
        <td className="tableSection">Domains</td>
        {data.map((plan, index) => (
          <td className="tableItem" key={index}>{plan.domains}</td>
        ))}
      </tr>
      <tr>
        <td className="tableSection">Control Panel</td>
        {data.map((plan, index) => (
          <td className="tableItem" key={index}>{plan.panel}</td>
        ))}
      </tr>
      <tr>
        <td className="tableSection">Support</td>
        {data.map((plan, index) => (
          <td className="tableItem" key={index}>{plan.support}</td>
        ))}
      </tr>
      <tr>
        <td className="tableSection">Location</td>
        {data.map((plan, index) => (
          <td className="tableItem" key={index}>{plan.Location}</td>
        ))}
      </tr>
    </tbody>
  </table>
  )
};

export default Table;













// export default function WebTable(data: Record<string, any>[]) {
//   console.log(data);

//   if (!data.length) return <p className="text-center text-red-400">No data available</p>;
//   const [isMonthly, setIsMonthly] = useState(true);

//   const toggleBilling = () => {
//     setIsMonthly(prevState => !prevState);
//   }

//     return (
//         <table className="text-center w-3/4 mx-auto bg-backgroundLight rounded-md text-white hidden md:table">
//         <thead>
//           <tr>
//             <th className="tableHeader">
//               <div className="rounded-full flex items-center cursor-pointer relative border-2 border-borders mx-5 transition-all duration-300 bg-background" id="toggleSwitch" onClick={toggleBilling}>
//                 <div id="monthly" className={`w-1/2 text-center py-2 text-white font-medium rounded-full transition-all duration-300 ${isMonthly ? 'bg-accent shadow' : 'bg-background'}`}>Monthly</div>
//                 <div id="yearly" className={`w-1/2 text-center py-2 text-white font-medium rounded-full transition-all duration-300 ${!isMonthly ? 'bg-accent shadow' : 'bg-background'}`}>Yearly</div>
//               </div>
//             </th>
//             {data.map((plan, index) => (
//               <th className="tableHeader" key={index}>
//                 <span className="text-xl">{plan.name}</span>
//                 <div className="text-muted text-2xl mb-3" id="price">${isMonthly ? plan.price : ((plan.price as any - 1) * 12)}<span className="text-sm">{isMonthly ? "/month" : "/year"}</span></div>
//                 <button className="bg-accent hover:bg-[#0160d9] text-white px-4 py-2 rounded-full mx-auto">Order Now</button>
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody className="text-white shadow-2xl">
//           <tr>
//             <td className="tableSection">Websites</td>
//             {data.map((plan, index) => (
//               <td className="tableItem" key={index}>{plan.websites} Websites</td>
//             ))}
//           </tr>
//           <tr>
//             <td className="tableSection">NVMe Storage</td>
//             {data.map((plan, index) => (
//               <td className="tableItem" key={index}>{plan.storage}</td>
//             ))}
//           </tr>
//           <tr>
//             <td className="tableSection">Bandwidth</td>
//             {data.map((plan, index) => (
//               <td className="tableItem" key={index}>{plan.bandwidth}</td>
//             ))}
//           </tr>
//           <tr>
//             <td className="tableSection">SSL Certificate</td>
//             {data.map((plan, index) => (
//               <td className="tableItem" key={index}>{plan.SSL}</td>
//             ))}
//           </tr>
//           <tr>
//             <td className="tableSection">Backups</td>
//             {data.map((plan, index) => (
//               <td className="tableItem" key={index}>{plan.Backups}</td>
//             ))}
//           </tr>
//           <tr>
//             <td className="tableSection">Uptime Monitoring</td>
//             {data.map((plan, index) => (
//               <td className="tableItem" key={index}>
//                 {plan.Uptime ? <CheckCircleIcon className="h-6 w-6 text-green-400 inline-block" /> : null}
//               </td>
//             ))}
//           </tr>
//           <tr>
//             <td className="tableSection">Domains</td>
//             {data.map((plan, index) => (
//               <td className="tableItem" key={index}>{plan.domains}</td>
//             ))}
//           </tr>
//           <tr>
//             <td className="tableSection">Control Panel</td>
//             {data.map((plan, index) => (
//               <td className="tableItem" key={index}>{plan.panel}</td>
//             ))}
//           </tr>
//           <tr>
//             <td className="tableSection">Support</td>
//             {data.map((plan, index) => (
//               <td className="tableItem" key={index}>{plan.support}</td>
//             ))}
//           </tr>
//           <tr>
//             <td className="tableSection">Location</td>
//             {data.map((plan, index) => (
//               <td className="tableItem" key={index}>{plan.Location}</td>
//             ))}
//           </tr>
//         </tbody>
//       </table>
//     )
// }