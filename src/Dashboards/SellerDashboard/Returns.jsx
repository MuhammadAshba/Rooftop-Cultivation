import React from 'react'

function Returns() {
  return (
    <>
    <div className='w-full bg-green-100  rounded-2xl h-[5%] md:p-5 p-7 sm:pb-8 md:h-[35%] shadow-md'>
     <h2 className='order-first text-2xl font-semibold tracking-tight text-center text-gray-900 sm:text-2xl md:pt-4 '>Your Returns And Cancelled Orders</h2>
    </div>

  

<table class="border-separate border border-slate-400 m-auto  md:mt-8">
  <thead>
    <tr>
      <th class="border border-slate-300 p-3 md:px-10">Order id</th>
      <th class="border border-slate-300 p-3 md:px-10">Customer name</th>
      <th class="border border-slate-300 p-3 md:px-10">Order date</th>
      <th class="border border-slate-300 p-3 md:px-10">Cancel/Return date</th>
      <th class="border border-slate-300 p-3 md:px-10">Reason</th>
      <th class="border border-slate-300 p-3 md:px-10">Status</th>
    </tr>
  </thead>
  <tbody> 
   
   
    <tr>
      <td class="border border-slate-300 p-3 md:px-11">111</td>
      <td class="border border-slate-300 p-3 md:px-11">Ashba</td>
      <td class="border border-slate-300 p-3 md:px-11">13 january 2023</td>
      <td class="border border-slate-300 p-3 md:px-11">23 january 2023</td>
      <td class="border border-slate-300 p-3 md:px-11">Not satified</td>
      <td class="border border-slate-300 p-3 md:px-11">Return</td>
    </tr>
  
    <tr>
      <td class="border border-slate-300 p-3 md:px-11">111</td>
      <td class="border border-slate-300 p-3 md:px-11">Ashba</td>
      <td class="border border-slate-300 p-3 md:px-11">13 january 2023</td>
      <td class="border border-slate-300 p-3 md:px-11">23 january 2023</td>
      <td class="border border-slate-300 p-3 md:px-11">Not satified</td>
      <td class="border border-slate-300 p-3 md:px-11">Return</td>
    </tr>
  
    <tr>
      <td class="border border-slate-300 p-3 md:px-11">111</td>
      <td class="border border-slate-300 p-3 md:px-11">Ashba</td>
      <td class="border border-slate-300 p-3 md:px-11">13 january 2023</td>
      <td class="border border-slate-300 p-3 md:px-11">23 january 2023</td>
      <td class="border border-slate-300 p-3 md:px-11">Product damage</td>
      <td class="border border-slate-300 p-3 md:px-11">Cancelled</td>
    </tr>
  

  </tbody>
</table>

    
    </>
  )
}

export default Returns