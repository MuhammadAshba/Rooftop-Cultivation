import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart'


const Sellerdashboardcontent = () => {

  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
      const data = {
          labels: ['Q1', 'Q2', 'Q3', 'Q4'],
          datasets: [
              {
                  label: 'Sales',
                  data: [540, 325, 702, 620],
                  backgroundColor: [
                      'rgba(255, 159, 64, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                      'rgb(255, 159, 64)',
                      'rgb(75, 192, 192)',
                      'rgb(54, 162, 235)',
                      'rgb(153, 102, 255)'
                    ],
                    borderWidth: 1
              }
          ]
      };
      const options = {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      };

      setChartData(data);
      setChartOptions(options);
  }, []);


  return (
    <div>
        
    <div className='w-full bg-slate-200  rounded-2xl h-[5%] md:p-5 p-7 sm:pb-8 md:h-[35%] shadow-md'>
     <h2 className='order-first text-2xl font-semibold tracking-tight text-center text-gray-900 sm:text-2xl md:pt-8 '>Welcome to Seller center</h2>
    </div>

     <div class="bg-white py-5 md:py-10 md:mt-3 ">
    
       <div class="sm-auto  max-w-7xl px-6 lg:px-8 ">
         <dl class="grid  gap-x-4 gap-y-4 text-center  grid-cols-1  md:grid-cols-4 lg:grid-cols-4 ">
         
           <div class="mx-auto flex  flex-col gap-y-4 border-2 md:p-10 py-3  rounded-2xl  bg-slate-200  w-[235px] md:w-[245px] " >
             <dt class=" leading-7 text-gray-600 text-xl">44pkr</dt>
             <dd class="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">Total sales</dd>
           </div>
           <div class="mx-auto flex  flex-col gap-y-4 border-2 md:p-10 py-3  rounded-2xl  bg-slate-200 px-10 w-[235px]  md:w-[245px]">
             <dt class=" leading-7 text-gray-600 text-xl">14</dt>
             <dd class="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">Total Orders</dd>
           </div>
           <div class="mx-auto flex  flex-col gap-y-4 border-2 md:p-10 py-3  rounded-2xl  bg-slate-200 px-10  w-[235px] md:w-[245px]">
             <dt class=" leading-7 text-gray-600 text-xl">3</dt>
             <dd class="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">Total Returns</dd>
           </div>
           <div class="mx-auto flex  flex-col gap-y-4 border-2 md:p-10 py-3 rounded-2xl  bg-slate-200 px-10 w-[235px]  md:w-[245px]">
             <dt class=" leading-7 text-gray-600 text-xl">13</dt>
             <dd class="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">Notifications</dd>
           </div>
          
         
         </dl>
       </div>
     </div>

     <div className="card w-[90%] m-auto">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>

   </div>
  )
}

export default Sellerdashboardcontent 