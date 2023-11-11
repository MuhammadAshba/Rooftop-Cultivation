import React from 'react'

function Orders() {
  return (
    <>
    <div className='w-full bg-green-100  rounded-2xl h-[5%] md:p-5 p-7 sm:pb-8 md:h-[35%] shadow-md'>
     <h2 className='order-first text-2xl font-semibold tracking-tight text-center text-gray-900 sm:text-2xl md:pt-4 '>Your Orders</h2>
    </div>

  

<table class="border-separate border border-slate-400 m-auto  md:mt-8">
  <thead>
    <tr>
      <th class="border border-slate-300 p-3 md:px-12">Order id</th>
      <th class="border border-slate-300 p-3 md:px-12">Customer name</th>
      <th class="border border-slate-300 p-3 md:px-12">Order date</th>
      <th class="border border-slate-300 p-3 md:px-12">Product name</th>
      <th class="border border-slate-300 p-3 md:px-12">Change Status</th>
    </tr>
  </thead>
  <tbody> 
    <tr>
      <td class="border border-slate-300 p-3 md:px-12">111</td>
      <td class="border border-slate-300 p-3 md:px-12">Ashba</td>
      <td class="border border-slate-300 p-3 md:px-12">13 january 2023</td>
      <td class="border border-slate-300 p-3 md:px-12">shampo</td>
      <td class="border border-slate-300 p-3 md:px-12">
        <select className='inline p-2 bg-green-100 border-2 rounded-2xl '>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </td>
    </tr>
    <tr>
      <td class="border border-slate-300 p-3 md:px-12">111</td>
      <td class="border border-slate-300 p-3 md:px-12">Ashba</td>
      <td class="border border-slate-300 p-3 md:px-12">13 january 2023</td>
      <td class="border border-slate-300 p-3 md:px-12">shampo</td>
      <td class="border border-slate-300 p-3 md:px-12">
        <select className='inline p-2 bg-green-100 border-2 rounded-2xl '>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </td>
    </tr>
    <tr>
      <td class="border border-slate-300 p-3 md:px-12">111</td>
      <td class="border border-slate-300 p-3 md:px-12">Ashba</td>
      <td class="border border-slate-300 p-3 md:px-12">13 january 2023</td>
      <td class="border border-slate-300 p-3 md:px-12">shampo</td>
      <td class="border border-slate-300 p-3 md:px-12">
        <select className='inline p-2 bg-green-100 border-2 rounded-2xl '>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </td>
    </tr>
   
  </tbody>
</table>

    
    </>
  )
}

export default Orders